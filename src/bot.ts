import * as fs from "fs";
import * as path from "path";
import { getDocument } from "pdfjs-dist";
import { Client, LocalAuth, Message } from "whatsapp-web.js";
const qrcode = require("qrcode");
import { askChatGPT } from "./services/chatgptService";

const QR_CODE_PATH = path.join(__dirname, "whatsapp-qr.png");

// Store message history (max 10 messages per group)
const messageHistory = new Map<string, string[]>();

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { args: ["--no-sandbox"] },
});

client.on("qr", async (qr: string) => {
    console.log("Generating QR code...");
    try {
        await qrcode.toFile(QR_CODE_PATH, qr, { width: 300 });
        console.log(`✅ QR code saved at: ${QR_CODE_PATH}`);
    } catch (err) {
        console.error("❌ Error generating QR code:", err);
    }
});

client.on("ready", () => {
    console.log("✅ Bot is ready!");
});

client.on("message", async (msg: Message) => {
    const chat = await msg.getChat();
    const groupId = chat.id._serialized; // Unique ID for each group or chat

    // Save the last 10 messages
    if (!messageHistory.has(groupId)) {
        messageHistory.set(groupId, []);
    }
    const history = messageHistory.get(groupId)!;
    history.push(msg.body);
    if (history.length > 10) history.shift(); // Keep only the last 10 messages

    // Handle text messages with AI
    if (msg.body.includes("@212653184219")) {
        console.log(`📩 Mentioned by ${msg.from}: ${msg.body}`);
        if (!msg.hasMedia){
        const formattedHistory = history.join("\n");
        const prompt = `Previous messages:\n${formattedHistory}\n\nUser: ${msg.body.replace("@212653184219", "").trim()}\nAI: `;

        const response = await askChatGPT(prompt);
        msg.reply(response);

    }else {
        console.log("📎 Attachment detected. Processing...");

        try {
            // Download the attachment
            const media = await msg.downloadMedia();

            // Define file type and extension
            const fileType = media.mimetype.split("/")[0]; // "image", "video", "audio", etc.
            const fileExt = media.mimetype.split("/")[1]; // "png", "mp4", "pdf", etc.

            // Save the file locally
            const filePath = path.join(__dirname, `received-file.${fileExt}`);
            fs.writeFileSync(filePath, media.data, "base64");
            console.log(`✅ File saved: ${filePath}`);

            // If it's a PDF, extract text and send to GPT
            if (fileExt === "pdf") {
                const extractedText = await extractTextFromPDF(filePath);
                console.log("📄 Extracted PDF text:", extractedText);

                const prompt = `The following text was extracted from a PDF:\n\n${extractedText}\n\nUser:${msg.body.replace("@212653184219", "").trim()}\nAI: `;

                const response = await askChatGPT(prompt);
                history.push(prompt);
                msg.reply(response);

            }

        } catch (err) {
            console.error("❌ Error processing attachment:", err);
            client.sendMessage(msg.from, "❌ Failed to process the file.");
        }
    }
}});

client.initialize();

/**
 * Extract text from a PDF file using pdfjs-dist
 * @param filePath - The local path of the PDF file
 * @returns {Promise<string>} - The extracted text
 */


/**
 * Extracts text from a PDF file.
 * @param filePath - The path to the PDF file.
 * @returns {Promise<string>} - Extracted text from the PDF.
 */
async function extractTextFromPDF(filePath: string): Promise<string> {
    try {
        const fileData = fs.readFileSync(filePath);
        const pdf = await getDocument({ data: new Uint8Array(fileData) }).promise;
        let text = "";

        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const content = await page.getTextContent();
            text += content.items.map((item: any) => item.str).join(" ") + "\n";
        }

        return text;
    } catch (error) {
        console.error("❌ Error extracting text from PDF:", error);
        return "Error processing PDF.";
    }
}



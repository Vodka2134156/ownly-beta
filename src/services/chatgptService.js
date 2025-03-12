const { OpenAI } =require( "openai");
const {dotenv} =require( "dotenv");

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Ensure this is set in .env
});

const ASSISTANT_ID = process.env.ASSISTANT_ID || "asst_I0ujlEMUG35b6rqGKkDAZmDv";

/**
 * Sends a message to OpenAI Assistant.
 * @param {string} message - The user's message.
 * @param {string} [threadId] - (Optional) The conversation thread ID.
 * @returns {Promise<string>} - The assistant's response.
 */
export async function askChatGPT(message, threadId) {
    try {
        // If no thread exists, create one
        if (!threadId) {
            const thread = await openai.beta.threads.create();
            threadId = thread.id;
        }

        // Send message to OpenAI Assistant
        await openai.beta.threads.messages.create(threadId, {
            role: "user",
            content: message,
        });

        // Run the Assistant
        const run = await openai.beta.threads.runs.create(threadId, {
            assistant_id: ASSISTANT_ID,
        });

        // Poll until the response is ready
        while (true) {
            const runStatus = await openai.beta.threads.runs.retrieve(threadId, run.id);
            if (runStatus.status === "completed") break;
            if (runStatus.status === "failed") throw new Error("Assistant run failed.");
            await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait 2 sec
        }

        // Fetch response messages
        const messages = await openai.beta.threads.messages.list(threadId);

        // Extract text-based responses from OpenAI Assistant
        const lastMessage = messages.data
            .find((msg) => msg.role === "assistant")
            ?.content.find((block) => "text" in block)?.text?.value;

        return lastMessage || "No response from AI.";
    } catch (error) {
        console.error("❌ Error in OpenAI Assistants API:", error);
        return "I'm having trouble processing your request.";
    }
}

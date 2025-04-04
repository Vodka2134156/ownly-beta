require('dotenv').config();
const axios = require('axios');
const fs = require('fs').promises;
const path = require('path');
const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode");
const CACHE_FILE = path.join(__dirname, 'embeddings_cache.json');
const cheerio = require('cheerio');
const {askgpt, askChatGPT} = require("./services/chatgptService")
let {UsefulClauseData,faqData,faqCodeData}= require("./faqdata")
let embeddingCache = {};

// Load OpenAI API key from .env
const OPENAI_API_KEY = "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";
// Define FAQ data (example FAQ for brochures; you can add more as needed)


  faqData.push(...UsefulClauseData);
  faqData.push(...faqCodeData)
// Function to calculate cosine similarity
async function loadCache() {
    try {
      const data = await fs.readFile(CACHE_FILE, 'utf8');
      embeddingCache = JSON.parse(data);
    } catch (error) {
      if (error.code === 'ENOENT') {
        // File does not exist, so start with an empty cache
        embeddingCache = {};
      } else {
        console.error("Error loading cache:", error);
        embeddingCache = {};
      }
    }
  }
  
  async function saveCache() {
    try {
      await fs.writeFile(CACHE_FILE, JSON.stringify(embeddingCache, null, 2), 'utf8');
    } catch (error) {
      console.error("Error saving cache:", error);
    }
  }
  
  function cosineSimilarity(vecA, vecB) {
    let dotProduct = 0, magA = 0, magB = 0;
    for (let i = 0; i < vecA.length; i++) {
      dotProduct += vecA[i] * vecB[i];
      magA += vecA[i] ** 2;
      magB += vecB[i] ** 2;
    }
    return dotProduct / (Math.sqrt(magA) * Math.sqrt(magB));
  }
  
  // Function to get embedding from OpenAI
  async function getEmbedding(text) {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/embeddings",
        { input: text, model: "text-embedding-ada-002" },
        { headers: { "Authorization": `Bearer ${OPENAI_API_KEY}`, "Content-Type": "application/json" } }
      );
      return response.data.data[0].embedding;
    } catch (error) {
      console.error("Error fetching embedding:", error.response ? error.response.data : error.message);
    }
  }
  
 
  async function generateFAQEmbeddings() {
    await loadCache();
    let i =0
    for (let item of faqData) {
      if (embeddingCache[item.question]) {
        // Use cached embedding
        item.embedding = embeddingCache[item.question];
      } else {
        i+=1
        console.log(i)
        // Generate embedding and update cache
        item.embedding = await getEmbedding(item.question);
        embeddingCache[item.question] = item.embedding;
      }
    }
    
    await saveCache();
    console.log("FAQ embeddings are loaded and cached successfully!");
  }
  
  // Function to generate AI response when no FAQ match is found
  async function generateAIResponse(query) {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a chatbot for Eagle Software. Answer the user's question clearly and concisely." },
            { role: "user", content: query }
          ],
          max_tokens: 150
        },
        { headers: { "Authorization": `Bearer ${OPENAI_API_KEY}`, "Content-Type": "application/json" } }
      );
      return response.data.choices[0].message.content.trim();
    } catch (error) {
      console.error("Error generating AI response:", error.response ? error.response.data : error.message);
      return "I'm sorry, I couldn't find an answer to your question.";
    }
  }
 
  async function generateAIResponseForres(query) {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: `your job is to return only the link as a string`
            },
            {
              role: "user",
              content: `${query}`
            }
          ],
          max_tokens: 3000
        },
        { headers: { "Authorization": `Bearer ${OPENAI_API_KEY}`, "Content-Type": "application/json" } }
      );
      return response.data.choices[0].message.content.trim();
    } catch (error) {
      console.error("Error generating AI response:", error.response ? error.response.data : error.message);
      return "I'm sorry, I couldn't find an answer to your question.";
    }
  }
  async function generateAnswerFromLink(link, question,prompt,answer) {
    try {
        
      const response = await axios.get(link);
     
      const html = response.data;
      const contacts = ``
  
      // Step 2: Load HTML into Cheerio for parsing
      const $ = cheerio.load(html);
  
      // Try to extract article text, fallback to body text if not found
      let articleText = $('article').text().trim();
      if (!articleText) {
        articleText = $('body').text().trim();
      }
     
  
      // Try to extract article text, fallback to body text if not found
      
      // Step 3: Construct the prompt including the article content and question
      const prompt = `Using the article content below, answer the following question.
  
  Article content:
  ${articleText}
  
  Question: ${question}
  
  Please provide a clear and concise explanation and include the following link at the end: ${link} and contact that match the situation exepertise from ${contacts}`;
  
      // Step 4: Call OpenAI's API to generate a response
      const openAIResponse = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "You are a helpful chatbot for Eagle Software. Provide answers based strictly on the provided article content."
            },
            {
              role: "user",
              content: `past bot answer : ${answer}, user :${prompt}`
            }
          ],
          max_tokens: 3000
        },
        {
          headers: {
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
            "Content-Type": "application/json"
          }
        }
      );
  
      // Step 5: Return the generated answer
      return openAIResponse.data.choices[0].message.content.trim();
    } catch (error) {
      console.error("Error generating answer:", error);
      return prompt
      return "I'm sorry, I couldn't fetch or generate an answer from the article.";
    }
  }
  // Function to find the best matching FAQ
  async function findBestMatch(userQuery) {
    const queryEmbedding = await getEmbedding(userQuery);
    
    let bestMatch = null;
    let bestScore = -1;
  
    for (let faq of faqData) {
      const score = cosineSimilarity(queryEmbedding, faq.embedding);
      if (score > bestScore) {
        bestScore = score;
        bestMatch = faq;
      }
    }
  
    // If confidence is high, return FAQ response
    if (bestMatch && bestScore > 0.8) {
      return bestMatch.response;
    }
  
    // Otherwise, generate an AI response
    return await generateAIResponse(userQuery);
  }
  
  
  const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { args: [ '--no-sandbox',
      '--disable-setuid-sandbox'] },
  });
  
  client.on("qr", async (qr) => {
    console.log("Generating QR code...");
    try {
      const qrPath = path.join(__dirname, "whatsapp-qr.png");
      await qrcode.toFile(qrPath, qr, { width: 300 });
      console.log(`✅ QR code saved at: ${qrPath}`);
    } catch (err) {
      console.error("❌ Error generating QR code:", err);
    }
  });
  
  client.on("ready", () => {
    console.log("✅ WhatsApp Bot is ready!");
  });
  
  client.on("message", async (msg) => {
    try { 
      if (msg.type === "ptt") {
        console.log("🎤 Voice message detected!");
     
      }
  
        if (msg.hasQuotedMsg) {
            const quotedMsg = await msg.getQuotedMessage(); // Fetch the quoted message
            console.log(quotedMsg.id.fromMe)
            if (quotedMsg &&quotedMsg.id.fromMe) {
                console.log(`Received message from ${msg.from}: ${msg.body}`);
                const response = await findBestMatch(msg.body);
                if(response.includes("trademe")){
                  msg.reply(await askChatGPT(`bot : ${quotedMsg.body} , user : ${msg.body}`));
              }else{
                const link= await generateAIResponseForres(response,msg.body,quotedMsg.body);
                msg.reply(await generateAnswerFromLink(link, msg.body,response,quotedMsg.body))}
            } 
        }else{


      if (msg.body.includes("@212653184219")) {    
        if (msg.body && !msg.hasMedia) {
          console.log(`Received message from ${msg.from}: ${msg.body}`);
          const response = await findBestMatch(msg.body);
          if(response.includes("trademe")){
            msg.reply(await askChatGPT( msg.body));
        }else{
          const link= await generateAIResponseForres(response,msg.body);
          msg.reply(await generateAnswerFromLink(link, msg.body,response))}
        }
      }}
    } catch (error) {
      if (error.message.includes("Could not get the quoted message")) {
        console.log("Ignored quoted message error:", error.message);
      } else {
        console.error("Error handling message:", error);
      }
    }
  });
  
  // Generate FAQ embeddings then initialize WhatsApp client
  (async () => {
    client.initialize();
    
    await generateFAQEmbeddings();
  })();

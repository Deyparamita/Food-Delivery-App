import express from "express";
import chat from "../chatJson/chat.json" assert { type: "json" };


const chatbotRoute = express.Router();

chatbotRoute.post('/', (req, res) => {
  try {
    const userMessage = req.body.message.trim().toLowerCase(); 
    let botResponse = "I'm not sure about that. Can you ask something else?";
    
    if (!userMessage) {
      botResponse = "Write something";
    } else {
      for (let query of chat.queries) {
        for (let pattern of query.patterns) {
          if (userMessage.includes(pattern)) {
            const responses = query.responses;
            botResponse = responses[Math.floor(Math.random() * responses.length)];
            break;
          }
        }
      }
    }
    
    res.json({ response: botResponse });
  } catch (error) {
    console.error('Error in /chatbot route:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default chatbotRoute;

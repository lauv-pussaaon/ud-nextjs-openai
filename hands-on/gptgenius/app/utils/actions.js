"use server";

import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export const generateChatResponse = async (chatMessages) => {
    try {
        const response = await openai.chat.completions.create({
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                ...chatMessages,
            ],
            model: "gpt-3.5-turbo",
            temperature: 0,
            max_tokens: 100,
        });
        return response.choices[0].message;
    } catch (error) {
        throw new Error("Failed to generate chat response " + error.message);
    }
};

"use server";

import OpenAI from "openai";
import { generate_tour_program_query } from "./prompts";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function generateChatResponse(chatMessages) {
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
}

export async function generateTourResponse({ city, country }) {
    const query = generate_tour_program_query(city, country);
    try {
        const response = await openai.chat.completions.create({
            messages: [
                { role: "system", content: "you are a tour guide" },
                {
                    role: "user",
                    content: query,
                },
            ],
            model: "gpt-3.5-turbo",
            temperature: 0,
        });

        const tourData = JSON.parse(response.choices[0].message.content);
        return tourData.tour;
    } catch (error) {
        return null;
    }
}

export async function getExistingTour({ city, country }) {
    return null;
}

export async function createNewTour(tour) {
    return null;
}

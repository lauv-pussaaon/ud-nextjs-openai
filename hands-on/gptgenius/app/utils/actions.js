"use server";

import OpenAI from "openai";
import prisma from "./db";
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
    return prisma.tour.findUnique({
        where: {
            city_country: {
                city,
                country,
            },
        },
    });
}

export async function createNewTour(tour) {
    return prisma.tour.create({
        data: tour,
    });
}

export async function getAllTours(searchTerm) {
    if (!searchTerm) {
        const tours = await prisma.tour.findMany({
            orderBy: {
                city: "asc",
            },
        });
        return tours;
    } else {
        const tours = await prisma.tour.findMany({
            where: {
                OR: [
                    {
                        city: {
                            contains: searchTerm,
                        },
                    },
                    {
                        country: {
                            contains: searchTerm,
                        },
                    },
                ],
            },
            orderBy: {
                city: "asc",
            },
        });
        return tours;
    }
}

export async function getSingleTour(id) {
    return prisma.tour.findUnique({
        where: { id },
    });
}

export async function generateTourImage({ city, country }) {
    try {
        const tourImage = await openai.images.generate({
            prompt: `a panoramic view of teh ${city} ${country}`,
            n: 1,
            size: "512x512",
        });
        return tourImage?.data[0]?.url;
    } catch (error) {
        return null;
    }
}

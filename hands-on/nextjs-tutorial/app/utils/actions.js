"use server";

import prisma from "../utils/db";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getAllTasks() {
    const data = await prisma.task.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
    return data;
}

export async function getTask(id) {
    const data = await prisma.task.findUnique({ where: { id } });
    return data;
}

export async function createTask(task) {
    await prisma.task.create({ data: task });
    revalidatePath("/tasks");
}

export async function createTaskServer(prevState, formData) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const content = formData.get("content");
    const task = z.object({
        content: z.string().min(5),
    });
    try {
        task.parse({ content });
        await prisma.task.create({ data: { content } });
        revalidatePath("/tasks");
        return { message: "success" };
    } catch (error) {
        return { error: error.errors.at(0) };
    }
}

export async function updateTask(id, task) {
    await prisma.task.update({ data: task, where: { id } });
    revalidatePath("/tasks");
    redirect("/tasks");
}

export async function deleteTask(id) {
    await prisma.task.delete({ where: { id } });
    revalidatePath("/tasks");
}

"use server";

import prisma from "../utils/db";
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

export async function updateTask(id, task) {
    await prisma.task.update({ data: task, where: { id } });
    revalidatePath("/tasks");
    redirect("/tasks");
}

export async function deleteTask(id) {
    console.log("delete id ", id);
    await prisma.task.delete({ where: { id } });
    revalidatePath("/tasks");
}

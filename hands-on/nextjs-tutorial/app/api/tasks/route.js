import db from "../../utils/db";

export async function GET(request) {
    const tasks = await db.task.findMany();
    return Response.json({ data: tasks });
}

export async function POST(request) {
    const data = await request.json();
    const task = await db.task.create({
        data: {
            content: data.content,
        },
    });

    return Response.json({ data: task });
}

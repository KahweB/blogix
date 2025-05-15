import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const posts = [
        { id: 1, title: " title numba 1", content: "content numba 1" },
        { id: 2, title: " title numba 2", content: "content numba 2" },
        { id: 3, title: " title numba 3", content: "content numba 3" },
    ];

    return new Response(JSON.stringify(posts), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
    });
}

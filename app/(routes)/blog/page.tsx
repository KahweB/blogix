import React from 'react'

interface Post {
    id: number;
    title: string;
    content: string;
}
async function BlogPage() {
    const apiBaseUrl = process.env.NODE_ENV === "production" ? "https://your-production-domain.com" : "http://localhost:3000";
    let posts: Post[] = [];
    try {
        const res = await fetch(`${apiBaseUrl}/api/blog`);
        if (!res.ok) throw new Error(`HTTP ERROR status: ${res.status}`)
        posts = await res.json();
    } catch (e) {
        console.error("API fetch error:", e);
    }


    return (
        <div className='container mx-auto py-8'>
            <h1 className='text-3xl'>Blog Posts</h1>
            <ul className='space-y-4'>
                {posts.map((post: { id: number; title: string; content: string }) => {
                    const { id, title, content } = post;

                    return (
                        <div key={id}>
                            <h1>{title}</h1>
                            <p >{content}</p>
                        </div>
                    )
                }
                )}
            </ul>
        </div >
    )
}

export default BlogPage
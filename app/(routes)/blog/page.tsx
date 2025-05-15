import React from 'react'

async function BlogPage() {
    const res = await fetch("http://localhost:3000/api/blog");
    const posts = await res.json();

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
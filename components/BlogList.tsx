"use client"

import React, { useEffect, useState } from 'react'

const BlogList = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch("http://localhost:3000/api/blog")
            const postsData = await res.json();

            setPosts(postsData);
        }
        fetchPosts();
    }, [])

    return (
        <div>
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
        </div>
    )
}

export default BlogList  
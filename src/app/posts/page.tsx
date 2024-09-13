"use client"
import React, { useEffect, useState } from 'react';

const Posts = () => {
    interface Post {
        "userId": number;
        "id": number;
        "title": string;
        "body": string;
    }
    
    const [posts, setPosts] = useState([]);
    const data = async ()=>{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        setPosts(data)
    }
    useEffect(()=>{
        data()
    }, [])
    
    return (
        <div>
            {
                posts?.map((post: Post)=> <div key={post?.id} className='border border-violet-500 p-4 mt-4'>
                    <p>{post.id}</p>
                    <h2 className='text-violet-600 text-xl'>{post.title}</h2>
                </div>)
            }
        </div>
    );
};

export default Posts;
import { useState } from "react";
import React from 'react';
import { data } from "../../data";
const Blog = () => {
    const [blogs, setBlogs] = useState(data)
    console.log(blogs)
    return <div>
     <h1>blog page</h1>
     <section>
        {blogs.map((blog) => {
            const {id, title, body} = blog
            return <article key={id}>

                <h3>{title}</h3>
                <p>{body}</p>
            </article>
        })}
     </section>
    </div>;
}

export default Blog;
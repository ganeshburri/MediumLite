import { useEffect, useState } from "react";
import axios from "axios";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export interface Blog{
    id: string,
    title: string,
    content: string,
    published: boolean,
    author: {
        name: string
    }
}

export const useBlog = ({ id }: {id: string}) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();
    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blogs/${id}`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        }).then((response) => {
                setBlog(response.data.blog);
                setLoading(false);
            })
    },[id])
    return { loading, blog };
}

export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blogs/bulk`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        }).then((response) => {
                setBlogs(response.data.blogs);
                setLoading(false);
            })
    },[])
    return { loading, blogs };
}
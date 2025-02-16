import { Blog } from "../hooks"
import { AppBar } from "./AppBar"
import { Avatar } from "./BlogCard"

export const FullBlog = ({ blog }: {blog: Blog}) => {
    return(
        <div>
            <AppBar/>
            <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full max-w-screen-xl pt-12">
                <div className="col-span-8">
                    <div className="text-5xl font-extralight">
                        {blog.title}
                    </div>
                    <div className="text-slate-500 pt-2">
                        Posted on Feb 24, 2025
                    </div>
                    <div className="pt-4">
                        {blog.content}
                    </div>
                </div>
                <div className="col-span-4">
                    <div className="text-slate-600 text-lg">
                        Author
                    </div>
                    <div className="flex">
                        <div className="flex flex-col justify-center pr-4">
                            <Avatar size="big" name={blog.author.name}/>
                        </div>
                        <div>
                            <div className="text-xl font-bold">
                                {blog.author.name}
                            </div>
                            <div className="pt-2 text-slate-500">
                                Random catch phase about author's ability to grab the user's attention
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
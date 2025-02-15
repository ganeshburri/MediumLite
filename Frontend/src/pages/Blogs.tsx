import { BlogCard } from "../components/BlogCard"

export const Blogs = () => {
    return(
        <div className="flex justify-center">
            <div className="max-w-xl">
                <BlogCard authorName="Ganesh" title="How an agly website makes $500 per month without affiliate marking" 
                content="How an agly website makes $500 per month without affiliate marking"
                publishedDate="04-23-2000"/>
                <BlogCard authorName="Ganesh" title="How an agly website makes $500 per month without affiliate marking" 
                content="How an agly website makes $500 per month without affiliate marking"
                publishedDate="04-23-2000"/>
                <BlogCard authorName="Ganesh" title="How an agly website makes $500 per month without affiliate marking" 
                content="How an agly website makes $500 per month without affiliate marking"
                publishedDate="04-23-2000"/>
                <BlogCard authorName="Ganesh" title="How an agly website makes $500 per month without affiliate marking" 
                content="How an agly website makes $500 per month without affiliate marking"
                publishedDate="04-23-2000"/>
            </div>
        </div>
    )
}
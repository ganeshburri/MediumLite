interface BlogCardProps {
    authorName: string,
    title: string,
    content: string,
    publishedDate: string
}
export const BlogCard = ({
    authorName, 
    title, 
    content, 
    publishedDate 
}: BlogCardProps) => {
    return(
        <div className="border-b border-slate-200 p-4">
            <div className="flex">
                <div className="flex justify-center flex-col">
                    <Avatar name={authorName} />
                </div>
                <div className="flex justify-center flex-col font-extralight pl-2 text-sm">
                    {authorName} 
                </div>
                <div className="flex justify-center flex-col text-xs text-slate-300 pl-2">
                    &#9679;
                </div>
                <div className="flex justify-center flex-col pl-2 font-thin text-slate-500 text-sm">
                    {publishedDate}
                </div>
            </div>
            <div className="text-xl font-semibold pt-2">
                {title}
            </div>
            <div className="text-md font-thin">
                {content.slice(0,100) + "..."}
            </div>
            <div className="text-slate-500 text-sm font-thin pt-4">
                {`${Math.ceil(content.length/100)} minute(s) read`}
            </div>
        </div>
    )
}

function Avatar({ name }: {name: string}) {
    return(
        <div className="relative inline-flex items-center
        justify-center w-6 h-6 overflow-hidden bg-gray-100
        rounded-full dark:bg-gray-600">
        <span className="font-xs text-gray-600 dark:text-gray-300">
            {name[0]}
        </span>
        </div>
    )
}
import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const AppBar = () => {
    return(
        <div className="flex justify-between border-b px-10 py-2 border-slate-300">
            <Link to="/blogs" className="flex flex-col justify-center font-bold text-xl">
                Medium
            </Link>
            <div>
                <Avatar size="big" name={"Ganesh"} />
            </div>
        </div>
    )
}
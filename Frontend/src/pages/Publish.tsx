import { AppBar } from "../components/AppBar"
import { useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import axios from "axios";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
import CustomAlert from "../components/CustomAlert";


export const Publish = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
    const [alert, setAlert] = useState({message: "", type: ""})

    const submitHandler = async () => {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/blogs`, {
                title,
                content: description
            }, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            });
            setAlert({message: "Blog published successfully", type: "success"})
            setTimeout(()=> navigate(`/blogs/${response.data.id}`),2000);
        } catch (error) {
            // @ts-ignore
            setAlert({message: error?.response?.data?.message || "Something went wrong, Please try again later!", type: "error"})
            console.log(error);
        }
    };

    return(
        <>
        <div>
            <AppBar/>
            <div className="flex justify-center w-full pt-8 p-2">
                <div className="max-w-screen-lg w-full">
                <input type="text"className="border border-gray-300 text-gray-900
                text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500
                block w-full p-2.5" placeholder="Title"
                onChange={(e) => { setTitle(e.target.value) }}
                />
                <TextEditor onChange={(e) => {
                    setDescription(e.target.value)
                }} />
                <button onClick={submitHandler} type="submit" className=" inline-flex items-center 
                px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4
                focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                >Publish post
                </button>
                </div>
            </div>
        </div>
        {alert.message &&
            <CustomAlert
                message={alert.message}
                type={alert.type}
                onClose={() => setAlert({ message: "", type: "" })}
            />
        }
        </>
    )
}

function TextEditor({ onChange }: {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void}) {
    return <div className="mt-2">
        <div className="w-full mb-4 ">
            <div className="flex items-center justify-between border border-gray-300 rounded-lg">
                <div className="my-2 bg-white rounded-b-lg w-full">
                    <label className="sr-only">Publish post</label>
                    <textarea onChange={onChange} id="editor" rows={8} className="focus:outline-none
                    block w-full px-0 text-xl text-gray-800 bg-white border-0 pl-2" placeholder="Write an article..." 
                    required
                    />
                </div>
            </div>
        </div>
    </div>
}
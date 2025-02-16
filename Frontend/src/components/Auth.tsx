import { Link, useNavigate } from "react-router-dom"
import { Input } from "./Input"
import { useState } from "react"
import { SignupInput, SigninInput } from "@ganeshvarma1/medium-common"
import { Button } from "./Button"
import axios from "axios";
const BACKEND_URL:string = import.meta.env.VITE_BACKEND_URL;

type AuthProps = { type: "signup" | "signin" };
type AuthInputs = SignupInput | SigninInput;

export const Auth = ({type}: AuthProps ) =>{
    const navigate = useNavigate();
    const initialState: AuthInputs = 
        type === "signup"
            ? { name: "", email: "", password: "" }
            : {email: "", password: ""};

    const [postInputs, setPostInputs] = useState<AuthInputs>(initialState);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPostInputs((c) => ({
            ...c, [e.target.id.toLowerCase()]: e.target.value
        }));
    };

    const submitHandler = async () => {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/users/${type}`,
                postInputs,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const { jwt, name } = response.data;
            localStorage.setItem("token", jwt);
            localStorage.setItem("name", name);
            navigate("/blogs");
        } catch (error) {
            alert("Error while signing");
            console.log(error);
        }
    };

    return(
        <div className="h-screen flex justify-center items-center">
            <div className="flex flex-col justify-center p-2">
                <div className="p-5">
                    <h1 className="text-2xl md:text-3xl font-extrabold">{type === "signup"?"Create an account":"Login to your account"}</h1>
                    <p className="text-slate-400">
                    {type === "signup"?"Already have an account?":"Don't have an account?"} <Link className="underline"
                    to={type === "signup"?"/signin":"/signup"}>{type === "signup"?"Login":"Create one"}</Link> </p>
                </div>
                {type === "signup" && <Input label="Name" placeholder="Enter your name"
                    onChange={changeHandler}
                />}
                <Input label="Email" placeholder="Enter your email"
                    onChange={changeHandler}
                />
                <Input label="Password" type={"password"} placeholder="Enter your password"
                    onChange={changeHandler}
                />
                <Button label={type === "signup"?"Sign up":"Sign in"} onClick={submitHandler}/>
            </div>
        </div>
    )
}
import { ChangeEvent } from "react"

interface InputProps{
    label: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    type?: string
}

export const Input = ({label, placeholder, onChange, type}: InputProps) =>{
    return(
            <div className="pb-3">
                <label htmlFor={label} className="block mb-2 text-sm 
                font-medium text-gray-900">{label}
                </label>
                <input onChange={onChange} type={type || "text"} id={label} className="border
                border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                focus:border-blue-500 block w-full p-2.5 
                dark:border-gray-600 dark:placeholder-gray-400 
                dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder={placeholder} required
                />
            </div>
    )
}
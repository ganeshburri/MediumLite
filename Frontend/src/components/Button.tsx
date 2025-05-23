interface ButtonType{
    label: string,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({label, onClick}: ButtonType) =>{
    return (
    <button onClick={onClick} type="button" 
    className="w-full text-white bg-gray-800 hover:bg-gray-900
        focus:ring-4 focus:ring-gray-300 
        font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-4">
            {label}
    </button>
    )
}
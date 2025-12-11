function Button({ text }: { text:string }) {
    return (
        <button className="bg-blue-600 cursor-pointer p-2 w-full text-white rounded-full">{text}</button>  
    )
}

export default Button
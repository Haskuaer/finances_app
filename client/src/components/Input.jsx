const Input = ({children, type, placeholder}) => {

    return(
        <input 
            type={type}
            placeholder={placeholder}
            className="w-full p-2 border rounded-md"
        />
    )
}

export default Input
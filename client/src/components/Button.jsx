function Button(props) {

    return(
        <button 
            type={props.type}
            className="
            w-full
            bg-[var(--color-main)]
            hover:bg-[var(--color-dark-1)]
            p-2 
            border-2 
            rounded-lg
            transition-colors
            duration-300
            ease-in-out"
        >
            {props.children}
        </button>
    )
}

export default Button
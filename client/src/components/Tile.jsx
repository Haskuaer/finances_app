const Tile = (props) => {

    return(
        <div 
        className="
        px-4
        py-10
        w-full
        max-w-md
        flex
        flex-col
        justify-center
        items-center
        border-1
        rounded-lg"
        >
            {props.children}
        </div>
    )
}

export default Tile
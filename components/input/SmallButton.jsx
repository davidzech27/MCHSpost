const SmallButton = ({ children, className, onClick, ...props }) => {
    return (
        <button onClick={(e) => { e.stopPropagation(); onClick() }} className={`h-8 min-w-[2rem] rounded-md text-base tracking-wider transition duration-100 ${className}`} {...props}>
            {children}
        </button>
    )
}

export default SmallButton
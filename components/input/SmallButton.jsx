const SmallButton = ({ children, className, onClick, ...props }) => {
    return (
        <button onClick={onClick} className={`h-8 min-w-[2rem] rounded-md transition duration-100 ${className}`} {...props}>
            {children}
        </button>
    )
}

export default SmallButton
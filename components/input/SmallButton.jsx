const SmallButton = ({ children, className, onClick }) => {
    return (
        <button onClick={onClick} className={`h-8 min-w-[2rem] rounded-md transition duration-100 ${className}`}>
            {children}
        </button>
    )
}

export default SmallButton
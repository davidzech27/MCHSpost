const Card = ({ children, className }) => {
    return (
        <div className={`h-min w-full p-6 rounded-3xl ${className}`}>
            {children}
        </div>
    )
}

export default Card
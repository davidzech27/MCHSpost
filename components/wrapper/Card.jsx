const Card = ({ children, className, ...props }) => {
    return (
        <div className={`w-full p-6 rounded-3xl ${className}`} {...props}>
            {children}
        </div>
    )
}

export default Card
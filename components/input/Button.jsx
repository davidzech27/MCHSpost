const Button = ({ children, className, onClick, ...props }) => {
    return (
        <button onClick={onClick} className={`h-20 w-full rounded-2xl text-3xl tracking-wide transition duration-100 ${className}`} {...props}>
            {children}
        </button>
    )
}
 
export default Button
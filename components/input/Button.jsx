const Button = ({ children, className, ...props }) => {
    return (
        <button className={`h-20 w-full rounded-2xl text-3xl tracking-wide transition duration-100 ${className}`} {...props}>
            {children}
        </button>
    )
}
 
export default Button
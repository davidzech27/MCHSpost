const Column = ({ children, className }) => {
    return (
        <div className={`flex flex-col content-start gap-2.5 ${className ?? ""}`}>
            {children}
        </div>
    )
}

export default Column
const TextInput = ({ value, setValue, placeholder, className }) => {
    return (
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder} className={`h-fit px-4 py-3 rounded-xl text-xl placeholder-subtext focus:placeholder-text transition duration-100 outline-none resize-none ${className}`} />
    )
}
 
export default TextInput
const TextArea = ({ value, setValue, placeholder, className }) => {
    return (
        <textarea value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder} className={`w-full pt-3 px-4 rounded-xl text-xl placeholder-subtext focus:placeholder-text transition duration-100 outline-none resize-none ${className}`} />
    )
}
 
export default TextArea
const Avatar = ({ user, className }) => {
    return (
        <img src={user.photo} alt={`${user.name}'s avatar`} className={`rounded-xl transition duration-100 hover:opacity-[0.85] ${className}`} />
    )
}
 
export default Avatar
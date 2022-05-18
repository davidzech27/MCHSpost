import Link from "next/link"

const AboutPageButton = () => {
    return (
        <Link href="/about" passHref>
            <button className="h-min w-full py-6 rounded-3xl bg-surface1 hover:bg-hover text-3xl transition duration-100">
                <span className="text-green">MCHS</span>
                <span className="text-yellow">post</span>
            </button>
        </Link>
    )
}
 
export default AboutPageButton
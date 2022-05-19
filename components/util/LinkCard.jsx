import Link from "next/link"
import Card from "/components/util/Card"

const LinkCard = ({ children, className, href }) => {
    return (
        <Link href={href} passHref>
            <div>
                <Card className={`cursor-pointer transition duration-100 ${className}`}>
                    {children}
                </Card>
            </div>
        </Link>
    )
}

export default LinkCard
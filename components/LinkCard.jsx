import Link from "next/link"
import Card from "/components/Card"

const LinkCard = ({ children, className, href }) => {
    return (
        <Link href={href} passHref>
            <div>
                <Card className={className}>
                    {children}
                </Card>
            </div>
        </Link>
    )
}

export default LinkCard
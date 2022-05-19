import Link from "next/link"
import Button from "/components/util/Button"

const LinkButton = ({ children, className, href }) => {
    return (
        <Link href={href} passHref>
            <div>
                <Button className={className}>
                    {children}
                </Button>
            </div>
        </Link>
    )
}
 
export default LinkButton
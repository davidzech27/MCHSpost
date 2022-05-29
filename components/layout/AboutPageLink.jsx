import LinkCard from "/components/wrapper/LinkCard"

const AboutPageLink = () => {
    return (
        <LinkCard href="/about" className="h-21 bg-surface1 hover:bg-surface3 text-3xl text-center select-none px-0">
            <span className="text-green">MCHS</span>
            <span className="text-yellow">post</span>
        </LinkCard>
    )
}
 
export default AboutPageLink
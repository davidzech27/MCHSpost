import LinkCard from "/components/LinkCard"

const AboutPageLink = () => {
    return (
        <LinkCard href="/about" className="bg-surface1 hover:bg-hover text-3xl text-center select-none px-0">
            <span className="text-green">MCHS</span>
            <span className="text-yellow">post</span>
        </LinkCard>
    )
}
 
export default AboutPageLink
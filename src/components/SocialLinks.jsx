import FacebookLink from "../assets/img/footer-facebook.png"
import TwitterLink from "../assets/img/footer-twitter.png"
import YoutubeLink from "../assets/img/footer-youtube.png"
import PinterestLink from "../assets/img/footer-pinterest.png"
import PeriscopeLink from "../assets/img/footer-periscope.png"

export default function SocialLinks() {
    return (
        <><a href=""><img src={FacebookLink} /></a>
            <a href=""><img src={TwitterLink} /></a>
            <a href=""><img src={YoutubeLink} /></a>
            <a href=""><img src={PinterestLink} /></a>
            <a href=""><img src={PeriscopeLink} /></a>
        </>
    )
}
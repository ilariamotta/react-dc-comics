import "./Mainbottom.css"
import digitalcomics from "../assets/img/buy-comics-digital-comics.png"
import dcmerchandise from "../assets/img/buy-comics-merchandise.png"
import subscription from "../assets/img/buy-comics-subscriptions.png"
import comicshoplocator from "../assets/img/buy-comics-shop-locator.png"
import dcpowervisa from "../assets/img/buy-dc-power-visa.svg"

export default function Mainbottom () {
    return (
        <section className="bg-blue">
            <div className="container d-flex justify-content-evenly text-white text-transform align-items">
            <div className="col d-flex gap-15 no-wrap"><img src={digitalcomics}/>digital comics</div>
            <div className="col d-flex gap-15 no-wrap"><img src={dcmerchandise}/>dc merchandise</div>
            <div className="col d-flex gap-15 no-wrap"><img src={subscription}/>subscription</div>
            <div className="col d-flex gap-15 no-wrap"><img src={comicshoplocator}/>comic shop locator</div>
            <div className="col d-flex gap-15 no-wrap"><img src={dcpowervisa}/>dc power visa</div>
        </div>
        </section>
    )
}
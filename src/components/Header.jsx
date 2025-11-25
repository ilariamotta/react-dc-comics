import "./Header.css"
import Logo from "./Logo.jsx"

export default function Header() {
    return (
        <section className="bg-white">
        <header className="d-flex container justify-space-between">
            <Logo/>
            <ul className="d-flex justify-space-between nav-link">
                <li><a href="">characters</a></li>
                <li><a href="">comics</a></li>
                <li><a href="">movies</a></li>
                <li><a href="">tv</a></li>
                <li><a href="">games</a></li>
                <li><a href="">collectibles</a></li>
                <li><a href="">videos</a></li>
                <li><a href="">fans</a></li>
                <li><a href="">news</a></li>
                <li><a href="">shop</a></li>
            </ul>
        </header>
        </section>
    )
}
import LogoImg from "../assets/img/dc-logo.png"
import style from "./Logo.module.css"

export default function Logo() {
    return <img className={style.logo} src={LogoImg} alt=""/>
}
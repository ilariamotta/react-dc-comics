import "./Maintop.css"
import comics from "../assets/comics"

console.log(comics)

export default function Maintop() {
    return (
        <section className="bg-black">
            <main className="d-flex container">
                <h1>current series</h1>
                <div className="d-flex wrap gap-20">
                    {comics.map((curProduct) =>
                        <div className="col-main" key={curProduct.id}>
                            <img src={curProduct.thumb} alt={curProduct.title} />
                            <p className="comics-title">{curProduct.title}</p></div>)}
                
                <div className="button-wrapper"><button className="load-button">LOAD MORE</button></div>
                </div>
                
            </main>
        </section>
    )
}


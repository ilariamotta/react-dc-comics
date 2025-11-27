import "./Maintop.css"
import comics from "../assets/comics"
import ComicCard from "./ComicCard"


export default function Maintop() {
    return (
        <section className="bg-black">
            <main className="d-flex container">
                <h1>current series</h1>
                <div className="d-flex wrap gap-20">
                    {comics.map((comic) => (
                        <ComicCard key={comic.id}
                            thumb={comic.thumb}
                            title={comic.title} />
                    ))}

                    <div className="button-wrapper"><button className="load-button">LOAD MORE</button></div>
                </div>

            </main>
        </section>
    )
}


import Card from "./Card"

function CardList ({ cards }) {
    const displayCards = cards.map(card => <Card card={ card } key={ card.id }/>)
    return(
        <div className="grid-container">
            {displayCards}
        </div>
    )
}
export default CardList
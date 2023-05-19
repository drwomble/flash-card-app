import { useState } from 'react'

function Card ({ card }) {
    const [flipCard, setFlipCard] = useState(false)

    return(
        <div className='flash-card' onClick={() => setFlipCard(!flipCard)}>
            {flipCard ? card.answer : card.question}
        </div>
    )
}

export default Card 
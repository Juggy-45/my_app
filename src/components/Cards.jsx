import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/people02.png'
import Card from './Card'


function Cards() {
    return (
        <div><Card
            img={Single}
            title="Single User"
            price="$69"
        />
        </div>


    )
}

export default Cards


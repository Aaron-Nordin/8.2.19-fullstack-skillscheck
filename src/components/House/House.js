import React from 'react'

export default function House(houseObj) {
    return (
        <div>
            <h1>{JSON.stringify(houseObj.house)}</h1>
        </div>
    )
}

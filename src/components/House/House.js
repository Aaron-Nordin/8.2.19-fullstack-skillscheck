import React from 'react'

export default function House(houseObj) {
    return (
        <div>
            <h3>{JSON.stringify(houseObj.house)}</h3>
        </div>
    )
}

import React from 'react'

const isIncome = Math.round(Math.random());

const InfoCard = () => {
    return (
        <div style={{ textAlign: 'center', padding: '0 10%' }}>
            Try Saying: <br />
            Add {isIncome ? " Income " : " Expense "} 
            ${isIncome ? " 100 " : "50"} in 
            {isIncome ? " Business " : " Home"}
            for {isIncome ? " Monday " : " for next Friday "}
            
        </div>
    )
}

export default InfoCard

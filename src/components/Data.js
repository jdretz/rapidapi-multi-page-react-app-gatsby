import React from 'react'
import axios from 'axios'

const Data = ({ dataId }) => {
    let [quote, setQuote] = React.useState('')

    React.useEffect(() => {
        axios({
            "method": "GET",
            "url": "https://finnhub-realtime-stock-price.p.rapidapi.com/quote",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "finnhub-realtime-stock-price.p.rapidapi.com",
                "x-rapidapi-key": process.env.RAPIDAPI_KEY
            }, "params": {
                "symbol": dataId.toUpperCase()
            }
        })
            .then((response) => {
                setQuote(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [dataId])
    return (
        <>
            <h2>Data View for {dataId.toUpperCase()}</h2>
            <h3>Nested Client-Only Route</h3>
            {quote && <div>
                <table>
                    <caption>Quote as of {new Date(Number(quote.t)*1000).toDateString()} for {dataId.toUpperCase()}</caption>
                    <tr>
                        <th>Current</th>
                        <th>High</th>
                        <th>Low</th>
                        <th>Open</th>
                        <th>Previous Close</th>
                        <th>Time</th>
                    </tr>
                    <tr>
                        <td>{quote.c}</td>
                        <td>{quote.h}</td>
                        <td>{quote.l}</td>
                        <td>{quote.o}</td>
                        <td>{quote.pc}</td>
                        <td>{new Date(Number(quote.t)*1000).toLocaleTimeString()}</td>
                    </tr>
                </table>
            </div>}
        </>
    )
}

export default Data
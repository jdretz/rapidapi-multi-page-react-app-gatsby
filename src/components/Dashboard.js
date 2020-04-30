import React from 'react'
import { Link } from 'gatsby'

const Dashboard = ({children,uri}) => {
    return (
        <div>
            <h2>Data Dashboard</h2>
            <h3>Client-Only Route</h3>
            <nav>
                <Link to={`${uri}/tsla`}>Data for Tesla</Link>
                <Link to={`${uri}/aapl`}>Data for Apple</Link>
            </nav>

            {children}
        </div>
    )
}

export default Dashboard
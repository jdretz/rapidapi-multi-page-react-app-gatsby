import React from 'react'
import Layout from '../components/Layout'
import { Router, Link } from "@reach/router"
import MyInfo from '../components/MyInfo'
import Default from '../components/Default'
import Dashboard from '../components/Dashboard'
import DashboardDefault from '../components/DashboardDefault'
import Data from '../components/Data'

const App = ({location}) => {
    return (
        <Layout>
            <h1>Welcome to the App Page <span>{location.pathname}</span></h1>
            <nav>
                <Link to='/app/info'>Info</Link>
                <Link to='/app/dashboard'>Dashboard</Link>
            </nav>
            <Router basepath="/app">
                <Default path="/" />
                <MyInfo path="/info" />
                <Dashboard path="/dashboard">
                    <DashboardDefault path="/" />
                    <Data path=":dataId" />
                </Dashboard>
            </Router>
        </Layout>
    )
}

export default App;

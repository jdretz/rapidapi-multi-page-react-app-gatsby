import React from 'react';
import Layout from '../components/Layout'

const Marketing = ({location}) => {
  return (
    <Layout>
      <h1>Marketing Page <span>{location.pathname}</span></h1>
      <h2>Static HTML Page</h2>
      <p>Aiming for better SEO</p>
    </Layout>
  )
}

export default Marketing;
import React from 'react'
import AboutMe from '../components/AboutMe'
import Card from '../components/cards/card'
import Layout from '../components/Layout'

const index = () => {
  return (
    <div>
      <Layout sideBard={<Card />} content={<h1 className='flex'><AboutMe/></h1>}></Layout>
    </div>
  )
}

export default index
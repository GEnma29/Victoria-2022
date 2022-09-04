import React from 'react'
import Card from '../components/cards/card'
import Layout from '../components/Layout'

const index = () => {
  return (
    <div>
      <Layout sideBard={<Card />} content={<h1 className='flex min-w-full'>Te Amo mucho fea</h1>}></Layout>
    </div>
  )
}

export default index
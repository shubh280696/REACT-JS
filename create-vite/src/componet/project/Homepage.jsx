import React from 'react'
import Header from './header'
import Body from './body'
import Footer from './footer'

export default function HomePage() {
  return (
    <div style={{textAlign:'center', backgroundColor:'blanchedalmond', border:'4px double black'}}>
        <h1> HomePage</h1>
        <Header />
        <Body/>
        <Footer/>
       

    </div>
  )
}

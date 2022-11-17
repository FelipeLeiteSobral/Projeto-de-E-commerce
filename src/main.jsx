import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Banner from './Banner'
import Features from './Features'
import Footer from './Footer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Banner/>
    <Features/>
    <Footer/>
  </React.StrictMode>
)
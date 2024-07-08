import React from 'react'
import ReactDOM from 'react-dom/client'
import "./style.css"
import Light from "./components/Light"
import Header from './components/Header'


const root = document.querySelector("#root")
ReactDOM.createRoot(root).render(

  <div>
    <Header/>
    <Light/>
  </div>
)


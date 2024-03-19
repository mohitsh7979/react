import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Product from './Products.jsx'
// import Table_data from './Table_data'
// import New_Component from './New_Component'
import './App.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Product />
    {/* <Table_data  /> */}
    {/* New_Component({name="mohit",age = "18"}) */}
    {/* <New_Component  name = "mohit" post = "django" img = "" /> */}
    {/* <New_Component name = "ankit"  post = "45" />
    <New_Component name = "kashish" age = "20" /> */}
  </React.StrictMode>,
)

import './App.css'
import Header from './Header'
import Image from './Image'
import Products from './Products'
import About from './About'
import aboutsixteenclothing from './Data/aboutsixteenclothing.json'

function App() {


  return (
    <>
    <Header />
    <Image title = "NEW ARRIVALS ON SALE" />
    <Products /> 
    <About title = {aboutsixteenclothing.title} description = {aboutsixteenclothing.description} list = {aboutsixteenclothing.list}/>   
    </>
  )
}

export default App;

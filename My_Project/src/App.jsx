import './App.css'
import Header from './Header'
import Image from './Image'
import Products from './Home_Products'
import About from './Home_About'
import aboutsixteenclothing from './Data/aboutsixteenclothing.json'


function App() {


  return (
    <>
    <Header /> 
    <Image title = "This is my lorem" />
    <Products /> 
    <About title = {aboutsixteenclothing.title} description = {aboutsixteenclothing.description} list = {aboutsixteenclothing.list}/>   
    </>
  )
}

export default App;

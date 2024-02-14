import './App.css'
import Divider from './components/Divider/Divider'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Products from './components/Products/Products'
import Story from './components/Story/Story'
import Team from './components/Team/Team'
import Partners from './components/Partners/Partners'

export default function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Divider />
      <Story />
      <Products />
      <Partners />
      <Team />
      <Footer />
    </>
  )
}

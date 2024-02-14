import './Navigation.css'
import logo from '../../assets/Logo.svg'

export default function Navigation() {
  return (
    <nav className='navigation'>
      <a href="#"><img src={logo} alt="PowerPool" className='logo'/></a>
      <ul className='navigation__list'>
        <li><a href="#story" className='navigation__item'>Story</a></li>
        <li><a href="#products" className='navigation__item'>Products</a></li>
        <li><a href="#partners" className='navigation__item'>Partners</a></li>
        <li><a href="#team" className='navigation__item'>Team</a></li>
      </ul>
      <a className='btn navigation__btn'>Go to app</a>
    </nav>
  )
}

import './Footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
      <h2 className='title footer__title'>Power Pool protocol</h2>
      <form className='footer__form'>
        <input type="email" placeholder='Enter Your Email' className='footer__input'/>
        <button className='btn btn--arrow btn--outline footer__btn'><span className='footer__btn__text'>Subscribe</span></button>
      </form>
    </footer>
  )
}

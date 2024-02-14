import './Header.css'

export default function Header() {
  return (
    <header className='header'>
      <div className="invert"></div>
      <div className='header__content'>
        <h1 className='header__title'>Power pool protocol</h1>
        <div className='header__info'>
          <p className='desc header__desc'>
            Decentralized network for guaranteed automatic gasless transaction execution and off-chain computations for Defi/Web3 apps and individuals.
          </p>
          <div className='btns-group header__btns-group'>
            <a href="#" className='btn btn--arrow'>Go to app</a>
            <a href="#" className='btn btn--arrow btn--outline'>Go Alternative links</a>
          </div>
        </div>
      </div>
      <div className='header__img'></div>
    </header>
  )
}

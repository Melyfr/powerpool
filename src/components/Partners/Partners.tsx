import './Partners.css'

export default function Partners() {
  return (
    <section className='partners' id='partners'>
      <h2 className='title partners__title'>Partners</h2>
      <p className='desc partners__desc'>
          The master of multiple programming languages and frameworks, always ready to adapt and overcome any obstacles that may arise. 
      </p>
      <div className='partners__img'>
        <div className="partners__logo"></div>
        <div className="partners__waves">
          <span className="partners__wave"></span>
          <span className="partners__wave"></span>
          <span className="partners__wave"></span>
        </div>
      </div>
    </section>
  )
}

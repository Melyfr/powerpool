import './Story.css'

export default function Story() {
  return (
    <section className='story' id='story'>
      <h2 className='title'>Our story</h2>
      <p className='desc story__desc'>
        PowerPool invented the idea of meta-governance in August 2020 and started building a protocol for accumulating governance power in Defi.
      </p>
      <a href="#" className="btn btn--arrow story__btn">Explore</a>
      <div className="story__img">
        <div className="circle story__circle"></div>
        <div className='story__light'></div>
        <div className="story__book"></div>
        <div className="story__books"></div>
      </div>
    </section>
  )
}

import './Products.css'

export default function Products() {
  return (
    <section className='products' id='products'>
      <h2 className='title'>Products</h2>
      <p className='desc products__desc'>
        Decentralized network for guaranteed automatic gasless transactions execution and off-chain computations for Defy/Web3 apps and individuals.The main purpose of PowerAgent is to execute (call) smart contracts based on the specific logic of the Task submitted to the network.
      </p>
      <ul className="products__list">
        <li className="products__item">
          <h3 className='products__item__title'>Power Agent V2</h3>
          <p className='desc products__item__desc'>
            The main purpose of PowerAgent is to execute (call) smart contracts based on the specific logic.
          </p>
          <img src="" alt="" />
        </li>
        <li className="products__item">
          <h3 className='products__item__title'>PowerPool features</h3>
          <p className='desc products__item__desc'>
            Decentralized and permissionless layer for automatic smart-contracts executions with thousands of Keepers.
          </p>
        </li>
        <li className="products__item">
          <h3 className='products__item__title'>Powerpool DAO</h3>
          <p className='desc products__item__desc'>
            PowerPool DAO develops the PowerAgent smart-contract automated execution layer and facilitates.
          </p>
        </li>
      </ul>
    </section>
  )
}

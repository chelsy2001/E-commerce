import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className='descriptionbox-navigator'>
        <div className='descriptionbox-nav-box'>Description</div>
        <div className='descriptionbox-nav-box'>Reviews (122)</div>
      </div>
      <div className='descriptionbox-description'>
        <p>An e-commerce is an online platform that facilitate buying and selling of products or services over the internet server as a virtual marketplaces where business and indiviusall showcase their products ,interact with custumer and conditions transations without the need for a physical presence . e-commerce websites have gained immense popular due to thier convension accessibility and the golbal reach they offer .</p>
        <p>E-commerce website typically display profucts or services and detailed descriptions , images prices and any aviables sizes (eg.size , colors). Each products usually has its own description with relevatent information .</p>
      </div>
    </div>
  )
}

export default DescriptionBox

import React from 'react'

function Card(props) {
  return (
    <>
   <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
    style={{width: "24rem" , height: "12rem"}}
      src={props.src}
      alt="Shoes" />
  </figure>
  <div className="card-body pb-4">
    <h2 className="card-title">{props.price}</h2>
    <p>{props.description}</p>
    <p>{props.location}</p>
    <p>{props.time}</p>
    <div className="card-actions justify-end pt-3">
      <button className="btn">Buy Now</button>
    </div>
  </div>
</div>
    </>
  )
}

export default Card
import React from 'react'
import axios from  "axios"
import { useState } from 'react';
import { useEffect } from 'react';
import Product from './Product';
import Block from './Block';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';


function Home() {

    const [loding,setLoading]=useState("0")
const [images,setImages]=useState([])
const [prodcts,setProdcts]=useState([])
let navigate=useNavigate();
function goToProduct(inStock){
navigate({

    pathname:"/product",
    search:`inStock=${inStock}`,
    
})
};
async    function getSlider(){

     let {data}= await  axios.get("https://63189f2cf6b281877c71eab0.mockapi.io/slider")

     
     setImages(data)
     
    }
    async    function getProduct(){

        let {data}= await  axios.get("https://63189f2cf6b281877c71eab0.mockapi.io/products")
      setProdcts(data)
        console.log(data);
        setLoading("1")
        
       }
useEffect(()=>{
    getSlider()
    getProduct()
},[])
  return (

    <>
   {loding==0?<Loading></Loading>:""}
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>

  
  <div className="carousel-inner">
  {images.map((image,id)=> <div  key={id} className="carousel-item active">
      <img src={image.img} className="d-block w-100" alt="..."/>
    </div>)}
    <div className='black buttons container'> 
  <button className="  pre carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className=" pre carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="  carousel-control-next-icon" aria-hidden="true"></span>
    <span className="  visually-hidden">Next</span>
  </button>
  </div>
  </div>
 
</div>
<div className=' p-5 product'>

<h2 className='center'>Explore product</h2>
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    
    {prodcts.map((product,index)=>   <div onClick={()=>goToProduct(product.inStock)
    
} key={index} className="carousel-item active  ">

    
      <div className='  box  '>
        
      <img  src={product.img[0]} className="pb-5 d-block w-25 image" alt="..."/>
    

      </div>
      <div className='info  container'>
      <h3 >{product.name}</h3>  
      <h4>{product.price===product.priceAfterdiscount?`$${product.price}`:""}</h4>
      <div className='d-flex price'>
      <h4 className='text-danger'>
        {product.price!==product.priceAfterdiscount?`$${product.priceAfterdiscount}`:""}</h4>
     
      <del>
        
        <h4 className='text-muted'>
            {product.price!==product.priceAfterdiscount?`$${product.price}`:""}</h4></del>
      </div>



 
      <h4 className='text-success' >{product.inStock !== 0 ?"instock":""}</h4>
      <h4 className=' text-danger'>{product.inStock == 0 ?"out of stock":""}</h4>
      </div>
    
      </div>
    
    )}
 
    {/* <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..."/>
    </div> */}
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>

<div className="row"></div>
<div className='p-5 subscribe text-center'>

    <h4>Subscribe our newsletter to be notified when it'll be live.</h4>
    <input className='w-25' placeholder='Email adress' type="text" />
    <button>Subscribe</button>
</div>
</>
  )
}

export default Home
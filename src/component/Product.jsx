import React from 'react'
import { useSearchParams } from 'react-router-dom'
import phone from "../Home/Screen Shot 2021-11-21 at 10.08.07 PM.png"
import phone1 from "../Home/Screen Shot 2021-11-21 at 10.07.49 PM@2x.png"
import star from   "../Home/star.svg"
import star1 from  "../Home/emphty.svg"
import cib from "../Home/cib.png"
import axios from  "axios"
import { useState } from 'react';
import { useEffect } from 'react';
import logo1 from "../Home/vuesax-linear-group.svg"
import logo2 from "../Home/vuesax-linear-convert-3d-cube.svg"
function Product() {
  const [products,setProducts]=useState([])
  async    function getProduct(){

    let {data}= await  axios.get("https://63189f2cf6b281877c71eab0.mockapi.io/products")
  
    console.log(data);
    setProducts(data)
    
   }
   useEffect(()=>{

    getProduct()
},[])
  let [searchparams,setSearchparams]=useSearchParams();

  let cureentStock=searchparams.get("inStock")
 console.log(cureentStock);
  return (
   <>
   {cureentStock==0 ? <div className="container p-5">

<div className="row">
<div className="col  col-md-6 d-flex flex-raw">
<div className='d-flex flex-column'>
<img className='w-100 pb-3' src={phone} alt="" />
<img className='w-100 pb-3' src={phone} alt="" />
<img className='w-100 pb-3' src={phone} alt="" />
<img className='w-100 pb-3' src={phone} alt="" />
<img className='w-100 pb-3'  src={phone} alt="" />


</div>

<div className='ms-5'>
<img className='w-100' src={phone1} alt="" />



</div>



</div>
<div className="col  col-md-6">

<h6 className='text-muted'>apple</h6>
<p>Lorem ipsum dolor sit amet consectetur<br></br>adipisicing elit.
   Eum deserunt assumenda ullam!</p>

<div className='d-flex flex-row align-items-center'>
  <img src={star} alt="" />
  <img src={star} alt="" />
  <img src={star} alt="" />
  <img src={star1} alt="" />
  <img src={star1} alt="" />
  <p className=' text-muted ms-2 mt-2 pt-2'>(506 reviews)</p>

</div>
<h3 className='change fw-bold'>$2,500</h3>
<p className='text-danger'>out of stock</p>
<div className='d-flex  flex-row align-items-center '>

<button className='bt me-2 d-flex justify-content-center align-items-center'>+</button>
1
<button className='bt ms-2  d-flex justify-content-center align-items-center'>-</button>


</div>
<div className='d-flex  flex-row'>

  <div className="rect d-flex  flex-row align-items-center justify-content-center  text-muted text-center">full price</div>
  <div className="rect d-flex  flex-row align-items-center justify-content-center   text-center ms-2">installment</div>
</div>
<div className='d-flex  flex-row'>

  <div className="rect d-flex  flex-row align-items-center justify-content-center  text-muted text-center"><img src={cib} alt="" /></div>
  <div className="rect d-flex  flex-row align-items-center justify-content-center   text-center ms-2"><img src={cib} alt="" /></div>
  <div className="rect d-flex  flex-row align-items-center justify-content-center   text-center ms-2"><img src={cib} alt="" /></div>
  <div className="rect d-flex  flex-row align-items-center justify-content-center   text-center ms-2"><img src={cib} alt="" /></div>
</div>
<h6>memory</h6>
<div className='d-flex  flex-row'>

  <div className="rect d-flex  flex-column align-items-center justify-content-center 
   text-muted text-center"><h6 className='text-black fw-bold' >128gb</h6>
  <p className='text-black'>$999</p></div>
  <div className="rect d-flex  flex-column align-items-center justify-content-center   
  text-center ms-2"><h6 className='text-black fw-bold' >128gb</h6>
  <p className='text-black'>$999</p></div>
  <div className="rect d-flex  flex-column align-items-center justify-content-center 
    text-center ms-2"><h6 className='text-black fw-bold' >128gb</h6>
  <p className='text-black'>$999</p></div>
  <div className="rect d-flex  flex-column align-items-center justify-content-center 
    text-center ms-2"><h6 className='text-black fw-bold' >128gb</h6>
  <p className='text-black'>$999</p></div>
</div>
<h6>color</h6>
<div className='d-flex  flex-row'>

  <div className="rect d-flex  flex-column align-items-center justify-content-center 
   text-muted text-center"><h6 className='text-black fw-bold' >silver</h6>
  <div className="circle"></div></div>
  <div className="rect d-flex  flex-column align-items-center justify-content-center   
  text-center ms-2"><h6 className='text-black fw-bold' >blue</h6>
  <div className="circlee"></div></div>
 
</div>
<h6>insurence</h6>
<div className='d-flex  flex-row'>

  <div className="rect d-flex  flex-column align-items-center justify-content-center 
   text-muted text-center"><h6 className='text-black fw-bold' >1 year</h6>
  <h5 className='text-black'>$999</h5></div>
  <div className="rect d-flex  flex-column align-items-center justify-content-center   
  text-center ms-2"><h6 className='text-black fw-bold' >2 year</h6>
  <h5 className='text-black'>$999</h5></div>

</div>
<button className='add-blue py-2 w-100 mt-3'>Add to cart</button>
<div className='ship'>
  <div className='pt-2'><img className='d-inline' src={logo1} alt="" />
<h6 className='d-inline ps-2'>Lorem ipsum dolor sit amet consectetuo!</h6></div>

<div className='pt-2'><img className='d-inline' src={logo2} alt="" />
<h6 className='d-inline ps-2'>Lorem ipsum dolor sit amet consectetuo!</h6></div>
</div>
</div>




</div>


   </div>:<div className="container p-5">

<div className="row">
<div className="col  col-md-6 d-flex flex-raw">
<div className='d-flex flex-column'>
<img className='w-100 pb-3' src={phone} alt="" />
<img className='w-100 pb-3' src={phone} alt="" />
<img className='w-100 pb-3' src={phone} alt="" />
<img className='w-100 pb-3' src={phone} alt="" />
<img className='w-100 pb-3'  src={phone} alt="" />


</div>

<div className='ms-5'>
<img className='w-100' src={phone1} alt="" />



</div>



</div>
<div className="col  col-md-6">

<h6 className='text-muted'>apple</h6>
<p>Lorem ipsum dolor sit amet consectetur<br></br>adipisicing elit.
   Eum deserunt assumenda ullam!</p>

<div className='d-flex flex-row align-items-center'>
  <img src={star} alt="" />
  <img src={star} alt="" />
  <img src={star} alt="" />
  <img src={star1} alt="" />
  <img src={star1} alt="" />
  <p className=' text-muted ms-2 mt-2 pt-2'>(506 reviews)</p>

</div>
<h3 className='fw-bold'>$2,500</h3>
<p className='text-success'>in stock {cureentStock}</p>
<div className='d-flex  flex-row align-items-center '>

<button className='bt me-2 d-flex justify-content-center align-items-center'>+</button>
1
<button className='bt ms-2  d-flex justify-content-center align-items-center'>-</button>


</div>
<div className='d-flex  flex-row'>

  <div className="rect d-flex  flex-row align-items-center justify-content-center  text-muted text-center">full price</div>
  <div className="rect d-flex  flex-row align-items-center justify-content-center   text-center ms-2">installment</div>
</div>
<div className='d-flex  flex-row'>

  <div className="rect d-flex  flex-row align-items-center justify-content-center  text-muted text-center"><img src={cib} alt="" /></div>
  <div className="rect d-flex  flex-row align-items-center justify-content-center   text-center ms-2"><img src={cib} alt="" /></div>
  <div className="rect d-flex  flex-row align-items-center justify-content-center   text-center ms-2"><img src={cib} alt="" /></div>
  <div className="rect d-flex  flex-row align-items-center justify-content-center   text-center ms-2"><img src={cib} alt="" /></div>
</div>
<h6>memory</h6>
<div className='d-flex  flex-row'>

  <div className="rect d-flex  flex-column align-items-center justify-content-center 
   text-muted text-center"><h6 className='text-black fw-bold' >128gb</h6>
  <p className='text-black'>$999</p></div>
  <div className="rect d-flex  flex-column align-items-center justify-content-center   
  text-center ms-2"><h6 className='text-black fw-bold' >128gb</h6>
  <p className='text-black'>$999</p></div>
  <div className="rect d-flex  flex-column align-items-center justify-content-center 
    text-center ms-2"><h6 className='text-black fw-bold' >128gb</h6>
  <p className='text-black'>$999</p></div>
  <div className="rect d-flex  flex-column align-items-center justify-content-center 
    text-center ms-2"><h6 className='text-black fw-bold' >128gb</h6>
  <p className='text-black'>$999</p></div>
</div>
<h6>color</h6>
<div className='d-flex  flex-row'>

  <div className="rect d-flex  flex-column align-items-center justify-content-center 
   text-muted text-center"><h6 className='text-black fw-bold' >silver</h6>
  <div className="circle"></div></div>
  <div className="rect d-flex  flex-column align-items-center justify-content-center   
  text-center ms-2"><h6 className='text-black fw-bold' >blue</h6>
  <div className="circlee"></div></div>
 
</div>
<h6>insurence</h6>
<div className='d-flex  flex-row'>

  <div className="rect d-flex  flex-column align-items-center justify-content-center 
   text-muted text-center"><h6 className='text-black fw-bold' >1 year</h6>
  <h5 className='text-black'>$999</h5></div>
  <div className="rect d-flex  flex-column align-items-center justify-content-center   
  text-center ms-2"><h6 className='text-black fw-bold' >2 year</h6>
  <h5 className='text-black'>$999</h5></div>

</div>
<button className='add py-2 w-100 mt-3'>Add to cart</button>
<div className='ship'>
  <div className='pt-2'><img className='d-inline' src={logo1} alt="" />
<h6 className='d-inline ps-2'>Lorem ipsum dolor sit amet consectetuo!</h6></div>

<div className='pt-2'><img className='d-inline' src={logo2} alt="" />
<h6 className='d-inline ps-2'>Lorem ipsum dolor sit amet consectetuo!</h6></div>
</div>
</div>




</div>


   </div>}
  
   
   <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    {products.map((product,id)=>   <div 
    
 key={id} className="carousel-item active">
      <div className='  box'>
        
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

    
    </div>)}
 

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
   </>
  )
}

export default Product
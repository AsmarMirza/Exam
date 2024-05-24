import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { BasketContext } from "../context/BasketProvider";
import { WishlistContext } from "../context/WishlistProvider";
import { Link } from "react-router-dom";
import "./home.scss";
function Home() {
  const { addBasket } = useContext(BasketContext);
  const { addWishlist, isExist } = useContext(WishlistContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProducts();
  }, []);

  async function getAllProducts() {
    const res = await fetch("http://localhost:3000/products/");
    const data = await res.json();
    setProducts(data);
  }
  return (
    <div>
      <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <section className="hero">
        <div className="heroMain">
          <div className="heroLeft">
            <h1 className="heroLeftDif"> Cloth  & Wood Sofa</h1>
            <p className="leftText">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
              laboriosam necessitatibus ullam, eius amet repellat laudantium?
              Nesciunt, aut.
            </p>
            <button className="heroBtn">Buy Now</button>
          </div>

          <div className="heroRight">
            <img
              style={{ width: "100%" }}
              src="https://preview.colorlib.com/theme/aranoz/img/banner_img.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="main">
        <div className="mainMain">
          <div className="mainHeader">
            <h3 className="mainDif">Awesome </h3>
            <p className="mainText">Shop</p>
          </div>

          <div className="mainBoxes">
            {products.map((x) => (
              <div className="mainBox" key={x._id}>
                {isExist(x) ? (
                  <i
                    onClick={() => addWishlist(x)}
                    className="fa-solid fa-heart"
                  ></i>
                ) : (
                  <i
                    onClick={() => addWishlist(x)}
                    className="fa-regular fa-heart"
                  ></i>
                )}
                <img style={{ width: "100%" }} src={x.image} alt="" />
                <h1>{x.name}</h1>
                <p>{x.price}$</p>
                <button onClick={() => addBasket(x)}>add basket</button>
                <Link to={`/detail/${x._id}`}>go to detail</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="main">
        <div className="mainMain">
          <div className="mainHeader">
            <h3 className="mainDif">Best Sellers  </h3>
            <p className="mainText">Shop</p>
          </div>

          <div className="mainBoxes">

            <div className="mainBox1">
              <img
                style={{ width: "100%" }}
                src="https://preview.colorlib.com/theme/aranoz/img/product/product_5.png"
                alt=""
              />
              <h1  className="mainBox1Dif"> Quartz Belt Watch</h1>
              <p className="mainBox1Text">$150.00</p>
            </div>

                       
   <div className="mainBox1">
              <img
                style={{ width: "100%" }}
                src="https://preview.colorlib.com/theme/aranoz/img/product/product_1.png"
                alt=""
              />
              <h1 className="mainBox1Dif"> Quartz Belt Watch</h1>
              <p className="mainBox1Text">$150.00</p>
            </div> 



   <div className="mainBox1">
              <img
                style={{ width: "100%" }}
                src="https://preview.colorlib.com/theme/aranoz/img/product/product_4.png"
                alt=""
              />
              <h1 className="mainBox1Dif"> Quartz Belt Watch</h1>
              <p className="mainBox1Text">$150.00</p>
            </div>



            <div className="mainBox1">
              <img
                style={{ width: "100%" }}
                src="https://preview.colorlib.com/theme/aranoz/img/product/product_3.png"
                alt=""
              />
              <h1 className="mainBox1Dif"> Quartz Belt Watch</h1>
              <p className="mainBox1Text">$150.00</p>
            </div>
          </div>


        </div>
      </section>


      <section className="subscribe">
<div className="subscribeMain">
<p className="subscribeDif">JOIN OUR NEWSLETTER</p>
<p className="subscribeText">Subscribe to get Updated with new offers</p>
<div className="subscribeInp">
    <input className="input" type="text" name="" id=""  placeholder="Enter Email Address"/>
    <button className="subsBtn">SUBSCRIBE NOW</button>
</div>
</div>
      </section>
      <section className="images">
<div className="imagesMain">
    
    
<div className="imagesImage1" >  <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_1.png" alt="" /></div> 
    <div  className="imagesImage1" > <img   src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_2.png" alt="" /></div> 
    <div className="imagesImage1" >  <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_3.png" alt="" /></div> 
    <div className="imagesImage1" >  <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_4.png" alt="" /></div> 
    <div className="imagesImage2" >  <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_5.png" alt="" /></div> 
    <div className="imagesImage" >  <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_3.png" alt="" /></div> 
    <div className="imagesImage" >  <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_1.png" alt="" /></div> 
    <div className="imagesImage" >   <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_2.png" alt="" /></div> 
    <div className="imagesImage" >    <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_3.png" alt="" /></div> 
    <div className="imagesImage3" >   <img src="https://preview.colorlib.com/theme/aranoz/img/client_logo/client_logo_4.png" alt="" /></div> 

</div>
      </section>


      
    </div>
  );
}

export default Home;

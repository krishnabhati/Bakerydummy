import logo from "./logo.svg";
import "./App.css";
import BakeryProduct from "./components/bakery";
import cakeimg from "./assets/images/cakeimg.jpg";
import slide1 from "./assets/images/slide1.jpg";
import slide2 from "./assets/images/slide2.jpg";
import slide3 from "./assets/images/slide3.jpg";
import { useState } from "react";

function App() {
  let data = [
    {
      name: "Cake",
      price: "100",
      image: cakeimg,
      quantity : 0
    },
    {
      name: "Breads",
      price: "40",
      image: slide1,
      quantity : 0
    },
    {
      name: "Muffin",
      price: "50",
      image: slide3,
      quantity : 0
    },
    {
      name: "Pastry",
      price: "90",
      image: slide2,
      quantity : 0
    },
  ];
  const [ProductsData , setProductsData] = useState(data)
  const [activeTab , setActiveTab] = useState('Home')


  const printCheckoutItem = () => {
   let BuyItem =  ProductsData.filter((item) => item.quantity > 0)
   if(BuyItem.length > 0){
    let totalAmount = 0
    BuyItem.forEach((item) => {
totalAmount += (item.quantity * item.price)
   })
   console.log(BuyItem,'CartItems')
   console.log('your Total Amount to be paid is : ' , totalAmount + '$')
   window.alert("Please Check console")

   }else{
    window.alert("Please add Items in Cart")
   }

  }

  const handleActiveTab = (tab) =>{
setActiveTab(tab)
  }
  
  return (
    <div className="App" style={{width:'100%'}}>
      <div
        className="outerContainer"
        style={{ backgroundImage: `url${slide3}` }}
      >
        <div className="header">
          <div className="navbar">
            <a className={ activeTab == 'Home' ? "active" : ''} href="#home">
              Home
            </a>
            <a className={ activeTab == 'products' ? "active" : ''} href="#products" onClick={() => handleActiveTab('products')}>Products</a>
            <a className={ activeTab == 'contact' ? "active" : ''} href="#contact" onClick={() => handleActiveTab('contact')}>Contact</a>
          </div>
        </div>
        <div className="backgroundimg" style={{backgroundImage : `url(${slide3})`}}>
          <div className="section" style={{width:'75%'}}>
            <h2>Welcome to Our Bakery</h2>
            <p>
              We offer the finest baked goods made with love and the freshest
              ingredients. From cakes and cupcakes to cookies and more, we've
              got something for everyone!
            </p>
            <img src={slide1} alt="Bakery products" />
            {/* <a href="#" className="cta-button">Order Now</a> */}
          </div>


          <div className="products" id="products" style={{background:'rgb(255 183 183)',overflow:'scroll' }}>
            <h2 className="d-flexcenter">Our Products</h2>
            <div className="Content">
              <div style={{ display: "flex" }}>
                {ProductsData.map((item) => (
                  <div
                  className="productCard"
                    style={{
                      // border: "1px solid grey",
                      padding: "2px",
                      height: "350px",
                      // width: "200px",
                      margin: "2%",
                      cursor:'pointer',
                      background:'white'
                    }}
                  >
                    <BakeryProduct
                      name={item.name}
                      price={item.price}
                      image={item.image}
                      ProductsData = {ProductsData}
                      setProductsData = {setProductsData}
                    />
                  </div>
                ))}
              </div>
              <div className="d-flexcenter">
                <button className="cta-button" onClick={printCheckoutItem}>Checkout To Payment</button>
              </div>
            </div>
          </div>

          
          <div className="section" style={{width : '75%'}}>
            <h2>Our Services</h2>
            <p>
              We offer a variety of services to meet your needs, including
              custom orders, delivery, and more. Contact us today to learn more!
            </p>
            <img src={slide2} alt="Bakery services" />
            {/* <a href="#" class="cta-button">Learn More</a> */}
          </div>

          <div className="testimonials">
            <h2>What Our Customers Are Saying</h2>
            <p>
              I've been coming to this bakery for years and the quality of their
              products has never wavered. I love their cakes and pastries!
            </p>
            <p>
              The staff is always so friendly and accommodating. I can always
              count on them to make my special occasions even sweeter!
            </p>
          </div>

          <div className="contact" id='contact'>
            <h2 className="d-flexcenter">Contact Us</h2>
          <div className="contact-form">
  <form>
    <input type="text" placeholder="Name" required />
    <input type="email" placeholder="Email" required />
    <textarea placeholder="Message" rows="5" required></textarea>
    <input type="submit" value="Submit" className="cta-button"/>
  </form>
</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

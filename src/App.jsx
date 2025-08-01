//components
import Header from "./components/Header.jsx"
import Category from "./components/Category.jsx"
import Scroll from "./components/Scroll.jsx";
import Offergrid from "./components/Offergrid.jsx";
import Items from "./components/Items.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//category images
import scooter from "./assets/scooter.webp";
import fashion from "./assets/fashion.webp";
import electronics from "./assets/electronics.webp";
import flight from "./assets/flight.webp";
import furniture from "./assets/furnitures.webp";
import grocery from "./assets/grocery.webp";
import tablet from "./assets/tablet.webp";
import teddy from "./assets/teddy.webp";
import tv from "./assets/tv.webp";

//scroll image
import image1 from "./assets/imgi_167_076c4f2ee87225d7.jpg"
import image2 from "./assets/imgi_171_ddd5c61a6e62dc5d.jpg"
import image3 from "./assets/imgi_175_74f0ad81e44e6e6f.jpg"
import image4 from "./assets/imgi_179_1338bd4fc60390d8.jpg"
import image5 from "./assets/imgi_183_2dcfeaadc16a5cd8.jpg"
import image6 from "./assets/imgi_187_b1bc466d7a9d5ccf.jpg"
import image7 from "./assets/imgi_192_351eb4bcb85e3319.jpg"

//electronics image
import flightbook from "./assets/flightbook.webp"
import buds from "./assets/buds.webp"
import asusmonitor from "./assets/asusmonitor.webp"
import watch from "./assets/watch.webp"
import sonyspeeker from "./assets/sonyspeeker.webp"
import mirrorlesscam from "./assets/mirrorlesscam.webp"
import dellmonitor from "./assets/dellmonitor.webp"
import projector from "./assets/projector.webp"
import fastrackwatch from "./assets/fastrackwatch.webp"


//home images
import waterbottle from "./assets/waterbottle.webp"
import lunchbox from "./assets/lunchbox.webp"
import faucets from "./assets/faucets.webp"
import mop from "./assets/mop.webp"
import gasstove from "./assets/gasstove.webp"
import steelbottle from "./assets/steelbottle.webp"
import casserole from "./assets/casserole.webp"
import pressurecooker from "./assets/pressurecooker.webp"


//offergrid images

import boya from "./assets/boya.webp"
import sexualwellness from "./assets/sexualwellness.webp"
import skincare from "./assets/skincare.webp"
import topwatches from "./assets/topwatches.webp"
import acerswift from "./assets/acerswift.webp"
import tshirts from "./assets/tshirts.webp"


//style
import "./index.css"

const category = [{ image: scooter, text: "Minutes", },
{ image: tablet, text: "Mobile & Tablets", },
{ image: fashion, text: "Fashion", data: ["Men's top wear", "Men's bottom wear", "Men's Footwear", "Women's top wear", "Women's bottom wear", "Women's Footwear"] },
{ image: electronics, text: "Electronics", data: ["Cameras and Accessories", "Electronics GST store", "Computer Peripherals", "Gaming", "Health & Personal Care", "Laptop Accessories"] },
{ image: furniture, text: "Home & Furnitures", data: ["Home Furnishings", "furniture", "Living room Furniture", "Kitchen & Dining", "Bedroom Furniture", "Space saving Furniture"] },
{ image: tv, text: "TVs & Appiances" },
{ image: flight, text: "Flight Booking" },
{ image: teddy, text: "Beauty, Food..", data: ["Beauty & Personal Care", "Men's Grooming", "Food & Drinks", "Baby Care", "Nutrition & Personal Care"] },
{ image: grocery, text: "Grocery" },
]

const scroll = [
  { image: image1 },
  { image: image2 },
  { image: image3 },
  { image: image5 },
  { image: image6 },
  { image: image4 },
  { image: image7 },
]

const electro = [
  { image: buds, text: "Best Truewireless", price: "Grab Now" },
  { image: asusmonitor, text: "Monitors", price: "From ₹6599" },
  { image: watch, text: "Noise Smartwatch", price: "From ₹1099" },
  { image: sonyspeeker, text: "Best Selling Speaker", price: "From ₹499" },
  { image: mirrorlesscam, text: "Mirrorless Camera", price: "From ₹5099" },
  { image: dellmonitor, text: "Best Truewireless", price: "Grab Now" },
  { image: projector, text: "Best Truewireless", price: "Grab Now" },
  { image: fastrackwatch, text: "Best Truewireless", price: "Grab Now" },
]

const home = [
  { image: waterbottle, text: "Water Bottles", price: "From ₹199" },
  { image: lunchbox, text: "Lunch Boxes", price: "From ₹129" },
  { image: faucets, text: "Water Bottles", price: "From ₹199" },
  { image: mop, text: "Faucets", price: "Up to 80% Off" },
  { image: gasstove, text: "Gas Stoves", price: "From ₹999" },
  { image: steelbottle, text: "Steel Bottles", price: "From ₹169" },
  { image: casserole, text: "Casserole", price: "From ₹299" },
  { image: pressurecooker, text: "Pressure Cookers", price: "From ₹549" }
]

const offergrid=[
  {image:boya},
  {image:sexualwellness},
  {image:skincare},
  {image:topwatches},
  {image:acerswift},
  {image:tshirts},
]


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style, display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#2d2d2d",
        borderRadius: "10% 0 0% 10%",
        width: "40px",
        height: "80px",
        right: 0,
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style, display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#2d2d2d",
        borderRadius: "0 10% 10% 0",
        width: "40px",
        height: "80px",
        left: "0px",
        zIndex: 1,
      }}
      onClick={onClick}
    />
  );
}

var settings1 = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

var settings2 = {
  slidesToShow: 5,
  slidesToScroll: 2,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

var settings3 = {
  slidesToShow: 7,
  slidesToScroll: 2,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};


function App() {
  return (
    <div className="w-full bg-gray-100">
      <Header />
      <section className="bg-white  mx-4 my-2 h-30 flex justify-center gap-10 items-center shadow-2xs">
        {category.map((c, i) => <Category key={i} image={c.image} text={c.text} data={c?.data} />)}
      </section>
      <section className="bg-white  mx-4 my-3 h-68 gap-12 items-center shadow-2xs">
        <Slider {...settings1}>{scroll.map((s, i) => <Scroll key={i} image={s.image} />)} </Slider>
      </section>
      <section className="flex items-center justify-center gap-4 px-4 w-full ">
        <div className="w-10/12 h-84  bg-white p-4 shadow-2xs">
          <h1 className="text-2xl font-semibold">Best of Electronics</h1>
          <div className=" items-center gap-6 py-8">
            <Slider {...settings2}>{electro.map((e, i) => <Items key={i} image={e.image} text={e.text} price={e.price} />)}</Slider>
          </div>
        </div>
        <a href="" className="w-2/12">
          <img src={flightbook} alt="" className="object-cover" />
        </a>
      </section>
      <section className="px-4 mt-3 w-full ">
        <div className="w-full h-80  bg-white shadow-2xs">
          <div className=" p-4 font-semibold">
            <h1 className="text-2xl font-semibold">Home</h1>
          </div>
          <div className="py-8">
            <Slider {...settings3}>{home.map((h, i) => <Items key={i} image={h.image} text={h.text} price={h.price} />)}</Slider>
          </div>
        </div>
      </section>
      <section className="px-4 mt-3 w-full ">
        <div className="bg-white grid grid-cols-3 h-full gap-x-2 gap-y-4 px-1">
            {offergrid.map((o,i)=><Offergrid key={i} image={o.image}/>)}
        </div>
      </section>
      {/* <section className="px-4 mt-3 w-full ">
        <div className="w-full h-80  bg-white shadow-2xs">
          <div className=" p-4 font-semibold">
            <h1 className="text-2xl font-semibold">Home</h1>
          </div>
          <div className="py-8">
            <Slider {...settings3}>{home.map((h, i) => <Items key={i} image={h.image} text={h.text} price={h.price} />)}</Slider>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default App

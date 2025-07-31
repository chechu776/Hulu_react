//components
import Header from "./components/Header.jsx"
import Category from "./components/Category.jsx"
import Scroll from "./components/Scroll.jsx";

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
  { image: image4 },
  { image: image5 },
  { image: image6 },
  { image: image7 },
]


function App() {
  return (
    <div className="w-full bg-gray-100">
      <Header />
      <section className="bg-white  mx-4 my-2 h-30 flex justify-center gap-10 items-center shadow-2xs">
        {category.map((c, i) => <Category key={i} image={c.image} text={c.text} data={c?.data} />)}
      </section>
      <section className="bg-white  mx-4 my-3 h-60 gap-12 items-center shadow-2xs scroll-smooth">
          {scroll.map((s, i) => <Scroll key={i} image={s.image} />)}
      </section>
    </div>
  )
}

export default App

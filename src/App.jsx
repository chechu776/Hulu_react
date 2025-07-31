import Header from "./components/Header.jsx"
import Category from "./components/Category.jsx"
import scooter from "./assets/scooter.webp";
import fashion from "./assets/fashion.webp";
import electronics from "./assets/electronics.webp";
import flight from "./assets/flight.webp";
import furniture from "./assets/furnitures.webp";
import grocery from "./assets/grocery.webp";
import tablet from "./assets/tablet.webp";
import teddy from "./assets/teddy.webp";
import tv from "./assets/tv.webp";
import "./index.css"

const category = [{ image: scooter, text: "Minutes", },
{ image: tablet, text: "Mobile & Tablets", },
{ image: fashion, text: "Fashion", data: ["Men's top wear", "Men's bottom wear", "Men's Footwear", "Women's top wear", "Women's bottom wear", "Women's Footwear"] },
{ image: electronics, text: "Electronics", data: ["Cameras and Accessories", "Electronics GST store", "Computer Peripherals", "Gaming", "Health & Personal Care", "Laptop Accessories"]   },
{ image: furniture, text: "Home & Furnitures", data:["Home Furnishings","furniture","Living room Furniture","Kitchen & Dining","Bedroom Furniture","Space saving Furniture"] },
{ image: tv, text: "TVs & Appiances" },
{ image: flight, text: "Flight Booking" },
{ image: teddy, text: "Beauty, Food..",data:["Beauty & Personal Care","Men's Grooming","Food & Drinks","Baby Care","Nutrition & Personal Care"] },
{ image: grocery, text: "Grocery" },
]


function App() {
  return (
    <div className="w-full bg-gray-100">
      <Header />
      <section className="bg-white  mx-4 my-2 h-30 flex justify-center gap-12 items-center shadow-2xs">
        {category.map((c,i) => <Category key={i} image={c.image} text={c.text} data={c?.data} />)}
      </section>
    </div>

  )
}

export default App

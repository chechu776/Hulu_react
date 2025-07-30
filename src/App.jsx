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

const category = [{ image: scooter, text: "Minutes" },
{ image: tablet, text: "Mobile & Tablets" },
{ image: fashion, text: "Fashion" },
{ image: electronics, text: "Electronics" },
{ image: furniture, text: "Home & Furnitures" },
{ image: tv, text: "TVs & Appiances" },
{ image: flight, text: "Flight Booking" },
{ image: teddy, text: "Beauty, Food.." },
{ image: grocery, text: "Grocery" },
]

function App() {
  return (
    <div className="w-full bg-gray-100">
      <Header />
      <section className="bg-white  mx-4 my-2 h-30 flex justify-center gap-12 items-center shadow-2xs">
        <Category image={scooter} text={"Minutes"} />
        <Category image={tablet} text={"Mobile & Tablets"} />
        <Category image={fashion} text={"Fashion"} />
        <Category image={electronics} text={"Electronics"} />
        <Category image={furniture} text={"Home & Furnitures"} />
        <Category image={tv} text={"TVs & Appiances"} />
        <Category image={flight} text={"Flight Booking"} />
        <Category image={teddy} text={"Beauty, Food.."} />
        <Category image={grocery} text={"Grocery"} />
      </section>
    </div>

  )
}

export default App

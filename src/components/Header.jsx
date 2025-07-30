import flipKart from "../assets/fkheaderlogo_exploreplus-44005d.svg"
import search from "../assets/download.svg"
import guest from "../assets/imgi_4_profile-52e0dc.svg"
import dropDown from "../assets/download (1).svg"
import cart from "../assets/imgi_313_Cart.svg"
import shop from "../assets/imgi_12_Store-9eeae2.svg"
import dots from "../assets/imgi_13_header_3verticalDots-ea7819.svg"

function Header() {
    return (
        <header className="flex items-center w-full h-16 gap-10 px-6 bg-white">
            <div>
                <a href="" className="flex"><img src={flipKart} alt="logo" /></a>
            </div>
            <div className="flex items-center w-3/6 bg-blue-50 px-3 py-2 rounded-lg gap-2">
                <a href=""><img src={search} alt="search button" /></a>
                <input className="w-full outline-0 " type="text" placeholder="Search for Products, Brands and More" />
            </div>
            <div>
                <a href="" className="flex gap-2 hover:bg-blue-600 hover:text-white transition-all px-2 py-2 rounded-lg group">
                    <img src={guest} alt="guest" />
                    <p>Login</p>
                    <img src={dropDown} alt="dropdown" className="group-hover:rotate-180 group-hover:transition-all group-hover:duration-300"/>
                </a>
            </div>
            <div>
                <a href="" className="flex gap-2 items-center">
                    <img src={cart} alt="cart" className=""/>
                    <p>Cart</p>
                </a>
            </div>
            <div>
                <a href="" className="flex gap-2">
                    <img src={shop} alt="shop" />
                    <p>Become a Seller</p>
                </a>

            </div>
            <div>
                <a href="" >
                    <img src={dots} alt="" className="p-2 hover:bg-gray-100 rounded-lg hover:border border-gray-200" />
                </a>
            </div>
        </header>
    )
}

export default Header
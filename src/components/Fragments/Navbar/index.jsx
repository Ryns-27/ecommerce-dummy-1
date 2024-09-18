import Navlogo from "./Logo"
import Navpages from "./Pages"
import Navicon from "./Icon"

const Navbar = () => {
    return (
        <div className="flex min-max-w h-20 p-5 justify-between">
            <Navlogo>Ecommerce</Navlogo>
            <Navpages/>
            <Navicon/>
        </div>
    )
}

export default Navbar
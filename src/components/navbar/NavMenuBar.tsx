import { NavLink, Link } from "react-router-dom"
import { ShoppingCart } from "lucide-react"

const NavMenuBar = () => {
  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Category */}
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
          ☰ Select Category
        </button>

        {/* Menu */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {[
            { name: "Home", path: "/" },
            { name: "All Products", path: "/products" },
            { name: "Deals", path: "/deals" },
            { name: "New Arrivals", path: "/new-arrivals" },
            { name: "About Us", path: "/AboutUs" }
          ].map(link => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500"
                  : "text-gray-700 hover:text-orange-500"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Cart */}
        <Link
          to="/cart"
          className="bg-orange-500 text-white px-5 py-2 rounded-lg flex items-center gap-2 text-sm font-medium"
        >
          <ShoppingCart size={16} />
          Cart
        </Link>
      </div>
    </div>
  )
}

export default NavMenuBar

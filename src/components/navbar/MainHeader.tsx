import { Search, ShoppingCart, Heart } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
import { useCart } from "../../cart/CartContext"
import { useState } from "react"

const MainHeader = () => {
  const { items } = useCart()
  const navigate = useNavigate()
  const [search, setSearch] = useState("")

  const cartCount = items.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-6">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          <span className="text-orange-500">G</span>roceryMart
        </Link>

        {/* Search */}
        <div className="flex-1">
          <div className="relative">
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              onKeyDown={e => {
                if (e.key === "Enter" && search.trim()) {
                  navigate(`/products?search=${search}`)
                }
              }}
              placeholder="Search for products..."
              className="w-full bg-gray-100 rounded-full py-3 px-5 pr-12 outline-none"
            />

            <button
              onClick={() => search.trim() && navigate(`/products?search=${search}`)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
            >
              <Search />
            </button>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <Heart className="cursor-pointer text-gray-600" />

          <Link to="/cart" className="relative">
            <ShoppingCart />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MainHeader

import { Phone, Gift, HelpCircle, MapPin } from "lucide-react"
import { Link } from "react-router-dom"
import { useAuth } from "../../auth/AuthContext"

const TopInfoBar = () => {
  const { token } = useAuth()

  return (
    <div className="bg-orange-500 text-white text-sm px-4 py-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        <div className="flex items-center gap-2 cursor-pointer">
          <MapPin size={14} />
          <span>Select Delivery Area</span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-1">
            <Phone size={14} />
            <span>1800-000-000</span>
          </div>

          <div className="flex items-center gap-1 cursor-pointer">
            <Gift size={14} />
            <span>Offers</span>
          </div>

          <div className="flex items-center gap-1 cursor-pointer">
            <HelpCircle size={14} />
            <span>Help</span>
          </div>

          {!token ? (
            <Link to="/login" className="font-medium hover:underline">
              Login
            </Link>
          ) : (
            <Link to="/account" className="font-medium hover:underline">
              My Account
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default TopInfoBar

import { NavLink, Link } from "react-router-dom"

const MobileDrawer = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  if (!open) return null

  return (
    <div className="md:hidden bg-white border-t px-4 py-4 space-y-3 text-sm">
      {["/", "/products", "/new-arrivals", "/contact"].map((path, i) => (
        <NavLink
          key={i}
          to={path}
          onClick={onClose}
          className="block text-gray-700 hover:text-orange-500"
        >
          {path === "/" ? "Home" : path.replace("/", "")}
        </NavLink>
      ))}

      <Link
        to="/login"
        onClick={onClose}
        className="block text-center bg-orange-500 text-white py-2 rounded-lg"
      >
        Login
      </Link>
    </div>
  )
}

export default MobileDrawer

import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";

import HeroSlider from "../../components/home/HeroSlider";
import CategoriesSlider from "../../components/home/categories/CategoriesSlider";
import FeaturedSlider from "../../components/home/featured/FeaturedSlider";
import OffersSection from "../../components/home/offers/OffersSection";


const Home = () => {
  const { token, role } = useAuth();

  // ADMIN: dashboard is home
  if (token && role === "ADMIN") {
    return <Navigate to="/admin" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-100">

      {/* ================= HERO SLIDER ================= */}
      <HeroSlider />

      {/* ================= CATEGORIES ================= */}
      <CategoriesSlider />

      {/* ================= FEATURED PRODUCTS ================= */}
      <FeaturedSlider />

      {/* ================= OFFERS ================= */}
      <OffersSection />


      {/* ================= CTA SECTION ================= */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">

          {!token && (
            <div className="border rounded-2xl py-14 px-6 shadow-sm">
              <h2 className="text-3xl font-bold mb-3">
                Start Shopping with SuperMart
              </h2>
              <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                Login or create an account to explore fresh groceries and
                daily essentials delivered to your doorstep.
              </p>

              <Link
                to="/register"
                className="inline-block bg-black text-white px-10 py-3 rounded-xl text-lg hover:opacity-90 transition"
              >
                Get Started
              </Link>
            </div>
          )}

          {token && role === "USER" && (
            <div className="border rounded-2xl py-14 px-6 shadow-sm">
              <h2 className="text-3xl font-bold mb-3">
                Welcome back 👋
              </h2>
              <p className="text-gray-600 mb-8">
                Continue shopping from where you left off.
              </p>

              <Link
                to="/products"
                className="inline-block bg-orange-500 text-white px-10 py-3 rounded-xl text-lg hover:bg-orange-600 transition"
              >
                Shop Now
              </Link>
            </div>
          )}

        </div>
      </section>

      {/* ================= TRUSTED SERVICES ================= */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Trusted Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <h3 className="font-semibold mb-2">🛒 Wide Product Range</h3>
            <p className="text-sm text-gray-600">
              Groceries, vegetables, fruits, snacks, and more.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <h3 className="font-semibold mb-2">💰 Best Prices</h3>
            <p className="text-sm text-gray-600">
              Affordable pricing with quality products.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm text-center">
            <h3 className="font-semibold mb-2">🚚 Fast Delivery</h3>
            <p className="text-sm text-gray-600">
              Quick and reliable delivery to your home.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;

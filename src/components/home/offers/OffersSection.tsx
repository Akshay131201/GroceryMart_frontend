import OfferCard from "./OfferCard";
import CashbackBanner from "./CashbackBanner";
import { topOffers } from "./offersData";

const OffersSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* HEADER */}
      <div className="mb-8">
        <span className="inline-block bg-orange-500 text-white text-sm px-4 py-1 rounded-full mb-2">
          Offers
        </span>
        <h2 className="text-3xl font-bold">Best Values</h2>
      </div>

      {/* TOP 3 CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {topOffers.map((item) => (
          <OfferCard key={item.id} item={item} />
        ))}
      </div>

      {/* BOTTOM LONG BANNER */}
      <CashbackBanner />
    </section>
  );
};

export default OffersSection;

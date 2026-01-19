import type { OfferItem } from "./offersData";

type Props = {
  item: OfferItem;
};

const OfferCard = ({ item }: Props) => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-sm">
      <img
        src={item.image}
        alt={item.title}
        className={`w-full h-[260px] object-cover ${
          item.overlay ? "opacity-80" : ""
        }`}
      />

      <div className="absolute inset-0 p-6 flex flex-col justify-center text-white">
        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>

        {item.subtitle && (
          <p className="uppercase text-sm tracking-wide mb-4">
            {item.subtitle}
          </p>
        )}

        <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-2 rounded-lg w-fit">
          {item.buttonText}
        </button>

        {item.overlay && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-lg font-semibold">
            00 days 00:00:00
          </div>
        )}
      </div>
    </div>
  );
};

export default OfferCard;

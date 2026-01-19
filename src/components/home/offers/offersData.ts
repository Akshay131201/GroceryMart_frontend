import daily from "../../../assets/home/offers/daily-essentials.jpeg";
import upto30 from "../../../assets/home/offers/upto-30-off.jpeg";
import special from "../../../assets/home/offers/special-discount.jpeg";

export type OfferItem = {
  id: number;
  title: string;
  subtitle?: string;
  image: string;
  buttonText: string;
  overlay?: boolean;
};

export const topOffers: OfferItem[] = [
  {
    id: 1,
    title: "Daily Essentials",
    subtitle: "Minimum 20% off everyday",
    image: daily,
    buttonText: "Shop Now",
  },
  {
    id: 2,
    title: "Get Up To 30% Off",
    image: upto30,
    buttonText: "Shop Now",
  },
  {
    id: 3,
    title: "Special Discount for All Items",
    image: special,
    buttonText: "Shop Now",
    overlay: true,
  },
];

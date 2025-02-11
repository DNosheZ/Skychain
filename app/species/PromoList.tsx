import PromoCard from "./PromoCard";

const promos = [
  {
    imageUrl: "/images/hotel-1.jpg",
    name: "Excellence Oyster Bay - Adults Only All Inclusive",
    distance: "2.20 km",
    location: "Falmouth",
    rating: 7.6,
    stars: 4,
    amenities: ["WiFi", "Gym", "Pool"],
  },
  {
    imageUrl: "/hotel-6.jpg ",
    name: "La Palma",
    distance: "1.39 km",
    location: "Islas Canarias",
    rating: 8.8,
    stars: 5,
    amenities: ["Sea scape", "Air Conditioning", "Pool"],
    price: 791.184,
    oldPrice: 1977.96,
    discount: 60,
    referenceDate: "3 February 2025",
  },
  {
    imageUrl: "/images/hotel-2.webp",
    name: "Royal Decameron Punta Sal",
    distance: "73.66 km",
    location: "Tumbes",
    rating: 7.6,
    stars: 4,
    amenities: ["WiFi", "Gym", "Pool"],
  },
  {
    imageUrl: "/images/hotel-4.webp",
    name: "Ker San Telmo Hotel",
    distance: "1.39 km",
    location: "Buenos Aires",
    rating: 8.7,
    stars: 5,
    amenities: ["WiFi", "Air Conditioning", "Gym"],
    price: 355.1126,
    oldPrice: 616.0823,
    discount: 42,
    referenceDate: "26 February 2025",
  },
  {
    imageUrl: "/images/hotel-3.webp",
    name: "Decameron Barú All Inclusive",
    distance: "7.07 km",
    location: "Isla de Baru",
    rating: 7.8,
    stars: 4,
    amenities: ["WiFi", "Beachfront", "Gym"],
  },
  
  {
    imageUrl: "/hotel-5.webp",
    name: "JL Ratxó",
    distance: "100.59 km",
    location: "Mallorca",
    rating: 9.7,
    stars: 5,
    amenities: ["Ranch", "Ecologic", "Gym"],
    price: 355.1126,
    oldPrice: 616.0823,
    discount: 42,
    referenceDate: "26 February 2025",
  }
  
];

export default function PromoList() {
  return (
    <section className="py-10 px-5 dark:bg-orange_m3 bg-blue1_m2  dark:text-white ">
      <h2 className="text-2xl font-bold mb-6 text-white dark:text-blue3_m2">Recommended</h2>
      <div className="flex flex-wrap gap-6 justify-center">
      
        {promos.map((promo, index) => (
            
          <PromoCard key={index} {...promo} />
        ))}
      </div>
    </section>
  );
}
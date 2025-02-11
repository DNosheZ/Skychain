import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

interface PromoProps {
  imageUrl: string;
  name: string;
  distance: string;
  location: string;
  rating: number;
  stars: number;
  amenities: string[];
  price?: number;
  discount?: number;
  referenceDate?: string;
  oldPrice?: number;
}

export default function PromoCard({
  imageUrl,
  name,
  distance,
  location,
  rating,
  stars,
  amenities,
  price,
  discount,
  referenceDate,
  oldPrice,
}: PromoProps) {
    
  return (
    <a href="/login" onClick={() => signOut()}>
    <div className="bg-white rounded-xl shadow-lg overflow-hidden w-80 bg-orange_m3 dark:bg-blue3_m2 text-black 0">
      {/* Imagen */}
      <div className="h-48 w-full relative">
        <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" className="rounded-t-xl" />
      </div>

      {/* Información */}
      <div className="p-4">
        <h3 className="text-xs text-gray-100 uppercase font-bold">Hotel</h3>
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-200 text-sm">{distance} from downtown</p>
        <p className="text-gray-200 text-sm">Stay in {location}</p>

        {/* Rating y estrellas */}
        <div className="flex items-center mt-2">
          <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">{rating}</span>
          <div className="ml-2 text-yellow-500">
            {"⭐".repeat(stars)}
          </div>
        </div>

        {/* Amenidades */}
        <div className="flex gap-2 text-gray-300 mt-2">
          {amenities.map((amenity, index) => (
            <span key={index} className="text-sm">🔹 {amenity}</span>
          ))}
        </div>

        {/* Precio y Descuento */}
        {price && (
          <div className="mt-3">
            {oldPrice && (
              <p className="text-gray-400 text-sm line-through">SETH {oldPrice}</p>
            )}
            <p className="text-xl font-bold text-gray-900">SETH {price}</p>
            {discount && (
              <span className="text-green-800 dark:text-green-600 font-semibold text-sm">-{discount}%</span>
            )}
            {referenceDate && (
              <p className="text-gray-200 text-xs mt-1">Reference date: {referenceDate}</p>
            )}
          </div>
        )}
      </div>
    </div>
    </a>
  );
}
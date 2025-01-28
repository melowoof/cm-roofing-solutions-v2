import Image from "next/image";
import Link from "next/link";
import { GenericButton } from "../ui/generic_button";

export default function Page() {
  return (
    <>
      <section
        className="w-full h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url(/images/zohair-mirza-GXITWKvgm-k-unsplash.webp)",
        }}
      >
        <h1 className="lg:text-8xl md:text-5xl text-5xl font-semibold font-sans text-black p-2 bg-white">
          SERVICES
        </h1>
      </section>
      <Services />
    </>
  );
}

function Services() {
  const services = [
    {
      serviceName: "Asphalt Singles",
      serviceDesc:
        "Our high-quality shingles provide superior protection against harsh weather, ensuring your home looks great and stays secure for years to come. Wether it is a new set of shingles or a repair of an existing roof, we have you covered.",
      serviceImg: "/images/services/asphalt_shingles.webp",
    },
    {
      serviceName: "Metal Roofs",
      serviceDesc:
        "Transform the look and durability of your home. Our high-quality metal roofing is designed to last for decades, providing superior protection against harsh weather and adding instant curb appeal to your home.",
      serviceImg: "/images/services/metal_roofs.webp",
    },
    {
      serviceName: "Flat Roofs",
      serviceDesc:
        "Flat roofs offer a modern style, low maintenance, energy efficiency, and decades of security and savings with proper installation and upkeep. Giving you peace of mind and saving you money on repairs and energy costs.",
      serviceImg: "/images/services/flat_roofs.webp",
    },
    {
      serviceName: "Synthetic Roofs",
      serviceDesc:
        "Synthetic roofing materials provide a cost-effective and durable alternative to traditional materials. They can replicate the look of wood, slate, or clay while being lightweight, low-maintenance, and environmentally friendly.",
      serviceImg: "/images/services/synthetic_roofs.webp",
    },
    {
      serviceName: "Standing Seam",
      serviceDesc:
        "Snap Lock Standing Seam roofing is a popular metal roofing option due to its ease of installation, durability, and attractive appearance. The panels snap together, eliminating the need for exposed fasteners and reducing the risk of leaks.",
      serviceImg: "/images/services/standing_seam.webp",
    },
    {
      serviceName: "Roof Repair",
      serviceDesc:
        "Don't wait until your roof starts leaking to call for repairs - timely maintenance can save you thousands in the long run. Our experienced roofing team uses top-quality materials and advanced techniques to ensure that your roof is restored to its optimal condition.",
      serviceImg: "/images/services/roof_repair.webp",
    },
  ];

  return (
    <section className="w-full py-20 grid lg:grid-flow-row lg:grid-cols-2 gap-8">
      {services.map((service) => (
        <Service
          key={service.serviceName}
          serviceName={service.serviceName}
          serviceDesc={service.serviceDesc}
          serviceImg={service.serviceImg}
        />
      ))}
    </section>
  );
}

type ServiceType = {
  serviceName: string;
  serviceDesc: string;
  serviceImg: string;
};

function Service({ serviceName, serviceDesc, serviceImg }: ServiceType) {
  return (
    <div className="w-full h-60 flex flex-row gap-3 font-sans">
      <div className="relative h-full w-1/2">
        <Image
          className="object-cover"
          src={serviceImg}
          fill
          alt={serviceName}
        />
      </div>
      <div className="w-1/2 flex flex-col justify-between">
        <div className="w-full flex flex-col gap-3">
          <h1 className="font-semibold text-xl">{serviceName}</h1>
          <p>{serviceDesc}</p>
        </div>
        <div className="w-full flex justify-end">
          <GenericButton>
            <Link href={`/services/${serviceName}`}>Read more</Link>
          </GenericButton>
        </div>
      </div>
    </div>
  );
}

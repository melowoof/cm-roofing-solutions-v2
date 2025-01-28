"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, House, Menu } from "lucide-react";

type NavlinkType = {
  text: string;
  url: string;
  dropdownText?: string;
  dropdownLinks?: { text: string; url: string }[];
};

// const brandName = "CM Roofings Solution";
// const tel = "(905) 757-7663";
const email = "info@cmroofingsolutions.ca";
const navlinks = [
  {
    text: "About",
    url: "/about",
  },
  {
    text: "Services",
    url: "/services",
    dropdownText: "All the services we offer.",
    dropdownLinks: [
      {
        text: "Asphalt Shingles",
        url: "/services/asphalt_shingles",
      },
      { text: "Metal Roofs", url: "/services/metal_roofs" },
      { text: "Flat Roofs", url: "/services/flat_roofs" },
      { text: "Synthetic Roofs", url: "/services/synthetic_roofs" },
      { text: "Standing Seam", url: "/services/standing_seam" },
      { text: "Roof Repair", url: "/services/roof_repair" },
    ],
  },
  {
    text: "Projects",
    url: "/projects",
  },
  {
    text: "FAQ",
    url: "/FAQ",
  },
];

export function NavbarSmall() {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  function handleOpen() {
    setIsOpened((isOpened) => !isOpened);
  }
  
  if (isOpened) return null;

  return (
    <motion.header
      layout
      className="w-full flex fixed flex-col z-50 top-0 left-0"
      style={{ top: 0 }}
      // onMouseLeave={() => setHovered(null)}
    >
      <motion.div
        layout="preserve-aspect"
        className="flex items-center justify-between w-full h-full p-3"
      >
        {" "}
        <Link
          href={"/"}
          className="text-2xl font-semibold font-sans cursor-pointer w-20 relative overflow-hidden aspect-[422/300]"
        >
          <Image
            className="object-cover"
            src={"/images/CM-Roofing-Solutions-300.png"}
            fill
            alt=""
          ></Image>
        </Link>
        <div className="">
          <button onClick={handleOpen} className="">
            <Menu size={40} strokeWidth={1} />
          </button>
        </div>
      </motion.div>
      <motion.div className="" layout="preserve-aspect">
        {navlinks.map((navlink, index) => {
          return <SmallNavLink key={index} />;
        })}
      </motion.div>
    </motion.header>
  );
}

function SmallNavLink() {
  return <div className=""></div>;
}

export function NavbarLarge() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.header
      layout
      className="w-full flex fixed flex-col z-50 bg-inherit top-0 left-0 lg:px-20"
      style={{ top: 0 }}
      onMouseLeave={() => setHovered(null)}
    >
      <motion.div
        layout="preserve-aspect"
        className="flex items-center justify-between w-full h-full min-h-20"
      >
        <Link
          href={"/"}
          className="text-2xl font-semibold font-sans cursor-pointer w-20 relative overflow-hidden aspect-[422/300]"
        >
          <Image
            className="object-cover"
            src={"/images/CM-Roofing-Solutions-300.png"}
            fill
            alt=""
          ></Image>
        </Link>
        <div className="flex gap-10 font-bold text-md h-full ">
          {navlinks.map((navlink, index) => {
            return (
              <Link
                href={navlink.url}
                key={navlink.text}
                onMouseEnter={() => setHovered(index)}
                className="cursor-pointer py-2"
              >
                {navlink.text.toUpperCase()}
              </Link>
            );
          })}
          <div className="border-black border-l-2"></div>
          <Link href={"/contact"} className="py-2">
            CONTACT
          </Link>
        </div>
      </motion.div>
      <motion.div layout="preserve-aspect">
        {hovered != null && (
          <Dropdown key={hovered} navlink={navlinks[hovered]} />
        )}
      </motion.div>
      <motion.div
        layout="preserve-aspect"
        className="w-full h-12 flex items-center gap-10 font-bold bg-black text-white px-3"
      >
        <div className="flex flex-row gap-2 mr-auto text-sm lg:text-base items-center">
          <House size={20} />
          Serving: Muskoka, Dufferin & Simcoe County
        </div>
        <Link
          className="flex flex-row gap-2 hover:underline items-center text-sm lg:text-base"
          href="tel:+19057577663"
        >
          <Phone size={20} />
          (905) 757 - 7663
        </Link>
        <Link
          className="flex flex-row gap-2 hover:underline items-center text-sm lg:text-base"
          href={`mailto:${email}`}
        >
          <Mail size={20} />
          info@cmroofingsolutions.ca
        </Link>
      </motion.div>
      {/* <motion.div className="border-b-2 border-black" layout></motion.div> */}
    </motion.header>
  );
}

function Dropdown({ navlink }: { navlink: NavlinkType }) {
  if (!navlink.dropdownLinks) return null;
  const column1 = navlink.dropdownLinks.slice(
    0,
    navlink.dropdownLinks.length / 2
  );
  const column2 = navlink.dropdownLinks.slice(navlink.dropdownLinks.length / 2);

  return (
    <motion.div
      className="w-full overflow-hidden pb-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <div className="flex lg:flex-row flex-col justify-between w-full">
        <p className="text-xl w-3/12 font-light font-sans">
          {navlink.dropdownText}
        </p>
        <div className="text-3xl font-bold font-sans w-7/12 flex flex-row">
          <div className="w-1/2 flex flex-col">
            {column1.map((link) => (
              <DropdownLink key={link.text} text={link.text} url={link.url} />
            ))}
          </div>
          <div className="w1/2 flex flex-col">
            {column2.map((link) => (
              <DropdownLink key={link.text} text={link.text} url={link.url} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function DropdownLink({ text, url }: { text: string; url: string }) {
  return (
    <Link href={url} className="text-wrap">
      <span className="underline-effect">{text}</span>
      <style jsx>{`
        .underline-effect {
          width: calc(100%);
          background-size: 0% 2px;
          background-position: bottom left;
          background-repeat: no-repeat;
          background-image: linear-gradient(
            transparent calc(100% - 10px),
            black 10px
          );
          transition: background-size 0.3s ease;
        }
        .underline-effect:hover {
          background-size: 100% 2px;
        }
      `}</style>
    </Link>
  );
}

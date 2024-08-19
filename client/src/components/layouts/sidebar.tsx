"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarMenu = [
  {
    name: "Dashboard",
    icon: "/Restaurant_Location.png",
    href: "/",
  },
  {
    name: "Food Order",
    icon: "/Delivery_Scooter.png",
    href: "/food-order",
  },
  {
    name: "Favorites",
    icon: "Review.png",
    href: "/favorites",
  },
  {
    name: "Messages",
    icon: "/Order_Discussion.png",
    href: "/messages",
  },
  {
    name: "Orders History",
    icon: "/24_Hour_Food_Delivery.png",
    href: "/orders",
  },
  {
    name: "Bills",
    icon: "/Bill.png",
    href: "/bills",
  },
  {
    name: "Settings",
    icon: "/Setting.png",
    href: "/settings",
  },
];

export default function Sidebar() {
  const pathName = usePathname();

  return (
    <div className="hidden w-[345px] flex-col items-center md:flex">
      <h1 className="text-3xl font-bold">
        GoMeal<span className="text-2xl text-yellow-500">.</span>
      </h1>
      <div className="mt-10 flex w-[200px] flex-col items-center gap-4">
        {sidebarMenu.map((menu, index) => (
          <Link
            href={menu.href}
            key={index}
            className={`sidebar_link ${pathName === menu.href ? "bg-[#F8B602]" : "text-[#A098AE]"}`}
          >
            <Image
              src={`${menu.icon}`}
              alt="Restaurant_Location"
              width={40}
              height={40}
              className="ml-2 h-10 w-10"
            />
            <span className="ml-2"> {menu.name} </span>
          </Link>
        ))}
        <div className="relative flex min-h-[100px] w-full flex-col gap-4 overflow-hidden rounded-xl border border-red-400 bg-[#F8B602] p-4 font-bold text-white">
          <span>Upgrade your Account to Get Free Voucher</span>
          <button className="w-fit rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black">
            Upgrade
          </button>
          <div className="absolute -bottom-20 -right-24 h-[170px] w-[170px] rounded-full bg-white/50"></div>
        </div>
      </div>
    </div>
  );
}

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
    <div className="flex w-[345px] flex-col items-center">
      <h1 className="text-3xl font-bold">
        GoMeal<span className="text-2xl text-yellow-500">.</span>
      </h1>
      <div className="mt-10 flex flex-col items-center gap-4">
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
      </div>
    </div>
  );
}

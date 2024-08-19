import ProductCard from "@/components/ProductCard";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Hello, Patricia</h1>
        <form className="relative flex w-[300px] items-center pt-1">
          <input
            type="text"
            className="w-full rounded-lg p-2"
            placeholder="what do you want eat today"
          />
          <SearchIcon className="absolute right-2 size-6 cursor-pointer text-yellow-500" />
        </form>
      </div>
      <div className="relative mt-4 flex justify-between gap-4 overflow-hidden rounded-lg bg-yellow-400 px-8">
        <div className="flex w-1/2 flex-col justify-center">
          <h2 className="text-xl font-bold text-white">
            Get Discount Voucher Up To 20%
          </h2>
          <span className="text-sm text-gray-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </span>
        </div>
        <div className="z-10 flex w-1/2 justify-center">
          <img src="/girl_baner.png" className="rounded-lg" alt="food" />
        </div>
        <div className="absolute -bottom-40 -left-10 h-[250px] w-[250px] rounded-full border-[50px] border-white/20 bg-transparent"></div>
        <div className="absolute -bottom-40 -right-10 h-[250px] w-[250px] rounded-full border-[50px] border-white/20 bg-transparent"></div>
        <div className="absolute -top-32 right-32 z-[1] h-[200px] w-[200px] rounded-full border-[50px] border-white/20 bg-transparent"></div>
      </div>
      <div className="mt-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold">Category</h2>
          <Link href={"/"} className="text-sm font-bold text-yellow-400">
            See all &gt;
          </Link>
        </div>
        <div className="flex items-center gap-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="flex h-[100px] w-[100px] flex-col items-center justify-center gap-2 rounded-lg bg-white"
            >
              <img src="/Baked.png" alt="burger" className="h-10 w-10" />
              <span className="text-sm text-gray-400">Bakery</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold">Popular Dishes</h2>
          <Link href={"/"} className="text-sm font-bold text-yellow-400">
            See all &gt;
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <ProductCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const SearchIcon = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
    />
  </svg>
);

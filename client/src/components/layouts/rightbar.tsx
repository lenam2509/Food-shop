import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Rightbar() {
  return (
    <div className="flex w-[400px] flex-col gap-4 px-8 pb-4">
      <div className="flex items-center justify-between text-black">
        <div className="flex items-center gap-4">
          <div className="relative cursor-pointer">
            <Image
              src={"/Order_Discussion2.png"}
              width={40}
              height={40}
              alt=""
            />
            <div className="absolute right-0 top-1 h-2 w-2 rounded-full bg-yellow-300"></div>
          </div>
          <div className="relative cursor-pointer">
            <Image src={"/notification.png"} width={40} height={40} alt="" />
            <div className="absolute right-0 top-1 h-2 w-2 rounded-full bg-yellow-300"></div>
          </div>
          <div className="relative cursor-pointer">
            <Image src={"/Setting2.png"} width={40} height={40} alt="" />
          </div>
        </div>
        <Avatar className="cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <h2 className="text-lg font-bold">Your Balance</h2>
      <div className="relative flex min-h-[100px] w-[330px] gap-4 overflow-hidden rounded-xl bg-[#F8B602] px-4 py-8">
        <div className="z-10 flex w-fit flex-col gap-1 rounded-lg bg-white p-4">
          <span className="text-sm font-medium">Balance</span>
          <span className="text-2xl font-bold">$12.000</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-fit w-fit cursor-pointer rounded-2xl bg-white p-4">
            <Image
              src={"/Income.png"}
              width={30}
              height={30}
              alt=""
              className=""
            />
          </div>
          <span className="font-semibold text-white">Income</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-fit w-fit cursor-pointer rounded-2xl bg-white p-4">
            <Image
              src={"/Profit.png"}
              width={30}
              height={30}
              alt=""
              className=""
            />
          </div>
          <span className="font-semibold text-white">Profit</span>
        </div>
        <div className="absolute -left-28 top-0 h-[200px] w-[230px] rounded-full bg-orange-300"></div>
      </div>
      <div className="mt-4 flex flex-col">
        <span className="text-[#A098AE]">Your Address</span>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src={"/vector_address.png"} alt="" width={20} height={20} />
            <span className="font-bold">Elm Street, 23</span>
          </div>
          <button className="rounded-lg border border-[#F8B602] bg-transparent px-4 py-1 text-[#F8B602]">
            Change
          </button>
        </div>
        <span className="mt-2 w-full text-sm text-[#A098AE]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </span>
        <div className="mt-4 flex items-center gap-4">
          <button className="rounded-lg border border-[#A098AE] bg-transparent px-4 py-1 text-sm">
            Add Details
          </button>
          <button className="rounded-lg border border-[#A098AE] bg-transparent px-4 py-1 text-sm">
            Add Note
          </button>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        <h1 className="text-lg font-bold">Order Menu</h1>
        <div className="flex flex-col gap-4 border-b border-gray-500 py-4">
          {Array.from({ length: 1 }).map((_, index) => (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Image src={"/pizza.png"} width={100} height={100} alt="" />
                <div className="flex flex-col">
                  <span>Pepperoni Pizza </span>
                  <span className="text-[#A098AE]">1x</span>
                </div>
              </div>
              <span className="font-bold">
                <b className="text-[#F8B602]">$</b>5.00
              </span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text text-sm text-[#A098AE]">Service</span>
            <span className="font-bold">
              <b className="text-[#F8B602]">$</b>5.00
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-base font-semibold">Total</span>
            <span className="font-bold">
              <b className="text-[#F8B602]">$</b>10.00
            </span>
          </div>
          <button className="rounded-lg border border-[#F8B602] px-4 py-2 font-semibold">
            Have a coupon code?
          </button>
          <button className="rounded-lg bg-[#F8B602] px-4 py-2 font-bold text-white">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

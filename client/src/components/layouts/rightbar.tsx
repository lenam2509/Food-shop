import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Rightbar() {
  return (
    <div className="flex w-[400px] flex-col gap-4 px-8">
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
      <div className="flex min-h-[100px] w-[330px] gap-4 rounded-xl bg-[#F8B602] px-4 py-8">
        <div className="flex w-fit flex-col gap-1 rounded-lg bg-white p-4">
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
      </div>
    </div>
  );
}

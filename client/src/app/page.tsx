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
      <div className="mt-4 flex min-h-[200px] items-center justify-between gap-4 rounded-lg bg-yellow-400 px-8">
        <div className="w-1/2">
          <h2 className="text-xl font-bold text-white">
            Get Discount Voucher Up To 20%
          </h2>
          <span className="text-sm text-gray-100">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </span>
        </div>
        <div className="flex w-1/2 justify-center">
          <img
            src="https://th.bing.com/th/id/OIP.SRh66QF_5VFgmVeg8m3u-wHaJe?pid=ImgDet&w=134.4255319148936&h=180&c=7"
            className="rounded-lg"
            alt="food"
          />
        </div>
      </div>
      <div>
        
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

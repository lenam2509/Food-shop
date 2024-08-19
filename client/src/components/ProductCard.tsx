import { Card, CardHeader } from "./ui/card";

export default function ProductCard() {
  return (
    <Card>
      <CardHeader>
        <img src="/burger.png" alt="burger" className="mx-auto h-28 w-40" />
        <div className="flex flex-col">
          <div className="flex text-sm text-yellow-400">
            {Array.from({ length: 5 }).map((_, index) => (
              <StarIcon key={index} />
            ))}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-sm font-bold">Burger King</span>
              <p className="text-sm font-bold">
                <span className="text-yellow-500">$</span>5.59
              </p>
            </div>
            <button className="rounded bg-yellow-400 px-2 text-white">+</button>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}

const StarIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-6"
  >
    <path
      fillRule="evenodd"
      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
      clipRule="evenodd"
    />
  </svg>
);

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 text-lg font-bold">
      <h2>Not Found</h2>
      <Link href="/" className="rounded-lg bg-yellow-300 p-2">
        &lt; Return Home
      </Link>
    </div>
  );
}

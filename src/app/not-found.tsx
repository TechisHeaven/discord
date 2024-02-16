import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center flex-col justify-center gap-8  py-40">
      <h6 className="text-yellow-400">404</h6>
      <h1 className="text-5xl font-bold">Page Not Found</h1>
      <p className="text-base text-gray-500">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Link href="/channels/me" className="p-2 px-4 bg-yellow-400 rounded-md">
        Return Home
      </Link>
    </div>
  );
}

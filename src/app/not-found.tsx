import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#141414] px-6 text-white">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-red-500">404</h1>
        <h2 className="mt-4 text-3xl font-semibold">Page Not Found</h2>
        <p className="mt-2 text-neutral-400">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded bg-white px-8 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

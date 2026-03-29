import Image from "next/image";


export default function Home() {
  return (
      <main>
        <div className="flex h-full items-center justify-center">
          <Image
            src="/logo.png"
            alt="SalesPulse Logo"
            width={200}
            height={200}
            className="animate-pulse"
          />
        </div>
      </main>
  );
}

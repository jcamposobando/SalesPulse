import AppLayout from "../components/layouts/AppLayout";
import Image from "next/image";
import "@/app/globals.css";

export default function Home() {
  return (
    <AppLayout>
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
    </AppLayout>
  );
}

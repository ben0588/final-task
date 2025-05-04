"use client";

import Banner from "@/components/pages/home/Banner";
import Service from "@/components/pages/home/Service";

export default function Home() {
  return (
    <section className="w-full">
      <Banner />

      <div className="mx-auto max-w-7xl">
        <Service />
      </div>
    </section>
  );
}

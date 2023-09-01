import Hero from "@/components/sections/Hero";
import OurProduct from "@/components/sections/OurProduct";
import WhatWeServe from "@/components/sections/WhatWeServe";
import { fetchMongoProduct } from "./_action";

export default async function Home() {
  const products = await fetchMongoProduct();
  return (
    <main className="max-w-[1450px] mx-auto overflow-hidden">
      <Hero />
      <WhatWeServe />
      <OurProduct products={products} />
    </main>
  );
}

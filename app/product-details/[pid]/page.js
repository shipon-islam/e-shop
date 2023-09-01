import { fetchProductById } from "@/app/_action";
import ProductInfo from "@/components/sections/ProductInfo";
export default async function ProductDetails({ params }) {
  const product = await fetchProductById(params.pid);
  return (
    <main className="container-div">
      <ProductInfo product={product} />
    </main>
  );
}

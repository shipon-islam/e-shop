import ProductCard from "../ProductCard";
export default function OurProduct({ products }) {
  return (
    <section className="mt-8 container-div">
      <div className="text-center">
        <h5 className="text-sm  text-yellow-600">Our product</h5>
        <h2 className="text-xl font-semibold capitalize">
          our popular products
        </h2>
        <p className="w-[90%] sm:w-[60%] mx-auto text-sm capitalize mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sequi
          illo quis corporis delectus ab facilis similique eum doloremque culpa!
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 sm:gap-8 mt-8 grid-flow-dense ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}


import { getNewArrivals } from "../actions/fetchArrivals";
import ProductCardNew from "./ProductCardNew";


export default async function NewArrivals() {
  const products = await getNewArrivals();

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-6">
        <span className="text-teal-500">New</span> Arrivals
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {products.map((product) => (
          <ProductCardNew key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

import ProductCard from "../components/ProductCard";
import { getAllProducts } from "../lib/shopify";

export default function Home({ products }) {
  return (
    <div className="">
      <div className="">
        <h2 className="">Products</h2>
        <div className="">
          {products.map((product) => (
            <ProductCard key={product.node.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const products = await getAllProducts();

  return {
    props: { products }, // will be passed to the page component as props
  };
}

import Link from "next/link";

const ProductCard = ({ product }) => {
  const { handle, title } = product.node;

  const { altText, originalSrc } = product.node.images.edges[0].node;

  const price = product.node.priceRange.minVariantPrice.amount;
  console.log(product);

  return (
    <Link href={`/products/${handle}`}>
      <a className="">
        <div className="">
          <div className="">
            <img src={originalSrc} alt={altText} />
          </div>
        </div>
        <h3 className="">{title}</h3>
        <p className="">{price}</p>
      </a>
    </Link>
  );
};

export default ProductCard;

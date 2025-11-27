import Banner from "../components/Banner";
import Category from "../components/Category";
import ProductGrid from "../components/ProductGrid";

export default function () {
  return (
    <>
      <div>
        <Banner />
      </div>
      <div>
        <ProductGrid />
      </div>
      <div>
        <Category />
      </div>
    </>
  );
}

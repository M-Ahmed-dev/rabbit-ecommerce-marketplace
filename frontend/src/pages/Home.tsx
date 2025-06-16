import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetail from "../components/Products/ProductDetail";

function Home() {
  return (
    <>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />

      {/* Best Seller */}

      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      <ProductDetail />
    </>
  );
}

export default Home;

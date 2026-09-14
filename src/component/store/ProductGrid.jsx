import toteBag from "../../assets/images/toteBag.png";
import flowerCard from "../../assets/images/flowerCard.png";

const products = [
  { id: 1, name: "Hand Drawn Tote Bag", price: 899, image: flowerCard },
  { id: 2, name: "Hand Drawn Tote Bag", price: 899, image: toteBag },
  { id: 3, name: "Hand Drawn Tote Bag", price: 899, image: flowerCard },
  { id: 4, name: "Hand Drawn Tote Bag", price: 899, image: toteBag },
  { id: 5, name: "Hand Drawn Tote Bag", price: 899, image: flowerCard },
  { id: 6, name: "Hand Drawn Tote Bag", price: 899, image: toteBag },
];

const ProductGrid = () => {
  return (
    /* collection-view */
    <section className="w-full bg-white py-16 sm:py-20 lg:py-[120px]">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-x-6 gap-y-12 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-3 lg:gap-y-[72px] lg:px-[57px]">
        {products.map((product) => (
          <article key={product.id} className="flex w-full flex-col">
            {/* Frame 1984078545 — 426 x 380, radius 16 */}
            <div className="flex aspect-[426/380] w-full items-center justify-center rounded-[16px] bg-[#FAF7F0]">
              {/* image 56 — 263.42 x 310.4 (61.8% x 81.7% of the tile) */}
              <img
                src={product.image}
                alt={product.name}
                className="h-[81.7%] w-[61.8%] object-contain"
              />
            </div>

            {/* title + price */}
            <div className="mt-8 flex items-center justify-between gap-4">
              <h3 className="font-['Sora'] text-[16px] font-normal leading-[18.2px] text-[#1C1C1C]">
                {product.name}
              </h3>
              <span className="font-['Inter'] text-[18px] font-medium leading-[18.2px] text-[#000000]">
                ₹{product.price}
              </span>
            </div>

            {/* Frame 1984078540 — Buy Now */}
            <button
              type="button"
              className="mt-5 flex h-[44px] w-full max-w-[178px] items-center justify-center rounded-[8px] bg-[#121212] font-['Inter'] text-[15px] font-normal capitalize leading-none text-[#FFF9F7] transition-opacity duration-200 hover:opacity-90"
            >
              Buy Now
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;

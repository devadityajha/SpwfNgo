import { useState } from "react";

const cellBase =
  "flex h-full items-center justify-center px-8 font-['Inter'] text-[12px] font-normal uppercase tracking-[0.12em] text-[#111111]";

const StoreFilterBar = ({ productCount = 6 }) => {
  const [columns, setColumns] = useState(4);

  return (
    /* facet-filters-form */
    <div className="flex h-[67px] w-full items-stretch border-y border-[#E6E2E1] bg-white">
      {/* left group */}
      <div className="flex items-stretch">
        <button
          type="button"
          className={`${cellBase} border-r border-[#E6E2E1]`}
        >
          Filters
        </button>

        <button
          type="button"
          className={`${cellBase} gap-2 border-r border-[#E6E2E1]`}
        >
          Sort by
          <svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M1 1L5 5L9 1"
              stroke="#111111"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* centre count */}
      <div className="flex flex-1 items-center justify-center px-4 font-['Inter'] text-[12px] font-normal uppercase tracking-[0.12em] text-[#111111]">
        {String(productCount).padStart(2, "0")} Products
      </div>

      {/* right view toggles */}
      <div className="hidden items-stretch border-l border-[#E6E2E1] sm:flex">
        {[3, 4].map((count) => (
          <button
            key={count}
            type="button"
            onClick={() => setColumns(count)}
            aria-label={`Show ${count} products per row`}
            aria-pressed={columns === count}
            className={`flex h-full items-center gap-[3px] px-5 ${
              columns === count ? "opacity-100" : "opacity-40"
            }`}
          >
            {Array.from({ length: count }).map((_, i) => (
              <span
                key={i}
                className="block h-[14px] w-[4px] border border-[#111111]"
              />
            ))}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StoreFilterBar;

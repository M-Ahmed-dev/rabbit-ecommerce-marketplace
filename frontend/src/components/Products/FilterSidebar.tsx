import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  brands,
  categories,
  colors,
  genders,
  materials,
  sizes,
} from "../../data";

type Filters = {
  category: string;
  gender: string;
  color: string;
  size: string[];
  material: string[];
  brand: string[];
  minPrice: number;
  maxPrice: number;
};

function FilterSidebar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [priceRange, setPriceRange] = useState<number[]>([0, 100]);

  const [filter, setFilters] = useState<Filters>({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });
  const params = Object.fromEntries([...searchParams]);

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);

    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params?.size ? params.size.split(",") : [],
      material: params?.material ? params.material.split(",") : [],
      brand: params?.brand ? params.brand.split(",") : [],
      minPrice: Number(params?.minPrice) || 0,
      maxPrice: Number(params?.maxPrice) || 100,
    });

    setPriceRange([0, Number(params.maxPrice) || 100]);
  }, [searchParams]);

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    let newFilters = { ...filter };
    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value];
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value);
      }
    } else {
      newFilters[name] = value;
    }
    setFilters(newFilters);
    updateUrlParams(newFilters);
    console.log(newFilters, value);
  };

  const updateUrlParams = (newFilters) => {
    const params = new URLSearchParams();
    Object.keys(newFilters).forEach((key) => {
      if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
        params.append(key, newFilters[key].join(","));
      } else if (newFilters[key]) {
        params.append(key, newFilters[key]);
      }
    });
    setSearchParams(params);
    navigate(`?${params.toString()}`);
  };

  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    console.log("price", typeof newPrice);
    setPriceRange([0, Number(newPrice)]);
    const newFilters = { ...filter, minPrice: 0, maxPrice: newPrice };
    setFilters(newFilters);
    updateUrlParams(newFilters);
  };

  return (
    <div className="p-4">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>

      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Category</label>

        {categories.map((category) => (
          <div key={category} className="flex items-center mb-1">
            <input
              type="radio"
              name="category"
              value={category}
              onChange={handleFilterChange}
              checked={filter.category === category}
              className="mr-2 cursor-pointer h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{category}</span>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Gender</label>

        {genders.map((gender) => (
          <div key={gender} className="flex items-center mb-1">
            <input
              type="radio"
              name="gender"
              value={gender}
              onChange={handleFilterChange}
              checked={filter.gender === gender}
              className="mr-2 cursor-pointer h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{gender}</span>
          </div>
        ))}
      </div>

      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Color</label>

        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              name="color"
              value={color}
              onClick={handleFilterChange}
              className={`w-8 h-8 rounded-full border-gray-300 cursor-pointer transition hover:scale-105 ${
                filter.color === color ? "ring-2 ring-blue-500" : ""
              }`}
              style={{ backgroundColor: color.toLowerCase() }}
            ></button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Size</label>

        <div className="flex flex-col flex-wrap gap-2">
          {sizes.map((size) => (
            <div key={size} className="flex items-center mb-1">
              <input
                type="checkbox"
                name="size"
                value={size}
                onChange={handleFilterChange}
                checked={filter.size.includes(size)}
                className="mr-2 cursor-pointer h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
              />
              <span className="text-gray-700">{size}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">
          Materials
        </label>

        <div className="flex flex-col flex-wrap gap-2">
          {materials.map((material) => (
            <div key={material} className="flex items-center mb-1">
              <input
                type="checkbox"
                name="material"
                value={material}
                onChange={handleFilterChange}
                checked={filter.material.includes(material)}
                className="mr-2 cursor-pointer h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
              />
              <span className="text-gray-700">{material}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Brands</label>

        <div className="flex flex-col flex-wrap gap-2">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center mb-1">
              <input
                type="checkbox"
                name="brand"
                value={brand}
                onChange={handleFilterChange}
                checked={filter.brand.includes(brand)}
                className="mr-2 cursor-pointer h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
              />
              <span className="text-gray-700">{brand}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <label className="block text-gray-600 font-medium mb-2">
          Price Range
        </label>

        <input
          onChange={handlePriceChange}
          type="range"
          name="priceRange"
          value={Number(priceRange[1])}
          min={0}
          max={100}
          className="w-full h-2 bg-gray-300 rouned-lg appearance-none cursor-pointer"
        />

        <div className="flex justify-between text-gray-600 mt-2">
          $ {priceRange[1]}
        </div>
      </div>
    </div>
  );
}

export default FilterSidebar;

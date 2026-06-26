import SectionTitle from "@/components/SectionTitle";
import ProductSearch from "./ProductSearch";
import { getSearchProducts } from "@/services/products";

export default async function SearchPage({ searchParams }) {
  const { search } = await searchParams;
  const products = await getSearchProducts(search);

  console.log("search products", products);

  return (
    <div className="">
      <SectionTitle
        title="Search List"
        subtitle="The products endpoint provides a comprehensive dataset"
      />

      <div className="">
        <ProductSearch />
      </div>
    </div>
  );
}

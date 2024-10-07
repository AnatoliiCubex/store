import ProductCard from "~/app/views/products-view/components/product-card/product-card";
import { useProductsViewLogic } from "~/app/views/products-view/products-view.logic";
import { useProductsViewStyle } from "~/app/views/products-view/products-view.style.";

import type { Product } from "~/app/basics/types/product.type";

export default async function ProductsView() {
  const { data } = await useProductsViewLogic();
  const styles = useProductsViewStyle();

  return (
    <div className={styles.container}>
      {data.products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

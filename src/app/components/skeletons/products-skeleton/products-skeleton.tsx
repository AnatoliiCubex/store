import React from "react";

import { useProductsSkeletonStyle } from "~/components/skeletons/products-skeleton/products-skeleton.style";

const ProductsSkeleton = () => {
  const styles = useProductsSkeletonStyle();

  return (
    <div className={styles.container}>
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className={styles.card}>
          <div className={styles.image} />
          <h2 className={styles.title} />
          <p className={styles.description} />
          <p className={styles.price} />
        </div>
      ))}
    </div>
  );
};

export default ProductsSkeleton;

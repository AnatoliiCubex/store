import React, { Suspense } from "react";

import ProductsSkeleton from "~/components/skeletons/products-skeleton/products-skeleton";
import ProductsView from "~/views/products-view/products-view";

function Page() {
  return (
    <Suspense fallback={<ProductsSkeleton />}>
      <ProductsView />
    </Suspense>
  );
}

export default Page;

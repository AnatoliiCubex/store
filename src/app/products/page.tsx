import React, { Suspense } from "react";

import ProductsSkeleton from "~/app/components/skeletons/products-skeleton/products-skeleton";
import ProductsView from "~/app/views/products-view/products-view";

function Page() {
  return (
    <Suspense fallback={<ProductsSkeleton />}>
      <ProductsView />
    </Suspense>
  );
}

export default Page;

import React from "react";

import ProductView from "~/views/product-view/product-view";

async function Page({ params }: { params: { id: string } }) {
  return <ProductView params={params} />;
}

export default Page;

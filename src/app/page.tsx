import { Suspense } from "react";

import ProductsSkeleton from "~/app/components/skeletons/products-skeleton/products-skeleton";
import HomeView from "~/app/views/home-view/home-view";

export default async function Page() {
  return (
    <main>
      <Suspense fallback={<ProductsSkeleton />}>
        <HomeView />
      </Suspense>
    </main>
  );
}

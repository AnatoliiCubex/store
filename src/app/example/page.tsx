import { Suspense } from "react";

import ExampleSkeleton from "~/app/components/skeletons/example-skeleton/example-skeleton";
import ExampleView from "~/app/views/example-view/exampe-view";

export default async function Page() {
  return (
    <Suspense fallback={<ExampleSkeleton />}>
      <ExampleView />
    </Suspense>
  );
}

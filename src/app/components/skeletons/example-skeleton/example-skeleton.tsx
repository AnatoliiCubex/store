import React from "react";

import { useExampleSkeletonStyle } from "~/app/components/skeletons/example-skeleton/example-skeleton.style";

const ExampleSkeleton = () => {
  const styles = useExampleSkeletonStyle();

  return (
    <div className={styles.container}>
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className={styles.card}>
          <h2 className={styles.title} />
          <p className={styles.description} />
          <p className={styles.price} />
        </div>
      ))}
    </div>
  );
};

export default ExampleSkeleton;

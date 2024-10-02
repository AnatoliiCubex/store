import Link from "next/link";

import { Button } from "~/app/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "~/app/components/ui/card";
import { useExampleViewLogic } from "~/app/views/example-view/example-view.logic";
import { useExampleViewStyle } from "~/app/views/example-view/example-view.style";

export default async function ExampleView() {
  const { data } = await useExampleViewLogic();
  const styles = useExampleViewStyle();

  return (
    <>
      <Link href={"/"}>
        <Button className='mt-3 ml-3'>← Go back</Button>
      </Link>
      <div className={styles.container}>
        {data.products.map((product) => (
          <Card key={product.id} className={styles.card}>
            <CardTitle>{product.title}</CardTitle>
            <CardDescription>{product.description}</CardDescription>
            <CardFooter className={styles.cardFooter}>
              <div>${product.price}</div>
              <Button>View →</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}

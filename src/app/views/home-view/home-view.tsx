import { ArrowRightIcon, StarFilledIcon } from "@radix-ui/react-icons";
import Image from "next/image";

import { Button } from "~/app/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "~/app/components/ui/card";
import { useHomeViewLogic } from "~/app/views/home-view/home-view.logic";
import { useHomeViewStyle } from "~/app/views/home-view/home-view.style.";

import type { Product } from "~/app/basics/types/product.type";

export default async function HomeView() {
  const { data } = await useHomeViewLogic();
  const styles = useHomeViewStyle();

  return (
    <div className={styles.container}>
      {data.products.map((product: Product) => (
        <Card key={product.id} className={styles.card}>
          <div className={styles.productCategory}>{product.category}</div>

          <div className={styles.imageContainer}>
            <Image
              src={product.image}
              alt={product.title}
              fill
              className='object-contain'
            />
          </div>

          <CardTitle className='leading-tight'>{product.title}</CardTitle>

          <div className='flex items-center mb-2'>
            <StarFilledIcon color='#FFD700' className='mr-1 w-5 h-5' />
            <span>{product.rating.rate.toFixed(1)}</span>
            <span className='ml-1 text-gray-400'>({product.rating.count})</span>
          </div>

          <CardDescription>{product.description}</CardDescription>

          <CardFooter className={styles.cardFooter}>
            <div>${product.price}</div>
            <Button>
              View <ArrowRightIcon className='ml-2 w-4 h-4' />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

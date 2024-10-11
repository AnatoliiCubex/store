import React from "react";

import { StarFilledIcon } from "@radix-ui/react-icons";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "~/components/ui/card";
import { useProductCardStyle } from "~/views/products-view/components/product-card/product-card.style";

import type { Product } from "~/basics/types/product.type";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  const styles = useProductCardStyle();

  return (
    <Card className={styles.card}>
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

      <div className={styles.ratingContaner}>
        <StarFilledIcon color='#FFD700' className='mr-1 w-5 h-5' />
        <span>{product.rating.rate.toFixed(1)}</span>
        <span className='ml-1'>({product.rating.count})</span>
      </div>

      <CardDescription>{product.description}</CardDescription>

      <CardFooter className={styles.cardFooter}>
        <div>${product.price}</div>
        <Link href={`/products/${product.id}`}>
          <Button>
            View <ArrowRightIcon className='ml-2 w-4 h-4' />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

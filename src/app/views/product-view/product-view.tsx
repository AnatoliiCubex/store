import React from "react";

import { StarFilledIcon } from "@radix-ui/react-icons";
import { ShoppingBag } from "lucide-react";
import Image from "next/image";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "~/components/ui/card";
import { useProductViewLogic } from "~/views/product-view/product-view.logic";
import { useProductViewStyle } from "~/views/product-view/product-view.style";

async function ProductView({ params }: { params: { id: string } }) {
  const id = +params.id;

  const { data } = await useProductViewLogic(id);
  const styles = useProductViewStyle();

  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <CardContent className={styles.cardContent}>
          <div className={styles.leftSide}>
            <div className={styles.mainImageContainer}>
              <Image
                src={data.product.image}
                alt={data.product.title}
                className={styles.mainImage}
                fill
              />
            </div>

            <div className={styles.imageThumbnails}>
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className={styles.singleThumbnailContainer}>
                  <Image
                    src={data.product.image}
                    alt={`${data.product.title} thumbnail ${i + 1}`}
                    className={styles.mainImage}
                    fill
                  />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.rightSide}>
            <CardTitle className={styles.cardTitle}>
              {data.product.title}
            </CardTitle>
            <CardDescription className={styles.cardDescription}>
              {data.product.description}. {data.product.description}. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Eaque suscipit
              quisquam saepe natus, iure sit consectetur perspiciatis quis
              architecto fugit aperiam odit odio praesentium corporis eligendi
              magnam, soluta assumenda velit?
            </CardDescription>
            <div className={styles.ratingContainer}>
              <div className={styles.starContainer}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarFilledIcon
                    key={index}
                    className={styles.starIcon(
                      index < Math.round(data.product.rating.rate)
                    )}
                  />
                ))}
              </div>
              <span className={styles.ratingText}>
                ({data.product.rating.rate.toFixed(1)})
              </span>
            </div>
            <div className={styles.priceContainer}>
              <h2 className={styles.price}>${data.product.price.toFixed(2)}</h2>
              <Button variant='outline' className={styles.addToCartButton}>
                <ShoppingBag className={styles.cartIcon} />
                Add to cart
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProductView;

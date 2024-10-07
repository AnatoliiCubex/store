import { NextResponse } from "next/server";

import { ProductService } from "~/app/api/services/product.service";

import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const products = await ProductService.getProducts();

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}

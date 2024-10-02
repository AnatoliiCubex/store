import { NextResponse } from "next/server";

import { ExampleService } from "~/app/api/services/example.service";

import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const products = await ExampleService.getExample();

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}

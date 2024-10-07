import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import { Button } from "~/app/components/ui/button";

export default async function Page() {
  return (
    <div className='flex justify-center items-center h-[calc(100vh-72px)]'>
      <Link href='/products'>
        <Button>
          Products <ArrowRightIcon className='ml-2 w-5 h-5' />
        </Button>
      </Link>
    </div>
  );
}

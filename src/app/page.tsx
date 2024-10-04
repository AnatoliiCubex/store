import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

import { logout } from "~/app/basics/utils/actions.util";
import { Button } from "~/app/components/ui/button";
import { auth } from "~/auth";

export default async function Page() {
  const session = await auth();

  return (
    <div className='flex flex-col h-screen'>
      <header className='flex justify-between items-center bg-gray-100 p-4'>
        <div className='flex items-center gap-4'>
          <Image
            src={session?.user?.image ?? ""}
            alt={session?.user?.name ?? "user_image"}
            width={48}
            height={48}
            className='rounded-full'
          />
          <h1 className='font-bold text-lg'>{session?.user?.name}</h1>
        </div>
        <form action={logout} method='post'>
          <Button type='submit' variant='outline'>
            Sign out
          </Button>
        </form>
      </header>

      <main className='flex flex-grow justify-center items-center'>
        <Link href={"/example"}>
          <Button variant={"outline"}>
            Go to example page
            <ArrowRightIcon className='ml-2 w-4 h-4' />
          </Button>
        </Link>
      </main>
    </div>
  );
}

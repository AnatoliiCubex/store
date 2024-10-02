import React from "react";

import { GitHubLogoIcon } from "@radix-ui/react-icons";

import { login } from "~/app/basics/utils/actions.util";
import { Button } from "~/app/components/ui/button";
import { Card, CardContent, CardTitle } from "~/app/components/ui/card";
import GoogleLogoIcon from "~/app/components/ui/google-logo-icon";

function Page() {
  return (
    <Card className='flex flex-col gap-2 shadow-md p-3 w-[400px]'>
      <CardTitle className='font-bold text-2xl text-center'>Login</CardTitle>
      <CardContent>
        <form action={login} className='flex flex-col gap-2'>
          <Button
            type='submit'
            name='action'
            value='google'
            className='border-gray-300 bg-white hover:bg-gray-100 border w-full text-black'
          >
            <GoogleLogoIcon className='mr-2 w-5 h-5' />
            Sign in with Google
          </Button>
          <Button type='submit' name='action' value='github' className='w-full'>
            <GitHubLogoIcon className='mr-2 w-5 h-5' />
            Sign in with GitHub
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default Page;

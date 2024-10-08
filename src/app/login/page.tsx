import React from "react";

import { GitHubLogoIcon } from "@radix-ui/react-icons";

import { login } from "~/basics/utils/actions.util";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardTitle } from "~/components/ui/card";
import GoogleLogoIcon from "~/components/ui/google-logo-icon";

function Page() {
  return (
    <div className='flex justify-center items-center w-full h-screen'>
      <Card className='flex flex-col gap-2 bg-transparent shadow-md backdrop-blur-2xl p-3 w-[400px] filter'>
        <CardTitle className='font-bold text-2xl text-center text-white'>
          Login
        </CardTitle>
        <CardContent>
          <form action={login} className='flex flex-col gap-2'>
            <Button
              type='submit'
              name='action'
              value='google'
              variant='outline'
            >
              <GoogleLogoIcon className='mr-2 w-5 h-5' />
              Sign in with Google
            </Button>
            <Button
              type='submit'
              name='action'
              value='github'
              className='w-full'
            >
              <GitHubLogoIcon className='mr-2 w-5 h-5' />
              Sign in with GitHub
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Page;

import React from "react";

import Image from "next/image";
import Link from "next/link";

import { NAVIGATION_LINKS } from "~/basics/constants/common.constant";
import HeaderMenu from "~/components/header/components/header-menu";
import ShoppingCart from "~/components/header/components/shopping-cart";
import { useHeaderStyle } from "~/components/header/header.style";
import Logo from "~/components/logo/logo";
import { Button } from "~/components/ui/button";

import { auth } from "../../../auth";

const Header = async () => {
  const session = await auth();
  const styles = useHeaderStyle();

  return (
    <header className={styles.container}>
      <Link href='/'>
        <Logo />
      </Link>

      <div className={styles.clickablesContainer}>
        <div className={styles.clickablesContainer + " mr-10"}>
          {NAVIGATION_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              <Button className={styles.linkButton} variant='link'>
                {link.label}
              </Button>
            </Link>
          ))}
        </div>

        <Link href='/profile'>
          <Image
            src={session?.user?.image ?? ""}
            alt={session?.user?.name ?? "user_image"}
            width={40}
            height={40}
            className='rounded-full'
          />
        </Link>
        <ShoppingCart />
        <HeaderMenu />
      </div>
    </header>
  );
};

export default Header;

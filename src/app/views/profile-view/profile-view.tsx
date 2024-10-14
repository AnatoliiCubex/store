import React from "react";

import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { PROFILE_TABLE_HEAD } from "~/basics/constants/profile.constant";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { useProfileViewStyle } from "~/views/profile-view/profile-view.style";

import { auth } from "../../../auth";

async function ProfileView() {
  const styles = useProfileViewStyle();
  const session = await auth();

  console.log(session);

  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <CardContent className={styles.cardContent}>
          <div className='flex gap-4'>
            <div className={styles.mainImageContainer}>
              {session?.user?.image ? (
                <Image
                  src={session.user.image}
                  alt={session.user.name || "Profile picture"}
                  className={styles.mainImage}
                  fill
                />
              ) : null}
            </div>
            <div className={styles.userInfoContainer}>
              <h1>{session?.user?.name}</h1>
              <h2>{session?.user?.email}</h2>
              <h3>Total Score: 1000</h3>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                {PROFILE_TABLE_HEAD.map((item) => (
                  <TableHead key={item}>{item}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {[1, 2, 3].map((item) => (
                <TableRow key={item}>
                  <TableCell>Product {item}</TableCell>
                  <TableCell>{new Date().toLocaleDateString()}</TableCell>
                  <TableCell>${(Math.random() * 100).toFixed(2)}</TableCell>
                  <TableCell>
                    <Link href={`/products/${item}`}>
                      <Button variant='link' size='sm'>
                        <ArrowRightIcon color='white' className='w-5 h-5' />
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export default ProfileView;

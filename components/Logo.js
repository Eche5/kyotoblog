import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../public/Images/rsz_kyoto_creative_1.png";
function Logo() {
  return (
    <Link href="/">
      <div className=" w-96">
        <Image src={logo} alt="logo" />
      </div>
    </Link>
  );
}

export default Logo;

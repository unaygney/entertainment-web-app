import React from "react";
import Logo from "@/assets/icons/logo.svg";
import Image from "next/image";

// Images

import IconHome from "@/assets/icons/icon-nav-home.svg?url";
import IconMovies from "@/assets/icons/icon-nav-movies.svg?url";
import IconSeries from "@/assets/icons/icon-nav-tv-series.svg?url";
import IconBookmark from "@/assets/icons/icon-nav-bookmark.svg?url";
import AvatarImg from "@/assets/image/image-avatar.png";

const NAV_LINKS = [
  {
    id: 0,
    icon: IconHome,
  },
  {
    id: 1,
    icon: IconMovies,
  },
  {
    id: 2,
    icon: IconSeries,
  },
  {
    id: 3,
    icon: IconBookmark,
  },
];

function Navbar() {
  return (
    <header className=" h-14 lg:h-screen md:mx-6 lg:w-24  bg-[#161D2F] lg:py-8  flex justify-between lg:justify-start items-center px-4 md:px-6 lg:flex-col md:rounded-[10px] lg:rounded-[20px]  ">
      <Logo />

      <nav className="flex gap-6 md:gap-9 lg:flex-col lg:mt-[72px] ">
        {NAV_LINKS.map((link) => (
          <button className="w-5 h-5" key={link.id}>
            <Image src={link.icon} alt="button image" className="" />
          </button>
        ))}
      </nav>

      <button className="w-6 h-6 rounded-full overflow-hidden relative border border-solid border-white lg:mt-auto">
        <Image src={AvatarImg} fill alt="user's avatar" />
      </button>
    </header>
  );
}

export default Navbar;

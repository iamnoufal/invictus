import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";

import Layout from "components/Layout";
import AuthButton from "components/button/Auth";
import Loader from "components/Loader";

import { AppContext } from "contexts/app";

import homeLg from "assets/images/home_lg.png";
import homeMob from "assets/images/home_mob.png";

const HomePage = () => {
  

  // const checkBg = () => {
  //   if (document.body.offsetWidth > 1000) {
  //     bgimg = "https://rahman24.github.io/invictus/backup/main-desk.png";
  //     document.querySelector(".bg-img").src = bgimg;
  //   } else {
  //     bgimg = "https://rahman24.github.io/invictus/backup/main-mob.png";
  //     document.querySelector(".bg-img").src = bgimg;
  //   }
  // };
  // checkBg();
  // window.addEventListener("resize", () => {
  //   checkBg();
  // });
  return (
    <Layout>
      <img
        src="https://rahman24.github.io/invictus/backup/main-desk.png"
        className="bg-img d-none d-md-block d-lg-block"
        alt="home page"
      />
      <img
        src="https://rahman24.github.io/invictus/backup/main-mob.png"
        className="bg-img d-block d-md-none d-lg-none"
        alt="home page"
      />
    </Layout>
  );
};

export default HomePage;

"use client";
import { Footer } from "../common/Footer";
import { About } from "./About";
import { Experience } from "./Experience";
import { PickUp } from "./PickUp";
import { Skills } from "./Skills";

export const Home = () => {
  return (
    <>
      <About />
      <PickUp />
      <Skills />
      <Experience />
      <Footer />
    </>
  );
};

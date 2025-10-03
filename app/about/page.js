import React from "react";
import Header from "@/common/Header";
import Footer from "@/common/Footer";
import Home from "@/components/Home";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Result from "@/components/Result";
import Contact from "@/components/Contact";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Home />
        <Problem />
        <Solution />
        <Result />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

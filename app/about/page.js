import React from "react";
import Header from "@/common/Header";
import Footer from "@/common/Footer";
import Home from "@/components/Case_study/Home";
import Problem from "@/components/Case_study/Problem";
import Solution from "@/components/Case_study/Solution";
import Result from "@/components/Case_study/Result";
import Contact from "@/components/Case_study/Contact";

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

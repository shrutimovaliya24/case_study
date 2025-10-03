import Homepage from "@/components/Case_study/Home";
import Problempage from "@/components/Case_study/Problem";
import Solutionpage from "@/components/Case_study/Solution";
import Resultpage from "@/components/Case_study/Result";
import Contactpage from "@/components/Case_study/Contact";

import Image from "next/image";
import StatsBar from "@/components/Case_study/StatsBar";

export default function Home() {
  return (
   <div>
    <Homepage />
    <StatsBar />
    <Problempage/>
    <Solutionpage/>
    <Resultpage/>
    <Contactpage/>
    
   </div>
  );
}




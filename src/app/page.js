import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="h-screen items-center justify-center flex flex-col gap-2 ">
      <h1>Welcome to the Home Page</h1>
      <p>This is the default home page.</p>
      <Button className="flex items-center gap-1 group ">
        <span> Get Started</span>
        <ArrowRight
          size={15}
          className="group-hover:translate-x-1 duration-500 transition-all mt-[2px]"
        />
      </Button>
    </div>
  );
};

export default Home;

import React from "react";
import { Button } from "@/shadcn/ui/button";
function Home() {
  return (
    <div className="w-full">
      <div className="contianer mx-auto px-4 py-8 lg:py-16">
        <h1 className="text-center text-green-500 underline text-3xl">
          Home
        </h1>
        <div className="flex justify-center mt-8">
          <Button>Example Shadcn Button</Button>
          </div>
      </div>
    </div>
  );
}

export default Home;

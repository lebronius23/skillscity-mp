import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [state, setState] =useState({});

const handleClick=() => {
  alert("You clicked the button!");

  //make API call 

  router.push("/books");
  //navigate to the books page
}

return(
  <div className="w-full">
    <Header name="Home"/>
    <button
        className="bg-blue-500 px-2 py-1 rounded"
        onClick={handleClick}
        >
          Click me!!!
        </button>

      <Footer href="/books" title="Books Page" />
  </div>
);
}

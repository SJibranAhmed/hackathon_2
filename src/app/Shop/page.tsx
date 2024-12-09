import React from "react";
import ItemDetail from "@/components/ItemDetail";
import RateAndReview from "@/components/RateAndReview";
import YouLike from "@/components/YouLike";
const page = () => {
  return (
    <main>
      <section>
        <ItemDetail />
      </section>
      <section className="flex justify-center items-center">
        <RateAndReview/>
      </section>
      <section className="flex justify-center items-center">
        <YouLike/>
      </section>
      
    </main>
  );
};

export default page;

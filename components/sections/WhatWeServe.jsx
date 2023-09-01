import ActivityCard from "../ActivityCard";

export default function WhatWeServe() {
  return (
    <section className="mt-8 container-div">
      <div className="text-center">
        <h5 className="text-sm  text-yellow-600">How it work</h5>
        <h2 className="text-xl font-semibold capitalize">What we serve</h2>
        <p className="w-[90%] sm:w-[60%] mx-auto text-sm capitalize mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sequi
          illo quis corporis delectus ab facilis similique eum doloremque culpa!
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 sm:w-[80%] mx-auto justify-content-center mt-10 gap-x-4">
        <ActivityCard
          photoUrl="/images/order.png"
          title="easy to order"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <ActivityCard
          photoUrl="/images/delivery.png"
          title="fastest delivery"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <ActivityCard
          photoUrl="/images/courier.png"
          title="best quality"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
      </div>
    </section>
  );
}

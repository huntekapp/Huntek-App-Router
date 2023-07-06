"use client";
import Image from "next/image";
import TinderCard from "react-tinder-card";
const Swipe = () => {
  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };
  return (
    <div className="w-96 h-full">
      <TinderCard
        onSwipe={onSwipe}
        onCardLeftScreen={() => onCardLeftScreen("fooBar")}
        preventSwipe={["right", "left"]}
        className="relative h-[35rem] overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <Image
          width={500}
          height={100}
          alt="Office"
          src="/huntek/logo/G.svg"
          className="absolute inset-0 h-full object-contain"
        />
        <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 min-h-[35rem] ">
          <div className="p-4 flex flex-col justify-end h-[75vh] ">
            <time datetime="2022-10-10" className="block text-xs text-white/90">
              10th Oct 2022
            </time>
            <a href="#">
              <h3 className="mt-0.5 text-lg text-white">How to position your furniture for positivity</h3>
            </a>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi
              temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus
              soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>
          </div>
        </div>
      </TinderCard>
    </div>
  );
};
export default Swipe;

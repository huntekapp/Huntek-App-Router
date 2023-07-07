import FootbarSwipe from "../components/footbarswipe";
import NavBar from "../components/navbar";
import Swipe from "../components/swipe";

const SwipePage = () => {
  return (
    <main className="bg-black">
      <section className="min-h-screen bg-pri/70 flex flex-col justify-start items-center">
        <NavBar />
        <Swipe />
      </section>
    </main>
  );
};
export default SwipePage;

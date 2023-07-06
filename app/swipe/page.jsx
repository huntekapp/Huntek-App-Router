import FootbarSwipe from "../components/footbarswipe";
import NavBar from "../components/navbar";
import Swipe from "../components/swipe";

const SwipePage = () => {
  return (
    <>
      <NavBar />
      <div className="flex items-center min-h-screen bg-pri justify-center">
        <Swipe />
      </div>
      <FootbarSwipe />
    </>
  );
};
export default SwipePage;

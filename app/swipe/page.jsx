import NavBar from "../components/navbar";
import Swipe from "../components/swipe";

const SwipePage = () => {
  return (
    <>
      <NavBar />
      <div className="flex items-center min-h-screen justify-center">
        <Swipe />
      </div>
    </>
  );
};
export default SwipePage;

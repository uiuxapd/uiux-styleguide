import Lottie from "lottie-react";
import animation from "../assets/animation.json";

const Documentation = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <Lottie animationData={animation} />
    </div>
  );
};

export default Documentation;

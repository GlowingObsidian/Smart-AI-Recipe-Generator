import Image from "next/image";
import UserInputArea from "../_components/UserInputArea";

const CreatePage = () => {
  return (
    <div className="mb-10">
      <UserInputArea />
      <div className="w-full mt-10 flex justify-center">
        <Image
          src="/create_image.png"
          alt="hotpot image"
          width={1000}
          height={800}
          className="w-[300px] md:w-[500px] h-[300px] md:h-[500px]"
        />
      </div>
      <div className="text-center text-md font-semibold text-gray-700 md:text-lg mx-5">
        Get creative! Start generating what you crave, like this hotpot for a
        start.
      </div>
    </div>
  );
};

export default CreatePage;

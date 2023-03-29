import { OctopusBalls } from "@/components/OctopusBalls";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <h1 className="text-center text-4xl text-white font-black p-5 ">
        Takoyaki
        <br />
        Championship
        <br />
        2023
      </h1>
      <OctopusBalls />
      <div className="flex flex-row items-center justify-center">
        <button className="bg-gray-600 hover:bg-gray-500 text-white rounded py-1 px-2 m-2">
          詳細
        </button>
      </div>
    </div>
  );
};

export default Home;

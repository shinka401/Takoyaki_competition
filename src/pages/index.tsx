import { OctopusBalls } from "@/components/OctopusBalls";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <h1 className="text-center text-xl p-5 font-black  text-white">
        たこ焼きアートコンペティション
      </h1>
      <OctopusBalls />
      <button className="bg-gray-600 hover:bg-gray-500 text-white rounded py-1 px-2 m-2">
        詳細
      </button>
    </div>
  );
};

export default Home;

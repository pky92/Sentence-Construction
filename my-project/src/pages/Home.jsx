import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const backHandler = (e) => {
    e.preventDefault();
    console.log("Back button clicked");
    navigate('/main'); // Navigate to '/main'
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center items-center gap-6 bg-white p-8 rounded-xl shadow-lg mb-7">
        {/* Header Section */}
        <div className="flex-col text-center mb-4 gap-6">
          <h1 className="text-gray-900 text-5xl p-3 font-normal">Sentence Construction</h1>
          <p className="text-gray-600 text-xl">
            Users have to construct a sentence by placing random words in the correct order
          </p>
        </div>

        {/* Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center p-3">
          <div className="flex flex-col items-center border-r-2 pr-7">
            <p className="text-lg font-medium">Time Per Question</p>
            <p className="text-xl font-semibold text-gray-600">30 sec</p>
          </div>
          <div className="flex flex-col items-center border-r-2">
            <p className="text-lg font-medium">Total Questions</p>
            <p className="text-xl font-semibold text-gray-600">10</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-lg font-medium">Coins</p>
            <p className="text-xl font-semibold text-yellow-500">20</p>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="flex justify-between gap-20">
          <div
            onClick={backHandler} // Attach the handler directly
            className="flex text-blue-700 w-[120px] justify-center text-center items-center rounded-lg font-bold p-5 border border-blue-700 border-solid outline-solid cursor-pointer"
          >
            <button>Back</button>
          </div>
          <div className="flex font-bold justify-center text-center items-center w-[120px] border bg-blue-700 text-white rounded-md">
            <button>Start</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import { useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { Tooltip } from 'flowbite-react';
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";




function App() {
  const [username, setUsername] = useState('');
  const [data, setData] = useState('');
  const [showCard, setShowcard] = useState(false)

  const fetching = async () => {
    const result = await fetch(`https://api.github.com/users/${username}`);
    const image = await result.json();
    setData(image);
    setShowcard(true)
  };

  return (
   <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] relative overflow-hidden">
    
  {!showCard && (
    <div className="relative w-full flex flex-col items-center">
      {/* Animated Glo  w Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-6xl opacity-30 animate-pulse delay-1000"></div>

      <h1 className="text-4xl font-bold mb-6 text-white drop-shadow-lg tracking-wide">GitHub Info Fetcher</h1>

      <div className="flex items-center mb-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="px-3 py-2 rounded-lg border border-white text-white bg-white/10 backdrop-blur-md placeholder-gray-300 focus:ring-2 focus:ring-purple-400"
          placeholder="Enter GitHub username"
        />
        <button
          onClick={fetching}
          className="ml-3 px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 rounded-lg font-semibold text-white transition-all duration-300"
        >
          Get Info
        </button>
      </div>
    </div>
  )}

    {showCard && data && (
        <div className="mt-10 bg-gray-900 text-white rounded-2xl shadow-2xl flex w-[80%] max-w-4xl overflow-hidden ">

         {/* LEFT SECTION WITH FULL IMAGE AND BLUR EDGES */}
<div className="relative w-[40%] h-[300px] overflow-hidden">
  {/* Main user image */}
  <img
    src={data.avatar_url}
    alt="User Avatar"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Left side blur */}
  <div className="absolute inset-y-0 left-0 w-20 backdrop-blur-sm pointer-events-none"></div>

  {/* Right side blur */}
  <div className="absolute inset-y-0 right-0 w-20 backdrop-blur-sm pointer-events-none"></div>

            {/* Centered avatar in focus */}
            {/* <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src={data.avatar_url}
                  alt="Avatar Focused"
                  className="w-full h-full object-cover"
                />
              </div>
            </div> */}
          </div>

          {/* RIGHT SIDE DETAILS */}
          <div className="w-[60%] p-6 flex flex-col justify-between bg-linear-to-br from-neutral-900 via-gray-800 to-black">
           <div className='ms-auto '> <FaSquareGithub size={40}/> </div>  
            <div className="flex items-center space-x-6 w-1/2 -mt-17 border border-amber-300">
              <div className="text-left">
                <p className="text-3xl font-bold">
                  <span>{data.login}</span>
                </p>
                <p className="text-lg">
                  <span className="font-sm font-light">{data.name}</span>
                </p>
              </div>
            </div>

           

            <span className="mt-6">
              <p className="text-gray-300">{data.bio ? data.bio : "No bio available"}</p>
            </span>

            <button 
           
            className="flex justify-end mt-6 ">
              <a
                href={`https://github.com/${data.login}?tab=repositories`}
                target="_blank"
                rel="noreferrer"
                data-tooltip-id='tooltip'
                data-tooltip-content="Tap to view user's repositories"
              >
              <FaGithub size={40}/>
              </a>
              <ReactTooltip id='tooltip' place='top' effect='solid' offset={15}/>
            </button>
            
                    
          </div>
        </div>
      )}
    </div>
  );
}
export default App;
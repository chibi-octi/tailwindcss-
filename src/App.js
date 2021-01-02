import React from 'react';

function App() {
  return (

    <div>

      {/* header */}
        <div className="bg-indigo-600 p-4 flex justify-between items-center">

        
        {/* left side */}
          <div className="flex items-center">
            <img src="https://cdn2.iconfinder.com/data/icons/winter-activity/128/winter-activity-16-512.png" width="50" alt="Logo" className="mr-2"/>
            <a href="#" className="inline-block p-3 text-indigo-200 hover:text-indigo-100 mr-2">Home</a> 
            <a href="#" className="inline-block p-3 text-indigo-200 hover:text-indigo-100">About</a>
          </div>

        {/* right side */}
          <div className="hidden md:block">
            <a href="#" className="inline-block p-2 text-indigo-200 hover:text-indigo-100 mr-2">Login</a> 
            <a href="#" className="inline-block py-2 px-4 text-yellow-700 bg-yellow-400 hover:bg-yellow-300 hover:text-yellow-800 rounded transition ease-in duration-150">Sign Up</a>
          </div>
        
      </div>
      {/* hero */}

        <div className="md:flex justify-between py-20 px-10 bg-indigo-600 text-indigo-100">

          {/* Left */}

          <div className="md:w-1/2 mb-10 md:mb-10">
            <h2 className="text-2xl md:text-4xl lg:text-6xl text-white mb-6">Welcome to Doggo City</h2>
            <p className="mb-6">There is never a said day here!</p>

            <a href="#" className="inline-block py-3 px-6 text-lg bg-gray-400 text-gray-800 hover:bg-gray-300 mr-2">Learn more</a>
            <a href="#" className="inline-block py-3 px-6 text-lg bg-yellow-400 text-yellow-800 hover:bg-yellow-300 rounded">Get started</a>
          </div>

          {/* Right */}

          <div className="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80" alt="Happiest doggo" className="w-full rounded shadow-2xl"/>
          </div>

        </div>


      {/* features */}



      {/* footer and newsletters */}

      
    </div>
    

  );
}

export default App;

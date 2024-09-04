import { GithubUserSearcher } from "./components/GithubUserSearcher";

function App() {
  return (
    <>
      <div className=" flex justify-center items-center min-h-192">
        <div>
          <h1 className="font-bold text-3xl text-center my-5">
            Github user Searcher
          </h1>
          <div className="border border-black min-h-120 w-252 bg-gradient-to-bl from-teal-500 to-lime-200">
            <GithubUserSearcher />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

// import { GithubUserSearcher } from "./components/GithubUserSearcher";

// function App() {
//   return (
//     <>
//       <div className="flex justify-center items-center min-h-screen px-5 py-10 bg-gray-100">
//         <div className="w-full max-w-3xl">
//           <h1 className="font-bold text-3xl text-center my-5">
//             Github User Searcher
//           </h1>
//           <div className="border border-black rounded-xl p-5 bg-gradient-to-bl from-teal-500 to-lime-200 shadow-lg">
//             <GithubUserSearcher />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

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

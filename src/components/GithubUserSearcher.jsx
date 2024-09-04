import axios from "axios";
import React, { useRef, useState } from "react";

export const GithubUserSearcher = () => {
  //Reference
  const inputRef = useRef();

  //States
  const [userData, setUserData] = useState({
    userDetails: "",
    userRepos: "",
  });

  //Fetch Github user Data
  const fetchUserData = async (user) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${user}`);
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  };

  const fetchUserRepository = async (user) => {
    try {
      const respone = await axios.get(
        `https://api.github.com/users/${user}/repos?sort=created`
      );
      return respone.data;
    } catch (error) {
      return error.response.data;
    }
  };

  //Fetch data
  const handleClick = async () => {
    const inputValue = inputRef.current.value;
    if (inputValue.length == 0) {
      alert("Enter a username...");
    } else {
      const userData = await fetchUserData(inputValue);
      const userRepo = await fetchUserRepository(inputValue);
      setUserData(() => ({
        userDetails: userData,
        userRepos: userRepo,
      }));
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center my-5 px-10 ">
        <div className="my-5 flex justify-center">
          <input
            ref={inputRef}
            type="text"
            className="border mr-10 border-gray w-80 px-5 py-2 rounded-2xl focus:outline-none"
          />
          <button
            onClick={handleClick}
            className="border bg-gradient-to-bl from-amber-200 to-emerald-400 px-3 py-2 rounded-xl active:scale-90 font-semibold "
          >
            Search
          </button>
        </div>
        {userData.userDetails == "" && userData.userRepos == "" ? (
          <>
            <h1 className="font-bold text-2xl text-center my-20">
              Search for User....😊
            </h1>
          </>
        ) : userData.userDetails.status == 404 &&
          userData.userRepos.status == 404 ? (
          <>
            <h1 className="font-bold text-2xl text-center my-20">
              User {userData.userDetails.message}...❌
            </h1>
          </>
        ) : (
          <>
            {" "}
            <div className="flex border border-black rounded-xl my-5 min-h-80 p-5 bg-gradient-to-l from-teal-300 via-indigo-300 to-pink-300 ">
              <div className=" w-96 mx-3 flex justify-center items-start">
                <img
                  src={userData.userDetails.avatar_url}
                  alt="photo"
                  className="rounded-lg border border-gray-400 w-52 h-52"
                />
              </div>
              <div className="border border-black w-full mx-3 px-5 rounded-xl">
                <h1 className="font-bold text-4xl my-3 bg-gradient-to-r from-purple-800 to-orange-500 bg-clip-text text-transparent ">
                  {userData.userDetails.name}
                </h1>
                <p className="font-mono my-3">{userData.userDetails.bio}</p>
                <div className="flex justify-between my-3 py-3">
                  <p className=" text-md font-medium">
                    <span className="font-bold mx-2 bg-gradient-to-r from-amber-600 to-cyan-600 bg-clip-text text-transparent">
                      {userData.userDetails.public_repos}
                    </span>{" "}
                    Repositories
                  </p>
                  <p className=" text-md font-medium">
                    <span className="font-bold mx-2 bg-gradient-to-r from-amber-600 to-cyan-600 bg-clip-text text-transparent">
                      {userData.userDetails.following}
                    </span>{" "}
                    Following
                  </p>
                  <p className=" text-md font-medium">
                    <span className="font-bold mx-2 bg-gradient-to-r from-amber-600 to-cyan-600 bg-clip-text text-transparent">
                      {userData.userDetails.followers}
                    </span>{" "}
                    Followers
                  </p>
                </div>
                <h1 className="font-bold text-2xl bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
                  Latest Repos
                </h1>
                <div className="flex flex-wrap justify-between my-3">
                  {userData.userRepos.slice(0, 5).map((repo, index) => {
                    return (
                      <button
                        key={index}
                        onClick={() => {
                          window.open(repo.html_url);
                        }}
                        className="border border-black w-fit px-3 m-3 rounded-xl bg-black text-white font-mono hover:bg-gray-700 active:scale-95"
                      >
                        {repo.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

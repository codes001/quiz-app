import React from "react";
import Timer from "../components/Timer";
import UserCard from "../components/UserCard";
import data from "../data";
import {useNavigate} from 'react-router-dom'

function Scoresheet({ type }) {
    const navigate = useNavigate()
  const pageData = data[type];
  return (
    <div className="bg-black text-white">
      <Timer />
      <header className="flex items-center h-28 px-10 bg-gray-100">
        <i onClick={() => navigate('/')} className="fa-solid fa-home mr-10 text-4xl cursor-pointer"></i>
        <p className="text-5xl uppercase font-bold">
          {pageData.title}
        </p>
      </header>
      <div className="grid grid-cols-2 gap-5 gap-x-8 p-10 pt-16">
        {pageData.participants.map((participant, index) => (
          <UserCard key={index} number={index} name={participant} />
        ))}
      </div>
    </div>
  );
}

export default Scoresheet;

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
      <header className="flex items-center justify-between h-24 px-5 bg-gray-100 text-black">
        <div className="flex items-center">
        <i onClick={() => navigate('/')} className="fa-solid fa-home mr-10 text-4xl cursor-pointer"></i>
        <p className="text-5xl uppercase font-bold">
          {pageData.title}
        </p>
        </div>
        <Timer />
      </header>
      <div className="grid grid-cols-2 gap-5 gap-x-8 py-10 px-5 pt-16">
        {pageData.participants.map((participant, index) => (
          <UserCard key={index} number={index} name={participant} />
        ))}
      </div>
    </div>
  );
}

export default Scoresheet;

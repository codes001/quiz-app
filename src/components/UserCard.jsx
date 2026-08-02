import React, { useState, useEffect } from "react";

const STORAGE_TTL = 2 * 60 * 60 * 1000;

function getStorageKey(type, number) {
  return `nyanya-quiz-${type}-${number}`;
}

function loadScores(type, number) {
  try {
    const raw = localStorage.getItem(getStorageKey(type, number));
    if (!raw) return null;
    const { value, savedAt } = JSON.parse(raw);
    if (!value || Date.now() - savedAt > STORAGE_TTL) {
      localStorage.removeItem(getStorageKey(type, number));
      return null;
    }
    return value;
  } catch (e) {
    return null;
  }
}

function UserCard({ number, name, type }) {
  const saved = loadScores(type, number);
  const [first, setFirst] = useState(saved ? saved.first : undefined);
  const [second, setSecond] = useState(saved ? saved.second : undefined);
  const [third, setThird] = useState(saved ? saved.third : undefined);
  const [total, setTotal] = useState(
    saved && (saved.first || saved.second || saved.third)
      ? +(saved.first || 0) + +(saved.second || 0) + +(saved.third || 0)
      : ""
  );
  useEffect(() => {
    if (first || second || third)
      setTotal(
        +(first ? first : 0) + +(second ? second : 0) + +(third ? third : 0)
      );
    if (
      (first === "" || !first) &&
      (second === "" || !second) &&
      (third === "" || !third)
    )
      setTotal("");
  }, [total, first, second, third]);
  useEffect(() => {
    try {
      localStorage.setItem(
        getStorageKey(type, number),
        JSON.stringify({ value: { first, second, third }, savedAt: Date.now() })
      );
    } catch (e) {}
  }, [first, second, third, type, number]);
  const handleFirstChange = (e) =>
    e.target.value.match(/[0-9]/) ? setFirst(e.target.value) : setFirst("");
  const handleSecondChange = (e) =>
    e.target.value.match(/[0-9]/) ? setSecond(e.target.value) : setSecond("");
  const handleThirdChange = (e) =>
    e.target.value.match(/[0-9]/) ? setThird(e.target.value) : setThird("");
  return (
    <div className="flex items-center justify-between user-card shadow-md border pl-3">
      <h1 className="user-text uppercase font-semibold"> {name}</h1>
      <div className="scores flex items-center">
        <input
          type="text"
          value={first === 0 ? "" : first}
          className="bg-gray-100 w-14 pl-4 border h-20 font-semibold user-text block"
          onChange={(e) => handleFirstChange(e)}
        />
        <input
          type="text"
          value={second === 0 ? "" : second}
          onChange={(e) => handleSecondChange(e)}
          className="bg-gray-100 w-14 pl-4 border h-20 font-semibold user-text block"
        />
        <input
          type="text"
          value={third === 0 ? "" : third}
          onChange={(e) => handleThirdChange(e)}
          className="bg-gray-100 w-14 pl-4 border h-20 font-semibold user-text block"
        />
        <div className="text-black bg-gray-100 w-14 flex items-center justify-center border h-20 font-bold user-text block">
          {total}
        </div>
      </div>
    </div>
  );
}

export default UserCard;

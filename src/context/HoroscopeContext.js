import { useEffect, useState, createContext } from "react";
import App from "../App";
import HoroscopesData from "../data/horoscopes";

export const HoroscopeContext = createContext();

export default function HoroscopeProvider(props) {
  const [getter, setSign] = useState("Scorpio");
  const signInfo = HoroscopesData[getter];

  return (
    <HoroscopeContext.Provider value={{ signInfo, setSign }}>
      {props.children}
    </HoroscopeContext.Provider>
  );
}

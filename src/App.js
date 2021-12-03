import "./App.css";
import TabGroup from "./components/TabGroup";

const teamComps = [
  {
    teamName: "Academy Assassins",
    champions: "Twitch, Blitzcrank, Katarina, Talon, Ekko, Leona, Shaco, Akali",
  },
  {
    teamName: "Arcanists",
    champions: "Twisted Fate, Swain, Malzahar, Vex, Janna, Lux, Viktor, Yummi",
  },
  {
    teamName: "Twinshot Bruisers",
    champions: "Vi, Zak, Dr. Mundo, Urgot, Jayce, Jinx, Tahm Kench, Yummi",
  },
];

function App() {
  return (
    <>
      <div className='App'>
        <TabGroup teamComps={teamComps} />
      </div>
    </>
  );
}

export default App;

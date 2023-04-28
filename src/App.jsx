import { useState, useEffect } from "react";
import "./App.css";
import BotArmy from "./components/botArmy";
import BotCollection from "./components/BotCollection";

function App() {
  const [allBots, setAllBots] = useState([]);
  const [selectedBots, setSelectedBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => {
        setAllBots(data);
      });
  }, []);

  const handleAddBot = (bota) => {
    if (!selectedBots.includes(bota) && selectedBots.length < 4) {
      setSelectedBots([...selectedBots, bota]);
    }
  };

  const handleReleaseBot = (bota) => {
    setSelectedBots(selectedBots.filter((bot) => bot !== bota));
  };

  return (
    <div>
      <BotArmy
        selectedBots={selectedBots}
        handleReleaseBot={handleReleaseBot}
      />
      <BotCollection
        setAllBots={setAllBots}
        allBots={allBots}
        handleAddBot={handleAddBot}
        handleReleaseBot={handleReleaseBot}
      />
    </div>
  );
}

export default App;

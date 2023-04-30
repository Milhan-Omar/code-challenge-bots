/* eslint-disable react/prop-types */
// import React from "react";
import BotCard from "./BotCard";

function BotCollection({ allBots, setAllBots, handleAddBot }) {
  

  return (
    <div className="all-cards"> 
      {allBots.map((bota) => (
        <div key={bota.id}>
          <div onClick={() => handleAddBot(bota)}>
            <BotCard
              className="bg-primary"
              id={bota.id}
              allBots={allBots}
              setAllBots={setAllBots}
              image={bota.avatar_url}
              title={bota.name}
              catchphrase={bota.catchphrase}
              health={bota.health}
              damage={bota.damage}
              armor={bota.armor}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default BotCollection;

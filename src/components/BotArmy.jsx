/* eslint-disable react/prop-types */
import BotCard from "./BotCard";

function BotArmy({ selectedBots = [], handleReleaseBot }) {
  return (
    <div className="army container-fluid row bg-success">
      <h2>Your Bot Army</h2>
      {selectedBots.map((bot, i) => (
        <div
        key={i}
          className="selected-bots"
          onClick={() => handleReleaseBot(bot)}
        >
          <BotCard
            image={bot.avatar_url}
            title={bot.name}
            catchphrase={bot.catchphrase}
            health={bot.health}
            damage={bot.damage}
            armor={bot.armor}
          />
        </div>
      ))}
    </div>
  );
}

export default BotArmy;

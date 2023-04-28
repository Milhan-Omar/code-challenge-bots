/* eslint-disable react/prop-types */
// import React from "react";

function BotCard({
  image,
  id,
  allBots,
  setAllBots,
  title,
  catchphrase,
  health,
  damage,
  armor,
}) {
  // const divCardStyle = {
  //   width: "14rem",
  // };

  const handleDeleteBot = (id) => {
    fetch(`http://localhost:3000/bots${id}`, {
      method: "DELETE",
    })
      .then(() => {
        const updateBots = allBots.filter((allBots) => allBots.id !== id);
        setAllBots(updateBots);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="card">
      <img className="img" src={image} alt="Not found" />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <small className="card-text">{catchphrase}</small>
      </div>
      <div>
        <div className="main--info">
          <p>🏥: {health}</p>
          <p>☠️: {damage}</p>
          <p>🥷🏻: {armor}</p>
        </div>
      </div>
      <button onClick={() => handleDeleteBot(id)}>DELETE</button>
    </div>
  );
}

export default BotCard;

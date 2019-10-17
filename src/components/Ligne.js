import React from 'react';
import "../App.css";
import Case from "./Case.js";

function Ligne(props) {
    return (
        <div className="master-row flex p-1">
        <div className="master-col w-4/5 flex justify-around">
          <Case color=""></Case>
          <Case color=""></Case>
          <Case color=""></Case>
          <Case color=""></Case>
        </div>
        <div className="master-col2 w-1/5 flex flex-col justify-between md:flex-row md:items-center md:justify-center">
          <div className="master-col2-top flex justify-around">
          <Case color="orangered"></Case>
          <Case color="orangered"></Case>
          </div>
          <div className="master-col2-bot flex justify-around">
          <Case color="orangered"></Case>
          <Case color="orangered"></Case>
          </div>
        </div>
      </div>
    );
}

export default Ligne;
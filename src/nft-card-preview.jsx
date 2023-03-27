import React from 'react'

import ProfileImage from "./assets/images/image-avatar.png"

import ViewIcon from "./assets/icons/icon-view.svg"
import EtherumIcon from "./assets/icons/icon-ethereum.svg"
import ClockIcon from "./assets/icons/icon-clock.svg"

const index = () => {
  return (
    <div className="main-card-component">
      {/*Main card image component*/}
      <div className="main-image-container">
        <div className="user-view-effect">
          <img className="view-icon" src={ViewIcon} alt="Viewing" />
        </div>
      </div>

      {/*Card Text & Description*/}
      <h1 className="text-can-hover">Equilibrium #3429</h1>
      <p className="text-style-1">Our Equilibrium collection promotes balance and calm.</p>

      {/*Price & Time Remaining*/}
      <ul>
        <li className="float-left margin-left">
          <img className="icon-image" src={EtherumIcon} alt="Etherum"></img>
          <p className="text-style-2">0.041 ETH</p>
        </li>

        <li className="float-right margin-right">
          <img className="icon-image" src={ClockIcon} alt="Time Remaining"></img>
          <p className="text-style-1">3 days left</p>
        </li>
      </ul>

      {/*Line decoration*/}
      <div className="line"></div>

      {/*Profile information*/}
      <div className="profile-information">
        <img className="profile-image" src={ProfileImage} alt="Jules Wyvern"></img>
        <p className="text-style-1">Creation of <b className="text-can-hover">Jules Wyvern</b></p>
      </div>
    </div>
  )
}

export default index
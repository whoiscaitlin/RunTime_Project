//index.js file for the current forecast component

import { h, render, Component } from 'preact';

import style from './style_current'; 

export default class Current extends Component{
  //for a scrollying bar that displays the hourly forcast

  render(props) {

  return(
    <div class={style.container}>
      <div class={style.location}>{props.location}</div>
      <div class={style.temp}>{props.temp}</div>
    </div>
    );
  }
}

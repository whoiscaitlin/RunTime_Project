//index.js file for the time component

import { h, render, Component } from 'preact';
import style from "./style_time"

export default class Time extends Component{
  //for a scrollying bar that displays the hourly forcast

  render(props) {

  return(
    <div class={style.container}>
      <div class={style.setup}>The best time to run is</div>
      <div class={style.time}>{props.best}</div>
    </div>
    );
  }
}

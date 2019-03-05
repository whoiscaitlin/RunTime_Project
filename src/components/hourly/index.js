import { h, render, Component } from 'preact';

import style from './style'

export default class Hourly extends Component{
  //for a scrollying bar that displays the hourly forcast

  render(props,state) {

  return(
    <div class={style.child}>
      <div class={style.text}>{props.time}</div>
      <div class={style.icon}>{props.icon}</div>
      <div class={style.text}>{props.temp}</div>
    </div>
    );
  }
}

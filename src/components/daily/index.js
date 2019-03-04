//index for daily forcase component

import { h, render, Component } from 'preact';

import style from './style_daily'

export default class Daily extends Component{
  //for a scrollying bar that displays the hourly forcast

  render(props) {

  return(
    <div class={style.child}>
      <div class={style.text}>{props.day}</div>
      <div class={style.icon}>{props.icon}</div>
      <div class={style.text}>{props.highlow}</div>
    </div>
    );
  }
}

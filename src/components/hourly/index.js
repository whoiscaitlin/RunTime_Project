import { h, render, Component } from 'preact';

import style from './style'

import Icon from '../icon';

export default class Hourly extends Component{
  //for a scrollying bar that displays the hourly forcast

  render(props,state) {

  return(
    <div class={style.child}>
      <div class={style.text}>{props.time}</div>
      <div class={style.icon}>
        <Icon cond={props.icon} size={40}/>
      </div>
      <div class={style.text}>{props.temp}</div>
    </div>
    );
  }
}

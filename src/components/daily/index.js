//index for daily forcase component

import { h, render, Component } from 'preact';

import style from './style_daily'

import Icon from '../icon';

export default class Daily extends Component{
  //for a scrollying bar that displays the hourly forcast

  render(props) {

    console.log(props.icon);

  return(
    <div class={style.child}>
      <div class={style.text}>{props.day}</div>
      <div class={style.icon}>
        <Icon cond={props.icon} size={35}/>
      </div>
      <div class={style.text}>{props.highlow}</div>
    </div>
    );
  }
}

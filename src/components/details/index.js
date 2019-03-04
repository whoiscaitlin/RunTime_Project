//index.js for the details component

import { h, render, Component } from 'preact';

import style from './style_details';

export default class Details extends Component{
  //for a scrollying bar that displays the hourly forcast

  render(props) {

  return(
      <div class={style.child}>
        <div class={style.icon}>{props.cond}</div>
        <div class={style.text}>{props.feature}</div>
      </div>
    );
  }
}

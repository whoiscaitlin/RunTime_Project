//index.js for the current_icon component
import { h, render, Component } from 'preact';

import style from './style_current_icon';

import Icon from '../icon';


export default class Current_Icon extends Component{
  //for a scrollying bar that displays the hourly forcast

  render(props) {

  return(
    <div class={style.container}>
      <Icon cond={props.cond} size={120} />
    </div>
    );
  }
}

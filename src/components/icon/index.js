//index.js file for the icon component

import { h, render, Component } from 'preact';

import style from './style_icon';

import {IoIosCloudy, IoIosCloudyNight, IoIosRainy, IoIosSunny, IoIosSnowy, IoIosPartlysunny, IoIosMoon, IoWaterdrop, IoArrowSwap, IoIonic} from 'preact-icons/lib/io';

export default class Icon extends Component{
  //for a scrollying bar that displays the hourly forcast
  constructor(props){
    super(props)
    this.icon_choices = {"clear-day": <IoIosSunny size={props.size}/>,
                        "clear-night": <IoIosMoon size={props.size}/>,
                        "rain": <IoWaterdrop size={props.size}/>,
                        "snow": <IoIosSnowy size={props.size}/>,
                        "sleet": <IoIosRainy size={props.size}/>,
                        "wind": <IoArrowSwap size={props.size}/>,
                        "fog": <IoIonic size={props.size}/>,
                        "cloudy": <IoIosCloudy size={props.size}/>,
                        "partly-cloudy-day": <IoIosPartlysunny size={props.size}/>,
                        "partly-cloudy-night": <IoIosCloudyNight size={props.size}/> ,};
    }

  render(props) {

  return(
    this.icon_choices[props.cond]
    );
  }
}

// import preact
import { h, render, Component } from 'preact';
// import stylesheets
import style from './style';
import style_button from '../button/style_iphone';
import style_hourly from '../hourly/style';
import style_daily from '../daily/style_daily';
import style_current from '../current/style_current';
import style_c_icon from '../current_icon/style_current_icon';
import style_details from '../details/style_details';
import style_time from '../time/style_time';
import {IoIosCloudy, IoIosCloudyNight, IoIosRainy, IoIosSunny, IoIosSnowy, IoIosPartlySunny, IoIosMoon} from 'preact-icons/lib/io';

// import jquery for API calls
import $ from 'jquery';

// import components
import Button from '../button';
import Hourly from '../hourly';
import Daily from '../daily';
import Current from '../current';
import Current_Icon from '../current_icon';
import Details from '../details';
import Icon from '../icon';
import Time from '../time'



var appid = "114dd7998fd50a1abd1c74bf1d59f1f1";
var app_id = "&app_id=oemh7PZ6fAqbOwEadoY0";
var app_code = "&app_code=f9v_eLOLFrlIApivB5_7gA";

//takes in a unix_date and returns an abbreviated day of the week for display in three day extended forcast
function toDate(unix_date){
		var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
		var date = new Date(unix_date*1000);

		return (daysOfWeek[date.getDay()]);
}

//takes in unix_date and returns an hourly time for display in hourly forcast
function toHour(unix_date){
		let date = new Date(unix_date*1000);
		let hours = date.getHours();

		return (hours);
}

//takes in a string weather description and returns the right kind of icon to represent it
function whichIcon(icon){

	return icon_choices[icon]

}

export default class Iphone extends Component {
//var Iphone = React.createClass({

	// a constructor with initial set states
	constructor(props){
		super(props);
		// temperature + location state
		this.state = {
			error: null,
      isLoaded: false,
			lat_long: "51.50643,-0.12721",
			location: "London",
			time_zone: "",
			current: [],
			humidity: "",
			hourly: [],
			hourly_1: [],
			hourly_2: [],
			hourly_3: [],
			hourly_4: [],
			hourly_5: [],
			hourly_6: [],
			hourly_7: [],
			hourly_8: [],
			hourly_9: [],
			hourly_10: [],
			hourly_11: [],
			hourly_12: [],
			daily: [],
			one_d: [],
			two_d: [],
			three_d: [],
		};

		//data binding for location input from user
		this.handleData = this.handleData.bind(this);
	}

	componentWillMount(){
		// call to get current conditions
			this.fetchWeatherData();
  	}

	fetchWeatherData(){

		fetch("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/8a9427f6abf1245ee5a6e6f378211c11/"
		+this.state.lat_long)
		.then(res => res.json())
		.then(
			(result) => {
				this.setState({
					isLoaded: true,
					time_zone: result.timezone,
					current: result.currently,
					humidity: result.currently["humidity"],
					hourly: result.hourly,
					hourly_1: result.hourly.data[1],
					hourly_2: result.hourly.data[2],
					hourly_3: result.hourly.data[3],
					hourly_4: result.hourly.data[4],
					hourly_5: result.hourly.data[5],
					hourly_6: result.hourly.data[6],
					hourly_7: result.hourly.data[7],
					hourly_8: result.hourly.data[8],
					hourly_9: result.hourly.data[9],
					hourly_10: result.hourly.data[10],
					hourly_11: result.hourly.data[11],
					hourly_12: result.hourly.data[12],
					daily: result.daily,
					one_d: result.daily.data[1],
					two_d: result.daily.data[2],
					three_d: result.daily.data[3],
				});
			},
			(error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
    	)
		}


	handleData(data) {
			//set internal location data from input
			//console.log(data);
	    this.setState({
	     	lat_long: data[0],
				location: data[1]
	    });

			this.fetchWeatherData();

	 }
	// the main render method for the iphone component
	render() {
		// check if temperature data is fetched, if so add the sign styling to the page
		console.log(this.state.lat_long);

		// display all weather data
		return (
			<div class={ style.container }>
				<div class={style_button.container}>
					<Button handlerFromParent={this.handleData} />
					</div>
				<div class={style.header}>
					<Current_Icon cond={this.state.current["icon"]}/>
					<Current location={this.state.location} temp={this.state.current["temperature"]+" F"}/>
					</div>
				<div class={style_details.container}>
					<Details cond={this.state.humidity} feature={"Humidity"}/>
					<Details cond={this.state.current["uvIndex"]} feature={"U.V. Index"}/>
					<Details cond={this.state.current["windSpeed"]} feature={"Wind Speed"}/>
					</div>
				<div class={style_hourly.container}>
					<Hourly time={toHour(this.state.hourly_1.time)} icon={this.state.hourly_1.icon} temp={this.state.hourly_1.temperature} />
					<Hourly time={toHour(this.state.hourly_2.time)} icon={this.state.hourly_2.icon} temp={this.state.hourly_2.temperature} />
					<Hourly time={toHour(this.state.hourly_3.time)} icon={this.state.hourly_3.icon} temp={this.state.hourly_3.temperature} />
					<Hourly time={toHour(this.state.hourly_4.time)} icon={this.state.hourly_4.icon} temp={this.state.hourly_4.temperature} />
					<Hourly time={toHour(this.state.hourly_5.time)} icon={this.state.hourly_5.icon} temp={this.state.hourly_5.temperature} />
					<Hourly time={toHour(this.state.hourly_6.time)} icon={this.state.hourly_6.icon} temp={this.state.hourly_6.temperature} />
					<Hourly time={toHour(this.state.hourly_7.time)} icon={this.state.hourly_7.icon} temp={this.state.hourly_7.temperature} />
					<Hourly time={toHour(this.state.hourly_8.time)} icon={this.state.hourly_8.icon} temp={this.state.hourly_8.temperature} />
					<Hourly time={toHour(this.state.hourly_9.time)} icon={this.state.hourly_9.icon} temp={this.state.hourly_9.temperature} />
					<Hourly time={toHour(this.state.hourly_10.time)} icon={this.state.hourly_10.icon} temp={this.state.hourly_10.temperature} />
					<Hourly time={toHour(this.state.hourly_11.time)} icon={this.state.hourly_11.icon} temp={this.state.hourly_11.temperature} />
					<Hourly time={toHour(this.state.hourly_12.time)} icon={this.state.hourly_12.icon} temp={this.state.hourly_12.temperature} />
					</div>
				<div class={style_daily.container}>
					<Daily day={toDate(this.state.one_d.time)} icon={this.state.one_d.icon} highlow={this.state.one_d.temperatureHigh+"/"+this.state.one_d.temperatureLow}/>
					<Daily day={toDate(this.state.two_d.time)} icon={this.state.two_d.icon} highlow={this.state.two_d.temperatureHigh+"/"+this.state.two_d.temperatureLow}/>
					<Daily day={toDate(this.state.three_d.time)} icon={this.state.three_d.icon} highlow={this.state.three_d.temperatureHigh+"/"+this.state.three_d.temperatureLow}/>
				<div>
					<Time best={"10:00"}/>
					</div>
				</div>
			</div>
		);
	}
}

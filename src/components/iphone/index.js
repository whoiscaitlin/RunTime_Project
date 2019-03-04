// import preact
import { h, render, Component } from 'preact';
// import stylesheets
import style from './style';
import style_iphone from '../button/style_iphone';
import style_hourly from '../hourly/style';
import style_daily from '../daily/style_daily';
import style_current from '../current/style_current';
import style_c_icon from '../current_icon/style_current_icon';
import style_details from '../details/style_details';

// import jquery for API calls
import $ from 'jquery';

// import components
import Button from '../button';
import Hourly from '../hourly';
import Daily from '../daily';
import Current from '../current';
import Current_Icon from '../current_icon';
import Details from '../details';

var apiKey = "Nh8pQGqYkJW2eGdcGfXjTf0hbUPVwMGw";
var locationKey = "328328";
var language = "en";
var dummy_data = {"coord":{"lon":139,"lat":35},
									"sys":{"country":"JP","sunrise":1369769524,"sunset":1369821049},
									"weather":[{"id":804,"main":"clouds","description":"overcast clouds","icon":"04n"}],
									"main":{"temp":289.5,"humidity":89,"pressure":1013,"temp_min":287.04,"temp_max":292.04},
									"wind":{"speed":7.31,"deg":187.002},
									"rain":{"3h":0},
									"clouds":{"all":92},
									"dt":1369824698,
									"id":1851632,
									"name":"Shuzenji",
									"cod":200}

var loc = dummy_data['name'];
var temp_c = dummy_data['main']['temp'];
var conditions = dummy_data['weather']['0']['description'];
var humidity = dummy_data['main']['humidity'];
var day_1 = "monday";
var day_2 = "tuesday";
var day_3 = "wednesady";
var h_l = "73/52";

export default class Iphone extends Component {
//var Iphone = React.createClass({

	// a constructor with initial set states
	constructor(props){
		super(props);
		// temperature state
		this.state.temp = "";
		// button display state
		this.setState({ display: true });
	}

	// a call to fetch weather data via wunderground

	fetchWeatherData = () => {
		// API URL with a structure of : ttp://api.wunderground.com/api/key/feature/q/country-code/city.json
		var url =
		http: "dataservice.accuweather.com/forecasts/v1/daily/1day/328328?apikey=Nh8pQGqYkJW2eGdcGfXjTf0hbUPVwMGw&details=true"
		$.ajax({
			url: url,
			dataType: "jsonp",
			success : this.parseResponse,
			error : function(req, err){ console.log('API call failed ' + err); }
		})
		// once the data grabbed, hide the button
		this.setState({ display: false });
	}


	// the main render method for the iphone component
	render() {
		// check if temperature data is fetched, if so add the sign styling to the page
		const tempStyles = this.state.temp ? `${style.temperature} ${style.filled}` : style.temperature;

		// display all weather data
		return (
			<div class={ style.container }>
				<div class={style.header}>
					<Current_Icon cond={"&&"}/>
					<Current location={loc} temp={temp_c}/>
					</div>
				<div class={style_details.container}>
					<Details cond={humidity+'%'} feature={"Humidity"}/>
					<Details cond={'4.3'} feature={"U.V. Index"}/>
					<Details cond={'3.4'} feature={"Wind Speed"}/>
					</div>
				<div class={style_hourly.container}>
					<Hourly temp={"1"} icon={"&&"} label={"7"} />
					<Hourly temp={"2"} icon={"&&"} label={"7"} />
					<Hourly temp={"3"} icon={"&&"} label={"7"} />
					<Hourly temp={"4"} icon={"&&"} label={"7"} />
					<Hourly temp={"5"} icon={"&&"} label={"7"} />
					<Hourly temp={"6"} icon={"&&"} label={"7"} />
					<Hourly temp={"7"} icon={"&&"} label={"7"} />
					<Hourly temp={"8"} icon={"&&"} label={"7"} />
					<Hourly temp={"9"} icon={"&&"} label={"7"} />
					<Hourly temp={"10"} icon={"&&"} label={"7"} />
					<Hourly temp={"11"} icon={"&&"} label={"7"} />
					<Hourly temp={"12"} icon={"&&"} label={"7"} />
					<Hourly temp={"13"} icon={"&&"} label={"7"} />
					<Hourly temp={"14"} icon={"&&"} label={"7"} />
					<Hourly temp={"15"} icon={"&&"} label={"7"} />
					<Hourly temp={"16"} icon={"&&"} label={"7"} />
					<Hourly temp={"17"} icon={"&&"} label={"7"} />
					<Hourly temp={"18"} icon={"&&"} label={"7"} />
					<Hourly temp={"19"} icon={"&&"} label={"7"} />
					<Hourly temp={"20"} icon={"&&"} label={"7"} />
					<Hourly temp={"21"} icon={"&&"} label={"7"} />
					<Hourly temp={"22"} icon={"&&"} label={"7"} />
					<Hourly temp={"23"} icon={"&&"} label={"7"} />
					<Hourly temp={"24"} icon={"&&"} label={"7"} />
					</div>
				<div class={style_daily.container}>
					<Daily day={day_1} icon={"&&"} highlow={h_l}/>
					<Daily day={day_2} icon={"&&"} highlow={h_l}/>
					<Daily day={day_3} icon={"&&"} highlow={h_l}/>
				</div>
			</div>
		);
	}
}

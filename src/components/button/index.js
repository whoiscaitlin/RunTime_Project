//index.js file for the button component
import { h, render, Component } from 'preact';

var app_id = "&app_id=oemh7PZ6fAqbOwEadoY0";
var app_code = "&app_code=f9v_eLOLFrlIApivB5_7gA";

export default class Button extends Component {
	constructor(props) {
    super(props);

	 	this.state = {
		 inputField: '',
	 };
	 this.handleChange = this.handleChange.bind(this);
	 this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {

		this.setState({
      inputField: event.target.value
    });
}

  handleSubmit(event) {
		event.preventDefault();
		// pass the input field value to the event handler passed
    // as a prop by the parent (App)
	 var output = [];
	 let search_text = encodeURIComponent(this.state.inputField);
	 fetch("https://geocoder.api.here.com/6.2/geocode.json?searchtext="+search_text+app_id+app_code+"&gen=9")
	 .then(res => res.json())
	 .then(
	 	(result) => {
			let lat = result.Response.View[0].Result[0].Location.DisplayPosition.Latitude.toString(10);
			let long = result.Response.View[0].Result[0].Location.DisplayPosition.Longitude.toString(10);
			let name = result.Response.View[0].Result[0].Location.Address.City;
			console.log(name);
			output.push(lat+","+long);
			output.push(name);
			console.log(output);
			this.props.handlerFromParent(output);
  	}
			)

		//console.log(output);
    //this.props.handlerFromParent(output);

    this.setState({
      inputField: '',
			outputLocation:''
    });

  }

  render() {
		return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
                 id="theInput"
                 value={this.state.inputField}
                 onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

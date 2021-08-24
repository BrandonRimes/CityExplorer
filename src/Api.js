import React from 'react';
import axios from 'axios';

// import Main from './Main';

class Api extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {location: 'location'},
      getLocation: this.getLocation()
    };
  }

  async getLocation() {
    console.log('getLocation!');
    const api = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_EXPLORER_KEY}&q=${this.props.query}&format=json`;
    const response = await axios.get(api);

    this.setState({ location: response.data[0] });
  }

  // render() {
  //   return (
  //     <div className="Api">
  //     </div>
  //   );
  // }
}

export default Api;

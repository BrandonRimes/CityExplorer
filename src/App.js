import {useState} from 'react';
import axios from 'axios';
// bootstrap -------------------------------------------
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
// local -----------------------------------------------
import './App.css';
import Header from './Header';
import Main from './Main';

// app -------------------------------------------------
function App() {

  // state ---------------------------------------------
  const [location, setLocation] = useState({});
  const [query, setQuery] = useState('');
  const [show, setShow] = useState(false);
  const [weather, setWeather] = useState({});

  // callbacks -----------------------------------------
  // for input in Main
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  // Geo API
  const getLocation = async () => {
    console.log('getLocation!');
    try {
      // city data from locationiq.com
      const locationReq = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_EXPLORER_KEY}&q=${query}&format=json`;
      const locationRes = await axios.get(locationReq);
      setLocation(locationRes.data[0]);
      return locationRes.data[0];
    } catch (error) {
      handleError();
    }
  };

  const getWeather = async (loc) => {
    console.log('getWeather!');
    try {
      // weather data from server
      const weatherReq = `http://localhost:3001/weather?searchQuery=${query}&lat=${loc.lat}&lon=${loc.lon}`;
      const weatherRes = await axios.get(weatherReq);
      console.log('res: ', weatherRes.data);
      setWeather(weatherRes.data);
    } catch (error) {
      handleError(error);
    }
  };

  const handleSubmit = async () => {
    let loc = await getLocation();
    await getWeather(loc);
  };

  // API call error
  const handleError = (error) => {
    console.log('handleError!', error);
    handleShow();
    setQuery('');
    setLocation({});
  };

  // for Modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const modal = (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body>something's not quite right...</Modal.Body>
      <Button variant="primary" onClick={handleClose}>
        try again
      </Button>
    </Modal>
  );

  // return --------------------------------------------
  return (
    <div className="App">
      <Header />
      <Main
        query = {query}
        location = {location}
        weather = {weather}
        handleChange = {handleChange}
        handleSubmit = {handleSubmit}
      />
      {modal}
    </div>
  );
}

export default App;

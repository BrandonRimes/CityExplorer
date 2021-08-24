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
  // callbacks -----------------------------------------
  // for input in Main
  const handleChange = (e) => {
    setQuery(e.target.value);
    console.log('change!');
  };
  // Geo API
  const getLocation = async () => {
    console.log('getLocation!');
    try {
      const api = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_CITY_EXPLORER_KEY}&q=${query}&format=json`;
      const response = await axios.get(api);
      setLocation(response.data[0]);
    } catch (error) {
      handleError();
    }
  };
  // API call error
  const handleError = () => {
    console.log('handleError!');
    handleShow();
    setLocation({});
  };
  // for Modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const modal = (
    <Modal show={show} onHide={handleClose}>
      <Modal.Body closeButton>something's not quite right...</Modal.Body>
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
        location = {location}
        handleChange = {handleChange}
        getLocation = {getLocation}
      />
      {modal}
    </div>
  );
}

export default App;

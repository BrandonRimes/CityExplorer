
function Main (props) {

  const lat = props.location.lat;
  const lon = props.location.lon;
  // const bBox = props.location.boundingBox;
  return (
    <main>
      <section id="search">
        <input
          onChange={props.handleChange}
          type="text"
          placeholder="City Name"
        ></input>
        <button onClick={props.getLocation}>Search</button>
      </section>
      {props.location.lat &&
      <section id="display">
        <h2>{lat} {lon}</h2>
        <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_EXPLORER_KEY}&center=${lat},${lon}&zoom=${10}`} alt="i'm a map"></img>
      </section>
      }
    </main>
  );
}

export default Main;

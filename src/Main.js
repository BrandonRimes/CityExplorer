
function Main (props) {
  // latitude and longitude from props
  const lat = props.location.lat;
  const lon = props.location.lon;
  // forecast template
  const forecast = props.weather.map((day, i) =>
    <article key={i}>
      <h3>{day.date}</h3>
      <p>{day.description}</p>
    </article>
  );

  return (
    <main>
      <section id="search">
        <input
          onChange={props.handleChange}
          type="text"
          placeholder="City Name"
          value = {props.query}
        ></input>
        <button onClick={props.handleSubmit}>Search</button>
      </section>
      {lat &&
      <>
        <section id="location">
          <h2>{lat} {lon}</h2>
          <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_CITY_EXPLORER_KEY}&center=${lat},${lon}&zoom=${10}`} alt="i'm a map"></img>
        </section>
        <section id="weather">
          <h2>Weather</h2>
          {forecast}
        </section>
      </>
      }
    </main>
  );
}

export default Main;

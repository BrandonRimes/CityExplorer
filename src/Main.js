import {useState} from 'react';

// import Api from './Api';

function Main (props) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    console.log('change!');
    setQuery(e.target.value);
  };

  // const handleClick = () => {
  //   console.log('click!', query);
  // };

  return (
    <main>
      <section id="search">
        <input
          onChange={handleChange}
          type="text" value={query}
          placeholder="City Name"
        ></input>
        <button onClick={props.getLocation}>Search</button>
      </section>
      <section id="display">
        {props.location &&
          <h2>{props.location.display_name}</h2>
        }
      </section>
    </main>
  );
}

export default Main;

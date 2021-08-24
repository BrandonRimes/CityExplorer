import './App.css';
import Header from './Header';
import Main from './Main';
import Api from './Api';

function App() {
  if (Api.location) {
    console.log(Api.state);
    Main.props.location = Api.state.location;
    Main.props.getLocation = Api.state.getLocation;
  }
  console.log(Main);
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;

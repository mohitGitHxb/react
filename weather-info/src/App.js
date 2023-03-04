import logo from './logo.svg';
import './App.css';
import Weather from './components/weather';

function App() {
  const api={
    coordinates:'https://api.openweathermap.org/geo/1.0/direct?q=delhi&appid=972a80027998d939eaeb4b8fafb4bca4',
    weather:'https://api.openweathermap.org/data/2.5/weather?lat=28.6517178&lon=77.2219388&appid=972a80027998d939eaeb4b8fafb4bca4'
  };
  return (
    <>
      <Weather></Weather>
    </>
  );
}

export default App;

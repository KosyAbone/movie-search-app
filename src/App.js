import React from 'react';
import SearchMovies from "./components/SearchMovies";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Movie Search</h1>
        <SearchMovies/>
      </div>
    );
  }
}

export default App;

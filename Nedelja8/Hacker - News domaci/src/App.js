import React from 'react';
import { StoriesContainer } from './containers/StoriesContainer';
import Header from './components/Header';
// import Filter from './components/Filter';

function App() {
    return (
        <>
        <Header />
        {/* <Filter /> */}
        <StoriesContainer />
        </>
    );
  }

export default App;
import React from 'react';

import Navbar from './navbar/Navbar';
import Movies from './movies/Movies';
import Banner from './banner/Banner';

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Movies />
    </>
  )
}

export default App;
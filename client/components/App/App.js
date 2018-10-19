import React from 'react';
import Heading from '../Heading';
import ContentArea from '../ContentArea';
import './App.style.scss';

const App = () =>
<div className='app-area'>
  <Heading headingText={'React-Redux App'} />,
  <ContentArea />
</div>;

export default App;

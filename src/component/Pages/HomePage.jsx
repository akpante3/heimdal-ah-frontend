import React from 'react';
import HomepageButton from '../UI/buttons/HomepageButton';
import Button from '../UI/buttons/Button';

const HomePage = () => (
  <div>
    <h2 className='lead mt-5'>
        Welcome to the Home page...
      <div>
        <HomepageButton />
        <Button />
      </div>
    </h2>
  </div>
);

export default HomePage;

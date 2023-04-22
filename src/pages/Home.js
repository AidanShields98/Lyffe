import React from 'react';
import ContentCards from '../components/ContentCards';
import pages from '../assets/pages';
import HomeText from '../components/HomeText';
import HomeTitle from '../components/HomeTitle';
export function Home() {
  return (
    <div className='home-root'>
      <HomeTitle />
      <HomeText />
      <div className='home-cards'>
        {pages.map((page, index) => (
          <ContentCards key={index} pages={page} />
        ))}
      </div>
    </div>
  );
}

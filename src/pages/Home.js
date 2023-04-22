import React from 'react';
import ContentCards from '../components/ContentCards';
import pages from '../assets/pages';

export function Home() {
  return (
    <div className='home-root'>
      {pages.map((page, index) => (
        <ContentCards key={index} pages={page} />
      ))}
    </div>
  );
}

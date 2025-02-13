import React from 'react';

const Home = () => {
  return (
    <div className='text-container'>
      <h1>Välkommen till startsidan</h1>
      <p>Detta är startsidan för Todo-appen.</p>
      {/* New section added */}
      <section className='features'>
        <h2>Funktioner</h2>
        <ul>
          <li>Skapa och hantera dina uppgifter</li>
          <li>Sätt deadlines och påminnelser</li>
          <li>Organisera uppgifter efter kategorier</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;

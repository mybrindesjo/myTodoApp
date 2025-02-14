import React from 'react';

const Info = () => {
  return (
    <section className="text-container">
      <h1>Välkommen till Todo-appen</h1>
      <p>Denna applikation hjälper dig att hålla koll på dina uppgifter. Här är hur du använder den:</p>
        <ul className='info-container'>
          <li>För att lägga till en ny uppgift, skriv in texten i inmatningsfältet och klicka på "Lägg till".</li>
          <li>För att markera en uppgift som klar, klicka på uppgiften. Den kommer att strykas över.</li>
          <li>För att ta bort en uppgift, klicka på krysset bredvid uppgiften.</li>
          <li>När alla uppgifter är klara, kommer en konfetti-animation att visas och ett meddelande "Du är klar, bra kämpat!" kommer att visas.</li>
        </ul>
      <p>Vi hoppas att denna applikation hjälper dig att hålla dig organiserad och produktiv. Lycka till!</p>
    </section>
  );
};

export default Info;
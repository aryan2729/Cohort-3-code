import React from 'react';


const App = () => {
  return (
    <div>
            <Card>                          {/* in this card component everything written in inside it give output on children word that stored in card component */}
                <h2>Card Title</h2>
                <p>This is some content inside the card.</p>
            </Card>
            <Card>
                <h2>Another Card</h2>
                <input type="text"  style={{height:20}}/>
                <p>This card has different content!</p>
            </Card>
        </div>
    );
  };


  
function Card({ children }){  // we are passing prop as children | we  can pass prop as children the thing is we don't need to write like prop in app func | we can write a html , input or othes things in this children
      
  return (
          <div style={{
              border: '1px solid #ccc',
              borderRadius: '5px',
              padding: '20px',
              margin: '10px',
              boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
          }}>

              {children}

          </div>
      );
  };

  export default App;
  
import React from 'react';
import Header from "./Header";
import Container from "./Container";
import TabsScroller from "./TabsScroller";

function App() {
  return (
    <Container>
        <Header>
            <TabsScroller />
        </Header>
    </Container>
  );
}



export default App;

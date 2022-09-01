import styled from "styled-components";
import { Card } from "./components/Card";
import { Input } from "./components/input";

function App() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;

    align-items: center;
    justify-content: center;
  `;

  return (
    <Container className="App">
      <Card>
        <Input type="email" placeholder="email" />
        <Input type="password" placeholder="password" />
        <Input type="submit" placeholder="submit" />
      </Card>
    </Container>
  );
}

export default App;

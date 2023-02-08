import styled from "styled-components";
import { Count } from "./components/count/Count";
import { Input } from "./components/input/Input";
import { Timer } from "./components/timer/Timer";

function App() {
  return (
    <Container>
      <Count />
      <Input />
      <Timer />
    </Container>
  );
}

const Container = styled.div`
text-align: center;
`;

export default App;

import "./App.css";
import Routes from "./routes";
import GlobalStyle, { StyledToastContainer } from "./styles/global";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledToastContainer />
      <Routes />
    </>
  );
}

export default App;

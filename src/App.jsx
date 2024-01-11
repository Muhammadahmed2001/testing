import Button from "@mui/material/Button";
import "./App.css";
import MainTextArea from "./comp/textArea.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <MainTextArea />
      <Button className="my-4" variant="contained">
        UPPERCASE
      </Button>
    </div>
  );
}

export default App;

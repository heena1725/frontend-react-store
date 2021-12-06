import "./App.css";
import Navbar from "./Navbar";
import AskWeather from "./AskWeather";
import DisplayProducts from "./DisplayProducts";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

function App() {
  const { isAuthenticated } = useAuth0();
  const [wallet, setWallet] = useState(1000);

  return (
    <div className="App">
      <Navbar wallet={wallet} setWallet={setWallet} />
      {!isAuthenticated && <AskWeather />}
      {isAuthenticated && (
        <DisplayProducts wallet={wallet} setWallet={setWallet} />
      )}
    </div>
  );
}

export default App;

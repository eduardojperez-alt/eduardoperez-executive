import Home from "./relume-home";
import InsightsPage from "./insights/InsightsPage";

function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  if (path === "/insights") {
    return <InsightsPage />;
  }

  return <Home />;
}

export default App;

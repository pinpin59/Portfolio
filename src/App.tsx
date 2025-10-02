import "./App.css";
import { ThemeProvider } from "./provider/theme-provider";
import Header from "./scenes/Header/Header";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
    </ThemeProvider>
  );
}

export default App;

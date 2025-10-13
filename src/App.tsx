import "./App.css";
import AppRouter from "./AppRouter";
import { ThemeProvider } from "./provider/theme-provider";
import Header from "./scenes/Home/Header/Header";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />

      <main>
        <AppRouter />
      </main>
    </ThemeProvider>
  );
}

export default App;

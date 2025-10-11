import "./App.css";
import { ThemeProvider } from "./provider/theme-provider";
import Header from "./scenes/Header/Header";
import Hero from "./scenes/Hero/Hero";
import Skills from "./scenes/Skills/Skills";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <main>
        <Hero />
        <Skills />
      </main>
    </ThemeProvider>
  );
}

export default App;

import "./App.css";
import { ThemeProvider } from "./provider/theme-provider";
import Contact from "./scenes/Contact/Contact";
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
        <Contact />
      </main>
    </ThemeProvider>
  );
}

export default App;

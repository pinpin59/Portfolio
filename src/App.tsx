import "./App.css";
import AppRouter from "./AppRouter";
import { ThemeProvider } from "./provider/theme-provider";
import Header from "./scenes/Home/Header/Header";
import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Header />
        <main>
          <AppRouter />
        </main>
        <Analytics />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

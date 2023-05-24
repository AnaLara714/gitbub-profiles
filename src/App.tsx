import React from "react"
import "../src/assets/css/index.css";
import { Header } from "./components/header/Header"
import { Footer } from "./components/footer/Footer";
import { Main } from "./components/main/Main";
import { ThemeChangeContext } from "./context/ThemeChangeContext";
import { ApiProvider } from "./context/apiContext";

function App() {
  const {darkMode} = React.useContext(ThemeChangeContext);

  return (
    <div className={`h-full w-full mx-auto p-4 ${darkMode ? "dark" : "light"}`}>
      <Header/>
      <ApiProvider>
        <Main/>
      </ApiProvider>
      <Footer/>
    </div>
  )
}

export default App

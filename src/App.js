import "./App.css";
import Menu from "./core/components/common/menu";
import Home from "./pages/home";
import "./core/styles/_global.scss";
import Footer from "./core/components/common/footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  overrides: {
    MuiButton: {
      root: {
        padding: "13px 20px",
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Menu />
      <Home />
      <Footer />
    </ThemeProvider>
  );
}

export default App;

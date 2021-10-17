import { useContext } from 'react';
import { ThemeProvider } from '@emotion/react'
import { ThemeProvider as ThemeCustomProvider, ThemeContext } from "./flux/Contexts/Theme";
import { TodoProvider } from "./flux/Contexts/Todo";
import Todo from "./components/Todo";
import Background from "./components/Background";


function App() {
  const { ...theme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme}>
      <TodoProvider>
        <Background />
        <Todo />
      </TodoProvider>
    </ThemeProvider>
  );
}

const ThemeApp = () => <ThemeCustomProvider>
  <App />
</ThemeCustomProvider>
  ;

export default ThemeApp;

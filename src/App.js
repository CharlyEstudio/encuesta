// Components
import {
    Home,
    Contact
} from './Pages';
import {
    Admin,
    SignIn
} from './Pages/Admin';

// CSS's
import './App.css';

function App() {
  return (
      <div>
        <h1>Estamos en App</h1>
        <Admin />
        <SignIn />
        <Home />
        <Contact />
      </div>
  );
}

export default App;

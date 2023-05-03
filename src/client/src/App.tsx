import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, Login } from './pages';

function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />}/>
        <Route path="home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './pages';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;

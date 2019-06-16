import React, { useState , useEffect} from 'react';
import './App.scss';
import Home from '../views/Home/Home';
import api from '../helpers/api';
import Loader from '../components/Loader';

const App = () => {
  
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async() => {
      const categories = await api.getCategories();
      
      setTimeout(() => {
        setData(categories)
      }, 2000);
    };

    loadData();
  }, [])


  if(data.length === 0){
    return <Loader/>
  }
  return (
    <Home/>
  );
}

export default App;
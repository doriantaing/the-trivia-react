import React, { useState , useEffect} from 'react';
import './App.scss';
import HomeContainer from '../views/Home/HomeContainer';
import api from '../helpers/api';
import Loader from '../components/Loader';
import MyProvider from '../store/TriviaProvider';

const App = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async() => {
      const categories = await api.getCategories();

      setTimeout(() => {
        setData(categories)
      }, 2000);
    };

    loadData();
  }, []);

  if(data.length === 0){
    return <Loader/>
  }
  return (
    <MyProvider categories={data}>
      <HomeContainer/>
    </MyProvider>
  );
}

export default App;
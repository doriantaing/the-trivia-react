import React, { useState , useEffect} from 'react';
import './App.scss';
import HomeContainer from '../views/Home/HomeContainer';
import api from '../helpers/Api';
import storage from '../helpers/Storage';
import Loader from '../components/Loader';
import MyProvider from '../store/TriviaProvider';

const App = () => {

  const [data, setData] = useState([]);
  const [storedQuestions, setQuestions] = useState([]);

  useEffect(() => {
    const loadData = async() => {
      const categories = await api.getCategories();
      const questions = storage.get('category') && await api.getQuestionsByCategory(storage.get('category'));

      setTimeout(() => {
        setQuestions(questions);
        setData(categories);
      }, 2000);
    };

    loadData();
  }, []);

  if(data.length === 0){
    return <Loader/>
  }
  return (
    <MyProvider
        categories={data}
        storedQuestions={storedQuestions}
    >
      <HomeContainer/>
    </MyProvider>
  );
};

export default App;
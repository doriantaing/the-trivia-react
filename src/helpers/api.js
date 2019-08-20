class api {
  
  async getQuestionsByCategory(id) {
    const response = await fetch(`https://trivia-hetic-api.herokuapp.com/api/category/id=${id}`);
    const json = await response.json();
    return json;
  }
  
  async getCategories(){
    const res = await fetch('https://trivia-hetic-api.herokuapp.com/api/categories');

    const  json = await res.json();
    const {data} = json;

    return data;
  }
}

export default new api();


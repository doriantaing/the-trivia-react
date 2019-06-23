class api {
  
  async getQuestionsByCategory(id) {
    const response = await fetch(`http://localhost:5000/api/category/id=${id}`);
    const json = await response.json();
    return json;
  }
  
  async getCategories(){
    const res = await fetch('http://localhost:5000/api/categories');

    const  json = await res.json();
    const {data} = json;

    return data;
  }
}

export default new api();


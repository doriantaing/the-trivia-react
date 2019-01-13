class api {
  
  async getCategories() {
    const response = await fetch('api/category');
    const json = await response.json();
    return json;
  }

  async getCategoryById(id) {
    const response = await fetch(`api/categories/id=${id}`);
    const json = await response.json();
    return json;
  }
}

export default new api();


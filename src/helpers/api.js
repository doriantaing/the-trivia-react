class api {
  async getCategories() {
    const response = await fetch('http://jservice.io/api/categories?count=100');
    const json = await response.json();
    return json;
  }

  async getCategoryById(id) {
    const response = await fetch(`http://jservice.io/api/category?id=${id}`);
    const json = await response.json();
    return json;
  }
}

export default new api();


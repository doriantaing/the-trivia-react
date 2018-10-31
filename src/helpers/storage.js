class storage {
    set(key, value){
        localStorage.setItem(key, JSON.stringify(value));
        
    }

    get(key){
        const getItem = localStorage.getItem(key);
        return JSON.parse(getItem);
    }
}

export default new storage();
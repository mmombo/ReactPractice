import axios from "axios";

// const baseUrl = "http://localhost:3001/api/persons";
//const baseUrl = "https://fso13.herokuapp.com/api/persons";
const baseUrl = "/api/persons";

const getAll = () => {
  const response = axios.get(baseUrl);
  return response.then((response) => response.data);
};

const addNew = (newPerson) => {
  const response = axios.post(baseUrl, newPerson);
  return response.then((response) => response.data);
};

const deletePerson = (id) => {
  return axios.delete(baseUrl + `/${id}`);
};

const updatePerson = (id, changedPerson) => {
  const response = axios.put(baseUrl + `/${id}`, changedPerson);
  return response.then((response) => response.data);
};

const personsService = {
  getAll,
  addNew,
  deletePerson,
  updatePerson,
};

export default personsService;

import axios from "axios";

async function getCustomers() {
  const response = await axios.get("http://localhost:8080/customer");
  return response.data;
}

async function getContracts() {
  const response = await axios.get("http://localhost:8080/contract");
  return response.data;
}

async function getUsers() {
  const response = await axios.get("http://localhost:8080/users");
  return response.data;
}

const HttpService = {
  getCustomers,
  getContracts,
  getUsers,
};

export default HttpService;

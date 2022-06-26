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

async function getCustomer(id) {
  const response = await axios.get(`http://localhost:8080/customer/${id}`);
  return response.data;
}

async function getContract(id) {
  const response = await axios.get(`http://localhost:8080/contract/${id}`);
  return response.data;
}

async function getUser(id) {
  const response = await axios.get(`http://localhost:8080/users/${id}`);
  return response.data;
}

async function deleteCustomer(id) {
  const response = await axios.delete(`http://localhost:8080/customer/${id}`);
  return response.data;
}

async function deleteContract(id) {
  const response = await axios.delete(`http://localhost:8080/contract/${id}`);
  return response.data;
}

async function deleteUser(id) {
  const response = await axios.delete(`http://localhost:8080/users/${id}`);
  return response.data;
}

async function createCustomer(customer) {
  const response = await axios.post("http://localhost:8080/customer", customer);
  return response.data;
}

async function createContract(contract) {
  const response = await axios.post("http://localhost:8080/contract", contract);
  return response.data;
}

async function createUser(user) {
  const response = await axios.post("http://localhost:8080/users", user);
  return response.data;
}

async function updateCustomer(customer) {
  const response = await axios.put(
    `http://localhost:8080/customer/${customer.id}`,
    customer
  );
  return response.data;
}

async function updateContract(contract) {
  const response = await axios.put(
    `http://localhost:8080/contract/${contract.id}`,
    contract
  );
  return response.data;
}

async function updateUser(user) {
  const response = await axios.put(
    `http://localhost:8080/users/${user.id}`,
    user
  );
  return response.data;
}


const HttpService = {
  getCustomers,
  getContracts,
  getUsers,
  
  getCustomer,
  getContract,
  getUser,
  
  deleteCustomer,
  deleteContract,
  deleteUser,
  
  createCustomer,
  createContract,
  createUser,
  
  updateCustomer,
  updateContract,
  updateUser,
};

export default HttpService;

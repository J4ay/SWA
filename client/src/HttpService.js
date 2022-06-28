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

async function getNewUserId() {
  const response = await axios.get("http://localhost:8080/users/newId");
  return response.data;
}

async function getNewCustomerId() {
  const response = await axios.get("http://localhost:8080/customer/newId");
  return response.data;
}

async function getNewContractId() {
  const response = await axios.get("http://localhost:8080/contract/newId");
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

async function createContract(id, startDate, endDate, customer, user1, user2, version, feature1 , feature2 , feature3, ip1, ip2, ip3, licenseKey) {
  const response = await axios.post(
    `http://localhost:8080/contract/${id}/${startDate}/${endDate}/${customer}/${user1}/${user2}/${version}/${feature1}/${feature2}/${feature3}/${ip1}/${ip2}/${ip3}/${licenseKey}`
  );
  return response.data;
}

async function createUser(userId, username, password, userFirstName, userLastName, userEmail, userPhoneNr, userPhoneNr2, isAdmin, userCustName) {

  const response = await axios.post(`http://localhost:8080/users/${userId}/${username}/${password}/${userFirstName}/${userLastName}/${userEmail}/${userPhoneNr}/${userPhoneNr2}/${isAdmin}/${userCustName}`);
  
  return response.data;
}

async function updateCustomer(custId, custName, custDepartment, custAddress) {
  const response = await axios.post(
    `http://localhost:8080/customer/${custId}/${custName}/${custDepartment}/${custAddress}`
  );
  return response.data;
}

async function updateContract(contId, contStartDate, contEndDate, contIp1, contIp2, contIp3, contVersion, contNumFeature1, contNumFeature2, contNumFeature3, contUserId1, contUserId2, contLicenseKey, contCustomer) {
  //var startDateString = contStartDate.getDate() + "-" + (contStartDate.getMonth()) + "-" + (contStartDate.getYear() + 1900);
  var startDateString = (contStartDate.getYear() + 1900) + "-" + (contStartDate.getMonth()) + "-" + contStartDate.getDate();
  //var endDateString = contEndDate.getDate() + "-" + (contEndDate.getMonth()) + "-" + (contEndDate.getYear() + 1900);
  var endDateString = (contEndDate.getYear() + 1900) + "-" + (contEndDate.getMonth()) + "-" + contEndDate.getDate();
  const response = await axios.post(
    `http://localhost:8080/contract/${contId}/${startDateString}/${endDateString}/${contIp1}/${contIp2}/${contIp3}/${contVersion}/${contNumFeature1}/${contNumFeature2}/${contNumFeature3}/${contUserId1}/${contUserId2}/${contLicenseKey}/${contCustomer}`
  );
  return response.data;
}

async function updateUser(id, username, password, userFirstName, userLastName, userEmail, userPhoneNr, userPhoneNr2, isAdmin, userCustName) {
  const response = await axios.post(
    `http://localhost:8080/users/${id}/${username}/${password}/${userFirstName}/${userLastName}/${userEmail}/${userPhoneNr}/${userPhoneNr2}/${isAdmin}/${userCustName}`
  );
  return response.data;
}


const HttpService = {
  getCustomers,
  getContracts,
  getUsers,

  getNewUserId,
  getNewCustomerId,
  getNewContractId,
  
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

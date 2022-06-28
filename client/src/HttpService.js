import axios from "axios";
import * as url from "./Url";

const base_url = url.path;

async function getCustomers() {
  const response = await axios.get(base_url + "/customer");
  return response.data;
}

async function getContracts() {
  const response = await axios.get(base_url + "/contract");
  return response.data;
}

async function getUsers() {
  const response = await axios.get(base_url + "/users");
  return response.data;
}

async function getNewUserId() {
  const response = await axios.get(base_url + "/users/newId");
  return response.data;
}

async function getNewCustomerId() {
  const response = await axios.get(base_url + "/customer/newId");
  return response.data;
}

async function getNewContractId() {
  const response = await axios.get(base_url + "/contract/newId");
  return response.data;
}

async function getCustomer(id) {
  const response = await axios.get(base_url + `/customer/${id}`);
  return response.data;
}

async function getContract(id) {
  const response = await axios.get(base_url + `/contract/${id}`);
  return response.data;
}

async function getUser(id) {
  const response = await axios.get(base_url + `/users/${id}`);
  return response.data;
}

async function deleteCustomer(id) {
  const response = await axios.delete(base_url + `/customer/${id}`);
  return response.data;
}

async function deleteContract(id) {
  const response = await axios.delete(base_url + `/contract/${id}`);
  return response.data;
}

async function deleteUser(id) {
  const response = await axios.delete(base_url + `/users/${id}`);
  return response.data;
}

async function createCustomer(customer) {
  const response = await axios.post(base_url + "/customer", customer);
  return response.data;
}

async function createContract(id, contStartDate, contEndDate, customer, user1, user2, version, feature1 , feature2 , feature3, ip1, ip2, ip3, licenseKey) {
  var startDate = (contEndDate.getYear() + 1900) + "-" + (contEndDate.getMonth()) + "-" + contEndDate.getDate();
  var endDate = (contStartDate.getYear() + 1900) + "-" + (contStartDate.getMonth()) + "-" + contStartDate.getDate();


  const response = await axios.post(
    base_url + `/contract/${id}/${startDate}/${endDate}/${ip1}/${ip2}/${ip3}/${version}/${feature1}/${feature2}/${feature3}/${user1}/${user2}/${licenseKey}/${customer}`
  );
  return response.data;
}

async function createUser(userId, username, password, userFirstName, userLastName, userEmail, userPhoneNr, userPhoneNr2, isAdmin, userCustName) {

  const response = await axios.post(base_url + `/users/${userId}/${username}/${password}/${userFirstName}/${userLastName}/${userEmail}/${userPhoneNr}/${userPhoneNr2}/${isAdmin}/${userCustName}`);
  
  return response.data;
}

async function updateCustomer(custId, custName, custDepartment, custAddress) {
  const response = await axios.post(
    base_url + `/customer/${custId}/${custName}/${custDepartment}/${custAddress}`
  );
  return response.data;
}

async function updateContract(contId, contStartDate, contEndDate, contIp1, contIp2, contIp3, contVersion, contNumFeature1, contNumFeature2, contNumFeature3, contUserId1, contUserId2, contLicenseKey, contCustomer) {
  //var startDateString = contStartDate.getDate() + "-" + (contStartDate.getMonth()) + "-" + (contStartDate.getYear() + 1900);
  var startDateString = (contStartDate.getYear() + 1900) + "-" + (contStartDate.getMonth()) + "-" + contStartDate.getDate();
  //var endDateString = contEndDate.getDate() + "-" + (contEndDate.getMonth()) + "-" + (contEndDate.getYear() + 1900);
  var endDateString = (contEndDate.getYear() + 1900) + "-" + (contEndDate.getMonth()) + "-" + contEndDate.getDate();
  const response = await axios.post(
    base_url + `/contract/${contId}/${startDateString}/${endDateString}/${contIp1}/${contIp2}/${contIp3}/${contVersion}/${contNumFeature1}/${contNumFeature2}/${contNumFeature3}/${contUserId1}/${contUserId2}/${contLicenseKey}/${contCustomer}`
  );
  return response.data;
}

async function updateUser(id, username, password, userFirstName, userLastName, userEmail, userPhoneNr, userPhoneNr2, isAdmin, userCustName) {
  const response = await axios.post(
    base_url + `/users/${id}/${username}/${password}/${userFirstName}/${userLastName}/${userEmail}/${userPhoneNr}/${userPhoneNr2}/${isAdmin}/${userCustName}`
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

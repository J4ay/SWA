import axios from "axios";

async function getCustomers(){
    const response = await axios.get('http://localhost:8080/customer');
    return response.data;
  }

const HttpService = {
    getCustomers,
};
  
export default HttpService;
package de.hse.swa.jodel.jaxrs.resources;

import java.sql.Date;
import java.util.List;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import de.hse.swa.jodel.orm.dao.ContractDao;
import de.hse.swa.jodel.orm.dao.CustomerDao;
import de.hse.swa.jodel.orm.dao.UserDao;
import de.hse.swa.jodel.orm.model.Contract;
import de.hse.swa.jodel.orm.model.Customer;
import de.hse.swa.jodel.orm.model.User;
import io.vertx.core.http.HttpServerRequest;

@RequestScoped
@Path("/")
public class Step4UserResource {

    @Inject
    UserDao userDao;

    @Inject
    CustomerDao customerDao;

    @Inject
    ContractDao contractDao;
    
    @Context
    HttpServerRequest request;

    @GET
    @Path("/users")
    @Produces(MediaType.APPLICATION_JSON)
    public List<User> getUsers() {
        return userDao.getUsers();
    }
    
    @GET
    @Path("customer")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Customer> getCustomers() {
        return customerDao.getCustomers();
    }

    @GET
    @Path("contract")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Contract> getContracts() {
        return contractDao.getContracts();
    }


    @GET
    @Path("customer/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Customer getCustomer(@PathParam("id") Long id) {
        return customerDao.getCustomer(id);
    }

    @GET
    @Path("contract/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Contract getContract(@PathParam("id") Long id) {
        return contractDao.getContract(id);
    }

    @GET
    @Path("users/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public User getUser(@PathParam("id") Long id) {
        return userDao.getUser(id);
    }


    @GET
    @Path("users/newId")
    @Produces(MediaType.APPLICATION_JSON)
    public Long getNewUserId() {
        return userDao.getNewUserId();
    }

    @GET
    @Path("customer/newId")
    @Produces(MediaType.APPLICATION_JSON)
    public Long getNewCustomerId() {
        return customerDao.getNewCustomerId();
    }

    @GET
    @Path("contract/newId")
    @Produces(MediaType.APPLICATION_JSON)
    public Long getNewContractId() {
        return contractDao.getNewContractId();
    }

    /**
     * Update an existing user or create a new one
     * @param user
     * @return the updated user
     */
    @PUT
    @Path("users")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public User addUser(User user) {
        return userDao.save(user);
    } 
    
    /**
     * Create a new user
     * @param user
     * @return the new user
     */
    @POST
    @Path("users/{id}/{username}/{password}/{userFirstName}/{userLastName}/{userEmail}/{userPhoneNr}/{userPhoneNr2}/{isAdmin}/{userCustName}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public User updateUser(@PathParam("id") Long id, @PathParam("username") String username, @PathParam("password") String password , @PathParam("userFirstName") String userFirstName, @PathParam("userLastName") String userLastName, @PathParam("userEmail") String userEmail, @PathParam("userPhoneNr") String userPhoneNr, @PathParam("userPhoneNr2") String userPhoneNr2, @PathParam("isAdmin") Boolean isAdmin , @PathParam("userCustName") String userCustName) {
        User tempUser = new User(id, username, password, userFirstName, userLastName, userEmail, userPhoneNr, userPhoneNr2, isAdmin, userCustName);
        return userDao.save(tempUser);
    }

    @POST
    @Path("customer/{custId}/{custName}/{custDepartment}/{custAddress}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Customer addCustomer(@PathParam("custId") Long custId, @PathParam("custName") String custName, @PathParam("custDepartment") String custDepartment, @PathParam("custAddress") String custAddress ) {
        Customer customerTemp = new Customer(custId, custName, custDepartment, custAddress);
        return customerDao.addCustomer(customerTemp);
    } 

    @POST
    @Path("contract/{contId}/{contStartDate}/{contEndDate}/{contIp1}/{contIp2}/{contIp3}/{contVersion}/{contNumFeature1}/{contNumFeature2}/{contNumFeature3}/{contUserId1}/{contUserId2}/{contLicenseKey}/{contCustomer}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Contract addContract(@PathParam("contId") Long contId, @PathParam("contStartDate") String contStartDate, @PathParam("contEndDate") String contEndDate, @PathParam("contIp1") String contIp1, @PathParam("contIp2") String contIp2, @PathParam("contIp3") String contIp3, @PathParam("contVersion") String contVersion, @PathParam("contNumFeature1") String contNumFeature1, @PathParam("contNumFeature2") String contNumFeature2, @PathParam("contNumFeature3") String contNumFeature3, @PathParam("contUser1") Long contUserId1, @PathParam("contUser2") Long contUserId2, @PathParam("contLicenseKey") String contLicenseKey, @PathParam("contCustomer") String contCustomer) {
        Date startDate = Date.valueOf(contStartDate);
        Date endDate = Date.valueOf(contEndDate);

        User user1 = userDao.getUser(contUserId1);
        User user2 = userDao.getUser(contUserId2);

        Contract contractTemp = new Contract(contId, startDate, endDate, contIp1, contIp2, contIp3, contVersion, Integer.valueOf(contNumFeature1), Integer.valueOf(contNumFeature2), Integer.valueOf(contNumFeature3), user1, user2, contLicenseKey, contCustomer);
        return contractDao.addContract(contractTemp);
    } 

    /**
     * Create a new user
     * @param user
     * @return the new user
     */
    @POST
    @Path("users")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public User updateUser(User user) {
        return userDao.save(user);
    }
    

    
    
    /**
     * Create a new user
     * @param user
     * @return the new user
     */
    @POST
    @Path("customer")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Customer updateCustomer(Customer customer) {
        return customerDao.addCustomer(customer);
    }

    
    /**
     * Create a new user
     * @param user
     * @return the new user
     */
    /* @POST
    @Path("contract")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Contract updateContract(Contract contract) {
        return contractDao.addContract(contract);
    } */

    /**
     * Create a new user
     * @param user
     * @return the new user
     */
    @POST
    @Path("login")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public User login (User user) {
        return userDao.login(user.getUsername(), user.getPassword());
    }
    
    
    @DELETE
    @Path("users")
    @Produces(MediaType.APPLICATION_JSON)
    public void removeAllUsers() {
    	userDao.deleteAllUsers();
    }

    @DELETE
    @Path("users/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public void removeUserById(@PathParam("id") Long id) {
    	userDao.deleteUser(id);
    }

    @DELETE
    @Path("customer/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public void removeCustomerByID(@PathParam("id") Long id) {
    	customerDao.deleteCustomer(id);
    }

    @DELETE
    @Path("contract/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public void removeContractById(@PathParam("id") Long id) {
    	contractDao.deleteContract(id);
    }
}
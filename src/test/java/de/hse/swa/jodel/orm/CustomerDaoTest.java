package de.hse.swa.jodel.orm;

import io.quarkus.test.junit.QuarkusTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import javax.inject.Inject;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import de.hse.swa.jodel.orm.dao.CustomerDao;
import de.hse.swa.jodel.orm.model.Customer;

@QuarkusTest
public class CustomerDaoTest {
    
    @Inject
    CustomerDao customerDao;

    private Customer createCustomer(String prefix) {
        Customer customer = new Customer();
        customer.setName(prefix+"CustomerName");
        customer.setAddress("xyz");
        return customer;
    }

    public void addTwoCustomers() {
        Customer firstPerson = createCustomer("first");
        customerDao.addCustomer(firstPerson);
        Customer secondPerson = createCustomer("second");
        customerDao.addCustomer(secondPerson);
    }

    public void printCustomer(Customer customer) {
        System.out.println("id: " + customer.getCustID());
        System.out.println("Name: " + customer.getName());
        System.out.println("Address: " + customer.getAddress());
    }

    @BeforeEach
    public void clearAllFromDatabase() {
        customerDao.deleteAllCustomers();
    }

    @Test
    void addCustomer_1() {
        Customer firstPerson = createCustomer("first");
        customerDao.addCustomer(firstPerson);
        List<Customer> customers = customerDao.getCustomers();
        assertEquals(customers.size(),1);
        printCustomer(customers.get(0));
    }

    @Test
    void addCustomer_2() {
        Customer firstPerson = createCustomer("first");
        customerDao.addCustomer(firstPerson);
        Customer secondPerson = createCustomer("second");
        customerDao.addCustomer(secondPerson);
        List<Customer> customers = customerDao.getCustomers();
        assertEquals(customers.size(),2);
        printCustomer(customers.get(0));
        printCustomer(customers.get(1));
    }

    @Test
    void getCustomers_1() {
        Customer firstPerson = createCustomer("first");
        customerDao.addCustomer(firstPerson);
        List<Customer> customers = customerDao.getCustomers();
        assertEquals(customers.size(),1);
        printCustomer(customers.get(0));
    }

    @Test
    void getCustomers_2() {
        Customer firstPerson = createCustomer("first");
        customerDao.addCustomer(firstPerson);
        Customer secondPerson = createCustomer("second");
        customerDao.addCustomer(secondPerson);
        List<Customer> customers = customerDao.getCustomers();
        assertEquals(customers.size(),2);
        printCustomer(customers.get(0));
        printCustomer(customers.get(1));
    }

    @Test
    void getCustomer_1() {
        Customer firstPerson = createCustomer("first");
        customerDao.addCustomer(firstPerson);
        List<Customer> customers = customerDao.getCustomers();
        assertEquals(customers.size(),1);
        printCustomer(customers.get(0));
        Customer customer = customerDao.getCustomer(customers.get(0).getCustID());
        assertEquals(customer.getCustID(),customers.get(0).getCustID());
        printCustomer(customer);
    }


    @Test
    void getCustomer_2() {
        Customer firstPerson = createCustomer("first");
        customerDao.addCustomer(firstPerson);
        Customer secondPerson = createCustomer("second");
        customerDao.addCustomer(secondPerson);
        List<Customer> customers = customerDao.getCustomers();
        assertEquals(customers.size(),2);
        printCustomer(customers.get(0));
        printCustomer(customers.get(1));
        Customer customer = customerDao.getCustomer(customers.get(0).getCustID());
        assertEquals(customer.getCustID(),customers.get(0).getCustID());
        printCustomer(customer);
    }

    @Test
    void deleteCustomer_1() {
        Customer firstPerson = createCustomer("first");
        customerDao.addCustomer(firstPerson);
        List<Customer> customers = customerDao.getCustomers();
        assertEquals(customers.size(),1);
        printCustomer(customers.get(0));
        customerDao.deleteCustomer(customers.get(0).getCustID());
        customers = customerDao.getCustomers();
        assertEquals(customers.size(),0);
    }

    @Test
    void deleteCustomer_2() {
        Customer firstPerson = createCustomer("first");
        customerDao.addCustomer(firstPerson);
        Customer secondPerson = createCustomer("second");
        customerDao.addCustomer(secondPerson);
        List<Customer> customers = customerDao.getCustomers();
        assertEquals(customers.size(),2);
        printCustomer(customers.get(0));
        printCustomer(customers.get(1));
        customerDao.deleteCustomer(customers.get(0).getCustID());
        customers = customerDao.getCustomers();
        assertEquals(customers.size(),1);
        printCustomer(customers.get(0));
    }

    @Test
    void deleteAllCustomers_1() {
        Customer firstPerson = createCustomer("first");
        customerDao.addCustomer(firstPerson);
        Customer secondPerson = createCustomer("second");
        customerDao.addCustomer(secondPerson);
        List<Customer> customers = customerDao.getCustomers();
        assertEquals(customers.size(),2);
        printCustomer(customers.get(0));
        printCustomer(customers.get(1));
        customerDao.deleteAllCustomers();
        customers = customerDao.getCustomers();
        assertEquals(customers.size(),0);
    }

    // @Test
    // void updateCustomer_1() {
    //     Customer firstPerson = createCustomer("first");
    //     customerDao.addCustomer(firstPerson);
    //     List<Customer> customers = customerDao.getCustomers();
    //     assertEquals(customers.size(),1);
    //     printCustomer(customers.get(0));
    //     Customer customer = customerDao.getCustomer(customers.get(0).getCustID());
    //     assertEquals(customer.getCustID(),customers.get(0).getCustID());
    //     printCustomer(customer);
    //     customer.setName("newName");
    //     customerDao.updateCustomer(customer);
    //     customer = customerDao.getCustomer(customers.get(0).getCustID());
    //     assertEquals(customer.getCustID(),customers.get(0).getCustID());
    //     printCustomer(customer);
    // }

    // @Test
    // void updateCustomer_2() {
    //     Customer firstPerson = createCustomer("first");
    //     customerDao.addCustomer(firstPerson);
    //     Customer secondPerson = createCustomer("second");
    //     customerDao.addCustomer(secondPerson);
    //     List<Customer> customers = customerDao.getCustomers();
    //     assertEquals(customers.size(),2);
    //     printCustomer(customers.get(0));
    //     printCustomer(customers.get(1));
    //     Customer customer = customerDao.getCustomer(customers.get(0).getCustID());
    //     assertEquals(customer.getCustID(),customers.get(0).getCustID());
    //     printCustomer(customer);
    //     customer.setName("newName");
    //     customerDao.updateCustomer(customer);
    //     customer = customerDao.getCustomer(customers.get(0).getCustID());
    //     assertEquals(customer.getCustID(),customers.get(0).getCustID());
    //     printCustomer(customer);
    // }

    // @Test
    // void getCustomersByName_1() {
    //     Customer firstPerson = createCustomer("first");
    //     customerDao.addCustomer(firstPerson);
    //     Customer secondPerson = createCustomer("second");
    //     customerDao.addCustomer(secondPerson);
    //     List<Customer> customers = customerDao.getCustomersByName("first");
    //     assertEquals(customers.size(),1);
    //     printCustomer(customers.get(0));
    // }

    // @Test
    // void getCustomersByName_2() {
    //     Customer firstPerson = createCustomer("first");
    //     customerDao.addCustomer(firstPerson);
    //     Customer secondPerson = createCustomer("second");
    //     customerDao.addCustomer(secondPerson);
    //     List<Customer> customers = customerDao.getCustomersByName("first");
    //     assertEquals(customers.size(),1);
    //     printCustomer(customers.get(0));
    // }

}

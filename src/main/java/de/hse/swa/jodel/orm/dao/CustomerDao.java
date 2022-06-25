/*========================================================================*
 *                                                                        *
 * This software is governed by the GPL version 2.                        *
 *                                                                        *
 * Copyright: Jay Imort, Kyle Mezger                                      *
 *                                                                        *
 * $Id:$
 *                                                                        *
 *========================================================================*/
package de.hse.swa.jodel.orm.dao;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.jboss.logging.Logger;

import de.hse.swa.jodel.orm.model.Customer;

@ApplicationScoped
public class CustomerDao {

    @Inject
    EntityManager em;

	private static final Logger LOGGER = Logger.getLogger(CustomerDao.class);
	
	public Customer getCustomer(Long id) {
		return em.find(Customer.class, id);
	}
	

	public List<Customer> getCustomers() {
		Query q = em.createQuery("select c from Customers c");
		List<Customer> customers = q.getResultList();
		return customers;
	}

    @Transactional
    public Customer addCustomer(Customer customer) {
    	if (customer.getCustID() != null) {
    		customer = em.merge(customer);
    	} else {
        	em.persist(customer);
    	}
    	return customer;
    }
	

	@Transactional
	public void deleteCustomer(Long id) {

		Customer cm = em.find(Customer.class, id);
		if (cm != null) {
			em.remove(cm);
		}
	}
	
    @Transactional
    public void deleteAllCustomers() {
    	try {

    	    Query del = em.createQuery("DELETE * FROM Customers");
    	    del.executeUpdate();

    	} catch (SecurityException | IllegalStateException  e) {
    	    e.printStackTrace();
    	}

    	return;
    }
    
}

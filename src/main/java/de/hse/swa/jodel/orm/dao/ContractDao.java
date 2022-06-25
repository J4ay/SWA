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

import de.hse.swa.jodel.orm.model.Contract;

@ApplicationScoped
public class ContractDao {

    @Inject
    EntityManager em;

	private static final Logger LOGGER = Logger.getLogger(ContractDao.class);
	
	public Contract getContract(Long id) {
		return em.find(Contract.class, id);
	}
	

	public List<Contract> getContracts() {
		Query q = em.createQuery("select c from Contracts c");
		List<Contract> contracts = q.getResultList();
		return contracts;
	}

    @Transactional
    public Contract addContract(Contract contract) {
    	if (contract.getContID() != null) {
    		contract = em.merge(contract);
    	} else {
        	em.persist(contract);
    	}
    	return contract;
    }
	

	@Transactional
	public void deleteContract(Long id) {

		Contract cm = em.find(Contract.class, id);
		if (cm != null) {
			em.remove(cm);
		}
	}
	
    @Transactional
    public void deleteAllContracts() {
    	try {

    	    Query del = em.createQuery("DELETE * FROM Contracts");
    	    del.executeUpdate();

    	} catch (SecurityException | IllegalStateException  e) {
    	    e.printStackTrace();
    	}

    	return;
    }
    
}

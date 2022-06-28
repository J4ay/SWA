package de.hse.swa.jodel.orm;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.sql.Date;
import java.util.List;

import org.junit.jupiter.api.Test;

import com.google.inject.Inject;

import de.hse.swa.jodel.orm.dao.ContractDao;
import de.hse.swa.jodel.orm.model.Contract;
import io.quarkus.test.junit.QuarkusTest;

@QuarkusTest
public class ContractDaoTest {
    
    @Inject
    ContractDao contractDao;

    private Contract createContract(Long prefix, Date contractStartDate, Date contractEndDate, String contractIp1,String contractVersion, String contractLicenseKey) {
        Contract contract = new Contract();
        contract.setContID(prefix);
        contract.setContractStartDate(contractStartDate);
        contract.setContractEndDate(contractEndDate);
        contract.setContractIp1(contractIp1);
        contract.setContractVersion(contractVersion);
        contract.setContractLicenseKey(contractLicenseKey);
        
        return contract;
    }

    public void printContract(Contract contract) {
        System.out.println("id: " + contract.getContID());
        System.out.println("ContractStartDate: " + contract.getContractStartDate());
        System.out.println("ContractEndDate: " + contract.getContractEndDate());
        System.out.println("ContractIp1: " + contract.getContractIp1());
        System.out.println("ContractVersion: " + contract.getContractVersion());
        System.out.println("ContractLicenseKey: " + contract.getContractLicenseKey());
    }


    @Test
    void addContract_1() {
        Contract firstPerson = createContract(1L, new Date(System.currentTimeMillis()), new Date(System.currentTimeMillis()), "","1.0.0","");
        contractDao.addContract(firstPerson);
        List<Contract> contracts = contractDao.getContracts();
        assertEquals(contracts.size(),1);
        printContract(contracts.get(0));
    }

}

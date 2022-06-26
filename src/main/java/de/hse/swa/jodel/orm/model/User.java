/*========================================================================*
 *                                                                        *
 * This software is governed by the GPL version 2.                        *
 *                                                                        *
 * Copyright: Joerg Friedrich, University of Applied Sciences Esslingen   *
 *                                                                        *
 * $Id:$
 *                                                                        *
 *========================================================================*/
package de.hse.swa.jodel.orm.model;

import java.io.Serializable;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

// import com.fasterxml.jackson.annotation.JsonIgnore;


/**
 * The persistent class for the TUSER database table.
 * 
 */
@Entity
@Table(name = "Tuser")
public class User implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
    @Id
    @SequenceGenerator(name = "tuserSeq", sequenceName = "ZSEQ_TUSER_ID", allocationSize = 1, initialValue = 10)
    @GeneratedValue(generator = "tuserSeq")
    
    @Column(name = "ID")
    private Long id;

    @Basic(optional=false)
    @Column(name = "username", length=64, unique = true)
    private String username;
    
    @Basic(optional=true)
    @Column(name = "password", length=64)
    private String password;

	@Basic(optional = false)
	@Column(name = "userFirstName",length = 50)
	private String userFirstName;

	@Basic(optional = false)
	@Column(name = "userLastName",length = 50)
	private String userLastName;

	@Basic(optional = false)
	@Column(name = "userMail",length = 50)
	private String userMail;

	@Basic(optional = false)
	@Column(name = "userPhoneNumber1",length = 50)
	private String userPhoneNumber1;

	@Basic(optional = true)
	@Column(name = "userPhoneNumber2",length = 50)
	private String userPhoneNumber2;
	
	@Basic(optional = false)
	@Column(name = "isAdmin")
	private boolean isAdmin;

	@Basic(optional = false)
	@Column(name = "customerName")
	private String customerName;

	public User() {
	}

	public User(Long id, String username, String password, String userFirstName, String userLastName, String userMail,
			String userPhoneNumber1, String userPhoneNumber2, boolean isAdmin, String customerName) {
		if(id != null) {
			this.id = id;
		}
		this.username = username;
		this.password = password;
		this.userFirstName = userFirstName;
		this.userLastName = userLastName;
		this.userMail = userMail;
		this.userPhoneNumber1 = userPhoneNumber1;
		this.userPhoneNumber2 = userPhoneNumber2;
		this.isAdmin = isAdmin;
		this.customerName = customerName;
	}

	/* public User(Long id, String userCustName, String userFirstName, String userLastName, String userEmail, String userPhoneNr, String userPhoneNr2, Boolean isAdmin) {
		this.id = id;
		this.customerName = userCustName;
		this.userFirstName = userFirstName;
		this.userLastName = userLastName;
		this.userMail = userEmail;
		this.userPhoneNumber1 = userPhoneNr;
		this.userPhoneNumber2 = userPhoneNr2;
		this.isAdmin = isAdmin;

		this.username = "";
		this.password = "";
		this.customerName = "";
		} */

	
	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}


	public String getUsername() {
		return this.username;
	}

	public void setUsername(String name) {
		this.username = name;
	}
	

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getFirstName() {
		return this.userFirstName;
	}
	public void setFirstname(String name) {
		this.userFirstName = name;
	}
	
	public String getLastName() {
		return this.userLastName;
	}
	public void setLastName(String lastName) {
		this.userLastName = lastName;
	}
	
	public String getMail() {
		return this.userMail;
	}
	public void setMail(String mail) {
		this.userMail = mail;
	}

	public String getPhoneNumber1() {
		return this.userPhoneNumber1;
	}
	public void setPhoneNumber1(String phoneNumber1) {
		this.userPhoneNumber1 = phoneNumber1;
	}

	public String getPhoneNumber2() {
		return this.userPhoneNumber2;
	}
	public void setPhoneNumber2(String phoneNumber2) {
		this.userPhoneNumber2 = phoneNumber2;
	}

	public boolean isAdmin() {
		return this.isAdmin;
	}
	public void setAdmin(boolean isAdmin) {
		this.isAdmin = isAdmin;
	}

	public String getCustomerName() {
		return this.customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + userFirstName + ", lastName=" + userLastName + ", username=" + username
				+ ", mail=" + userMail + ", phoneNumber1=" + userPhoneNumber1 + ", phoneNumber2=" + userPhoneNumber2 + ", isAdmin="
				+ isAdmin + "]";
	}
}
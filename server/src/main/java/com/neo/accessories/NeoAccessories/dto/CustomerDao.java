package com.neo.accessories.NeoAccessories.dto;

import com.neo.accessories.NeoAccessories.entity.Authority;

import javax.persistence.*;
import java.util.List;

/**
 * Created by apatel2 on 5/17/17.
 */

@Entity
@Table(name = "customer")
public class CustomerDao {

    @Id
    private String phoneNo;

    private String name;
    private String companyName;
    private String email;
    private String taxId;
    private String type;
    private String gender;
    private String street;
    private String city;
    private String state;
    private String country;
    private Integer zipCode;
    private double storeCredit;
    //private double balance;
    private String password;
    private String customerNote;
    private String keytag;
    private int tier;
    private String createdTimestamp;
//    private String createdTimestamp;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "user_authority",
            joinColumns = {@JoinColumn(name = "phoneNo", referencedColumnName = "phoneNo")},
            inverseJoinColumns = {@JoinColumn(name = "AUTHORITY_ID", referencedColumnName = "id")})
    private List<Authority> authorities;

    @Transient
    private boolean isValidUser;

    @Transient
    private String operationType;

    @Transient
    private  String confirmPassword;

    @Transient
    private String token;

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String phoneNo) {
        this.phoneNo = phoneNo;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTaxId() {
        return taxId;
    }

    public void setTaxId(String taxId) {
        this.taxId = taxId;
    }



    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public Integer getZipCode() {
        return zipCode;
    }

    public void setZipCode(Integer zipCode) {
        this.zipCode = zipCode;
    }

    public double getStoreCredit() {
        return storeCredit;
    }

    public void setStoreCredit(double storeCredit) {
        this.storeCredit = storeCredit;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }



//    public double getBalance() {
//        return balance;
//    }
//
//    public void setBalance(double balance) {
//        this.balance = balance;
//    }

    public String getCustomerNote() {
        return customerNote;
    }

    public void setCustomerNote(String customerNote) {
        this.customerNote = customerNote;
    }

    public String getKeytag() {
        return keytag;
    }

    public void setKeytag(String keytag) {
        this.keytag = keytag;
    }

//    public String getCreatedTimestamp() {
//        return createdTimestamp;
//    }
//
//    public void setCreatedTimestamp(String createdTimestamp) {
//        this.createdTimestamp = createdTimestamp;
//    }

    public boolean isValidUser() {
        return isValidUser;
    }

    public void setValidUser(boolean validUser) {
        isValidUser = validUser;
    }

    public List<Authority> getAuthorities() {
        return authorities;
    }

    public void setAuthorities(List<Authority> authorities) {
        this.authorities = authorities;
    }

    public int getTier() {
        return tier;
    }

    public void setTier(int tier) {
        this.tier = tier;
    }

    public String getCreatedTimestamp() {
        return createdTimestamp;
    }

    public void setCreatedTimestamp(String createdTimestamp) {
        this.createdTimestamp = createdTimestamp;
    }

    public String getOperationType() {
        return operationType;
    }

    public void setOperationType(String operationType) {
        this.operationType = operationType;
    }

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}

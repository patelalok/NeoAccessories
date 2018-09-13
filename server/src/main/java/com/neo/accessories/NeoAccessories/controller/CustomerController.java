package com.neo.accessories.NeoAccessories.controller;

import com.neo.accessories.NeoAccessories.dto.CustomerDao;
import com.neo.accessories.NeoAccessories.manager.CustomerManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.text.ParseException;

@RestController
@RequestMapping("*")
@CrossOrigin(origins = {"*"})
public class CustomerController {
    @Autowired
    private CustomerManager customerManager;

//    @Autowired
//    BCryptPasswordEncoder bCryptPasswordEncoder;

    @RequestMapping(value = "/addCustomer", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity addCustomer(@RequestBody CustomerDao customerDao)
    {
        customerManager.addCustomer(customerDao);
        System.out.println("Customer Added or Updated Successfully!!");
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @RequestMapping(value = "/validateUser", method = RequestMethod.GET)
    public CustomerDao getUserLoginDetails(@RequestParam String username, @RequestParam String password) throws SQLException {
        return customerManager.getUserLoginDetails(username,password);
    }

    @RequestMapping(value = "/getCustomerDetailsByEmail", method = RequestMethod.GET, produces = "application/json")
    public CustomerDao getCustomerDetailsByEmail(@RequestParam String email) throws SQLException {
        return customerManager.getCustomerDetailsByEmail(email);
    }

    @RequestMapping(value = "/sendEmailToResetPassword", method = RequestMethod.POST, consumes = "application/json")
    public void sendEmailToResetPassword(@RequestBody String email)
    {
        customerManager.sendEmailToResetPassword(email);
    }

    @RequestMapping(value = "/resetPassword", method = RequestMethod.POST, consumes = "application/json")
    public void resetPassword(@RequestBody CustomerDao customerDao) throws ParseException {
        customerManager.resetPassword(customerDao);
    }


}

package com.neo.accessories.NeoAccessories.security.service;

import com.neo.accessories.NeoAccessories.dto.CustomerDao;
import com.neo.accessories.NeoAccessories.repository.CustomerRepository;
import com.neo.accessories.NeoAccessories.security.JwtUserFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JwtUserDetailsService implements UserDetailsService {

    @Autowired
    private CustomerRepository customerRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        CustomerDao customerDao = customerRepository.findByEmail(username);

        if (customerDao == null) {
            throw new UsernameNotFoundException(String.format("No user found with username '%s'.", username));
        } else {
            return JwtUserFactory.create(customerDao);
        }
    }
}

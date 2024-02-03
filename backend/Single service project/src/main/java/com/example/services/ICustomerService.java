/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.services;

import com.example.entities.Customer;
import java.util.List;

/**
 *
 * @author Alejandro
 */

//interfaz ICustomerService
public interface ICustomerService {
    List<Customer> getAll(); //función de la interface que se ha de desarrollar si o si en su clase implementadora
    
    Customer getOne(Long id);
    
    void remove(Long id);
    
    void save(Customer customer);
}

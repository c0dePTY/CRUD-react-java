/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.services;

import com.example.entities.Customer;
import com.example.repository.CustomerRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Alejandro
 */


//En Services se guarda la lógica de negocio en cada servicio
@Service    //idem
//Implementación de la interfaz ICustomerService
public class CustomerService implements ICustomerService{
    
    @Autowired  //xa hacer inyección de dependencias y me lo cargue automáticamente
    private CustomerRepository repository;  //añado un repositorio =  Variable de tipo CustomerRepository
    
    @Override   //xa desarrollar la función de la interfaz
    public List<Customer> getAll(){
        return (List<Customer>)repository.findAll(); //casting del tipo List<Customer>. Se llama al repositorio y a su función .findAll()              
    }
    
    @Override
    public Customer getOne(Long id){
        return (Customer)repository.findById(id).get();//aún con el casting me daba fallo, me estaba trayendo un options (incompatible types: Optional<Customer> cannot be converted to Customer). Solución => poner .get()
    }
    
    @Override
    public void remove(Long id){
        repository.deleteById(id);
    }
    
    @Override
    public void save(Customer customer){
        repository.save(customer);
    }
    
}

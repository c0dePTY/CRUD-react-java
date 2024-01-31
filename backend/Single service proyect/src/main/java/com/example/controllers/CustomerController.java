/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.controllers;

import com.example.entities.Customer;
import com.example.services.CustomerService;
import com.example.services.ICustomerService;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


/**
 *
 * @author Alejandro
 */

@RestController //anotación: indica que la clase CustomerController es un controller
public class CustomerController {
    
    @Autowired  //inyección de dependencia: se inyecta la clase CustomerService dentro de la clase CustomerController a través de su interfaz (ICustomerService). Permite el Loose Coupling: The classes are independent of each other. The only knowledge one class has about the other class is what the other class has exposed through its interfaces in loose coupling
    private ICustomerService service;
    
    //#1request GET. función que devuelve un listado con todos los Customers guardados en la BD
    @GetMapping("/api/customers") //anotación: indica la ruta URL por la que van a acceder a este recurso (función). Añado "/api/" para separar la estructura del front-end y del back-end
    public List<Customer> getAll(){ //llamada a este método getAll()
        
        /*Bloque que será reemplazado por la linea del return que le sigue:
        List<Customer> customers = new ArrayList<>(); //creo una lista armada a mano, llamada customers
        customers.add(new Customer()); //el parámetro es solo un ejemplo de momento. Realmente la lista la voy a cargar con registros sacados de la BD MySQL (xampp)
        return customers; //retornamos la lista customers  */
        
        return service.getAll(); //llamada al método getAll() que está dentro de 
    }
    
    //#2request GET. función a la que le indicas un id y te devuelve el Customer que tiene dicho id
    @GetMapping("/api/customers/{id}")
    public Customer getOne(@PathVariable String id){ //***anotación que toma la variable {id} del Path (URL) CON EL TIPO STRING POR DEFECTO
        //System.out.println("el valor del id es:" + id);
        return service.getOne(Long.parseLong(id)); //transformo "id" de String a Long        
    }
    
    //**Recuerda: estructuras de los servicios Rest: Get/Post (create new)/Put (update an existing one)/Delete
    
    //#3request DELETE. función a la que le indicas un id y elimina e Customer que tiene dicho id. => @DeleteMapping+@PathVariable
    @DeleteMapping("/api/customers/{id}")
    public void remove(@PathVariable String id){
        service.remove(Long.parseLong(id));
    }    
  
    //#4request SAVE. función a la que le das un Customer y te lo guarda en la BD => @PostMapping+@RequestBody
    @PostMapping("/api/customers")
    public void save(@RequestBody Customer customer){ //***anotación para cargar el Customer en cuestión
        service.save(customer);
    }
    
}

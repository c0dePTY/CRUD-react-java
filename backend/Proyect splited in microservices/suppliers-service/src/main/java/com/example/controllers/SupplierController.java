/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.controllers;

import com.example.entities.Supplier;
import com.example.services.SupplierService;
import com.example.services.ISupplierService;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


/**
 *
 * @author Alejandro
 */

@RestController //anotación: indica que la clase SupplierController es un controller
public class SupplierController {
    
    @Autowired  //inyección de dependencia: se inyecta la clase SupplierService dentro de la clase SupplierController a través de su interfaz (ISupplierService). Permite el Loose Coupling: The classes are independent of each other. The only knowledge one class has about the other class is what the other class has exposed through its interfaces in loose coupling
    private ISupplierService service;
    
    //#1request GET. función que devuelve un listado con todos los Suppliers guardados en la BD
    @GetMapping("/api/suppliers") //anotación: indica la ruta URL por la que van a acceder a este recurso (función). Añado "/api/" para separar la estructura del front-end y del back-end
    public List<Supplier> getAll(){ //llamada a este método getAll()
        
        /*Bloque que será reemplazado por la linea del return que le sigue:
        List<Supplier> suppliers = new ArrayList<>(); //creo una lista armada a mano, llamada Suppliers
        suppliers.add(new Supplier()); //el parámetro es solo un ejemplo de momento. Realmente la lista la voy a cargar con registros sacados de la BD MySQL (xampp)
        return suppliers; //retornamos la lista suppliers  */
        
        return service.getAll(); //llamada al método getAll() que está dentro de 
    }
    
    //#2request GET. función a la que le indicas un id y te devuelve el Supplier que tiene dicho id
    @GetMapping("/api/suppliers/{id}")
    public Supplier getOne(@PathVariable String id){ //***anotación que toma la variable {id} del Path (URL) CON EL TIPO STRING POR DEFECTO
        return service.getOne(Long.parseLong(id)); //transformo id de String a Long
    }
    
    //**Recuerda: estructuras de los servicios Rest: Get/Post (create new)/Put (update an existing one)/Delete
    
    //#3request DELETE. función a la que le indicas un id y elimina e Supplier que tiene dicho id. => @DeleteMapping+@PathVariable
    @DeleteMapping("/api/suppliers/{id}")
    public void remove(@PathVariable String id){
        service.remove(Long.parseLong(id));
    }    
  
    //#4request SAVE. función a la que le das un Supplier y te lo guarda en la BD => @PostMapping+@RequestBody
    @PostMapping("/api/suppliers")
    public void save(@RequestBody Supplier supplier){ //***anotación para cargar el Supplier en cuestión
        service.save(supplier);
    }
    
}

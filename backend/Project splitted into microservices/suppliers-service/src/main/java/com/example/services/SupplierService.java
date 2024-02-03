/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.services;

import com.example.entities.Supplier;
import com.example.repository.SupplierRepository;
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
//Implementación de la interfaz ISupplierService
public class SupplierService implements ISupplierService{
    
    @Autowired  //xa hacer inyección de dependencias y me lo cargue automáticamente
    private SupplierRepository repository;  //añado un repositorio =  Variable de tipo SupplierRepository
    
    @Override   //xa desarrollar la función de la interfaz
    public List<Supplier> getAll(){
        return (List<Supplier>)repository.findAll(); //casting del tipo List<Supplier>. Se llama al repositorio y a su función .findAll()              
    }
    
    @Override
    public Supplier getOne(Long id){
        return (Supplier)repository.findById(id).get();//aún con el casting me daba fallo, me estaba trayendo un optiona (incompatible types: Optional<Customer> cannot be converted to Customer). Solución => poner .get()
    }
    
    @Override
    public void remove(Long id){
        repository.deleteById(id);
    }
    
    @Override
    public void save(Supplier supplier){
        repository.save(supplier);
    }
    
}

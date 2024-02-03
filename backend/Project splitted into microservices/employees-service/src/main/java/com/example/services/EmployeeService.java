/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.services;

import com.example.entities.Employee;
import com.example.repository.EmployeeRepository;
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
//Implementación de la interfaz IEmployeeService
public class EmployeeService implements IEmployeeService{
    
    @Autowired  //xa hacer inyección de dependencias y me lo cargue automáticamente
    private EmployeeRepository repository;  //añado un repositorio =  Variable de tipo EmployeeRepository
    
    @Override   //xa desarrollar la función de la interfaz
    public List<Employee> getAll(){
        return (List<Employee>)repository.findAll(); //casting del tipo List<Employee>. Se llama al repositorio y a su función .findAll()              
    }
    
    @Override
    public Employee getOne(Long id){
        return (Employee)repository.findById(id).get();//aún con el casting me daba fallo, me estaba trayendo un optiona (incompatible types: Optional<Customer> cannot be converted to Customer). Solución => poner .get()
    }
    
    @Override
    public void remove(Long id){
        repository.deleteById(id);
    }
    
    @Override
    public void save(Employee employee){
        repository.save(employee);
    }
    
}

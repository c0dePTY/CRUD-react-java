/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.services;

import com.example.entities.Employee;
import java.util.List;

/**
 *
 * @author Alejandro
 */

//interfaz IEmployeeService
public interface IEmployeeService {
    List<Employee> getAll(); //función de la interface que se ha de desarrollar si o si en su clase implementadora
    
    Employee getOne(Long id);
    
    void remove(Long id);
    
    void save(Employee employee);
}

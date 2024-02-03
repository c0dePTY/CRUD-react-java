/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.services;

import com.example.entities.Supplier;
import java.util.List;

/**
 *
 * @author Alejandro
 */

//interfaz ISupplierService
public interface ISupplierService {
    List<Supplier> getAll(); //función de la interface que se ha de desarrollar si o si en su clase implementadora
    
    Supplier getOne(Long id);
    
    void remove(Long id);
    
    void save(Supplier supplier);
}

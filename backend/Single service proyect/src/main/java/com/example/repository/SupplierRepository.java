/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.repository;


import com.example.entities.Supplier;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Alejandro
 */


/*aquí se pondrán, de forma automática a través de la siguiente anotación "@Repository", todas las queris que se harán a la BD.
(!)Gracias a la anotación "@Repository", se nos hace automáticamente todo el CRUD (altas, bajas, modifcaciones de registros) con menos código. Aún así, aquí también podemos incluir queris personalizadas.
Pasos:
    #1- poner la anotación "@Repository".
    #2- escribir la interfaz que extenderá a "CrudRepository<indicar el tipo de la entidad (o modelo), y tipo del atributo clave>"
    #3- hacer todos los imports que el IDE nos vaya sugeriendo en esta clase
*/
@Repository //idem
public interface SupplierRepository extends CrudRepository<Supplier, Long>{
    
}

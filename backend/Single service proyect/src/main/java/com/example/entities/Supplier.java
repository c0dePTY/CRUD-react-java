/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 *
 * @author Alejandro
 */

@Entity //así indico que Customer.java es una entidad a tratrar en la BD
@Table(name = "suppliers")  //indica que Customer.java está ligado a la tabla customers de nuestra BD  
@Getter @Setter
@ToString //Lombok me genera el método ToString() y EqualsAndHashCode (comprueba que dos objetos tienen mismo nombre y tipo)
@EqualsAndHashCode
public class Supplier {   
    
    @Id //indica que el atributo id corresponde con la columna primary key "id" de la tabla de la BD
    @GeneratedValue(strategy = GenerationType.IDENTITY) //indica que el id se generará automáticamente en la BD, como ya definimos en la BD MySQL
    private Long id;
    private String nombre;
    private String email;
    private String telefono;
    private String direccion;
    private String web;
    private String contacto;


    
}

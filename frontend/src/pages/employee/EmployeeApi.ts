
/*contendrá funciones para agregar clientes, eliminarlos y consultaros
Ojo: primero en vez de llamar a la API, guardaremos los cambios en el
cache-localStorage del browser. Una vez sepamos que funciona, haremos el 
cambio a la API, pero primero vamos a ver funcionar estas funciones
localmente*/

import Employee from "./Employee";




/* función#1 - que toma la lista de clientes guardados en el localStorage ó API con el fin de llenar la tabla
ACLARACIÓN: localStorage['employees'] es un array de Clientes en Strings*/
export async function searchEmployees() {

    let url = process.env.REACT_APP_API + 'employees';
    let response = await fetch(url, { 
        "method": 'GET',
        "headers": {
            "Content-Type": 'application/json'
        }
    })

    return await response.json();   //return devuelve una colección de objetos

    /*DEPRECATED: Así haciamos empleando localStorage
    La primera vez, si localStorage['employees'] está vacio o no existe...
    if(!localStorage['employees']){
        localStorage['employees'] = '[]'; //array vacio de Strings
    }
    let employees = localStorage['employees']; //extraigo employees (Strings) guardados en localStorage
                                                //localStorage no guarda arrays, sino Strings
    employees = JSON.parse(employees); //cambio de Clientes Strings a ARRAY de objetos Cliente (cliente.nombre, cliente.email...)   
    
    return employees;   //retorno let employees, que es un array con todos los objetos Clientes

    
    //DEPRECATED ORIGINAL: Cargamos datos enduro
    const datosDeEjemplo = [
        {
        id: '1',
        nombre: 'Alejandro',
        apellido: 'Pérez',
        email: 'ale@gmail.com',
        telf: '123456',
        direcc: 'av caracol',    
        },
        {
        id: '2',    
        nombre: 'Pablo',
        apellido: 'López',
        email: 'Pablo@gmail.com',
        telf: '456789',
        direcc: 'av mariposa',    
        }
      ];
      */



}


/* función#2 - para eliminar objetos Cliente de la API*/
export async function removeEmployee(id: string) {

    let url = process.env.REACT_APP_API + 'employees/' +id ; 
    await fetch(url, {        //No hay response a este fecth
        "method": 'DELETE',
        "headers": {
            "Content-Type": 'application/json'
        }
    })



    /*DEPRECATED:
    let employees = searchEmployees();
    
    //'cliente.id' no es el indice dentro del array employees,
     sino un atributo que le doy a cada objeto Cliente.//
    let indice = employees.findIndex(employees.id === id);
    let indice = employees.findIndex( (employee: Employee) => employee.id == id ); //.findIndex recorre todo el array employees uno a uno hasta que encuentra el employee que cumple nuestro requisito. Cuando lo encuentra, nos devuelve su indice 
    employees.splice(indice, 1); //.splice(indice, y cantidad de elementos que queremos eliminar del array)
    localStorage['employees'] = JSON.stringify(employees);
    */
}


/* función#3 - para guardar y editar clientes*/
export async function saveEmployee(employee: Employee) {      
    
    let url = process.env.REACT_APP_API + 'employees';
    await fetch(url, {    //no hay response que se espere
        "method": 'POST',
        "body": JSON.stringify(employee),
        "headers": {
            "Content-Type": 'application/json'
        }
    })



    /*DEPRECATED:

    let employees = searchEmployees();/*Llamo a la función de arriba. Let employees es un array con todos los objetos Clientes hasta ahora

    //Si estoy editando un objeto Employee ya existente, voy a 
    mantener su employee.id existente.//
    if(employee.id){
        let indice = employees.findIndex( (c: Employee)  => c.id == employee.id); //busco en el array de objetos Employees el id del Employee que acabamos de editar
        employees[indice] = employee; //el Employee que acabamos de editar suplanta al objeto Employee original
    } 
    //Si estoy creando un objeto Employee nuevo, he de crearle un 
    employee.id nuevo//
    else{
        employee.id = String(Math.round(Math.random() * 1000));
        employees.push(employee); //array de objetos Employees. Json acepta Strings, no arrays
    }
    localStorage['employees'] = JSON.stringify(employees);*/
}

/* función#4 - para buscar un cliente por su Id*/
export async function searchEmployeeById(id: string) { 

    let url = process.env.REACT_APP_API + 'employees/' + id;
    let response = await fetch(url, {
        "method": 'GET', 
        "headers": {
            "Content-Type": 'application/json' 
        }

    })

    return await response.json();
    
    
    /*DEPRECATED
    //debugger;
    let employees = searchEmployees(); //Llamo a la función de arriba. Let employees es un array con todos los objetos Clientes hasta ahora    
    return employees.find( (employee: Employee) => employee.id == id); //.find recorre el array de objetos Employees uno a uno hasta que encuentra el objeto Employee que contiene el 'id' deseado; .find() retorna dicho objeto Employee con todos sus atributos.
    */
}
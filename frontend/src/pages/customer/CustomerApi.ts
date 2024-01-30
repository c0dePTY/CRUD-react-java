
/*contendrá funciones para agregar clientes, eliminarlos y consultaros
Ojo: primero en vez de llamar a la API, guardaremos los cambios en el
cache-localStorage del browser. Una vez sepamos que funciona, haremos el 
cambio a la API, pero primero vamos a ver funcionar estas funciones
localmente*/

import Customer from "./Customer";






/* función#1 - que toma la lista de clientes guardados en el localStorage ó API con el fin de llenar la tabla
ACLARACIÓN: localStorage['customers'] es un array de Clientes en Strings*/
export async function searchCustomers() {  
    let url = process.env.REACT_APP_API + 'customers';       
    let response = await fetch(url, {
        "method": 'GET',
        "headers": {
            "Content-Type": 'application/json'
        }
    })

    return await response.json(); //recuerda que en el Controller del back se retornaba un array de objetos Clientes en este caso
    


    /* DEPRECATED:
    #10. ABAJO SE VE CÓMO EMPLEÁBAMOS LOCALSTORAGE, YA DEPRECATED
    La primera vez, si localStorage['customers'] está vacio o no existe...
    if(!localStorage['customers']){
        localStorage['customers'] = '[]'; array vacio de Strings
    }
    let customers = localStorage['customers'];  extraigo customers (Strings) guardados en localStorage
                                                localStorage no guarda arrays, sino Strings
    customers = JSON.parse(customers);  cambio de Clientes Strings a ARRAY de objetos Cliente (cliente.nombre, cliente.email...)   
    
    return customers;    retorno let customers, que es un array con todos los objetos Clientes*/



    /*DEPRECATED ORIGINAL: CARGAMOS DATOS EN DURO
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
export async function removeCustomer(id: string) {
    
    /* DEPRECATED:
    let customers = await searchCustomers();    // #10. ahora que manejamos la API, searchCustomers() es una promesa => ponerle 'await' + 'async' xa que no de error por desesperación
        
    'cliente.id' no es el indice dentro del array customers,
     sino un atributo que le doy a cada objeto Cliente. 
    //let indice = customers.findIndex(customers.id === id);
    let indice = customers.findIndex( (customer: Customer) => customer.id == id ); //.findIndex recorre todo el array customers uno a uno hasta que encuentra el customer que cumple nuestro requisito. Cuando lo encuentra, nos devuelve su indice 
    customers.splice(indice, 1); //.splice(indice, y cantidad de elementos que queremos eliminar del array)
    localStorage['customers'] = JSON.stringify(customers);*/

    let url = process.env.REACT_APP_API + 'customers/' +id ; 
    await fetch(url , {
        "method": 'DELETE',
        "headers": {
            "Content-Type": 'application/json'
        }
    })

    // NO HABRÁ RESPUESTA XA DELETE: return await response.json();

}


/* función#3 - para guardar y editar clientes*/
export async function saveCustomer(customer: Customer) {

    /*DEPRECATED:
    let customers = searchCustomers();  //Llamo a la función de arriba. Let customers es un array con todos los objetos Clientes hasta ahora
  
    //Si estoy editando un objeto Customer ya existente, voy a 
    mantener su customer.id existente.
    if(customer.id){
        let indice = customers.findIndex( (c: Customer)  => c.id == customer.id);  //busco en el array de objetos Customers el id del Customer que acabamos de editar
        customers[indice] = customer;  //el Customer que acabamos de editar suplanta al objeto Customer original
    } 
    //Si estoy creando un objeto Customer nuevo, he de crearle un 
    customer.id nuevo//
    else{
        customer.id = String(Math.round(Math.random() * 1000));
        customers.push(customer);  //array de objetos Customers. Json acepta Strings, no arrays
    }
    localStorage['customers'] = JSON.stringify(customers);*/

    let url = process.env.REACT_APP_API + 'customers'; 
    await fetch(url, {
        "method": 'POST',
        "body": JSON.stringify(customer),
        "headers": {
            "Content-type": 'application/json'
        }
    })



}

/* función#4 - para buscar un cliente por su Id*/
export async function searchCustomerById(id: string) {    
    
    /*DEPRECATED:
    debugger;
    let customers = searchCustomers();  //Llamo a la función de arriba. Let customers es un array con todos los objetos Clientes hasta ahora    
    return customers.find( (customer: Customer) => customer.id == id);  //.find recorre el array de objetos Customers uno a uno hasta que encuentra el objeto Customer que contiene el 'id' deseado; .find() retorna dicho objeto Customer con todos sus atributos.*/

    debugger;
    let url = process.env.REACT_APP_API + 'customers/' + id;
    //let url = 'http://localhost:9001/api/customers/16';
    let response = await fetch(url , {
        "method": 'GET',
        "headers": {
            "Content-Type": 'application/json'
        }
    })

    return await response.json();





}
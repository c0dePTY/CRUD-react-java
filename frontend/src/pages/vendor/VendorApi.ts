
/*contendrá funciones para agregar clientes, eliminarlos y consultaros
Ojo: primero en vez de llamar a la API, guardaremos los cambios en el
cache-localStorage del browser. Una vez sepamos que funciona, haremos el 
cambio a la API, pero primero vamos a ver funcionar estas funciones
localmente*/

import Vendor from "./Vendor";




/* función#1 - que toma la lista de clientes guardados en el localStorage ó API con el fin de llenar la tabla
ACLARACIÓN: localStorage['vendors'] es un array de Clientes en Strings*/
export async function searchVendors() {

    let url = process.env.REACT_APP_API + 'suppliers';
    let response = await fetch(url, {
        "method": 'GET',
        "headers": {
            "Content-Type": 'application/json'
        }
    })

    return await response.json();

    /*DEPRECATED:
    La primera vez, si localStorage['vendors'] está vacio o no existe...
    if(!localStorage['vendors']){
        localStorage['vendors'] = '[]'; //...lo igualamos a un array vacio de Strings
    }
    let vendors = localStorage['vendors']; //extraigo vendors (Strings) guardados en localStorage
                                                localStorage no guarda arrays, sino Strings
    vendors = JSON.parse(vendors); //cambio de Clientes Strings a ARRAY de objetos Cliente (cliente.nombre, cliente.email...)   
    
    return vendors;   //retorno let vendors, que es un array con todos los objetos Clientes

    //
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
export async function removeVendor(id: string) {

    let url = process.env.REACT_APP_API + 'suppliers/' +id ;
    await fetch(url, {         //Delete no tiene response
        "method": 'DELETE',
        "headers": {
            "Content-Type": 'application/json'
        }
    })
    
    
    /*DEPRECATED:
    let vendors = searchVendors();
    
    //'cliente.id' no es el indice dentro del array vendors,
    sino un atributo que le doy a cada objeto Cliente. 
    let indice = vendors.findIndex(vendors.id === id);
    let indice = vendors.findIndex( (vendor: Vendor) => vendor.id == id );  //.findIndex recorre todo el array vendors uno a uno hasta que encuentra el vendor que cumple nuestro requisito. Cuando lo encuentra, nos devuelve su indice 
    vendors.splice(indice, 1);  //.splice(indice, y cantidad de elementos que queremos eliminar del array)
    localStorage['vendors'] = JSON.stringify(vendors);*/
    
}


/* función#3 - para editar un Cliente ya existente, o para guardar a un nuevo Cliente*/
export async function saveVendor(vendor: Vendor) {

    let url = process.env.REACT_APP_API + 'suppliers';
    await fetch(url, {   //No hay response
        "method": 'POST',
        "body": JSON.stringify(vendor),
        "headers": {
            "Content-Type": 'application/json'
        }
    })
}

    /*DEPRECATED:
    let vendors = searchVendors(); //Llamo a la función de arriba. Let vendors es un array con todos los objetos Clientes hasta ahora 
  
    //Si estoy editando un objeto Vendor ya existente, voy a 
    mantener su vendor.id existente.
    if(vendor.id){
        let indice = vendors.findIndex( (c: Vendor)  => c.id == vendor.id);  //busco en el array de objetos Vendors el id del Vendor que acabamos de editar
        vendors[indice] = vendor;  //el Vendor que acabamos de editar suplanta al objeto Vendor original
    } 
    //Si estoy creando un objeto Vendor nuevo, he de crearle un 
    vendor.id nuevo
    else{
        vendor.id = String(Math.round(Math.random() * 1000));
        vendors.push(vendor);  //array de objetos Vendors. Json acepta Strings, no arrays
    }
    localStorage['vendors'] = JSON.stringify(vendors);*/


/* función#4 - para buscar un cliente por su Id*/
export async function searchVendorById(id: string) {  

    let url = process.env.REACT_APP_API + 'suppliers/' + id;
    let response = await fetch(url, {
        "method": 'GET',
        "headers":{
            "Content-Type": 'application/json' 
        }
    })

    return await response.json();

}

    
    /*DEPRECATED:
    //debugger;
    let vendors = searchVendors(); //Llamo a la función de arriba. Let vendors es un array con todos los objetos Clientes hasta ahora    
    return vendors.find( (vendor: Vendor) => vendor.id == id); //.find recorre el array de objetos Vendors uno a uno hasta que encuentra el objeto Vendor que contiene el 'id' deseado; .find() retorna dicho objeto Vendor con todos sus atributos.
    */

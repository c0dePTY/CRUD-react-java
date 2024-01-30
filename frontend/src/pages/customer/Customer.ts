/*Este va a ser nuestro modelo ó clase de Customer, donde
 definiremos su estructura de atributos 
 ¿y funciones?. Podemos crearlo como una clase 
 (con atributos y funcionalidades. Al compilarse en javaScript,
 se generará una clase, generando código extra que ocpuará más espacio) 
 o una interface (con solo atributos. Al compilarse
 a javaScript no va a generar código, por lo que no ocupa espacio)*/

 export default interface Customer {
    id?: string;    //en el caso de que demos al botón de '+AGREGAR CLIENTE', éste no tendrá id, por lo que el atributo 'id: string' es opcional.   
    nombre?: string;    //? signigica que obligatoriamente no tiene porque ser un string, puede ser un undefined.
    apellido?: string;
    email?: string;
    telefono?: string; //es string, ya que puede llevar (). Y no se pretende hacer operaciones aritmética con él.
    direccion?: string;
 }

 /*Ahora cambiaré todos los tipos ': any' de CustomerList.tsx, 
 CustomerEdit.tsx, CustomerApi.ts por ': Customer'. De esta forma,
 se activa el autocompletado (cuando escribo 'clientes.' se me 
 ofrece la opción de autocompletar con '.nombre', '.apellido', etc), 
 y se marcan errores.*/
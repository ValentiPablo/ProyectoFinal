/* *************************************************************** */
/* MODULO: producto.js                                             */
/* DESCRIPCION: Funciones para el uso de productos                 */
/* *************************************************************** */

// ------------------------------------------------------------- //
// CLASE: Producto                                               //
// DESCRIPCION: Implementa el objeto producto                    //
// ------------------------------------------------------------- //
class Producto {
    // Declaro las variables privadas que contienen los datos 
    #id = "";
    #nombre = "";
    #precio = "";
    #destacado = false;
    #franquicia = "";
    #tamano = "";
    #material = "";
    #altura = "";
    #imagen1 = "";
    #imagen2 = "";
    #imagen3 = "";
    #imagen4 = "";

    // ===================================================== //
    // Función: constructor                                  //
    // Descripción: Crea un producto                         //
    // Parámetros:                                           //
    //      id = cadena con el id del producto               //
    //      nombre = cadena con el nombre del producto       //
    //      precio = cadena con el precio del producto       //
    //      destacado = determina si es un producto detacado //
    //      franquicia = cadena con la franquicia del pdto   //
    //      tamano = tamano del producto                     //
    //      material = material del producto                 //
    //      altura = altura del producto                     //
    //      imagen1 = imagen1 del producto                   //
    //      imagen2 = imagen2 del producto                   //
    //      imagen3 = imagen3 del producto                   //
    //      imagen4 = imagen4 del producto                   //
    // Retorno:                                              //
    //      ret = producto                                   //
    // ===================================================== //
    constructor(id, nombre, precio, destacado, franquicia, 
                tamano, material, altura, imagen1, imagen2,
                imagen3, imagen4) {
        this.#id = id;
        this.#nombre = nombre;
        this.#precio = precio;
        this.#destacado = destacado;
        this.#franquicia = franquicia;
        this.#tamano = tamano;
        this.#material = material;
        this.#altura = altura;
        this.#imagen1 = imagen1;
        this.#imagen2 = imagen2;
        this.#imagen3 = imagen3;
        this.#imagen4 = imagen4;
    }

    // ===================================================== //
    // Función: id                                           //
    // Descripción: Devuelve el id del producto              //
    // Parámetros:                                           //
    //      nada                                             //
    // Retorno:                                              //
    //      id = id del producto                             //
    // ===================================================== //
    get id() {
        return this.#id;
    }

    // ===================================================== //
    // Función: nombre                                       //
    // Descripción: Devuelve el nombre del producto          //
    // Parámetros:                                           //
    //      nada                                             //
    // Retorno:                                              //
    //      nombre = nombre del producto                     //
    // ===================================================== //
    get nombre() {
        return this.#nombre;
    }

    // ===================================================== //
    // Función: precio                                       //
    // Descripción: Devuelve el precio del producto          //
    // Parámetros:                                           //
    //      nada                                             //
    // Retorno:                                              //
    //      datos = precio del producto                      //
    // ===================================================== //
    get precio() {
        return this.#precio;
    }

    // ===================================================== //
    // Función: destacado                                    //
    // Descripción: Devuelve si es un producto destacado     //
    // Parámetros:                                           //
    //      nada                                             //
    // Retorno:                                              //
    //      datos = TRUE o FALSE                             //
    // ===================================================== //
    get destacado() {
        return this.#destacado;
    }

    // ===================================================== //
    // Función: franquicia                                   //
    // Descripción: Devuelve la franquicia del producto      //
    // Parámetros:                                           //
    //      nada                                             //
    // Retorno:                                              //
    //      franquicia = franquicia del producto             //
    // ===================================================== //
    get franquicia() {
        return this.#franquicia;
    }

    // ===================================================== //
    // Función: tamano                                       //
    // Descripción: Devuelve la tamano del producto          //
    // Parámetros:                                           //
    //      nada                                             //
    // Retorno:                                              //
    //      tamano = tamano del producto                     //
    // ===================================================== //
    get tamano() {
        return this.#tamano;
    }

    // ===================================================== //
    // Función: material                                     //
    // Descripción: Devuelve el material del producto        //
    // Parámetros:                                           //
    //      nada                                             //
    // Retorno:                                              //
    //      material = material del producto                 //
    // ===================================================== //
    get material() {
        return this.#material;
    }

    // ===================================================== //
    // Función: altura                                       //
    // Descripción: Devuelve la altura del producto          //
    // Parámetros:                                           //
    //      nada                                             //
    // Retorno:                                              //
    //      altura = altura del producto                     //
    // ===================================================== //
    get altura() {
        return this.#altura;
    }

    // ===================================================== //
    // Función: imagen1                                      //
    // Descripción: Devuelve imagen1 del producto            //
    // Parámetros:                                           //
    //      nada                                             //
    // Retorno:                                              //
    //      imagen1 = imagen1 del producto                   //
    // ===================================================== //
    get imagen1() {
        return this.#imagen1;
    }

    // ===================================================== //
    // Función: imagen2                                      //
    // Descripción: Devuelve imagen1 del producto            //
    // Parámetros:                                           //
    //      nada                                             //
    // Retorno:                                              //
    //      imagen2 = imagen2 del producto                   //
    // ===================================================== //
    get imagen2() {
        return this.#imagen2;
    }

    // ===================================================== //
    // Función: imagen3                                      //
    // Descripción: Devuelve imagen1 del producto            //
    // Parámetros:                                           //
    //      nada                                             //
    // Retorno:                                              //
    //      imagen1 = imagen3 del producto                   //
    // ===================================================== //
    get imagen3() {
        return this.#imagen3;
    }

    // ===================================================== //
    // Función: imagen4                                      //
    // Descripción: Devuelve imagen1 del producto            //
    // Parámetros:                                           //
    //      nada                                             //
    // Retorno:                                              //
    //      imagen4 = imagen4 del producto                   //
    // ===================================================== //
    get imagen4() {
        return this.#imagen4;
    }


    // ===================================================== //
    // Función: existeCadena                                 //
    // Descripción: Determina si 'cadena' es parte del texto //
    //              del producto                             //
    // Parámetros:                                           //
    //      nada                                             //
    // Retorno:                                              //
    //      ret = TRUE, existe la cadena                     //
    //           FALSE, no existe la cadena                  //
    // ===================================================== //
    existeCadena(cadena) {
        return (this.#nombre.toLowerCase().includes(cadena.toLowerCase())) || 
               (this.#franquicia.toLowerCase().includes(cadena.toLowerCase())) ||
               (this.#tamano.toLowerCase().includes(cadena.toLowerCase())) ||
               (this.#material.toLowerCase().includes(cadena.toLowerCase())) ||
               (this.#altura.toLowerCase().includes(cadena.toLowerCase()));
    }

    // ===================================================== //
    // Función: toString                                     //
    // Descripción: Devuelve una cadena con los datos del    //
    //              producto                                 //
    // Parámetros:                                           //
    //      nada                                             //
    // Retorno:                                              //
    //      ret = cadena                                     //
    // ===================================================== //
    toString() {
        return `{id: ${this.#id}, nombre: ${this.#nombre}, ` + 
               `precio: ${this.#precio}, destacado: ${this.#destacado}, ` +
               `franquicia: ${this.#franquicia}, tamano: ${this.#tamano}, ` +
               `material: ${this.#material}, altura: ${this.#altura}, ` +
               `imagen1: ${this.#imagen1}, imagen2: ${this.#imagen2}, ` +
               `imagen3: ${this.#imagen3}, imagen4: ${this.#imagen4}` +
               `}`;
    }
}

// ------------------------------------------------------------- //
// FUNCIONES GENERALES                                           //
// DESCRIPCION: Funciones que se utilizan en el módulo, pero son //
//              genéricas                                        //
// ------------------------------------------------------------- //
// ===================================================== //
// Función: esDestacado                                  //
// Descripción: Determina si un producto es destacado    //
// Parámetros:                                           //
//      cantidad = cantidad de productos en total        //
//      id = id del producto                             //
//      destacados = cantidad de productos destacados    //
// Retorno:                                              //
//      ret = TRUE o FALSE                               //
// ===================================================== //
function esDestacado(cantidad, id, destacados) {
    let fecha = new Date();
    let dia = fecha.getDate();
    let divisor = cantidad / destacados;

    let ret = (dia % divisor) == (id % divisor);

    return ret;
}

// ===================================================== //
// Función: obtenerURL                                   //
// Descripción: Obtiene el host mas el path actual       //
// Parámetros:                                           //
//      nada                                             //
// Retorno:                                              //
//      ret = host +  path                               //
// ===================================================== //
function obtenerURL() {
    let ret = location.origin;
  
    let listaCadena = location.pathname.split("/");
    for (let i=0; i<listaCadena.length-1; i++)
    {
      ret += listaCadena[i] + "/";
    }
  
    return ret;
}

// ------------------------------------------------------------- //
// FUNCIONES EXPORTADAS                                          //
// ------------------------------------------------------------- //
// ------------------------------------------------------------- //
// FUNCIONES PARA OBTENER PRODUCTOS                              //
// DESCRIPCION: Obtiene los productos de una api simulada local  //
// ------------------------------------------------------------- //
// ===================================================== //
// Función: fetchProductos                               //
// Descripción: Obtiene los productos de la api          //
// Parámetros:                                           //
//      nada                                             //
// Retorno:                                              //
//      ret = array con los datos                        //
// ===================================================== //
export async function fetchProductos() {

    let datos = null;
    try {
        const respuesta = await fetch('https://grupo18.pythonanywhere.com/productos');
        datos = await respuesta.json();

    } catch (error) {
        console.log(error);
    }

    return datos;
}

// ===================================================== //
// Función: obtenerProductos                             //
// Descripción: Obtiene la lista de productos            //
// Parámetros:                                           //
//      funcion = función a ejecutar luego de obtener    //
//                los productos. Es opcional             //
// Retorno:                                              //
//      ret = array con los productos                    //
// ===================================================== //
export async function obtenerProductos(funcion) {
    let productos = new Array();

    // Busco los productos
    fetchProductos()
        // Una vez obtenidos los datos, creo cada producto
        .then(datos => datos.map(item => productos.push(new Producto(item.id, item.nombre, item.precio, esDestacado(datos.length, item.id, datos.length/4),
                                                                     item.franquicia, item.tamano, item.material,
                                                                     item.altura, item.imagen1, item.imagen2, item.imagen3, item.imagen4))))
        .catch(() => {
            console.log("Error");
            })
        // Termine bien o mal, ejecuto la función
        .finally(() => {
            if (funcion != undefined) {
                funcion(productos);
            }
        });

    return productos;
}

// ===================================================== //
// Función: armarProductoDestacado                       //
// Descripción: Devuelve una tarjeta HTML de producto    //
//              destacado                                //
// Parámetros:                                           //
//      producto = producto con los datos                //
// Retorno:                                              //
//      ret = producto HTML                              //
// ===================================================== //
export function armarProductoDestacado(producto) {

    // Obrengo el template del item destacado
    let template = document.getElementById("producto-destacado").content;

    // Clono el template
    let productoHTML = template.cloneNode(true);

    // Asigno el id del producto 
    productoHTML.querySelector(".item_destacado").id = producto.id;

    // Asigno la imagen del producto
    productoHTML.querySelector("img").src = producto.imagen1;

    // Asigno el nombre del producto
    productoHTML.querySelector("h3").textContent = producto.nombre;

    // Obtengo el contenedor de datos
    let datos = productoHTML.querySelector("#datos");
    // Obtengo el campo 'dato' del producto
    let dato = datos.querySelector("p");

    // Asigno la franquicia del producto
    let datoClone = dato.cloneNode(true);  
    datoClone.querySelector("#campo").textContent = "Franquicia: ";
    datoClone.querySelector("#valor").textContent = producto.franquicia;
    // Agrego el dato
    datos.appendChild(datoClone);

    // Asigno el tamaño del producto
    datoClone = dato.cloneNode(true);  
    datoClone.querySelector("#campo").textContent = "Tamaño: ";
    datoClone.querySelector("#valor").textContent = producto.tamano;
    // Agrego el dato
    datos.appendChild(datoClone);

    // Asigno el material del producto
    datoClone = dato.cloneNode(true);  
    datoClone.querySelector("#campo").textContent = "Material: ";
    datoClone.querySelector("#valor").textContent = producto.material;
    // Agrego el dato
    datos.appendChild(datoClone);

    // Asigno la altura del producto
    datoClone = dato.cloneNode(true);  
    datoClone.querySelector("#campo").textContent = "Altura: ";
    datoClone.querySelector("#valor").textContent = producto.altura;
    // Agrego el dato
    datos.appendChild(datoClone);

    // Asigno el precio y descuento
    let precio_anterior = productoHTML.querySelector("#precio_anterior");
    let precio = productoHTML.querySelector("#precio")
    if (producto.destacado) {
        precio_anterior.textContent = `$ ${producto.precio}`;
        precio_anterior.className = "precio_techado";
        precio.textContent = `$ ${producto.precio * 0.9}`;

    } else {
        precio_anterior.textContent = `_`;
        precio_anterior.className = "precio_oculto";
        precio.textContent = `$ ${producto.precio}`;
    }

    // Asigno el link del producto al botón Ver
    productoHTML.querySelector("#ver").href = `${obtenerURL()}productos.html?id=${producto.id}`;

    return productoHTML;
}

// ===================================================== //
// Función: armarProducto                                //
// Descripción: Devuelve una tarjeta HTML                //
// Parámetros:                                           //
//      producto = producto con los datos                //
// Retorno:                                              //
//      ret = producto HTML                              //
// ===================================================== //
export function armarProducto(producto, indice) {

    // Obrengo el template del item destacado
    let template = document.getElementById("producto").content;

    // Clono el template
    let productoHTML = template.cloneNode(true);

    // Obtengo el contenedor de las imágenes
    let imagenes = productoHTML.querySelector("#lista-imagenes");
    imagenes.style.animation = `slide 15s infinite ${indice * 0.5}s alternate ease-in-out`;
    
    // Asigno las imágenes del producto
    let li = document.createElement("li");
    let imgen = document.createElement("img");
    imgen.src = producto.imagen1;
    li.appendChild(imgen);
    imagenes.appendChild(li);

    li = document.createElement("li");
    imgen = document.createElement("img");
    imgen.src = producto.imagen2;
    li.appendChild(imgen);
    imagenes.appendChild(li);

    li = document.createElement("li");
    imgen = document.createElement("img");
    imgen.src = producto.imagen3;
    li.appendChild(imgen);
    imagenes.appendChild(li);

    li = document.createElement("li");
    imgen = document.createElement("img");
    imgen.src = producto.imagen4;
    li.appendChild(imgen);
    imagenes.appendChild(li);

    // Asigno el nombre del producto
    productoHTML.querySelector("h3").textContent = producto.nombre;

    // Obtengo el contenedor de datos
    let datos = productoHTML.querySelector("#datos");
    // Obtengo el campo 'dato' del producto
    let dato = datos.querySelector("p");

    // Asigno la franquicia del producto
    let datoClone = dato.cloneNode(true);  
    datoClone.querySelector("#campo").textContent = "Franquicia: ";
    datoClone.querySelector("#valor").textContent = producto.franquicia;
    // Agrego el dato
    datos.appendChild(datoClone);

    // Asigno el tamaño del producto
    datoClone = dato.cloneNode(true);  
    datoClone.querySelector("#campo").textContent = "Tamaño: ";
    datoClone.querySelector("#valor").textContent = producto.tamano;
    // Agrego el dato
    datos.appendChild(datoClone);

    // Asigno el material del producto
    datoClone = dato.cloneNode(true);  
    datoClone.querySelector("#campo").textContent = "Material: ";
    datoClone.querySelector("#valor").textContent = producto.material;
    // Agrego el dato
    datos.appendChild(datoClone);

    // Asigno la altura del producto
    datoClone = dato.cloneNode(true);  
    datoClone.querySelector("#campo").textContent = "Altura: ";
    datoClone.querySelector("#valor").textContent = producto.altura;
    // Agrego el dato
    datos.appendChild(datoClone);

    // Asigno el precio y descuento
    let precio_anterior = productoHTML.querySelector("#precio_anterior");
    let precio = productoHTML.querySelector("#precio")
    if (producto.destacado) {
        precio_anterior.textContent = `$ ${producto.precio}`;
        precio_anterior.className = "precio_techado";
        precio.textContent = `$ ${producto.precio * 0.9}`;

    } else {
        precio_anterior.textContent = `_`;
        precio_anterior.className = "precio_oculto";
        precio.textContent = `$ ${producto.precio}`;
    }

    return productoHTML;
}

// ===================================================== //
// Función: buscarProductoID                             //
// Descripción: Devuelve el producto que tenga el id     //
//              de la lista productos                    //
// Parámetros:                                           //
//      productos = lista de productos                   //
//      id = id a buscar                                 //
// Retorno:                                              //
//      ret = devuelve el producto si lo encuentra. Sino //
//            devuelve vacío                             //
// ===================================================== //
export function buscarProductoID(productos, id) {
    let ret = null;

    for (let i = 0; i < productos.length; i++) {
        if (productos[i].id == id) {
            ret = productos[i];
            break;
        }
    }
    return ret;
}

// ===================================================== //
// Función: buscarProductos                              //
// Descripción: Devuelve la lista de productos que       //
//              que coincide con 'criterio'              //
// Parámetros:                                           //
//      productos = lista de productos                   //
//      criterio = cadena de búsqueda                    //
// Retorno:                                              //
//      ret = array con los productos encontrados        //
// ===================================================== //
export function buscarProductos(productos, criterio='') {
    let ret;

    if (criterio === '')
    {
        ret = productos;
    } else {
        ret = productos.filter(producto => producto.existeCadena(criterio));
    }

    return ret;
}


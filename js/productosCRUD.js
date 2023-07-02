// ===================================================== //
// Función: vacio                                        //
// Descripción: Determina si valor es vacío o no         //
// Parámetros:                                           //
//      campo = valor del campo                          //
// Retorno:                                              //
//      ret = TRUE, está vacío                           //
//           FALSE, no está vacío                        //
// ===================================================== //
function vacio(campo) {
    // Saco espacios y me aseguro que tenga valor
    campo = (campo == undefined) ? "" : campo.trim();
  
    return (campo.length === 0);
}

// Creo la aplicación VUE
const { createApp } = Vue
createApp({
    data() {
        return {
            // Lista de productos
            productos: [],
            // URL para obtener los productos
            url: 'https://grupo18.pythonanywhere.com/productos', 
            // Indico error
            error: false,
            // Indico operación exitosa
            ok: false,
            // Indico cargando
            cargando: true,
            // Campos del formulario
            id: 0,
            nombre: "",
            precio: 0,
            franquicia: "",
            tamano: "",
            material: "",
            altura: "",
            imagen1: "",
            imagen2: "",
            imagen3: "",
            imagen4: "",
            // Error en los campos
            errorNombre: false,
            errorPrecio: false,
            errorFranquicia: false,
            errorTamano: false,
            errorMaterial: false,
            errorAltura: false,
            errorImagen1: false,
            errorImagen2: false,
            errorImagen3: false,
            errorImagen4: false,
        }
    },
    methods: {
        fetchData(url) {
            // Obtengo los datos de todos los productos
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    // Guardo los productos
                    this.productos = data;
                    this.cargando = false
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        eliminar(producto) {
            // Pregunto si se quiere elimninar el producto
            if (confirm('¿Estás seguro de que deseas eliminar este producto?'))
            {
                // Armo la url para eliminar el producto
                const url = this.url + '/' + producto;
                // Preparo el comando
                var options = {
                    method: 'DELETE',
                }

                // Envio el comando
                fetch(url, options)
                    .then(res => {
                        res.text()
                        this.ok = true
                    })
                    .catch(err => {
                        console.error(err);
                        this.error = true
                    })  
            }
        },
        grabar() {
            // Valido los campos
            this.errorNombre = vacio(this.nombre)
            this.errorPrecio = (this.precio<1)
            this.errorFranquicia = vacio(this.franquicia)
            this.errorTamano = vacio(this.tamano)
            this.errorMaterial = vacio(this.material)
            this.errorAltura = vacio(this.altura)
            this.errorImagen1 = vacio(this.imagen1)
            this.errorImagen2 = vacio(this.imagen2)
            this.errorImagen3 = vacio(this.imagen3)
            this.errorImagen4 = vacio(this.imagen4)

            // Veo si todo está bien
            if (!this.errorNombre && !this.errorPrecio && !this.errorFranquicia &&
                !this.errorTamano && !this.errorMaterial && !this.errorAltura &&
                !this.errorImagen1 && !this.errorImagen2 && !this.errorImagen3 && 
                !this.errorImagen4)
            {
                // Asigno el producto nuevo
                let producto = {
                    nombre: this.nombre,
                    precio: this.precio,
                    franquicia: this.franquicia,
                    tamano : this.tamano,
                    material: this.material,
                    altura: this.altura,
                    imagen1: this.imagen1,
                    imagen2: this.imagen2,
                    imagen3: this.imagen3,
                    imagen4: this.imagen4
                }
                // Preparo el comando
                var options = {
                    body: JSON.stringify(producto),
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    redirect: 'follow'
                }
                
                // Envio el comando
                fetch(this.url, options)
                    .then(res => {
                        this.ok = true
                    })
                    .catch(err => {
                        console.error(err);
                        this.error = true
                    })
            }
         }
    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#app')
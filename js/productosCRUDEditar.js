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

// Obtengo el ID del producto
let params = new URLSearchParams(location.search);
var id = params.get('id')

// Creo la aplicación VUE
const { createApp } = Vue
createApp({
    data() {
        return {
            // Indico error
            error: false,
            // Indico operación exitosa
            ok: false,
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
            // URL del producto a modificar
            url: 'https://grupo18.pythonanywhere.com/productos/' + id,
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
            // Obtengo los datos del producto
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    // Asigno los datos del producto
                    console.log(data)
                    this.id = data.id
                    this.nombre = data.nombre;
                    this.imagen1 = data.imagen1
                    this.imagen2 = data.imagen2
                    this.imagen3 = data.imagen3
                    this.imagen4 = data.imagen4
                    this.precio = data.precio
                    this.franquicia = data.franquicia
                    this.altura = data.altura
                    this.tamano = data.tamano
                    this.material = data.material
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        modificar() {
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
                // Asigno el producto
                let producto = {
                    nombre: this.nombre,
                    imagen1: this.imagen1,
                    imagen2: this.imagen2,
                    imagen3: this.imagen3,
                    imagen4: this.imagen4,
                    precio: this.precio,
                    franquicia: this.franquicia,
                    altura: this.altura,
                    tamano: this.tamano,
                    material: this.material
                }
                // Preparo el comando
                var options = {
                    body: JSON.stringify(producto),
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    redirect: 'follow'
                }

                // Envío el comando
                fetch(this.url, options)
                    .then(data => {
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
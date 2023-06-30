
const { createApp } = Vue
createApp({

    data() {
        return {
            productos: [],
            url: 'http://grupo18.pythonanywhere.com/productos', // si ya lo subieron a pythonanywhere
            error: false,
            cargando: true,
            /*atributos para  guardar los valores del formulario */
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
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.productos = data;
                    this.cargando = false
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        eliminar(producto) {
            const url = this.url + '/' + producto;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
                    location.reload();
                })
        },
        grabar() {
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
            var options = {
                body: JSON.stringify(producto),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            
            fetch(this.url, options)
                .then(function () {
                    alert("Registro grabado")
                    window.location.href = "../templates/productos.html";
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabarr")
                })
        }
    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#app')
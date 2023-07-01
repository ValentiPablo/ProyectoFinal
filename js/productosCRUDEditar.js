console.log(location.search) // lee los argumentos pasados a este formulario
var id = location.search.substr(4)
console.log(id)
const { createApp } = Vue
createApp({
    data() {
        return {
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
            url: 'http://grupo18.pythonanywhere.com/productos/' + id,
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {

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
            var options = {
                body: JSON.stringify(producto),
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro modificado")
                    window.location.href = "crud.html";
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Modificar")
                })
        }
    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#app')
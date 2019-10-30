export default class Lista {
    constructor() {
        this._inicio = null;
    }

    agregarOrdenadoD(nuevo) {
        if (this._inicio == null) {
            this._inicio = nuevo;
        } else {
            if (this._inicio.siguiente == null) {
                if (this._inicio.dato < nuevo.dato) {
                    nuevo.siguiente = this._inicio;
                    this._inicio = nuevo;
                } else {
                    this._inicio.siguiente = nuevo;
                }
            } else {
                if (this._inicio.dato < nuevo.dato) {
                    nuevo.siguiente = this._inicio;
                    this._inicio = nuevo;
                } else {
                    let antes = this._encontrarAntes(nuevo, this._inicio);
                    nuevo.siguiente = antes.siguiente;
                    antes.siguiente = nuevo;
                }
            }
        }
        console.log(this._inicio);
    }

    _encontrarAntes(nuevo, inicio) {
        while (inicio != null) {
            if(inicio.siguiente == null) {
                return inicio;
            } else if (inicio.siguiente.dato < nuevo.dato) {
                return inicio;
            }
            inicio = inicio.siguiente;
        }
    }
}
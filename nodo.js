export default class Nodo {
    constructor(dato) {
        this._dato = dato;
        this._siguiente = null;
    }

    get dato() {
        return this._dato;
    }

    get siguiente() {
        return this._siguiente;
    }

    set siguiente(nuevoSiguiente) {
        this._siguiente = nuevoSiguiente;
    }
}
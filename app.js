class Llamada {
    constructor(destino,duracion,fecha){
        this.destino = destino;
        this.duracion = duracion;
        this.fecha = new Date(fecha);
    }

    calcularCosto(){
        throw new Error("Error en llamada");
    }

}


class LlamadaLocal extends Llamada {

    esHorarioPico(){

    const dia = this.fecha.getDay();
    const hora = this.fecha.getHours();

    return (
        dia >=1 &&
        dia <=5 &&
        hora >=8 &&
        hora <20
    );
    }

    calcularCosto(){

    const tarifa =
        this.esHorarioPico()
        ? 0.20
        : 0.10;

    return tarifa * this.duracion;
    }

}


class LlamadaNacional extends Llamada {

    constructor(destino,duracion,fecha,costoMinuto){
        super(destino,duracion,fecha);
        this.costoMinuto = costoMinuto;
    }

    calcularCosto(){
        return this.duracion * this.costoMinuto;
    }

}


class LlamadaInternacional extends Llamada {

    constructor(destino,duracion,fecha,costoMinuto){
        super(destino,duracion,fecha);
        this.costoMinuto = costoMinuto;
    }

    calcularCosto(){
        return this.duracion * this.costoMinuto;
    }

}



class Factura {

    constructor(abono,llamadas,mes,anio){
        this.abono = abono;
        this.llamadas = llamadas;
        this.mes = mes;
        this.anio = anio;
    }

    llamadasDelMes(){

    return this.llamadas.filter(
        l =>
        l.fecha.getMonth()+1 === this.mes &&
        l.fecha.getFullYear() === this.anio
    );

    }

    totalConsumo(){

    return this.llamadasDelMes().reduce(
        (acc,l)=> acc + l.calcularCosto(),
        0
    );

    }

    totalPagar(){
        return this.abono + this.totalConsumo();
    }

    emitirFactura(){

    console.log(
        "FACTURA TELEFONICA " +
        this.mes +
        "/" +
        this.anio
    );

    console.log("--------------------------");

    this.llamadasDelMes().forEach(l => {
        const fechaFormateada = 
            l.fecha.toLocaleString();

        console.log(
            l.destino +
            " - " +
            fechaFormateada +
            " - " +
            l.duracion +
            " min - $" +
            l.calcularCosto().toFixed(2)
        );

    });

    console.log("--------------------------");
    console.log("Bono: $" + this.abono.toFixed(2));
    console.log(
        "Consumo: $" +
        this.totalConsumo().toFixed(2)
    );

    console.log(
        "Total a pagar: $" +
        this.totalPagar().toFixed(2)
    );

    }

}


// Datos simulados en memoria

const llamadas = [

    new LlamadaLocal(
        "Buenos Aires",
        10,
        "2026-03-10T09:00:00"
    ),

    new LlamadaLocal(
        "Buenos Aires",
        12,
        "2026-03-14T22:00:00"
    ),

    new LlamadaNacional(
        "Cordoba",
        5,
        "2026-03-08T10:00:00",
        0.20
    ),

    new LlamadaNacional(
        "Mendoza",
        15,
        "2026-03-12T15:00:00",
        0.22
    ),

    new LlamadaInternacional(
        "España",
        20,
        "2026-03-02T13:00:00",
        0.45
    ),

    new LlamadaInternacional(
        "Francia",
        30,
        "2026-03-05T18:00:00",
        0.55
    ),

    // para verificar que no entre
    new LlamadaLocal(
        "Buenos Aires",
        8,
        "2026-06-10T09:00:00"
    )

];



const factura = new Factura(
    5.00,
    llamadas,
    3,
    2026
);

factura.emitirFactura();
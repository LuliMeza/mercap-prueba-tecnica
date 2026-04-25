# Sistema de Facturación Telefónica

Sistema de facturación mensual de llamadas telefónicas desarrollado en JavaScript.

## Descripción

El sistema simula la emisión de una factura mensual mostrando por consola el detalle de llamadas realizadas y el total a pagar.

Se contemplan llamadas:

- Locales  
- Nacionales  
- Internacionales

El cálculo de costos varía según las reglas definidas para cada tipo de llamada.

## Modelo Orientado a Objetos

El sistema está modelado mediante las siguientes clases:

- Llamada (superclase)
- LlamadaLocal
- LlamadaNacional
- LlamadaInternacional
- Factura

## Reglas de negocio

- Facturación mensual
- Bono mensual básico fijo
- Llamadas locales:
  - $0.20 por minuto en días hábiles de 8 a 20 hs
  - $0.10 por minuto fuera de esa franja y fines de semana
- Llamadas nacionales:
  - costo por minuto según localidad destino
- Llamadas internacionales:
  - costo por minuto según país destino

## Tecnologías

- JavaScript
- Node.js

## Cómo ejecutar el proyecto

1. Clonar el repositorio

```bash
git clone https://github.com/LuliMeza/mercap-prueba-tecnica.git
```

2. Ejecutar

```bash
node app.js
```

## Salida

El programa imprime por consola una factura con:

- detalle de llamadas del mes facturado
- costo de cada llamada
- bono mensual
- consumo total
- total a pagar


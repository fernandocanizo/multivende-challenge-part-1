# Multivende Coding Challenge

## Parte I: Lógica

1. Operaciones con el archivo `persons.json`:
    a. Identificar las personas que no contengan el campo "address" y clonarlos en un nuevo arreglo.
    b. Ordenar este nuevo arreglo de forma ascendente por el campo "name" y mostrarlo a través de una interfaz web (sin usar el método sort).
    c. Mostrar las personas que tengan una edad entre 20 y 30 años y cuyo nombre empiece por "H" o "L".

2. Operaciones con el archivo `emails.json`:
    a. Dado el arreglo de emails, identificar a qué personas se les puede enviar un email.
    b. Identificar qué emails no tienen asociada una persona.
    c. Identificar qué emails no son válidos.

3. Crear Modelo entidad relación, respecto del siguiente enunciado:

Una empresa vende productos a varios clientes.

Para ello, es necesario conocer los datos personales de los clientes, que incluyen su:
- nombres
- apellidos
- dni
- dirección
- correo
- fecha de nacimiento

Cada producto tiene un:
- nombre
- código
- precio unitario

Un cliente puede comprar varios productos a la empresa, y un mismo producto puede ser comprado por varios clientes. Además, las compras pueden agrupar sus productos en diferentes despachos con fechas programadas.

Se desea conocer:
- el monto por producto
- el monto total de la compra
- el monto del despacho
- la fecha en que se realizó la compra
- los productos involucrados
- el cliente asociado a cada compra

# Part 1, exercise 3 answers

Respuestas usando las tablas definidas en `schema.sql`

Se desea conocer:

a. el monto por producto

No estoy seguro si la pregunta apunta a:

1. todos los productos
```sql
select prod.name, prod.price from product prod
    join rel_client_product rel_cp
        on prod.id = rel_cp.fk_product_id;
```

2. los productos de una compra específica
```sql
select prod.name, prod.price from product prod
    join rel_client_product rel_cp
        on prod.id = rel_cp.fk_product_id
    join purchase pur
        on rel_cp.fk_purchase_id = pur.id
    where pur.invoice = <some_invoice>;
```

3. todos los productos que hayan sido comprados alguna vez
```sql
select prod.name, prod.price from product prod
    join rel_client_product rel_cp
        on prod.id = rel_cp.fk_product_id
    join purchase pur
        on rel_cp.fk_purchase_id = pur.id
```

Respondo las tres porque no hay tiempo de consultar a Multivende.

b. el monto total de la compra
```sql
select sum(prod.price * rel_cp.quantity) from product prod
    join rel_client_product rel_cp
        on prod.id = rel_cp.fk_product_id
    join purchase pur
        on rel_cp.fk_purchase_id = pur.id
    where pur.invoice = <some_invoice>::text;
```

c. el monto del despacho

Entiendo que pide el monto de los artículos despachados en un despacho determinado. La otra opción sería el costo del despacho, pero no hay información al respecto, así que descarto esa opción.

```sql
select sum(prod.price * rel_cp.quantity) from product prod
    join rel_client_product rel_cp
        on prod.id = rel_cp.fk_product_id
    join purchase pur
        on rel_cp.fk_purchase_id = pur.id
    where pur.invoice = <some_invoice>::text
    and fk_dispatch_id = <some_dispatch_id>;
```

d. la fecha en que se realizó la compra
```sql
select purchase_date from purchase where invoice = <some_invoice>::text;
```

e. los productos involucrados
```sql
select prod.id, prod.name from product prod
    join rel_client_product rel_cp
        on prod.id = rel_cp.fk_product_id
    join purchase pur
        on rel_cp.fk_purchase_id = pur.id
    where pur.invoice = <some_invoice>::text;
```

f. el cliente asociado a cada compra
```sql
select cli.id, cli.first_names, cli.last_names from client cli
    join rel_client_product rel_cp
        on cli.id = rel_cp.fk_client_id
    join purchase pur
        on rel_cp.fk_purchase_id = pur.id
    group by cli.id, pur.id;
```

create table if not exists client (
	id serial primary key,
	first_names text not null,
	last_names text not null,
	dni text not null,
	address text,
	email text not null unique,
	birth_date date
);

create table if not exists product (
	id serial primary key,
	name text not null,
	code text not null unique,
	price numeric not null
);

create table if not exists purchase (
	id serial primary key,
	invoice text not null, -- some internal number, maybe invoice number?
	purchase_date date not null default now()
);

create table if not exists dispatch (
	id serial primary key,
	wanted_delivery_date date,
	delivery_date date default now() + '7 days'
);

create table if not exists rel_client_product (
	fk_client_id bigint not null,
	fk_product_id bigint not null,
	fk_purchase_id bigint not null,
	fk_dispatch_id bigint not null,
	quantity int not null default 1,

	foreign key (fk_client_id) references client(id),
	foreign key (fk_product_id) references product(id),
	foreign key (fk_purchase_id) references purchase(id),
	foreign key (fk_dispatch_id) references dispatch(id),

	primary key(fk_client_id, fk_product_id, fk_purchase_id)
);

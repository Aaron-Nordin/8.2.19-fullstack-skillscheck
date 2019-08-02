create table houses (
id serial primary key,
name varchar(250),
address varchar (250),
city varchar(50),
state varchar(30),
zip int
);

-- DUMMY DATA
insert into houses (name, address, city, state, zip)
values 
('Example', '123 Example St.', 'Orem', 'UT', 84444),
('Boring', '456 Picket Ave.', 'Mt.Boring', 'BR', 88888),
('Meh', '789 Meh-Main St.', 'Mehsville', 'MH', 00000);
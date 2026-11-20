create table servicios(

id INT(11) NOT NULL auto_increment,
nombre VARCHAR(60) not null,
precio DECIMAL(10,2) not null,
primary key(id)


);

create table reservaciones(

id int(11) not null auto_increment primary key,
nombre varchar(60) not null,
apellido varchar(60) not null,
hora time default null,
fecha date default null,
servicios varchar(255) not null
);





# apuntes rapidos de lo aprendido en el curso de desarrollo web


show databases;
-- para mostrar todas las bases de datos existentes;

describe servicios;
-- para mostrar la tabla ,los datos con los que fue creada y sus caracteristicas

show tables;
-- para mostrar todas las tablas que hay en la base de datos


/**************************************************** INSERTAR REGISTROS ********************************/
-- insertar datos
INSERT INTO servicios(nombre,precio) values
('Corte de cabello de adulto',89);



-- insertar varios datos a la vez

INSERT INTO servicios (nombre, precio) VALUES
('Corte de cabello', 18000.00),
('Corte clásico', 15000.00),
('Corte degradado', 20000.00),
('Corte infantil', 12000.00),
('Arreglo de barba', 10000.00),
('Perfilado de barba', 8000.00),
('Afeitado completo', 12000.00),
('Lavado de cabello', 7000.00),
('Cepillado', 15000.00),
('Tintura de cabello', 45000.00),
('Decoloración', 60000.00),
('Keratina', 80000.00),
('Alisado permanente', 90000.00),
('Tratamiento capilar', 35000.00),
('Hidratación capilar', 25000.00),
('Mascarilla facial', 20000.00),
('Limpieza facial', 30000.00),
('Corte y barba', 25000.00),
('Cejas con cuchilla', 5000.00),
('Diseño de cejas', 10000.00);




        INSERT INTO reservaciones (nombre, apellido, hora, fecha, servicios) VALUES
        ('Juan', 'De la torre', '10:30:00', '2021-06-28', 'Corte de Cabello Adulto, Corte de Barba' ),
        ('Antonio', 'Hernandez', '14:00:00', '2021-07-30', 'Corte de Cabello Niño'),
        ('Pedro', 'Juarez', '20:00:00', '2021-06-25', 'Corte de Cabello Adulto'),
        ('Mireya', 'Perez', '19:00:00', '2021-06-25', 'Peinado Mujer'),
        ('Jose', 'Castillo', '14:00:00', '2021-07-30', 'Peinado Hombre'),
        ('Maria', 'Diaz', '14:30:00', '2021-06-25', 'Tinte'),
        ('Clara', 'Duran', '10:00:00', '2021-07-01', 'Uñas, Tinte, Corte de Cabello Mujer'),
        ('Miriam', 'Ibañez', '09:00:00', '2021-07-01', 'Tinte'),
        ('Samuel', 'Reyes', '10:00:00', '2021-07-02', 'Tratamiento Capilar'),
        ('Joaquin', 'Muñoz', '19:00:00', '2021-06-28', 'Tratamiento Capilar'),
        ('Julia', 'Lopez', '08:00:00', '2021-06-25', 'Tinte'),
        ('Carmen', 'Ruiz', '20:00:00', '2021-07-01', 'Uñas'),
        ('Isaac', 'Sala', '09:00:00', '2021-07-30', 'Corte de Cabello Adulto'),
        ('Ana', 'Preciado', '14:30:00', '2021-06-28', 'Corte de Cabello Mujer'),
        ('Sergio', 'Iglesias', '10:00:00', '2021-07-02', 'Corte de Cabello Adulto'),
        ('Aina', 'Acosta', '14:00:00', '2021-07-30', 'Uñas'),
        ('Carlos', 'Ortiz', '20:00:00', '2021-06-25', 'Corte de Cabello Niño'),
        ('Roberto', 'Serrano', '10:00:00', '2021-07-30', 'Corte de Cabello Niño'),
        ('Carlota', 'Perez', '14:00:00', '2021-07-01', 'Uñas'),
        ('Ana Maria', 'Igleias', '14:00:00', '2021-07-02', 'Uñas, Tinte'),
        ('Jaime', 'Jimenez', '14:00:00', '2021-07-01', 'Corte de Cabello Niño'),
        ('Roberto', 'Torres', '10:00:00', '2021-07-02', 'Corte de Cabello Adulto'),
        ('Juan', 'Cano', '09:00:00', '2021-07-02', 'Corte de Cabello Niño'),
        ('Santiago', 'Hernandez', '19:00:00', '2021-06-28', 'Corte de Cabello Niño'),
        ('Berta', 'Gomez', '09:00:00', '2021-07-01', 'Uñas'),
        ('Miriam', 'Dominguez', '19:00:00', '2021-06-28', 'Corte de Cabello Niño'),
        ('Antonio', 'Castro', '14:30:00', '2021-07-02', 'Corte de Cabello Adulti'),
        ('Hugo', 'Alonso', '09:00:00', '2021-06-28', 'Corte de Barba'),
        ('Victoria', 'Perez', '10:00:00', '2021-07-02', 'Uñas, Tinte'),
        ('Jimena', 'Leon', '10:30:00', '2021-07-30', 'Uñas, Corte de Cabello Mujer'),
        ('Raquel' ,'Peña', '20:30:00', '2021-06-25', 'Corte de Cabello Mujer');
-- sleccionar datos de formas ascendente o descente


-- ascendente 
select * from servicios ORDER BY precio asc;


-- descendente 
select * from servicios ORDER BY precio desc;

-- listar resultados con limites (mostrar solo n)

select id,nombre,precio from servicios order by PRECIO ASC LIMIT 5;

-- FILTRAR POR ID

select id,nombre,precio from servicios where id = 4;


/**************************************************** ACTUALIZAR REGISTROS ********************************/

UPDATE servicios set precio =700000 where id=2;

select * from servicios where id = 2;

UPDATE servicios set nombre= 'actualizado' where id=2;


/**************************************************** ELIMINAR REGISTROS ********************************/


delete from servicios where id = 2;





/**************************************************** MODIFICAR LA BASES DE DATOS ********************************/


-- AGREGAR UN CAMPO EXTRA

-- ALTER TABLE : para modificar la tabla

ALTER TABLE servicios add descripcion varchar(100) not null;



-- modificar una columna ya existente


ALTER TABLE servicios change descripcion nuevonombre varchar(10) not null;


-- se puede mosificar las extensiones mas no el tipo de dato..... despues del change va el nombre viejo y siguiente el nombre nuevo



-- eliminar columna

alter table servicios drop column nuevonombre;



/**************************************************** Eliminar tabla ********************************/

drop table servicios;



/**************************************************** filtrar registros ********************************/
-- para filtrar entre valores se utiliza la palabra reservada between

select * from servicios where precio between 10000 and 200000;

-- Contar cuántas reservaciones existen por cada fecha y mostrar primero las fechas que tienen más reservaciones.

SELECT COUNT(id), fecha
FROM reservaciones
GROUP BY fecha
ORDER BY COUNT(id) DESC;
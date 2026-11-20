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



INSERT INTO clientes (nombre, apellido, telefono, email) VALUES
('Andres', 'Gomez', '3001234567', 'andres.gomez@gmail.com'),
('Camila', 'Rodriguez', '3012345678', 'camila.rodriguez@gmail.com'),
('Santiago', 'Martinez', '3023456789', 'santiago.martinez@gmail.com'),
('Daniela', 'Lopez', '3034567890', 'daniela.lopez@gmail.com'),
('Sebastian', 'Hernandez', '3045678901', 'sebastian.hernandez@gmail.com'),
('Laura', 'Ramirez', '3056789012', 'laura.ramirez@gmail.com'),
('Mateo', 'Torres', '3101234567', 'mateo.torres@gmail.com'),
('Isabella', 'Castro', '3112345678', 'isabella.castro@gmail.com'),
('Samuel', 'Moreno', '3123456789', 'samuel.moreno@gmail.com'),
('Sofia', 'Vargas', '3134567890', 'sofia.vargas@gmail.com'),
('Nicolas', 'Jimenez', '3145678901', 'nicolas.jimenez@gmail.com'),
('Mariana', 'Ruiz', '3156789012', 'mariana.ruiz@gmail.com'),
('David', 'Herrera', '3161234567', 'david.herrera@gmail.com'),
('Gabriela', 'Diaz', '3172345678', 'gabriela.diaz@gmail.com'),
('Juan', 'Restrepo', '3183456789', 'juan.restrepo@gmail.com'),
('Manuela', 'Castaño', '3194567890', 'manuela.castano@gmail.com'),
('Felipe', 'Cardona', '3205678901', 'felipe.cardona@gmail.com'),
('Luciana', 'Agudelo', '3216789012', 'luciana.agudelo@gmail.com'),
('Daniel', 'Velez', '3221234567', 'daniel.velez@gmail.com'),
('Sara', 'Giraldo', '3232345678', 'sara.giraldo@gmail.com'),
('Alejandro', 'Sanchez', '3243456789', 'alejandro.sanchez@gmail.com'),
('Juliana', 'Mendoza', '3002345678', 'juliana.mendoza@gmail.com'),
('Esteban', 'Ospina', '3013456789', 'esteban.ospina@gmail.com'),
('Natalia', 'Marin', '3024567890', 'natalia.marin@gmail.com'),
('Miguel', 'Quintero', '3035678901', 'miguel.quintero@gmail.com'),
('Paula', 'Arango', '3046789012', 'paula.arango@gmail.com'),
('Cristian', 'Duque', '3051234567', 'cristian.duque@gmail.com'),
('Valeria', 'Cortes', '3102345678', 'valeria.cortes@gmail.com'),
('Martin', 'Londoño', '3113456789', 'martin.londono@gmail.com'),
('Antonella', 'Mejia', '3124567890', 'antonella.mejia@gmail.com'),
('Jorge', 'Gonzalez', '3135678901', 'jorge.gonzalez@gmail.com'),
('Eliana', 'Salazar', '3146789012', 'eliana.salazar@gmail.com'),
('Oscar', 'Montoya', '3151234567', 'oscar.montoya@gmail.com'),
('Luisa', 'Pineda', '3162345678', 'luisa.pineda@gmail.com'),
('Kevin', 'Carmona', '3173456789', 'kevin.carmona@gmail.com'),
('Diana', 'Alvarez', '3184567890', 'diana.alvarez@gmail.com'),
('Emmanuel', 'Bedoya', '3195678901', 'emmanuel.bedoya@gmail.com'),
('Carolina', 'Parra', '3206789012', 'carolina.parra@gmail.com'),
('Brayan', 'Rios', '3211234567', 'brayan.rios@gmail.com'),
('Michell', 'Zapata', '3222345678', 'michell.zapata@gmail.com'),
('Samuel', 'Franco', '3233456789', 'samuel.franco@gmail.com'),
('Tatiana', 'Osorio', '3244567890', 'tatiana.osorio@gmail.com'),
('Ricardo', 'Buitrago', '3003456789', 'ricardo.buitrago@gmail.com'),
('Andrea', 'Valencia', '3014567890', 'andrea.valencia@gmail.com'),
('Diego', 'Palacio', '3025678901', 'diego.palacio@gmail.com'),
('Fernanda', 'Roldan', '3036789012', 'fernanda.roldan@gmail.com'),
('Mauricio', 'Ceballos', '3041234567', 'mauricio.ceballos@gmail.com'),
('Angela', 'Correa', '3052345678', 'angela.correa@gmail.com'),
('Ivan', 'Montes', '3103456789', 'ivan.montes@gmail.com'),
('Melissa', 'Escobar', '3114567890', 'melissa.escobar@gmail.com'),
('Pablo', 'Arias', '3125678901', 'pablo.arias@gmail.com'),
('Lina', 'Galindo', '3136789012', 'lina.galindo@gmail.com'),
('Thomas', 'Barrera', '3141234567', 'thomas.barrera@gmail.com'),
('Monica', 'Cifuentes', '3152345678', 'monica.cifuentes@gmail.com'),
('Gabriel', 'Patiño', '3163456789', 'gabriel.patino@gmail.com'),
('Alejandra', 'Lozano', '3174567890', 'alejandra.lozano@gmail.com'),
('Roberto', 'Muñoz', '3185678901', 'roberto.munoz@gmail.com'),
('Claudia', 'Soto', '3196789012', 'claudia.soto@gmail.com'),
('Fernando', 'Rendon', '3201234567', 'fernando.rendon@gmail.com'),
('Milena', 'Cano', '3212345678', 'milena.cano@gmail.com'),
('Eduardo', 'Villa', '3223456789', 'eduardo.villa@gmail.com');

INSERT INTO servicios (nombre, precio) VALUES
('Corte de cabello', 18000.00),
('Corte clasico', 15000.00),
('Corte degradado', 22000.00),
('Corte premium', 30000.00),
('Corte infantil', 12000.00),
('Afeitado de barba', 10000.00),
('Arreglo de barba', 15000.00),
('Perfilado de barba', 12000.00),
('Barba premium', 25000.00),
('Lavado de cabello', 8000.00),
('Lavado premium', 15000.00),
('Peinado clasico', 12000.00),
('Peinado moderno', 20000.00),
('Peinado premium', 35000.00),
('Tinte completo', 60000.00),
('Tinte parcial', 35000.00),
('Mechas', 80000.00),
('Decoloracion', 70000.00),
('Tratamiento capilar', 45000.00),
('Hidratacion capilar', 30000.00),
('Alisado permanente', 120000.00),
('Alisado temporal', 50000.00),
('Keratina', 150000.00),
('Mascarilla capilar', 25000.00),
('Exfoliacion facial', 30000.00),
('Limpieza facial', 40000.00),
('Masaje facial', 35000.00),
('Depilacion de cejas', 10000.00),
('Perfilado de cejas', 12000.00),
('Depilacion facial', 20000.00),
('Corte y barba', 30000.00),
('Corte y lavado', 24000.00),
('Corte y peinado', 28000.00),
('Corte y tratamiento', 55000.00),
('Corte y cejas', 25000.00),
('Servicio ejecutivo', 45000.00),
('Servicio VIP', 80000.00),
('Servicio premium completo', 100000.00),
('Diseño de barba', 22000.00),
('Diseño de cabello', 28000.00),
('Rizado permanente', 90000.00),
('Ondulado permanente', 85000.00),
('Nutricion capilar', 40000.00),
('Reparacion capilar', 65000.00),
('Sellado de puntas', 20000.00),
('Pigmentacion de barba', 30000.00),
('Tinte de barba', 25000.00),
('Arreglo de patillas', 8000.00),
('Afeitado premium', 20000.00),
('Limpieza de cuero cabelludo', 35000.00),
('Masaje capilar', 25000.00),
('Peinado para eventos', 50000.00),
('Corte artistico', 40000.00),
('Diseño con navaja', 18000.00),
('Corte degradado premium', 35000.00),
('Tratamiento anticaida', 75000.00),
('Tratamiento anticaspa', 45000.00),
('Restauracion capilar', 95000.00),
('Paquete completo', 130000.00),
('Asesoria de imagen', 30000.00);


INSERT INTO CitasServicios (CitaId, ServiciosId) VALUES
(1, 1),
(1, 6),
(1, 10),
(2, 2),
(2, 7),
(3, 3),
(3, 8),
(3, 15),
(4, 1),
(4, 9),
(5, 4),
(5, 10),
(5, 20),
(6, 5),
(6, 11),
(7, 1),
(7, 6),
(8, 2),
(8, 12),
(8, 25),
(9, 3),
(9, 7),
(10, 4),
(10, 13),
(11, 1),
(11, 8),
(11, 16),
(12, 5),
(12, 9),
(13, 6),
(13, 14),
(14, 2),
(14, 10),
(15, 3),
(15, 11),
(15, 30),
(16, 1),
(16, 12),
(17, 4),
(17, 15),
(18, 5),
(18, 13),
(19, 2),
(19, 6),
(19, 20),
(20, 3),
(20, 14),
(21, 1),
(21, 7),
(22, 4),
(22, 8),
(22, 25),
(23, 5),
(23, 9),
(24, 2),
(24, 11),
(25, 3),
(25, 10),
(25, 35),
(26, 1),
(26, 15),
(27, 6),
(27, 12),
(28, 4),
(28, 13),
(29, 2),
(29, 8),
(29, 40),
(30, 5),
(30, 14),
(31, 1),
(31, 9),
(32, 3),
(32, 16),
(33, 4),
(33, 10),
(33, 20),
(34, 2),
(34, 11),
(35, 5),
(35, 12),
(36, 1),
(36, 13),
(37, 6),
(37, 15),
(38, 3),
(38, 14),
(38, 25),
(39, 4),
(39, 8),
(40, 2),
(40, 16),
(41, 1),
(41, 10);
INSERT INTO citas (fecha, hora, ClienteId) VALUES
('2026-11-20', '08:00', 1),
('2026-11-20', '08:30', 2),
('2026-11-20', '09:00', 3),
('2026-11-20', '09:30', 1),
('2026-11-20', '10:00', 4),
('2026-11-20', '10:30', 5),
('2026-11-20', '11:00', 2),
('2026-11-20', '11:30', 6),
('2026-11-20', '12:00', 3),
('2026-11-20', '13:00', 7),

('2026-11-21', '08:00', 1),
('2026-11-21', '08:30', 8),
('2026-11-21', '09:00', 9),
('2026-11-21', '09:30', 2),
('2026-11-21', '10:00', 4),
('2026-11-21', '10:30', 10),
('2026-11-21', '11:00', 3),
('2026-11-21', '11:30', 11),
('2026-11-21', '12:00', 5),
('2026-11-21', '13:00', 1),

('2026-11-22', '08:00', 12),
('2026-11-22', '08:30', 2),
('2026-11-22', '09:00', 13),
('2026-11-22', '09:30', 3),
('2026-11-22', '10:00', 1),
('2026-11-22', '10:30', 14),
('2026-11-22', '11:00', 4),
('2026-11-22', '11:30', 8),
('2026-11-22', '12:00', 5),
('2026-11-22', '13:00', 2),

('2026-11-23', '08:00', 3),
('2026-11-23', '08:30', 15),
('2026-11-23', '09:00', 1),
('2026-11-23', '09:30', 6),
('2026-11-23', '10:00', 2),
('2026-11-23', '10:30', 9),
('2026-11-23', '11:00', 4),
('2026-11-23', '11:30', 16),
('2026-11-23', '12:00', 3),
('2026-11-23', '13:00', 7),

('2026-11-24', '08:00', 1),
('2026-11-24', '08:30', 5),
('2026-11-24', '09:00', 2),
('2026-11-24', '09:30', 17),
('2026-11-24', '10:00', 3),
('2026-11-24', '10:30', 8),
('2026-11-24', '11:00', 4),
('2026-11-24', '11:30', 18),
('2026-11-24', '12:00', 1),
('2026-11-24', '13:00', 6),

('2026-11-25', '08:00', 2),
('2026-11-25', '08:30', 3),
('2026-11-25', '09:00', 1),
('2026-11-25', '09:30', 19),
('2026-11-25', '10:00', 4),
('2026-11-25', '10:30', 5),
('2026-11-25', '11:00', 2),
('2026-11-25', '11:30', 20),
('2026-11-25', '12:00', 3),
('2026-11-25', '13:00', 1);
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



-- sumar para el total de registros de un campo
select sum(precioservicios) AS totalServicios from servicios;



-- para conocer el precio menor de todos los servicios
select id as codigo,
 nombre as nombre,
 precio as precio_menor
 from servicios

where precio=(select min(precio) from servicios)
 ;




-- para conocer el mayor de todos los precios de servicios
select id as codigo,
nombre as nombre,
precio as precio
from servicios

where precio = (select max(precio) from servicios);



/**************************************************** buscar en sql con el operador like ********************************/


-- muestra los servicios que tiene corte al inicio 
select * from servicios where nombre like 'Corte%';


-- muestra los servicios que tienen cabello al final
select * from servicios where nombre like '%cabello';

-- para buscar la plabra en el registro que sea
select * from servicios where nombre like '%de%';





/**************************************************** concatenerar en sql(unir dos columnas) ********************************/

-- el nombre y el apellido son columnas separadas.... la funcion concat se usa para unir las 2 columnas en una sola consulta
select concat(nombre,' ', apellido) as nombreCompleto from reservaciones;



-- hacer una busqueda de un nombre y apellido y concaternarlo 
select * from reservaciones
where concat(nombre,' ', apellido)
like "%Carlos Ortiz%"
;


-- conssulta personalizada usando oncatenacion y like

select 
concat(nombre," ", apellido) as "Nombre Completo",
hora as "Hora de Reservacion",
fecha as "Fecha de reservacion"

from reservaciones

where concat(nombre," ", apellido)
like "%Carlos Ortiz%"

;

/**************************************************** MULTIPLES CONDICIONES ********************************/



-- mostrar los resultados donde id sea igual a 1 y 3
select * 
from reservaciones
where id in(1,3);

-- usando en operandor and para mirar los resultados combinando 2 condiciones
select * 
from reservaciones
where fecha = '2021-06-28'
and
id in(1,10)
;



CREATE DATABASE barberia;



USE barberia;

CREATE TABLE clientes(

id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
nombre VARCHAR(60) NOT NULL,
apellido VARCHAR(60) NOT NULL,
telefono VARCHAR(10) NOT NULL,
emil VARCHAR(30) UNIQUE NOT NULL
);


CREATE TABLE servicios(

id INT NOT NULL AUTO_INCREMENT,
nombre VARCHAR(60) NOT NULL,
precio DECIMAL(10,2) NOT NULL,
PRIMARY KEY(id)


);

SHOW TABLES;

ALTER TABLE clientes change emil email VARCHAR(30) UNIQUE NOT NULL;

-- insertar un cliente

INSERT INTO clientes (nombre,apellido,telefono,email) VALUES
('Juan Jose Roman Bernal',"Roman ","3014627191","juanjoroman1010@gmail.com");


INSERT INTO clientes (nombre,apellido,telefono,email) VALUES
('Aleida',"Bernal ","3008187882","Aleida@gmail.com"),
('Valentina',"Gallego ","3001816056","Valentina@gmail.com"),
('Arley',"Roman ","3046518059","Arley@gmail.com");

SELECT *
FROM servicios;


UPDATE clientes SET nombre = "Juan Jose" WHERE id=1;



CREATE TABLE citas(
id INT AUTO_INCREMENT PRIMARY KEY NOT NULL, 
fecha DATETIME NOT NULL,
hora TIME NOT NULL,

ClienteId INT,


FOREIGN KEY(ClienteId) REFERENCES  clientes(id)

);


DESCRIBE citas;


INSERT INTO citas (fecha,hora,ClienteId) VALUES
('2026-11-20','13:33',2);


SELECT CONCAT(clientes.nombre,' ', clientes.apellido) AS 'Nombre Completo' ,
citas.fecha AS Fecha,
citas.hora AS Hora

FROM clientes
LEFT JOIN citas
ON clientes.id = citas.ClienteId;



SELECT CONCAT(clientes.nombre,' ', clientes.apellido) AS 'Nombre Completo' ,
citas.fecha AS Fecha,
citas.hora AS Hora

FROM citas
LEFT JOIN clientes
ON  citas.ClienteId  =clientes.id ;

/************************** TABLA PIVOTE *****************/


# tabla que va unir citas y servicios....se usa un nombre compuesto con el nombre de las  2 tablas CitasServicios

CREATE TABLE CitasServicios(

id INT AUTO_INCREMENT PRIMARY KEY NOT NULL, 

CitaId INT,
ServiciosId INT,

FOREIGN KEY (CitaId) REFERENCES citas(id),
FOREIGN KEY (ServiciosId) REFERENCES servicios(id)



);



INSERT INTO citasservicios (CitaId,ServiciosId) VALUES
(1,2),
(1,6),
(2,1);


 
SELECT 
clientes.nombre AS 'Cliente',
servicios.nombre AS Nombre,
citas.fecha AS 'Fecha ',
citas.hora AS Hora

FROM citasservicios
INNER JOIN servicios ON citasservicios.ServiciosId = servicios.id
INNER JOIN citas ON citasservicios.CitaId = citas.id
INNER JOIN clientes ON citas.ClienteId = clientes.id

order by citas.hora asc;




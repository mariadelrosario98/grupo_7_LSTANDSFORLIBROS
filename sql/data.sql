USE `l_stands_for_libros`;

INSERT INTO `users` (`img_path`, `first_name`, `last_name`, `category`, `email`, `password`)
VALUES (DEFAULT, "Cosme", "Fulanito", "vendor", "cosme@fulanito.com", "$2a$10$g3JINQRgBVzbeSVZtdMjbuj9cBVEJPmOhh1yXtYbO37tVUjknNV1u"),
(DEFAULT,"Maria", "Castro", "Vendor", "maria.castrico@gmail.com", "$2a$10$8l142Fw168WDdqInccjeNe8uOI1YaqNgwlZCN081obw1eU5Omw37O"),
(DEFAULT,"Kevin", "Simanca", "Vendor", "kevin.simanca@gmail.com", "$2a$10$tsnwAebeW3wopjurMBCQg.9uTyzFxQ5LiqQ7mVHbFTe.5yZPwzYjy"),
(DEFAULT,"Elisaul", "García", "Vendor", "elisaul.garcia@gmail.com", "$2a$10$9gdQSCWUe4i2x.2OZfPMeux9naSEZMorTX5NFub0nRW.6wiUDDHJ."),
(DEFAULT,"Zabdiel", "Blanco", "buyer", "zabdiel.blanco@gmail.com", "$2a$10$CJ9qa2nbngu5K5H5aR7NZu/Hi9sBTW7Fb1nVUA23Fk4RJYAn9OvSK"),
(DEFAULT,"Cosme", "Fulanito", "Vendor", "grhz@fulfhsfd.com", "$2hghrshthVzbeSVZtdMjbuj9cBVEJPmOhh1yXtYbO37tVUjknNV1u"),
(DEFAULT,'Luís','Gonçalves', "Vendor", "vefr@fahhs.com", "$2a$10$g3JINQRgBVzfdgsfcBVEJPmOhh1yXtYbO37tVUjknNV1u"),
(DEFAULT,'Bjørn','Hansen', "Vendor", "coahafdh@gsgad.com", "$2a$10$g3JINQRgBVzbeSVZtdMjfgtmOhh1yXtYbO37tVUjknNV1u");

INSERT INTO `authors` (name) 
VALUES ('Mr.Happy'),('AC/DC'),('Accept'),('Aerosmith'),('Alanis Morissette'),('Alice In Chains'),('Antônio Carlos Jobim');

INSERT INTO `products` (img_path, name, isbn, price, description) 
VALUES (DEFAULT,'Happy ever after',12345679910, 45000, "like it");

INSERT INTO `houses` (name) 
VALUES ("Penguin Random House");

INSERT INTO `genres` (name) 
VALUES ("Romance");
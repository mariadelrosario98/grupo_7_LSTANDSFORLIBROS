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

INSERT INTO `authors` (`name`) 
VALUES ("Mark R. Levin"), ("Michelle Zauner"), ("Tara Westover"), ("Colson Whitehead"), ("Louise Penny & Hillary Rodham Clinton"), ("Emily Henry"), ("Bob Woodward & Robert Costa"), ("Mark Manson"), ("Anthony Bourdain & Laurie Woolever"), ("Adam H. Grant");

INSERT INTO `houses` (`name`) 
VALUES ("Penguin Random House"), ("Dabvine"), ("Tagfeed"), ("Mymm"), ("LiveZ"), ("Voomm"), ("Kimia"), ("Topicblab"), ("Gabspot"), ("Podcat"), ("Yambee"), ("Dabfeed"), ("Jayo"), ("Yacero"), ("Realbuzz"), ("Digitube"), ("Trudeo"), ("Brainbox"), ("Eire"), ("Edgeblab"), ("Yamia");

INSERT INTO `genres` (`name`) 
VALUES ('Drama|Thriller'), ('Comedy|Horror|Musical|Mystery|Romance'), ('Drama'), ('Western'), ('Comedy'), ('Comedy'), ('Action|Comedy|Horror|Thriller'), ('Comedy|Drama'), ('Action|Adventure|Fantasy'), ('Drama'), ('Drama'), ('Drama'), ('Crime|Drama|Thriller'), ('Crime|Drama'), ('Drama|Sci-Fi'), ('Horror'), ('Comedy|Drama|Romance'), ('Comedy'), ('Action|Comedy|Western'), ('Crime|Horror|Thriller');

INSERT INTO `products` (`img_path`, `name`, `author_id`, `isbn`, `genre_id`, `house_id`, `price`, `description`) 
VALUES ("american_marxism.png", "American Marxism", 1, "9781501135972", 1, 1, 50000),
("cryinginhmart.jpeg", "Crying in H Mart", 2, "9780525657743", 2, 2, 70500),
("educated.jpeg", "Educated: A Memoir", 3, "9780099511021", 3, 3, 30000),
("harlem_shuffle.jpeg", "Harlem Shuffle", 4, "0385545134", 4, 4, 9000),
("Hillary_clinton.png", "State of Terror", 5, "9783749903276", 5, 5, 20000),
("people_we_meet.png", "People We Meet on Vacation", 6, "9781984806758", 6, 6, 30000),
("peril.jpg", "Peril", 7, "9781982182915", 7, 7, 70500),
("theartofnot.jpg", "The Subtle Art of Not Giving a F*ck", 8, "9780062641540", 8, 8, 23200),
("theworldtravel.jpg", "World Travel: An Irreverent Guide", 9, "9781526630216", 9, 9, 90000),
("think_again.jpeg", "Think Again: The Power of Knowing What You Don't Know", 10, "9780593298749", 10, 10, 65000)


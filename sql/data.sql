USE `l_stands_for_libros`;

INSERT INTO `Users` (`img_path`, `first_name`, `last_name`, `category`, `email`, `password`)
VALUES (DEFAULT, "Cosme", "Fulanito", "vendor", "cosme@fulanito.com", "$2a$10$g3JINQRgBVzbeSVZtdMjbuj9cBVEJPmOhh1yXtYbO37tVUjknNV1u"),
(DEFAULT,"Maria", "Castro", "vendor", "maria.castrico@gmail.com", "$2a$10$8l142Fw168WDdqInccjeNe8uOI1YaqNgwlZCN081obw1eU5Omw37O"),
(DEFAULT,"Kevin", "Simanca", "vendor", "kevin.simanca@gmail.com", "$2a$10$tsnwAebeW3wopjurMBCQg.9uTyzFxQ5LiqQ7mVHbFTe.5yZPwzYjy"),
(DEFAULT,"Elisaul", "García", "vendor", "elisaul.garcia@gmail.com", "$2a$10$9gdQSCWUe4i2x.2OZfPMeux9naSEZMorTX5NFub0nRW.6wiUDDHJ."),
(DEFAULT,"Zabdiel", "Blanco", "buyer", "zabdiel.blanco@gmail.com", "$2a$10$CJ9qa2nbngu5K5H5aR7NZu/Hi9sBTW7Fb1nVUA23Fk4RJYAn9OvSK");

INSERT INTO `Authors` (`name`) 
VALUES ("Mark R. Levin"), ("Michelle Zauner"), ("Tara Westover"), ("Colson Whitehead"), ("Louise Penny & Hillary Rodham Clinton"), ("Emily Henry"), ("Bob Woodward & Robert Costa"), ("Mark Manson"), ("Anthony Bourdain & Laurie Woolever"), ("Adam H. Grant");

INSERT INTO `Houses` (`name`) 
VALUES ("Penguin Random House"), ("Dabvine"), ("Tagfeed"), ("Mymm"), ("LiveZ"), ("Voomm"), ("Kimia"), ("Topicblab"), ("Gabspot"), ("Podcat"), ("Yambee"), ("Dabfeed"), ("Jayo"), ("Yacero"), ("Realbuzz"), ("Digitube"), ("Trudeo"), ("Brainbox"), ("Eire"), ("Edgeblab"), ("Yamia");

INSERT INTO `Genres` (`name`, `rating`) 
VALUES ("Drama|Thriller", 5), ("Comedy|Horror|Musical|Mystery|Romance", 5), ("Drama", 5), ("Western", 5), ("Comedy", 5), ("Comedy", 5), ("Action|Comedy|Horror|Thriller", 5), ("Comedy|Drama", 5), ("Action|Adventure|Fantasy", 5), ("Drama", 5), ("Drama", 5), ("Drama", 5), ("Crime|Drama|Thriller", 5), ("Crime|Drama", 5), ("Drama|Sci-Fi", 5), ("Horror", 5), ("Comedy|Drama|Romance", 5), ("Comedy", 5), ("Action|Comedy|Western", 5), ("Crime|Horror|Thriller", 5);

INSERT INTO `Products` (`img_path`, `name`, `author_id`, `isbn`, `genre_id`, `house_id`, `price`, `sales`, `rating`) 
VALUES ("american_marxism.png", "American Marxism", 1, "9781501135972", 1, 1, 50000, 1, 5),
("cryinginhmart.jpeg", "Crying in H Mart", 2, "9780525657743", 2, 2, 70500, 1, 5),
("educated.jpeg", "Educated: A Memoir", 3, "9780099511021", 3, 3, 30000, 1, 5),
("harlem_shuffle.jpeg", "Harlem Shuffle", 4, "0385545134", 4, 4, 9000, 1, 5),
("Hillary_clinton.png", "State of Terror", 5, "9783749903276", 5, 5, 20000, 1, 5),
("people_we_meet.png", "People We Meet on Vacation", 6, "9781984806758", 6, 6, 30000, 1, 5),
("peril.jpg", "Peril", 7, "9781982182915", 7, 7, 70500, 1, 5),
("theartofnot.jpg", "The Subtle Art of Not Giving a F*ck", 8, "9780062641540", 8, 8, 23200, 1, 5),
("theworldtravel.jpg", "World Travel: An Irreverent Guide", 9, "9781526630216", 9, 9, 90000, 1, 5),
("think_again.jpeg", "Think Again: The Power of Knowing What You Don't Know", 10, "9780593298749", 10, 10, 65000, 1, 5)


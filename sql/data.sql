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

INSERT INTO `Genres` (`name`) 
VALUES ("Fantasy"), ("Adventure"), ("Romance"), ("Contemporary"), ("Dystopian"), ("Mystery"), ("Horror"), ("Thriller"), ("Paranormal"), ("Historical fiction"), ("Science Fiction"), ("Childrens"), ("Memoir"), ("Cooking"), ("Art"), ("Self-help / Personal"), ("Development"), ("Motivational"), ("Health"), ("History"), ("Travel"), ("Guide / How-to"), ("Families & Relationships"), ("Humor");

INSERT INTO `Products` (`img_path`, `name`, `author_id`, `isbn`, `house_id`, `price`, `description`)
VALUES ("american_marxism.png", "American Marxism", 1, "9781501135972", 1, 50000, "The seven-time #1 New York Times bestselling author, Fox News star, and radio host Mark R. Levin explains how the dangers he warned against in the “timely yet timeless” (David Limbaugh, author of Jesus Is Risen) bestseller Liberty and Tyranny have come to pass."),

("cryinginhmart.jpeg", "Crying in H Mart", 2, "9780525657743", 2, 70500, "An unflinching, powerful memoir about growing up Korean American, losing her mother, and forging her own identity. In this exquisite story of family, food, grief, and endurance, Michelle Zauner proves herself far more than a dazzling singer, songwriter, and guitarist."),

("educated.jpeg", "Educated: A Memoir", 3, "9780099511021", 3, 30000, "Tara Westover was 17 the first time she set foot in a classroom. Born to survivalists in the mountains of Idaho, she prepared for the end of the world by stockpiling home-canned peaches and sleeping with her \"head-for-the-hills bag\". In the summer."),

("harlem_shuffle.jpeg", "Harlem Shuffle", 4, "0385545134", 4, 9000, "\"Ray Carney was only slightly bent when it came to being crooked...\" To his customers and neighbors on 125th street, Carney is an upstanding salesman of reasonably priced furnit,ure, making a decent life for himself and his family. He and his wife Elizabeth are expecting their second child..."),

("Hillary_clinton.png", "State of Terror", 5, "9783749903276", 5, 20000, "After a tumultuous period in American politics, a new administration has just been sworn in, and to everyone's surprise the president chooses a political enemy for the vital position of secretary of state."),

("people_we_meet.png", "People We Meet on Vacation", 6, "9781984806758", 6, 30000, "Poppy and Alex. Alex and Poppy. They have nothing in common. She's a wild child; he wears khakis. She has insatiable wanderlust; he prefers to stay home with a book. And somehow, ever since a fateful car share home from college many years ago."),

("peril.jpg", "Peril", 7, "9781982182915", 7, 70500, "The transition from President Donald J. Trump to President Joseph R. Biden Jr. stands as one of the most dangerous periods in American history. But as # 1 internationally bestselling author Bob Woodward and acclaimed reporter Robert Costa reveal for the first time."),

("theartofnot.jpg", "The Subtle Art of Not Giving a F*ck", 8, "9780062641540", 8, 23200, "In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how to stop trying to be \"positive\" all the time so that we can truly become better, happier people. For decades, we’ve been told that positive thinking"),

("theworldtravel.jpg", "World Travel: An Irreverent Guide", 9, "9781526630216", 9, 90000, "A guide to some of the world's most fascinating places, as seen and experienced by writer, television host, and relentlessly curious traveler Anthony Bourdain."),

("think_again.jpeg", "Think Again: The Power of Knowing What You Don't Know", 10, "9780593298749", 10, 65000, "Think Again is a book about the benefit of doubt, and about how we can get better at embracing the unknown and the joy of being wrong. Evidence has shown that creative geniuses are not attached to one identity, but constantly willing to rethink their stances and that leaders who admit they don't know something and seek critical feedback lead more productive and innovative teams.")


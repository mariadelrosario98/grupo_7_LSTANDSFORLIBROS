USE `l_stands_for_libros`;

INSERT INTO `Users` (`img_path`, `first_name`, `last_name`, `category`, `email`, `password`)
VALUES ("profile-pic_1637889896934.jpg","Maria", "Castro", "vendor", "maria.castrico@gmail.com", "$2a$10$8l142Fw168WDdqInccjeNe8uOI1YaqNgwlZCN081obw1eU5Omw37O"),
("profile-pic_1637890207961.jpeg","Kevin", "Simanca", "vendor", "kevin.simanca@gmail.com", "$2a$10$tsnwAebeW3wopjurMBCQg.9uTyzFxQ5LiqQ7mVHbFTe.5yZPwzYjy"),
("profile-pic_1637890298959.jpg","Elisaul", "García", "vendor", "elisaul.garcia@gmail.com", "$2a$10$9gdQSCWUe4i2x.2OZfPMeux9naSEZMorTX5NFub0nRW.6wiUDDHJ."),
("profile-pic_1637890347724.jpeg","Zabdiel", "Blanco", "buyer", "zabdiel.blanco@gmail.com", "$2a$10$CJ9qa2nbngu5K5H5aR7NZu/Hi9sBTW7Fb1nVUA23Fk4RJYAn9OvSK"),
(DEFAULT, "Cosme", "Fulanito", "vendor", "cosme@fulanito.com", "$2a$10$g3JINQRgBVzbeSVZtdMjbuj9cBVEJPmOhh1yXtYbO37tVUjknNV1u");

INSERT INTO `Genres` (`name`) 
VALUES ("Fantasy"), ("Adventure"), ("Romance"), ("Contemporary"), ("Dystopian"), ("Mystery"), ("Horror"), ("Thriller"), ("Paranormal"), ("Historical fiction"), ("Science Fiction"), ("Childrens"), ("Memoir"), ("Cooking"), ("Art"), ("Self-help / Personal"), ("Development"), ("Motivational"), ("Health"), ("History"), ("Travel"), ("Guide / How-to"), ("Families & Relationships"), ("Humor");

INSERT INTO `Products` (`img_path`, `name`, `author`, `isbn`, `house`, `price`, `description`)
VALUES ("american_marxism.png", "American Marxism", "Mark R. Levin", "9781501135972", "Penguin Random House", 50000, "The seven-time #1 New York Times bestselling author, Fox News star, and radio host Mark R. Levin explains how the dangers he warned against in the “timely yet timeless” (David Limbaugh, author of Jesus Is Risen) bestseller Liberty and Tyranny have come to pass."),

("cryinginhmart.jpeg", "Crying in H Mart", "Michelle Zauner", "9780525657743", "Dabvine", 70500, "An unflinching, powerful memoir about growing up Korean American, losing her mother, and forging her own identity. In this exquisite story of family, food, grief, and endurance, Michelle Zauner proves herself far more than a dazzling singer, songwriter, and guitarist."),

("educated.jpeg", "Educated: A Memoir", "Tara Westover", "9780099511021", "Tagfeed", 30000, "Tara Westover was 17 the first time she set foot in a classroom. Born to survivalists in the mountains of Idaho, she prepared for the end of the world by stockpiling home-canned peaches and sleeping with her \"head-for-the-hills bag\". In the summer."),

("harlem_shuffle.jpeg", "Harlem Shuffle", "Colson Whitehead", "0385545134", "Mymm", 9000, "\"Ray Carney was only slightly bent when it came to being crooked...\" To his customers and neighbors on 125th street, Carney is an upstanding salesman of reasonably priced furnit,ure, making a decent life for himself and his family. He and his wife Elizabeth are expecting their second child..."),

("Hillary_clinton.png", "State of Terror", "Louise Penny & Hillary Rodham Clinton", "9783749903276", "LiveZ", 20000, "After a tumultuous period in American politics, a new administration has just been sworn in, and to everyone's surprise the president chooses a political enemy for the vital position of secretary of state."),

("people_we_meet.png", "People We Meet on Vacation", "Emily Henry", "9781984806758", "Voomm", 30000, "Poppy and Alex. Alex and Poppy. They have nothing in common. She's a wild child; he wears khakis. She has insatiable wanderlust; he prefers to stay home with a book. And somehow, ever since a fateful car share home from college many years ago."),

("peril.jpg", "Peril", "Bob Woodward & Robert Costa", "9781982182915", "Kimia", 70500, "The transition from President Donald J. Trump to President Joseph R. Biden Jr. stands as one of the most dangerous periods in American history. But as # 1 internationally bestselling author Bob Woodward and acclaimed reporter Robert Costa reveal for the first time."),

("theartofnot.jpg", "The Subtle Art of Not Giving a F*ck", "Mark Manson", "9780062641540", "Topicblab", 23200, "In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how to stop trying to be \"positive\" all the time so that we can truly become better, happier people. For decades, we’ve been told that positive thinking"),

("theworldtravel.jpg", "World Travel: An Irreverent Guide", "Anthony Bourdain & Laurie Woolever", "9781526630216", "Gabspot", 90000, "A guide to some of the world's most fascinating places, as seen and experienced by writer, television host, and relentlessly curious traveler Anthony Bourdain."),

("think_again.jpeg", "Think Again: The Power of Knowing What You Don't Know", "Adam H. Grant", "9780593298749", "Podcat", 65000, "Think Again is a book about the benefit of doubt, and about how we can get better at embracing the unknown and the joy of being wrong. Evidence has shown that creative geniuses are not attached to one identity, but constantly willing to rethink their stances and that leaders who admit they don't know something and seek critical feedback lead more productive and innovative teams.")


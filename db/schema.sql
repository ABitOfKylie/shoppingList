CREATE DATABASE shopping_list_db;

USE shopping_list_db;

CREATE TABLE shop_items
(
	id INT NOT NULL AUTO_INCREMENT,
	item VARCHAR(255) NOT NULL,
	purchased BOOLEAN DEFAULT FALSE,
	date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

-- TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP


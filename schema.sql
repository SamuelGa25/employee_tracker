
CREATE TABLE employee (
	id int,
	employee_name varchar(255),
    employee_role varchar(255), 
    PRIMARY KEY (id)

);

ALTER TABLE employee MODIFY COLUMN id int auto_increment; 
SHOW CREATE TABLE employee;

CREATE TABLE `employee` (
  `id` int NOT NULL AUTO_INCREMENT,
  `employee_name` varchar(255) DEFAULT NULL,
  `employee_role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO employee (employee_name, employee_role) VALUES('Samuel', 'Engineer');
INSERT INTO employee (employee_name, employee_role) VALUES('John', 'Engineer');
INSERT INTO employee (employee_name, employee_role) VALUES('Johana', 'Manager');


SELECT * FROM employee;  
SELECT * FROM employee WHERE id = 1;
SELECT * FROM employee WHERE employee_role = 'Engineer';

UPDATE employee SET employee_role = 'Manager' where id = 3;

SELECT * FROM employee;
DELETE from employee where employee_role = 'Engineer';
DELETE from employee where id = 3;
DELETE from employee where id = 5;
DELETE from employee where id = 6;

SELECT * FROM employee;
UPDATE employees set employee_role = 'Manager' where employee_name = 'Johana';








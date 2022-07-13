USE employee;

INSERT INTO departments (department_name, roles_id) 
VALUES
("Engineering", "1"),
("Consulting", "2"), 
("Facilities", "2");

INSERT INTO roles (title, salary, department_id)
VALUES

("Front-End Engineer", 170000 , 2),
("Full-Stack Engineer", 200000, 2 );




INSERT INTO employees (id, first_name, last_name, role_id)
VALUES
(1,'Jesse','Pinkman',1),
(2,'Walter','White',2),
(3,'Gustavo','Fring',3),
(4,'Saul','Goodman',6),
(5,'Tuco','Salamanca',15);


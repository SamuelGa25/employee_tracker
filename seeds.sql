INSERT INTO departments (name) 
VALUES
("Engineering"),
("Consulting"), 
("Facilities");

INSERT INTO roles (title, department, salary)
VALUES

("Front-End Depelover", 2, 60000),
("Full Stack Developer ", 2, 80000);


INSERT INTO employees (first_name, last_name, role_id)
VALUES
('Jesse','Pinkman',1),
('Walter', 'White',2),
('Gustavo', 'Fring',3),
('Saul', 'Goodman',6),
('Tuco', 'Salamanca',15);

UPDATE employees SET manager_id = 3 WHERE id = 4;
UPDATE employees SET manager_id = 1 WHERE id = 5;
UPDATE employees SET manager_id = 2 WHERE id = 6;
UPDATE employees SET manager_id = 2 WHERE id = 7;


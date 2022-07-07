
-- if it already exist then it will drop.
DROP DATABASE IF EXISTS company;
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS departments;

SHOW CREATE TABLE employee;

CREATE DATABASE company;

USE company;


-- table for department
CREATE TABLE departments(
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (id) 

);

-- table for roles
CREATE TABLE roles(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) DEFAULT NULL,
  department INT,
  salary INT NOT NULL,
  CONSTRAINT fk_department FOREIGN KEY (department) REFERENCES departments(id) ON DELETE SET NULL,
  PRIMARY KEY (id) 

);

-- employee table 
CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT,
    first_name varchar(255) NOT NULL,
    last_name varchar(255) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    -- CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles(id),
	  -- CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employees(id) ON DELETE SET NULL,
    PRIMARY KEY (id)
);



 



















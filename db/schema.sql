
-- if it already exist then it will drop.
DROP DATABASE IF EXISTS employee;
-- DROP TABLE IF EXISTS employees;
-- DROP TABLE IF EXISTS roles;
-- DROP TABLE IF EXISTS departments;

CREATE DATABASE employee;
USE employee;


-- table for department
CREATE TABLE departments(
  id INT AUTO_INCREMENT,
  roles_id INT,
  department_name VARCHAR(255) NOT NULL,
  PRIMARY KEY (id) 

);

-- table for roles
CREATE TABLE roles(
  id INT AUTO_INCREMENT,
  title VARCHAR(255) DEFAULT NULL,
  salary DECIMAL,
  department_id INT,
  PRIMARY KEY (id) 

);

-- employee table 
CREATE TABLE employees (
    id INT AUTO_INCREMENT,
    first_name varchar(255),
    last_name varchar(255),
    role_id INT NOT NULL,
    manager_id INT,
    PRIMARY KEY (id)
);



 



















INSERT INTO department (dept_name)
VALUES 
('IT'),
('Accounting'),
('Sales');


INSERT INTO job (title, salary, department_id)
VALUES 
('Director', 75000, 1),
('Deputy Director', 45000, 1),
('Assistant', 18000, 1),
('Sales Manager', 100000, 2),
('Accountant', 80000, 2),
('Software Engineer', 55000, 3),

INSERT INTO employee (first_name, last_name, job_id, manager_id)
VALUES 
('Xaviar', 'Witherspoon', 1, NULL),
('Alan', 'Spacer', 2, 1),
('Dan', 'Avidan', 3, 2),
('Steven', 'Echols', 4, NULL),
('Evan', 'Newsome', 5, 4),
('Shaq', 'Brathwaite', 6, NULL),
('Rober', 'Yazinka', 7, NULL);
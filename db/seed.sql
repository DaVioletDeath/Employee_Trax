INSERT INTO department(name)
VALUES ("sales"),
("finance"),
("engineering"),
("human resources")

INSERT INTO role(title,salary,department_id)
VALUES ("sales lead",70000,0123),
("accountant",99999,0124),
("lead engineer", 75000, 0101),
("human resources manager", 45000, 1337)

INSERT INTO employee(first_name,last_name,role_id,manager_id)
VALUES ("Bill","Lee",421,001),
("Robert","Ford",412,057),
("James","Sutherland",315,014),
("Karen","White",578,NULL)

SELECT * FROM department
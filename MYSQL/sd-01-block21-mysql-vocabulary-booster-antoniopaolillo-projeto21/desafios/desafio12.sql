SELECT e1.first_name, e1.salary, e1.phone_number, e2.first_name, e2.salary, e2.phone_number
FROM  hr.employees e1, hr.employees e2
WHERE e1.job_id = e2.job_id order by 1;

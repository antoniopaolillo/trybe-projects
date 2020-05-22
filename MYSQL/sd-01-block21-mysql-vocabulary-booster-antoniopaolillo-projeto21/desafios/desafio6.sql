SELECT h.start_date, h.employee_id, 
(SELECT CONCAT(first_name,' ',last_name) FROM hr.employees e WHERE e.employee_id = h.employee_id) AS 'Nome completo',
h.job_id,
(SELECT job_title FROM hr.jobs j WHERE h.job_id = j.job_id) AS 'Cargo',
h.department_id,
(SELECT department_name FROM hr.departments d WHERE d.department_id = h.department_id) AS 'Departamento'
FROM hr.job_history h WHERE h.employee_id <> 0
ORDER BY 3 DESC;

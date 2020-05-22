USE hr;

DELIMITER $$

CREATE PROCEDURE ExibirHistoricoCompletoPorFuncionario(employee_id INT)
BEGIN
SELECT jh.employee_id, 
CONCAT(e.first_name, ' ', e.last_name) AS 'Nome completo',
j.job_title AS 'Cargo',
d.department_name As 'Departamento'
FROM hr.job_history jh
INNER JOIN
hr.employees e
ON e.employee_id = jh.employee_id
INNER JOIN
hr.jobs j
ON jh.JOB_ID = j.job_id
INNER JOIN
hr.departments d
ON jh.DEPARTMENT_ID = d.department_id
WHERE jh.EMPLOYEE_ID = employee_id; 
END $$

DELIMITER ;
CALL ExibirHistoricoCompletoPorFuncionario(101);

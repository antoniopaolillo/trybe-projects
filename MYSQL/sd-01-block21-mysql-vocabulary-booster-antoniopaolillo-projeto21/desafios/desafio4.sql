SELECT job_id AS 'Código do Cargo', AVG(salary) AS 'Média',
  CASE 
WHEN AVG(salary) > 1999 AND AVG(salary) < 5801 THEN 'Junior'
WHEN AVG(salary) > 5800 AND AVG(salary) < 7501 THEN 'Pleno'
WHEN AVG(salary) > 7500 AND AVG(salary) < 10501 THEN 'Sênior'
WHEN AVG(salary) > 10500 THEN 'CEO'
  END AS 'Senioridade'
FROM hr.employees GROUP BY job_id ORDER BY AVG(salary);

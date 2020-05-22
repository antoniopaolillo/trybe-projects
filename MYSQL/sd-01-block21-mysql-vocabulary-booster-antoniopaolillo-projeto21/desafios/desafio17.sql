SELECT employee_id, 
(CONCAT(DAY(start_date),'/',MONTH(start_date),'/',YEAR(start_date))) AS 'Data Início',
(CONCAT(DAY(end_date),'/',MONTH(end_date),'/',YEAR(end_date))) AS 'Data Rescisão',
ROUND((DATEDIFF(end_date, start_date) / 365), 2) AS 'Anos trabalhados'
FROM hr.job_history ORDER BY 1;

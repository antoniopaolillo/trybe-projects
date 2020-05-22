USE hr;

DELIMITER $$

CREATE FUNCTION BuscarQuantidadeDeEmpregosPorFuncionario(id INT)
RETURNS INT READS SQL DATA
BEGIN
DECLARE result INT;
SELECT COUNT(employee_id) FROM hr.job_history WHERE employee_id = id INTO result;
RETURN result;
END $$

DELIMITER ;
SELECT BuscarQuantidadeDeEmpregosPorFuncionario(101);

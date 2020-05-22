USE hr;
DELIMITER $$

CREATE PROCEDURE BuscarMediaPorCategoriaDeTrabalho(IN arg1 VARCHAR(100))
BEGIN
SELECT ROUND(AVG(e.salary), 2) AS 'media' FROM hr.employees e WHERE e.job_id = arg1;
END $$

DELIMITER ;
CALL BuscarMediaPorCategoriaDeTrabalho('IT_PROG');

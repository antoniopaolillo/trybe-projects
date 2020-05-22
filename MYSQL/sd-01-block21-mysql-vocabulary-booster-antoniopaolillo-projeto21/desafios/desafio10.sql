SELECT ProductID,
MIN(quantity) AS 'Mínimo',
MAX(quantity) AS 'Máximo',
ROUND(AVG(quantity), 2) AS 'Média'
FROM w3schools.order_details group by productid HAVING avg(quantity) > 20 order by 4;

SELECT employeeId, COUNT(employeeid) AS 'Total de pedidos'
FROM w3schools.orders group by employeeid order by COUNT(employeeid);

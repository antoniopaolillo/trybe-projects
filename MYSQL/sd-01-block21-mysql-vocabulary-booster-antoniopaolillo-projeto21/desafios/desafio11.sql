SELECT c1.CustomerID, c1.ContactName AS 'Nome', c1.Country AS 'País',
(SELECT (COUNT(Country) - 1) FROM w3schools.customers c2 WHERE c2.country = c1.country) 
AS 'Número de Compatriotas' 
From w3schools.customers c1 order by 2;

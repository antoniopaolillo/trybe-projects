SELECT o.OrderID, o.CustomerID, c.ContactName, o.shipperid FROM w3schools.orders o
INNER JOIN
w3schools.customers c
ON c.customerid = o.customerid
WHERE shipperid IN (1, 2)
ORDER BY o.CustomerID;

SELECT p.productname, p.Price FROM
(SELECT p.* FROM w3schools.products p INNER JOIN w3schools.order_details o ON p.productid = o.productid WHERE o.quantity > 80)
AS p ORDER BY 1;

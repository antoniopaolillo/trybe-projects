SELECT country_name, 
CASE WHEN region_id = 1 THEN 'incluído'
ELSE 'não incluído'
END AS 'Status Inclusão'
FROM hr.countries;

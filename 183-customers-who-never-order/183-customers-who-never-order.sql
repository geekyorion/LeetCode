# Write your MySQL query statement below
SELECT
    name as Customers
FROM
    Customers
WHERE NOT EXISTS
    (
        SELECT
            customerId
        FROM 
            Orders
        WHERE 
            Orders.customerId = Customers.id
    );
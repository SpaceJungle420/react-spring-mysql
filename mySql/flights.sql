use reservation;

insert into flight values(1,'AA1','American Airlines','AUS',
'NYC',STR_TO_DATE('09-05-2018', '%m-%d-%Y'),'2018-09-05 03:14:07');

insert into flight values(2,'AA2','American Airlines','AUS',
'NYC',STR_TO_DATE('09-05-2024', '%m-%d-%Y'),'2024-09-05 05:14:07');

insert into flight values(3,'AA3','American Airlines','AUS',
'NYC',STR_TO_DATE('09-05-2024', '%m-%d-%Y'),'2024-09-05 06:14:07');

insert into flight values(4,'SW1','South West','AUS',
'NYC',STR_TO_DATE('09-05-2024', '%m-%d-%Y'),'2024-09-05 07:14:07');

insert into flight values(5,'UA1','United Airlines','NYC',
'DAL',STR_TO_DATE('09-05-2024', '%m-%d-%Y'),'2024-09-05 10:14:07');	

insert into flight values(6,'UA1','United Airlines','NYC',
'DAL',STR_TO_DATE('09-05-2024', '%m-%d-%Y'),'2024-09-05 10:14:07');

insert into flight values(7,'SW1','South West','AUS',
'NYC',STR_TO_DATE('09-06-2024', '%m-%d-%Y'),'2024-09-06 07:14:07');

insert into flight values(8,'SW2','South West','AUS',
'NYC',STR_TO_DATE('09-06-2024', '%m-%d-%Y'),'2024-09-06 09:14:07');


insert into flight values(9,'SW3','South West','NYC',
'DAL',STR_TO_DATE('09-06-2024', '%m-%d-%Y'),'2024-09-06 10:14:07');

insert into flight values(10,'UA1','United Airlines','NYC',
'DAL',STR_TO_DATE('09-06-2024', '%m-%d-%Y'),'2024-09-06 10:14:07');
create database ums;
use ums;
show tables;
desc user;
select * from user;
drop table user;
desc user_seq;

update user set password=md5(password);


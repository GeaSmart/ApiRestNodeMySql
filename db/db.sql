create database if not exists management;
use management;

create table projects(
	id int(11) not null auto_increment,
	name varchar(45) default null,
	budget int(11) default null,
	primary key(id)
);

describe projects;
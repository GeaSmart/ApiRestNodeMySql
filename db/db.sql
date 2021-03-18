create database if not exists management;
use management;

create table projects(
	id int(11) not null auto_increment,
	name varchar(45) default null,
	budget int(11) default null,
	primary key(id)
);

describe projects;

DELIMITER //
create procedure projectAddOrEdit(
	in _id int,
	in _name varchar(45),
	in _budget int
)
begin
	IF _id = 0 then    
		insert into projects (name, budget) values (_name, _budget);
        set _id = last_insert_id();        
    ELSE
		update projects
        set name = _name,
        budget = _budget
        where id = _id;
	END IF;
    select _id as id;
end
//
DELIMITER ;
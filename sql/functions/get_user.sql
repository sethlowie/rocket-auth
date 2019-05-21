create or replace function get_user(em varchar)
returns table (
    id bigint,
    email varchar(255),
    status varchar(25),
    member_for interval,
    display_name varchar(100)
              )
as $$
    DECLARE
        dname varchar(100) := em;
        found_user membership.users;
        member_for interval;
    BEGIN
        if exists (select users.id from membership.users where users.email = em) then
            select * from membership.users into found_user;
            if (found_user.first is not null) then
                select concat(found_user.first, ' ', found_user.last)
                into dname;
            end if;
            select age(now(), found_user.created_at) into member_for;
        end if;
        return query
        select found_user.id,
               found_user.email,
               found_user.status,
               member_for,
               dname;
    end;
$$
LANGUAGE PLPGSQL;


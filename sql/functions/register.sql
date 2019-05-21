create or replace function register(new_email varchar, password varchar)
returns table(
    new_id bigint,
    validation_token varchar(36),
    success boolean,
    message varchar(255)
) as $$
    begin
    -- see if they exist
    if not exists (select users.email
        from users where
        users.email = new_email
    ) then
    -- add them
    insert into users(email, hashed_password)
    values (new_email, crypt(password, gen_salt('bf', 10)))
    returning id into new_id;

    validation_token := random_string(36);
    success := true;
    message := 'Welcome!';
    else
        success := false;
        message := 'That email is already registered';
    end if;


    return query
    select new_id, validation_token, success, message;
        end;
    $$
language plpgsql;


create or replace function random_string(len int, out text)
returns text
as $$
    select substring(md5(random()::text), 0, len + 1);
    /* select 'waffles' */
    $$
LANGUAGE SQL;

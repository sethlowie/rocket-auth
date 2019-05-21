CREATE TABLE users(
  id bigint primary key not null default id_generator(),
  email varchar(255) unique not null,
  first varchar(25),
  last varchar(25),
  search tsvector,
  created_at timestamptz default now() not null,
  status varchar(10) default 'active'
);

INSERT INTO users(email, first, last)
VALUES ('test@user.com', 'Test', 'User');

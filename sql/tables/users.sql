CREATE TABLE users(
  id bigint primary key not null default id_generator(),
  user_key varchar(18) not null default random_string(18),
  email varchar(255) unique not null,
  first varchar(25),
  last varchar(25),
  hashed_password varchar(255),
  search tsvector,
  created_at timestamptz default now() not null,
  status varchar(10) default 'active'
);

INSERT INTO users(email, first, last)
VALUES ('test@user.com', 'Test', 'User');

DROP SCHEMA IF EXISTS membership CASCADE;

CREATE SCHEMA membership;
SET search_path = membership;

SELECT 'Schema initialized' as RESULT;

CREATE extension if not exists pgcrypto with schema membership;


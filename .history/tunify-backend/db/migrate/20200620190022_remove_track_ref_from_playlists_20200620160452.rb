class RemoveTrackRefFromPlaylists < ActiveRecord::Migration[6.0]
  def change
#    remove_reference :playlists, :track_id, null: false, foreign_key: true
    remove_foreign_key :playlists, :track_id
    remove_foreign_key :playlists, :tracks

    b=# create table a (a int primary key, b int unique);
CREATE TABLE
b=# create table b (a int references a(a), b int references a(b));
CREATE TABLE
b=# do
$$
declare r record;
begin
for r in (select constraint_name from information_schema.table_constraints where table_schema = 'public' and table_name='b') loop
  raise info '%','dropping '||r.constraint_name;
  execute CONCAT('ALTER TABLE "public"."b" DROP CONSTRAINT '||r.constraint_name);
end loop;
end;
$$
;
INFO:  dropping b_a_fkey
INFO:  dropping b_b_fkey
DO
  end
end

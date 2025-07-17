import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

const usersTable = sqliteTable("users_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  gender: text().notNull(),
  age: int().notNull(),
  email: text().notNull().unique()
});

export { usersTable };

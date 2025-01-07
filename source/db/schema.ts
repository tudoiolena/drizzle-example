import {
  index,
  integer,
  pgEnum,
  pgTable,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const userRoleEnum = pgEnum("role", ["admin", "staff"]);

export const usersTable = pgTable(
  "users",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    fullName: varchar({ length: 255 }),
    email: varchar({ length: 255 }).notNull().unique(),
    password: varchar().notNull(),
    role: userRoleEnum().notNull().default("admin"),
    createdAt: timestamp().notNull().defaultNow(),
    updatedAt: timestamp().notNull(),
    deletedAt: timestamp(),
  },
  (table) => [
    index("id_idx").on(table.id),
    index("name_idx").on(table.fullName),
    index("email_idx").on(table.email),
    index("role_idx").on(table.role),
    index("created_at_idx").on(table.createdAt),
  ]
);

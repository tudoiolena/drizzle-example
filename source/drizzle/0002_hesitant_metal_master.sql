CREATE TYPE "public"."role" AS ENUM('admin', 'staff');--> statement-breakpoint
ALTER TABLE "users" RENAME COLUMN "name" TO "fullName";--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "role" "role" DEFAULT 'admin' NOT NULL;--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "age";
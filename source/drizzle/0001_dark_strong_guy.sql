ALTER TABLE "users" ADD COLUMN "password" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "createdAt" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "updatedAt" timestamp NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "deletedAt" timestamp;
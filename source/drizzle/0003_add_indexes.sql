CREATE INDEX "id_idx" ON "users" USING btree ("id");--> statement-breakpoint
CREATE INDEX "name_idx" ON "users" USING btree ("fullName");--> statement-breakpoint
CREATE INDEX "email_idx" ON "users" USING btree ("email");--> statement-breakpoint
CREATE INDEX "role_idx" ON "users" USING btree ("role");--> statement-breakpoint
CREATE INDEX "created_at_idx" ON "users" USING btree ("createdAt");
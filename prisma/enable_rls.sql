-- =============================================================================
-- Enable Row-Level Security (RLS) on all tables
-- 
-- WHY: Supabase exposes a public REST API (using the 'anon' key) on every table.
-- Without RLS, ANYONE with your Supabase project URL can read/write ALL data.
-- Our app uses Prisma (direct connection via postgres role), which bypasses RLS,
-- so this script ONLY blocks the public Supabase API while keeping Prisma working.
--
-- HOW TO RUN: Go to Supabase Dashboard → SQL Editor → paste this → click Run.
-- =============================================================================

-- Users table
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.users FORCE ROW LEVEL SECURITY;

-- Accounts table (OAuth accounts)
ALTER TABLE public.accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.accounts FORCE ROW LEVEL SECURITY;

-- Sessions table
ALTER TABLE public.sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sessions FORCE ROW LEVEL SECURITY;

-- Verification tokens
ALTER TABLE public.verification_tokens ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.verification_tokens FORCE ROW LEVEL SECURITY;

-- Password reset tokens
ALTER TABLE public.password_reset_tokens ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.password_reset_tokens FORCE ROW LEVEL SECURITY;

-- Organizations table
ALTER TABLE public.organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.organizations FORCE ROW LEVEL SECURITY;

-- Members table
ALTER TABLE public.members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.members FORCE ROW LEVEL SECURITY;

-- Invites table
ALTER TABLE public.invites ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.invites FORCE ROW LEVEL SECURITY;

-- Audit logs table
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs FORCE ROW LEVEL SECURITY;

-- =============================================================================
-- RESULT: No policies are created, which means the Supabase public API
-- (anon/authenticated roles) cannot access ANY rows in ANY table.
-- Only the 'postgres' role (used by Prisma) can access data.
-- This is the most secure configuration when using Prisma as the sole data layer.
-- =============================================================================

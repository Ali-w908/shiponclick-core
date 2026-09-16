'use client';

import { useState, useEffect } from 'react';
import { NewProjectModal } from './new-project-modal';
import Link from 'next/link';

function PlusIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
    );
}

function FolderIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2 7.5A2.5 2.5 0 014.5 5h3.28a2.5 2.5 0 011.94.94l.78.98a2.5 2.5 0 001.94.93H19.5A2.5 2.5 0 0122 9.5V17a2.5 2.5 0 01-2.5 2.5h-15A2.5 2.5 0 012 17V7.5z" />
        </svg>
    );
}

function RocketIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        </svg>
    );
}

function TrashIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
    );
}

function LockIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
    );
}

interface Project {
    id: string;
    name: string;
    path: string;
    description?: string;
    targetAudience?: string;
    keyFeatures?: string;
    createdAt: string;
}

interface ProjectsDashboardProps {
    maxProjects: number;
    canUseCliCommand: boolean;
    planName: string;
    orgSlug: string;
    initialGithubUsername?: string | null;
    githubInviteStatus?: string | null;
}

const STORAGE_KEY = 'shiponclick-projects';

export function ProjectsDashboard({ maxProjects, canUseCliCommand, planName, orgSlug, initialGithubUsername, githubInviteStatus }: ProjectsDashboardProps) {
    const [projects, setProjects] = useState<Project[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [loaded, setLoaded] = useState(false);

    // Load from localStorage
    useEffect(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (stored) {
                setProjects(JSON.parse(stored));
            }
        } catch {
            // ignore
        }
        setLoaded(true);
    }, []);

    // Save to localStorage
    useEffect(() => {
        if (loaded) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
        }
    }, [projects, loaded]);

    const handleProjectCreated = (project: Project) => {
        setProjects((prev) => [project, ...prev.filter(p => p.id !== project.id)]); // Handle updates as well
    };

    const handleDelete = (id: string) => {
        setProjects((prev) => prev.filter((p) => p.id !== id));
    };

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleOpenNewModal = () => {
        setSelectedProject(null);
        setIsModalOpen(true);
    };

    const hasReachedLimit = projects.length >= maxProjects;

    return (
        <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-2xl font-bold text-zinc-100">Projects</h2>
                    <p className="mt-1 text-sm text-zinc-500">
                        {maxProjects === Infinity
                            ? 'Unlimited projects — Scale plan'
                            : `${projects.length} / ${maxProjects} project${maxProjects !== 1 ? 's' : ''} — ${planName} plan`
                        }
                    </p>
                </div>
                {hasReachedLimit ? (
                    <Link
                        href={`/${orgSlug}/settings/billing`}
                        className="inline-flex items-center gap-2 text-sm px-5 py-2.5 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-400 hover:bg-amber-500/20 transition-colors"
                    >
                        <LockIcon className="h-4 w-4" />
                        Upgrade to create more
                    </Link>
                ) : (
                    <button
                        onClick={handleOpenNewModal}
                        className="btn-glow inline-flex items-center gap-2 text-sm px-5 py-2.5 animate-glow-pulse"
                    >
                        <PlusIcon className="h-4 w-4" />
                        New Project
                    </button>
                )}
            </div>

            {/* Projects Grid */}
            {projects.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-20 rounded-2xl border border-dashed border-border-muted bg-surface/50">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 mb-4">
                        <RocketIcon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-zinc-200 mb-1">No projects yet</h3>
                    <p className="text-sm text-zinc-500 mb-6 text-center max-w-xs">
                        Click &ldquo;+ New Project&rdquo; to scaffold your first SaaS application in seconds.
                    </p>
                    <button
                        onClick={handleOpenNewModal}
                        className="btn-glow inline-flex items-center gap-2 text-sm px-5 py-2.5"
                    >
                        <PlusIcon className="h-4 w-4" />
                        Create First Project
                    </button>
                </div>
            ) : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => handleProjectClick(project)}
                            className="group rounded-2xl border border-border-muted bg-surface p-6 transition-all hover:border-primary/50 hover:bg-surface-hover cursor-pointer"
                        >
                            {/* Project header */}
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                                        <FolderIcon className="h-4 w-4 text-primary" />
                                    </div>
                                    <h3 className="font-semibold text-zinc-200">{project.name}</h3>
                                </div>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleDelete(project.id);
                                    }}
                                    className="opacity-0 group-hover:opacity-100 text-zinc-600 hover:text-red-400 transition-all"
                                    title="Delete project"
                                >
                                    <TrashIcon className="h-4 w-4" />
                                </button>
                            </div>

                            {/* Path */}
                            <p className="text-xs font-mono text-zinc-600 mb-3 truncate" title={project.path}>
                                {project.path}
                            </p>

                            {/* Description */}
                            {project.description && (
                                <p className="text-sm text-zinc-400 mb-3 line-clamp-2">
                                    {project.description}
                                </p>
                            )}

                            {/* Meta */}
                            <div className="flex items-center gap-3 pt-3 border-t border-zinc-800/50">
                                <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium border ${
                                    canUseCliCommand
                                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                                        : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                                }`}>
                                    {canUseCliCommand ? 'Active' : 'Preview'}
                                </span>
                                <span className="text-xs text-zinc-600">
                                    {new Date(project.createdAt).toLocaleDateString()}
                                </span>
                            </div>
                        </div>
                    ))}

                    {/* Add New Card — only if under limit */}
                    {!hasReachedLimit && (
                        <button
                            onClick={handleOpenNewModal}
                            className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border-muted bg-surface/50 p-6 min-h-[180px] transition-all hover:border-primary/50 hover:bg-surface-hover cursor-pointer group"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-muted bg-surface-elevated group-hover:border-primary/30 group-hover:bg-primary/10 transition-colors mb-2">
                                <PlusIcon className="h-5 w-5 text-zinc-600 group-hover:text-primary transition-colors" />
                            </div>
                            <span className="text-sm text-zinc-600 group-hover:text-zinc-400 transition-colors">New Project</span>
                        </button>
                    )}
                </div>
            )}

            {/* Modal */}
            <NewProjectModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onProjectCreated={handleProjectCreated}
                canUseCliCommand={canUseCliCommand}
                orgSlug={orgSlug}
                initialGithubUsername={initialGithubUsername}
                githubInviteStatus={githubInviteStatus}
                initialProject={selectedProject}
            />
        </div>
    );
}

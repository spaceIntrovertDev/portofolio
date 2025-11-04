import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, Code2, Database, MessageSquare, Lock, Layers } from "lucide-react";

export default function Projects() {
    return (
        <div className="flex h-full w-full flex-col items-center justify-center px-6 py-12 md:px-12">
            <article className="w-full max-w-3xl space-y-12 rounded-lg bg-white p-8 shadow-lg dark:bg-black">
                <header className="border-b border-gray-200 pb-6 dark:border-gray-700">
                    <h1 className="text-center text-3xl font-bold text-gray-900 dark:text-white sm:text-left">
                        Projects
                    </h1>
                    <p className="mt-2 text-center text-base text-gray-600 dark:text-gray-400 sm:text-left">
                        Academic and self-directed learning projects showcasing full-stack development
                    </p>
                </header>

                {/* Project 1: Twitter Analysis (Academic) */}
                <section className="space-y-6">
                    <div className="flex items-start justify-between">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                Twitter Data Analysis Pipeline
                            </h2>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                Python, SQL, Elasticsearch, NLP
                            </p>
                        </div>
                        <Link
                            href="https://github.com/yourusername/twitter-analysis"
                            target="_blank"
                            className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
                        >
                            <Github className="h-5 w-5" />
                        </Link>
                    </div>

                    <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                        A full-stack data pipeline for analyzing Twitter (X) data with custom weighting schemes.
                        Includes crawling, database migration, re-crawling logic, and interactive analysis dashboard.
                    </p>

                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <li className="flex items-center gap-2">
                            <Database className="h-4 w-4 text-green-600 dark:text-green-400" />
                            ElasticSearch Crawler
                        </li>
                        <li className="flex items-center gap-2">
                            <Code2 className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                            NoSQL to SQL Database Porter
                        </li>
                        <li className="flex items-center gap-2">
                            <ExternalLink className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                            Twitter API Re-Crawler
                        </li>
                        <li className="flex items-center gap-2">
                            <MessageSquare className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                            Twitter Parser with Sample Evaluations
                        </li>
                    </ul>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                            <Image
                                src="/projects/twitter-dashboard.png"
                                alt="Twitter Analysis Dashboard"
                                width={600}
                                height={400}
                                className="h-full w-full object-cover transition-transform hover:scale-105"
                            />
                        </div>
                        <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                            <Image
                                src="/projects/twitter-parser.png"
                                alt="Twitter Parser Interface"
                                width={600}
                                height={400}
                                className="h-full w-full object-cover transition-transform hover:scale-105"
                            />
                        </div>
                    </div>
                </section>

                <hr className="border-gray-200 dark:border-gray-700" />

                {/* Project 2: Programmer Chatbot (Academic) */}
                <section className="space-y-6">
                    <div className="flex items-start justify-between">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                Programmer Support Chatbot
                            </h2>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                Python, JavaScript (VS Code Plugin), Bash, Batch
                            </p>
                        </div>
                        <Link
                            href="https://github.com/yourusername/programmer-chatbot"
                            target="_blank"
                            className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
                        >
                            <Github className="h-5 w-5" />
                        </Link>
                    </div>

                    <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                        A cross-platform assistant for developers integrated into VS Code.
                        Analyzes code context, searches documentation, and provides instant help via natural language.
                    </p>

                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <li className="flex items-center gap-2">
                            <Code2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                            All-in-One Linux/Windows Installer
                        </li>
                        <li className="flex items-center gap-2">
                            <MessageSquare className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                            Real-time User Input Analysis
                        </li>
                        <li className="flex items-center gap-2">
                            <ExternalLink className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                            Google Custom Search Integration
                        </li>
                        <li className="flex items-center gap-2">
                            <Database className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                            Text Mining & Result Ranking
                        </li>
                    </ul>

                    <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                        <Image
                            src="/projects/chatbot-vscode.png"
                            alt="Chatbot in VS Code"
                            width={800}
                            height={500}
                            className="w-full transition-transform hover:scale-105"
                        />
                    </div>
                </section>

                <hr className="border-gray-200 dark:border-gray-700" />

                {/* Project 3: Sales Dashboard (Self-Learning) */}
                <section className="space-y-6">
                    <div className="flex items-start justify-between">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                                Multi-Tenant Sales Dashboard
                            </h2>
                            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                Next.js, React, TypeScript, Flask, SQLite, SQLAlchemy, JWT
                            </p>
                        </div>
                        <Link
                            href="https://github.com/yourusername/sales-dashboard"
                            target="_blank"
                            className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
                        >
                            <Github className="h-5 w-5" />
                        </Link>
                    </div>

                    <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                        A full-stack, multi-tenant sales dashboard with secure login.
                        Users log in to see their tenant-specific leads with optional primary contact information.
                        Built to learn modern React patterns and backend API design.
                    </p>

                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <li className="flex items-center gap-2">
                            <Lock className="h-4 w-4 text-red-600 dark:text-red-400" />
                            JWT-based authentication with tenant isolation
                        </li>
                        <li className="flex items-center gap-2">
                            <Layers className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                            Frontend: Next.js + React + TypeScript
                        </li>
                        <li className="flex items-center gap-2">
                            <Database className="h-4 w-4 text-teal-600 dark:text-teal-400" />
                            Backend: Flask + SQLAlchemy + SQLite
                        </li>
                        <li className="flex items-center gap-2">
                            <Code2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                            3-table schema: users, leads, primary_contacts (all with tenant_id)
                        </li>
                    </ul>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                            <Image
                                src="/projects/sales-login.png"
                                alt="Login Page"
                                width={600}
                                height={400}
                                className="h-full w-full object-cover transition-transform hover:scale-105"
                            />
                        </div>
                        <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                            <Image
                                src="/projects/sales-dashboard.png"
                                alt="Leads Dashboard"
                                width={600}
                                height={400}
                                className="h-full w-full object-cover transition-transform hover:scale-105"
                            />
                        </div>
                    </div>
                </section>
            </article>
        </div>
    );
}
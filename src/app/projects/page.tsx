import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, Code2, Database, MessageSquare } from "lucide-react";

export default function Projects() {
    return (
        <div className="flex h-full w-full flex-col items-center justify-center px-6 py-12 md:px-12">
            <article className="w-full max-w-3xl space-y-12 rounded-lg bg-white p-8 shadow-lg dark:bg-black">
                <header className="border-b border-gray-200 pb-6 dark:border-gray-700">
                    <h1 className="text-center text-3xl font-bold text-gray-900 dark:text-white sm:text-left">
                        Academic Projects
                    </h1>
                </header>

                {/* Project 1: Twitter Analysis */}
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
                        <div className="flex gap-2">
                            <Link
                                href="https://github.com/yourusername/twitter-analysis"
                                target="_blank"
                                className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
                            >
                                <Github className="h-5 w-5" />
                            </Link>
                        </div>
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

                    {/* Image Gallery */}
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
                                src="/projects/twitter-result.png"
                                alt="Twitter Parser Result"
                                width={600}
                                height={400}
                                className="h-full w-full object-cover transition-transform hover:scale-105"
                            />
                        </div>
                    </div>
                </section>

                <hr className="border-gray-200 dark:border-gray-700" />

                {/* Project 2: Programmer Chatbot */}
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
                        <div className="flex gap-2">
                            <Link
                                href="https://github.com/yourusername/programmer-chatbot"
                                target="_blank"
                                className="text-blue-600 hover:text-blue-800 dark:text-blue-400"
                            >
                                <Github className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                        A cross-platform assistant for developers integrated into VS Code.
                        Analyzes code context, searches documentation, and provides instant help via natural language.
                    </p>

                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                        <li className=" flex items-center gap-2">
                            <Code2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                            All-in-One Linux/Windows Installer
                        </li>
                        <li className=" flex items-center gap-2">
                            <MessageSquare className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                            Real-time User Input Analysis
                        </li>
                        <li className=" flex items-center gap-2">
                            <ExternalLink className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                            Google Custom Search Integration
                        </li>
                        <li className=" flex items-center gap-2">
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
            </article>
        </div>
    );
}
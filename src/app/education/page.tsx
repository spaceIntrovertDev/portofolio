import { GraduationCap, BookOpen } from "lucide-react";

export default function Education() {
    return (
        <div className="flex h-full w-full flex-col items-center justify-center px-6 py-12 md:px-12">
            <article className="w-full max-w-3xl space-y-10 rounded-lg bg-white p-8 shadow-lg dark:bg-black">
                <header className="border-b border-gray-200 pb-6 dark:border-gray-700">
                    <h1 className="text-center text-3xl font-bold text-gray-900 dark:text-white sm:text-left">
                        Education
                    </h1>
                </header>
                <section>
                    <div className="flex items-start gap-3">
                        <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400 mt-1" />
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Bachelor’s Degree in Applied Computer Science
                            </h2>
                            <p className="text-lg font-medium text-blue-700 dark:text-blue-300">
                                Heidelberg University, 69120 Heidelberg
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                <strong>Minor Application Area:</strong> Psychology
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                01.10.2017 – 01.03.2021
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 space-y-6">
                        <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-800 dark:text-gray-200">
                            <BookOpen className="h-5 w-5 text-green-600 dark:text-green-400" />
                            Projects during Studies
                        </h3>
                        <div className="space-y-5">
                            <div>
                                <h4 className="font-medium text-gray-900 dark:text-white">
                                    Analysis of Twitter Data with Various Weighting Schemes
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Python, SQL</p>
                                <ul className="mt-2 list-disc space-y-1 pl-6 text-base text-gray-700 dark:text-gray-300">
                                    <li>ElasticSearch Crawler</li>
                                    <li>Database Porter from NoSQL-DB to SQL-DB</li>
                                    <li>Twitter API Re-Crawler</li>
                                    <li>Twitter Parser (analysis environment with sample evaluations)</li>
                                </ul>
                            </div>
                            <div className="border-t border-gray-200 pt-5 dark:border-gray-700">
                                <h4 className="font-medium text-gray-900 dark:text-white">
                                    Development of a Chatbot to Support Programmers
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    Python, JavaScript (VS Code Plugin), Linux-Bash, Windows-Batch
                                </p>
                                <ul className="mt-2 list-disc space-y-1 pl-6 text-base text-gray-700 dark:text-gray-300">
                                    <li>All-in-One Linux-/Windows-Installer</li>
                                    <li>Analysis of user input</li>
                                    <li>Google Custom Search integration</li>
                                    <li>Analysis of results with various text-mining algorithms</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </div>
    );
}
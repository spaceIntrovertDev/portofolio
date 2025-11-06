import { Calendar, Briefcase } from "lucide-react";

export default function Experience() {
    return (
        <div className="flex h-full w-full flex-col items-center justify-center px-6 py-12 md:px-12">
            <article className="w-full max-w-3xl space-y-10 rounded-lg bg-white p-8 shadow-lg dark:bg-black">
                <header className="border-b border-gray-200 pb-6 dark:border-gray-700">
                    <h1 className="text-center text-3xl font-bold text-gray-900 dark:text-white sm:text-left">
                        Professional Experience
                    </h1>
                </header>
                <section className="space-y-12">
                    <div className="group">
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-center gap-2">
                                <Briefcase className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Backend Developer
                                </h2>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <Calendar className="h-4 w-4" />
                                <time>01.10.2024 – 11.02.2025</time>
                            </div>
                        </div>
                        <p className="mt-1 text-lg font-medium text-blue-700 dark:text-blue-300">
                            RESERViSiON GmbH
                        </p>
                        <ul className="mt-3 list-disc space-y-1 pl-6 text-base text-gray-700 dark:text-gray-300">
                            <li>Backend software development with PHP and TypeScript (Node.js and Prisma)</li>
                            <li>Management and maintenance of the MySQL database using SQL</li>
                            <li>Implementation of interface integrations according to customer requirements (SOAP and REST)</li>
                            <li>Implementation of unit tests using Jest and GitLab CI</li>
                            <li>Version control using Git</li>
                            <li>Container virtualization using Docker</li>
                        </ul>
                    </div>
                    <div className="group border-t border-gray-200 pt-10 dark:border-gray-700">
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-center gap-2">
                                <Briefcase className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Backend Developer
                                </h2>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                <Calendar className="h-4 w-4" />
                                <time>08.03.2021 – 30.06.2024</time>
                            </div>
                        </div>
                        <p className="mt-1 text-lg font-medium text-blue-700 dark:text-blue-300">
                            Workwise GmbH
                        </p>
                        <ul className="mt-3 list-disc space-y-1 pl-6 text-base text-gray-700 dark:text-gray-300">
                            <li>Backend software development with PHP (CakePHP/Laravel), TypeScript (Node.js) and Python (Flask)</li>
                            <li>Management and maintenance of the MySQL database using SQL and the Elasticsearch (NoSQL) database</li>
                            <li>Optimization of the search algorithm in the Elasticsearch database using Natural Language Processing (NLP) and integration of Machine Learning models</li>
                            <li>Implementation of unit tests using Jest and GitLab CI</li>
                            <li>Implementation of end-to-end (e2e) tests</li>
                            <li>Container virtualization using Docker</li>
                        </ul>
                    </div>
                </section>
            </article>
        </div>
    );
}
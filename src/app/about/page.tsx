import { Code2, Palette, Globe, Terminal, Lightbulb, ArrowRight } from "lucide-react";

const currentYear = new Date().getFullYear().toString();

export default function AboutPortfolio() {
    return (
        <div className="flex h-full w-full flex-col items-center justify-center px-6 py-12 md:px-12">
            <article className="w-full max-w-3xl space-y-12 rounded-lg bg-white p-8 shadow-lg dark:bg-black">
                <header className="border-b border-gray-200 pb-6 dark:border-gray-700">
                    <h1 className="text-center text-3xl font-bold text-gray-900 dark:text-white sm:text-left">
                        About This Portfolio
                    </h1>
                    <p className="mt-2 text-center text-base text-gray-600 dark:text-gray-400 sm:text-left">
                        How this site was built — technology, design and philosophy.
                    </p>
                </header>
                <section className="space-y-6">
                    <div className="flex items-start gap-3">
                        <Lightbulb className="h-6 w-6 text-yellow-600 dark:text-yellow-400 mt-0.5" />
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Development Philosophy
                            </h2>
                            <p className="mt-2 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                                This portfolio was built with a focus on <strong>clarity, performance and maintainability</strong>.
                                The goal was to create a clean, professional and fast-loading personal site that reflects
                                my technical expertise while being easy to update and extend.
                            </p>
                            <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                    Single source of truth: CV → Portfolio
                                </li>
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                    Mobile-first, responsive design
                                </li>
                                <li className="flex items-center gap-2">
                                    <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                    Zero external dependencies beyond core stack
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <hr className="border-gray-200 dark:border-gray-700" />
                <section className="space-y-6">
                    <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-white">
                        <Terminal className="h-6 w-6 text-green-600 dark:text-green-400" />
                        Technology Stack
                    </h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-900">
                            <div className="flex items-center gap-2">
                                <Globe className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                <h3 className="font-medium text-gray-900 dark:text-white">Frontend</h3>
                            </div>
                            <ul className="mt-3 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                                <li><strong>Next.js 14</strong> (App Router)</li>
                                <li>React 18 + TypeScript</li>
                                <li>Tailwind CSS (styling)</li>
                                <li>Lucide React (icons)</li>
                                <li>next/image (optimized images)</li>
                            </ul>
                        </div>
                        <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-900">
                            <div className="flex items-center gap-2">
                                <Code2 className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                                <h3 className="font-medium text-gray-900 dark:text-white">Deployment</h3>
                            </div>
                            <ul className="mt-3 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                                <li>Vercel (zero-config hosting)</li>
                                <li>Git-based workflow</li>
                                <li>Automatic previews per PR</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <hr className="border-gray-200 dark:border-gray-700" />
                <section className="space-y-6">
                    <div className="flex items-start gap-3">
                        <Palette className="h-6 w-6 text-pink-600 dark:text-pink-400 mt-0.5" />
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Design & UX Decisions
                            </h2>
                            <ul className="mt-3 space-y-3 text-base text-gray-700 dark:text-gray-300">
                                <li>
                                    <strong>Sidebar Navigation:</strong> Persistent left panel for quick access on all pages.
                                </li>
                                <li>
                                    <strong>Content-Centric Layout:</strong> Main area (80%) is fully dedicated to page content, centered internally.
                                </li>
                                <li>
                                    <strong>Dark Mode:</strong> Native Tailwind support using <code className="rounded bg-gray-200 px-1.5 py-0.5 text-xs dark:bg-gray-800">dark:</code> classes.
                                </li>
                                <li>
                                    <strong>Typography:</strong> Clean hierarchy with <code className="rounded bg-gray-200 px-1.5 py-0.5 text-xs dark:bg-gray-800">Inter</code> font and semantic heading sizes.
                                </li>
                                <li>
                                    <strong>Print-Friendly:</strong> All pages render cleanly when printed (ideal for CV sharing).
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <hr className="border-gray-200 dark:border-gray-700" />
                <footer className="pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
                    {`Built with care by Philipp Wiedemann — ${currentYear}`}
                </footer>
            </article>
        </div>
    );
}
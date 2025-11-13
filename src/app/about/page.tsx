import {
  Code2,
  Palette,
  Globe,
  Terminal,
  Lightbulb,
  ArrowRight,
  Smartphone,
  Github,
} from "lucide-react";
import Link from "next/link";

const currentYear: string = new Date().getFullYear().toString();

export default function AboutPortfolio() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-6 py-12 md:px-12">
      <article className="w-full max-w-3xl space-y-12 rounded-lg bg-white p-8 shadow-lg dark:bg-black">
        <header className="border-b border-gray-200 pb-6 dark:border-gray-700">
          <h1 className="text-center text-3xl font-bold text-gray-900 dark:text-white sm:text-left">
            About This Portfolio
          </h1>
          <p className="mt-2 text-center text-base text-gray-600 dark:text-gray-400 sm:text-left">
            Built for performance, clarity, and mobile-first usability.
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
                This portfolio is a <strong>single source of truth</strong> —
                all content is derived directly from my CV. It’s designed to be{" "}
                <strong>fast, maintainable, and accessible</strong> on every
                device.
              </p>
              <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  CV → Portfolio: No duplicated content
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  Mobile-first: Responsive from day one
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  Zero runtime JS bloat
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
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Frontend
                </h3>
              </div>
              <ul className="mt-3 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Next.js 14</strong> (App Router)
                </li>
                <li>React 18 + TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Lucide React (icons)</li>
                <li>next/image (optimized)</li>
              </ul>
            </div>

            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-900">
              <div className="flex items-center gap-2">
                <Code2 className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Deployment
                </h3>
              </div>
              <ul className="mt-3 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <li>Vercel (zero-config)</li>
                <li>GitHub Actions (optional)</li>
                <li>Automatic previews per PR</li>
              </ul>
            </div>
          </div>
        </section>
        <hr className="border-gray-200 dark:border-gray-700" />
        <section className="space-y-6">
          <div className="flex items-start gap-3">
            <Smartphone className="h-6 w-6 text-teal-600 dark:text-teal-400 mt-0.5" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Mobile-First UX
              </h2>
              <p className="mt-2 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                The navigation adapts intelligently to screen size:
              </p>
              <ul className="mt-3 space-y-3 text-base text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Desktop:</strong> Persistent left sidebar
                </li>
                <li>
                  <strong>Mobile:</strong>{" "}
                  <code className="rounded bg-gray-200 px-1.5 py-0.5 text-xs dark:bg-gray-800">
                    fixed
                  </code>{" "}
                  top navbar
                </li>
                <li>
                  <strong>Dynamic height:</strong> Navbar wraps into 2 rows on
                  narrow screens (e.g., Galaxy S22)
                </li>
                <li>
                  <strong>No overlap:</strong> Main content padding = navbar
                  height (via CSS variable)
                </li>
                <li>
                  <strong>Touch-friendly:</strong> Button-style links with `px-3
                  py-1.5`
                </li>
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
                Design & Accessibility
              </h2>
              <ul className="mt-3 space-y-3 text-base text-gray-700 dark:text-gray-300">
                <li>
                  <strong>Dark Mode:</strong> Native Tailwind{" "}
                  <code className="rounded bg-gray-200 px-1.5 py-0.5 text-xs dark:bg-gray-800">
                    dark:
                  </code>{" "}
                  classes
                </li>
                <li>
                  <strong>Typography:</strong> Inter font, semantic headings,
                  high contrast
                </li>
                <li>
                  <strong>Image Modals:</strong> Click to enlarge (Esc to close)
                </li>
                <li>
                  <strong>Print-Ready:</strong> Clean layout for CV export
                </li>
                <li>
                  <strong>Performance:</strong> Optimized images, no CLS
                </li>
              </ul>
            </div>
          </div>
        </section>
        <hr className="border-gray-200 dark:border-gray-700" />
        <div className="flex items-center gap-3">
          <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          <Link
            href={`https://github.com/spaceIntrovertDev/portofolio`}
            target="_blank"
            className="text-gray-900 dark:text-white hover:underline"
          >
            GitHub Repository of this Website
          </Link>
        </div>
        <footer className="pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          {`Built with care by Philipp Wiedemann — ${currentYear}`}
        </footer>
      </article>
    </div>
  );
}

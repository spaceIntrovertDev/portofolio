import Link from "next/link";
import { Mail, MapPin, Globe, Github } from "lucide-react";

const gitHubName: string = "spaceIntrovertDev";

export default function Contact() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-6 py-12 md:px-12">
      <article className="w-full max-w-3xl space-y-10 rounded-lg bg-white p-8 shadow-lg dark:bg-black">
        <header className="flex flex-col items-center gap-6 border-b border-gray-200 pb-8 dark:border-gray-700 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Philipp Wiedemann
            </h1>
            <p className="mt-1 text-lg text-blue-600 dark:text-blue-400">
              Freelance Software developer
            </p>
          </div>
        </header>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  Mühlstraße 21
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  69226 Nußloch, Germany
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-red-600 dark:text-red-400" />
              <a
                href="mailto:philipp.wiedemann@bewico.com"
                className="text-gray-900 dark:text-white hover:underline"
              >
                philipp.wiedemann@bewico.com
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Globe className="h-5 w-5 text-teal-600 dark:text-teal-400" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  Languages
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  German (Native), English (C1)
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              <Link
                href={`https://github.com/${gitHubName}`}
                target="_blank"
                className="text-gray-900 dark:text-white hover:underline"
              >
                {`github.com/${gitHubName}`}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="/wiedemann-philipp-cv.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download CV (PDF)
          </a>
        </div>
      </article>
    </div>
  );
}

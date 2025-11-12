import {
  Code2,
  Brain,
  Database,
  GitBranch,
  TestTube,
  Globe,
  Cpu,
  Layers,
} from "lucide-react";

export default function Skills() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-6 py-12 md:px-12">
      <article className="w-full max-w-3xl space-y-10 rounded-lg bg-white p-8 shadow-lg dark:bg-black">
        <header className="border-b border-gray-200 pb-6 dark:border-gray-700">
          <h1 className="text-center text-3xl font-bold text-gray-900 dark:text-white sm:text-left">
            Skills & Expertise
          </h1>
          <p className="mt-2 text-center text-base text-gray-600 dark:text-gray-400 sm:text-left">
            Technologies, frameworks and tools from professional & academic
            experience
          </p>
        </header>
        <section>
          <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-white">
            <Code2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            Programming Languages
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <h3 className="font-medium text-green-700 dark:text-green-400">
                Advanced
              </h3>
              <p className="mt-1 text-base text-gray-700 dark:text-gray-300">
                Python, TypeScript/JavaScript, PHP
              </p>
            </div>
            <div>
              <h3 className="font-medium text-yellow-700 dark:text-yellow-400">
                Good Knowledge
              </h3>
              <p className="mt-1 text-base text-gray-700 dark:text-gray-300">
                Unix/Linux Shell (Bash), Windows Batch, HTML, CSS
              </p>
            </div>
            <div>
              <h3 className="font-medium text-orange-700 dark:text-orange-400">
                Basic Knowledge
              </h3>
              <p className="mt-1 text-base text-gray-700 dark:text-gray-300">
                Ruby, R, Ada, C++, C, Java, Qt (C++/Python), C#
              </p>
            </div>
          </div>
        </section>
        <section className="border-t border-gray-200 pt-8 dark:border-gray-700">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-white">
            <Layers className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            Frameworks & Libraries
          </h2>
          <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-medium text-purple-700 dark:text-purple-400">
                Backend
              </h3>
              <ul className="mt-2 space-y-1 text-base text-gray-700 dark:text-gray-300">
                <li>Laravel (PHP)</li>
                <li>CakePHP (PHP)</li>
                <li>Flask (Python)</li>
                <li>Node.js</li>
                <li>Prisma ORM</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-teal-700 dark:text-teal-400">
                Frontend & Tools
              </h3>
              <ul className="mt-2 space-y-1 text-base text-gray-700 dark:text-gray-300">
                <li>Next.js</li>
                <li>React</li>
                <li>scikit-learn (NLP/ML)</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="border-t border-gray-200 pt-8 dark:border-gray-700">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-white">
            <Cpu className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            Technical Skills & Tools
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Database className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Databases
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    MySQL (SQL), Elasticsearch (NoSQL), Data Migration
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <TestTube className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Testing
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Jest (Unit), GitLab CI, End-to-End (e2e)
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <GitBranch className="h-5 w-5 text-green-600 dark:text-green-400" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    DevOps
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Git, Docker, CI/CD Pipelines
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    APIs & Integrations
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    REST, SOAP, Twitter API, Google Custom Search
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Advanced Topics
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    NLP, Machine Learning Models, Search Optimization
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="border-t border-gray-200 pt-8 dark:border-gray-700">
          <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-white">
            <Brain className="h-6 w-6 text-red-600 dark:text-red-400" />
            Soft Skills
          </h2>
          <p className="mt-3 text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Disciplined, quick learner, solution-oriented approach, responsible,
            eager to learn
          </p>
        </section>
      </article>
    </div>
  );
}

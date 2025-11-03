import Image from "next/image";

export default function Home() {
    return (
        <div className="flex h-full w-full flex-col items-center justify-center px-8 py-16">
            <div className="w-full max-w-3xl space-y-8 rounded-lg bg-white p-8 shadow-lg dark:bg-black">
                <h1 className="text-center text-3xl font-bold leading-tight text-gray-900 dark:text-gray-100">
                    Profile Summary
                </h1>
                <div className="flex justify-center">
                    <Image
                        src="/profile.jpg"
                        alt="Philipp Wiedemann"
                        width={240}
                        height={240}
                        className="rounded-full object-cover"
                        priority
                    />
                </div>
                <div className="space-y-4 text-center text-base text-gray-700 dark:text-gray-300">
                    <p>
                        I am Philipp Wiedemann, a dedicated software developer with over four years of professional
                        experience in designing and implementing scalable solutions. I specialize in PHP (Laravel/CakePHP),
                        TypeScript (Node.js, Prisma), and Python (Flask).
                        With strong expertise in MySQL, Elasticsearch, Docker-based containerization,
                        Git version control and automated testing.

                        Fluent in German (native) and English (C1), I offer solution-oriented
                        freelance services in general software development with clear communication in mind.
                        Including frontend/backend development, API design & integration, database optimization,
                        web scraping and related technologies.
                    </p>
                    <p>
                        Feel free to explore the sections via the sidebar or get in touch
                        through the contact page.
                    </p>
                </div>
            </div>
        </div>
    );
}
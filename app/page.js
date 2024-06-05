import Link from "next/link";

export const metadata = {
  metadataBase: new URL('https://gztlr.com'),
  url: 'https://gztlr.com',
  siteName: 'gztlr.com',
  title: 'Gztlr | Yakında.',
  description: "Yakında.",
  creator: 'Remzi Kılınç',
  keywords: ['gztlr'],
  referrer: 'origin-when-cross-origin',
  openGraph: {
    title: 'gztlr.com',
    description: "Yakında.",
    locale: 'tr_TR',
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>

      </div>
      <div
          className="relative flex place-items-center flex-col before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[280px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:blur-2xl after:content-[''] before:bg-gradient-to-br before:from-transparent before:to-blue-700 before:opacity-10 after:from-white after:via-[#ff0000] after:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="flex justify-items-center items-center flex-row-reverse col-start-4 justify-self-end">
          <div className="p-0 m-0">
            <Link href="/" className="flex justify-center items-center">
              <h1 className="font-semibold text-4xl leading-3">gztlr<span className="leading-3 -ml-1 text-sm font-thin text-white/80">.com</span></h1>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-4">
          <p className="text-sm text-center text-white/80 group/logo animate-pulse font-thin">
            yakında.
          </p>
        </div>
      </div>

      <div className="mb-32 grid gap-x-2 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 grid-cols-1 lg:text-left justify-center items-center">
        <a href="https://ucoyun.com"
           className="group rounded-lg border border-transparent px-3 py-2 lg:col-start-2 transition-colors hover:border-gray-300 hover:border-white/30 hover:bg-white/20"
           target="_blank"
           rel="external">
          <h2 className={`mb-3 font-semibold text-sm`}>
            ucoyun{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] opacity-50 text-xs font-thin`}>
            oyun fiyatları
          </p>
        </a>

        <a href="https://remzikilinc.com/"
           className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:border-white/30 hover:bg-white/20"
           target="_blank"
           rel="external">
          <h2 className={`mb-3 font-semibold text-sm`}>
            remzi kılınç{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] opacity-50 text-xs font-thin`}>
            developer
          </p>
        </a>

      </div>
    </main>
  );
}

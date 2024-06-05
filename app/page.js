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
              <div>
                <svg width={45} height={45} viewBox="0 0 76 133" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M24.0068 132.19C21.4298 132.029 19.5844 129.622 20.1134 127.068L29.6546 80.8021L3.88495 79.1931C-2.59428 78.7885 1.80004 73.5193 1.96109 73.3076C12.2634 57.4679 27.6961 34.0397 48.1259 2.79283C48.6745 1.97367 49.4905 1.37036 50.4344 1.08589C51.3784 0.801424 52.3918 0.853452 53.3017 1.23309C54.2116 1.61273 54.9614 2.29643 55.4233 3.16746C55.8851 4.03848 56.0303 5.04282 55.834 6.00897L46.2927 52.2752L72.1361 53.8888C75.0812 54.0727 76.6136 55.5728 74.7777 58.9321C47.9153 99.6819 32.3123 123.469 27.8215 130.284C27.0024 131.564 25.5529 132.286 24.0068 132.19Z"
                      fill="currentColor"
                      className="text-white"
                  />
                </svg>
              </div>
              <h1 className="font-semibold text-4xl leading-3">gztlr<span className="leading-3 -ml-1 text-sm text-white/80">.com</span></h1>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-4">
          <p className="text-xs text-center text-white/80 group/logo animate-pulse">
            Yakında.
          </p>
        </div>
      </div>

      <div className="mb-32 grid gap-x-2 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left justify-center items-center">
        <a href="https://ucoyun.com"
           className="group rounded-lg border border-transparent px-3 py-2 col-start-2 transition-colors hover:border-gray-300 hover:border-white/30 hover:bg-white/20"
           target="_blank"
           rel="external">
          <h2 className={`mb-3 font-semibold text-sm`}>
            Ucoyun{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] opacity-50 text-xs`}>
            Oyun Fiyatları
          </p>
        </a>

        <a href="https://remzikilinc.com/"
           className="group rounded-lg border border-transparent px-3 py-2 transition-colors hover:border-gray-300 hover:border-white/30 hover:bg-white/20"
           target="_blank"
           rel="external">
          <h2 className={`mb-3 font-semibold text-sm`}>
            Remzi Kılınç{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] opacity-50 text-xs`}>
            Developer
          </p>
        </a>

      </div>
    </main>
  );
}

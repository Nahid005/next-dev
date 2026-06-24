"use client"

import useWindowSize from "../_hooks/useWindowSize";

export default function Home() {
  const { windowSize } = useWindowSize();

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-7xl">Learn about TypeScript</h1>
        {/* Optional: display window size safely */}
        {windowSize !== undefined && <p>Window width: {windowSize}px</p>}
      </main>
    </div>
  );
}
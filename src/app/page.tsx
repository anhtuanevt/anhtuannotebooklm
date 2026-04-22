import Link from "next/link";

const TITLE_LETTER_COLORS: Record<number, string> = {
  0: "#f472b6",
  1: "#fb923c",
  2: "#facc15",
  3: "#4ade80",
  4: "#38bdf8",
  5: "#a78bfa",
  6: "#f472b6",
};

export default function Home() {
  return (
    <div
      className="min-h-screen flex items-center justify-center py-8 sm:py-16 px-3 sm:px-4"
      style={{
        background:
          "linear-gradient(160deg, #c9a87c 0%, #b8894e 45%, #c4955e 75%, #d0a870 100%)",
      }}
    >
      {/* Notebook */}
      <div
        className="flex shadow-2xl w-full"
        style={{ maxWidth: 860, borderRadius: 4 }}
      >
        {/* Spine */}
        <div
          className="w-7 sm:w-11 flex-shrink-0 rounded-l flex flex-col items-center justify-around py-3 relative overflow-visible"
          style={{ background: "#18182b" }}
        >
          {Array.from({ length: 18 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: "calc(100% - 6px)",
                height: 9,
                borderRadius: 999,
                background: "#2d2d4e",
                border: "1px solid #3d3d5e",
                flexShrink: 0,
              }}
            />
          ))}
          {/* Bookmarks */}
          <div
            className="absolute w-4 sm:w-5 h-12 sm:h-14 rounded-b-sm"
            style={{ bottom: -6, left: 4, background: "#f9a8d4", zIndex: 10 }}
          />
          <div
            className="absolute w-4 sm:w-5 h-9 sm:h-10 rounded-b-sm"
            style={{ bottom: -6, right: 4, background: "#86efac", zIndex: 10 }}
          />
        </div>

        {/* Page */}
        <div className="flex-1 jb-page rounded-r p-4 sm:p-7 md:p-10 relative overflow-hidden">
          {/* ── Title ── */}
          <div className="text-center mb-4 sm:mb-7">
            <div className="flex items-center justify-center gap-1 mb-1 text-sm sm:text-base">
              <span style={{ color: "#f9a8d4" }}>✿</span>
              <span style={{ color: "#fbbf24", fontSize: 10 }}>✦</span>
              <span style={{ color: "#93c5fd", fontSize: 10 }}>✦</span>
              <span style={{ color: "#fda4af", fontSize: 10 }}>♥</span>
              <span style={{ color: "#fbbf24", fontSize: 10 }}>✦</span>
              <span style={{ color: "#d8b4fe", fontSize: 10 }}>✦</span>
              <span style={{ color: "#6ee7b7" }}>✿</span>
            </div>

            <h1
              className="font-bold tracking-widest leading-none mb-2 sm:mb-3"
              style={{
                fontSize: "clamp(1.7rem, 5vw, 3.2rem)",
                fontFamily: "var(--font-kalam)",
              }}
            >
              {"ABOUT ME".split("").map((letter, i) => {
                if (letter === " ") return <span key={i}>&nbsp;</span>;
                const ci = i > 5 ? i - 1 : i;
                return (
                  <span key={i} style={{ color: TITLE_LETTER_COLORS[ci] }}>
                    {letter}
                  </span>
                );
              })}
            </h1>

            <div className="flex items-center justify-center gap-2">
              <div className="h-px bg-gray-300 w-12 sm:w-16" />
              <span style={{ color: "#fda4af", fontSize: 10 }}>♥ ♥</span>
              <div className="h-px bg-gray-300 w-12 sm:w-16" />
            </div>
          </div>

          {/* ── Two columns (stacks on mobile) ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 text-[0.88rem] sm:text-[0.9rem]">
            {/* ─ Left column ─ */}
            <div className="pb-5 sm:pb-0 sm:pr-7 border-b sm:border-b-0 sm:border-r border-dashed border-gray-300">
              <div className="jb-banner jb-banner-pink">
                <span>♥</span> My Journals
              </div>

              <div className="jb-tag jb-tag-blue">🐻 Warrius Plus</div>
              <ul className="mb-4 ml-3 space-y-1.5">
                <li className="flex items-start gap-1 text-gray-700">
                  <span style={{ color: "#4ade80", fontSize: 10, marginTop: 3 }}>♥</span>
                  <Link href="/blog" className="hover:underline">
                    Hành trình Make Money Online
                  </Link>
                </li>
              </ul>

              <div className="jb-tag jb-tag-green">🐕 English</div>
              <ul className="mb-4 ml-3 space-y-1.5">
                <li className="flex items-start gap-1 text-gray-700">
                  <span style={{ color: "#fbbf24", fontSize: 10, marginTop: 3 }}>♥</span>
                  <Link href="/english" className="hover:underline">
                    Hành trình học tiếng Anh
                  </Link>
                </li>
              </ul>

              <div className="jb-tag jb-tag-amber">🐱 German</div>
              <ul className="mb-5 ml-3 space-y-1.5">
                <li className="flex items-start gap-1 text-gray-700">
                  <span style={{ color: "#a78bfa", fontSize: 10, marginTop: 3 }}>♥</span>
                  <Link href="/german" className="hover:underline">
                    Hành trình học tiếng Đức
                  </Link>
                </li>
              </ul>

              <div className="jb-banner jb-banner-purple">
                <span style={{ color: "#fbbf24" }}>✦</span> My Small Goals
              </div>
              <ul className="space-y-2">
                {[
                  "Learn something new every week.",
                  "Be consistent in journaling.",
                  "Improve my English & German.",
                ].map((g) => (
                  <li key={g} className="flex items-start gap-2 text-gray-700">
                    <span style={{ color: "#6b7280", marginTop: 1 }}>☑</span>
                    {g}
                  </li>
                ))}
              </ul>
            </div>

            {/* ─ Right column ─ */}
            <div className="pt-5 sm:pt-0 sm:pl-7">
              <div className="jb-banner jb-banner-orange">
                <span>📚</span> My Interests
              </div>
              <ul className="mb-5 space-y-2">
                {[
                  "Journaling",
                  "Learning languages",
                  "Making money online",
                  "Reading & watching stories",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-700">
                    <span style={{ color: "#fbbf24" }}>☆</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="jb-banner jb-banner-teal">
                <span style={{ color: "#fbbf24" }}>✦</span> My Qualities
              </div>
              <ul className="mb-5 space-y-2">
                {[
                  { label: "Curious 💡", desc: "I like learning new things." },
                  { label: "Creative 🎨", desc: "I enjoy journaling & writing." },
                  { label: "Thoughtful ♥", desc: "I like helping & being kind." },
                ].map(({ label, desc }) => (
                  <li key={label} className="text-gray-700">
                    <span className="font-semibold" style={{ color: "#0f766e" }}>{label}</span>
                    <span className="text-gray-500"> — {desc}</span>
                  </li>
                ))}
              </ul>

              <div className="jb-banner jb-banner-pink">
                <span>♥</span> A Quote I Like
              </div>
              <div className="jb-quote-bubble">
                <p
                  className="font-medium text-gray-700 leading-relaxed"
                  style={{ fontFamily: "var(--font-kalam)", fontSize: "clamp(0.85rem, 2vw, 1rem)" }}
                >
                  &ldquo;Stay curious and<br />keep learning.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* ── Open Shelf CTA ── */}
          <div className="flex flex-col items-center gap-2 mt-6 sm:mt-8">
            <div className="flex justify-center gap-2 sm:gap-3 text-base sm:text-lg select-none">
              <span style={{ color: "#f9a8d4" }}>✿</span>
              <span style={{ color: "#fbbf24", fontSize: 12 }}>✦</span>
              <span style={{ color: "#fda4af", fontSize: 12 }}>♥</span>
              <span style={{ color: "#fbbf24", fontSize: 12 }}>✦</span>
              <span>📖</span>
              <span style={{ color: "#fbbf24", fontSize: 12 }}>✦</span>
              <span style={{ color: "#fda4af", fontSize: 12 }}>♥</span>
              <span style={{ color: "#fbbf24", fontSize: 12 }}>✦</span>
              <span>🌱</span>
            </div>
            <Link
              href="/notebooks"
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 transition-transform duration-150 hover:-translate-y-0.5"
              style={{
                background: "#fde68a",
                border: "2px solid #d97706",
                borderRadius: 6,
                fontFamily: "var(--font-kalam)",
                fontWeight: 700,
                fontSize: "clamp(0.75rem, 2vw, 0.85rem)",
                color: "#78350f",
                boxShadow: "2px 3px 0 #92400e",
                transform: "rotate(-0.8deg)",
              }}
            >
              📚 Mở kệ sách của tôi →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

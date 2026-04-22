import Link from "next/link";

// Colors cycle through rainbow for each non-space letter in "ABOUT ME"
const TITLE_LETTER_COLORS: Record<number, string> = {
  0: "#f472b6", // A
  1: "#fb923c", // B
  2: "#facc15", // O
  3: "#4ade80", // U
  4: "#38bdf8", // T
  5: "#a78bfa", // M
  6: "#f472b6", // E
};

export default function Home() {
  return (
    <div
      className="min-h-screen flex items-center justify-center py-16 px-4"
      style={{
        background:
          "linear-gradient(160deg, #c9a87c 0%, #b8894e 45%, #c4955e 75%, #d0a870 100%)",
      }}
    >
      {/* Notebook */}
      <div
        className="flex shadow-2xl"
        style={{ maxWidth: 860, width: "100%", borderRadius: 4 }}
      >
        {/* Spine — stretches to match page height, rings distribute evenly */}
        <div
          className="w-11 flex-shrink-0 rounded-l flex flex-col items-center justify-around py-3 relative overflow-visible"
          style={{ background: "#18182b" }}
        >
          {Array.from({ length: 18 }).map((_, i) => (
            <div
              key={i}
              style={{
                width: "calc(100% - 8px)",
                height: 10,
                borderRadius: 999,
                background: "#2d2d4e",
                border: "1px solid #3d3d5e",
                flexShrink: 0,
              }}
            />
          ))}
          {/* Bookmarks */}
          <div
            className="absolute w-5 h-14 rounded-b-sm"
            style={{ bottom: -6, left: 6, background: "#f9a8d4", zIndex: 10 }}
          />
          <div
            className="absolute w-5 h-10 rounded-b-sm"
            style={{ bottom: -6, right: 6, background: "#86efac", zIndex: 10 }}
          />
        </div>

        {/* Page */}
        <div className="flex-1 jb-page rounded-r p-10 relative overflow-hidden">
          {/* ── Title ── */}
          <div className="text-center mb-7">
            <div className="flex items-center justify-center gap-1 mb-1 text-base">
              <span style={{ color: "#f9a8d4" }}>✿</span>
              <span style={{ color: "#fbbf24", fontSize: 11 }}>✦</span>
              <span style={{ color: "#93c5fd", fontSize: 11 }}>✦</span>
              <span style={{ color: "#fda4af", fontSize: 11 }}>♥</span>
              <span style={{ color: "#fbbf24", fontSize: 11 }}>✦</span>
              <span style={{ color: "#d8b4fe", fontSize: 11 }}>✦</span>
              <span style={{ color: "#6ee7b7" }}>✿</span>
            </div>

            <h1
              className="font-bold tracking-widest leading-none mb-3"
              style={{
                fontSize: "3.2rem",
                fontFamily: "var(--font-kalam)",
              }}
            >
              {"ABOUT ME".split("").map((letter, i) => {
                if (letter === " ") return <span key={i}>&nbsp;</span>;
                // Map raw index → color index skipping the space at position 5
                const ci = i > 5 ? i - 1 : i;
                return (
                  <span key={i} style={{ color: TITLE_LETTER_COLORS[ci] }}>
                    {letter}
                  </span>
                );
              })}
            </h1>

            <div className="flex items-center justify-center gap-2">
              <div className="h-px bg-gray-300 w-16" />
              <span style={{ color: "#fda4af", fontSize: 11 }}>♥ ♥</span>
              <div className="h-px bg-gray-300 w-16" />
            </div>
          </div>

          {/* ── Two columns ── */}
          <div className="grid grid-cols-2 gap-0 text-[0.9rem]">
            {/* ─ Left column ─ */}
            <div className="pr-7 border-r border-dashed border-gray-300">
              {/* My Journals banner */}
              <div className="jb-banner jb-banner-pink">
                <span>♥</span> My Journals
              </div>

              {/* Warrius Plus */}
              <div className="jb-tag jb-tag-blue">🐻 Warrius Plus</div>
              <ul className="mb-5 ml-3 space-y-2">
                <li className="flex items-start gap-1 text-sm text-gray-700">
                  <span style={{ color: "#4ade80", fontSize: 11, marginTop: 3 }}>♥</span>
                  <Link href="/blog" className="hover:underline">
                    Hành trình Make Money Online
                  </Link>
                </li>
              </ul>

              {/* English */}
              <div className="jb-tag jb-tag-green">🐕 English</div>
              <ul className="mb-5 ml-3 space-y-2">
                <li className="flex items-start gap-1 text-sm text-gray-700">
                  <span style={{ color: "#fbbf24", fontSize: 11, marginTop: 3 }}>♥</span>
                  <Link href="/english" className="hover:underline">
                    Hành trình học tiếng Anh
                  </Link>
                </li>
              </ul>

              {/* German */}
              <div className="jb-tag jb-tag-amber">🐱 German</div>
              <ul className="mb-6 ml-3 space-y-2">
                <li className="flex items-start gap-1 text-sm text-gray-700">
                  <span style={{ color: "#a78bfa", fontSize: 11, marginTop: 3 }}>♥</span>
                  <Link href="/german" className="hover:underline">
                    Hành trình học tiếng Đức
                  </Link>
                </li>
              </ul>

              {/* My Goals */}
              <div className="jb-banner jb-banner-purple">
                <span style={{ color: "#fbbf24" }}>✦</span> My Small Goals
              </div>
              <ul className="space-y-3">
                {[
                  "Learn something new every week.",
                  "Be consistent in journaling.",
                  "Improve my English & German.",
                ].map((g) => (
                  <li key={g} className="flex items-start gap-2 text-sm text-gray-700">
                    <span style={{ color: "#6b7280", marginTop: 1 }}>☑</span>
                    {g}
                  </li>
                ))}
              </ul>
            </div>

            {/* ─ Right column ─ */}
            <div className="pl-7">
              {/* My Interests */}
              <div className="jb-banner jb-banner-orange">
                <span>📚</span> My Interests
              </div>
              <ul className="mb-6 space-y-2.5">
                {[
                  "Journaling",
                  "Learning languages",
                  "Making money online",
                  "Reading & watching stories",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <span style={{ color: "#fbbf24" }}>☆</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* My Qualities */}
              <div className="jb-banner jb-banner-teal">
                <span style={{ color: "#fbbf24" }}>✦</span> My Qualities
              </div>
              <ul className="mb-6 space-y-2.5">
                {[
                  { label: "Curious 💡", desc: "I like learning new things." },
                  { label: "Creative 🎨", desc: "I enjoy journaling & writing." },
                  { label: "Thoughtful ♥", desc: "I like helping & being kind." },
                ].map(({ label, desc }) => (
                  <li key={label} className="text-sm text-gray-700">
                    <span className="font-semibold" style={{ color: "#0f766e" }}>{label}</span>
                    <span className="text-gray-500"> — {desc}</span>
                  </li>
                ))}
              </ul>

              {/* A Quote I Like */}
              <div className="jb-banner jb-banner-pink">
                <span>♥</span> A Quote I Like
              </div>
              <div className="jb-quote-bubble">
                <p
                  className="text-base font-medium text-gray-700 leading-relaxed"
                  style={{ fontFamily: "var(--font-kalam)" }}
                >
                  &ldquo;Stay curious and<br />keep learning.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* ── Open Shelf CTA ── */}
          <div className="flex flex-col items-center gap-3 mt-8">
            <div className="flex justify-center gap-3 text-lg select-none">
              <span style={{ color: "#f9a8d4" }}>✿</span>
              <span style={{ color: "#fbbf24", fontSize: 13 }}>✦</span>
              <span style={{ color: "#fda4af", fontSize: 13 }}>♥</span>
              <span style={{ color: "#fbbf24", fontSize: 13 }}>✦</span>
              <span>📖</span>
              <span style={{ color: "#fbbf24", fontSize: 13 }}>✦</span>
              <span style={{ color: "#fda4af", fontSize: 13 }}>♥</span>
              <span style={{ color: "#fbbf24", fontSize: 13 }}>✦</span>
              <span>🌱</span>
            </div>
            <Link
              href="/notebooks"
              className="group inline-flex items-center gap-2 px-5 py-2 transition-transform duration-150 hover:-translate-y-0.5"
              style={{
                background: "#fde68a",
                border: "2px solid #d97706",
                borderRadius: 6,
                fontFamily: "var(--font-kalam)",
                fontWeight: 700,
                fontSize: "0.85rem",
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

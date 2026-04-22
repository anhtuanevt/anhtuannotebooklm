import Link from "next/link";

const NOTEBOOKS = [
  {
    href: "/blog",
    emoji: "🐻",
    title: "Warrius Plus",
    subtitle: "Make Money Online",
    cover: "#bfdbfe",
    stripe: "#3b82f6",
    accent: "#fbbf24",
    rotation: -2,
  },
  {
    href: "/english",
    emoji: "🐕",
    title: "English",
    subtitle: "Học tiếng Anh",
    cover: "#bbf7d0",
    stripe: "#22c55e",
    accent: "#f472b6",
    rotation: 1,
  },
  {
    href: "/german",
    emoji: "🐱",
    title: "German",
    subtitle: "Học tiếng Đức",
    cover: "#fef08a",
    stripe: "#eab308",
    accent: "#a78bfa",
    rotation: -1,
  },
];

const SPIRAL_COUNT = 10;

export default function NotebooksPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center py-10 sm:py-16 px-3 sm:px-4"
      style={{
        background:
          "linear-gradient(160deg, #c9a87c 0%, #b8894e 45%, #c4955e 75%, #d0a870 100%)",
      }}
    >
      {/* Back link */}
      <Link
        href="/"
        className="mb-6 text-sm font-semibold opacity-80 hover:opacity-100 transition-opacity"
        style={{ color: "#fffef0", fontFamily: "var(--font-patrick-hand)" }}
      >
        ← About Me
      </Link>

      {/* Page title */}
      <div className="text-center mb-8 sm:mb-10">
        <h1
          className="font-bold mb-1"
          style={{
            fontSize: "clamp(1.6rem, 5vw, 2.5rem)",
            fontFamily: "var(--font-kalam)",
            color: "#fffef0",
            textShadow: "2px 3px 0 rgba(0,0,0,0.18)",
          }}
        >
          📚 My Notebooks
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.72)",
            fontFamily: "var(--font-patrick-hand)",
            fontSize: "0.88rem",
          }}
        >
          Chọn một cuốn để khám phá ✦
        </p>
      </div>

      {/* ── Bookshelf — horizontally scrollable on mobile ── */}
      <div className="w-full" style={{ maxWidth: 640 }}>
        {/* Scroll wrapper: extra top padding so sticky-note label isn't clipped */}
        <div className="overflow-x-auto pb-2" style={{ paddingTop: 28 }}>
          <div style={{ minWidth: 500 }}>
            {/* Shelf unit frame */}
            <div
              className="relative rounded-lg px-6 sm:px-10 pt-10 pb-0"
              style={{
                background: "linear-gradient(180deg, #c5a060 0%, #b08040 100%)",
                border: "3px solid #8b6230",
                boxShadow:
                  "inset 0 2px 10px rgba(0,0,0,0.2), 0 12px 40px rgba(0,0,0,0.4)",
              }}
            >
              {/* Sticky-note shelf label */}
              <div
                className="absolute -top-5 left-1/2 px-5 py-1 rounded text-sm font-bold"
                style={{
                  background: "#fde68a",
                  border: "2px solid #d97706",
                  fontFamily: "var(--font-kalam)",
                  color: "#78350f",
                  transform: "translateX(-50%) rotate(-1.2deg)",
                  boxShadow: "2px 3px 6px rgba(0,0,0,0.18)",
                  whiteSpace: "nowrap",
                }}
              >
                ✦ Kệ sách của tôi ✦
              </div>

              {/* ── Books row ── */}
              <div className="flex items-end justify-center gap-4 sm:gap-5">
                {NOTEBOOKS.map((nb) => (
                  <Link
                    key={nb.href}
                    href={nb.href}
                    className="group"
                    style={{ display: "block" }}
                  >
                    <div
                      className="transition-transform duration-200 ease-out group-hover:-translate-y-4"
                      style={{
                        transform: `rotate(${nb.rotation}deg)`,
                        transformOrigin: "bottom center",
                      }}
                    >
                      <div className="flex">
                        {/* Spiral binding */}
                        <div className="flex flex-col items-center justify-around py-4 pr-1">
                          {Array.from({ length: SPIRAL_COUNT }).map((_, i) => (
                            <div
                              key={i}
                              style={{
                                width: 8,
                                height: 8,
                                borderRadius: "50%",
                                background: "#e2e8f0",
                                border: "1.5px solid #94a3b8",
                                boxShadow: "inset 0 1px 2px rgba(0,0,0,0.25)",
                                margin: "3px 0",
                              }}
                            />
                          ))}
                        </div>

                        {/* Book cover */}
                        <div
                          style={{
                            width: 120,
                            height: 178,
                            background: nb.cover,
                            borderRadius: "2px 7px 7px 2px",
                            border: "2px solid rgba(0,0,0,0.12)",
                            boxShadow:
                              "4px 4px 10px rgba(0,0,0,0.28), inset 0 0 0 1px rgba(255,255,255,0.45)",
                            position: "relative",
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "12px 10px",
                            fontFamily: "var(--font-kalam)",
                          }}
                        >
                          {/* Ruled lines */}
                          <div
                            style={{
                              position: "absolute",
                              inset: 0,
                              backgroundImage:
                                "repeating-linear-gradient(transparent, transparent 18px, rgba(0,0,0,0.055) 18px, rgba(0,0,0,0.055) 19px)",
                            }}
                          />
                          {/* Colour stripe */}
                          <div
                            style={{
                              position: "absolute",
                              left: 0,
                              top: 0,
                              bottom: 0,
                              width: 7,
                              background: nb.stripe,
                              opacity: 0.6,
                            }}
                          />
                          {/* Tab bookmark */}
                          <div
                            style={{
                              position: "absolute",
                              top: 14,
                              right: -5,
                              width: 13,
                              height: 28,
                              background: nb.accent,
                              borderRadius: "2px 5px 5px 2px",
                              border: "1px solid rgba(0,0,0,0.15)",
                            }}
                          />

                          {/* Content */}
                          <div style={{ position: "relative", textAlign: "center", zIndex: 1 }}>
                            <div style={{ fontSize: "2.2rem", lineHeight: 1, marginBottom: 7 }}>
                              {nb.emoji}
                            </div>
                            <div
                              style={{
                                fontWeight: 700,
                                fontSize: "0.95rem",
                                color: "#1e293b",
                                lineHeight: 1.25,
                                marginBottom: 4,
                              }}
                            >
                              {nb.title}
                            </div>
                            <div
                              style={{
                                fontSize: "0.7rem",
                                color: "#475569",
                                lineHeight: 1.4,
                                fontFamily: "var(--font-patrick-hand)",
                              }}
                            >
                              {nb.subtitle}
                            </div>
                            <div
                              style={{
                                marginTop: 9,
                                fontSize: "0.7rem",
                                color: nb.stripe,
                                letterSpacing: 4,
                              }}
                            >
                              ✦ ♥ ☆
                            </div>
                          </div>

                          <div
                            className="absolute bottom-2 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                            style={{
                              fontSize: "0.6rem",
                              color: "#64748b",
                              fontFamily: "var(--font-patrick-hand)",
                            }}
                          >
                            mở →
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}

                {/* Plant decoration */}
                <div className="flex flex-col items-center pb-1" style={{ marginLeft: 4 }}>
                  <span style={{ fontSize: "1.8rem" }}>🌱</span>
                </div>
              </div>

              {/* Shelf plank */}
              <div
                style={{
                  marginTop: 6,
                  height: 18,
                  background:
                    "linear-gradient(180deg, #d4a860 0%, #a07840 45%, #8b6230 100%)",
                  borderRadius: 3,
                  border: "2px solid #7a5520",
                  boxShadow:
                    "0 5px 10px rgba(0,0,0,0.35), inset 0 2px 4px rgba(255,255,255,0.18)",
                }}
              />

              {/* Shelf legs */}
              <div className="flex justify-between">
                {[0, 1].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: 20,
                      height: 32,
                      background:
                        i === 0
                          ? "linear-gradient(90deg, #8b6230, #a07840)"
                          : "linear-gradient(90deg, #a07840, #8b6230)",
                      borderRadius: "0 0 4px 4px",
                      border: "2px solid #7a5520",
                      borderTop: "none",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom hint */}
      <p
        className="mt-6 sm:mt-8 text-sm"
        style={{
          color: "rgba(255,255,255,0.6)",
          fontFamily: "var(--font-patrick-hand)",
        }}
      >
        ✿ Click vào notebook để mở ✿
      </p>
    </div>
  );
}

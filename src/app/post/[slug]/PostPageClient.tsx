"use client";

import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Post } from "@/lib/posts";

interface PostPageClientProps {
  post: Post;
  prevPost: Post | null;
  nextPost: Post | null;
}

const RING_TOPS = [14, 36, 58, 80, 102, 124, 176, 198, 220, 242];

export default function PostPageClient({ post, prevPost, nextPost }: PostPageClientProps) {
  return (
    <div
      className="min-h-screen py-8 sm:py-12 px-3 sm:px-4"
      style={{
        background:
          "linear-gradient(160deg, #c9a87c 0%, #b8894e 45%, #c4955e 75%, #d0a870 100%)",
      }}
    >
      <div className="max-w-2xl mx-auto">
        <Link
          href="/blog"
          className="inline-block mb-5 text-sm font-semibold opacity-80 hover:opacity-100 transition-opacity"
          style={{ color: "#fffef0", fontFamily: "var(--font-patrick-hand)" }}
        >
          ← Warrius Plus
        </Link>

        {/* ── Notebook page frame ── */}
        <div className="flex shadow-2xl" style={{ borderRadius: 4 }}>
          {/* Spine */}
          <div
            className="w-7 sm:w-10 flex-shrink-0 rounded-l relative overflow-visible"
            style={{ background: "#2563eb" }}
          >
            {RING_TOPS.map((top, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  left: 3,
                  right: 3,
                  top,
                  height: 9,
                  borderRadius: 999,
                  background: "#1e3a8a",
                  border: "1px solid #1d4ed8",
                }}
              />
            ))}
            <div
              className="absolute w-4 sm:w-5 h-11 sm:h-12 rounded-b-sm"
              style={{ bottom: -4, left: 3, background: "#fda4af", zIndex: 10 }}
            />
          </div>

          {/* Page — ruled lines */}
          <div
            className="flex-1 rounded-r relative overflow-hidden"
            style={{
              background: "#fffef0",
              backgroundImage:
                "repeating-linear-gradient(transparent, transparent 27px, #ddd4bc 27px, #ddd4bc 28px)",
            }}
          >
            {/* Margin line — responsive left position */}
            <div
              className="absolute top-0 bottom-0 left-[34px] sm:left-[52px] z-0"
              style={{ borderLeft: "1.5px solid #ff999870" }}
            />

            {/* Content */}
            <div className="relative p-4 pl-10 sm:p-6 sm:pl-16" style={{ zIndex: 1 }}>
              {/* Header */}
              <header className="mb-5">
                <div
                  className="inline-flex items-center gap-1 mb-3"
                  style={{
                    background: "#dbeafe",
                    border: "1.5px solid #93c5fd",
                    borderRadius: 999,
                    padding: "2px 10px",
                    fontFamily: "var(--font-patrick-hand)",
                    fontSize: "0.72rem",
                    color: "#1e40af",
                  }}
                >
                  📅{" "}
                  {new Date(post.date).toLocaleDateString("vi-VN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>

                <h1
                  style={{
                    fontFamily: "var(--font-kalam)",
                    fontSize: "clamp(1.25rem, 4vw, 1.9rem)",
                    fontWeight: 700,
                    color: "#1e293b",
                    lineHeight: 1.25,
                    marginBottom: 10,
                  }}
                >
                  {post.title}
                </h1>

                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: "0.68rem",
                          padding: "2px 9px",
                          background: "#f3e8ff",
                          color: "#7c3aed",
                          border: "1px solid #c4b5fd",
                          borderRadius: 999,
                          fontFamily: "var(--font-patrick-hand)",
                        }}
                      >
                        ✦ {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <div className="h-px flex-1" style={{ background: "#bfdbfe" }} />
                  <span style={{ color: "#93c5fd", fontSize: 10 }}>✦ ♥ ✦</span>
                  <div className="h-px flex-1" style={{ background: "#bfdbfe" }} />
                </div>
              </header>

              {/* Article body */}
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h2: ({ children }) => (
                    <h2
                      style={{
                        fontFamily: "var(--font-kalam)",
                        fontSize: "clamp(1.1rem, 3vw, 1.4rem)",
                        fontWeight: 700,
                        color: "#1e40af",
                        marginTop: "1.6rem",
                        marginBottom: "0.5rem",
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <span style={{ color: "#fda4af" }}>♥</span> {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3
                      style={{
                        fontFamily: "var(--font-kalam)",
                        fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
                        fontWeight: 700,
                        color: "#0f766e",
                        marginTop: "1.2rem",
                        marginBottom: "0.4rem",
                      }}
                    >
                      ✦ {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p
                      style={{
                        fontFamily: "var(--font-patrick-hand)",
                        fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
                        lineHeight: 1.9,
                        color: "#334155",
                        marginBottom: "0.6rem",
                      }}
                    >
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul style={{ marginBottom: "0.75rem" }}>{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol style={{ marginLeft: "1.2rem", marginBottom: "0.75rem", listStyleType: "decimal" }}>
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li
                      style={{
                        fontFamily: "var(--font-patrick-hand)",
                        fontSize: "clamp(0.9rem, 2vw, 1rem)",
                        marginBottom: "0.3rem",
                        color: "#334155",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 7,
                      }}
                    >
                      <span style={{ color: "#3b82f6", marginTop: 3, flexShrink: 0 }}>♥</span>
                      <span>{children}</span>
                    </li>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote
                      style={{
                        borderLeft: "3px solid #93c5fd",
                        margin: "1rem 0",
                        fontFamily: "var(--font-kalam)",
                        fontSize: "clamp(0.9rem, 2vw, 1rem)",
                        fontStyle: "italic",
                        color: "#64748b",
                        background: "rgba(219,234,254,0.35)",
                        borderRadius: "0 10px 10px 0",
                        padding: "10px 14px",
                      }}
                    >
                      {children}
                    </blockquote>
                  ),
                  hr: () => (
                    <div className="flex items-center gap-2 my-5">
                      <div className="h-px flex-1" style={{ background: "#bfdbfe" }} />
                      <span style={{ color: "#93c5fd", fontSize: 10 }}>✦ ✦ ✦</span>
                      <div className="h-px flex-1" style={{ background: "#bfdbfe" }} />
                    </div>
                  ),
                  strong: ({ children }) => (
                    <strong style={{ fontWeight: 700, color: "#1e40af" }}>{children}</strong>
                  ),
                  code: ({ className, children }) => {
                    const isInline = !className;
                    return isInline ? (
                      <code
                        style={{
                          background: "#dbeafe",
                          color: "#1e40af",
                          padding: "1px 5px",
                          borderRadius: 4,
                          fontSize: "0.88em",
                          fontFamily: "monospace",
                        }}
                      >
                        {children}
                      </code>
                    ) : (
                      <code
                        style={{
                          display: "block",
                          background: "#f8fafc",
                          border: "1px solid #e2e8f0",
                          padding: "10px 14px",
                          borderRadius: 8,
                          overflowX: "auto",
                          fontSize: "0.86em",
                          color: "#334155",
                          fontFamily: "monospace",
                          marginBottom: "0.75rem",
                        }}
                      >
                        {children}
                      </code>
                    );
                  },
                }}
              >
                {post.content}
              </ReactMarkdown>

              {/* Footer deco */}
              <div className="flex items-center gap-2 mt-8">
                <div className="h-px flex-1" style={{ background: "#bfdbfe" }} />
                <span style={{ color: "#93c5fd" }}>✿ ✦ ♥ ✦ ✿</span>
                <div className="h-px flex-1" style={{ background: "#bfdbfe" }} />
              </div>
            </div>
          </div>
        </div>

        {/* Prev / Next */}
        <div className="flex justify-between mt-4 gap-3">
          {prevPost ? (
            <Link
              href={`/post/${prevPost.slug}`}
              className="hover:opacity-100 transition-opacity truncate"
              style={{
                fontFamily: "var(--font-kalam)",
                fontSize: "clamp(0.72rem, 2vw, 0.8rem)",
                fontWeight: 700,
                color: "#fffef0",
                opacity: 0.75,
                maxWidth: "45%",
              }}
            >
              ← {prevPost.title}
            </Link>
          ) : (
            <div />
          )}
          {nextPost && (
            <Link
              href={`/post/${nextPost.slug}`}
              className="hover:opacity-100 transition-opacity truncate text-right"
              style={{
                fontFamily: "var(--font-kalam)",
                fontSize: "clamp(0.72rem, 2vw, 0.8rem)",
                fontWeight: 700,
                color: "#fffef0",
                opacity: 0.75,
                maxWidth: "45%",
              }}
            >
              {nextPost.title} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

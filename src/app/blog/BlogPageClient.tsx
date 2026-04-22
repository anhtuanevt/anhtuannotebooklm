"use client";

import { useState } from "react";
import Link from "next/link";
import GraphView from "@/components/GraphView";
import { Post, GraphData } from "@/lib/posts";

interface BlogPageClientProps {
  posts: Post[];
  graphData: GraphData;
}

const RING_TOPS = [14, 36, 58, 80, 102, 124, 176, 198, 220, 242, 264, 286, 338, 360, 382, 404];

export default function BlogPageClient({ posts, graphData }: BlogPageClientProps) {
  const [view, setView] = useState<"list" | "graph">("list");

  return (
    <div
      className="min-h-screen py-8 sm:py-12 px-3 sm:px-4"
      style={{
        background:
          "linear-gradient(160deg, #c9a87c 0%, #b8894e 45%, #c4955e 75%, #d0a870 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto">
        <Link
          href="/notebooks"
          className="inline-block mb-5 text-sm font-semibold opacity-80 hover:opacity-100 transition-opacity"
          style={{ color: "#fffef0", fontFamily: "var(--font-patrick-hand)" }}
        >
          ← Kệ sách
        </Link>

        {/* ── Notebook frame ── */}
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
            <div
              className="absolute w-4 sm:w-5 h-7 sm:h-8 rounded-b-sm"
              style={{ bottom: -4, right: 3, background: "#86efac", zIndex: 10 }}
            />
          </div>

          {/* Page */}
          <div
            className="flex-1 rounded-r p-4 sm:p-7 md:p-8 relative"
            style={{
              background: "#fffef0",
              backgroundImage:
                "radial-gradient(circle, #c8b88a 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          >
            {/* Header */}
            <div className="text-center mb-5">
              <div className="flex items-center justify-center gap-1 mb-1 text-sm select-none">
                <span style={{ color: "#93c5fd" }}>✿</span>
                <span style={{ color: "#fbbf24", fontSize: 10 }}>✦</span>
                <span style={{ color: "#fda4af", fontSize: 10 }}>♥</span>
                <span style={{ color: "#fbbf24", fontSize: 10 }}>✦</span>
                <span style={{ color: "#6ee7b7" }}>✿</span>
              </div>
              <h1
                className="font-bold leading-none mb-1"
                style={{
                  fontSize: "clamp(1.4rem, 4vw, 2.2rem)",
                  fontFamily: "var(--font-kalam)",
                  color: "#1e40af",
                }}
              >
                🐻 Warrius Plus
              </h1>
              <p
                style={{
                  fontFamily: "var(--font-patrick-hand)",
                  color: "#64748b",
                  fontSize: "0.85rem",
                }}
              >
                Hành trình Make Money Online
              </p>
              <div className="flex items-center justify-center gap-2 mt-2">
                <div className="h-px flex-1 max-w-[50px] sm:max-w-[60px]" style={{ background: "#bfdbfe" }} />
                <span style={{ color: "#93c5fd", fontSize: 10 }}>✦ ♥ ✦</span>
                <div className="h-px flex-1 max-w-[50px] sm:max-w-[60px]" style={{ background: "#bfdbfe" }} />
              </div>
            </div>

            {/* View tabs */}
            <div className="flex justify-center gap-2 sm:gap-3 mb-5">
              {(["list", "graph"] as const).map((id) => (
                <button
                  key={id}
                  onClick={() => setView(id)}
                  style={{
                    fontFamily: "var(--font-kalam)",
                    fontWeight: 700,
                    fontSize: "clamp(0.72rem, 2vw, 0.8rem)",
                    padding: "3px 14px",
                    borderRadius: 999,
                    border: "2px solid",
                    transition: "all 0.15s",
                    cursor: "pointer",
                    borderColor: view === id ? "#3b82f6" : "#d1d5db",
                    background: view === id ? "#bfdbfe" : "transparent",
                    color: view === id ? "#1e40af" : "#9ca3af",
                    boxShadow: view === id ? "2px 2px 0 #93c5fd" : "none",
                  }}
                >
                  {id === "list" ? "📝 Danh sách" : "📊 Bản đồ"}
                </button>
              ))}
            </div>

            {/* Graph view */}
            {view === "graph" && (
              <div
                style={{
                  border: "2px dashed #bfdbfe",
                  borderRadius: 12,
                  padding: 8,
                  background: "rgba(255,255,255,0.4)",
                }}
              >
                <GraphView data={graphData} />
              </div>
            )}

            {/* List view */}
            {view === "list" && (
              <div className="space-y-3 sm:space-y-4">
                {posts.map((post) => (
                  <article
                    key={post.slug}
                    style={{
                      background: "rgba(255,255,255,0.6)",
                      border: "2px solid #e2e8f0",
                      borderLeft: "5px solid #3b82f6",
                      borderRadius: "4px 10px 10px 4px",
                      padding: "12px 14px",
                    }}
                  >
                    <div
                      className="inline-flex items-center gap-1 mb-2"
                      style={{
                        background: "#dbeafe",
                        border: "1.5px solid #93c5fd",
                        borderRadius: 999,
                        padding: "1px 9px",
                        fontFamily: "var(--font-patrick-hand)",
                        fontSize: "0.68rem",
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

                    <h2
                      style={{
                        fontFamily: "var(--font-kalam)",
                        fontSize: "clamp(1rem, 3vw, 1.15rem)",
                        fontWeight: 700,
                        color: "#1e293b",
                        marginBottom: 5,
                        lineHeight: 1.3,
                      }}
                    >
                      <Link href={`/post/${post.slug}`} className="hover:underline">
                        {post.title}
                      </Link>
                    </h2>

                    <p
                      style={{
                        fontFamily: "var(--font-patrick-hand)",
                        fontSize: "0.85rem",
                        color: "#475569",
                        lineHeight: 1.65,
                        marginBottom: 8,
                      }}
                    >
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-2 flex-wrap">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: "0.65rem",
                            padding: "2px 8px",
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
                      <Link
                        href={`/post/${post.slug}`}
                        className="hover:underline ml-auto"
                        style={{
                          fontFamily: "var(--font-kalam)",
                          fontWeight: 700,
                          fontSize: "0.8rem",
                          color: "#3b82f6",
                        }}
                      >
                        Đọc tiếp →
                      </Link>
                    </div>
                  </article>
                ))}

                {posts.length === 0 && (
                  <div
                    style={{
                      textAlign: "center",
                      padding: "40px 20px",
                      fontFamily: "var(--font-kalam)",
                      fontSize: "1rem",
                      color: "#94a3b8",
                      border: "2px dashed #dbeafe",
                      borderRadius: 12,
                    }}
                  >
                    ✦ Chưa có bài viết nào ✦
                  </div>
                )}
              </div>
            )}

            <div
              className="flex justify-center gap-2 mt-5 select-none"
              style={{ color: "#93c5fd", fontSize: 12 }}
            >
              ✿ ✦ ♥ ✦ ✿
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

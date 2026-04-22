"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

// Three.js–based graph — must be client-only (no SSR)
const ForceGraph3D = dynamic(() => import("react-force-graph-3d"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        height: 500,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fffef0",
        color: "#475569",
        fontFamily: "var(--font-patrick-hand)",
        fontSize: "0.9rem",
      }}
    >
      ✦ Đang tải bản đồ... ✦
    </div>
  ),
});

interface GraphNode {
  id: string;
  label: string;
  [key: string]: unknown;
}

interface GraphData {
  nodes: GraphNode[];
  links: { source: string; target: string }[];
}

export default function GraphView({ data }: { data: GraphData }) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const graphRef = useRef<any>(null);
  const [width, setWidth] = useState(0);

  // Measure container, re-measure on resize
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setWidth(el.clientWidth));
    ro.observe(el);
    setWidth(el.clientWidth);
    return () => ro.disconnect();
  }, []);

  // Turn on auto-rotation once the graph has rendered
  useEffect(() => {
    if (!width) return;
    const t = setTimeout(() => {
      const controls = graphRef.current?.controls?.();
      if (controls) {
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.6;
      }
    }, 800);
    return () => clearTimeout(t);
  }, [width]);

  const handleNodeClick = useCallback(
    (node: GraphNode) => {
      if (!String(node.id).startsWith("tag-")) {
        router.push(`/post/${node.id}`);
      }
    },
    [router]
  );

  const graphData = {
    nodes: data.nodes.map((n) => ({ ...n, name: n.label })),
    links: data.links,
  };

  const isTag = (id: unknown) => String(id).startsWith("tag-");

  return (
    <div
      ref={containerRef}
      style={{
        background: "#fffef0",
        borderRadius: 10,
        overflow: "hidden",
        position: "relative",
        width: "100%",
      }}
    >
      {width > 0 && (
        <ForceGraph3D
          ref={graphRef}
          graphData={graphData}
          width={width}
          height={500}
          backgroundColor="#fffef0"
          nodeId="id"
          nodeLabel="name"
          nodeColor={(node: any) =>
            isTag(node.id) ? "#c084fc" : "#60a5fa"
          }
          nodeVal={(node: any) => (isTag(node.id) ? 3 : 6)}
          nodeOpacity={0.92}
          linkColor={() => "rgba(100,116,139,0.25)"}
          linkWidth={0.6}
          linkDirectionalParticles={2}
          linkDirectionalParticleWidth={1.2}
          linkDirectionalParticleSpeed={0.005}
          linkDirectionalParticleColor={() => "rgba(100,116,139,0.6)"}
          onNodeClick={(node: any) => handleNodeClick(node)}
        />
      )}

      {/* Interaction hint */}
      <div
        style={{
          position: "absolute",
          bottom: 10,
          left: 0,
          right: 0,
          textAlign: "center",
          fontSize: "0.68rem",
          color: "rgba(100,116,139,0.8)",
          fontFamily: "var(--font-patrick-hand)",
          pointerEvents: "none",
          letterSpacing: "0.05em",
        }}
      >
        drag to rotate · scroll to zoom · click node to open
      </div>
    </div>
  );
}

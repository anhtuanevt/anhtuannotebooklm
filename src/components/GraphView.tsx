"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

interface Node {
  id: string;
  label: string;
}

interface Link {
  source: string;
  target: string;
}

interface GraphData {
  nodes: Node[];
  links: Link[];
}

interface GraphViewProps {
  data: GraphData;
}

interface NodeWithPosition extends Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface LinkWithNodes {
  source: NodeWithPosition;
  target: NodeWithPosition;
}

export default function GraphView({ data }: GraphViewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const router = useRouter();
  const hoveredNodeIdRef = useRef<string | null>(null);
  const nodePositionsRef = useRef<Map<string, { x: number; y: number }>>(
    new Map()
  );
  const animationRef = useRef<number | undefined>(undefined);
  const nodesRef = useRef<NodeWithPosition[]>([]);
  const linksRef = useRef<LinkWithNodes[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    nodesRef.current = data.nodes.map((node, i) => {
      const angle = (2 * Math.PI * i) / data.nodes.length;
      const radius = Math.min(width, height) / 3;
      return {
        ...node,
        x: width / 2 + radius * Math.cos(angle) + (Math.random() - 0.5) * 50,
        y: height / 2 + radius * Math.sin(angle) + (Math.random() - 0.5) * 50,
        vx: 0,
        vy: 0,
      };
    });

    linksRef.current = data.links.map((link) => ({
      source: nodesRef.current.find((n) => n.id === link.source)!,
      target: nodesRef.current.find((n) => n.id === link.target)!,
    }));

    const simulate = () => {
      const nodes = nodesRef.current;
      const links = linksRef.current;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy) || 1;
          const force = 500 / (dist * dist);
          const fx = (dx / dist) * force;
          const fy = (dy / dist) * force;
          nodes[i].vx -= fx;
          nodes[i].vy -= fy;
          nodes[j].vx += fx;
          nodes[j].vy += fy;
        }
      }

      links.forEach((link) => {
        const dx = link.target.x - link.source.x;
        const dy = link.target.y - link.source.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        const force = (dist - 80) * 0.01;
        const fx = (dx / dist) * force;
        const fy = (dy / dist) * force;
        link.source.vx += fx;
        link.source.vy += fy;
        link.target.vx -= fx;
        link.target.vy -= fy;
      });

      nodes.forEach((node) => {
        node.vx *= 0.9;
        node.vy *= 0.9;
        node.x += node.vx;
        node.y += node.vy;

        node.x = Math.max(50, Math.min(width - 50, node.x));
        node.y = Math.max(50, Math.min(height - 50, node.y));

        nodePositionsRef.current.set(node.id, { x: node.x, y: node.y });
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.strokeStyle = "#ccc";
      ctx.lineWidth = 1;
      linksRef.current.forEach((link) => {
        ctx.beginPath();
        ctx.moveTo(link.source.x, link.source.y);
        ctx.lineTo(link.target.x, link.target.y);
        ctx.stroke();
      });

      nodesRef.current.forEach((node) => {
        const isTag = node.id.startsWith("tag-");
        const isHovered = hoveredNodeIdRef.current === node.id;

        ctx.beginPath();
        if (isTag) {
          ctx.arc(node.x, node.y, isHovered ? 14 : 10, 0, 2 * Math.PI);
          ctx.fillStyle = isHovered ? "#9333ea" : "#a855f7";
        } else {
          ctx.arc(node.x, node.y, isHovered ? 18 : 14, 0, 2 * Math.PI);
          ctx.fillStyle = isHovered ? "#2563eb" : "#3b82f6";
        }
        ctx.fill();

        ctx.fillStyle = "#333";
        ctx.font = "11px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        const label = node.label.length > 15 ? node.label.slice(0, 15) + "..." : node.label;
        ctx.fillText(label, node.x, node.y + (isTag ? 20 : 24));
      });

      simulate();
      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [data]);

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;

    let foundId: string | null = null;
    nodePositionsRef.current.forEach((pos, id) => {
      const dx = x - pos.x;
      const dy = y - pos.y;
      if (Math.sqrt(dx * dx + dy * dy) < 20) {
        foundId = id;
      }
    });

    if (hoveredNodeIdRef.current !== foundId) {
      hoveredNodeIdRef.current = foundId;
      canvas.style.cursor = foundId ? "pointer" : "default";
    }
  };

  const handleClick = () => {
    const hoveredId = hoveredNodeIdRef.current;
    if (hoveredId && !hoveredId.startsWith("tag-")) {
      router.push(`/post/${hoveredId}`);
    }
  };

  return (
    <canvas
      ref={canvasRef}
      width={600}
      height={500}
      className="mx-auto"
      onMouseMove={handleMouseMove}
      onClick={handleClick}
    />
  );
}

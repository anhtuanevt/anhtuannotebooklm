# Warrius Plus - MMO Journey Blog

Blog cá nhân về hành trình Make Money Online.

## Cấu trúc

- `/` - Trang chủ
- `/blog` - Danh sách bài viết + Graph View
- `/post/[slug]` - Chi tiết bài viết

## Thêm bài viết mới

Tạo file `.md` trong thư mục `content/posts/`:

```markdown
---
title: "Tiêu đề bài viết"
date: "2026-04-22"
tags: ["affiliate", "warriorplus", "landing-page"]
---

Nội dung markdown ở đây...

## Heading 2

Nội dung...

- List item 1
- List item 2

> Quote

**Bold text**
```

### Tags

Tags dùng để tạo liên kết trong Graph View. Bài viết có cùng tag sẽ được kết nối với nhau.

## Lệnh

| Lệnh | Mô tả |
|------|-------|
| `npm run dev` | Chạy local (http://localhost:3000) |
| `npm run build` | Build production |
| `npm run deploy` | Deploy lên Vercel |

## Graph View

- Node màu xanh: Bài viết (click để đọc)
- Node màu tím: Tags
- Đường nối: Bài viết cùng tag

## Cấu trúc thư mục

```
blog/
├── content/
│   └── posts/          # Thêm file .md ở đây
│       └── example.md
├── src/
│   ├── app/
│   │   ├── page.tsx    # Trang chủ
│   │   ├── blog/       # Trang blog
│   │   └── post/       # Trang bài viết
│   ├── components/
│   │   └── GraphView.tsx
│   └── lib/
│       └── posts.ts    # Xử lý markdown
└── package.json
```

## Live URL

https://blog-lilac-theta-61.vercel.app

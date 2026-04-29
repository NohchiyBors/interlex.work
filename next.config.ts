import type { NextConfig } from "next";

const securityHeaders = [
  // Запрет встраивания сайта в iframe (clickjacking)
  { key: "X-Frame-Options", value: "DENY" },
  // Запрет MIME-sniffing
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Не передавать полный Referer на другие домены
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Отключить ненужные браузерные API
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  async headers() {
    return [
      // Security headers — все маршруты
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      // Бриф-файлы (.docx) — долгий кеш, меняются редко
      {
        source: "/briefs/:file*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      // Брендовые ресурсы (логотипы, иконки).
      // Имена файлов без версии — используем неделю вместо immutable,
      // чтобы обновление логотипа под тем же именем не застряло в кеше.
      {
        source: "/brand/:file*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
      },
    ];
  },
};

export default nextConfig;

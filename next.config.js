/** @type {import('next').NextConfig} */
const nextConfig = {
  // ─────────────── 정적 export 활성화 ───────────────
  output: 'export',
  // (이미지 최적화가 필요 없으면)
  images: { unoptimized: true },
};

module.exports = nextConfig;

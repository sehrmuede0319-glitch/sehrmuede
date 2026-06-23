// 部署 Cloudflare Worker 後，將 apiEndpoint 改成 Worker 網址。
// API 金鑰只能設為 Worker secret，絕對不要寫在這個公開檔案。
window.HEARTBREAK_CONFIG = {
  apiEndpoint: "https://heartbreak-ai.sehrmuede0319.workers.dev"
};

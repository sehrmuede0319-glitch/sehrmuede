# 青春心碎模擬器

直接開啟 `index.html` 即可遊玩，不需要安裝套件。

## 已實作

- 30 回合，從高二升高三暑假推進至畢業典禮
- A／B／C 預設選項與 D 自由輸入
- 隱藏友情狀態、回憶紀錄與多種遺憾結局文字
- LINE／Threads／Instagram 文字模擬手機介面
- 自動本機存檔、繼續遊戲、重新開始
- 手機與桌面響應式版面、場景動畫、粒子與簡單互動音效
- 可串接 Cloudflare Worker，由 Cloudflare Workers AI 即時生成每次互動後的劇情
- AI 服務異常時自動切回離線劇情，不中斷遊戲

## 說明

`config.js` 的 `apiEndpoint` 留空時，遊戲使用離線劇情。設定為已部署的 Worker 網址後，A／B／C 選項與 D 自由輸入都會將當前場景、行動與有限的遊戲狀態送到後端，由 AI 生成回應。

後端使用名為 `AI` 的 Workers AI binding，不需要 OpenAI API Key。後端程式位於 `worker/`。免費額度用完時，前端會自動切回離線劇情。

背景圖為本專案專用的 AI 生成原創素材。

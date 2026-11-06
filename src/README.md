# 个人看板 · 工作台 (Personal Workbench)

一个复古报刊风格的单文件个人工作台，整合了待办、习惯、记账、笔记、课表、投资与亲密健康等模块。本地优先、开箱即用，可选登录开启云端同步，并支持 PWA「添加到主屏幕」获得接近原生 App 的体验。

> 一份 HTML，所有功能与数据都在浏览器本地；登录后自动云端同步，多设备共享。

---

## ✨ 项目特性

- **单文件部署**：核心代码只有 `src/workbench-desktop.html` 一个文件（HTML + CSS + JS 全内嵌），丢到任意静态托管即可运行。
- **本地优先**：所有数据默认保存在浏览器 `localStorage` 与 `IndexedDB`，离线也能用。
- **云端可选**：内置 Supabase 接入，登录后数据自动云端同步，多设备无缝衔接。
- **PWA 可安装**：已内置 `manifest.webmanifest` 与 `service worker`，可离线使用并「添加到主屏幕」。
- **复古报刊美学**：墨色中性配色 + 衬线大标题 + kicker 小标签 + 栏线分隔，安静、克制、有质感。

---

## 🧩 功能模块

导航整合为 **7 个模块**（其中「习惯打卡」「笔记」「投资看板」为分组，内含子标签）：

| 模块 | 子标签 | 说明 |
| --- | --- | --- |
| 📋 **今日待办** | — | 今日任务清单，P0/P1/P2 优先级；截止日期/逾期标红、子任务清单、日历视图 |
| 🌿 **习惯打卡** | 打卡 | 自由增删每日小习惯（如阅读 / 运动 / 电影）；打卡月历、周/月目标进度 |
| 💰 **记账本** | — | 收入/支出、分类占比、按月汇总；**信封预算**（总预算 + 分类额度 + 超支预警） |
| ✍️ **笔记** | 日记 | 心情日记（心情标签 + 图片/音频），灵感与摘录记录 |
| 🏫 **学校课表** | — | 周一至周日课程、课外自定义时段；单/双周课表、教师/教室/作业 |
| 📈 **投资看板** | 持仓 · 交易流水 | 持仓盈亏、大盘指数、买卖流水；免 token 行情 + 加权成本会计 + 多资产类 |
| 💗 **亲密健康** | — | 身体 / 亲密健康记录（时间·对象·保护措施·时长·评分·心情）轻量追踪 |

> 笔记模块的「收藏」功能已废弃，当前仅保留日记。

**首页**作为聚合视图，提供：
- 每日一句（按星期轮换）
- 今日概览（待办完成率、习惯综合进度、今日课表）
- 人生进度卡（依生辰与目标年龄推算余生进度）
- 快捷记录（记打卡 / 记想法 / 记一笔 / 记行情）
- 番茄钟 / 心情曲线 / 媒体备份入口

---

## 🚀 如何使用

### 1. 本地预览（开发 / 调试）
仓库根目录带了一个零依赖的 Node 静态服务器：

```bash
node _server.js
# 浏览器打开 http://localhost:8642/workbench-desktop.html
```

> 直接双击 `workbench-desktop.html` 以 `file://` 打开也能用，但 Service Worker 与部分 `fetch` 需要 `http(s)` 环境，建议用上面的本地服务器或静态托管来体验完整 PWA 能力。

### 2. 在线访问（推荐）
部署到 GitHub Pages / Netlify / Vercel 后，通过 URL 访问，可跨设备使用、「添加到主屏幕」获得 App 体验、登录后开启云端同步。

### 3. 登录同步
点击左上角同步状态（"未登录·仅本地"），注册/登录账号后：
- 数据自动云端同步（防抖推送）
- 切换设备登录即可拉取最新数据
- 未登录时数据仅在本地，完全离线可用

---

## 📦 如何部署

部署单元是 **`src/` 整个文件夹**——把它传到静态托管的根目录即可（manifest/sw 与 HTML 同目录，相对路径会自动解析）。

### 方式一：GitHub Pages（推荐，免费、永久托管）
1. 把 `src/` 下的文件上传 / 推到仓库（或 Fork 本仓库后删除根目录冗余、仅保留 `src/` 内容）。
2. 进入仓库 `Settings → Pages`，Source 选 `Deploy from a branch`，Branch 选 `main` / `(root)`，保存。
3. 等待 1~2 分钟后访问：
   ```
   https://<你的用户名>.github.io/<仓库名>/workbench-desktop.html
   ```

> 💡 若希望根路径直接打开（去掉 `workbench-desktop.html`），把文件改名为 `index.html` 即可。

### 方式二：Netlify / Vercel 拖拽部署
直接把 `src/` 文件夹拖到 [Netlify Drop](https://app.netlify.com/drop) 或 Vercel 部署面板，几秒拿到一个 HTTPS 链接。

### 方式三：任意静态服务器
```bash
# 进入 src 目录后任选其一
python3 -m http.server 8080
npx serve .
```
浏览器访问对应地址下的 `workbench-desktop.html`。

---

## 📱 添加到主屏幕（PWA 原生体验）

项目已内置 `manifest.webmanifest` 和 `service worker`，注册成功后可「添加到主屏幕」，伪装成原生 App。

### iPhone / iPad（iOS）
1. 用 **Safari** 打开部署后的网址
2. 点底部分享按钮 → 滑动选 **"添加到主屏幕"**
3. 命名（如"我的看板"）→ 添加
4. 主屏幕出现独立图标，点开是全屏无浏览器栏的 App 体验

> ⚠️ iOS 上必须用 **Safari**，Chrome / 微信内置浏览器不支持加桌面。

### macOS
- **Safari**：菜单栏 `文件 → 添加到 Dock 栏`
- **Chrome**：地址栏右侧 `⋮ → 投放、保存和分享 → 安装页面作为应用`

### Windows
- **Edge**：地址栏右侧 `⋯ → 应用 → 将此站点作为应用安装`
- **Chrome**：地址栏右侧 `⋮ → 投放、保存和分享 → 安装页面作为应用`

### Android
用 **Chrome** 打开网址，菜单 `⋮ → 添加到主屏幕`。

---

## 🔧 配置 Supabase 云同步（可选）

应用已内置一个公开 Supabase 实例用于演示。如需自建：

1. 到 [supabase.com](https://supabase.com) 注册并新建项目
2. 在 SQL Editor 中执行：
   ```sql
   create table if not exists workbench_data (
     user_id uuid references auth.users on delete cascade primary key,
     data jsonb not null,
     updated_at timestamptz default now()
   );
   alter table workbench_data enable row level security;
   create policy "用户只能读写自己的数据" on workbench_data
     for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
   ```
3. 在 `workbench-desktop.html` 顶部替换：
   ```js
   const SUPABASE_URL = "https://<你的项目>.supabase.co";
   const SUPABASE_KEY = "<你的 anon key>";
   ```

---

## 📈 投资看板：行情与记账说明

投资看板默认**免 Token、开箱即用**，实时行情走以下免费公开接口（均经浏览器跨域验证）：

| 资产 | 数据源 | 说明 |
| --- | --- | --- |
| 股票 / ETF / LOF / 指数 / 港股 / 美股 / 黄金 | 腾讯 `qt.gtimg.cn` → 东财 `push2.eastmoney.com`（兜底） | 免 Token、浏览器可直接跨域 |
| 开放式基金 | 腾讯 `jj` 行情（`qt.gtimg.cn/q=jj<代码>`） | 替代原东财基金接口（浏览器被 CORS 拦截，已失效） |
| 加密货币 | CoinGecko 免费接口 | 免 Token、CORS 放行；`code` 填 CoinGecko id（小写，如 `bitcoin` / `ethereum` / `solana`） |

### 资产类型（kind）
持仓支持的 `kind`：`stock`(股票) / `fund`(基金) / `gold`(黄金) / `index`(指数) / `bond`(债券) / `crypto`(加密) / `cash`(现金)。
- **现金类**：面值即数量，无行情波动；建仓时「数量」填金额（元），「成本价」随意。现金类会并入净资产管理。
- **债券**：交易所债券填代码（如 `019xxx.SH`）自动取价；非交易所债券留空代码则按面值稳定展示。
- **加密**：`code` 直接填 CoinGecko id（如 `bitcoin`），实时人民币价与 24h 涨跌。

### 会计逻辑（自动从交易流水计算）
持仓盈亏按该代码的全部交易流水（买入/卖出/分红/费用）滚动计算：
- **加权成本价**：多次买入自动加权，买入费用摊入成本。
- **已实现盈亏**：卖出时 `(卖价 − 当时成本) × 数量 − 卖出费`。
- **累计分红**：分红金额（股数×每股 或 一次性金额，扣税/费）。
- **总收益** = 浮动盈亏 + 已实现盈亏 + 累计分红，总览处拆分展示「浮 / 已 / 红」。
- 无交易的持仓回退到其自身 `qty` / `costPrice`，向后兼容。

### 自托管行情代理（可选）
若想用 TuShare 等需 Token 的源补充行情（公共 CORS 代理易失效），可在 `src/netlify/functions/` 放置一个转发函数（如 `quote.js`），并在 `workbench-desktop.html` 的 `CONFIG.invest.proxy` 设置：
```js
proxy: "/.netlify/functions/quote?url="   // 留空则退回公共代理
```
该函数同时支持通用转发与 TuShare POST，Token 可经环境变量注入（更安全）。默认实时行情**无需**此代理。

---

## 📂 项目结构

```
.
├── _server.js                  # 本地开发静态服务器（Node，端口 8642，从 src/ 提供文件）
├── 说明.txt                    # 项目简介与 SHA256
├── personal-workbench-src.zip  # 打包好的 src/ 部署单元
└── src/                        # 部署单元（整个文件夹即为线上内容）
    ├── workbench-desktop.html  # 唯一核心文件（HTML + CSS + JS 全内嵌）
    ├── manifest.webmanifest    # PWA 清单（名称、图标、启动方式）
    ├── sw.js                   # Service Worker（应用壳离线缓存）
    ├── assets/                 # 头像 avatar.jpg / 横幅 greet-banner.jpg
    ├── netlify/
    │   └── functions/          # （可选）自托管行情代理目录，默认留空
    └── README.md
```

---

## ❓ 常见问题

**Q：数据保存在哪？**
默认在浏览器 `localStorage`（结构化数据）和 `IndexedDB`（图片/音频等媒体）。登录 Supabase 后会自动云端备份。

**Q：换浏览器数据会丢吗？**
是的，每个浏览器本地数据独立。要跨浏览器/跨设备共享，请登录云同步。

**Q：能否完全离线使用？**
可以。注册 Service Worker 后，首次加载完成即可离线访问（云同步需要联网）。

**Q：PWA 图标怎么改？**
替换 `manifest.webmanifest` 中的 `icons`（当前为内联 SVG 数据 URI，也可改为指向 `assets/` 下的图片文件）。

**Q：如何重置所有数据？**
应用使用存储键 `personal-dashboard-v2`。在浏览器开发者工具清除该站点 `localStorage` / `IndexedDB`，或换一个存储键（修改 `workbench-desktop.html` 顶部 `CONFIG.storageKey`）即可强制重置。

---

## 📝 License

Personal use. 自由修改、自由部署。

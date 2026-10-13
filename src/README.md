# 个人看板 · 工作台 (Personal Workbench)

一个复古报刊风格的单文件个人工作台，整合了待办、习惯、记账、笔记、课表和投资看板六大模块。开箱即用，支持 PWA 加桌面，多设备同步。

> 一份 HTML，所有功能本地存储；登录后自动云端同步，多设备共享。

---

## ✨ 项目介绍

`个人看板 · 工作台` 是一款「单文件 + 复古报刊」风格的全平台个人看板。它把日常高频使用的小工具集中到一个界面里，避免在多个 App 之间频繁切换：

- **单文件部署**：核心代码只有 `workbench-desktop.html` 一个文件，丢到任何静态托管（GitHub Pages / Netlify / 本地浏览器）即可运行。
- **本地优先**：所有数据默认保存在浏览器 `localStorage` 与 `IndexedDB`，离线也能用。
- **云端可选**：内置 Supabase 接入，登录后数据自动云端同步，多设备无缝衔接。
- **PWA 支持**：可"添加到主屏幕"，在 iPhone / Android / macOS / Windows 上都获得接近原生 App 的体验。
- **复古报刊美学**：墨色中性配色 + 衬线标题 + 手写体点缀，安静、克制、有质感。

---

## 🧩 功能模块

经过模块整合，左侧导航从 11 项精简为 **6 大模块**，强相关功能通过顶部子标签页切换：

| 模块 | 子模块 / 类型 | 说明 |
| --- | --- | --- |
| 📋 **今日待办** | todo | 今日任务清单，P0/P1/P2 优先级；**截止日期/逾期标红**、**子任务清单** |
| 🌿 **习惯打卡** | 习惯 · 阅读 · 运动 | 子标签切换；打卡月历、书籍进度+摘录、运动分钟数；**连续打卡天数/最长连续、月度频率目标** |
| 💰 **记账本** | finance | 收入/支出、分类占比、按月汇总；**信封预算（分类额度 + 超支预警）** |
| ✍️ **笔记收藏** | 日记 · 收藏 | 子标签切换；心情日记（图片/音频）、稍后读；**标签 + 全文搜索** |
| 🏫 **学校课表** | timetable | 周一至周日课程、课外补习自定义时段；**单/双周课表**、教师/教室/**作业** |
| 📈 **投资看板** | 持仓 · 交易流水 | 子标签切换；持仓盈亏、大盘指数、买卖流水；**免 token 行情 + 加权成本会计 + 多资产类** |

**首页**还提供：
- 每日一句（按星期轮换）
- 今日概览环形（待办完成率、习惯综合进度、今日课表）
- 快速记录按钮（记打卡 / 记想法 / 记一笔 / 记行情）
- 番茄钟 / 心情曲线 / 媒体备份

---

## 🆕 功能增强（参考成熟开源项目）

下列增强在保持「单文件 / 本地优先 / 离线 PWA」架构不变的前提下，借鉴了 GitHub 高星项目的最佳实践：

| 模块 | 新增能力 | 参考项目思路 |
| --- | --- | --- |
| 💰 记账本 | **信封预算**：为各分类设月度额度，超出标红预警；含合计超支提示 | Actual Budget（信封预算法 / 本地优先） |
| 🌿 习惯打卡 | **连续打卡天数 + 最长连续**，卡片与侧栏同步展示；**月度频率目标**（本月 X/Y 天） | Loop Habit Tracker / Habitica（连续天数、频率目标） |
| 📋 今日待办 | **截止日期 + 逾期标红**；**子任务清单**（勾选/增删，卡片显示完成进度） | Super Productivity（截止、子任务、计时） |
| 🏫 学校课表 | **单/双周课表**（本周类型提示、非本周课淡化）；每课**教师 / 教室 / 作业** | 各平台课表 App（单双周、课程属性） |
| ✍️ 笔记收藏 | **标签**（可搜索）+ **全文搜索**（标题/内容/标签） | Joplin / Logseq（标签、本地全文检索） |

> 整体路线与 Actual、Super Productivity、Joplin 一致：**本地优先 + 可选云同步**，无需后端即可使用。

---

## 🚀 如何使用

### 1. 直接打开
下载 `workbench-desktop.html`，双击用浏览器打开即可使用。所有数据保存在浏览器本地，开箱即用。

### 2. 在线访问（推荐）
部署到 GitHub Pages / Netlify / Vercel 后，通过 URL 访问，可以：
- 跨设备使用（iPhone / Mac / Windows / Android）
- "添加到主屏幕"获得 App 体验
- 登录后开启云端同步

### 3. 登录同步
点击左上角同步状态（"未登录·仅本地"），注册/登录账号后：
- 数据自动云端同步（800ms 防抖推送）
- 切换设备登录即可拉取最新数据
- 未登录时数据仅在本地，完全离线可用

---

## 📦 如何部署

### 方式一：GitHub Pages（推荐，免费、永久托管）

1. **Fork 或上传本仓库到 GitHub**
   ```bash
   git init
   git add .
   git commit -m "init: 个人看板工作台"
   git branch -M main
   git remote add origin https://github.com/<你的用户名>/<仓库名>.git
   git push -U origin main
   ```

2. **开启 Pages**
   - 进入仓库 `Settings → Pages`
   - Source 选择 `Deploy from a branch`
   - Branch 选 `main` / `(root)`，保存

3. **访问地址**
   等待 1~2 分钟后访问：
   ```
   https://<你的用户名>.github.io/<仓库名>/workbench-desktop.html
   ```

> 💡 若希望根路径直接打开（去掉 `workbench-desktop.html`），可把文件改名为 `index.html`。

### 方式二：Netlify / Vercel 拖拽部署
直接把 `workbench-desktop.html` 拖到 [Netlify Drop](https://app.netlify.com/drop) 或 Vercel 部署面板即可，几秒拿到一个 HTTPS 链接。

### 方式三：本地静态服务器
```bash
# 任选其一
python3 -m http.server 8080
npx serve .
```
浏览器访问 `http://localhost:8080/workbench-desktop.html`。

---

## 📱 添加到主屏幕（PWA 原生体验）

本项目已内置 `manifest.webmanifest` 和 `service worker`，可直接"添加到主屏幕"，伪装成原生 App。

### iPhone / iPad（iOS）
1. 用 **Safari** 打开部署后的网址（GitHub Pages 链接）
2. 点底部分享按钮 → 滑动选 **"添加到主屏幕"**
3. 命名（如"我的看板"）→ 添加
4. 主屏幕会出现独立图标，点开是全屏无浏览器栏的 App 体验

> ⚠️ iOS 上必须用 **Safari**，Chrome / 微信内置浏览器不支持加桌面。

### macOS（桌面 PWA）
1. 用 **Safari** 或 **Chrome** 打开网址
2. **Safari**：菜单栏 `文件 → 添加到 Dock 栏`
3. **Chrome**：地址栏右侧 `⋮ → 投放、保存和分享 → 安装页面作为应用`
4. 启动器（Launchpad / Dock / 启动台）里会出现独立 App，独立窗口运行

### Windows
1. 用 **Edge** 或 **Chrome** 打开网址
2. 地址栏右侧 `⋯ → 应用 → 将此站点作为应用安装`（Edge）或 `⋮ → 投放、保存和分享 → 安装页面作为应用`（Chrome）
3. 桌面 / 开始菜单会出现独立快捷方式，双击打开是独立窗口

### Android
1. 用 **Chrome** 打开网址
2. 菜单 `⋮ → 添加到主屏幕`
3. 桌面出现 PWA 图标，可全屏运行

---

## 🔧 配置 Supabase 云同步（可选）

项目内置了一个公开 Supabase 实例用于演示。如需自建：

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
- **现金类**：面值即数量，无行情波动；建仓时「数量」填金额（元），「成本价」随意。现金类会并入「净资产管理」的现金段，与记账本现金合并展示。
- **债券**：交易所债券填代码（如 `019xxx.SH`）自动取价；非交易所债券留空代码则按面值稳定展示。
- **加密**：`code` 直接填 CoinGecko id（如 `bitcoin`），实时人民币价与 24h 涨跌。

### 会计逻辑（自动从交易流水计算）
持仓盈亏**不再只算成本/现价差**，而是按该代码的全部交易流水（买入/卖出/分红/费用）滚动计算：
- **加权成本价**：多次买入自动加权，买入费用摊入成本。
- **已实现盈亏**：卖出时 `(卖价 − 当时成本) × 数量 − 卖出费`。
- **累计分红**：分红金额（股数×每股 或 一次性金额，扣税/费）。
- **总收益** = 浮动盈亏 + 已实现盈亏 + 累计分红，总览处拆分展示「浮 / 已 / 红」。
- 无交易的持仓回退到其自身 `qty` / `costPrice`，向后兼容。

### 自托管行情代理（可选，仅 TuShare 兜底用）
若想用 TuShare 补充行情（需 Token），公共 CORS 代理易失效。仓库内置 `netlify/functions/quote.js` 轻量代理：
1. 把该文件放到仓库 `netlify/functions/` 目录推到 GitHub，Netlify 自动部署。
2. 在 `workbench-desktop.html` 的 `CONFIG.invest` 设置：
   ```js
   proxy: "/.netlify/functions/quote?url="   // 留空则退回公共代理
   ```
该代理同时支持通用转发与 TuShare POST，Token 也可经环境变量 `TUSHARE_TOKEN` 注入（更安全）。默认实时行情**无需**此代理。

---

## 📂 项目结构

```
.
├── workbench-desktop.html   # 唯一的核心文件（HTML + CSS + JS 全部内嵌）
├── manifest.webmanifest     # PWA 清单（图标、名称、启动方式）
├── sw.js                    # Service Worker（离线缓存）
├── netlify/
│   └── functions/
│       └── quote.js         # 自托管行情/TuShare 代理（可选，部署到 Netlify）
├── assets/                  # 头像 / 横幅 等静态资源
└── README.md
```

---

## ❓ 常见问题

**Q：数据保存在哪？**
默认在浏览器 `localStorage`（结构化数据）和 `IndexedDB`（图片/音频等媒体）。登录 Supabase 后会自动云端备份。

**Q：换浏览器数据会丢吗？**
是的，每个浏览器本地数据独立。要跨浏览器/跨设备共享，请登录云同步。

**Q：能否完全离线使用？**
可以。注册 Service Worker 后，第一次加载完成即可离线访问（云同步需要联网）。

**Q：PWA 图标怎么改？**
替换 `manifest.webmanifest` 中的 `icons` 路径，或替换 `assets/` 中的图标文件。

---

## 📝 License

Personal use. 自由修改、自由部署。

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
| 📋 **今日待办** | todo | 今日任务清单，支持 P0/P1/P2 三级优先级、进度条 |
| 🌿 **习惯打卡** | 习惯 · 阅读 · 运动 | 子标签切换；打卡月历、书籍进度+摘录、运动分钟数 |
| 💰 **记账本** | finance | 收入/支出、分类占比、按月汇总 |
| ✍️ **笔记收藏** | 日记 · 收藏 | 子标签切换；心情日记（支持图片/音频）、稍后读收藏 |
| 🏫 **学校课表** | timetable | 周一至周日课程，支持课外补习自定义时段 |
| 📈 **投资看板** | 持仓 · 交易流水 | 子标签切换；持仓盈亏、大盘指数、买卖流水 |

**首页**还提供：
- 每日一句（按星期轮换）
- 今日概览环形（待办完成率、习惯综合进度、今日课表）
- 快速记录按钮（记打卡 / 记想法 / 记一笔 / 记行情）
- 番茄钟 / 心情曲线 / 媒体备份

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

## 📂 项目结构

```
.
├── workbench-desktop.html   # 唯一的核心文件（HTML + CSS + JS 全部内嵌）
├── manifest.webmanifest     # PWA 清单（图标、名称、启动方式）
├── sw.js                    # Service Worker（离线缓存）
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

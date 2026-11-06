const http=require("http"),fs=require("fs"),path=require("path");
const root="C:/Users/NINGMEI/Desktop/个人工作台项目/src";
const TYPES={".html":"text/html; charset=utf-8",".js":"text/javascript; charset=utf-8",".webmanifest":"application/manifest+json; charset=utf-8",".css":"text/css; charset=utf-8",".json":"application/json; charset=utf-8",".svg":"image/svg+xml",".png":"image/png",".jpg":"image/jpeg"};
http.createServer((req,res)=>{
  let rel=decodeURIComponent(req.url.split("?")[0]).replace(/^\//,"")||"workbench-desktop.html";
  if(rel==="") rel="workbench-desktop.html";
  const p=path.join(root,rel);
  fs.readFile(p,(e,d)=>{ if(e){res.writeHead(404);res.end("nf");return;}
    const ext=path.extname(p).toLowerCase();
    res.writeHead(200,{"Content-Type":TYPES[ext]||"application/octet-stream"}); res.end(d); });
}).listen(8642,()=>console.log("up"));

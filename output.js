//Mon Dec 01 2025 07:15:23 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
"use strict";

const a4 = require("axios"),
  a5 = require("querystring"),
  {
    SocksProxyAgent: a6
  } = require("socks-proxy-agent"),
  a7 = require("fs");
function a8(a) {
  return new Promise(b => setTimeout(b, a));
}
function a9() {
  const b = new Date(),
    e = f => String(f).padStart(2, "0");
  return e(b.getHours()) + ":" + e(b.getMinutes()) + ":" + e(b.getSeconds());
}
function aa(...e) {
  for (const i of e) {
    const j = process.env[i];
    if (j && j.trim()) return j.trim();
  }
  return "";
}
const ab = process.env.AUTH_API_URL || "http://47.95.197.104/auth_normal.php",
  ac = aa("AUTH_KEY", "KAMICARD_KEY"),
  ad = aa("SCRIPT_VERSION") || "pt_v2",
  ae = aa("QL_ID"),
  af = (() => {
    const b = aa("AUTH_TIMEOUT") || "30",
      e = parseInt(b, 10);
    return Number.isNaN(e) ? 30 : e;
  })(),
  ag = !!(ab && ac);
let ah = "";
if (ab) {
  if (ab.endsWith("auth_normal.php")) ah = ab.replace("auth_normal.php", "client_api.php");else {
    if (ab.endsWith("auth.php")) ah = ab.replace("auth.php", "client_api.php");else ab.endsWith("auth_pt.php") && (ah = ab.replace("auth_pt.php", "client_api.php"));
  }
}
const ai = (() => {
  const b = aa("AUTH_STATUS_TTL") || "60",
    e = parseInt(b, 10);
  return Number.isNaN(e) ? 60 : e;
})();
let aj = {
  "timestamp": 0,
  "result": null,
  "ud": null,
  "device_id": null
};
const ak = ".device_id.txt";
function al() {
  try {
    if (a7.existsSync(ak)) {
      {
        const g = a7.readFileSync(ak, "utf8").trim();
        if (g && g.length === 32) return g;else {
          if (g) {
            try {
              a7.unlinkSync(ak);
            } catch (j) {}
          }
        }
      }
    }
    const b = "0123456789abcdef";
    let f = "";
    for (let m = 0; m < 32; m++) {
      f += b.charAt(Math.floor(Math.random() * b.length));
    }
    try {
      a7.writeFileSync(ak, f, "utf8");
    } catch (n) {}
    return f;
  } catch (o) {
    const p = "0123456789abcdef";
    let q = "";
    for (let r = 0; r < 32; r++) {
      q += p.charAt(Math.floor(Math.random() * p.length));
    }
    return q;
  }
}
const am = (() => {
  const b = (process.env.KS_DEV_MODE || "").toLowerCase();
  return !["0", "false"].includes(b);
})();
function an() {
  if (process.env.KS_GUI_MODE) return;
  const b = () => {
    console.log("\n" + "=".repeat(80));
    console.log("⚠️ 收到停止信号，脚本立即强制退出...");
    console.log("=".repeat(80));
    process.exit(0);
  };
  try {
    process.on("SIGINT", b);
    process.on("SIGTERM", b);
  } catch (g) {}
}
an();
async function ao(a, b = "") {
  if (!ag) return null;
  const f = {
    "key": ac,
    "script_version": ad,
    ...a
  };
  ae && (f.ql_id = ae);
  const g = {
    "Content-Type": "application/json",
    "X-Auth-Key": ac,
    "X-Script-Version": ad
  };
  try {
    {
      const h = await a4.post(ab, f, {
          "headers": g,
          "timeout": af * 1000
        }),
        i = h.data;
      if (!i || typeof i !== "object") {
        return null;
      }
      if (!i.status) return {
        "status": false,
        "error": i.message,
        "data": i.data
      };
      let j = i.data;
      if (typeof j === "string") {
        const l = j.trim();
        if (l) try {
          j = JSON.parse(l);
        } catch {}
      }
      return {
        "status": true,
        "data": j
      };
    }
  } catch (o) {
    return null;
  }
}
async function ap(a = null, b = null) {
  const e = {
    "zurhG": function (j, k) {
      return j * k;
    },
    "NDbCx": function (j, k) {
      return j * k;
    },
    "tpjMF": "未配置卡密(AUTH_KEY / KAMICARD_KEY)",
    "jDdGt": function (j, k) {
      return j && k;
    },
    "csBXB": function (j, k) {
      return j === k;
    },
    "LdHUV": "YMlne",
    "DTIDE": function (j) {
      return j();
    },
    "dNdYn": function (j, k) {
      return j / k;
    },
    "Hbeuv": function (j, k) {
      return j === k;
    },
    "CNPJY": function (j, k) {
      return j < k;
    },
    "qvgMp": function (j, k) {
      return j - k;
    },
    "nHTxl": function (j, k) {
      return j !== k;
    },
    "VxyqM": "SdPYA",
    "rIZJS": "check_key",
    "KhWIG": function (j, k) {
      return j !== k;
    },
    "HUzzy": "ZpeFJ",
    "rfzBm": "object",
    "GDEeG": "invalid response",
    "jsZNB": "卡密验证失败",
    "QvKUT": function (j, k) {
      return j !== k;
    },
    "bQMsD": "dWxDo"
  };
  if (!ac) return {
    "valid": false,
    "message": "未配置卡密(AUTH_KEY / KAMICARD_KEY)"
  };
  if (!(ag && ah)) {
    return {
      "valid": false,
      "message": ""
    };
  }
  const f = b || al(),
    g = Date.now() / 1000,
    h = aj.result;
  if (h && aj.ud === a && aj.device_id === f && g - (aj.timestamp || 0) < ai) {
    return h;
  }
  const i = {
    "api": "check_key",
    "key": ac,
    "script_version": ad
  };
  if (a) i.ud = a;
  if (f) i.device_id = f;
  if (ae) i.ql_id = ae;
  try {
    {
      const m = await a4.get(ah, {
          "params": i,
          "timeout": af * 1000
        }),
        n = m.data;
      if (!n || typeof n !== "object") throw new Error("invalid response");
      let o;
      !n.status ? o = {
        "valid": false,
        "message": n.message || "卡密验证失败",
        "data": n.data || {}
      } : o = {
        "valid": true,
        "message": "",
        "data": n.data || {}
      };
      aj = {
        "timestamp": g,
        "result": o,
        "ud": a,
        "device_id": f
      };
      return o;
    }
  } catch (p) {
    return {
      "valid": true,
      "message": ""
    };
  }
}
async function aq(a = "脚本") {
  const e = await ap();
  if (e.valid) return true;
  const f = e.message || "卡密验证失败";
  console.log("❌ " + a + " " + f);
  return false;
}
async function ar(a) {
  const e = al(),
    f = await ap(a.userId, e);
  if (!f.valid) {
    let m = f.message || "卡密验证失败";
    const n = f.data && typeof f.data === "object" ? f.data : {},
      o = n.code || n.error_code;
    if (o) {
      m = m + " (code=" + o + ")";
    }
    console.log("❌ 账户[" + a.nickname + "] " + m);
    return false;
  }
  const g = f.data && typeof f.data === "object" ? f.data : {},
    h = [true, "1", 1].includes(g.device_bind_enabled);
  let i = g.bound_device_id;
  typeof i === "string" && (i = i.trim() || null);
  if (h && i) {
    if (e && e !== i) return console.log("❌ 账户[" + a.nickname + "] 设备ID绑定验证失败：本地设备与云端绑定设备不一致，脚本已停止运行"), process.exit(1), false;
  }
  const j = (a.userId || "").trim(),
    k = [true, "1", 1].includes(g.ud_bind_enabled),
    l = g.bound_uds || [];
  if (k && j) {
    if (Array.isArray(l) && l.length > 0) {
      const q = l.map(r => String(r).trim()).filter(Boolean);
      if (!q.includes(j)) return console.log("❌ 账户[" + a.nickname + "] UD绑定验证失败：当前账号UD（" + j + "）不在云端绑定列表中，脚本已停止运行"), process.exit(1), false;
    }
  }
  return true;
}
async function as() {
  !ac && (console.log("\n❌ 错误: 未设置卡密（AUTH_KEY / KAMICARD_KEY）"), console.log("💡 请在环境变量中设置 AUTH_KEY 或 KAMICARD_KEY 后再运行脚本"), process.exit(1));
  if (!(ag && ah)) {
    {
      console.log("\n⚠️ 授权网关未正确配置(AUTH_API_URL / client_api.php)，跳过卡密及绑定检查");
      return;
    }
  }
  console.log("\n🔍 正在检测卡密状态及绑定配置...");
  const b = await ap();
  if (!b.valid) {
    {
      const n = b.message || "卡密验证失败";
      console.log("❌ 卡密验证失败: " + n);
      console.log("💡 请检查 AUTH_KEY/KAMICARD_KEY 是否正确，或联系管理员");
      process.exit(1);
    }
  }
  console.log("✅ 卡密验证通过");
  const e = b.data && typeof b.data === "object" ? b.data : {},
    f = [true, "1", 1].includes(e.device_bind_enabled);
  let g = e.bound_device_id;
  typeof g === "string" && (g = g.trim() || null);
  const h = al();
  if (f && g) h && h === g ? console.log("\n✅ 设备ID验证通过") : console.log("\n❌ 设备ID验证失败：本地设备ID与云端绑定不一致");else {
    if (f && !g) {
      console.log("\nℹ️ 设备ID验证已启用，当前尚未绑定设备ID");
    }
  }
  const i = [true, "1", 1].includes(e.ud_bind_enabled),
    j = Array.isArray(e.bound_uds) ? e.bound_uds : [],
    k = typeof e.max_ud_bind_count === "number" ? e.max_ud_bind_count : typeof e.max_bind_count === "number" ? e.max_bind_count : 0;
  if (i) {
    console.log("\n🔒 UD绑定功能: 已开启");
    j.length > 0 ? k > 0 ? console.log("   已绑定账号数: " + j.length + "/" + k + " 个") : console.log("   已绑定账号数: " + j.length + " 个（无限制）") : console.log("   UD绑定已开启，当前尚未绑定任何账号UD");
  }
}
async function at() {
  if (!ab) return null;
  try {
    let b;
    try {
      const l = new URL(ab),
        m = l.pathname.split("/");
      m[m.length - 1] = "gongmonan.php";
      l.pathname = m.join("/");
      l.search = "?api=get_script_version";
      b = l.toString();
    } catch (n) {
      b = ab.replace("auth_normal.php", "gongmonan.php").replace("auth_pt.php", "gongmonan.php").replace("auth.php", "gongmonan.php") + "?api=get_script_version";
    }
    const f = await a4.get(b, {
      "timeout": af * 1000,
      "validateStatus": function (o) {
        return o >= 200 && o < 600;
      }
    });
    if (f.status === 401) return console.log("⚠️ 获取版本号需要登录"), null;
    let g = f.data;
    if (typeof g === "string") try {
      g = JSON.parse(g);
    } catch (o) {
      console.log("⚠️ 服务器响应格式错误");
      return null;
    }
    if (!g || g.status !== true || !g.data) {
      {
        const q = g && (g.message || g.error) || "响应格式不正确";
        console.log("⚠️ 无法从服务器获取版本号: " + q);
        return null;
      }
    }
    const h = g.data || {},
      i = (h.configured_version || "").toString().trim(),
      j = (h.normal_version || "").toString().trim();
    let k = [];
    if (j) k = [j];else Array.isArray(h.extra_versions) && (k = h.extra_versions.map(r => r != null ? String(r).trim() : "").filter(Boolean));
    return {
      "configuredVersion": i,
      "extraVersions": k
    };
  } catch (r) {
    const s = r.response && r.response.data && r.response.data.message || r.message || "未知错误";
    console.log("⚠️ 获取服务器版本号失败: " + s);
    return null;
  }
}
async function au() {
  try {
    {
      console.log("\n🔍 正在检查脚本版本...");
      console.log("   本地版本: " + ad);
      const b = await at();
      (!b || !b.configuredVersion) && (console.log("\n⚠️ 无法从服务器获取版本号，脚本已停止运行"), process.exit(1));
      const e = b.configuredVersion,
        f = Array.isArray(b.extraVersions) ? b.extraVersions : [],
        g = String(ad).toLowerCase().trim(),
        h = e ? e.toLowerCase().trim() : "",
        i = f.map(k => String(k).toLowerCase().trim()),
        j = i.length > 0 ? i : [h].filter(Boolean);
      if (!j.includes(g)) {
        {
          console.log("\n⚠️ 脚本版本不匹配！");
          console.log("   本地版本: " + ad);
          console.log("   服务器主版本: " + e);
          f.length > 0 && console.log("   服务器额外版本: " + f.join(", "));
          console.log("\n⚠️ 脚本已停止运行，请更新到正确版本后重新运行。");
          process.exit(1);
        }
      } else {
        console.log("✅ 脚本版本检查通过 (版本: " + ad + ")");
      }
    }
  } catch (p) {
    console.log("\n⚠️ 版本检查出错: " + (p.message || p));
    console.log("\n⚠️ 脚本已停止运行。");
    process.exit(1);
  }
}
function av() {
  const b = (process.env.KS_COIN_LIMIT || "").trim();
  if (b) {
    const e = parseInt(b, 10);
    if (!Number.isNaN(e) && e > 0) {
      return e;
    }
  }
  return 500000;
}
function aw() {
  const b = (process.env.KS_WATCH_RANGE || "").trim();
  if (b) try {
    const e = b.split(",");
    if (e.length === 2) {
      const f = parseInt(e[0].trim(), 10),
        g = parseInt(e[1].trim(), 10);
      if (f > 0 && g > f) return [f * 1000, g * 1000];
    }
  } catch {}
  return [30000, 35000];
}
function ax() {
  const b = (process.env.KS_ROUND_REST_INTERVAL || "").trim();
  if (b) {
    {
      const e = parseInt(b, 10);
      if (!Number.isNaN(e) && e > 0) {
        return e;
      }
    }
  }
  return 1;
}
function ay() {
  const b = (process.env.KS_ADINFO_FAIL_EXIT || "").trim();
  return b === "1";
}
function az() {
  const b = (process.env.KS_DID_SWITCH || "").trim();
  return b === "1";
}
function aA() {
  const b = (process.env.KS_AD_APPEND || "").trim();
  if (b) {
    try {
      return parseInt(b, 10) !== 0;
    } catch {}
  }
  return true;
}
function aB() {
  const b = (process.env.KS_SEARCH_APPEND || "").trim();
  if (b) try {
    return parseInt(b, 10) !== 0;
  } catch {}
  return true;
}
function aC() {
  const b = (process.env.KS_SEARCH_PER_ROUND || "").trim();
  if (b) {
    const e = parseInt(b, 10);
    if (!Number.isNaN(e) && e > 0) {
      return e;
    }
  }
  return 10;
}
function aD() {
  const b = (process.env.KS_COIN_CHECK_LIST || "").trim();
  if (b) try {
    const e = b.split(",").map(f => f.trim()).filter(Boolean).map(f => parseInt(f, 10)).filter(f => !Number.isNaN(f) && f > 0);
    if (e.length > 0) return e;
  } catch {}
  return [10, 1];
}
function aE() {
  const b = (process.env.KS_SEARCH_KEYWORD || "").trim();
  if (b) return b;
  return "短剧小说";
}
function aF() {
  const b = (process.env.KS_TASKS || "").trim(),
    e = {
      "1": "box",
      "2": "look",
      "3": "box_extra",
      "4": "ss"
    };
  if (!b) return ["look"];
  const f = b.split(",").map(h => h.trim()).filter(Boolean),
    g = [];
  for (const h of f) {
    e[h] ? g.push(e[h]) : console.log("⚠️ 警告：rw环境变量中的 '" + h + "' 不是有效值，忽略");
  }
  if (g.length === 0) return console.log("⚠️ rw环境变量配置无效，将执行默认任务"), ["look"];
  return g;
}
function aG() {
  let b = process.env.KS_ACCOUNTS || "";
  const f = process.env.KS_ACCOUNTS_FILE;
  if (f && a7.existsSync(f)) try {
    {
      b = a7.readFileSync(f, "utf8");
      console.log("从临时文件读取账号配置: " + f);
      try {
        a7.unlinkSync(f);
      } catch {}
    }
  } catch (j) {
    console.log("读取临时文件失败: " + (j.message || j));
  }
  if (!b) {
    console.log("未发现 KS_ACCOUNTS 环境变量");
    return [];
  }
  const g = b.split("&").map(l => l.trim()).filter(Boolean);
  return g;
}
function aH(a, b) {
  const e = {
      "WXZWZ": "0123456789abcdef",
      "tQbOd": function (m, n) {
        return m < n;
      },
      "ufLKP": function (m, n) {
        return m * n;
      },
      "oAGkD": "look",
      "DRxxK": function (m, n) {
        return m !== n;
      },
      "wVGBc": function (m, n) {
        return m(n);
      },
      "LwbdU": "kpn=NEBULA",
      "ZtqHZ": "kpn=KUAISHOU",
      "NhjoZ": function (m, n) {
        return m === n;
      },
      "zPDte": function (m, n) {
        return m === n;
      },
      "nYlPG": function (m, n) {
        return m === n;
      },
      "kfdGN": "LqowB",
      "aonza": function (m, n) {
        return m >= n;
      },
      "YqwOI": function (m, n) {
        return m !== n;
      },
      "tvjpd": "biGxA",
      "eSacN": "fnuaN",
      "OUbIs": function (m, n) {
        return m && n;
      },
      "bbJfI": "ZfEOl",
      "yvGQX": "GcLxR",
      "CGaxa": "socks5://",
      "CbExV": "DTWEh",
      "XSLqK": "CkCyc",
      "fzykX": function (m, n) {
        return m === n;
      },
      "gbNMe": "eexIE",
      "VslSx": "LqYqs",
      "ftoTc": function (m, n) {
        return m === n;
      },
      "DCwAr": function (m, n) {
        return m(n);
      },
      "cQVsE": "PPqVc",
      "kCbJd": function (m, n) {
        return m && n;
      },
      "DvNjG": "qOWUs",
      "NLizR": function (m, n) {
        return m !== n;
      },
      "YyhIi": "wmjJE",
      "PMDrI": "EBsCc",
      "lNmpg": function (m, n) {
        return m === n;
      },
      "vztgu": function (m, n) {
        return m(n);
      },
      "UkpBy": "JGUya",
      "YCKAB": function (m, n) {
        return m >= n;
      },
      "ALCpz": function (m, n) {
        return m === n;
      },
      "QafGj": "xpOAT",
      "qDqKd": "fqwzr",
      "YtGDX": "⚠️ 6个字段时第6个应该是代理，格式错误"
    },
    f = a.trim().split("#");
  if (f.length < 3) return null;
  const g = f[0].trim(),
    h = f[1].replace("kpn=NEBULA", "kpn=KUAISHOU"),
    i = f[2].trim();
  let j = null,
    k = null;
  const l = m => m.includes("|") || m.startsWith("socks5://");
  if (f.length === 3) {} else {
    if (f.length === 4) {
      if (l(f[3])) {
        {
          const m = f[3].trim();
          if (m.includes("|")) {
            const n = m.split("|");
            if (n.length >= 2) {
              {
                const o = n[0],
                  p = n[1],
                  q = n[2] || "",
                  r = n[3] || "";
                if (q && r) k = "socks5://" + q + ":" + r + "@" + o + ":" + p;else {
                  k = "socks5://" + o + ":" + p;
                }
              }
            }
          } else {
            if (m.startsWith("socks5://")) {
              k = m;
            }
          }
        }
      } else {
        j = f[3].trim();
      }
    } else {
      if (f.length === 5) {
        j = f[3].trim();
        if (l(f[4])) {
          const x = f[4].trim();
          if (x.includes("|")) {
            {
              const z = x.split("|");
              if (z.length >= 2) {
                const A = z[0],
                  B = z[1],
                  C = z[2] || "",
                  D = z[3] || "";
                if (C && D) {
                  k = "socks5://" + C + ":" + D + "@" + A + ":" + B;
                } else k = "socks5://" + A + ":" + B;
              }
            }
          } else {
            if (x.startsWith("socks5://")) {
              k = x;
            }
          }
        }
      } else {
        if (f.length === 6) {
          j = f[4].trim();
          if (l(f[5])) {
            const G = f[5].trim();
            if (G.includes("|")) {
              {
                const H = G.split("|");
                if (H.length >= 2) {
                  const I = H[0],
                    J = H[1],
                    K = H[2] || "",
                    L = H[3] || "";
                  K && L ? k = "socks5://" + K + ":" + L + "@" + I + ":" + J : k = "socks5://" + I + ":" + J;
                }
              }
            } else {
              if (G.startsWith("socks5://")) k = G;else {
                console.log("⚠️ 6个字段时第6个应该是代理，格式错误");
                return null;
              }
            }
          } else return console.log("⚠️ 6个字段时第6个应该是代理，格式错误"), null;
        } else return console.log("⚠️ 不支持的格式（字段数：" + f.length + "）"), null;
      }
    }
  }
  return {
    "index": b,
    "nickname": g,
    "salt": i,
    "cookie": h,
    "region_ticket": j,
    "proxy_url": k
  };
}
function aI() {
  const b = aG(),
    e = [];
  b.forEach((f, g) => {
    const i = aH(f, g + 1);
    if (i) {
      e.push(i);
    } else console.log("账号配置格式异常：" + f);
  });
  return e;
}
class aJ {
  constructor(a, b) {
    const e = {
      "CpLuw": function (f, g) {
        return f !== g;
      },
      "LuZDM": function (f, g, h) {
        return f(g, h);
      },
      "LTCiQ": "13.7.20.10468",
      "WnPAO": "宝箱广告",
      "kQCJE": "看广告得金币",
      "FvCyS": "搜索广告",
      "wnKmS": "eyJwYWdlSWQiOjEwMDE0LCJzdWJQYWdlSWQiOjEwMDE2MTUzNSwicG9zSWQiOjIxNjI2NywiYnVzaW5lc3NJZCI6NzA3NywiZXh0UGFyYW1zIjoiYzc4OWI1ZTAzMjMxOTUwZjcyM2ZjMWE1ZGJjYzgwNmYzMDE1OTcyZWE0Mzc2NmNlNDYwNTk2ZDgzMGVjNTE5MDM0OGEwNTlkOTA2NWYwZGY1ZjkwY2YwMjEwMGVhMmQzYzU0YjUyZDBlNGUxY2Q0NmMxN2ExZDU3YmRhY2EyMzVlM2U1NjYzN2JmZGQzMThiZWMzNTgzOWU1YzIxNWUyNzMzY2IyMzQ2ZGQ1NDYyODc1NDdlMjc4OWYxMjZjZWU5NWZhYzg4N2IxMzM2MzBlZTEzYTVmYTlhODYzNDYxODQ5MjM0NDk3ZGY3ZTRmOWYyYzk2ZjQ5YzViMGExNzQ2NGE2MGM0MDg1MzU2NTY2ZDc4NGIxYjY3NzY3MzYzYjg3IiwiY3VzdG9tRGF0YSI6eyJleGl0SW5mbyI6eyJ0b2FzdERlc2MiOm51bGwsInRvYXN0SW1nVXJsIjpudWxsfX0sInBlbmRhbnRUeXBlIjoxLCJkaXNwbGF5VHlwZSI6Miwic2luZ2xlUGFnZUlkIjowLCJzaW5nbGVTdWJQYWdlSWQiOjAsImNoYW5uZWwiOjAsImNvdW50ZG93blJlcG9ydCI6ZmFsc2UsInRoZW1lVHlwZSI6MCwibWl4ZWRBZCI6dHJ1ZSwiZnVsbE1peGVkIjp0cnVlLCJhdXRvUmVwb3J0Ijp0cnVlLCJmcm9tVGFza0NlbnRlciI6dHJ1ZSwic2VhcmNoSW5zcGlyZVNjaGVtZUluZm8iOm51bGwsImFtb3VudCI6MH0",
      "zXDHE": "饭补广告",
      "uCPvk": function (f, g) {
        return f !== g;
      },
      "VcGAo": "rxdIc",
      "KqnwQ": "hsywO",
      "togMS": "JLIQL",
      "qyZsD": function (f) {
        return f();
      },
      "FWHBY": function (f) {
        return f();
      },
      "REGeL": function (f) {
        return f();
      },
      "VLTXx": function (f, g) {
        return f - g;
      }
    };
    this.accountConfig = a;
    this.tasksToExecute = b;
    this.nickname = a.nickname;
    this.customRegionTicket = a.region_ticket;
    this.cookieInfo = this._extractCookieInfo();
    this.egid = this.cookieInfo.egid || "";
    this.did = this.cookieInfo.did || "";
    this.userId = this.cookieInfo.user_id || "";
    this.kuaishouApiSt = this.cookieInfo.kuaishou_api_st || "";
    this.appver = this.cookieInfo.appver || "13.7.20.10468";
    this.ssFirstTaskShown = false;
    this.taskConfigs = {
      "box": {
        "name": "宝箱广告",
        "business_id": 604,
        "pos_id": 20347,
        "sub_page_id": 100024063,
        "request_scene_type": 1,
        "task_type": 1
      },
      "look": {
        "name": "看广告得金币",
        "business_id": 671,
        "pos_id": 24068,
        "sub_page_id": 100026368,
        "request_scene_type": 1,
        "task_type": 1
      },
      "ss": {
        "name": "搜索广告",
        "business_id": 7077,
        "pos_id": 216267,
        "sub_page_id": 100161535,
        "page_id": 10014,
        "request_scene_type": 1,
        "task_type": 2,
        "link_url": "eyJwYWdlSWQiOjEwMDE0LCJzdWJQYWdlSWQiOjEwMDE2MTUzNSwicG9zSWQiOjIxNjI2NywiYnVzaW5lc3NJZCI6NzA3NywiZXh0UGFyYW1zIjoiYzc4OWI1ZTAzMjMxOTUwZjcyM2ZjMWE1ZGJjYzgwNmYzMDE1OTcyZWE0Mzc2NmNlNDYwNTk2ZDgzMGVjNTE5MDM0OGEwNTlkOTA2NWYwZGY1ZjkwY2YwMjEwMGVhMmQzYzU0YjUyZDBlNGUxY2Q0NmMxN2ExZDU3YmRhY2EyMzVlM2U1NjYzN2JmZGQzMThiZWMzNTgzOWU1YzIxNWUyNzMzY2IyMzQ2ZGQ1NDYyODc1NDdlMjc4OWYxMjZjZWU5NWZhYzg4N2IxMzM2MzBlZTEzYTVmYTlhODYzNDYxODQ5MjM0NDk3ZGY3ZTRmOWYyYzk2ZjQ5YzViMGExNzQ2NGE2MGM0MDg1MzU2NTY2ZDc4NGIxYjY3NzY3MzYzYjg3IiwiY3VzdG9tRGF0YSI6eyJleGl0SW5mbyI6eyJ0b2FzdERlc2MiOm51bGwsInRvYXN0SW1nVXJsIjpudWxsfX0sInBlbmRhbnRUeXBlIjoxLCJkaXNwbGF5VHlwZSI6Miwic2luZ2xlUGFnZUlkIjowLCJzaW5nbGVTdWJQYWdlSWQiOjAsImNoYW5uZWwiOjAsImNvdW50ZG93blJlcG9ydCI6ZmFsc2UsInRoZW1lVHlwZSI6MCwibWl4ZWRBZCI6dHJ1ZSwiZnVsbE1peGVkIjp0cnVlLCJhdXRvUmVwb3J0Ijp0cnVlLCJmcm9tVGFza0NlbnRlciI6dHJ1ZSwic2VhcmNoSW5zcGlyZVNjaGVtZUluZm8iOm51bGwsImFtb3VudCI6MH0"
      },
      "box_extra": {
        "name": "饭补广告",
        "business_id": 921,
        "pos_id": 29742,
        "sub_page_id": 100029908,
        "request_scene_type": 7,
        "task_type": 2
      }
    };
    this.taskStats = {};
    for (const f of this.tasksToExecute) {
      {
        if (this.taskConfigs[f]) {
          this.taskStats[f] = {
            "success": 0,
            "failed": 0,
            "total_reward": 0
          };
        }
      }
    }
    !this.taskStats.box_extra && (this.taskStats.box_extra = {
      "success": 0,
      "failed": 0,
      "total_reward": 0
    });
    this.coinLimit = av();
    this.coinExceeded = false;
    this.stopAllTasks = false;
    this.taskLimitReached = {};
    for (const i of this.tasksToExecute) {
      this.taskConfigs[i] && (this.taskLimitReached[i] = false);
    }
    this.jbjcValues = aD();
    this.jbjcStreak = 0;
    this.jbjcLimit = 5;
    this.adInfoFailCount = 0;
    this.adInfoFailLimit = 3;
    this.ggcsEnabled = ay();
    this.jbqzEnabled = az();
    this.dynamicDid = null;
    this.didFixed = false;
    this.startTime = Date.now();
    this.endTime = this.startTime - 30000;
    this._updateQueryParams();
  }
  ["_updateQueryParams"]() {
    const a = this.getCurrentDid();
    this.queryParams = "mod=Xiaomi(MI 11)&appver=" + this.appver + "&egid=" + this.egid + "&did=" + a;
  }
  ["generateDeviceId"]() {
    try {
      {
        const b = "0123456789abcdef";
        let f = "";
        for (let g = 0; g < 16; g++) {
          f += b.charAt(Math.floor(Math.random() * b.length));
        }
        return "ANDROID_" + f;
      }
    } catch (j) {
      {
        console.log("设备ID生成异常: " + (j.message || j));
        const k = Date.now().toString(16).toUpperCase();
        return "ANDROID_" + k.slice(0, 16);
      }
    }
  }
  ["_extractCookieInfo"]() {
    const b = {};
    try {
      const f = this.accountConfig.cookie.split(";");
      for (let g of f) {
        {
          g = g.trim();
          if (!g.includes("=")) continue;
          const [i, j] = g.split("=", 2);
          if (i === "egid") b.egid = j;else {
            if (i === "did") b.did = j;else {
              if (i === "userId") b.user_id = j;else {
                if (i === "kuaishou.api_st") b.kuaishou_api_st = j;else {
                  if (i === "appver") b.appver = j;
                }
              }
            }
          }
        }
      }
    } catch (k) {
      console.log("账户[" + this.accountConfig.nickname + "] Cookie解析异常: " + (k.message || k));
    }
    return b;
  }
  ["getCurrentDid"]() {
    if (this.jbqzEnabled && this.dynamicDid && !this.didFixed) {
      return this.dynamicDid;
    }
    return this.did;
  }
  ["_getImpExtData"](a) {
    if (a.name === "搜索广告") {
      const e = a.link_url || "",
        f = aE();
      return JSON.stringify({
        "openH5AdCount": 2,
        "sessionLookedCompletedCount": "1",
        "sessionType": "1",
        "searchKey": f,
        "triggerType": "2",
        "disableReportToast": "true",
        "businessEnterAction": "7",
        "neoParams": e
      }, null, 0);
    }
    return "{}";
  }
  async ["getAccountBasicInfo"](a) {
    const f = "https://encourage.kuaishou.com/rest/wd/encourage/account/basicInfo",
      g = {
        "Host": "encourage.kuaishou.com",
        "User-Agent": "kwai-android aegon/4.27.0",
        "Cookie": this.accountConfig.cookie,
        "Content-Type": "application/x-www-form-urlencoded"
      };
    try {
      const h = await a.get(f, {
        "headers": g,
        "timeout": 15000
      });
      if (h.status !== 200) {
        console.log("[调试] 账户[" + this.nickname + "] 基础信息请求状态异常: " + h.status);
        return null;
      }
      const i = h.data;
      if (i && i.result === 1 && i.data) {
        const k = i.data;
        let l = k.coinAmount || 0,
          m = k.cashAmountDisplay || 0;
        try {
          l = l ? parseInt(l, 10) : 0;
        } catch {
          l = 0;
        }
        try {
          m = m ? parseFloat(m) : 0;
        } catch {
          m = 0;
        }
        return {
          "nickname": k.userData && k.userData.nickname || this.nickname,
          "total_coin": l,
          "all_cash": m
        };
      }
      return null;
    } catch (o) {
      console.log("[调试] 账户[" + this.nickname + "] 基础信息请求错误: " + (o.message || o));
      return null;
    }
  }
  async ["checkCoinLimit"](a) {
    try {
      {
        const f = await this.getAccountBasicInfo(a);
        if (f && f.total_coin) {
          const g = parseInt(f.total_coin, 10) || 0;
          if (g >= this.coinLimit) return console.log("⚠️ 账户[" + this.nickname + "] 金币数量 " + g + " 已达上限 " + this.coinLimit + "，停止执行"), this.coinExceeded = true, this.stopAllTasks = true, true;
        }
        return false;
      }
    } catch (i) {
      console.log("账户[" + this.nickname + "] 金币检查过程异常: " + (i.message || i));
      return false;
    }
  }
  async ["getAdInfo"](a, b) {
    const f = {
      "YlRpQ": "❌ 账户[${this.nickname}] /nssig(任务报告) 返回空值",
      "ooddj": function (g, h) {
        return g(h);
      },
      "MJpFN": "卡密或绑定验证失败",
      "kByPR": "/rest/e/reward/mixed/ad",
      "ssbNe": "|encData|",
      "VtcGQ": "|sign|",
      "muXjk": "false",
      "NCbTD": "3c2cd3f3",
      "QodrA": "1_23",
      "IgnNK": "android",
      "OHGid": "1##swLdgl:99#ecPp:-9#cmNt:-0#cmHs:-3#cmMnsl:-0",
      "fgxpn": "Xiaomi(23116PN5BC)",
      "FWibr": "CUCC",
      "yGmiJ": "zh-cn",
      "OxDyJ": "WIFI",
      "XVIPj": "1599",
      "ePvOj": "ANDROID_PHONE",
      "WxMZX": "11.6",
      "Htqff": "pineapple",
      "JPdjV": "KUAISHOU",
      "NgqzZ": "ANDROID_15",
      "VEPmM": "1080",
      "DUXio": "2400",
      "xQaAM": "arm64",
      "dlmUs": "kuaishou",
      "zwuCG": "com.smile.gifmaker",
      "RrCak": function (g, h) {
        return g === h;
      },
      "eKAZb": "搜索广告",
      "zaJmO": function (g, h) {
        return g + h;
      },
      "OZYsf": function (g, h) {
        return g + h;
      },
      "VTfyS": function (g, h) {
        return g + h;
      },
      "cxbhr": function (g, h) {
        return g + h;
      },
      "IEMMK": "https://api.e.kuaishou.com",
      "BBFWb": function (g, h) {
        return g + h;
      },
      "kKSMj": function (g, h) {
        return g + h;
      },
      "EQghR": "kuaishou.api_st=",
      "dRvlP": ";__NSWJ=;region_ticket=RT_66898EB2122EC01C6A99E8FCCB4887F9C156DFC294E9FD56AD0156AECEB24C4EC69BFDFE7",
      "RwMrY": "api.e.kuaishou.com",
      "kRdFw": "kwai-android aegon/4.27.0",
      "duvNh": "application/x-www-form-urlencoded",
      "OxBsI": "model=23127PN0CC;os=Android;nqe-score=36;network=WIFI;signal-strength=4;",
      "zXCly": function (g, h) {
        return g !== h;
      },
      "LbsJT": function (g, h) {
        return g === h;
      },
      "IVEqX": function (g, h) {
        return g > h;
      },
      "tYjby": "EGdzW",
      "kYgcy": function (g, h) {
        return g !== h;
      },
      "QKHxk": "Ciygb",
      "XMDiQ": "未知错误",
      "DKtwq": "cHdok",
      "kdboy": "tcJWU",
      "yTgeN": "sQLPC"
    };
    try {
      const g = "/rest/e/reward/mixed/ad",
        h = {
          "encData": "|encData|",
          "sign": "|sign|",
          "cs": "false",
          "client_key": "3c2cd3f3",
          "videoModelCrowdTag": "1_23",
          "os": "android",
          "kuaishou.api_st": this.kuaishouApiSt,
          "uQaTag": "1##swLdgl:99#ecPp:-9#cmNt:-0#cmHs:-3#cmMnsl:-0"
        },
        i = this.getCurrentDid(),
        j = {
          "earphoneMode": "1",
          "mod": "Xiaomi(23116PN5BC)",
          "appver": this.appver,
          "isp": "CUCC",
          "language": "zh-cn",
          "ud": this.userId,
          "did_tag": "0",
          "net": "WIFI",
          "kcv": "1599",
          "app": "0",
          "kpf": "ANDROID_PHONE",
          "ver": "11.6",
          "android_os": "0",
          "boardPlatform": "pineapple",
          "kpn": "KUAISHOU",
          "androidApiLevel": "35",
          "country_code": "cn",
          "sys": "ANDROID_15",
          "sw": "1080",
          "sh": "2400",
          "abi": "arm64",
          "userRecoBit": "0"
        },
        k = {
          "appInfo": {
            "appId": "kuaishou",
            "name": "快手",
            "packageName": "com.smile.gifmaker",
            "version": this.appver,
            "versionCode": -1
          },
          "deviceInfo": {
            "osType": 1,
            "osVersion": "15",
            "deviceId": i,
            "screenSize": {
              "width": 1080,
              "height": 2249
            },
            "ftt": ""
          },
          "userInfo": {
            "userId": this.userId,
            "age": 0,
            "gender": ""
          },
          "impInfo": [{
            "pageId": b.page_id || 100011251,
            "subPageId": b.sub_page_id,
            "action": 0,
            "browseType": b.name === "搜索广告" ? 4 : 3,
            "impExtData": this._getImpExtData(b),
            "mediaExtData": "{}"
          }]
        },
        l = JSON.stringify(k),
        m = a5.stringify(j) + "&" + a5.stringify(h),
        n = await this._generateSignature2(a, g, m, this.accountConfig.salt, l);
      if (!n) return console.log("❌ 账户[" + this.nickname + "] 签名生成失败，无法获取" + b.name), null;
      const o = {
        ...j,
        "sig": n.sig || "",
        "__NS_sig3": n.__NS_sig3 || "",
        "__NS_xfalcon": n.__NS_xfalcon || "",
        "__NStokensig": n.__NStokensig || ""
      };
      h.encData = n.encData || "";
      h.sign = n.sign || "";
      const p = "https://api.e.kuaishou.com" + g + "?" + a5.stringify(o),
        q = "kuaishou.api_st=" + this.kuaishouApiSt + ";__NSWJ=;region_ticket=RT_66898EB2122EC01C6A99E8FCCB4887F9C156DFC294E9FD56AD0156AECEB24C4EC69BFDFE7",
        r = {
          "Host": "api.e.kuaishou.com",
          "User-Agent": "kwai-android aegon/4.27.0",
          "Cookie": q,
          "Content-Type": "application/x-www-form-urlencoded",
          "X-Client-Info": "model=23127PN0CC;os=Android;nqe-score=36;network=WIFI;signal-strength=4;"
        };
      try {
        const s = await a.post(p, a5.stringify(h), {
          "headers": r,
          "timeout": 15000
        });
        if (s.status !== 200) return console.log("[调试] 广告信息请求状态异常: " + s.status), null;
        const t = s.data;
        if (!t) return null;
        if (t.errorMsg === "OK" && Array.isArray(t.feeds) && t.feeds[0] && t.feeds[0].ad) {
          const u = t.feeds[0],
            v = u.exp_tag || "",
            w = v.split("/");
          let x = "";
          if (w.length > 1) {
            const z = w[1].split("_");
            x = z[0] || "";
          }
          let y = false;
          try {
            {
              const A = u.ad && u.ad.adDataV2 || {},
                B = A.onceAgainRewardInfo || {},
                C = B.hasMore || false;
              if (C) {
                y = true;
              }
            }
          } catch (F) {}
          return {
            "cid": u.ad.creativeId,
            "llsid": x,
            "hasRewardEnd": y
          };
        }
        console.log("❌ 账户[" + this.nickname + "] 广告信息获取失败: " + (t.errorMsg || "未知错误"));
        return null;
      } catch (G) {
        console.log("❌ 账户[" + this.nickname + "] 广告信息请求异常: " + (G.message || G));
        return null;
      }
    } catch (I) {
      console.log("❌ 账户[" + this.nickname + "] 广告信息处理异常: " + (I.message || I));
      return null;
    }
  }
  async ["_generateSignature"](a, b, f, g, h) {
    try {
      const j = JSON.stringify({
          "businessId": h.business_id,
          "endTime": this.endTime,
          "extParams": "",
          "mediaScene": "video",
          "neoInfos": [{
            "creativeId": b,
            "extInfo": "",
            "llsid": f,
            "requestSceneType": h.request_scene_type,
            "taskType": h.task_type,
            "watchExpId": "",
            "watchStage": 0
          }],
          "pageId": h.page_id || 100011251,
          "posId": h.pos_id,
          "reportType": 0,
          "sessionId": "",
          "startTime": this.startTime,
          "subPageId": h.sub_page_id
        }),
        l = "bizStr=" + encodeURIComponent(j) + "&cs=false&client_key=3c2cd3f3",
        m = a5.parse(this.queryParams),
        n = {};
      for (const z of Object.keys(m)) {
        const A = m[z];
        n[z] = Array.isArray(A) ? A[0] : A;
      }
      const o = a5.parse(l),
        p = {};
      for (const B of Object.keys(o)) {
        const C = o[B];
        p[B] = Array.isArray(C) ? C[0] : C;
      }
      const q = {
        ...n,
        ...p
      };
      delete q.sig;
      delete q.__NS_sig3;
      delete q.__NS_xfalcon;
      delete q.__NStokensig;
      const r = "/rest/r/ad/task/report",
        s = a5.stringify(q),
        t = await this.requestNssig(s, this.accountConfig.salt, r, "账户[" + this.nickname + "] nssig(任务报告)");
      if (!t) {
        console.log("❌ 账户[${this.nickname}] /nssig(任务报告) 返回空值");
        return null;
      }
      const u = t.sig || "",
        w = t.nstokensig || "",
        x = t.nssig3 || "",
        y = t.nssig4 || "";
      if (!u || !w || !x || !y) return console.log("❌ 账户[" + this.nickname + "] /nssig(任务报告) 返回字段不完整"), null;
      return {
        "sig": u,
        "sig3": x,
        "xfalcon": y,
        "sigtoken": w,
        "post": l
      };
    } catch (E) {
      console.log("❌ 账户[" + this.nickname + "] 生成签名异常: " + (E.message || E));
      return null;
    }
  }
  async ["_generateSignature2"](a, b, f, g, h) {
    const i = {
      "wOcBb": function (j, l) {
        return j >= l;
      },
      "ciVbO": "false",
      "IJlRM": function (j, l) {
        return j === l;
      },
      "bAbsP": "ZAKSl",
      "EXcaZ": "bPtpw",
      "VVZHu": "utf8",
      "ZDyyd": "base64",
      "lhitk": function (j, l) {
        return j || l;
      },
      "WoZJy": "lIahh",
      "Khkdz": "QfhMQ",
      "cOdlc": "❌ 账户[${this.nickname}] /nssig(广告) 返回空值",
      "vEXLs": function (j, l) {
        return j || l;
      },
      "IeKLq": function (j, l) {
        return j !== l;
      },
      "dKvem": "ZniPb",
      "cPQND": "qIiLa"
    };
    try {
      {
        const l = Buffer.from(h, "utf8").toString("base64"),
          m = await this.requestEncsign(l, "账户[" + this.nickname + "] encsign(广告)");
        if (!m) return console.log("账户[" + this.nickname + "] /encsign 返回空值"), null;
        const n = m.encdata || m.encData,
          o = m.sign;
        if (!n || !o) {
          console.log("账户[" + this.nickname + "] /encsign 返回字段不完整");
          return null;
        }
        const p = a5.parse(f),
          q = {};
        for (const z of Object.keys(p)) {
          const A = p[z];
          q[z] = Array.isArray(A) ? A[0] : A;
        }
        q.encData = n;
        q.sign = o;
        const r = a5.stringify(q),
          s = await this.requestNssig(r, g, b, "账户[" + this.nickname + "] nssig(广告)");
        if (!s) return console.log("❌ 账户[${this.nickname}] /nssig(广告) 返回空值"), null;
        const t = s.sig || "",
          u = s.nstokensig || "",
          w = s.nssig3 || "",
          x = s.nssig4 || "";
        if (!t || !u || !w || !x) return console.log("❌ 账户[" + this.nickname + "] /nssig(广告) 返回字段不完整"), null;
        return {
          "encData": n,
          "sign": o,
          "sig": t,
          "__NS_sig3": w,
          "__NS_xfalcon": x,
          "__NStokensig": u
        };
      }
    } catch (B) {
      console.log("账户[" + this.nickname + "] 生成广告签名异常: " + (B.message || B));
      return null;
    }
  }
  async ["submitReport"](a, b, f, g, h, i, j, k) {
    try {
      {
        const m = "https://api.e.kuaishou.com/rest/r/ad/task/report?" + this.queryParams + ("&sig=" + b + "&__NS_sig3=" + f + "&__NS_xfalcon=" + g + "&__NStokensig=" + h),
          n = this.customRegionTicket || "";
        let o;
        if (n) o = "kuaishou.api_st=" + this.kuaishouApiSt + ";__NSWJ=;region_ticket=" + n;else {
          o = "kuaishou.api_st=" + this.kuaishouApiSt + ";__NSWJ=;region_ticket=RT_66898EB2122EC01C6A99E8FCCB4887F9C156DFC294E9FD56AD0156AECEB24C4EC69BFDFE7";
        }
        const p = {
          "Host": "api.e.kuaishou.cn",
          "User-Agent": "kwai-android aegon/4.27.0",
          "Cookie": o,
          "Content-Type": "application/x-www-form-urlencoded",
          "X-Client-Info": "model=23127PN0CC;os=Android;nqe-score=36;network=WIFI;signal-strength=4;"
        };
        try {
          const r = await a.post(m, i, {
            "headers": p,
            "timeout": 15000
          });
          if (r.status !== 200) return console.log("[调试] 报告提交状态异常: " + r.status), {
            "success": false,
            "reward": 0
          };
          const s = r.data;
          if (!s) return {
            "success": false,
            "reward": 0
          };
          if (s.result === 1) {
            const u = (s.data && s.data.neoAmount) !== undefined ? s.data.neoAmount : 0;
            return {
              "success": true,
              "reward": u
            };
          }
          const t = [20107, 20108, 1003, 415];
          if (t.includes(s.result)) return console.log("⚠️ 账户[" + this.nickname + "] " + k.name + " 任务已达上限"), this.taskLimitReached[j] = true, {
            "success": false,
            "reward": 0
          };
          console.log("❌ 账户[" + this.nickname + "] " + k.name + " 奖励获取失败，result=" + s.result + " msg=" + (s.data || ""));
          return {
            "success": false,
            "reward": 0
          };
        } catch (v) {
          console.log("❌ 账户[" + this.nickname + "] 报告提交请求异常: " + (v.message || v));
          return {
            "success": false,
            "reward": 0
          };
        }
      }
    } catch (y) {
      console.log("❌ 账户[" + this.nickname + "] 任务提交过程异常: " + (y.message || y));
      return {
        "success": false,
        "reward": 0
      };
    }
  }
  async ["_retryOperation"](a, b, f = 3, g = 2) {
    const h = {
      "oefRX": function (k, l) {
        return k < l;
      },
      "NJBgD": function (k, l) {
        return k !== l;
      },
      "hDakH": "mFnlK",
      "gzmXn": "AnRAV",
      "fUKyd": function (k) {
        return k();
      },
      "XPaZu": function (k, l) {
        return k(l);
      },
      "fimWI": function (k, l) {
        return k * l;
      }
    };
    let i = 0,
      j = null;
    while (i < f) {
      try {
        {
          const k = await a();
          if (k) return k;
          j = new Error(b + " 返回空结果");
        }
      } catch (m) {
        j = m;
        console.log("账户[" + this.nickname + "] " + b + " 过程异常: " + (m.message || m));
      }
      i += 1;
      i < f && (console.log("账户[" + this.nickname + "] " + b + " 失败，第 " + i + "/" + f + " 次重试"), await a8(g * 1000));
    }
    return null;
  }
  async ["executeTask"](a, b, f = 1, g = 1, h = false, i = true) {
    const j = {
        "jcPTa": "SIGINT",
        "FKnSb": "SIGTERM",
        "WOYWX": function (l, m) {
          return l > m;
        },
        "nTJJY": function (l) {
          return l();
        },
        "eOWNk": function (l, m) {
          return l >= m;
        },
        "dCOjP": function (l, m) {
          return l !== m;
        },
        "NNHtu": "uprPQ",
        "QgmLt": "dhNpR",
        "fHlhM": function (l, m) {
          return l === m;
        },
        "hCgvE": "QypCZ",
        "upcuK": "zLBos",
        "rCIqV": "gicIJ",
        "rgDlN": "peIcO",
        "cYrUu": function (l, m) {
          return l === m;
        },
        "xuoUt": function (l, m) {
          return l !== m;
        },
        "kzXRr": "xkAKw",
        "sFLEw": "QKaVc",
        "CSYvy": function (l, m) {
          return l >= m;
        },
        "OOIug": function (l, m) {
          return l / m;
        },
        "HNFHT": function (l, m) {
          return l + m;
        },
        "pPlgr": function (l, m) {
          return l * m;
        },
        "BwdKU": function (l, m) {
          return l + m;
        },
        "tfLgJ": function (l, m) {
          return l - m;
        },
        "juLiW": "_追加",
        "NuxVN": function (l, m) {
          return l !== m;
        },
        "fOQjE": "WZTZl",
        "TFPsC": function (l, m) {
          return l === m;
        },
        "cPPmR": function (l) {
          return l();
        },
        "xAPJB": function (l, m) {
          return l === m;
        },
        "XMFAB": function (l, m) {
          return l(m);
        },
        "XLvyn": function (l, m) {
          return l < m;
        },
        "qUJci": "fNYMn",
        "EDeEo": "icnQt",
        "EteHc": "yWUIQ",
        "ROIst": "OHpCR",
        "UVaNw": function (l, m) {
          return l !== m;
        },
        "LeykT": "JEwOy",
        "MmnAo": "FkJlv"
      },
      k = this.taskConfigs[b];
    if (!k) return console.log("❌ 账户[" + this.nickname + "] 未知任务类型: " + b), {
      "success": false,
      "hasRewardEnd": false
    };
    if (this.taskLimitReached[b]) {
      return {
        "success": false,
        "hasRewardEnd": false
      };
    }
    try {
      {
        const n = k.task_type ?? 1,
          o = k.request_scene_type ?? 1;
        k.task_type = f;
        if (b === "ss") h ? (k.request_scene_type = 7, k.task_type = 2) : k.request_scene_type = 1;else f === 2 && (k.request_scene_type = 7);
        const p = await this._retryOperation(() => this.getAdInfo(a, k), "获取" + k.name + "信息", 3);
        if (!p) {
          this.adInfoFailCount += 1;
          const y = a9();
          console.log("账号[" + this.nickname + "]获取" + k.name + "信息 失败，重试 " + this.adInfoFailCount + "/" + this.adInfoFailLimit);
          this.ggcsEnabled && this.adInfoFailCount >= this.adInfoFailLimit && (console.log("🏁 账号[" + this.nickname + "] 获取看广告信息失败" + this.adInfoFailLimit + "次，结束该账号"), this.stopAllTasks = true);
          k.task_type = n;
          k.request_scene_type = o;
          this.taskStats[b].failed += 1;
          return {
            "success": false,
            "hasRewardEnd": false
          };
        }
        this.adInfoFailCount = 0;
        const [q, r] = aw(),
          s = (Math.floor(Math.random() * (r - q + 1)) + q) / 1000,
          t = h ? "_追加" : "",
          u = a9();
        if (i) {
          {
            if (b === "ss") {
              const A = aC();
              console.log(u + " - INFO - 账号[" + this.nickname + "] 开始搜索广告任务 " + g + "/" + A);
              if (!h && !this.ssFirstTaskShown && g === 1) {
                const B = aE();
                (process.env.KS_SEARCH_KEYWORD || "").trim() && (console.log(u + " - INFO - 账号[" + this.nickname + "] 搜索关键词[" + B + "]"), this.ssFirstTaskShown = true);
              }
            } else console.log(u + " - INFO - 账号[" + this.nickname + "] 开始广告任务 " + g + "/10");
          }
        }
        console.log(u + " - INFO - 账号[" + this.nickname + "] ==>" + k.name + " 广告浏览中 " + Math.round(s) + " 秒");
        await a8(s * 1000);
        const v = await this._retryOperation(() => this._generateSignature(a, p.cid, p.llsid, b, k), "生成" + k.name + "签名", 3);
        if (!v) return k.task_type = n, k.request_scene_type = o, this.taskStats[b].failed += 1, {
          "success": false,
          "hasRewardEnd": false
        };
        const w = await this._retryOperation(() => this.submitReport(a, v.sig, v.sig3, v.xfalcon, v.sigtoken, v.post, b, k), "提交" + k.name + "报告", 3);
        k.task_type = n;
        k.request_scene_type = o;
        if (w && w.success) {
          this.taskStats[b].success += 1;
          const C = w.reward || 0;
          this.taskStats[b].total_reward += C;
          console.log(u + " - INFO - 账号[" + this.nickname + "] " + k.name + t + C + "金币奖励！🐮🍺");
          if (this.jbqzEnabled && !this.didFixed) {
            if (C < 1000) {
              {
                const E = this.generateDeviceId();
                this.dynamicDid = E;
                this._updateQueryParams();
                console.log("💰 账号[" + this.nickname + "] 获得" + C + "金币 < 1000，切换设备ID: " + E);
              }
            } else {
              if (this.dynamicDid) {
                this.didFixed = true;
                console.log("✅ 账号[" + this.nickname + "] 获得" + C + "金币 >= 1000，固定设备ID: " + this.dynamicDid);
              }
            }
          }
          if (this.jbjcValues.includes(C)) {
            this.jbjcStreak += 1;
            const G = this.jbjcValues.join(",");
            console.log("⚠️ 账户[" + this.nickname + "] 获得" + C + "金币 (连续" + this.jbjcStreak + "次，检测值：" + G + ")");
            this.jbjcStreak >= this.jbjcLimit && (console.log("🏁 账户[" + this.nickname + "] 连续" + this.jbjcLimit + "次获得" + G + "金币，停止该账号所有任务"), this.stopAllTasks = true);
          } else this.jbjcStreak = 0;
          return {
            "success": true,
            "hasRewardEnd": p.hasRewardEnd || false
          };
        }
        this.taskStats[b].failed += 1;
        return {
          "success": false,
          "hasRewardEnd": false
        };
      }
    } catch (J) {
      console.log("❌ 账户[" + this.nickname + "] 任务执行异常(" + b + "): " + (J.message || J));
      this.taskStats[b].failed += 1;
      return {
        "success": false,
        "hasRewardEnd": false
      };
    }
  }
  async ["executeAllTasksByPriority"](a) {
    const b = {
        "fiDig": "\n无有效任务执行结果。",
        "jXoXI": "0123456789abcdef",
        "xuwjb": function (n, o) {
          return n < o;
        },
        "UJoCa": function (n, o) {
          return n * o;
        },
        "qydUp": function (n) {
          return n();
        },
        "qichP": function (n, o) {
          return n === o;
        },
        "OMbjK": function (n, o) {
          return n && o;
        },
        "bMXww": function (n, o) {
          return n < o;
        },
        "gypyp": "rPvjX",
        "HluxW": function (n, o) {
          return n !== o;
        },
        "ocaCl": function (n, o) {
          return n - o;
        },
        "mFTDN": "look",
        "jnibx": function (n, o) {
          return n / o;
        },
        "jxQoV": function (n, o) {
          return n + o;
        },
        "IlAnt": function (n, o) {
          return n * o;
        },
        "dwAeg": function (n, o) {
          return n + o;
        },
        "NPaie": function (n, o) {
          return n - o;
        },
        "uUrUT": function (n, o) {
          return n(o);
        },
        "WrXku": function (n, o) {
          return n * o;
        },
        "NFeds": "JVIjA",
        "usKyb": "TQNYr",
        "kOWxM": function (n, o) {
          return n / o;
        },
        "LdBbC": function (n, o) {
          return n + o;
        },
        "YxlwU": function (n, o) {
          return n * o;
        },
        "BGdTL": function (n, o) {
          return n - o;
        },
        "QCHus": function (n, o) {
          return n(o);
        },
        "hZcBb": "uySfV",
        "YwcsP": "wMyaI",
        "lnjgS": function (n, o) {
          return n < o;
        }
      },
      e = this.tasksToExecute.filter(n => this.taskConfigs[n]),
      f = {},
      g = aB(),
      h = e.length === 1 && e[0] === "ss";
    if (h && g) {
      const n = "ss";
      let o = 0;
      const p = aC();
      while (o < p && !this.stopAllTasks) {
        o += 1;
        const q = await this.executeTask(a, n, 2, o, false, true);
        if (!q.success) continue;
        let r = q.hasRewardEnd || false;
        while (r && o < p && !this.stopAllTasks) {
          o += 1;
          const s = await this.executeTask(a, n, 2, o, true, true);
          if (!s.success) break;
          r = s.hasRewardEnd || false;
        }
      }
      f[n] = true;
      return f;
    }
    const i = e.filter(t => !["look", "ss"].includes(t));
    for (const t of i) {
      {
        if (this.stopAllTasks) break;
        const u = this.taskConfigs[t],
          v = await this.executeTask(a, t, u.task_type || 1, 1, false, false);
        f[t] = !!v.success;
        if (t !== i[i.length - 1] || e.includes("look")) {
          const w = Math.floor(Math.random() * 3001 + 3000) / 1000;
          await a8(w * 1000);
        }
      }
    }
    if (e.includes("ss") && !h) {
      {
        const z = "ss",
          A = this.taskConfigs[z],
          B = await this.executeTask(a, z, A.task_type || 2, 1, false, false);
        f[z] = !!B.success;
        if (e.includes("look")) {
          const C = Math.floor(Math.random() * 3001 + 3000) / 1000;
          await a8(C * 1000);
        }
      }
    }
    if (!e.includes("look")) {
      return f;
    }
    const j = "look";
    let k = 0;
    const l = 10,
      m = aA();
    while (k < l && !this.stopAllTasks) {
      k += 1;
      const E = await this.executeTask(a, j, 1, k, false, true);
      if (!E.success) continue;
      if (m) {
        let F = E.hasRewardEnd || false;
        while (F && k < l && !this.stopAllTasks) {
          k += 1;
          const G = await this.executeTask(a, j, 2, k, true, true);
          if (!G.success) break;
          F = G.hasRewardEnd || false;
        }
      }
    }
    f[j] = true;
    return f;
  }
  ["printTaskStats"]() {
    console.log("\n账户[" + this.nickname + "] 任务执行统计:");
    for (const [a, b] of Object.entries(this.taskStats)) {
      const e = this.taskConfigs[a]?.["name"] || a;
      console.log("  " + e + ": 成功" + b.success + "次, 失败" + b.failed + "次, 总奖励" + b.total_reward + "金币");
    }
  }
  ["getTaskStats"]() {
    return this.taskStats;
  }
  async ["requestEncsign"](a, b) {
    if (!ag) return null;
    const f = {
        "type": "encsign",
        "data": a,
        "ud": this.userId,
        "device_id": al(),
        "task": b
      },
      g = await ao(f, b);
    if (g && g.status) {
      let h = g.data || {};
      if (typeof h === "string") try {
        h = JSON.parse(h);
      } catch {}
      if (h && typeof h === "object" && h.data && typeof h.data === "object") {
        h = h.data;
      }
      return h;
    }
    g && g.error && console.log("[警告] " + b + " 网关返回错误: " + g.error);
    return null;
  }
  async ["requestNssig"](a, b, e, f) {
    const g = {
      "bJyjc": "⚠️ 授权网关未正确配置(AUTH_API_URL / client_api.php)，跳过版本检查",
      "WZjSs": function (j, k) {
        return j(k);
      },
      "cSpex": function (j, k) {
        return j !== k;
      },
      "PyWwF": "eDwKh",
      "BZxlH": "TJAft",
      "yAeeY": "nssig",
      "gQorV": function (j) {
        return j();
      },
      "HQedc": function (j, k, l) {
        return j(k, l);
      },
      "ttRza": "oFGpD",
      "qXtkZ": "iPovd",
      "YWsgO": function (j, k) {
        return j === k;
      },
      "PMSjs": "string",
      "jPhqV": function (j, k) {
        return j !== k;
      },
      "haaph": "iTtbW",
      "UyeUS": "TDUwi",
      "yRFSr": "object",
      "oIVzB": function (j, k) {
        return j === k;
      },
      "fJlsJ": function (j, k) {
        return j === k;
      },
      "gHXAq": "FBGLr",
      "MseOl": function (j, k) {
        return j === k;
      },
      "aqKxO": "ZydEI"
    };
    if (!ag) {
      return null;
    }
    const h = {
        "type": "nssig",
        "data": a,
        "salt": b,
        "path": e,
        "ud": this.userId,
        "device_id": al(),
        "task": f
      },
      i = await ao(h, f);
    if (i && i.status) {
      {
        let k = i.data || {};
        if (typeof k === "string") try {
          k = JSON.parse(k);
        } catch {}
        if (k && typeof k === "object" && k.data && typeof k.data === "object") {
          k = k.data;
        }
        return k;
      }
    }
    if (i && i.error) {
      console.log("[警告] " + f + " 网关返回错误: " + i.error);
    }
    return null;
  }
}
async function aK(a, b = "代理连通性检测") {
  if (!a) return {
    "ok": true,
    "msg": "✅ 未配置代理（直连模式）",
    "ip": "localhost"
  };
  const g = 3;
  for (let h = 0; h < g; h++) {
    try {
      const i = new a6(a),
        j = a4.create({
          "httpAgent": i,
          "httpsAgent": i
        }),
        k = Date.now(),
        l = "https://nebula.kuaishou.com",
        m = await j.get(l, {
          "timeout": 15000
        }),
        n = (Date.now() - k) / 1000;
      if (m.status === 200) {
        let o = "未知";
        try {
          const p = await j.get("https://ipinfo.io/json", {
            "timeout": 10000
          });
          p.status === 200 && p.data && (o = p.data.ip || "未知");
        } catch {
          o = "未知";
        }
        return {
          "ok": true,
          "msg": "✅ 代理正常，延迟: " + n.toFixed(2) + "秒，IP: " + o,
          "ip": o
        };
      }
      if (h < g - 1) {
        console.log("账户[" + b + "] 代理测试失败，重试 " + (h + 1) + "/" + g);
        await a8(1000);
        continue;
      }
      return {
        "ok": false,
        "msg": "❌ 代理测试失败，状态码: " + m.status,
        "ip": ""
      };
    } catch (q) {
      {
        if (h < g - 1) {
          {
            console.log("账户[" + b + "] 代理测试失败，重试 " + (h + 1) + "/" + g + ": " + (q.message || q));
            await a8(1000);
            continue;
          }
        }
        return {
          "ok": false,
          "msg": "❌ 代理测试失败: " + (q.message || q),
          "ip": ""
        };
      }
    }
  }
  return {
    "ok": false,
    "msg": "❌ 代理测试失败，3次重试均失败",
    "ip": ""
  };
}
function aL(a) {
  if (a) try {
    const b = new a6(a);
    return a4.create({
      "httpAgent": b,
      "httpsAgent": b
    });
  } catch (f) {
    console.log("[错误] 代理配置异常: " + (f.message || f));
  }
  return a4.create();
}
function aM(a) {
  return {
    "isTaskResult": true,
    ...a
  };
}
async function aN(a, b = 100) {
  const f = new Set(),
    g = aL(a.proxy_url);
  try {
    {
      const j = await aq("账户[" + a.index + "]");
      !j && (console.log("❌ 账户[" + a.index + "] 卡密验证失败，脚本已停止运行"), process.exit(1));
      if (a.proxy_url) {
        console.log("账户[" + a.index + "] 🔌 代理连接测试中...");
        const u = await aK(a.proxy_url, "账户[" + a.index + "]");
        console.log("  - " + u.msg);
        if (u.ok && u.ip && u.ip !== "localhost") {
          if (f.has(u.ip)) return console.log("\n⚠️ 检测到重复代理IP（" + u.ip + "），请检查配置！"), null;
          f.add(u.ip);
        }
      }
      const k = new aJ(a, aF());
      let l = await k.getAccountBasicInfo(g);
      const m = await ar(k);
      if (!m) return k.stopAllTasks = true, aM({
        "index": a.index,
        "nickname": k.nickname,
        "error": "卡密或绑定验证失败"
      });
      let n = a.nickname;
      if (l) {
        n = l.nickname || a.nickname;
        k.nickname = n;
        const v = l.total_coin || 0,
          w = l.all_cash || 0;
        console.log("账户[" + n + "] ✅ 登录验证成功， 当前金币: " + v + "，💸 当前余额: " + w);
      } else {
        {
          k.nickname = n;
          console.log("账户[" + n + "] ❌ 登录验证失败，基础信息获取失败");
          if (k.ggcsEnabled) return console.log("🏁 账号[" + n + "] 登录验证失败，结束该账号运行"), null;
          console.log("账户[" + n + "] 继续执行流程");
        }
      }
      await k.checkCoinLimit(g);
      if (k.coinExceeded) {
        {
          console.log("账户[" + k.nickname + "] 初始金币已达上限，跳过任务执行");
          const y = await k.getAccountBasicInfo(g),
            z = l ? l.total_coin || 0 : 0,
            A = y ? y.total_coin || 0 : 0,
            B = l ? l.all_cash || 0 : 0,
            C = y ? y.all_cash || 0 : 0;
          return aM({
            "index": a.index,
            "nickname": k.nickname,
            "initial_coin": z,
            "final_coin": A,
            "coin_change": A - z,
            "initial_cash": B,
            "final_cash": C,
            "cash_change": C - B,
            "stats": k.getTaskStats(),
            "coin_limit_exceeded": true
          });
        }
      }
      const o = ax();
      for (let E = 0; E < b; E++) {
        if ((process.env.KS_STOP_FLAG || "").trim() === "1") {
          console.log("账号[" + k.nickname + "] ⚠️ 收到停止信号，立即退出");
          return null;
        }
        console.log("账号[" + k.nickname + "] 🚀 开始第" + (E + 1) + "轮任务");
        await k.executeAllTasksByPriority(g);
        if (k.stopAllTasks) {
          console.log("账号[" + k.nickname + "] 🏁 达到停止条件，终止后续轮次");
          break;
        }
        if ((process.env.STOP_FLAG || "").trim() === "1") return console.log("账号[" + k.nickname + "] ⚠️ 收到停止信号，立即退出"), null;
        if (o > 0 && (E + 1) % o === 0 && E < b - 1) {
          const G = 600,
            H = a9();
          console.log("\n" + H + " - INFO - 账号[" + k.nickname + "] 休息10分钟\n");
          for (let I = 0; I < G; I++) {
            if ((process.env.KS_STOP_FLAG || "").trim() === "1") return console.log("账号[" + k.nickname + "] ⚠️ 收到停止信号，立即退出"), null;
            await a8(1000);
          }
        } else {
          if (E < b - 1) {
            const J = Math.floor(Math.random() * 5001 + 5000),
              K = Math.floor(J / 1000);
            for (let L = 0; L < K; L++) {
              if ((process.env.KS_STOP_FLAG || "").trim() === "1") return console.log("账号[" + k.nickname + "] ⚠️ 收到停止信号，立即退出"), null;
              await a8(1000);
            }
          }
        }
      }
      const p = await k.getAccountBasicInfo(g),
        q = l ? l.total_coin || 0 : 0,
        r = p ? p.total_coin || 0 : 0,
        s = l ? l.all_cash || 0 : 0,
        t = p ? p.all_cash || 0 : 0;
      k.printTaskStats();
      return aM({
        "index": a.index,
        "nickname": k.nickname,
        "initial_coin": q,
        "final_coin": r,
        "coin_change": r - q,
        "initial_cash": s,
        "final_cash": t,
        "cash_change": t - s,
        "stats": k.getTaskStats(),
        "coin_limit_exceeded": k.coinExceeded
      });
    }
  } finally {}
}
async function aO(a, b, e) {
  const f = a.map(g => aN(g, e));
  return Promise.all(f);
}
function aP(a) {
  if (!a || a.length === 0) {
    {
      console.log("\n无有效账户信息可显示。");
      return;
    }
  }
  const f = a.filter(x => x && x.isTaskResult);
  if (f.length === 0) {
    {
      console.log("\n无有效任务执行结果。");
      return;
    }
  }
  let g = 0,
    h = 0,
    i = 0,
    j = 0,
    k = 0,
    l = 0;
  try {
    for (const y of f) {
      {
        const A = y.initial_coin || 0,
          B = y.final_coin || 0,
          C = y.initial_cash || 0,
          D = y.final_cash || 0;
        g += A;
        h += B;
        j += C;
        k += D;
      }
    }
    i = h - g;
    l = k - j;
  } catch (E) {
    {
      console.log("汇总数据计算异常: " + (E.message || E));
      g = 0;
      h = 0;
      i = 0;
      j = 0;
      k = 0;
      l = 0;
    }
  }
  let m = 0,
    n = 0,
    o = 0;
  for (const I of f) {
    {
      if (!I.stats) continue;
      for (const J of Object.values(I.stats)) {
        m += (J.success || 0) + (J.failed || 0);
        n += J.success || 0;
        o += J.total_reward || 0;
      }
    }
  }
  const p = m > 0 ? n / m * 100 : 0,
    q = f.filter(M => M.coin_limit_exceeded).length;
  console.log("\n\n" + "=".repeat(80));
  console.log("|" + "快手任务执行结果汇总".padStart(39).padEnd(79) + "|");
  console.log("=".repeat(80));
  console.log("|总账户数: " + f.length + "超过金币上限账户: " + q + "总任务数: " + m + "任务成功率: " + p.toFixed(1) + "%|");
  console.log("|总金币变化: " + i + "总金币奖励: " + o + "总余额变化: " + l.toFixed(2) + "|");
  console.log("-".repeat(80));
  const s = ["序号", "账户名称", "初始金币", "最终金币", "金币变化", "初始余额", "最终余额", "余额变化"],
    t = [6, 16, 12, 12, 12, 12, 12, 12];
  let u = "|";
  s.forEach((M, N) => {
    const O = t[N];
    u += M.padStart(Math.floor((O + M.length) / 2)).padEnd(O) + "|";
  });
  console.log(u);
  let v = "|";
  t.forEach(M => {
    v += "-".repeat(M) + "|";
  });
  console.log(v);
  for (const M of f) {
    {
      let O = "|";
      O += String(M.index).padStart(3).padEnd(t[0]) + "|";
      const P = M.nickname + (M.coin_limit_exceeded ? " ⚠️" : "");
      O += P.slice(0, t[1] - 2).padEnd(t[1]) + "|";
      O += String(M.initial_coin || 0).padEnd(t[2]) + "|";
      O += String(M.final_coin || 0).padEnd(t[3]) + "|";
      const Q = M.coin_change || 0,
        R = (Q >= 0 ? "+" : "") + Q;
      O += R.padEnd(t[4]) + "|";
      O += String(M.initial_cash || 0).padEnd(t[5]) + "|";
      O += String(M.final_cash || 0).padEnd(t[6]) + "|";
      const S = M.cash_change || 0,
        T = (S >= 0 ? "+" : "") + S.toFixed(2);
      O += T.padEnd(t[7]) + "|";
      console.log(O);
    }
  }
  console.log("=".repeat(80));
  console.log("|" + "任务执行流程完毕，请查看详细结果".padStart(39).padEnd(79) + "|");
  console.log("=".repeat(80));
}
async function aQ() {
  if (ac && ac.trim() && ag && ah) await au();else {
    console.log("\n🔍 脚本版本: " + ad);
    if (!ac) console.log("⚠️ 未设置卡密，跳过版本检查");else !(ag && ah) && console.log("⚠️ 授权网关未正确配置(AUTH_API_URL / client_api.php)，跳过版本检查");
  }
  await as();
  const b = aI(),
    e = b.length,
    f = await aq("脚本启动");
  if (!f) {
    console.log("❌ 卡密验证失败，脚本终止运行");
    process.exit(1);
  }
  console.log("╔".padEnd(70, "═") + "╗");
  console.log("║" + "📢 购卡地址提示".padStart(35 + "📢 购卡地址提示".length / 2).padEnd(69) + "║");
  console.log("╠".padEnd(70, "═") + "╣");
  console.log("║  购卡地址: https://t.me/+U1IwSeGh-CA1Yjk1".padEnd(69) + "║");
  console.log("╚".padEnd(70, "═") + "╝");
  const g = aF(),
    h = {
      "box": "宝箱广告",
      "look": "看广告得金币",
      "box_extra": "饭补广告",
      "ss": "搜索广告"
    },
    i = g.map(A => h[A] || A),
    j = av(),
    k = ax(),
    l = aA(),
    m = (process.env.KS_TASKS || "").trim(),
    n = parseInt(process.env.KS_CONCURRENCY || "5", 10) || 5,
    o = (process.env.KS_ROUND_TOTAL || "50").trim();
  let p = parseInt(o, 10);
  if (Number.isNaN(p)) p = 50;
  const q = g.includes("look"),
    s = g.includes("ss");
  let t = null,
    u = null;
  if (s) {
    t = aB();
    u = aC();
  }
  console.log("".padEnd(80, "═"));
  console.log("📋 当前配置信息：");
  console.log("  账号数量: " + e);
  console.log("  金币上限 (KS_COIN_LIMIT): " + j + ((process.env.KS_COIN_LIMIT || "").trim() ? "" : " (默认)"));
  console.log("  轮次休息间隔 (KS_ROUND_REST_INTERVAL): " + k + " 轮" + ((process.env.KS_ROUND_REST_INTERVAL || "").trim() ? "" : " (默认)"));
  console.log("  执行任务 (KS_TASKS): " + (i.join(", ") || "look"));
  console.log(q ? "  广告追加 (KS_AD_APPEND / ggzj): " + (l ? "开启" : "关闭") : "  广告追加 (KS_AD_APPEND / ggzj): 未使用");
  s && (console.log("  搜索追加 (KS_SEARCH_APPEND / sszj): " + (t ? "开启" : "关闭")), console.log("  搜索广告次数 (KS_SEARCH_PER_ROUND / sscs): " + u + " 次/轮"));
  console.log("  并发上限 (KS_CONCURRENCY): " + n);
  console.log("  轮次上限 (KS_ROUND_TOTAL): " + p);
  console.log("".padEnd(80, "═"));
  if (e > n) {
    {
      console.log("错误: 检测到 " + e + " 个账户配置，最大并发限制" + n + "个");
      return;
    }
  }
  if (!b.length) {
    {
      console.log("未发现有效账户配置");
      return;
    }
  }
  console.log("\n防黑并发：" + n + "    防黑轮数：" + p + "\n");
  const v = await aO(b, n, p),
    w = [];
  for (const D of v) {
    if (D && D.isTaskResult) w.push(D);else D instanceof Error && console.log("任务执行过程异常: " + (D.message || D));
  }
  console.log("\n所有任务执行完毕。 ✅");
  console.log("\n" + "-".repeat(90) + " 账户信息汇总 " + "-".repeat(90));
  aP(w);
}
aQ().catch(a => {
  console.log("主流程异常: " + (a.message || a));
});
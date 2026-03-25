//Wed Mar 25 2026 09:25:33 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const _0x58ca24 = require("fs"),
  _0x4ce57d = require("path"),
  _0x23acb2 = require("child_process"),
  _0x1468f8 = require("querystring"),
  _0x3d30b7 = require("querystring"),
  {
    SocksProxyAgent: _0x24552b
  } = require("socks-proxy-agent");
function _0x4b7d56(_0x18de70, _0x4bf5c1 = "") {
  try {
    require.resolve(_0x18de70);
    console.log("[依赖检查] " + _0x18de70 + " 已安装.");
  } catch (_0x50e730) {
    console.log("[依赖检查] " + _0x18de70 + " 缺失，正在自动安装" + (_0x4bf5c1 ? " (" + _0x4bf5c1 + ")" : "") + "...");
    try {
      _0x23acb2.execSync("npm install " + _0x18de70 + _0x4bf5c1, {
        "stdio": "inherit"
      });
      console.log("[依赖修补] " + _0x18de70 + " 安装成功，继续运行.");
    } catch (_0x2c14c2) {
      console.error("[依赖修补失败] 无法安装 " + _0x18de70 + ": " + _0x2c14c2.message);
      process.exit(1);
    }
  }
}
const _0xf9fc70 = process.versions.node,
  [_0xddd6d0, _0x571fab] = _0xf9fc70.split(".").map(Number);
console.log("[Node.js 版本检测] 当前版本: " + _0xf9fc70 + " (major: " + _0xddd6d0 + ", minor: " + _0x571fab + ")");
let _0x544922 = "",
  _0x3e79cf = "";
if (_0xddd6d0 >= 18) console.log("[Node.js 版本兼容] Node.js 18+ 检测到，使用 request 默认版本（若有警告，可忽略或升级脚本）"), process.noDeprecation = true;else _0xddd6d0 < 14 ? (_0x3e79cf = "@^5.0.0", console.log("[Node.js 版本兼容] Node.js < 14 检测到，使用 socks-proxy-agent 旧版以兼容.")) : console.log("[Node.js 版本兼容] Node.js 14-17 检测到，使用默认依赖版本.");
_0x4b7d56("request", _0x544922);
_0x4b7d56("socks-proxy-agent", _0x3e79cf);
const _0x4a2483 = require("request");
process.noDeprecation = true;
const _0x5b82cb = process.env.kspt_api || "";
console.log("💡 签名API地址设置为: " + _0x5b82cb);
function _0x5235d3() {
  const _0x3167c7 = ["正在观看广告", "认真观看中...", "浏览广告内容", "模拟用户行为", "观看视频广告", "保持活跃状态", "广告浏览中", "正常观看时长"];
  return _0x3167c7[Math.floor(Math.random() * _0x3167c7.length)];
}
const _0x3172ac = process.env.DEV_MODE === "1" || process.env.DEV_MODE === "true",
  _0xd6bcd9 = process.env.ENABLE_DID_CHANGE === "1" || process.env.ENABLE_DID_CHANGE === "true";
function _0x363d38(_0x2cc7b8, _0x5b0d85) {
  const _0x170a21 = parseInt(process.env[_0x2cc7b8], 10);
  return isNaN(_0x170a21) ? _0x5b0d85 : _0x170a21;
}
const _0x4e0c2e = _0x363d38("KSLOW_REWARD_THRESHOLD", 10),
  _0x1ba09f = _0x363d38("KSROUNDS", 35),
  _0x296e1a = _0x363d38("KSCOIN_LIMIT", 500000),
  _0x423b76 = _0x363d38("KSLOW_REWARD_LIMIT", 3);
function _0x1ba120() {
  const _0x54b3a6 = process.env.Task;
  if (!_0x54b3a6) {
    console.log("未设置Task环境变量，将执行所有任务 (food, box, look, looks)");
    return ["food", "box", "look", "looks"];
  }
  const _0x5ae8db = _0x54b3a6.split(",").map(_0x1d54bf => _0x1d54bf.trim().toLowerCase()).filter(Boolean),
    _0x467538 = ["food", "box", "look", "looks"],
    _0x913c32 = _0x5ae8db.filter(_0x1f8a31 => _0x467538.includes(_0x1f8a31));
  if (_0x913c32.length === 0) return console.log("Task环境变量中没有有效任务，将执行所有任务 (food, box, look, looks)"), ["food", "box", "look", "looks"];
  console.log("从Task环境变量中解析到要执行的任务: " + _0x913c32.join(", "));
  return _0x913c32;
}
function _0x4d5ea2() {
  const _0x304c9d = [],
    _0x1d7107 = new Set();
  if (process.env.ksptck) {
    {
      const _0x4fd014 = process.env.ksptck,
        _0x23f227 = _0x4fd014.split("&").map(_0x4d0b01 => _0x4d0b01.trim()).filter(Boolean);
      _0x304c9d.push(..._0x23f227);
    }
  }
  for (let _0x274a68 = 1; _0x274a68 <= 666; _0x274a68++) {
    const _0x3294de = "ksptck" + _0x274a68;
    if (process.env[_0x3294de]) {
      {
        const _0x1925bf = process.env[_0x3294de],
          _0x4ed3d7 = _0x1925bf.split("&").map(_0x54f407 => _0x54f407.trim()).filter(Boolean);
        _0x304c9d.push(..._0x4ed3d7);
      }
    }
  }
  const _0x15b69d = [];
  for (const _0x2b46dc of _0x304c9d) {
    if (!_0x1d7107.has(_0x2b46dc)) {
      _0x1d7107.add(_0x2b46dc);
      _0x15b69d.push(_0x2b46dc);
    }
  }
  console.log("从ksptck及ksptck1到ksptck666环境变量中解析到 " + _0x15b69d.length + " 个唯一配置");
  return _0x15b69d;
}
const _0x20e95d = _0x4d5ea2(),
  _0x24e569 = _0x20e95d.length,
  _0x46fa06 = _0x1ba120(),
  _0x289167 = {
    "food": "food（看广告得金币1）",
    "box": "box（宝箱广告）",
    "look": "look（看广告得金币）",
    "looks": "looks（看广告得金币追加）"
  },
  _0x3f4e31 = 10,
  _0x1da6b9 = 200,
  _0x5c926a = parseInt(process.env.MAX_CONCURRENCY, 10),
  _0x766d4e = isNaN(_0x5c926a) ? _0x3f4e31 : Math.min(Math.max(_0x5c926a, 1), _0x1da6b9);
console.log("================================================================================");
console.log("                                  ⭐ 快手至尊金币至尊普通版 ⭐                                ");
console.log("🏆 安全稳定 · 高效收益 · 尊贵体验 🏆                        ");
console.log("🏆 代理购买2.1r一月· http://www.gzsk5.com/#/register?invitation=hnking2&shareid=516                  ");
console.log("🏆 接口工具脚本获取ck获取· https://pan.quark.cn/s/41d4dae92896                  ");
console.log("🏆 云手机· https://cloud.ace-bot.cn/#/inviteReg?invite=501891                  ");
console.log("================================================================================");
console.log("🎉 系统初始化完成，快手至尊金币普通版启动成功！🎉");
console.log("💎 检测到环境变量配置：" + _0x24e569 + "个账号");
console.log("🎯 将执行以下任务：" + _0x46fa06.map(_0x1b0d4c => _0x289167[_0x1b0d4c] || _0x1b0d4c).join(", "));
console.log("🎯 配置参数：");
console.log("   - 任务配置变量=Task (可选: food看广告得金币1, box宝箱广告, look看广告得金币, looks看广告得金币追加, 多个用逗号分隔)");
console.log("   - 账号配置变量=ksptck");
console.log("   - KS_SIGN_API_URL: 签名服务 API 地址 (当前: " + _0x5b82cb + ")");
console.log("   - 轮数变量=KSROUNDS (当前: " + _0x1ba09f + ", 默认35)");
console.log("   - 金币上限变量=KSCOIN_LIMIT (当前: " + _0x296e1a + ", 默认500000)");
console.log("   - 低奖励阈值变量=KSLOW_REWARD_THRESHOLD (当前: " + _0x4e0c2e + ", 默认10)");
console.log("   - 连续低奖励上限变量=KSLOW_REWARD_LIMIT (当前: " + _0x423b76 + ", 默认3)");
console.log("   - 并发数变量=MAX_CONCURRENCY (当前: " + _0x766d4e + ", 默认10, 最大200)");
console.log("🔧 DID更换功能：" + (_0xd6bcd9 ? "✅ 已启用 (ENABLE_DID_CHANGE=1)" : "❌ 已禁用 (设置 ENABLE_DID_CHANGE=1 启用)"));
_0x24e569 > _0x1da6b9 && (console.log("错误: 检测到 " + _0x24e569 + " 个账号配置，最多只允许" + _0x1da6b9 + "个"), process.exit(1));
function _0x365619() {
  try {
    const _0x27b0b3 = _0x29c461 => {
        const _0xe4571c = "0123456789abcdef";
        let _0x4e9712 = "";
        for (let _0x5ae7c5 = 0; _0x5ae7c5 < _0x29c461; _0x5ae7c5++) {
          _0x4e9712 += _0xe4571c.charAt(Math.floor(Math.random() * _0xe4571c.length));
        }
        return _0x4e9712;
      },
      _0x6cf6db = _0x27b0b3(16),
      _0x49c5f9 = "ANDROID_" + _0x6cf6db;
    return _0x49c5f9;
  } catch (_0x31647a) {
    console.log("生成did失败: " + _0x31647a.message);
    const _0x2f0dfc = Date.now().toString(16).toUpperCase();
    return "ANDROID_" + _0x2f0dfc.substring(0, 16);
  }
}
async function _0x18809a(_0x499104, _0x14b9fc = null, _0x3457bb = "Unknown Request") {
  const _0x268f0d = {
    ..._0x499104
  };
  if (_0x14b9fc) try {
    _0x268f0d.agent = new _0x24552b(_0x14b9fc);
    if (_0x3172ac) {}
  } catch (_0x3df22e) {
    console.log("[错误] " + _0x3457bb + " 代理URL无效(" + _0x3df22e.message + ")，尝试直连模式");
    _0x3172ac && console.log("[调试] 代理无效，自动切换到直连模式");
  } else {
    if (_0x3172ac) {
      console.log("[调试] 未配置代理，使用直连模式");
    }
  }
  if (_0x3172ac) {
    const _0x43c1af = _0x268f0d.method || "GET";
  }
  return new Promise(_0x35d3b3 => {
    _0x4a2483(_0x268f0d, (_0x5064de, _0x4ad012, _0x198a67) => {
      {
        if (_0x5064de) {
          {
            if (_0x5064de.name === "AggregateError" && Array.isArray(_0x5064de.errors)) console.log("[调试] " + _0x3457bb + " 请求错误: AggregateError\n" + _0x5064de.errors.map((_0xe1e24a, _0x56b25e) => "  [" + _0x56b25e + "] " + (_0xe1e24a?.["message"] || _0xe1e24a)).join("\n"));else {}
            return _0x35d3b3({
              "response": null,
              "body": null
            });
          }
        }
        if (!_0x4ad012 || _0x4ad012.statusCode !== 200) {
          {
            const _0x3ecc56 = _0x4ad012 ? _0x4ad012.statusCode : "无响应";
            return _0x35d3b3({
              "response": _0x4ad012,
              "body": null
            });
          }
        }
        try {
          _0x35d3b3({
            "response": _0x4ad012,
            "body": JSON.parse(_0x198a67)
          });
        } catch {
          _0x35d3b3({
            "response": _0x4ad012,
            "body": _0x198a67
          });
        }
      }
    });
  });
}
async function _0x5a84ec(_0x144edd, _0x55cd3a = "代理连通性检测") {
  if (!_0x144edd) return {
    "ok": true,
    "msg": "✅ 未配置代理（直连模式）",
    "ip": "localhost"
  };
  const {
    response: _0xc9ca3e,
    body: _0x59f426
  } = await _0x18809a({
    "method": "GET",
    "url": "https://ip9.com.cn/get",
    "headers": {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
    },
    "timeout": 8000
  }, _0x144edd, _0x55cd3a + " → ip9.com.cn");
  if (!_0x59f426) {
    return {
      "ok": false,
      "msg": "❌ 无法通过代理访问 ip9.com.cn",
      "ip": ""
    };
  }
  _0x3172ac && (console.log("[调试] IP检测API原始响应类型: " + typeof _0x59f426), console.log("[调试] IP检测API原始响应内容: " + JSON.stringify(_0x59f426).substring(0, 200)));
  let _0x2fdb5d = "";
  if (typeof _0x59f426 === "string") try {
    {
      const _0xeb9d65 = JSON.parse(_0x59f426);
      _0x2fdb5d = _0xeb9d65.ip || _0xeb9d65.IP || _0xeb9d65.addr || _0xeb9d65.ip_address || _0xeb9d65.query || _0xeb9d65.data && _0xeb9d65.data.ip || "";
    }
  } catch {
    const _0x5b9c67 = String(_0x59f426).match(/\b(?:\d{1,3}\.){3}\d{1,3}\b/);
    _0x2fdb5d = _0x5b9c67 ? _0x5b9c67[0] : "";
  } else _0x59f426 && typeof _0x59f426 === "object" && (_0x2fdb5d = _0x59f426.ip || _0x59f426.IP || _0x59f426.addr || _0x59f426.ip_address || _0x59f426.query || _0x59f426.data && _0x59f426.data.ip || "");
  return {
    "ok": true,
    "msg": "✅ SOCKS5代理正常，出口IP: " + (_0x2fdb5d || "未知"),
    "ip": _0x2fdb5d || "未知"
  };
}
const _0x364032 = new Set();
async function _0x4f3e19(_0x129da4, _0x5839ab, _0x345283 = "?") {
  const _0x29e33c = "https://encourage.kuaishou.com/rest/wd/encourage/account/basicInfo",
    {
      response: _0xadc9d7,
      body: _0x282593
    } = await _0x18809a({
      "method": "GET",
      "url": _0x29e33c,
      "headers": {
        "Host": "encourage.kuaishou.com",
        "User-Agent": "kwai-android aegon/3.56.0",
        "Cookie": _0x129da4,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "timeout": 12000
    }, _0x5839ab, "账号[" + _0x345283 + "] 获取基本信息");
  if (_0x282593 && _0x282593.result === 1 && _0x282593.data) return {
    "nickname": _0x282593.data.userData?.["nickname"] || _0x345283,
    "totalCoin": _0x282593.data.coinAmount ?? null,
    "allCash": _0x282593.data.cashAmountDisplay ?? null
  };
  return null;
}
function _0x5eb77a(_0x5a9d99, _0x3b1d03) {
  _0x5a9d99 = String(_0x5a9d99);
  if (_0x5a9d99.length >= _0x3b1d03) {
    return _0x5a9d99.substring(0, _0x3b1d03);
  }
  const _0x5812b5 = _0x3b1d03 - _0x5a9d99.length,
    _0x534f87 = Math.floor(_0x5812b5 / 2),
    _0x1fef5f = _0x5812b5 - _0x534f87;
  return " ".repeat(_0x534f87) + _0x5a9d99 + " ".repeat(_0x1fef5f);
}
class _0x5e4a83 {
  constructor({
    index: _0x3be46b,
    salt: _0x3bb5f3,
    cookie: _0x8a2139,
    nickname = "",
    proxyUrl = null,
    tasksToExecute = ["food", "box", "look", "looks"],
    remark = ""
  }) {
    this.index = _0x3be46b;
    this.salt = _0x3bb5f3;
    this.cookie = _0x8a2139;
    this.nickname = nickname || remark || "账号" + _0x3be46b;
    this.remark = remark;
    this.proxyUrl = proxyUrl;
    this.coinLimit = _0x296e1a;
    this.coinExceeded = false;
    this.tasksToExecute = tasksToExecute;
    this.extractCookieInfo();
    this.headers = {
      "Host": "nebula.kuaishou.com",
      "User-Agent": "kwai-android aegon/4.28.0",
      "Accept-Language": "zh-cn",
      "kaw": "MDHkM+9FrbzVSEAqyw6KYWaDbX//YWh3HL3RNoTk0mflLjaw17zmC5Wgx5HS/kdo8uJyFtQMxCHt4jfkbu9FqpqmnO/5L67iloqkSzUuRt4OomU1jJGFzdZMalsksJeN75Aw0w+eS2PMus7fga6twyLPbI9Ku1xGWINrZFVxaFtQkweesxPN0tRRwfb98Vxi+sOIlaDxUM03svdfQpthP2HlXcOTkKBqV8bxwv8I5GCGZydEmtEA",
      "kas": "0013db77e6dbe18ab159e21bc94e8cd224",
      "Cookie": this.cookie,
      "Content-Type": "application/json"
    };
    this.taskReportPath = "/rest/r/ad/task/report";
    this.startTime = Date.now();
    this.endTime = this.startTime - 30000;
    this.queryParams = "mod=Xiaomi(MI 11)&appver=" + this.appver + "&egid=" + this.egid + "&did=" + this.did;
    this.taskConfigs = {
      "box": {
        "name": "宝箱广告",
        "businessId": 604,
        "posId": 20347,
        "subPageId": 100024063,
        "pageId": 100011251,
        "requestSceneType": 1,
        "taskType": 1
      },
      "look": {
        "name": "看广告得金币",
        "businessId": 671,
        "posId": 24068,
        "subPageId": 100026368,
        "pageId": 100011251,
        "requestSceneType": 1,
        "taskType": 1
      },
      "looks": {
        "name": "看广告得金币[追加]",
        "businessId": 671,
        "posId": 24068,
        "subPageId": 100026368,
        "pageId": 100011251,
        "requestSceneType": 7,
        "taskType": 2
      },
      "food": {
        "name": "看广告得金币1",
        "businessId": 671,
        "posId": 24068,
        "subPageId": 100026368,
        "pageId": 100011251,
        "requestSceneType": 7,
        "taskType": 2
      }
    };
    this.taskStats = {};
    this.tasksToExecute.forEach(_0x4dafd2 => {
      this.taskConfigs[_0x4dafd2] && (this.taskStats[_0x4dafd2] = {
        "success": 0,
        "failed": 0,
        "totalReward": 0
      });
    });
    this.lowRewardStreak = 0;
    this.lowRewardThreshold = _0x4e0c2e;
    this.lowRewardLimit = _0x423b76;
    this.stopAllTasks = false;
    this.taskLimitReached = {};
    this.tasksToExecute.forEach(_0x16f510 => {
      this.taskConfigs[_0x16f510] && (this.taskLimitReached[_0x16f510] = false);
    });
  }
  async ["checkCoinLimit"]() {
    try {
      const _0x57d124 = await _0x4f3e19(this.cookie, this.proxyUrl, this.index);
      if (_0x57d124 && _0x57d124.totalCoin) {
        {
          const _0x30a34c = parseInt(_0x57d124.totalCoin);
          if (_0x30a34c >= this.coinLimit) return console.log("⚠️ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 金币已达 " + _0x30a34c + "，超过 " + this.coinLimit + " 阈值，将停止任务"), this.coinExceeded = true, this.stopAllTasks = true, true;
        }
      }
      return false;
    } catch (_0x1e6afe) {
      console.log("账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 金币检查异常: " + _0x1e6afe.message);
      return false;
    }
  }
  ["extractCookieInfo"]() {
    try {
      {
        const _0x573165 = this.cookie.match(/egid=([^;]+)/),
          _0x5e4975 = this.cookie.match(/did=([^;]+)/),
          _0x217f91 = this.cookie.match(/userId=([^;]+)/),
          _0x32c78b = this.cookie.match(/kuaishou\.api_st=([^;]+)/),
          _0x5a9cfe = this.cookie.match(/appver=([^;]+)/);
        this.egid = _0x573165 ? _0x573165[1] : "";
        this.did = _0x5e4975 ? _0x5e4975[1] : "";
        this.userId = _0x217f91 ? _0x217f91[1] : "";
        this.kuaishouApiSt = _0x32c78b ? _0x32c78b[1] : "";
        this.appver = _0x5a9cfe ? _0x5a9cfe[1] : "13.7.20.10468";
        (!this.egid || !this.did) && console.log("账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " cookie格式可能无 egid 或 did，但继续尝试...");
      }
    } catch (_0x43e3a8) {
      console.log("账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 解析cookie失败: " + _0x43e3a8.message);
    }
  }
  ["getTaskStats"]() {
    return this.taskStats;
  }
  ["printTaskStats"]() {
    console.log("\n账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 任务执行统计:");
    for (const [_0x1d1ced, _0x49e423] of Object.entries(this.taskStats)) {
      const _0x58c075 = this.taskConfigs[_0x1d1ced].name;
      console.log("  " + _0x58c075 + ": 成功" + _0x49e423.success + "次, 失败" + _0x49e423.failed + "次, 总奖励" + _0x49e423.totalReward + "金币");
    }
  }
  async ["retryOperation"](_0x571bc9, _0x5df1b8, _0x3c20ed = 3, _0x42c1dd = 2000) {
    let _0x1b8c1b = 0,
      _0x454deb = null;
    while (_0x1b8c1b < _0x3c20ed) {
      try {
        const _0x2ff742 = await _0x571bc9();
        if (_0x2ff742) return _0x2ff742;
        _0x454deb = new Error(_0x5df1b8 + " 返回空结果");
      } catch (_0x2975e9) {
        _0x454deb = _0x2975e9;
        console.log("账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " " + _0x5df1b8 + " 异常: " + _0x2975e9.message);
      }
      _0x1b8c1b++;
      _0x1b8c1b < _0x3c20ed && (console.log("账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " " + _0x5df1b8 + " 失败，重试 " + _0x1b8c1b + "/" + _0x3c20ed), await new Promise(_0x3d5581 => setTimeout(_0x3d5581, _0x42c1dd)));
    }
    if (_0x3172ac && _0x454deb) {}
    return null;
  }
  async ["getSign"](_0x15d968) {
    try {
      {
        const {
          response: _0x588123,
          body: _0x4c451e
        } = await _0x18809a({
          "method": "POST",
          "url": _0x5b82cb + "/encsign",
          "headers": {
            "Content-Type": "application/json"
          },
          "body": JSON.stringify({
            "data": _0x15d968
          }),
          "timeout": 10000
        }, null, "账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 加密签名");
        if (_0x4c451e && _0x4c451e.status) return _0x4c451e.data;
        console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " encsign 签名服务失败: " + (_0x4c451e?.["message"] || "无响应"));
        return null;
      }
    } catch (_0x571334) {
      console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " encsign 签名请求异常: " + _0x571334.message);
      return null;
    }
  }
  async ["requestSignService"](_0xbb9e61, _0x579bfb) {
    try {
      {
        const _0x36a2c3 = {
            "path": _0xbb9e61.urlpath,
            "data": _0xbb9e61.reqdata,
            "salt": _0xbb9e61.api_client_salt
          },
          {
            response: _0x462a83,
            body: _0x4127c1
          } = await _0x18809a({
            "method": "POST",
            "url": _0x5b82cb + "/nssig",
            "headers": {
              "Content-Type": "application/json",
              "User-Agent": "Mozilla/5.0"
            },
            "body": JSON.stringify(_0x36a2c3),
            "timeout": 15000
          }, null, _0x579bfb + "（签名服务）");
        if (_0x4127c1 && _0x4127c1.data) return {
          "__NS_sig3": _0x4127c1.data.nssig3,
          "__NStokensig": _0x4127c1.data.nstokensig,
          "sig": _0x4127c1.data.sig,
          "__NS_xfalcon": _0x4127c1.data.nssig4 || ""
        };
        console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 签名服务失败: " + (_0x4127c1?.["error"] || _0x4127c1?.["message"] || "无响应"));
        return null;
      }
    } catch (_0x550b19) {
      console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 签名请求异常: " + _0x550b19.message);
      return null;
    }
  }
  async ["getAdInfo"](_0xeaf342) {
    try {
      {
        const _0x1a65ba = "/rest/e/reward/mixed/ad",
          _0x302c33 = {
            "encData": "|encData|",
            "sign": "|sign|",
            "cs": "false",
            "client_key": "3c2cd3f3",
            "videoModelCrowdTag": "1_23",
            "os": "android",
            "kuaishou.api_st": this.kuaishouApiSt,
            "uQaTag": "1##swLdgl:99#ecPp:-9#cmNt:-0#cmHs:-3#cmMnsl:-0"
          },
          _0x505c41 = {
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
          _0x44da9d = {
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
              "deviceId": this.did,
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
              "pageId": _0xeaf342.pageId,
              "subPageId": _0xeaf342.subPageId,
              "action": 0,
              "browseType": 3,
              "impExtData": "{}",
              "mediaExtData": "{}"
            }]
          },
          _0x5ef994 = Buffer.from(JSON.stringify(_0x44da9d)).toString("base64"),
          _0x31de2a = await this.getSign(_0x5ef994);
        if (!_0x31de2a) {
          console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 获取 encsign 失败，无法获取" + _0xeaf342.name);
          return null;
        }
        _0x302c33.encData = _0x31de2a.encdata;
        _0x302c33.sign = _0x31de2a.sign;
        const _0x4ccc0a = _0x1468f8.stringify(_0x505c41) + "&" + _0x1468f8.stringify(_0x302c33),
          _0x49f34d = await this.requestSignService({
            "urlpath": _0x1a65ba,
            "reqdata": _0x4ccc0a,
            "api_client_salt": this.salt
          }, "账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 获取广告签名");
        if (!_0x49f34d) {
          console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 获取 nssig 失败，无法获取" + _0xeaf342.name);
          return null;
        }
        const _0xb0da7e = {
            ..._0x505c41,
            "sig": _0x49f34d.sig,
            "__NS_sig3": _0x49f34d.__NS_sig3,
            "__NS_xfalcon": _0x49f34d.__NS_xfalcon || "",
            "__NStokensig": _0x49f34d.__NStokensig
          },
          _0x57073e = "https://api.e.kuaishou.com" + _0x1a65ba + "?" + _0x3d30b7.stringify(_0xb0da7e),
          {
            response: _0x1d1f08,
            body: _0x14f5fc
          } = await _0x18809a({
            "method": "POST",
            "url": _0x57073e,
            "headers": {
              "Host": "api.e.kuaishou.com",
              "User-Agent": "kwai-android aegon/3.56.0",
              "Cookie": "kuaishou_api_st=" + this.kuaishouApiSt,
              "kaw": this.headers.kaw,
              "kas": this.headers.kas
            },
            "form": _0x302c33,
            "timeout": 12000
          }, this.proxyUrl, "账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 获取广告");
        if (!_0x14f5fc) {
          return null;
        }
        if (_0x14f5fc.errorMsg === "OK" && _0x14f5fc.feeds && _0x14f5fc.feeds[0] && _0x14f5fc.feeds[0].ad) {
          const _0x296106 = _0x14f5fc.feeds[0].caption || _0x14f5fc.feeds[0].ad?.["caption"] || "";
          _0x296106 && console.log("✅ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 成功获取到广告信息：" + _0x296106);
          const _0xb0be5d = _0x14f5fc.feeds[0].exp_tag || "",
            _0xb62e5d = _0xb0be5d.split("/")[1]?.["split"]("_")?.[0] || "";
          return {
            "cid": _0x14f5fc.feeds[0].ad.creativeId,
            "llsid": _0xb62e5d
          };
        }
        return null;
      }
    } catch (_0x2b1534) {
      console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 获取广告异常: " + _0x2b1534.message);
      return null;
    }
  }
  async ["generateSignature"](_0x43ed1c, _0x312aa4, _0x33275f, _0xb81e09) {
    try {
      const _0x56c4bd = JSON.stringify({
          "businessId": _0xb81e09.businessId,
          "endTime": this.endTime,
          "extParams": "",
          "mediaScene": "video",
          "neoInfos": [{
            "creativeId": _0x43ed1c,
            "extInfo": "",
            "llsid": _0x312aa4,
            "requestSceneType": _0xb81e09.requestSceneType,
            "taskType": _0xb81e09.taskType,
            "watchExpId": "",
            "watchStage": 0
          }],
          "pageId": _0xb81e09.pageId,
          "posId": _0xb81e09.posId,
          "reportType": 0,
          "sessionId": "",
          "startTime": this.startTime,
          "subPageId": _0xb81e09.subPageId
        }),
        _0x1b268f = "bizStr=" + encodeURIComponent(_0x56c4bd) + "&cs=false&client_key=3c2cd3f3&kuaishou.api_st=" + this.kuaishouApiSt,
        _0x29b4d8 = this.queryParams + "&" + _0x1b268f,
        _0x3ca5f6 = await this.requestSignService({
          "urlpath": this.taskReportPath,
          "reqdata": _0x29b4d8,
          "api_client_salt": this.salt
        }, "账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 生成报告签名");
      if (!_0x3ca5f6) return null;
      return {
        "sig": _0x3ca5f6.sig,
        "sig3": _0x3ca5f6.__NS_sig3,
        "sigtoken": _0x3ca5f6.__NStokensig,
        "xfalcon": _0x3ca5f6.__NS_xfalcon,
        "post": _0x1b268f
      };
    } catch (_0xf47ecd) {
      console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 生成签名异常: " + _0xf47ecd.message);
      return null;
    }
  }
  async ["submitReport"](_0x59b7de, _0x39a09f, _0x7b2cee, _0x30319d, _0x168f2b, _0x2e5a5c, _0x27e420) {
    try {
      const _0x118432 = "https://api.e.kuaishou.com" + this.taskReportPath + "?" + (this.queryParams + "&sig=" + _0x59b7de + "&__NS_sig3=" + _0x39a09f + "&__NS_xfalcon=" + (_0x30319d || "") + "&__NStokensig=" + _0x7b2cee),
        {
          response: _0x5bf712,
          body: _0xdb6808
        } = await _0x18809a({
          "method": "POST",
          "url": _0x118432,
          "headers": {
            "Host": "api.e.kuaishou.cn",
            "User-Agent": "kwai-android aegon/3.56.0",
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "body": _0x168f2b,
          "timeout": 12000
        }, this.proxyUrl, "账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 提交任务");
      if (!_0xdb6808) return {
        "success": false,
        "reward": 0
      };
      if (_0xdb6808.result === 1) {
        {
          const _0x15d985 = _0xdb6808.data?.["neoAmount"] || 0;
          console.log("💰 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " " + _0x27e420.name + "获得" + _0x15d985 + "金币奖励！");
          if (_0x15d985 <= this.lowRewardThreshold) {
            this.lowRewardStreak++;
            if (_0xd6bcd9) this.did = _0x365619(), console.log("⚠️ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 金币奖励(" + _0x15d985 + ")低于阈值(" + this.lowRewardThreshold + ")，已更换DID，当前连续低奖励次数：" + this.lowRewardStreak + "/" + this.lowRewardLimit);else {
              console.log("⚠️ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 金币奖励(" + _0x15d985 + ")低于阈值(" + this.lowRewardThreshold + ")，当前连续低奖励次数：" + this.lowRewardStreak + "/" + this.lowRewardLimit);
            }
            this.lowRewardStreak >= this.lowRewardLimit && (console.log("🏁 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 连续" + this.lowRewardLimit + "次奖励≤" + this.lowRewardThreshold + "，停止全部任务"), this.stopAllTasks = true);
          } else this.lowRewardStreak = 0;
          return {
            "success": true,
            "reward": _0x15d985
          };
        }
      }
      if ([20107, 20108, 1003, 415].includes(_0xdb6808.result)) return console.log("⚠️ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " " + _0x27e420.name + " 已达上限"), this.taskLimitReached[_0x2e5a5c] = true, {
        "success": false,
        "reward": 0
      };
      console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " " + _0x27e420.name + " 奖励失败，result=" + _0xdb6808.result + " msg=" + (_0xdb6808.data || ""));
      return {
        "success": false,
        "reward": 0
      };
    } catch (_0x4962f6) {
      console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 提交任务异常: " + _0x4962f6.message);
      return {
        "success": false,
        "reward": 0
      };
    }
  }
  async ["executeTask"](_0x99414d) {
    const _0x29d100 = this.taskConfigs[_0x99414d];
    if (!_0x29d100) {
      console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 未知任务: " + _0x99414d);
      return false;
    }
    if (this.taskLimitReached[_0x99414d]) {
      return false;
    }
    try {
      const _0x320033 = await this.retryOperation(() => this.getAdInfo(_0x29d100), "获取" + _0x29d100.name + "信息", 3);
      if (!_0x320033) return this.taskStats[_0x99414d].failed++, false;
      const _0x2d3b37 = Math.floor(Math.random() * 10000) + 30000;
      console.log("🔍 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " ==>" + _0x29d100.name + " " + _0x5235d3() + " " + Math.round(_0x2d3b37 / 1000) + " 秒");
      await new Promise(_0x2a9c21 => setTimeout(_0x2a9c21, _0x2d3b37));
      const _0x85bf61 = await this.retryOperation(() => this.generateSignature(_0x320033.cid, _0x320033.llsid, _0x99414d, _0x29d100), "生成" + _0x29d100.name + "签名", 3);
      if (!_0x85bf61) {
        this.taskStats[_0x99414d].failed++;
        return false;
      }
      const _0xa32844 = await this.retryOperation(() => this.submitReport(_0x85bf61.sig, _0x85bf61.sig3, _0x85bf61.sigtoken, _0x85bf61.xfalcon, _0x85bf61.post, _0x99414d, _0x29d100), "提交" + _0x29d100.name + "报告", 3);
      if (_0xa32844?.["success"]) return this.taskStats[_0x99414d].success++, this.taskStats[_0x99414d].totalReward += _0xa32844.reward || 0, true;
      this.taskStats[_0x99414d].failed++;
      return false;
    } catch (_0x10d813) {
      console.log("❌ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 任务异常(" + _0x99414d + "): " + _0x10d813.message);
      this.taskStats[_0x99414d].failed++;
      return false;
    }
  }
  async ["executeAllTasksByPriority"]() {
    const _0x491de9 = {};
    for (const _0x379e3b of this.tasksToExecute) {
      {
        if (this.stopAllTasks) break;
        if (!this.taskConfigs[_0x379e3b]) {
          console.log("⚠️ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 跳过未知任务: " + _0x379e3b);
          continue;
        }
        console.log("🚀 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 开始任务：" + this.taskConfigs[_0x379e3b].name);
        _0x491de9[_0x379e3b] = await this.executeTask(_0x379e3b);
        if (this.stopAllTasks) break;
        if (_0x379e3b !== this.tasksToExecute[this.tasksToExecute.length - 1]) {
          {
            const _0x556a4d = Math.floor(Math.random() * 8000) + 7000;
            console.log("⏱ 账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 下一个任务，随机等待 " + Math.round(_0x556a4d / 1000) + " 秒");
            await new Promise(_0x105ee0 => setTimeout(_0x105ee0, _0x556a4d));
          }
        }
      }
    }
    return _0x491de9;
  }
}
function _0x4b8ec4(_0x508592) {
  const _0x41254e = String(_0x508592 || "").trim().split("#");
  if (_0x41254e.length < 2) return null;
  let _0x522c69 = "",
    _0xb4420c = "",
    _0xd1d2fa = "",
    _0x4f40f6 = null;
  if (_0x41254e.length === 2) _0xb4420c = _0x41254e[0], _0xd1d2fa = _0x41254e[1];else {
    if (_0x41254e.length === 3) {
      {
        if (/socks5:\/\//i.test(_0x41254e[2])) _0xb4420c = _0x41254e[0], _0xd1d2fa = _0x41254e[1], _0x4f40f6 = _0x41254e[2];else {
          _0x522c69 = _0x41254e[0];
          _0xb4420c = _0x41254e[1];
          _0xd1d2fa = _0x41254e[2];
        }
      }
    } else _0x41254e.length >= 4 && (_0x522c69 = _0x41254e[0], _0xb4420c = _0x41254e[1], _0xd1d2fa = _0x41254e.slice(2, _0x41254e.length - 1).join("#"), _0x4f40f6 = _0x41254e[_0x41254e.length - 1]);
  }
  _0xb4420c = _0xb4420c.replace("kpn=NEBULA", "kpn=KUAISHOU");
  if (_0x4f40f6) {
    if (_0x4f40f6.includes("|")) {
      console.log("开始解析代理格式: " + _0x4f40f6);
      const _0x4853df = _0x4f40f6.split("|");
      if (_0x4853df.length >= 2) {
        const [_0x1f6f90, _0x3911b8, _0x35f4e9, _0x121fe9] = _0x4853df;
        _0x4f40f6 = "socks5://" + _0x35f4e9 + ":" + _0x121fe9 + "@" + _0x1f6f90 + ":" + _0x3911b8;
      } else _0x4f40f6 = null, console.log("⚠️ 代理字段格式错误，忽略：" + _0x4f40f6);
    } else !/^socks5:\/\//i.test(_0x4f40f6) && (console.log("⚠️ 代理字段不是 socks5:// URL，忽略：" + _0x4f40f6), _0x4f40f6 = null);
  }
  return {
    "remark": _0x522c69 || "",
    "salt": _0xd1d2fa,
    "cookie": _0xb4420c,
    "proxyUrl": _0x4f40f6
  };
}
function _0x4199d6() {
  const _0x377b1d = _0x4d5ea2(),
    _0x531dfd = [];
  for (const _0x2f4853 of _0x377b1d) {
    {
      const _0x4ebe68 = _0x4b8ec4(_0x2f4853);
      if (_0x4ebe68) _0x531dfd.push(_0x4ebe68);else {
        console.log("账号格式错误：" + _0x2f4853);
      }
    }
  }
  _0x531dfd.forEach((_0x254e93, _0x3fc5d4) => {
    _0x254e93.index = _0x3fc5d4 + 1;
  });
  return _0x531dfd;
}
async function _0x561108(_0x25a0bc, _0x4b2446, _0xc5c7cf) {
  const _0x1c432b = new Array(_0x25a0bc.length);
  let _0x2ebfb9 = 0;
  async function _0x3f2575() {
    while (true) {
      {
        const _0x296a77 = _0x2ebfb9++;
        if (_0x296a77 >= _0x25a0bc.length) return;
        const _0x5933a2 = _0x25a0bc[_0x296a77];
        try {
          _0x1c432b[_0x296a77] = await _0xc5c7cf(_0x5933a2, _0x296a77);
        } catch (_0x4ad649) {
          console.log("并发执行异常（index=" + (_0x296a77 + 1) + "）：" + _0x4ad649.message);
          _0x1c432b[_0x296a77] = null;
        }
      }
    }
  }
  const _0x280ad9 = Array.from({
    "length": Math.min(_0x4b2446, _0x25a0bc.length)
  }, _0x3f2575);
  await Promise.all(_0x280ad9);
  return _0x1c432b;
}
async function _0x3e47c0(_0x5e00e5) {
  if (_0x5e00e5.proxyUrl) {
    console.log("账号[" + _0x5e00e5.index + "]" + (_0x5e00e5.remark ? "（" + _0x5e00e5.remark + "）" : "") + " 🔌 测试代理连接中...");
    const _0x5a172a = await _0x5a84ec(_0x5e00e5.proxyUrl, "账号[" + _0x5e00e5.index + "]" + (_0x5e00e5.remark ? "（" + _0x5e00e5.remark + "）" : ""));
    console.log("  - " + (_0x5a172a.ok ? "✅ 代理验证通过，IP: " + _0x5a172a.ip : "❌ 代理验证失败") + ": " + _0x5a172a.msg);
    _0x5a172a.ok && _0x5a172a.ip && _0x5a172a.ip !== "localhost" && (_0x364032.has(_0x5a172a.ip) && (console.log("\n⚠️ 存在相同代理IP（" + _0x5a172a.ip + "），请立即检查！"), process.exit(1)), _0x364032.add(_0x5a172a.ip));
  } else console.log("账号[" + _0x5e00e5.index + "]" + (_0x5e00e5.remark ? "（" + _0x5e00e5.remark + "）" : "") + " 未配置代理，走直连");
  console.log("账号[" + _0x5e00e5.index + "]" + (_0x5e00e5.remark ? "（" + _0x5e00e5.remark + "）" : "") + " 🔍 获取账号信息中...");
  let _0x20144e = await _0x4f3e19(_0x5e00e5.cookie, _0x5e00e5.proxyUrl, _0x5e00e5.index),
    _0x4e3f79 = _0x20144e?.["nickname"] || "账号" + _0x5e00e5.index;
  if (_0x20144e) {
    const _0x30987f = _0x20144e.totalCoin != null ? _0x20144e.totalCoin : "未知",
      _0x145b70 = _0x20144e.allCash != null ? _0x20144e.allCash : "未知";
    console.log("账号[" + _0x4e3f79 + "]" + (_0x5e00e5.remark ? "（" + _0x5e00e5.remark + "）" : "") + " ✅ 登录成功，💰 当前金币: " + _0x30987f + "，💸 当前余额: " + _0x145b70);
  } else console.log("账号[" + _0x4e3f79 + "]" + (_0x5e00e5.remark ? "（" + _0x5e00e5.remark + "）" : "") + " ❌ 基本信息获取失败，继续执行");
  const _0x4155b = new _0x5e4a83({
    ..._0x5e00e5,
    "nickname": _0x4e3f79,
    "tasksToExecute": _0x46fa06
  });
  await _0x4155b.checkCoinLimit();
  if (_0x4155b.coinExceeded) {
    console.log("账号[" + _0x4155b.nickname + "]" + (_0x5e00e5.remark ? "（" + _0x5e00e5.remark + "）" : "") + " 初始金币已超过阈值，不执行任务");
    const _0x4d0ed6 = await _0x4f3e19(_0x5e00e5.cookie, _0x5e00e5.proxyUrl, _0x5e00e5.index),
      _0x23fd87 = _0x20144e?.["totalCoin"] || 0,
      _0x4bed5b = _0x4d0ed6?.["totalCoin"] || 0,
      _0x5412d6 = _0x4bed5b - _0x23fd87,
      _0x3f278c = _0x20144e?.["allCash"] || 0,
      _0x127772 = _0x4d0ed6?.["allCash"] || 0,
      _0x3dc7bb = _0x127772 - _0x3f278c;
    return {
      "index": _0x5e00e5.index,
      "remark": _0x5e00e5.remark || "无备注",
      "nickname": _0x4e3f79,
      "initialCoin": _0x23fd87,
      "finalCoin": _0x4bed5b,
      "coinChange": _0x5412d6,
      "initialCash": _0x3f278c,
      "finalCash": _0x127772,
      "cashChange": _0x3dc7bb,
      "stats": _0x4155b.getTaskStats(),
      "coinLimitExceeded": true
    };
  }
  for (let _0x4ccaf1 = 0; _0x4ccaf1 < _0x1ba09f; _0x4ccaf1++) {
    const _0x308bd9 = Math.floor(Math.random() * 8000) + 8000;
    console.log("账号[" + _0x4155b.nickname + "]" + (_0x5e00e5.remark ? "（" + _0x5e00e5.remark + "）" : "") + " ⌛ 第" + (_0x4ccaf1 + 1) + "轮，先随机等待 " + Math.round(_0x308bd9 / 1000) + " 秒");
    await new Promise(_0xbca0dd => setTimeout(_0xbca0dd, _0x308bd9));
    console.log("账号[" + _0x4155b.nickname + "]" + (_0x5e00e5.remark ? "（" + _0x5e00e5.remark + "）" : "") + " 🚀 开始第" + (_0x4ccaf1 + 1) + "轮任务");
    const _0x54fb85 = await _0x4155b.executeAllTasksByPriority();
    if (Object.values(_0x54fb85).some(Boolean)) {
      console.log("账号[" + _0x4155b.nickname + "]" + (_0x5e00e5.remark ? "（" + _0x5e00e5.remark + "）" : "") + " ✅ 第" + (_0x4ccaf1 + 1) + "轮执行完成");
    } else console.log("账号[" + _0x4155b.nickname + "]" + (_0x5e00e5.remark ? "（" + _0x5e00e5.remark + "）" : "") + " ⚠️ 第" + (_0x4ccaf1 + 1) + "轮没有成功任务");
    if (_0x4155b.stopAllTasks) {
      {
        console.log("账号[" + _0x4155b.nickname + "]" + (_0x5e00e5.remark ? "（" + _0x5e00e5.remark + "）" : "") + " 🏁 达到停止条件，终止后续轮次");
        break;
      }
    }
    if (_0x4ccaf1 < _0x1ba09f - 1) {
      const _0x2a5dd7 = Math.floor(Math.random() * 10000) + 10000;
      console.log("账号[" + _0x4155b.nickname + "]" + (_0x5e00e5.remark ? "（" + _0x5e00e5.remark + "）" : "") + " ⌛ 等待 " + Math.round(_0x2a5dd7 / 1000) + " 秒进入下一轮");
      await new Promise(_0x1b367e => setTimeout(_0x1b367e, _0x2a5dd7));
    }
  }
  const _0x1823b0 = await _0x4f3e19(_0x5e00e5.cookie, _0x5e00e5.proxyUrl, _0x5e00e5.index),
    _0x515d84 = _0x20144e?.["totalCoin"] || 0,
    _0x5b42a4 = _0x1823b0?.["totalCoin"] || 0,
    _0x4d6264 = _0x5b42a4 - _0x515d84,
    _0x406a91 = _0x20144e?.["allCash"] || 0,
    _0x32c8c9 = _0x1823b0?.["allCash"] || 0,
    _0x5d2ad7 = _0x32c8c9 - _0x406a91;
  _0x4155b.printTaskStats();
  return {
    "index": _0x5e00e5.index,
    "remark": _0x5e00e5.remark || "无备注",
    "nickname": _0x4e3f79,
    "initialCoin": _0x515d84,
    "finalCoin": _0x5b42a4,
    "coinChange": _0x4d6264,
    "initialCash": _0x406a91,
    "finalCash": _0x32c8c9,
    "cashChange": _0x5d2ad7,
    "stats": _0x4155b.getTaskStats(),
    "coinLimitExceeded": _0x4155b.coinExceeded
  };
}
function _0x3f3b2f(_0x1b9174) {
  if (!_0x1b9174.length) {
    {
      console.log("\n没有可显示的账号信息。");
      return;
    }
  }
  const _0x5a773e = _0x1b9174.reduce((_0x432016, _0x482e91) => {
      return _0x432016 + (parseInt(_0x482e91.initialCoin) || 0);
    }, 0),
    _0x5c3cc3 = _0x1b9174.reduce((_0x75aaf3, _0xbaf1c) => {
      return _0x75aaf3 + (parseInt(_0xbaf1c.finalCoin) || 0);
    }, 0),
    _0x385f7a = _0x5c3cc3 - _0x5a773e,
    _0x2df5e1 = _0x1b9174.reduce((_0x48386f, _0x3a8eba) => {
      return _0x48386f + (parseFloat(_0x3a8eba.initialCash) || 0);
    }, 0),
    _0x19e996 = _0x1b9174.reduce((_0x3fdd30, _0x2d6444) => {
      return _0x3fdd30 + (parseFloat(_0x2d6444.finalCash) || 0);
    }, 0),
    _0x253124 = _0x19e996 - _0x2df5e1;
  let _0x2d32c9 = 0,
    _0x525306 = 0,
    _0x128380 = 0;
  _0x1b9174.forEach(_0x1b23e0 => {
    _0x1b23e0.stats && Object.values(_0x1b23e0.stats).forEach(_0x580f70 => {
      _0x2d32c9 += _0x580f70.success + _0x580f70.failed;
      _0x525306 += _0x580f70.success;
      _0x128380 += _0x580f70.totalReward;
    });
  });
  const _0xa2b7 = _0x2d32c9 > 0 ? (_0x525306 / _0x2d32c9 * 100).toFixed(1) : "0.0",
    _0x288e51 = _0x1b9174.filter(_0x400a48 => _0x400a48.coinLimitExceeded).length;
  console.log("\n\n" + "=".repeat(80));
  console.log("|" + _0x5eb77a("      快手养号任务执行结果汇总表      ", 78) + "|");
  console.log("=".repeat(80));
  console.log("|" + ("总账号数: " + _0x1b9174.length).padEnd(22) + ("超过金币阈值账号: " + _0x288e51).padEnd(22) + ("总任务数: " + _0x2d32c9).padEnd(22) + ("任务成功率: " + _0xa2b7 + "%").padEnd(10) + "|");
  console.log("|" + ("总金币变化: " + _0x385f7a).padEnd(26) + ("总金币奖励: " + _0x128380).padEnd(26) + ("总余额变化: " + _0x253124.toFixed(2)).padEnd(24) + "|");
  console.log("-".repeat(80));
  const _0x25f072 = ["序号", "备注", "账号昵称", "初始金币", "最终金币", "金币变化", "初始余额", "最终余额", "余额变化"],
    _0x1075ac = [6, 16, 16, 12, 12, 12, 12, 12, 12];
  let _0x2a368c = "|";
  _0x25f072.forEach((_0x3d6a52, _0x3b704a) => {
    _0x2a368c += _0x5eb77a(_0x3d6a52, _0x1075ac[_0x3b704a]) + "|";
  });
  console.log(_0x2a368c);
  let _0x3d7918 = "|";
  _0x1075ac.forEach(_0x42b812 => {
    _0x3d7918 += "-".repeat(_0x42b812) + "|";
  });
  console.log(_0x3d7918);
  _0x1b9174.forEach(_0x46be65 => {
    let _0x1d6677 = "|";
    _0x1d6677 += _0x5eb77a(_0x46be65.index, _0x1075ac[0]) + "|";
    _0x1d6677 += _0x5eb77a(_0x46be65.remark, _0x1075ac[1]) + "|";
    const _0x351da5 = (_0x46be65.nickname || "-") + (_0x46be65.coinLimitExceeded ? " ⚠️" : "");
    _0x1d6677 += _0x5eb77a(_0x351da5.substring(0, _0x1075ac[2] - 2), _0x1075ac[2]) + "|";
    _0x1d6677 += _0x5eb77a(_0x46be65.initialCoin, _0x1075ac[3]) + "|";
    _0x1d6677 += _0x5eb77a(_0x46be65.finalCoin, _0x1075ac[4]) + "|";
    const _0x1f1e66 = _0x46be65.coinChange >= 0 ? "+" + _0x46be65.coinChange : _0x46be65.coinChange;
    _0x1d6677 += _0x5eb77a(_0x1f1e66, _0x1075ac[5]) + "|";
    _0x1d6677 += _0x5eb77a(_0x46be65.initialCash, _0x1075ac[6]) + "|";
    _0x1d6677 += _0x5eb77a(_0x46be65.finalCash, _0x1075ac[7]) + "|";
    const _0xf27fab = _0x46be65.cashChange >= 0 ? "+" + _0x46be65.cashChange.toFixed(2) : _0x46be65.cashChange.toFixed(2);
    _0x1d6677 += _0x5eb77a(_0xf27fab, _0x1075ac[8]) + "|";
    console.log(_0x1d6677);
  });
  console.log("=".repeat(80));
  console.log("|" + _0x5eb77a("      任务执行完成，请查看详细结果      ", 78) + "|");
  console.log("=".repeat(80));
}
(async () => {
  const _0x282fd1 = _0x4199d6();
  console.log("共找到 " + _0x282fd1.length + " 个有效账号");
  !_0x282fd1.length && process.exit(1);
  const _0x1f0544 = [];
  await _0x561108(_0x282fd1, _0x766d4e, async _0x172801 => {
    {
      console.log("\n—— 🚀 开始账号[" + _0x172801.index + "]" + (_0x172801.remark ? "（" + _0x172801.remark + "）" : "") + " ——");
      try {
        {
          const _0x350f04 = await _0x3e47c0(_0x172801);
          _0x1f0544.push({
            "index": _0x172801.index,
            "remark": _0x172801.remark || "无备注",
            "nickname": _0x350f04?.["nickname"] || "账号" + _0x172801.index,
            "initialCoin": _0x350f04?.["initialCoin"] || 0,
            "finalCoin": _0x350f04?.["finalCoin"] || 0,
            "coinChange": _0x350f04?.["coinChange"] || 0,
            "initialCash": _0x350f04?.["initialCash"] || 0,
            "finalCash": _0x350f04?.["finalCash"] || 0,
            "cashChange": _0x350f04?.["cashChange"] || 0,
            "stats": _0x350f04?.["stats"] || {},
            "coinLimitExceeded": _0x350f04?.["coinLimitExceeded"] || false
          });
        }
      } catch (_0x25571f) {
        console.log("账号[" + _0x172801.index + "]" + (_0x172801.remark ? "（" + _0x172801.remark + "）" : "") + " ❌ 执行异常：" + _0x25571f.message);
        _0x1f0544.push({
          "index": _0x172801.index,
          "remark": _0x172801.remark || "无备注",
          "nickname": "账号" + _0x172801.index,
          "initialCoin": 0,
          "finalCoin": 0,
          "coinChange": 0,
          "initialCash": 0,
          "finalCash": 0,
          "cashChange": 0,
          "error": _0x25571f.message
        });
      }
    }
  });
  _0x1f0544.sort((_0x2921da, _0x3d22cd) => _0x2921da.index - _0x3d22cd.index);
  console.log("\n全部完成。", "✅");
  console.log("\n---------------------------------------------- 账号信息汇总 ----------------------------------------------");
  _0x3f3b2f(_0x1f0544);
})();
//Fri Nov 28 2025 05:26:31 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
console.log("\n╔══════════════════════════════════════════════════════════════╗");
console.log("║                    📢 购卡地址提示                           ║");
console.log("╠══════════════════════════════════════════════════════════════╣");
console.log("║  购卡地址: https://t.me/+U1IwSeGh-CA1Yjk1                    ║");
console.log("╚══════════════════════════════════════════════════════════════╝\n");
const _0x565f97 = require("querystring"),
  _0x55eb6f = require("axios"),
  _0x217acd = require("fs"),
  _0x3e14d8 = require("path"),
  _0x5548fe = require("querystring"),
  {
    SocksProxyAgent: _0x11cf8e
  } = require("socks-proxy-agent");
function _0x575c02(_0x4dd460 = {}) {
  try {
    let _0x547ea3 = _0x4dd460.adExtInfo || _0x4dd460.extInfo || _0x4dd460?.["ad"]?.["adExtInfo"] || "{}";
    if (typeof _0x547ea3 === "string") {
      try {
        _0x547ea3 = JSON.parse(_0x547ea3);
      } catch (_0xc63f06) {
        _0x547ea3 = {};
      }
    }
    const _0x2369ae = ["直播", "live", "主播", "LIVE", "zb", "ZB"],
      _0x21a1a8 = String(_0x4dd460.creativeId || _0x4dd460?.["ad"]?.["creativeId"] || "").toLowerCase(),
      _0x2a10d2 = String(_0x547ea3.description || "").toLowerCase(),
      _0x1c00ad = String(_0x547ea3.title || _0x4dd460.title || "").toLowerCase(),
      _0x4ed643 = String(_0x547ea3.caption || _0x4dd460.caption || "").toLowerCase(),
      _0x4b1591 = [_0x21a1a8, _0x2a10d2, _0x1c00ad, _0x4ed643, JSON.stringify(_0x547ea3 || {})];
    for (const _0x801e7d of _0x4b1591) {
      for (const _0x3896e3 of _0x2369ae) {
        if (_0x801e7d && _0x801e7d.includes(_0x3896e3.toLowerCase())) {
          return true;
        }
      }
    }
    const _0x3340c0 = _0x4dd460.materialTime || _0x4dd460?.["ad"]?.["materialTime"] || 0;
    if (_0x3340c0 > 60000) return true;
    if (_0x21a1a8.startsWith("live_") || _0x21a1a8.startsWith("zb_") || _0x21a1a8.startsWith("live-") || _0x21a1a8.startsWith("zb-")) return true;
    return false;
  } catch (_0x5863bb) {
    return false;
  }
}
function _0x4fe877(_0x479b31, _0x4d32bb) {
  const _0x18459e = parseInt(process.env[_0x479b31], 10);
  return isNaN(_0x18459e) ? _0x4d32bb : _0x18459e;
}
function _0xba8bc0(_0x47f13a, _0x2c45a7) {
  const _0x10dc19 = process.env[_0x47f13a];
  return _0x10dc19 ? _0x10dc19.trim() : _0x2c45a7;
}
function _0x5e632c(_0x54b09c, _0x3f9617, _0x498f82) {
  const _0x85873c = process.env[_0x54b09c];
  if (!_0x85873c) return [_0x3f9617, _0x498f82];
  const _0x46f451 = _0x85873c.trim(),
    _0x55b8c0 = _0x46f451.includes("-") ? "-" : ",",
    _0x47fed1 = _0x46f451.split(_0x55b8c0).map(_0x3f8069 => _0x3f8069.trim()).filter(Boolean);
  if (_0x47fed1.length === 2) {
    const _0x4e4e04 = parseInt(_0x47fed1[0], 10),
      _0x5fdb26 = parseInt(_0x47fed1[1], 10);
    if (!isNaN(_0x4e4e04) && !isNaN(_0x5fdb26) && _0x4e4e04 <= _0x5fdb26) return [_0x4e4e04, _0x5fdb26];
  }
  return [_0x3f9617, _0x498f82];
}
const _0x4246c8 = _0x4fe877("KSCOIN_LIMIT", 500000),
  _0x2bab25 = _0x4fe877("KSLOW_REWARD_THRESHOLD", 10),
  _0x1c583c = _0x4fe877("KSLOW_REWARD_LIMIT", 3),
  _0x40b476 = _0x4fe877("KSLOOK_COUNT", 50),
  _0x10ab29 = _0x4fe877("KSFOLLOW_COUNT", 2),
  _0x2de5ce = _0x4fe877("KSSEARCH_COUNT", 10),
  _0x1506d1 = _0x4fe877("KSSEARCHFOLLOW_COUNT", 2),
  _0x455628 = _0x4fe877("KSBOX_COUNT", 10),
  _0x470c6e = _0x4fe877("KSFOOD_COUNT", 10),
  _0x25a0a8 = _0x4fe877("KSKBOX_COUNT", 1),
  [_0x25302f, _0x469dfe] = _0x5e632c("KSROUND_START_WAIT", 7, 15),
  [_0x906725, _0x42037c] = _0x5e632c("KSWATCH_AD_TIME", 30, 40),
  [_0xbdecba, _0x20782f] = _0x5e632c("KSPRE_LOOK_FOLLOW_WAIT", 15, 30),
  [_0x28293e, _0x105464] = _0x5e632c("KSBETWEEN_LOOK_FOLLOW_WAIT", 35, 50),
  [_0x20609f, _0xb05334] = _0x5e632c("KSPRE_SEARCH_FOLLOW_WAIT", 15, 30),
  [_0x22f88f, _0x2a68cc] = _0x5e632c("KSBETWEEN_SEARCH_FOLLOW_WAIT", 15, 30),
  [_0x3e52d2, _0x3cc988] = _0x5e632c("KSROUND_END_WAIT", 10, 20),
  [_0x3e27a1, _0x198a2e] = _0x5e632c("KSTASK_SWITCH_WAIT", 15, 30),
  _0x3a0546 = _0x4fe877("MAX_CONCURRENCY", 888),
  _0x1857b4 = process.env.SCRIPT_VERSION || "v8",
  _0x4f88e2 = ".device_id.txt",
  _0x11e841 = process.env.AUTH_API_URL || "http://47.95.197.104/auth.php",
  _0x436786 = _0xba8bc0("AUTH_KEY", _0xba8bc0("KAMICARD_KEY", "")),
  _0x5a6815 = _0x436786 && _0x436786.length > 0;
let _0x2be6de = {
  "isValid": false,
  "lastCheckTime": 0,
  "keyStatus": null,
  "expiresAt": null,
  "checkInterval": null
};
const _0x4e528a = 600000,
  _0x4d7b04 = ["1", "true", "yes", "on"].includes(_0xba8bc0("SKIP_LIVE_ADS", "1").toLowerCase()),
  _0x2fd02f = Math.max(1, _0x4fe877("SKIP_LIVE_MAX_RETRIES", 5)),
  _0x33149e = ["1", "true", "yes", "on"].includes(_0xba8bc0("ENABLE_CHANGE_DID", "1").toLowerCase());
function _0x459618() {
  const _0x25f704 = process.env.Task;
  if (!_0x25f704) return ["look", "box", "food", "kbox", "search", "look_follow", "search_follow"];
  const _0x426463 = _0x25f704.split(",").map(_0x4c50a6 => _0x4c50a6.trim().toLowerCase()).filter(Boolean),
    _0x1fb12a = ["look", "box", "food", "kbox", "search", "look_follow", "search_follow"],
    _0x25b039 = _0x426463.filter(_0x3720ee => _0x1fb12a.includes(_0x3720ee));
  if (_0x25b039.length === 0) return ["look", "box", "food", "kbox", "search", "look_follow", "search_follow"];
  return _0x25b039;
}
function _0x4c1a1e() {
  const _0x16b4e9 = [],
    _0x3fec97 = new Set();
  if (process.env.ksck) {
    const _0x260024 = process.env.ksck,
      _0x24cbed = _0x260024.split("&").map(_0x2205a5 => _0x2205a5.trim()).filter(Boolean);
    _0x16b4e9.push(..._0x24cbed);
  }
  for (let _0x3ccc1d = 1; _0x3ccc1d <= 666; _0x3ccc1d++) {
    const _0x47434b = "ksck" + _0x3ccc1d;
    if (process.env[_0x47434b]) {
      const _0x34526b = process.env[_0x47434b],
        _0x298746 = _0x34526b.split("&").map(_0x905de7 => _0x905de7.trim()).filter(Boolean);
      _0x16b4e9.push(..._0x298746);
    }
  }
  const _0x1ac603 = [];
  for (const _0x135956 of _0x16b4e9) {
    if (!_0x3fec97.has(_0x135956)) {
      _0x3fec97.add(_0x135956);
      _0x1ac603.push(_0x135956);
    }
  }
  return _0x1ac603;
}
const _0x4aa92d = _0x4c1a1e(),
  _0x48e1c9 = _0x4aa92d.length,
  _0x34033a = _0x459618();
function _0x504645() {
  try {
    const _0xcacb38 = _0x490a02 => {
        const _0x16d969 = "0123456789abcdef";
        let _0x194175 = "";
        for (let _0x16cc44 = 0; _0x16cc44 < _0x490a02; _0x16cc44++) {
          _0x194175 += _0x16d969.charAt(Math.floor(Math.random() * _0x16d969.length));
        }
        return _0x194175;
      },
      _0x466614 = _0xcacb38(16),
      _0x2fd6ab = "ANDROID_" + _0x466614;
    return _0x2fd6ab;
  } catch (_0x145708) {
    console.log("生成did失败: " + _0x145708.message);
    const _0x4185d7 = Date.now().toString(16).toUpperCase();
    return "ANDROID_" + _0x4185d7.substring(0, 16);
  }
}
function _0x3ec26a() {
  const _0x38d952 = require("fs"),
    _0x25b354 = require("path");
  try {
    if (_0x38d952.existsSync(_0x4f88e2)) {
      const _0x57513b = _0x38d952.readFileSync(_0x4f88e2, "utf8").trim();
      if (_0x57513b && _0x57513b.length === 32) return _0x57513b;else {
        if (_0x57513b && _0x57513b.length > 0) try {
          _0x38d952.unlinkSync(_0x4f88e2);
        } catch (_0x38fc0a) {}
      }
    }
    const _0x58951f = "0123456789abcdef",
      _0x3ee4ef = () => {
        {
          let _0x2014c9 = "";
          for (let _0x1ddbcc = 0; _0x1ddbcc < 32; _0x1ddbcc++) {
            _0x2014c9 += _0x58951f.charAt(Math.floor(Math.random() * _0x58951f.length));
          }
          return _0x2014c9;
        }
      },
      _0x2f7ecf = _0x3ee4ef();
    try {
      _0x38d952.writeFileSync(_0x4f88e2, _0x2f7ecf, "utf8");
    } catch (_0x2b8c8d) {
      console.log("保存设备ID失败: " + _0x2b8c8d.message);
    }
    return _0x2f7ecf;
  } catch (_0x1c8ab5) {
    console.log("读取设备ID失败: " + _0x1c8ab5.message);
    const _0x115644 = "0123456789abcdef";
    let _0x560a4e = "";
    for (let _0x50065b = 0; _0x50065b < 32; _0x50065b++) {
      _0x560a4e += _0x115644.charAt(Math.floor(Math.random() * _0x115644.length));
    }
    return _0x560a4e;
  }
}
async function _0x5dcc75(_0x598961, _0x7165be = null, _0x49df26 = "Unknown Request") {
  const _0x57018e = {
    ..._0x598961
  };
  let _0x34a03b = null;
  if (_0x7165be) {
    try {
      _0x34a03b = new _0x11cf8e(_0x7165be);
    } catch (_0x48140c) {
      console.log("[错误] " + _0x49df26 + " 代理URL无效(" + _0x48140c.message + ")，尝试直连模式");
    }
  }
  const _0xdf6404 = _0x57018e.method || "GET",
    _0x57231e = _0x57018e.url,
    _0x3fe753 = _0x57018e.headers || {},
    _0x517415 = _0x57018e.body || _0x57018e.form,
    _0x5b819a = _0x579893 => {
      {
        const _0x2a587f = {
          ...(_0x579893 || {})
        };
        if (_0x2a587f.Cookie) {
          {
            const _0x338ecb = String(_0x2a587f.Cookie).split(";"),
              _0x15f038 = _0x338ecb.map(_0x24e222 => {
                if (_0x24e222.includes("=")) {
                  const [_0x371cc1, _0x517b46] = _0x24e222.split("=");
                  if (_0x371cc1.trim() === "kuaishou.api_st" || _0x371cc1.trim().includes("api_st")) {
                    return _0x371cc1.trim() + "=" + (_0x517b46 ? _0x517b46.substring(0, 10) + "***" : "");
                  }
                  return _0x24e222;
                }
                return _0x24e222;
              }).join("; ");
            _0x2a587f.Cookie = _0x15f038.substring(0, 100) + (_0x15f038.length > 100 ? "..." : "");
          }
        }
        return _0x2a587f;
      }
    },
    _0x31b9fa = (_0x300ab3, _0x46d6d3 = 500) => {
      if (!_0x300ab3) return "(无请求体)";
      let _0xed8e84 = typeof _0x300ab3 === "string" ? _0x300ab3 : JSON.stringify(_0x300ab3);
      if (_0xed8e84.length > _0x46d6d3) return _0xed8e84.substring(0, _0x46d6d3) + "...(已截断)";
      return _0xed8e84;
    };
  let _0x5c04d8 = null;
  try {
    const _0x2053f4 = Date.now();
    _0x5c04d8 = {
      "method": _0xdf6404,
      "url": _0x57231e,
      "headers": _0x3fe753,
      "data": _0x517415,
      "timeout": _0x57018e.timeout || 30000,
      "startTime": _0x2053f4,
      ...(_0x34a03b && {
        "httpAgent": _0x34a03b,
        "httpsAgent": _0x34a03b
      })
    };
    const _0x4d74cc = await _0x55eb6f(_0x5c04d8),
      _0x1d31e3 = Date.now() - _0x2053f4;
    return {
      "response": _0x4d74cc,
      "body": _0x4d74cc.data
    };
  } catch (_0xb60cf0) {
    const _0x7a956c = _0xb60cf0.config?.["startTime"] ? Date.now() - _0xb60cf0.config.startTime : 0;
    if (_0xb60cf0.response) {
      const _0x223a8b = _0xb60cf0.response.data || null;
      return {
        "response": _0xb60cf0.response,
        "body": _0x223a8b
      };
    } else {
      if (_0xb60cf0.request) {} else {}
    }
    return {
      "response": null,
      "body": null
    };
  }
}
function _0x26e3b6(_0x253f1c) {
  if (!_0x253f1c || typeof _0x253f1c !== "string") return false;
  if (_0x253f1c.includes("<html>") || _0x253f1c.includes("503 Service Temporarily Unavailable") || _0x253f1c.includes("502 Bad Gateway") || _0x253f1c.includes("504 Gateway Timeout")) return false;
  const _0x712666 = /^(\d{1,3}\.){3}\d{1,3}$/,
    _0x4c35d8 = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
  if (_0x712666.test(_0x253f1c)) {
    const _0x15db14 = _0x253f1c.split(".");
    for (const _0x4b1a6a of _0x15db14) {
      {
        const _0x52f36d = parseInt(_0x4b1a6a, 10);
        if (_0x52f36d < 0 || _0x52f36d > 255 || isNaN(_0x52f36d)) return false;
      }
    }
    return true;
  }
  return _0x4c35d8.test(_0x253f1c);
}
async function _0x37101b(_0x3311c6, _0x374ec0 = "代理连通性检测", _0x2b3146 = 10) {
  if (!_0x3311c6) return {
    "ok": true,
    "msg": "✅ 未配置代理（直连模式）",
    "ip": "localhost"
  };
  let _0x3f0fb8 = null;
  const _0x4382c8 = ["https://httpbin.org/ip", "https://api.ipify.org?format=json", "https://jsonip.com", "https://api.my-ip.io/ip.json"];
  for (let _0x35892a = 1; _0x35892a <= _0x2b3146; _0x35892a++) {
    for (const _0x5d338d of _0x4382c8) {
      try {
        const {
          response: _0x3825ff,
          body: _0x1d27f7
        } = await _0x5dcc75({
          "method": "GET",
          "url": _0x5d338d,
          "headers": {
            "User-Agent": "ProxyTester/1.0"
          },
          "timeout": 15000
        }, _0x3311c6, _0x374ec0 + " → " + new URL(_0x5d338d).hostname);
        if (typeof _0x1d27f7 === "string" && (_0x1d27f7.includes("<html>") || _0x1d27f7.includes("503 Service Temporarily Unavailable") || _0x1d27f7.includes("502 Bad Gateway") || _0x1d27f7.includes("504 Gateway Timeout"))) continue;
        if (_0x1d27f7) {
          {
            let _0x19b010 = null;
            if (_0x5d338d.includes("httpbin.org") && _0x1d27f7.origin) _0x19b010 = _0x1d27f7.origin;else {
              if (_0x5d338d.includes("ipify.org") && _0x1d27f7.ip) _0x19b010 = _0x1d27f7.ip;else {
                if (_0x5d338d.includes("jsonip.com") && _0x1d27f7.ip) {
                  _0x19b010 = _0x1d27f7.ip;
                } else {
                  if (_0x5d338d.includes("my-ip.io") && _0x1d27f7.ip) _0x19b010 = _0x1d27f7.ip;else typeof _0x1d27f7 === "string" && !_0x1d27f7.includes("<") && (_0x19b010 = _0x1d27f7.trim());
                }
              }
            }
            if (_0x19b010 && _0x26e3b6(_0x19b010)) return {
              "ok": true,
              "msg": "✅ SOCKS5代理正常，出口IP: " + _0x19b010,
              "ip": _0x19b010
            };
          }
        }
      } catch (_0x4adf08) {
        _0x3f0fb8 = _0x4adf08;
        continue;
      }
      await new Promise(_0x1f6457 => setTimeout(_0x1f6457, 500));
    }
    if (_0x35892a < _0x2b3146) {
      {
        const _0x492640 = _0x35892a * 2000;
        await new Promise(_0x381d0f => setTimeout(_0x381d0f, _0x492640));
      }
    }
  }
  try {
    new URL(_0x3311c6);
  } catch (_0x154432) {
    return {
      "ok": false,
      "msg": "❌ 代理URL格式错误: " + _0x154432.message,
      "ip": null
    };
  }
  return {
    "ok": false,
    "msg": "❌ 代理测试失败: " + (_0x3f0fb8?.["message"] || "所有测试端点均无法访问"),
    "ip": null
  };
}
const _0x4c4c30 = new Set();
async function _0x13340d(_0x206ab2, _0x52853e, _0x11450b = "?") {
  const _0x2600a3 = "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo?source=bottom_guide_first",
    {
      body: _0x2ecf5f
    } = await _0x5dcc75({
      "method": "GET",
      "url": _0x2600a3,
      "headers": {
        "Host": "nebula.kuaishou.com",
        "User-Agent": "kwai-android aegon/3.56.0",
        "Cookie": _0x206ab2,
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "timeout": 8000
    }, _0x52853e, "账号[" + _0x11450b + "] 获取基本信息");
  if (_0x2ecf5f && _0x2ecf5f.result === 1 && _0x2ecf5f.data) {
    let _0x38bbab = null;
    _0x2ecf5f.data.userData && (_0x38bbab = _0x2ecf5f.data.userData.ud || _0x2ecf5f.data.userData.userId || _0x2ecf5f.data.userData.user_id || _0x2ecf5f.data.userData.id || null);
    !_0x38bbab && (_0x38bbab = _0x2ecf5f.data.ud || _0x2ecf5f.data.userId || _0x2ecf5f.data.user_id || null);
    return {
      "nickname": _0x2ecf5f.data.userData?.["nickname"] || null,
      "totalCoin": _0x2ecf5f.data.totalCoin ?? null,
      "allCash": _0x2ecf5f.data.allCash ?? null,
      "ud": _0x38bbab
    };
  }
  return null;
}
const _0x18ac1f = String(process.env.FORCE_COLOR || "").toLowerCase(),
  _0x46a3ad = String(process.env.NO_COLOR || "").toLowerCase() === "1",
  _0x44f4dc = !_0x46a3ad && _0x18ac1f !== "0",
  _0x34112d = _0x44f4dc ? {
    "reset": "[0m",
    "bright": "[1m",
    "dim": "[2m",
    "red": "[31m",
    "green": "[32m",
    "yellow": "[33m",
    "blue": "[34m",
    "magenta": "[35m",
    "cyan": "[36m",
    "white": "[37m"
  } : {
    "reset": "",
    "bright": "",
    "dim": "",
    "red": "",
    "green": "",
    "yellow": "",
    "blue": "",
    "magenta": "",
    "cyan": "",
    "white": ""
  };
function _0x433ffd(_0x5787c5, _0x139e64) {
  if (!_0x44f4dc || !_0x139e64) {
    return String(_0x5787c5);
  }
  return "" + _0x139e64 + _0x5787c5 + _0x34112d.reset;
}
function _0x4ea144(_0x6b23ed) {
  return _0x433ffd("[" + _0x6b23ed + "]", _0x34112d.bright + _0x34112d.cyan);
}
function _0x34ad67(_0x4883b3) {
  return _0x433ffd("[" + _0x4883b3 + "]", _0x34112d.bright + _0x34112d.green);
}
function _0x55ce65(_0x5f5a71) {
  return _0x433ffd("[" + _0x5f5a71 + "]", _0x34112d.bright + _0x34112d.yellow);
}
function _0x90859(_0x2bc5b7, _0x4a6893) {
  _0x2bc5b7 = String(_0x2bc5b7);
  if (_0x2bc5b7.length >= _0x4a6893) return _0x2bc5b7.substring(0, _0x4a6893);
  const _0x1e49b4 = _0x4a6893 - _0x2bc5b7.length,
    _0x1a5135 = Math.floor(_0x1e49b4 / 2),
    _0x1501ed = _0x1e49b4 - _0x1a5135;
  return " ".repeat(_0x1a5135) + _0x2bc5b7 + " ".repeat(_0x1501ed);
}
class _0x406635 {
  constructor({
    index: _0x16a1fc,
    salt: _0x215371,
    cookie: _0x3f6fa7,
    nickname = "",
    proxyUrl = null,
    tasksToExecute = ["look"],
    remark = "",
    udFromLogin = null
  }) {
    this.index = _0x16a1fc;
    this.salt = _0x215371;
    this.cookie = _0x3f6fa7;
    this.nickname = nickname || remark || "账号" + _0x16a1fc;
    this.remark = remark;
    this.proxyUrl = proxyUrl;
    this.coinLimit = _0x4246c8;
    this.coinExceeded = false;
    this.tasksToExecute = tasksToExecute;
    this.adaddnum = 0;
    this.extractCookieInfo();
    if (udFromLogin && udFromLogin.trim()) {
      {
        const _0x5c7868 = String(udFromLogin).trim();
        if (_0x5c7868) {
          this.userId = _0x5c7868;
        }
      }
    }
    this.headers = {
      "Host": "nebula.kuaishou.com",
      "Connection": "keep-alive",
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; MI 8 Lite Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.101 Mobile Safari/537.36",
      "Cookie": this.cookie,
      "content-type": "application/json"
    };
    this.taskReportPath = "/rest/r/ad/task/report";
    this.startTime = Date.now();
    this.endTime = this.startTime - 30000;
    this.queryParams = "mod=Xiaomi(MI 11)&appver=" + this.appver + "&egid=" + this.egid + "&did=" + this.did;
    this.taskConfigs = {
      "look": {
        "name": "看广告得金币",
        "businessId": 672,
        "posId": 24067,
        "subPageId": 100026367,
        "requestSceneType": 1,
        "taskType": 1
      },
      "look_follow": {
        "name": "追加看广告得金币",
        "businessId": 672,
        "posId": 24067,
        "subPageId": 100026367,
        "requestSceneType": 2,
        "taskType": 1
      },
      "box": {
        "name": "宝箱广告",
        "businessId": 606,
        "posId": 20346,
        "subPageId": 100024064,
        "requestSceneType": 1,
        "taskType": 1
      },
      "food": {
        "name": "饭补广告",
        "businessId": 9362,
        "posId": 24067,
        "subPageId": 100026367,
        "requestSceneType": 7,
        "taskType": 2
      },
      "kbox": {
        "name": "开宝箱",
        "businessId": 606,
        "posId": 20346,
        "subPageId": 100024064,
        "requestSceneType": 1,
        "taskType": 1
      },
      "search": {
        "name": "搜索任务",
        "pageId": 11014,
        "businessId": 7076,
        "posId": 216268,
        "subPageId": 100161537,
        "requestSceneType": 1,
        "taskType": 1
      },
      "search_follow": {
        "name": "搜索任务追加",
        "pageId": 11014,
        "businessId": 7076,
        "posId": 216268,
        "subPageId": 100161537,
        "requestSceneType": 7,
        "taskType": 2
      }
    };
    this.taskStats = {};
    const _0x35a7b2 = new Set(this.tasksToExecute);
    _0x35a7b2.add("look_follow");
    _0x35a7b2.add("search");
    _0x35a7b2.add("search_follow");
    _0x35a7b2.forEach(_0x1a6bed => {
      this.taskConfigs[_0x1a6bed] && (this.taskStats[_0x1a6bed] = {
        "success": 0,
        "failed": 0,
        "totalReward": 0
      });
    });
    this.lowRewardStreak = 0;
    this.lowRewardThreshold = _0x2bab25;
    this.lowRewardLimit = _0x1c583c;
    this.stopAllTasks = false;
    this.taskLimitReached = {};
    const _0x45d95f = new Set(this.tasksToExecute);
    _0x45d95f.add("look_follow");
    _0x45d95f.add("search");
    _0x45d95f.add("search_follow");
    _0x45d95f.forEach(_0x346f59 => {
      this.taskConfigs[_0x346f59] && (this.taskLimitReached[_0x346f59] = false);
    });
  }
  ["getAccountDisplayName"]() {
    const _0x2c9583 = this.remark || this.nickname || "账号" + this.index;
    if (_0x44f4dc) {
      const _0x51faa6 = "" + _0x34112d.bright + _0x34112d.cyan + "账号" + _0x34112d.reset;
      return "" + _0x51faa6 + _0x4ea144(_0x2c9583);
    }
    return "账号[" + _0x2c9583 + "]";
  }
  async ["checkUdBindStatusForAccount"]() {
    if (!_0x5a6815 || !_0x436786) {
      return {
        "valid": true,
        "message": "未启用卡密验证"
      };
    }
    if (!this.userId || !this.userId.trim()) {
      return {
        "valid": true,
        "message": "账号UD未获取，等待获取"
      };
    }
    try {
      {
        const _0x2b64a5 = _0x11e841.replace("/auth.php", "/client_api.php"),
          _0x16ff75 = _0x2b64a5 + "?api=check_key&key=" + encodeURIComponent(_0x436786) + "&script_version=" + encodeURIComponent(_0x1857b4),
          _0x9cb3a2 = await _0x55eb6f.get(_0x16ff75, {
            "timeout": 10000
          });
        if (_0x9cb3a2.data && _0x9cb3a2.data.status) {
          {
            const _0x119371 = _0x9cb3a2.data.data || {},
              _0x3930f9 = _0x119371.ud_bind_enabled === true || _0x119371.ud_bind_enabled === "1" || _0x119371.ud_bind_enabled === 1,
              _0x33177b = _0x119371.bound_uds || [],
              _0xaf1146 = _0x119371.max_ud_bind_count || 0,
              _0x28a273 = this.userId.trim();
            if (!_0x3930f9) return {
              "valid": true,
              "message": "UD绑定未启用"
            };
            if (_0x3930f9) {
              {
                if (_0x33177b.length > 0) {
                  {
                    const _0x31e664 = _0x33177b.map(_0x15a1d9 => String(_0x15a1d9).trim());
                    if (!_0x31e664.includes(_0x28a273)) {
                      return {
                        "valid": false,
                        "message": "UD绑定验证失败：当前账号UD（" + _0x28a273 + "）不在云端绑定列表中，脚本已停止运行"
                      };
                    }
                    return {
                      "valid": true,
                      "message": "UD绑定验证通过"
                    };
                  }
                }
                return {
                  "valid": true,
                  "message": "等待首次UD绑定"
                };
              }
            }
          }
        }
        return {
          "valid": true,
          "message": "无法获取UD绑定状态，继续执行"
        };
      }
    } catch (_0x5004b0) {
      return {
        "valid": true,
        "message": "检查UD绑定状态时出错，继续执行"
      };
    }
  }
  async ["checkDeviceIdBindStatus"]() {
    if (!_0x5a6815 || !_0x436786) {
      return {
        "valid": true,
        "message": "未启用卡密验证"
      };
    }
    try {
      const _0x16e138 = _0x3ec26a(),
        _0x2a4a11 = _0x11e841.replace("/auth.php", "/client_api.php"),
        _0xb1c981 = _0x2a4a11 + "?api=check_key&key=" + encodeURIComponent(_0x436786) + "&script_version=" + encodeURIComponent(_0x1857b4),
        _0x13bdbc = await _0x55eb6f.get(_0xb1c981, {
          "timeout": 10000
        });
      if (_0x13bdbc.data && _0x13bdbc.data.status) {
        {
          const _0x1fade7 = _0x13bdbc.data.data || {},
            _0x5d7963 = _0x1fade7.device_bind_enabled === true || _0x1fade7.device_bind_enabled === "1" || _0x1fade7.device_bind_enabled === 1,
            _0x6661d6 = _0x1fade7.bound_device_id || null;
          if (!_0x5d7963) {
            return {
              "valid": true,
              "message": "设备ID绑定未启用"
            };
          }
          if (_0x5d7963) {
            if (_0x6661d6) {
              if (_0x16e138 !== _0x6661d6) return {
                "valid": false,
                "message": "设备ID绑定验证失败：本地设备与云端绑定设备不一致，脚本已停止运行"
              };
              return {
                "valid": true,
                "message": "设备ID绑定验证通过"
              };
            }
            return {
              "valid": true,
              "message": "等待首次设备ID绑定"
            };
          }
        }
      }
      return {
        "valid": true,
        "message": "无法获取设备ID绑定状态，继续执行"
      };
    } catch (_0x41d4a0) {
      return {
        "valid": true,
        "message": "检查设备ID绑定状态时出错，继续执行"
      };
    }
  }
  ["getTaskTotalCount"](_0x378cda) {
    switch (_0x378cda) {
      case "look":
        return _0x40b476;
      case "look_follow":
        return this.tasksToExecute.includes("look") ? _0x40b476 * _0x10ab29 : 0;
      case "search":
        return _0x2de5ce;
      case "search_follow":
        return this.tasksToExecute.includes("search") ? _0x2de5ce * _0x1506d1 : 0;
      case "box":
        return _0x455628;
      case "food":
        return _0x470c6e;
      case "kbox":
        return _0x25a0a8;
      default:
        return 0;
    }
  }
  async ["checkCoinLimit"]() {
    try {
      const _0x2c4d2d = await _0x13340d(this.getCookieWithCurrentDid(), this.proxyUrl, this.index);
      if (_0x2c4d2d && _0x2c4d2d.totalCoin) {
        const _0x35e223 = parseInt(_0x2c4d2d.totalCoin);
        if (_0x35e223 >= this.coinLimit) {
          console.log("⚠️ " + this.getAccountDisplayName() + " 金币已达 " + _0x35e223 + "，超过 " + this.coinLimit + " 阈值，将停止任务");
          this.coinExceeded = true;
          this.stopAllTasks = true;
          return true;
        }
      }
      return false;
    } catch (_0x4a552b) {
      console.log("❌ " + this.getAccountDisplayName() + " 金币检查异常: " + _0x4a552b.message);
      return false;
    }
  }
  ["extractCookieInfo"]() {
    try {
      const _0x211ab0 = (_0x2cee82, _0x4b4193 = "") => {
        {
          const _0x14ba17 = _0xa1fcf3 => {
              return _0xa1fcf3.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            },
            _0x205412 = _0x14ba17(_0x2cee82),
            _0x2f6b88 = [new RegExp(_0x205412 + "\\s*=\\s*\"([^\"]+)\"", "i"), new RegExp(_0x205412 + "\\s*=\\s*([^;\\s]+)", "i"), new RegExp(_0x205412 + "\\s*:\\s*\"([^\"]+)\"", "i"), new RegExp(_0x205412 + "\\s*:\\s*([^,;\\s]+)", "i")];
          for (const _0x14b287 of _0x2f6b88) {
            const _0x4f2141 = this.cookie.match(_0x14b287);
            if (_0x4f2141 && _0x4f2141[1] && _0x4f2141[1].trim()) {
              return _0x4f2141[1].trim();
            }
          }
          return _0x4b4193;
        }
      };
      this.egid = _0x211ab0("egid");
      this.did = _0x211ab0("did") || _0x211ab0("oDid");
      this.userId = _0x211ab0("ud") || _0x211ab0("userId");
      this.kuaishouApiSt = _0x211ab0("kuaishou.api_st") || _0x211ab0("kuaishou_api_st") || _0x211ab0("api_st");
      this.appver = _0x211ab0("appver", "13.10.20.10822");
      const _0x2ae65f = [];
      if (!this.egid) _0x2ae65f.push("egid");
      if (!this.did) _0x2ae65f.push("did");
      if (!this.userId) _0x2ae65f.push("ud/userId");
      if (_0x2ae65f.length > 0) {
        !this.userId && console.log("⚠️ " + this.getAccountDisplayName() + " 未检测到UD（ud/userId），可能影响签名功能");
      }
    } catch (_0x575f46) {
      console.log("❌ " + this.getAccountDisplayName() + " 解析cookie失败: " + _0x575f46.message);
    }
  }
  ["getCookieWithCurrentDid"]() {
    try {
      if (!this.cookie || !this.did) return this.cookie;
      const _0x4a162a = String(this.cookie).split(";"),
        _0x1ce43c = _0x4a162a.map(_0x2d219b => {
          {
            const _0x1ace2a = String(_0x2d219b ?? "");
            if (!_0x1ace2a.trim()) return _0x1ace2a;
            const _0x28d6a8 = _0x1ace2a.includes("="),
              _0x33f040 = _0x1ace2a.includes(":"),
              _0x4abb0d = _0x28d6a8 ? "=" : _0x33f040 ? ":" : null;
            if (!_0x4abb0d) return _0x1ace2a;
            const [_0x924f09, ..._0x1ec37a] = _0x1ace2a.split(_0x4abb0d),
              _0x5a48f3 = String(_0x924f09 || "").trim(),
              _0x50eed3 = _0x5a48f3.toLowerCase();
            if (_0x50eed3 === "did" || _0x50eed3 === "odid") return "" + _0x5a48f3 + _0x4abb0d + this.did;
            return _0x1ace2a;
          }
        });
      return _0x1ce43c.join("; ");
    } catch (_0x9ab7c4) {
      return this.cookie;
    }
  }
  ["getTaskStats"]() {
    return this.taskStats;
  }
  ["printTaskStats"]() {
    console.log("\n📊 " + this.getAccountDisplayName() + " 任务执行统计:");
    for (const [_0x17f284, _0x1c6da8] of Object.entries(this.taskStats)) {
      {
        const _0x27c761 = this.taskConfigs[_0x17f284].name;
        console.log("  " + _0x27c761 + ": 成功" + _0x1c6da8.success + "次, 失败" + _0x1c6da8.failed + "次, 总奖励" + _0x1c6da8.totalReward + "金币");
      }
    }
  }
  async ["retryOperation"](_0x41502e, _0x5a9698, _0x272634 = 3, _0x1006f1 = 2000) {
    let _0x237fe0 = 0,
      _0x4e9121 = null;
    while (_0x237fe0 < _0x272634) {
      {
        try {
          {
            const _0xb69e09 = await _0x41502e();
            if (_0xb69e09) return _0xb69e09;
            _0x4e9121 = new Error(_0x5a9698 + " 返回空结果");
          }
        } catch (_0x3990de) {
          _0x4e9121 = _0x3990de;
        }
        _0x237fe0++;
        if (_0x237fe0 < _0x272634) {
          await new Promise(_0x52c58a => setTimeout(_0x52c58a, _0x1006f1));
        }
      }
    }
    return null;
  }
  ["needsNewDid"] = false;
  async ["getAdInfo"](_0xec506c, _0x50deba = 0) {
    try {
      const _0xc13fb3 = _0x4d7b04 ? _0x2fd02f : 1,
        _0x4bac09 = "/rest/e/reward/mixed/ad",
        _0x2ade6d = {
          "encData": "|encData|",
          "sign": "|sign|",
          "cs": "false",
          "client_key": "2ac2a76d",
          "videoModelCrowdTag": "1_23",
          "os": "android",
          "kuaishou.api_st": this.kuaishouApiSt,
          "uQaTag": "1##swLdgl:99#ecPp:-9#cmNt:-0#cmHs:-3#cmMnsl:-0"
        };
      if (this.needsNewDid) {
        if (_0x33149e) {
          const _0x513dfa = _0x504645();
          this.did = _0x513dfa;
          this.queryParams = "mod=Xiaomi(MI 11)&appver=" + this.appver + "&egid=" + this.egid + "&did=" + _0x513dfa;
          console.log("🔄 " + this.getAccountDisplayName() + " 已更新设备ID: " + _0x513dfa);
        } else console.log("🔄 " + this.getAccountDisplayName() + " 检测到需要更新设备ID，但当前已关闭自动更换did");
        this.needsNewDid = false;
      }
      if (!this.userId) {}
      const _0x22aacf = {
        "earphoneMode": "1",
        "mod": "Xiaomi(23116PN5BC)",
        "appver": this.appver,
        "isp": "CUCC",
        "language": "zh-cn",
        "ud": this.userId || "",
        "did_tag": "0",
        "net": "WIFI",
        "kcv": "1599",
        "app": "0",
        "kpf": "ANDROID_PHONE",
        "ver": "11.6",
        "android_os": "0",
        "boardPlatform": "pineapple",
        "kpn": "NEBULA",
        "androidApiLevel": "35",
        "country_code": "cn",
        "sys": "ANDROID_15",
        "sw": "1080",
        "sh": "2400",
        "abi": "arm64",
        "userRecoBit": "0"
      };
      let _0xdbbe1e = "{}";
      if (_0xec506c.businessId === 7076) {
        const _0x4d9893 = "eyJwYWdlSWQiOiAxMTAxNCwgInN1YlBhZ2VJZCI6IDEwMDE2MTUzNywgInBvc0lkIjogMjE2MjY4LCAiYnVzaW5lc3NJZCI6IDcwNzYsICJleHRQYXJhbXMiOiAiIiwgImN1c3RvbURhdGEiOiB7ImV4aXRJbmZvIjogeyJ0b2FzdERlc2MiOiBudWxsLCAidG9hc3RJbWdVcmwiOiBudWxsfX0sICJwZW5kYW50VHlwZSI6IDEsICJkaXNwbGF5VHlwZSI6IDIsICJzaW5nbGVQYWdlSWQiOiAwLCAic2luZ2xlU3ViUGFnZUlkIjogMCwgImNoYW5uZWwiOiAwLCAiY291bnRkb3duUmVwb3J0IjogZmFsc2UsICJ0aGVtZVR5cGUiOiAwLCAibWl4ZWRBZCI6IHRydWUsICJmdWxsTWl4ZWQiOiB0cnVlLCAiYXV0b1JlcG9ydCI6IHRydWUsICJmcm9tVGFza0NlbnRlciI6IHRydWUsICJzZWFyY2hJbnNwaXJlU2NoZW1lSW5mbyI6IG51bGwsICJhbW91bnQiOiAwfQ==",
          _0x2cc362 = {
            "openH5AdCount": 0,
            "sessionLookedCompletedCount": this.adaddnum,
            "sessionType": _0xec506c.requestSceneType === 2 ? "2" : "1",
            "searchKey": "短剧小说",
            "triggerType": "2",
            "disableReportToast": true,
            "businessEnterAction": "7",
            "neoParams": _0x4d9893
          };
        _0xdbbe1e = JSON.stringify(_0x2cc362);
      }
      const _0x4be630 = {
          "appInfo": {
            "appId": "kuaishou_nebula",
            "name": "快手极速版",
            "packageName": "com.kuaishou.nebula",
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
            "userId": this.userId || "",
            "age": 0,
            "gender": ""
          },
          "impInfo": [{
            "pageId": _0xec506c.pageId || 11101,
            "subPageId": _0xec506c.subPageId,
            "action": 0,
            "browseType": 3,
            "impExtData": _0xdbbe1e,
            "mediaExtData": "{}"
          }]
        },
        _0x243ff6 = Buffer.from(JSON.stringify(_0x4be630)).toString("base64");
      let _0x130aee = await this.getSign(_0x243ff6);
      if (!_0x130aee) {
        console.log("❌ " + this.getAccountDisplayName() + " 获取签名失败");
        return null;
      }
      _0x2ade6d.encData = _0x130aee.encdata;
      _0x2ade6d.sign = _0x130aee.sign;
      let _0xb9eb83 = await this.requestSignService({
        "urlpath": _0x4bac09,
        "reqdata": _0x565f97.stringify(_0x2ade6d) + "&" + _0x565f97.stringify(_0x22aacf),
        "api_client_salt": this.salt
      }, "获取广告签名");
      if (!_0xb9eb83) {
        console.log("❌ " + this.getAccountDisplayName() + " 获取广告签名失败");
        return null;
      }
      const _0x49c5f5 = {
          ..._0x22aacf,
          "sig": _0xb9eb83.sig,
          "__NS_sig3": _0xb9eb83.__NS_sig3,
          "__NS_xfalcon": _0xb9eb83.__NS_xfalcon || "",
          "__NStokensig": _0xb9eb83.__NStokensig
        },
        _0x1e0e03 = "https://api.e.kuaishou.com" + _0x4bac09 + "?" + _0x5548fe.stringify(_0x49c5f5),
        {
          response: _0x2023d3,
          body: _0x228325
        } = await _0x5dcc75({
          "method": "POST",
          "url": _0x1e0e03,
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Host": "api.e.kuaishou.com",
            "User-Agent": "kwai-android aegon/3.56.0",
            "Cookie": "kuaishou.api_st=" + this.kuaishouApiSt
          },
          "form": _0x2ade6d,
          "timeout": 30000
        }, this.proxyUrl, this.getAccountDisplayName() + " 获取广告");
      if (!_0x2023d3 || !_0x228325) return null;
      if (_0x228325.errorMsg === "OK" && _0x228325.feeds && _0x228325.feeds[0] && _0x228325.feeds[0].ad) {
        const _0x39f1a6 = _0x228325.feeds[0],
          _0x2bdd2e = _0x39f1a6?.["ad"]?.["creativeId"] ?? _0x39f1a6?.["creativeId"],
          _0x2416dc = _0x39f1a6.exp_tag || "",
          _0x4a809f = _0x2416dc.split("/")[1]?.["split"]("_")?.[0] || "";
        if (!_0x2bdd2e) return console.log("⚠️ " + this.getAccountDisplayName() + " 未能解析广告 creativeId"), null;
        if (_0x4d7b04) {
          const _0x4a09bd = _0x39f1a6.ad ? {
              ..._0x39f1a6.ad
            } : {
              ..._0x39f1a6
            },
            _0xd97221 = _0x39f1a6?.["ad"]?.["adDataV2"]?.["inspireAdInfo"]?.["adExtInfo"] ?? _0x39f1a6?.["ad"]?.["adExtInfo"] ?? _0x39f1a6?.["adExtInfo"] ?? "{}";
          _0x4a09bd.creativeId = _0x4a09bd.creativeId ?? _0x2bdd2e;
          _0x4a09bd.materialTime = _0x4a09bd.materialTime ?? _0x39f1a6.materialTime ?? 0;
          _0x4a09bd.adExtInfo = typeof _0xd97221 === "string" ? _0xd97221 : JSON.stringify(_0xd97221);
          if (_0x575c02(_0x4a09bd)) {
            {
              console.log("⏭️ " + this.getAccountDisplayName() + " 检测到直播广告，重试 " + (_0x50deba + 1) + "/" + _0xc13fb3);
              if (_0x50deba < _0xc13fb3 - 1) return await this.getAdInfo(_0xec506c, _0x50deba + 1);
              console.log("⚠️ " + this.getAccountDisplayName() + " 多次获取直播广告，停止当前任务");
              return null;
            }
          }
        }
        const _0x22524d = (_0x39f1a6.caption || _0x39f1a6?.["ad"]?.["caption"] || "").slice(0, 20),
          _0x3cc37f = _0x34112d.bright + _0x34112d.blue;
        console.log(_0x433ffd("ℹ️", _0x3cc37f) + " " + this.getAccountDisplayName() + " 获取广告: " + (_0x22524d || "无标题"));
        return {
          "cid": _0x2bdd2e,
          "llsid": _0x4a809f
        };
      } else {
        {
          if (_0x228325.result === 1003) console.log("🚫 " + this.getAccountDisplayName() + " 账号被限制");else {
            if (_0x228325.result === 20107 || _0x228325.result === 20108) console.log("🚫 " + this.getAccountDisplayName() + " 任务已达上限");else {
              if (_0x228325.result === 415) {
                console.log("🚫 " + this.getAccountDisplayName() + " 签名验证失败");
              } else {
                if (!_0x228325) console.log("❌ " + this.getAccountDisplayName() + " 获取广告失败: 无返回结果");else {
                  if (_0x228325.result !== 1) {
                    {
                      console.log("❌ " + this.getAccountDisplayName() + " 获取广告失败: errorMsg=" + (_0x228325?.["error_msg"] || "unknown") + ", result=" + (_0x228325?.["result"] || "unknown"));
                      if (_0x228325.error_msg && _0x228325.error_msg.includes("INVALID_REQUEST")) return console.log("⚠️ " + this.getAccountDisplayName() + " 检测到INVALID_REQUEST错误，需要更新设备ID"), {
                        "needsNewDid": true
                      };
                    }
                  }
                }
              }
            }
          }
        }
      }
      return null;
    } catch (_0x30aa36) {
      return null;
    }
  }
  async ["generateSignature"](_0x3328f4, _0x1f88e0, _0x58ce5f, _0x2f3c30) {
    try {
      {
        const _0x351a6a = JSON.stringify({
            "businessId": _0x2f3c30.businessId,
            "endTime": this.endTime,
            "extParams": "",
            "mediaScene": "video",
            "neoInfos": [{
              "creativeId": _0x3328f4,
              "extInfo": "",
              "llsid": _0x1f88e0,
              "requestSceneType": _0x2f3c30.requestSceneType,
              "taskType": _0x2f3c30.taskType,
              "watchExpId": "",
              "watchStage": 0
            }],
            "pageId": _0x2f3c30.pageId || 11101,
            "posId": _0x2f3c30.posId,
            "reportType": 0,
            "sessionId": "",
            "startTime": this.startTime,
            "subPageId": _0x2f3c30.subPageId
          }),
          _0x3b19a1 = "bizStr=" + encodeURIComponent(_0x351a6a) + "&cs=false&client_key=2ac2a76d&kuaishou.api_st=" + this.kuaishouApiSt,
          _0x2c4fe4 = this.queryParams + "&" + _0x3b19a1,
          _0x4c0fa9 = await this.requestSignService({
            "urlpath": this.taskReportPath,
            "reqdata": _0x2c4fe4,
            "api_client_salt": this.salt
          }, this.getAccountDisplayName() + " 生成报告签名");
        if (!_0x4c0fa9) return null;
        return {
          "sig": _0x4c0fa9.sig,
          "sig3": _0x4c0fa9.__NS_sig3,
          "sigtoken": _0x4c0fa9.__NStokensig,
          "xfalcon": _0x4c0fa9.__NS_xfalcon || "",
          "post": _0x3b19a1
        };
      }
    } catch (_0x42185d) {
      return null;
    }
  }
  async ["submitReport"](_0x405c93, _0x7fef92, _0x4edebc, _0x20f19e, _0x11ea10, _0x241696, _0x1e1c4a) {
    try {
      const _0x357a92 = "https://api.e.kuaishou.com" + this.taskReportPath + "?" + (this.queryParams + "&sig=" + _0x405c93 + "&__NS_sig3=" + _0x7fef92 + "&__NS_xfalcon=" + (_0x20f19e || "") + "&__NStokensig=" + _0x4edebc),
        {
          response: _0x56b4b1,
          body: _0x3c4b47
        } = await _0x5dcc75({
          "method": "POST",
          "url": _0x357a92,
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "Host": "api.e.kuaishou.com",
            "User-Agent": "kwai-android aegon/3.56.0"
          },
          "body": _0x11ea10,
          "timeout": 12000
        }, this.proxyUrl, "账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 提交任务");
      if (!_0x3c4b47) {
        return {
          "success": false,
          "reward": 0,
          "shouldRetry": false
        };
      }
      if (_0x3c4b47.result === 1) {
        {
          const _0x20c5e5 = _0x3c4b47.data?.["neoAmount"] || 0;
          if (_0x20c5e5 <= this.lowRewardThreshold) {
            {
              this.lowRewardStreak++;
              if (_0x33149e) {
                const _0xa7276f = _0x504645();
                this.did = _0xa7276f;
                this.queryParams = "mod=Xiaomi(MI 11)&appver=" + this.appver + "&egid=" + this.egid + "&did=" + _0xa7276f;
                console.log("🔄 " + this.getAccountDisplayName() + " 低奖励触发，已更新设备ID: " + _0xa7276f);
              } else console.log("🔄 " + this.getAccountDisplayName() + " 低奖励触发，但当前已关闭自动更换did");
              console.log("⚠️ " + this.getAccountDisplayName() + " 金币奖励(" + _0x20c5e5 + ")低于或等于阈值(" + this.lowRewardThreshold + ")，等待30秒后重试，当前连续低奖励次数：(" + this.lowRewardStreak + ")/" + this.lowRewardLimit);
              await new Promise(_0x15e001 => setTimeout(_0x15e001, 30000));
              if (this.lowRewardStreak >= this.lowRewardLimit) {
                console.log("🏁 " + this.getAccountDisplayName() + " 连续" + this.lowRewardLimit + "次奖励≤" + this.lowRewardThreshold + "，停止全部任务");
                this.stopAllTasks = true;
                return {
                  "success": false,
                  "reward": 0,
                  "shouldRetry": false
                };
              }
              return {
                "success": true,
                "reward": _0x20c5e5,
                "shouldRetry": false
              };
            }
          } else {
            this.lowRewardStreak > 0 && (console.log("✅ " + this.getAccountDisplayName() + " 奖励(" + _0x20c5e5 + ")恢复正常，重置低奖励计数"), this.lowRewardStreak = 0);
            return {
              "success": true,
              "reward": _0x20c5e5,
              "shouldRetry": false
            };
          }
        }
      }
      if ([20107, 20108, 1003, 415].includes(_0x3c4b47.result)) return console.log("⚠️ " + this.getAccountDisplayName() + " " + _0x1e1c4a.name + " 已达上限"), this.taskLimitReached[_0x241696] = true, {
        "success": false,
        "reward": 0
      };
      return {
        "success": false,
        "reward": 0
      };
    } catch (_0x2e65ac) {
      return {
        "success": false,
        "reward": 0
      };
    }
  }
  async ["getSign"](_0x32b9a7) {
    const _0x2b1e77 = await this.checkUdBindStatusForAccount();
    if (!_0x2b1e77.valid) return console.log("❌ " + this.getAccountDisplayName() + " " + _0x2b1e77.message), this.stopAllTasks = true, _0x2b1e77.message.includes("不在云端绑定列表中") && process.exit(1), null;
    const _0x2d6c3a = 3;
    for (let _0xb2b59 = 1; _0xb2b59 <= _0x2d6c3a; _0xb2b59++) {
      try {
        {
          const _0x4fd90a = await _0x3663c1();
          if (_0x4fd90a.error || !_0x4fd90a.signUrl) {
            {
              if (_0xb2b59 >= _0x2d6c3a) return console.log("❌ " + this.getAccountDisplayName() + " 获取签名服务地址失败: " + (_0x4fd90a.error || "地址为空")), null;
              continue;
            }
          }
          const _0x414ca4 = _0x11e841,
            _0x409a15 = _0x3ec26a(),
            _0x3b59cd = JSON.stringify({
              "key": _0x436786,
              "type": "encsign",
              "data": _0x32b9a7,
              "ud": this.userId || "",
              "script_version": _0x1857b4,
              "device_id": _0x409a15
            }),
            {
              response: _0x221d6c,
              body: _0x4c914d
            } = await _0x5dcc75({
              "method": "POST",
              "url": _0x414ca4,
              "body": _0x3b59cd,
              "headers": {
                "Content-Type": "application/json",
                "X-Auth-Key": _0x436786
              },
              "timeout": 30000
            }, this.proxyUrl, this.getAccountDisplayName() + " encsign签名");
          if (!_0x221d6c) {
            if (_0xb2b59 < _0x2d6c3a) continue;else return null;
          }
          if (!_0x4c914d) {
            {
              if (_0xb2b59 < _0x2d6c3a) {
                console.log("⚠️ " + this.getAccountDisplayName() + " encsign签名：响应数据为空，立即重新请求（尝试 " + _0xb2b59 + "/" + _0x2d6c3a + "）");
                continue;
              } else return console.log("❌ " + this.getAccountDisplayName() + " encsign签名：响应数据为空"), null;
            }
          }
          let _0x4e5d6f = _0x4c914d;
          if (typeof _0x4c914d === "string") try {
            _0x4e5d6f = JSON.parse(_0x4c914d);
          } catch (_0x5aafda) {
            try {
              {
                const _0x30b7b4 = /^[A-Za-z0-9+\/]+=*$/,
                  _0x5cc193 = _0x4c914d.trim();
                if (_0x30b7b4.test(_0x5cc193) && _0x5cc193.length > 20) {
                  const _0x497d20 = Buffer.from(_0x5cc193, "base64").toString("utf8");
                  _0x4e5d6f = JSON.parse(_0x497d20);
                } else throw _0x5aafda;
              }
            } catch (_0x328f41) {
              if (_0xb2b59 < _0x2d6c3a) {
                console.log("⚠️ " + this.getAccountDisplayName() + " encsign签名：响应格式错误（无法解析JSON），立即重新请求（尝试 " + _0xb2b59 + "/" + _0x2d6c3a + "）");
                continue;
              } else {
                console.log("❌ " + this.getAccountDisplayName() + " encsign签名：响应格式错误（无法解析JSON）");
                return null;
              }
            }
          }
          if (typeof _0x4e5d6f !== "object" || _0x4e5d6f === null) {
            if (_0xb2b59 < _0x2d6c3a) {
              console.log("⚠️ " + this.getAccountDisplayName() + " encsign签名：响应格式错误（非对象），立即重新请求（尝试 " + _0xb2b59 + "/" + _0x2d6c3a + "）");
              continue;
            } else return console.log("❌ " + this.getAccountDisplayName() + " encsign签名：响应格式错误（非对象）"), null;
          }
          if (_0x4e5d6f && _0x4e5d6f.status) {
            {
              let _0x270d1a = _0x4e5d6f.data;
              if (typeof _0x270d1a === "string") {
                try {
                  _0x270d1a = JSON.parse(_0x270d1a);
                } catch (_0x22976e) {
                  if (_0xb2b59 < _0x2d6c3a) continue;else {
                    return null;
                  }
                }
              }
              if (_0x270d1a.status === false) {
                const _0x155858 = _0x270d1a.error || _0x270d1a.message || "签名服务返回错误";
                if (_0xb2b59 < _0x2d6c3a) continue;else return console.log("❌ " + this.getAccountDisplayName() + " encsign签名失败：" + _0x155858), null;
              }
              let _0x595e6e = _0x270d1a;
              if (_0x270d1a.data && typeof _0x270d1a.data === "object") {
                _0x595e6e = _0x270d1a.data;
              }
              return _0x595e6e;
            }
          }
          const _0x97ec41 = _0x4e5d6f?.["message"] || _0x4e5d6f?.["error"] || "签名服务失败";
          if (_0xb2b59 >= _0x2d6c3a) return console.log("❌ " + this.getAccountDisplayName() + " encsign签名失败：" + _0x97ec41), null;else {
            continue;
          }
        }
      } catch (_0x4cb40c) {
        let _0x4fd01d = _0x4cb40c.message || "请求异常";
        if (_0x4cb40c.response && _0x4cb40c.response.data) try {
          {
            const _0xc5bd57 = typeof _0x4cb40c.response.data === "string" ? JSON.parse(_0x4cb40c.response.data) : _0x4cb40c.response.data;
            _0xc5bd57 && _0xc5bd57.message && (_0x4fd01d = _0xc5bd57.message);
          }
        } catch (_0x1b5b1b) {}
        if (_0xb2b59 < _0x2d6c3a) {
          console.log("⚠️ " + this.getAccountDisplayName() + " encsign请求异常，立即重新请求（尝试 " + _0xb2b59 + "/" + _0x2d6c3a + "）: " + _0x4fd01d);
          continue;
        } else return console.log("❌ " + this.getAccountDisplayName() + " encsign请求异常: " + _0x4fd01d), null;
      }
    }
    return null;
  }
  async ["requestSignService"](_0x366842, _0x33b6f8) {
    const _0x4ce989 = await this.checkDeviceIdBindStatus();
    if (!_0x4ce989.valid) return console.log("❌ " + this.getAccountDisplayName() + " " + _0x4ce989.message), this.stopAllTasks = true, _0x4ce989.message.includes("不一致") && (console.log("\n⚠️  设备ID本地与云端绑定不一致，脚本已停止运行！"), console.log("   请检查设备ID绑定状态或联系管理员。\n"), process.exit(1)), null;
    const _0x4bda64 = await this.checkUdBindStatusForAccount();
    if (!_0x4bda64.valid) {
      console.log("❌ " + this.getAccountDisplayName() + " " + _0x4bda64.message);
      this.stopAllTasks = true;
      if (_0x4bda64.message.includes("不在云端绑定列表中")) {
        process.exit(1);
      }
      return null;
    }
    const _0x5484b5 = 3;
    for (let _0x3e6c5f = 1; _0x3e6c5f <= _0x5484b5; _0x3e6c5f++) {
      try {
        const _0x155ba1 = await _0x3663c1();
        if (_0x155ba1.error || !_0x155ba1.signUrl) {
          {
            if (_0x3e6c5f >= _0x5484b5) return console.log("❌ " + this.getAccountDisplayName() + " 获取签名服务地址失败: " + (_0x155ba1.error || "地址为空")), null;
            continue;
          }
        }
        const _0x285946 = _0x11e841,
          _0x5d8a9a = _0x3ec26a(),
          _0x3383e7 = JSON.stringify({
            "key": _0x436786,
            "type": "nssig",
            "path": _0x366842.urlpath,
            "data": _0x366842.reqdata,
            "salt": _0x366842.api_client_salt,
            "ud": this.userId || "",
            "script_version": _0x1857b4,
            "device_id": _0x5d8a9a
          }),
          {
            response: _0x226499,
            body: _0x4cfafc
          } = await _0x5dcc75({
            "method": "POST",
            "url": _0x285946,
            "headers": {
              "Content-Type": "application/json",
              "X-Auth-Key": _0x436786,
              "User-Agent": "Mozilla/5.0"
            },
            "body": _0x3383e7,
            "timeout": 15000
          }, this.proxyUrl, _0x33b6f8 + "（签名服务）");
        if (!_0x4cfafc) {
          {
            if (_0x3e6c5f < _0x5484b5) {
              continue;
            } else return null;
          }
        }
        if (!_0x4cfafc.data) {
          if (_0x3e6c5f < _0x5484b5) {
            continue;
          } else {
            return null;
          }
        }
        if (_0x4cfafc && _0x4cfafc.status) {
          {
            let _0x235a1b = _0x4cfafc.data;
            if (typeof _0x235a1b === "string") {
              try {
                _0x235a1b = JSON.parse(_0x235a1b);
              } catch (_0x1b53c9) {
                if (_0x3e6c5f < _0x5484b5) continue;else return null;
              }
            }
            let _0x4f9ca9 = _0x235a1b;
            _0x235a1b.data && typeof _0x235a1b.data === "object" && (_0x4f9ca9 = _0x235a1b.data);
            let _0x3c9817 = _0x4f9ca9.nssig3 || _0x4f9ca9.__NS_sig3,
              _0x4a3092 = _0x4f9ca9.nstokensig || _0x4f9ca9.__NStokensig,
              _0x3c7d81 = _0x4f9ca9.xfalcon || _0x4f9ca9.nssig4 || _0x4f9ca9.__NS_xfalcon || "",
              _0x5c93f2 = _0x4f9ca9.sig,
              _0x3f7712 = {
                "__NS_sig3": _0x3c9817,
                "__NStokensig": _0x4a3092,
                "sig": _0x5c93f2,
                "__NS_xfalcon": _0x3c7d81
              };
            return _0x3f7712;
          }
        }
        const _0x1a17f8 = _0x4cfafc?.["message"] || _0x4cfafc?.["error"] || "签名服务失败";
        if (_0x3e6c5f >= _0x5484b5) {
          console.log("❌ " + this.getAccountDisplayName() + " nssig签名失败：" + _0x1a17f8);
          return null;
        } else continue;
      } catch (_0x3b3673) {
        if (_0x3e6c5f < _0x5484b5) {
          continue;
        } else return null;
      }
    }
    return null;
  }
  async ["executeTask"](_0x32a690) {
    if (_0x5a6815 && !_0x2be6de.isValid) {
      console.log("❌ " + this.getAccountDisplayName() + " 卡密验证失败，停止执行任务");
      this.stopAllTasks = true;
      return false;
    }
    if (!this.tasksToExecute.includes(_0x32a690)) return false;
    const _0xc38237 = this.taskConfigs[_0x32a690];
    if (!_0xc38237) return console.log("❌ " + this.getAccountDisplayName() + " 未知任务: " + _0x32a690), false;
    if (this.taskLimitReached[_0x32a690]) return false;
    try {
      const _0x578f48 = await _0x13340d(this.getCookieWithCurrentDid(), this.proxyUrl, this.index),
        _0x4875db = _0x578f48?.["totalCoin"] || 0;
      let _0xb8d067,
        _0x1662c0 = 0;
      const _0x4b6ab6 = 3;
      while (_0x1662c0 < _0x4b6ab6) {
        {
          const _0x30f946 = await this.getAdInfo(_0xc38237);
          if (_0x30f946 && _0x30f946.needsNewDid) {
            {
              this.needsNewDid = true;
              _0x1662c0++;
              console.log("🔄 " + this.getAccountDisplayName() + " 正在更新设备ID并重试获取广告 (" + _0x1662c0 + "/" + _0x4b6ab6 + ")");
              continue;
            }
          } else {
            if (_0x30f946) {
              _0xb8d067 = _0x30f946;
              break;
            } else {
              {
                _0x1662c0++;
                if (_0x1662c0 >= _0x4b6ab6) return console.log("❌ " + this.getAccountDisplayName() + " 获取" + _0xc38237.name + "信息失败"), this.taskStats[_0x32a690].failed++, false;
                await new Promise(_0x1fe8e7 => setTimeout(_0x1fe8e7, 2000));
              }
            }
          }
        }
      }
      if (!_0xb8d067) return this.taskStats[_0x32a690].failed++, false;
      const _0x45d261 = Math.floor(Math.random() * (_0x42037c - _0x906725 + 1)) + _0x906725;
      console.log("⏱️ " + this.getAccountDisplayName() + " " + _0xc38237.name + " 等待 " + _0x45d261 + " 秒后继续");
      const _0x1565d4 = _0x45d261 * 1000;
      await new Promise(_0x1cf633 => setTimeout(_0x1cf633, _0x1565d4));
      const _0x5111dd = await this.generateSignature(_0xb8d067.cid, _0xb8d067.llsid, _0x32a690, _0xc38237);
      if (!_0x5111dd) return this.taskStats[_0x32a690].failed++, console.log("❌ " + this.getAccountDisplayName() + " 生成签名失败，本次" + _0xc38237.name + "未获得奖励"), false;
      let _0x1bbbd0 = 0,
        _0x4ce612;
      while (_0x1bbbd0 < 3) {
        {
          _0x4ce612 = await this.submitReport(_0x5111dd.sig, _0x5111dd.sig3, _0x5111dd.sigtoken, _0x5111dd.xfalcon || "", _0x5111dd.post, _0x32a690, _0xc38237);
          if (_0x4ce612?.["success"] || !_0x4ce612?.["shouldRetry"]) {
            break;
          }
          _0x1bbbd0++;
          _0x4ce612.shouldRetry && (await new Promise(_0x438a5a => setTimeout(_0x438a5a, 30000)), console.log("🔄 " + this.getAccountDisplayName() + " 准备重试 (" + _0x1bbbd0 + "/3)"));
        }
      }
      if (_0x4ce612?.["success"]) {
        this.taskStats[_0x32a690].success++;
        this.taskStats[_0x32a690].totalReward += _0x4ce612.reward || 0;
        const _0x296511 = await _0x13340d(this.getCookieWithCurrentDid(), this.proxyUrl, this.index),
          _0x11658f = _0x296511?.["totalCoin"] || _0x4875db,
          _0x2d88df = _0x4ce612.reward || 0,
          _0xf95bf1 = this.remark || this.nickname || "备注";
        let _0x19bf13 = "获取到广告",
          _0x4ade43 = _0x34112d.bright + _0x34112d.cyan;
        if (_0x32a690 === "kbox") {
          _0x19bf13 = "获取到宝箱";
          _0x4ade43 = _0x34112d.bright + _0x34112d.magenta;
        } else {
          if (_0x32a690 === "box") _0x19bf13 = "获取到宝箱广告", _0x4ade43 = _0x34112d.bright + _0x34112d.blue;else {
            if (_0x32a690 === "food") _0x19bf13 = "获取到饭补广告", _0x4ade43 = _0x34112d.bright + _0x34112d.green;else {
              if (_0x32a690 === "look_follow") {
                _0x19bf13 = "获取追加广告";
                _0x4ade43 = _0x34112d.bright + _0x34112d.yellow;
              } else {
                if (_0x32a690 === "search_follow") _0x19bf13 = "获取到搜索追加广告", _0x4ade43 = _0x34112d.bright + _0x34112d.yellow;else {
                  if (_0x32a690 === "look") _0x19bf13 = "获取到广告", _0x4ade43 = _0x34112d.bright + _0x34112d.cyan;else _0x32a690 === "search" && (_0x19bf13 = "获取到搜索广告", _0x4ade43 = _0x34112d.bright + _0x34112d.cyan);
                }
              }
            }
          }
        }
        const _0x35a8d1 = this.taskStats[_0x32a690].success,
          _0x511647 = this.getTaskTotalCount(_0x32a690),
          _0x3dfe12 = _0x2d88df >= 100 ? "" + _0x34112d.bright + _0x34112d.red + "💰[高额奖励]" + _0x34112d.reset : "" + _0x34112d.bright + _0x34112d.green + "💰[奖励]" + _0x34112d.reset,
          _0x49ef1f = _0x4ea144(_0xf95bf1),
          _0x7dc202 = _0x433ffd(_0x19bf13, _0x4ade43);
        console.log(_0x3dfe12 + " " + _0x49ef1f + " " + _0x7dc202 + "（第" + _0x35a8d1 + "/" + _0x511647 + "次）==>" + _0x55ce65(_0x2d88df) + "金币 —— 当前金币 " + _0x34ad67(_0x11658f));
        return true;
      }
      this.taskStats[_0x32a690].failed++;
      if (this.taskLimitReached[_0x32a690]) console.log("⚠️ " + this.getAccountDisplayName() + " " + _0xc38237.name + " 已达上限，本次未获得奖励");else _0x4ce612 ? console.log("❌ " + this.getAccountDisplayName() + " 提交" + _0xc38237.name + "失败，本次未获得奖励") : console.log("❌ " + this.getAccountDisplayName() + " 提交" + _0xc38237.name + "失败（网络或服务器异常），本次未获得奖励");
      return false;
    } catch (_0x19a51e) {
      this.taskStats[_0x32a690].failed++;
      return false;
    }
  }
  async ["executeAllTasksByPriority"]() {
    if (_0x5a6815 && !_0x2be6de.isValid) {
      console.log("❌ " + this.getAccountDisplayName() + " 卡密验证失败，停止执行任务");
      this.stopAllTasks = true;
      return {};
    }
    const _0x2d3a4b = _0x203787 => this.tasksToExecute.includes(_0x203787);
    if (_0x2d3a4b("look") && !this.taskLimitReached.look) {
      for (let _0x517914 = 0; _0x517914 < _0x40b476; _0x517914++) {
        {
          if (this.stopAllTasks || this.taskLimitReached.look || _0x5a6815 && !_0x2be6de.isValid) {
            {
              _0x5a6815 && !_0x2be6de.isValid && (console.log("❌ " + this.getAccountDisplayName() + " 卡密验证失败，停止执行任务"), this.stopAllTasks = true);
              break;
            }
          }
          const _0x132076 = await this.executeTask("look");
          if (_0x132076 && _0x2d3a4b("look_follow") && !this.stopAllTasks && !this.taskLimitReached.look_follow && _0x10ab29 > 0) {
            {
              const _0x25d4ec = (Math.floor(Math.random() * (_0x20782f - _0xbdecba + 1)) + _0xbdecba) * 1000;
              console.log("⏱ " + this.getAccountDisplayName() + " look→look_follow 等待 " + Math.round(_0x25d4ec / 1000) + " 秒");
              await new Promise(_0xa69d29 => setTimeout(_0xa69d29, _0x25d4ec));
              for (let _0x54f044 = 0; _0x54f044 < _0x10ab29; _0x54f044++) {
                {
                  if (this.stopAllTasks || this.taskLimitReached.look_follow) break;
                  await this.executeTask("look_follow");
                  if (_0x54f044 < _0x10ab29 - 1 && !this.stopAllTasks && !this.taskLimitReached.look_follow) {
                    const _0x25bc09 = (Math.floor(Math.random() * (_0x105464 - _0x28293e + 1)) + _0x28293e) * 1000;
                    console.log("⏱ " + this.getAccountDisplayName() + " look_follow 间隔 等待 " + Math.round(_0x25bc09 / 1000) + " 秒");
                    await new Promise(_0x41d0bd => setTimeout(_0x41d0bd, _0x25bc09));
                  }
                }
              }
            }
          }
          if (_0x517914 < _0x40b476 - 1 && !this.stopAllTasks && !this.taskLimitReached.look) {
            const _0x40d79f = (Math.floor(Math.random() * (_0x3cc988 - _0x3e52d2 + 1)) + _0x3e52d2) * 1000;
            console.log("⏱ " + this.getAccountDisplayName() + " look 间隔 等待 " + Math.round(_0x40d79f / 1000) + " 秒");
            await new Promise(_0x5a4482 => setTimeout(_0x5a4482, _0x40d79f));
          }
        }
      }
      if (!this.stopAllTasks) {
        {
          const _0x4aca07 = (Math.floor(Math.random() * (_0x198a2e - _0x3e27a1 + 1)) + _0x3e27a1) * 1000;
          console.log("⏱ " + this.getAccountDisplayName() + " 任务切换 等待 " + Math.round(_0x4aca07 / 1000) + " 秒");
          await new Promise(_0x576bb2 => setTimeout(_0x576bb2, _0x4aca07));
        }
      }
    }
    if (_0x2d3a4b("search") && !this.taskLimitReached.search) {
      for (let _0x53acaf = 0; _0x53acaf < _0x2de5ce; _0x53acaf++) {
        if (this.stopAllTasks || this.taskLimitReached.search || _0x5a6815 && !_0x2be6de.isValid) {
          if (_0x5a6815 && !_0x2be6de.isValid) {
            console.log("❌ " + this.getAccountDisplayName() + " 卡密验证失败，停止执行任务");
            this.stopAllTasks = true;
          }
          break;
        }
        const _0x2b5ae0 = await this.executeTask("search");
        if (_0x2b5ae0 && _0x2d3a4b("search_follow") && !this.stopAllTasks && !this.taskLimitReached.search_follow && _0x1506d1 > 0) {
          {
            const _0x55b413 = (Math.floor(Math.random() * (_0xb05334 - _0x20609f + 1)) + _0x20609f) * 1000;
            console.log("⏱ " + this.getAccountDisplayName() + " search→search_follow 等待 " + Math.round(_0x55b413 / 1000) + " 秒");
            await new Promise(_0x1ec08d => setTimeout(_0x1ec08d, _0x55b413));
            for (let _0x45de61 = 0; _0x45de61 < _0x1506d1; _0x45de61++) {
              {
                if (this.stopAllTasks || this.taskLimitReached.search_follow) break;
                this.adaddnum++;
                await this.executeTask("search_follow");
                this.adaddnum = 0;
                if (_0x45de61 < _0x1506d1 - 1 && !this.stopAllTasks && !this.taskLimitReached.search_follow) {
                  const _0x152789 = (Math.floor(Math.random() * (_0x2a68cc - _0x22f88f + 1)) + _0x22f88f) * 1000;
                  console.log("⏱ " + this.getAccountDisplayName() + " search_follow 间隔 等待 " + Math.round(_0x152789 / 1000) + " 秒");
                  await new Promise(_0xe716ec => setTimeout(_0xe716ec, _0x152789));
                }
              }
            }
          }
        }
        if (_0x53acaf < _0x2de5ce - 1 && !this.stopAllTasks && !this.taskLimitReached.search) {
          {
            const _0x464c3f = (Math.floor(Math.random() * (_0x3cc988 - _0x3e52d2 + 1)) + _0x3e52d2) * 1000;
            console.log("⏱ " + this.getAccountDisplayName() + " search 间隔 等待 " + Math.round(_0x464c3f / 1000) + " 秒");
            await new Promise(_0x556615 => setTimeout(_0x556615, _0x464c3f));
          }
        }
      }
      if (!this.stopAllTasks) {
        const _0x28d880 = (Math.floor(Math.random() * (_0x198a2e - _0x3e27a1 + 1)) + _0x3e27a1) * 1000;
        console.log("⏱ " + this.getAccountDisplayName() + " 任务切换 等待 " + Math.round(_0x28d880 / 1000) + " 秒");
        await new Promise(_0x294ac0 => setTimeout(_0x294ac0, _0x28d880));
      }
    }
    if (_0x2d3a4b("box") && !this.taskLimitReached.box) {
      for (let _0x27f7e8 = 0; _0x27f7e8 < _0x455628; _0x27f7e8++) {
        if (this.stopAllTasks || this.taskLimitReached.box || _0x5a6815 && !_0x2be6de.isValid) {
          _0x5a6815 && !_0x2be6de.isValid && (console.log("❌ " + this.getAccountDisplayName() + " 卡密验证失败，停止执行任务"), this.stopAllTasks = true);
          break;
        }
        await this.executeTask("box");
        if (_0x27f7e8 < _0x455628 - 1 && !this.stopAllTasks && !this.taskLimitReached.box) {
          const _0x5eac43 = (Math.floor(Math.random() * (_0x198a2e - _0x3e27a1 + 1)) + _0x3e27a1) * 1000;
          console.log("⏱ " + this.getAccountDisplayName() + " box 间隔 等待 " + Math.round(_0x5eac43 / 1000) + " 秒");
          await new Promise(_0x19ddc2 => setTimeout(_0x19ddc2, _0x5eac43));
        }
      }
      if (!this.stopAllTasks) {
        {
          const _0x1942c0 = (Math.floor(Math.random() * (_0x198a2e - _0x3e27a1 + 1)) + _0x3e27a1) * 1000;
          console.log("⏱ " + this.getAccountDisplayName() + " 任务切换 等待 " + Math.round(_0x1942c0 / 1000) + " 秒");
          await new Promise(_0x1a485b => setTimeout(_0x1a485b, _0x1942c0));
        }
      }
    }
    if (_0x2d3a4b("food") && !this.taskLimitReached.food) {
      for (let _0x40ae6e = 0; _0x40ae6e < _0x470c6e; _0x40ae6e++) {
        if (this.stopAllTasks || this.taskLimitReached.food || _0x5a6815 && !_0x2be6de.isValid) {
          _0x5a6815 && !_0x2be6de.isValid && (console.log("❌ " + this.getAccountDisplayName() + " 卡密验证失败，停止执行任务"), this.stopAllTasks = true);
          break;
        }
        await this.executeTask("food");
        if (_0x40ae6e < _0x470c6e - 1 && !this.stopAllTasks && !this.taskLimitReached.food) {
          const _0x327a1a = (Math.floor(Math.random() * (_0x198a2e - _0x3e27a1 + 1)) + _0x3e27a1) * 1000;
          console.log("⏱ " + this.getAccountDisplayName() + " food 间隔 等待 " + Math.round(_0x327a1a / 1000) + " 秒");
          await new Promise(_0x121344 => setTimeout(_0x121344, _0x327a1a));
        }
      }
      if (!this.stopAllTasks) {
        const _0x575d6e = (Math.floor(Math.random() * (_0x198a2e - _0x3e27a1 + 1)) + _0x3e27a1) * 1000;
        console.log("⏱ " + this.getAccountDisplayName() + " 任务切换 等待 " + Math.round(_0x575d6e / 1000) + " 秒");
        await new Promise(_0x30d345 => setTimeout(_0x30d345, _0x575d6e));
      }
    }
    if (_0x2d3a4b("kbox") && !this.taskLimitReached.kbox) {
      for (let _0x45438f = 0; _0x45438f < _0x25a0a8; _0x45438f++) {
        if (this.stopAllTasks || this.taskLimitReached.kbox || _0x5a6815 && !_0x2be6de.isValid) {
          _0x5a6815 && !_0x2be6de.isValid && (console.log("❌ " + this.getAccountDisplayName() + " 卡密验证失败，停止执行任务"), this.stopAllTasks = true);
          break;
        }
        await this.executeTask("kbox");
        if (_0x45438f < _0x25a0a8 - 1 && !this.stopAllTasks && !this.taskLimitReached.kbox) {
          {
            const _0x482def = (Math.floor(Math.random() * (_0x198a2e - _0x3e27a1 + 1)) + _0x3e27a1) * 1000;
            console.log("⏱ " + this.getAccountDisplayName() + " kbox 间隔 等待 " + Math.round(_0x482def / 1000) + " 秒");
            await new Promise(_0x5d4f8c => setTimeout(_0x5d4f8c, _0x482def));
          }
        }
      }
    }
    return {};
  }
}
function _0x1e9646(_0x38eb00) {
  const _0x11cc21 = String(_0x38eb00 || "").trim();
  if (!_0x11cc21) {
    return null;
  }
  let _0x511879 = "",
    _0xab7f83 = "",
    _0x4d8982 = "",
    _0x579825 = null;
  const _0x458eb5 = _0x11cc21.includes("#") ? "#" : _0x11cc21.includes("@") ? "@" : null;
  let _0x4edaa9 = _0x458eb5 ? _0x11cc21.split(_0x458eb5) : [_0x11cc21];
  if (_0x4edaa9.length < 2) return {
    "remark": "",
    "salt": "",
    "cookie": _0x11cc21,
    "proxyUrl": null
  };
  if (_0x4edaa9.length === 2) {
    _0xab7f83 = _0x4edaa9[0];
    _0x4d8982 = _0x4edaa9[1];
  } else {
    if (_0x4edaa9.length === 3) /^socks5:\/\//i.test(_0x4edaa9[2]) || _0x4edaa9[2].includes("|") ? (_0xab7f83 = _0x4edaa9[0], _0x4d8982 = _0x4edaa9[1], _0x579825 = _0x4edaa9[2]) : (_0x511879 = _0x4edaa9[0], _0xab7f83 = _0x4edaa9[1], _0x4d8982 = _0x4edaa9[2]);else {
      if (_0x4edaa9.length >= 4) {
        _0x511879 = _0x4edaa9[0];
        _0xab7f83 = _0x4edaa9[1];
        _0x4d8982 = _0x4edaa9.slice(2, _0x4edaa9.length - 1).join(_0x458eb5 || "#");
        _0x579825 = _0x4edaa9[_0x4edaa9.length - 1];
      }
    }
  }
  if (_0x579825) {
    if (_0x579825 === "0" || _0x579825.toLowerCase() === "none") _0x579825 = null;else {
      if (_0x579825.includes("|")) {
        {
          const _0x58e277 = _0x579825.split("|");
          if (_0x58e277.length >= 2) {
            {
              const [_0x582ab3, _0x2f95dc, _0x2720e2 = "", _0x2edcc0 = ""] = _0x58e277.map(_0x2114be => String(_0x2114be || "").trim());
              if (_0x582ab3 && _0x2f95dc) {
                const _0x24a284 = _0x2720e2 || _0x2edcc0 ? encodeURIComponent(_0x2720e2) + ":" + encodeURIComponent(_0x2edcc0) + "@" : "";
                _0x579825 = "socks5://" + _0x24a284 + _0x582ab3 + ":" + _0x2f95dc;
              } else console.log("⚠️ 代理格式缺少IP或端口，忽略：" + _0x579825), _0x579825 = null;
            }
          } else console.log("⚠️ 代理格式错误，忽略：" + _0x579825), _0x579825 = null;
        }
      }
    }
    if (_0x579825 && /^socks5:\/\//i.test(_0x579825)) try {
      new URL(_0x579825);
    } catch (_0x3e5ce7) {
      console.log("❌ 代理URL格式错误: " + _0x579825);
      _0x579825 = null;
    } else _0x579825 && (console.log("⚠️ 代理字段不是 socks5:// URL，忽略：" + _0x579825), _0x579825 = null);
  }
  return {
    "remark": _0x511879 || "",
    "salt": _0x4d8982,
    "cookie": _0xab7f83,
    "proxyUrl": _0x579825
  };
}
function _0x50b58a() {
  const _0x28b88d = _0x4c1a1e(),
    _0x5b5581 = [];
  for (const _0x3fded3 of _0x28b88d) {
    {
      const _0x526bd9 = _0x1e9646(_0x3fded3);
      _0x526bd9 ? _0x5b5581.push(_0x526bd9) : console.log("账号格式错误：" + _0x3fded3);
    }
  }
  _0x5b5581.forEach((_0x2d34ab, _0x106d05) => {
    _0x2d34ab.index = _0x106d05 + 1;
  });
  return _0x5b5581;
}
async function _0x306067(_0x195059, _0x568f4b, _0x4377d5) {
  const _0x2d534c = new Array(_0x195059.length);
  let _0x46455f = 0;
  async function _0x496613() {
    while (true) {
      {
        const _0x4587bf = _0x46455f++;
        if (_0x4587bf >= _0x195059.length) {
          return;
        }
        const _0x49fc29 = _0x195059[_0x4587bf];
        try {
          _0x2d534c[_0x4587bf] = await _0x4377d5(_0x49fc29, _0x4587bf);
        } catch (_0x372911) {
          console.log("并发执行异常（index=" + (_0x4587bf + 1) + "）：" + _0x372911.message);
          _0x2d534c[_0x4587bf] = null;
        }
      }
    }
  }
  const _0x5eaa26 = Array.from({
    "length": Math.min(_0x568f4b, _0x195059.length)
  }, _0x496613);
  await Promise.all(_0x5eaa26);
  return _0x2d534c;
}
function _0x258d70(_0x41259f, _0x2fb5e9, _0x3c2ffa) {
  const _0x574e22 = "账号[" + (_0x2fb5e9 || _0x41259f) + "]" + (_0x3c2ffa ? "（" + _0x3c2ffa + "）" : "");
  return "" + _0x34112d.bright + _0x34112d.cyan + _0x574e22 + _0x34112d.reset;
}
async function _0x1a237f(_0x5dea9f) {
  if (_0x5dea9f.proxyUrl) {
    {
      const _0x5a4c2c = _0x258d70(_0x5dea9f.index, null, _0x5dea9f.remark),
        _0x41a7c2 = await _0x37101b(_0x5dea9f.proxyUrl, _0x5a4c2c);
      console.log("  - " + (_0x41a7c2.ok ? "✅ 代理验证通过" : "❌ 代理验证失败") + ": " + _0x41a7c2.msg);
      if (_0x41a7c2.ok && _0x41a7c2.ip && _0x41a7c2.ip !== "localhost") {
        {
          if (_0x4c4c30.has(_0x41a7c2.ip)) console.log("⚠️ 存在相同代理IP（" + _0x41a7c2.ip + "），继续执行其余账号...");else {
            _0x4c4c30.add(_0x41a7c2.ip);
          }
          console.log("🌐 " + _0x5a4c2c + " 使用代理: " + _0x5dea9f.proxyUrl);
        }
      } else {
        if (!_0x41a7c2.ok) return console.log("❌ " + _0x5a4c2c + " 代理测试失败，跳过该账号"), {
          "index": _0x5dea9f.index,
          "remark": _0x5dea9f.remark || "无备注",
          "nickname": "账号" + _0x5dea9f.index,
          "initialCoin": 0,
          "finalCoin": 0,
          "coinChange": 0,
          "initialCash": 0,
          "finalCash": 0,
          "cashChange": 0,
          "error": "代理测试失败: " + _0x41a7c2.msg,
          "skipped": true
        };
      }
    }
  } else {
    const _0x270fd8 = _0x258d70(_0x5dea9f.index, null, _0x5dea9f.remark);
    console.log("🌐 " + _0x270fd8 + " 未配置代理，走直连");
  }
  const _0x30df72 = _0x258d70(_0x5dea9f.index, null, _0x5dea9f.remark);
  console.log("🔍 " + _0x30df72 + " 获取账号信息中...");
  let _0x370c3e = await _0x13340d(_0x5dea9f.cookie, _0x5dea9f.proxyUrl, _0x5dea9f.index),
    _0x571079 = _0x370c3e?.["nickname"] || "账号" + _0x5dea9f.index;
  if (_0x370c3e) {
    {
      const _0x41cc14 = _0x370c3e.totalCoin != null ? _0x370c3e.totalCoin : "未知",
        _0x33bf4f = _0x370c3e.allCash != null ? _0x370c3e.allCash : "未知",
        _0x277595 = _0x258d70(_0x5dea9f.index, _0x571079, _0x5dea9f.remark),
        _0xfbb369 = _0x370c3e.ud ? "，UD: " + _0x370c3e.ud : "";
      _0x44f4dc ? console.log("✅ " + _0x277595 + " 登录成功，💰 当前金币: " + _0x34ad67(_0x41cc14) + "，💸 当前余额: " + _0x433ffd(_0x33bf4f, _0x34112d.bright + _0x34112d.yellow) + _0xfbb369) : console.log("✅ " + _0x277595 + " 登录成功，💰 当前金币: " + _0x41cc14 + "，💸 当前余额: " + _0x33bf4f + _0xfbb369);
    }
  } else {
    const _0x55805b = _0x258d70(_0x5dea9f.index, _0x571079, _0x5dea9f.remark);
    console.log("❌ " + _0x55805b + " 基本信息获取失败，但仍继续执行任务");
  }
  const _0x587be1 = _0x370c3e?.["ud"] || null,
    _0x5f2a48 = new _0x406635({
      ..._0x5dea9f,
      "nickname": _0x571079,
      "tasksToExecute": _0x34033a,
      "udFromLogin": _0x587be1
    });
  if (_0x370c3e) {
    await _0x5f2a48.checkCoinLimit();
    if (_0x5f2a48.coinExceeded) {
      {
        console.log("⚠️ " + _0x5f2a48.getAccountDisplayName() + " 初始金币已超过阈值，不执行任务");
        const _0x55bf69 = await _0x13340d(_0x5f2a48.getCookieWithCurrentDid(), _0x5dea9f.proxyUrl, _0x5dea9f.index),
          _0x3138e9 = _0x370c3e?.["totalCoin"] || 0,
          _0x2a3780 = _0x55bf69?.["totalCoin"] || 0,
          _0x3423bf = _0x2a3780 - _0x3138e9,
          _0x31e09a = _0x370c3e?.["allCash"] || 0,
          _0x2e3180 = _0x55bf69?.["allCash"] || 0,
          _0x44b51a = _0x2e3180 - _0x31e09a;
        return {
          "index": _0x5dea9f.index,
          "remark": _0x5dea9f.remark || "无备注",
          "nickname": _0x571079,
          "initialCoin": _0x3138e9,
          "finalCoin": _0x2a3780,
          "coinChange": _0x3423bf,
          "initialCash": _0x31e09a,
          "finalCash": _0x2e3180,
          "cashChange": _0x44b51a,
          "stats": _0x5f2a48.getTaskStats(),
          "coinLimitExceeded": true
        };
      }
    }
  }
  await _0x5f2a48.executeAllTasksByPriority();
  const _0x50cce7 = await _0x13340d(_0x5f2a48.getCookieWithCurrentDid(), _0x5dea9f.proxyUrl, _0x5dea9f.index),
    _0x131c11 = _0x370c3e?.["totalCoin"] || 0,
    _0x56904f = _0x50cce7?.["totalCoin"] || 0,
    _0xcaa87c = _0x56904f - _0x131c11,
    _0xbcac23 = _0x370c3e?.["allCash"] || 0,
    _0x2bf918 = _0x50cce7?.["allCash"] || 0,
    _0x4c1424 = _0x2bf918 - _0xbcac23;
  _0x5f2a48.printTaskStats();
  return {
    "index": _0x5dea9f.index,
    "remark": _0x5dea9f.remark || "无备注",
    "nickname": _0x571079,
    "initialCoin": _0x131c11,
    "finalCoin": _0x56904f,
    "coinChange": _0xcaa87c,
    "initialCash": _0xbcac23,
    "finalCash": _0x2bf918,
    "cashChange": _0x4c1424,
    "stats": _0x5f2a48.getTaskStats(),
    "coinLimitExceeded": _0x5f2a48.coinExceeded,
    "infoFetchFailed": !_0x370c3e
  };
}
function _0x1af28b(_0xd5c4ed) {
  if (!_0xd5c4ed.length) {
    {
      console.log("\n没有可显示的账号信息。");
      return;
    }
  }
  const _0x30db6d = _0xd5c4ed.reduce((_0x4b51eb, _0x1f9df4) => {
      return _0x4b51eb + (parseInt(_0x1f9df4.initialCoin) || 0);
    }, 0),
    _0x5436f8 = _0xd5c4ed.reduce((_0x13293f, _0x4e9484) => {
      return _0x13293f + (parseInt(_0x4e9484.finalCoin) || 0);
    }, 0),
    _0x470059 = _0x5436f8 - _0x30db6d,
    _0x383bca = _0xd5c4ed.reduce((_0x6091f4, _0x5560ee) => {
      return _0x6091f4 + (parseFloat(_0x5560ee.initialCash) || 0);
    }, 0),
    _0x3ed2df = _0xd5c4ed.reduce((_0x3a1344, _0x45780b) => {
      return _0x3a1344 + (parseFloat(_0x45780b.finalCash) || 0);
    }, 0),
    _0x422a4a = _0x3ed2df - _0x383bca;
  let _0x13e92f = 0,
    _0x564012 = 0,
    _0x1fb0c8 = 0;
  _0xd5c4ed.forEach(_0x1c0c68 => {
    {
      if (_0x1c0c68.stats) {
        Object.values(_0x1c0c68.stats).forEach(_0x5dbaea => {
          _0x13e92f += _0x5dbaea.success + _0x5dbaea.failed;
          _0x564012 += _0x5dbaea.success;
          _0x1fb0c8 += _0x5dbaea.totalReward;
        });
      }
    }
  });
  const _0x82f790 = _0x13e92f > 0 ? (_0x564012 / _0x13e92f * 100).toFixed(1) : "0.0",
    _0x1e927c = _0xd5c4ed.filter(_0x17243a => _0x17243a.coinLimitExceeded).length,
    _0x1c41d3 = _0xd5c4ed.filter(_0x3778db => _0x3778db.skipped).length,
    _0x548b1d = _0xd5c4ed.filter(_0x3b985e => _0x3b985e.infoFetchFailed).length;
  console.log("\n\n" + "=".repeat(80));
  console.log("|" + _0x90859("      快手养号任务执行结果汇总表      ", 78) + "|");
  console.log("=".repeat(80));
  console.log("|" + ("总账号数: " + _0xd5c4ed.length).padEnd(22) + ("跳过账号: " + _0x1c41d3).padEnd(22) + ("总任务数: " + _0x13e92f).padEnd(22) + ("任务成功率: " + _0x82f790 + "%").padEnd(10) + "|");
  console.log("|" + ("总金币变化: " + _0x470059).padEnd(26) + ("总金币奖励: " + _0x1fb0c8).padEnd(26) + ("总余额变化: " + _0x422a4a.toFixed(2)).padEnd(24) + "|");
  console.log("-".repeat(80));
  const _0x39f1f2 = ["序号", "备注", "账号昵称", "初始金币", "最终金币", "金币变化", "初始余额", "最终余额", "余额变化", "状态"],
    _0x11c0b3 = [6, 16, 16, 12, 12, 12, 12, 12, 12, 10];
  let _0x4d4269 = "|";
  _0x39f1f2.forEach((_0x406035, _0x1bc31c) => {
    _0x4d4269 += _0x90859(_0x406035, _0x11c0b3[_0x1bc31c]) + "|";
  });
  console.log(_0x4d4269);
  let _0x18c51a = "|";
  _0x11c0b3.forEach(_0x475ab3 => {
    _0x18c51a += "-".repeat(_0x475ab3) + "|";
  });
  console.log(_0x18c51a);
  _0xd5c4ed.forEach(_0x51822a => {
    let _0x3d4925 = "|";
    _0x3d4925 += _0x90859(_0x51822a.index, _0x11c0b3[0]) + "|";
    _0x3d4925 += _0x90859(_0x51822a.remark, _0x11c0b3[1]) + "|";
    let _0x254ec6 = _0x51822a.nickname || "-";
    if (_0x51822a.skipped) _0x254ec6 += " ❌";else {
      if (_0x51822a.coinLimitExceeded) _0x254ec6 += " ⚠️";else _0x51822a.infoFetchFailed && (_0x254ec6 += " 🔶");
    }
    _0x3d4925 += _0x90859(_0x254ec6.substring(0, _0x11c0b3[2] - 2), _0x11c0b3[2]) + "|";
    _0x3d4925 += _0x90859(_0x51822a.initialCoin, _0x11c0b3[3]) + "|";
    _0x3d4925 += _0x90859(_0x51822a.finalCoin, _0x11c0b3[4]) + "|";
    const _0x2af2af = _0x51822a.coinChange >= 0 ? "+" + _0x51822a.coinChange : _0x51822a.coinChange;
    _0x3d4925 += _0x90859(_0x2af2af, _0x11c0b3[5]) + "|";
    _0x3d4925 += _0x90859(_0x51822a.initialCash, _0x11c0b3[6]) + "|";
    _0x3d4925 += _0x90859(_0x51822a.finalCash, _0x11c0b3[7]) + "|";
    const _0x217ec5 = _0x51822a.cashChange >= 0 ? "+" + _0x51822a.cashChange.toFixed(2) : _0x51822a.cashChange.toFixed(2);
    _0x3d4925 += _0x90859(_0x217ec5, _0x11c0b3[8]) + "|";
    let _0x419df0 = "完成";
    if (_0x51822a.skipped) _0x419df0 = "跳过";else {
      if (_0x51822a.coinLimitExceeded) _0x419df0 = "超限";else _0x51822a.infoFetchFailed && (_0x419df0 = "无信息");
    }
    _0x3d4925 += _0x90859(_0x419df0, _0x11c0b3[9]) + "|";
    console.log(_0x3d4925);
  });
  console.log("=".repeat(80));
  console.log("|" + _0x90859("      任务执行完成，请查看详细结果      ", 78) + "|");
  console.log("=".repeat(80));
}
async function _0x3663c1() {
  if (!_0x5a6815 || !_0x436786) return {
    "signUrl": null,
    "error": "未设置卡密"
  };
  try {
    {
      const _0x25abaa = _0x3ec26a(),
        _0x19503c = await _0x55eb6f.post(_0x11e841, {
          "key": _0x436786,
          "action": "get_sign_url",
          "script_version": _0x1857b4,
          "device_id": _0x25abaa
        }, {
          "timeout": 10000,
          "headers": {
            "X-Auth-Key": _0x436786,
            "Content-Type": "application/json"
          },
          "validateStatus": function (_0x2792be) {
            return _0x2792be >= 200 && _0x2792be < 600;
          }
        });
      if (_0x19503c && _0x19503c.data) {
        let _0x3059c0 = _0x19503c.data;
        if (typeof _0x3059c0 === "string") {
          try {
            _0x3059c0 = JSON.parse(_0x3059c0);
          } catch (_0x1acace) {
            return {
              "signUrl": null,
              "error": "响应格式错误"
            };
          }
        }
        if (_0x3059c0.status === true) {
          const _0x14954b = _0x3059c0.data?.["sign_url"] || null;
          if (!_0x14954b) {
            return {
              "signUrl": null,
              "error": "签名服务地址为空"
            };
          }
          return {
            "signUrl": _0x14954b,
            "error": null
          };
        } else {
          {
            const _0x583643 = _0x3059c0.message || _0x3059c0.error || "获取签名服务地址失败";
            return {
              "signUrl": null,
              "error": _0x583643
            };
          }
        }
      } else return {
        "signUrl": null,
        "error": "服务器响应为空"
      };
    }
  } catch (_0x39ff58) {
    let _0x2f3cb1 = "网络请求失败";
    if (_0x39ff58.response) {
      {
        const _0x31cef8 = _0x39ff58.response.data || {};
        _0x2f3cb1 = _0x31cef8.message || _0x31cef8.error || "HTTP " + _0x39ff58.response.status + ": " + _0x39ff58.response.statusText;
      }
    } else _0x39ff58.request ? _0x2f3cb1 = "网络连接失败: " + (_0x39ff58.message || "无法连接到服务器") : _0x2f3cb1 = _0x39ff58.message || "未知错误";
    return {
      "signUrl": null,
      "error": _0x2f3cb1
    };
  }
}
async function _0x42948d() {
  if (!_0x5a6815 || !_0x436786) return {
    "isValid": false,
    "signApiUrl": null,
    "message": "未设置卡密"
  };
  try {
    {
      const _0x32d1ee = _0x3ec26a(),
        _0x4a9a2f = _0x11e841.replace("/auth.php", "/client_api.php"),
        _0x3c28c9 = new URLSearchParams();
      _0x3c28c9.append("api", "check_key");
      _0x3c28c9.append("key", _0x436786);
      _0x3c28c9.append("script_version", _0x1857b4);
      _0x3c28c9.append("device_id", _0x32d1ee);
      const _0x5901bf = await _0x55eb6f.post(_0x4a9a2f, _0x3c28c9, {
        "timeout": 10000,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "validateStatus": function (_0x4cacf7) {
          return _0x4cacf7 >= 200 && _0x4cacf7 < 600;
        }
      });
      if (!_0x5901bf || !_0x5901bf.data) {
        _0x2be6de.isValid = false;
        return {
          "isValid": false,
          "signApiUrl": null,
          "message": "服务器响应为空，请检查网络连接或服务器状态"
        };
      }
      let _0x496c1b = _0x5901bf.data;
      if (typeof _0x496c1b === "string") {
        try {
          _0x496c1b = JSON.parse(_0x496c1b);
        } catch (_0x4c1ff4) {
          _0x2be6de.isValid = false;
          return {
            "isValid": false,
            "signApiUrl": null,
            "message": "服务器响应格式错误: " + _0x496c1b.substring(0, 100)
          };
        }
      }
      if (_0x5901bf.status === 426 || _0x496c1b.code === 426 || _0x496c1b.error_code === "VERSION_MISMATCH" || _0x496c1b.error_code === "VERSION_MISSING") {
        {
          const _0x2ea006 = _0x496c1b.data?.["required_version"] || "v1";
          console.log("\n⚠️  脚本版本不匹配！");
          console.log("   当前版本: " + _0x1857b4);
          console.log("   需要版本: " + _0x2ea006);
          console.log("\n⚠️  脚本已停止运行，请手动更新到正确版本后重新运行。");
          _0x2be6de.isValid = false;
          return {
            "isValid": false,
            "signApiUrl": null,
            "message": "脚本版本不匹配，需要版本: " + _0x2ea006
          };
        }
      }
      if (_0x496c1b.status === true) {
        const _0x2f352d = _0x496c1b.data || {},
          _0x42d859 = _0x2f352d.key_status || "active",
          _0x3731e3 = _0x2f352d.expires_at;
        if (_0x42d859 !== "active") return _0x2be6de.isValid = false, {
          "isValid": false,
          "signApiUrl": null,
          "message": "卡密已被禁用（状态: " + _0x42d859 + "）"
        };
        if (_0x3731e3) {
          const _0x52d2dc = new Date(_0x3731e3).getTime(),
            _0x1c3889 = Date.now();
          if (_0x1c3889 >= _0x52d2dc) {
            _0x2be6de.isValid = false;
            return {
              "isValid": false,
              "signApiUrl": null,
              "message": "卡密已过期（过期时间: " + _0x3731e3 + "）"
            };
          }
        }
        if (_0x2f352d.max_uses !== null && _0x2f352d.max_uses > 0 && _0x2f352d.used_count >= _0x2f352d.max_uses) {
          _0x2be6de.isValid = false;
          return {
            "isValid": false,
            "signApiUrl": null,
            "message": "卡密使用次数已达上限（" + _0x2f352d.used_count + "/" + _0x2f352d.max_uses + "）"
          };
        }
        const _0x2eb90d = await _0x3663c1();
        if (_0x2eb90d.error) return _0x2be6de.isValid = false, {
          "isValid": false,
          "signApiUrl": null,
          "message": "获取签名服务地址失败: " + _0x2eb90d.error
        };
        _0x2be6de.isValid = true;
        _0x2be6de.lastCheckTime = Date.now();
        _0x2be6de.keyStatus = _0x42d859;
        _0x2be6de.expiresAt = _0x3731e3;
        return {
          "isValid": true,
          "signApiUrl": _0x2eb90d.signUrl,
          "message": "卡密验证成功"
        };
      } else {
        {
          const _0x187983 = _0x496c1b.message || _0x496c1b.error || _0x496c1b.msg || "未知错误",
            _0x4afc4b = _0x5901bf.status || _0x5901bf.statusCode || "N/A";
          _0x2be6de.isValid = false;
          let _0x260295 = _0x187983;
          (_0x187983 === "未知错误" || !_0x187983) && (_0x260295 = "卡密验证失败（HTTP状态码: " + _0x4afc4b + "）");
          return {
            "isValid": false,
            "signApiUrl": null,
            "message": _0x260295
          };
        }
      }
    }
  } catch (_0x2bee21) {
    let _0x457f19 = "网络请求失败";
    if (_0x2bee21.response) {
      const _0x2bd94d = _0x2bee21.response.data || {};
      _0x457f19 = _0x2bd94d.message || _0x2bd94d.error || _0x2bd94d.msg || "HTTP " + _0x2bee21.response.status + ": " + _0x2bee21.response.statusText;
    } else _0x2bee21.request ? _0x457f19 = "网络连接失败: " + (_0x2bee21.message || "无法连接到服务器") : _0x457f19 = _0x2bee21.message || "未知错误";
    _0x2be6de.isValid = false;
    return {
      "isValid": false,
      "signApiUrl": null,
      "message": "卡密验证异常: " + _0x457f19
    };
  }
}
async function _0x118f60() {
  const _0x5a8306 = await _0x42948d();
  if (!_0x5a8306.isValid) {
    {
      console.log("\n❌ 卡密验证失败: " + _0x5a8306.message);
      console.log("💡 提示: 任务将停止执行，请检查卡密状态");
      _0x2be6de.isValid = false;
      _0x2be6de.checkInterval && (clearInterval(_0x2be6de.checkInterval), _0x2be6de.checkInterval = null);
      return false;
    }
  }
  return true;
}
function _0x29b164() {
  if (!_0x5a6815 || !_0x436786) return;
  if (_0x2be6de.checkInterval) {
    clearInterval(_0x2be6de.checkInterval);
  }
  _0x2be6de.checkInterval = setInterval(async () => {
    await _0x118f60();
  }, _0x4e528a);
}
function _0x188ecf() {
  _0x2be6de.checkInterval && (clearInterval(_0x2be6de.checkInterval), _0x2be6de.checkInterval = null);
}
async function _0xa8a562() {
  if (!_0x5a6815 || !_0x436786) return null;
  try {
    {
      const _0xc41b5b = _0x11e841.replace("/auth.php", "/client_api.php"),
        _0x49ec58 = _0xc41b5b + "?api=check_key&key=" + encodeURIComponent(_0x436786) + "&script_version=" + encodeURIComponent(_0x1857b4),
        _0x5566e0 = await _0x55eb6f.get(_0x49ec58, {
          "timeout": 10000
        });
      if (_0x5566e0.data && _0x5566e0.data.status) {
        {
          const _0x47c63a = _0x5566e0.data.data || {};
          return {
            "enabled": _0x47c63a.ud_bind_enabled || false,
            "maxBindCount": _0x47c63a.max_ud_bind_count || 0,
            "boundCount": (_0x47c63a.bound_uds || []).length,
            "boundUds": _0x47c63a.bound_uds || [],
            "keyStatus": _0x47c63a.key_status || "active",
            "expiresAt": _0x47c63a.expires_at,
            "usedCount": _0x47c63a.used_count || 0,
            "maxUses": _0x47c63a.max_uses
          };
        }
      } else return null;
    }
  } catch (_0x30765a) {
    return null;
  }
}
async function _0x1c973c() {
  if (!_0x5a6815 || !_0x436786) return null;
  try {
    const _0x96fad1 = await _0xa8a562();
    if (!_0x96fad1) {
      return null;
    }
    if (!_0x96fad1.enabled) return null;
    console.log("\n🔍 正在检测卡密UD绑定状态...");
    console.log("✅ 云端已启用UD绑定功能");
    _0x96fad1.maxBindCount > 0 ? console.log("   绑定状态: " + _0x96fad1.boundCount + "/" + _0x96fad1.maxBindCount + " 个账号") : console.log("   已绑定: " + _0x96fad1.boundCount + " 个账号（无限制）");
    const _0x4a8f01 = _0x50b58a(),
      _0x279695 = [],
      _0x135e62 = (_0x224fa0, _0x4f75ff) => {
        {
          const _0x404cfb = _0x5c1bf7 => _0x5c1bf7.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
            _0xd51200 = _0x404cfb(_0x4f75ff),
            _0x3c1e4b = [new RegExp(_0xd51200 + "\\s*=\\s*\"([^\"]+)\"", "i"), new RegExp(_0xd51200 + "\\s*=\\s*([^;\\s]+)", "i"), new RegExp(_0xd51200 + "\\s*:\\s*\"([^\"]+)\"", "i"), new RegExp(_0xd51200 + "\\s*:\\s*([^,;\\s]+)", "i")];
          for (const _0x2185c3 of _0x3c1e4b) {
            const _0x1d5bcd = _0x224fa0.match(_0x2185c3);
            if (_0x1d5bcd && _0x1d5bcd[1] && _0x1d5bcd[1].trim()) return _0x1d5bcd[1].trim();
          }
          return null;
        }
      };
    for (let _0x2eedd3 = 0; _0x2eedd3 < _0x4a8f01.length; _0x2eedd3++) {
      const _0x452cca = _0x4a8f01[_0x2eedd3];
      if (_0x452cca.cookie) {
        {
          const _0x1f3700 = _0x135e62(_0x452cca.cookie, "ud") || _0x135e62(_0x452cca.cookie, "userId");
          if (_0x1f3700 && _0x1f3700.trim()) {
            {
              const _0x59e2b4 = _0x1f3700.trim();
              if (!_0x279695.find(_0x508a9c => _0x508a9c.ud === _0x59e2b4)) {
                {
                  if (_0x96fad1.maxBindCount > 0 && _0x96fad1.boundCount >= _0x96fad1.maxBindCount) {
                    if (_0x96fad1.boundUds.includes(_0x59e2b4)) continue;
                  }
                  _0x279695.push({
                    "ud": _0x59e2b4,
                    "index": _0x2eedd3 + 1,
                    "remark": _0x452cca.remark || "账号" + (_0x2eedd3 + 1)
                  });
                }
              }
            }
          }
        }
      }
    }
    if (_0x279695.length === 0) {
      {
        if (_0x96fad1.maxBindCount > 0 && _0x96fad1.boundCount >= _0x96fad1.maxBindCount) {
          {
            const _0x37812a = _0x4a8f01.every(_0x265115 => {
              {
                if (!_0x265115.cookie) return true;
                const _0x1ea50d = _0x135e62(_0x265115.cookie, "ud") || _0x135e62(_0x265115.cookie, "userId");
                return !_0x1ea50d || !_0x1ea50d.trim() || _0x96fad1.boundUds.includes(_0x1ea50d.trim());
              }
            });
            if (_0x37812a) {
              console.log("✅ 所有账号的UD已在绑定列表中，无需重复绑定");
              const _0x559a08 = [];
              for (let _0x3efca7 = 0; _0x3efca7 < _0x4a8f01.length; _0x3efca7++) {
                {
                  const _0x517185 = _0x4a8f01[_0x3efca7];
                  if (_0x517185.cookie) {
                    const _0x36be97 = _0x135e62(_0x517185.cookie, "ud") || _0x135e62(_0x517185.cookie, "userId");
                    _0x36be97 && _0x36be97.trim() && _0x559a08.push({
                      "ud": _0x36be97.trim(),
                      "index": _0x3efca7 + 1,
                      "remark": _0x517185.remark || "账号" + (_0x3efca7 + 1)
                    });
                  }
                }
              }
              const _0x160a82 = _0x96fad1.boundUds || [],
                _0x9a6da8 = _0x559a08.filter(_0x2c7e7f => !_0x160a82.includes(_0x2c7e7f.ud));
              if (_0x9a6da8.length > 0) return {
                "success": false,
                "successCount": 0,
                "failCount": _0x9a6da8.length,
                "totalCount": _0x559a08.length,
                "unboundUds": _0x9a6da8
              };
              return {
                "success": true,
                "successCount": _0x559a08.length,
                "failCount": 0,
                "totalCount": _0x559a08.length,
                "boundUds": _0x160a82
              };
            } else {
              const _0x464daa = [];
              for (let _0xa54de0 = 0; _0xa54de0 < _0x4a8f01.length; _0xa54de0++) {
                const _0x55f815 = _0x4a8f01[_0xa54de0];
                if (_0x55f815.cookie) {
                  {
                    const _0x53c433 = _0x135e62(_0x55f815.cookie, "ud") || _0x135e62(_0x55f815.cookie, "userId");
                    if (_0x53c433 && _0x53c433.trim()) {
                      {
                        const _0x2fdbd0 = _0x53c433.trim();
                        !_0x96fad1.boundUds.includes(_0x2fdbd0) && _0x464daa.push({
                          "ud": _0x2fdbd0,
                          "index": _0xa54de0 + 1,
                          "remark": _0x55f815.remark || "账号" + (_0xa54de0 + 1)
                        });
                      }
                    }
                  }
                }
              }
              return {
                "success": false,
                "successCount": 0,
                "failCount": _0x464daa.length,
                "totalCount": _0x464daa.length,
                "unboundUds": _0x464daa
              };
            }
          }
        } else {
          const _0x41a474 = [];
          for (let _0x387d5a = 0; _0x387d5a < _0x4a8f01.length; _0x387d5a++) {
            const _0x599481 = _0x4a8f01[_0x387d5a];
            if (_0x599481.cookie) {
              const _0x23e7ae = _0x135e62(_0x599481.cookie, "ud") || _0x135e62(_0x599481.cookie, "userId");
              if (_0x23e7ae && _0x23e7ae.trim()) {
                _0x41a474.push({
                  "ud": _0x23e7ae.trim(),
                  "index": _0x387d5a + 1,
                  "remark": _0x599481.remark || "账号" + (_0x387d5a + 1)
                });
              }
            }
          }
          if (_0x41a474.length === 0) return console.log("⚠️  未检测到任何账号的UD，跳过UD绑定"), null;
          const _0x3bff0f = _0x96fad1.boundUds || [],
            _0x5d3162 = _0x41a474.filter(_0x15f318 => !_0x3bff0f.includes(_0x15f318.ud));
          if (_0x5d3162.length > 0) {
            return {
              "success": false,
              "successCount": 0,
              "failCount": _0x5d3162.length,
              "totalCount": _0x41a474.length,
              "unboundUds": _0x5d3162
            };
          }
          return {
            "success": true,
            "successCount": _0x41a474.length,
            "failCount": 0,
            "totalCount": _0x41a474.length,
            "boundUds": _0x3bff0f
          };
        }
      }
    }
    console.log("\n🔍 检测到 " + _0x279695.length + " 个快手UD，开始自动上传绑定...");
    const _0x42fb0d = _0x11e841.replace("/auth.php", "/client_api.php"),
      _0x3d436f = _0x279695.map(async ({
        ud: _0x2da0cf,
        index: _0x4b2b8f,
        remark: _0x32f18b
      }) => {
        {
          const _0x27dbbc = new URLSearchParams();
          _0x27dbbc.append("action", "upload_ud");
          _0x27dbbc.append("key", _0x436786);
          _0x27dbbc.append("ud", _0x2da0cf);
          try {
            const _0x320f35 = await _0x55eb6f.post(_0x42fb0d, _0x27dbbc.toString(), {
              "headers": {
                "Content-Type": "application/x-www-form-urlencoded"
              },
              "timeout": 10000,
              "validateStatus": function (_0x22c049) {
                return _0x22c049 >= 200 && _0x22c049 < 600;
              }
            });
            if (!_0x320f35 || !_0x320f35.data) return console.log("❌ [" + _0x32f18b + "] UD: " + _0x2da0cf + " 上传失败: 服务器响应为空"), {
              "success": false,
              "ud": _0x2da0cf,
              "remark": _0x32f18b,
              "error": "服务器响应为空"
            };
            let _0x1fef00 = _0x320f35.data;
            if (typeof _0x1fef00 === "string") try {
              _0x1fef00 = JSON.parse(_0x1fef00);
            } catch (_0x19f233) {
              console.log("❌ [" + _0x32f18b + "] UD: " + _0x2da0cf + " 上传失败: 响应格式错误（无法解析JSON）");
              return {
                "success": false,
                "ud": _0x2da0cf,
                "remark": _0x32f18b,
                "error": "响应格式错误"
              };
            }
            if (_0x1fef00 && _0x1fef00.status) {
              const _0x182aac = _0x1fef00.data?.["bound_count"] || 0,
                _0x1b8050 = _0x1fef00.data?.["max_bind_count"] || 0,
                _0x1d259d = _0x1fef00.data?.["already_bound"] || false;
              if (_0x1d259d) console.log("ℹ️  [" + _0x32f18b + "] UD: " + _0x2da0cf + " 已在绑定列表中");else _0x1b8050 > 0 ? console.log("✅ [" + _0x32f18b + "] UD: " + _0x2da0cf + " 绑定成功 (" + _0x182aac + "/" + _0x1b8050 + ")") : console.log("✅ [" + _0x32f18b + "] UD: " + _0x2da0cf + " 绑定成功 (已���定: " + _0x182aac + ")");
              return {
                "success": true,
                "ud": _0x2da0cf,
                "remark": _0x32f18b
              };
            } else {
              const _0x5cb143 = _0x1fef00 || {},
                _0x5abcb1 = _0x5cb143.message || "未知错误",
                _0x3db161 = _0x5cb143.code || "UNKNOWN_ERROR",
                _0x525d7d = _0x5cb143.data || {};
              let _0x15e722 = "";
              if (_0x3db161 === "UD_BIND_DISABLED") _0x15e722 = "💡 提示: 该卡密未启用UD绑定功能，请联系管理员在后台启用";else {
                if (_0x3db161 === "MAX_BIND_LIMIT") _0x15e722 = "💡 提示: 已达到最大绑定数（" + (_0x525d7d.max_bind_count || "未知") + "个），无法添加新的UD";else {
                  if (_0x5abcb1.includes("卡密不存在") || _0x5abcb1.includes("卡密无效")) {
                    _0x15e722 = "💡 提示: 请检查AUTH_KEY环境变量是否正确";
                  } else {
                    if (_0x5abcb1.includes("已被禁用")) {
                      _0x15e722 = "💡 提示: 卡密已被禁用，请联系管理员";
                    }
                  }
                }
              }
              console.log("❌ [" + _0x32f18b + "] UD: " + _0x2da0cf + " 绑定失败: " + _0x5abcb1);
              if (_0x15e722) {
                console.log("   " + _0x15e722);
              }
              if (_0x5abcb1.includes("已在绑定列表中")) return {
                "success": true,
                "ud": _0x2da0cf,
                "remark": _0x32f18b,
                "message": _0x5abcb1
              };
              return {
                "success": false,
                "ud": _0x2da0cf,
                "remark": _0x32f18b,
                "message": _0x5abcb1,
                "errorCode": _0x3db161
              };
            }
          } catch (_0x210fdf) {
            let _0x1fa7b3 = "网络请求失败";
            if (_0x210fdf.response) {
              const _0x43d4bf = _0x210fdf.response.data || {};
              if (typeof _0x43d4bf === "string") try {
                {
                  const _0x33acba = JSON.parse(_0x43d4bf);
                  _0x1fa7b3 = _0x33acba.message || _0x33acba.error || "HTTP " + _0x210fdf.response.status + ": " + _0x210fdf.response.statusText;
                }
              } catch (_0x4aa74c) {
                _0x1fa7b3 = "HTTP " + _0x210fdf.response.status + ": " + _0x210fdf.response.statusText;
              } else typeof _0x43d4bf === "object" ? _0x1fa7b3 = _0x43d4bf.message || _0x43d4bf.error || "HTTP " + _0x210fdf.response.status + ": " + _0x210fdf.response.statusText : _0x1fa7b3 = "HTTP " + _0x210fdf.response.status + ": " + _0x210fdf.response.statusText;
            } else _0x210fdf.request ? _0x1fa7b3 = "网络连接失败: " + (_0x210fdf.message || "无法连接到服务器") : _0x1fa7b3 = _0x210fdf.message || "未知错误";
            console.log("❌ [" + _0x32f18b + "] UD: " + _0x2da0cf + " 上传失败: " + _0x1fa7b3);
            if (_0x210fdf.response && _0x210fdf.response.data) {
              const _0x3c5fa1 = _0x210fdf.response.data;
              if (typeof _0x3c5fa1 === "object" && _0x3c5fa1.message) console.log("   错误详情: " + _0x3c5fa1.message), _0x3c5fa1.code && console.log("   错误代码: " + _0x3c5fa1.code);else {
                if (typeof _0x3c5fa1 === "string" && _0x3c5fa1.length < 500) {
                  console.log("   错误详情: " + _0x3c5fa1);
                }
              }
            }
            return {
              "success": false,
              "ud": _0x2da0cf,
              "remark": _0x32f18b,
              "error": _0x1fa7b3
            };
          }
        }
      }),
      _0x46f70f = 5,
      _0x5a6b8f = [];
    for (let _0x4df94e = 0; _0x4df94e < _0x3d436f.length; _0x4df94e += _0x46f70f) {
      const _0x10dd1a = _0x3d436f.slice(_0x4df94e, _0x4df94e + _0x46f70f),
        _0x451a40 = await Promise.all(_0x10dd1a);
      _0x5a6b8f.push(..._0x451a40);
    }
    const _0x17ef1b = _0x5a6b8f.filter(_0x2a7a5f => _0x2a7a5f.success).length,
      _0x4ca500 = _0x5a6b8f.filter(_0x27df58 => !_0x27df58.success).length;
    console.log("\n📊 UD自动绑定完成: 成功 " + _0x17ef1b + " 个，失败 " + _0x4ca500 + " 个，总计 " + _0x279695.length + " 个");
    if (_0x4ca500 > 0) return {
      "success": false,
      "successCount": _0x17ef1b,
      "failCount": _0x4ca500,
      "totalCount": _0x279695.length,
      "failedUds": _0x5a6b8f.filter(_0x35ff02 => !_0x35ff02.success).map(_0x2ff3c1 => ({
        "ud": _0x2ff3c1.ud,
        "remark": _0x2ff3c1.remark,
        "error": _0x2ff3c1.error || _0x2ff3c1.message
      }))
    };
    const _0x353f9c = [];
    for (let _0x3c3ad4 = 0; _0x3c3ad4 < _0x4a8f01.length; _0x3c3ad4++) {
      {
        const _0x35c40e = _0x4a8f01[_0x3c3ad4];
        if (_0x35c40e.cookie) {
          const _0x4a87d3 = _0x135e62(_0x35c40e.cookie, "ud") || _0x135e62(_0x35c40e.cookie, "userId");
          _0x4a87d3 && _0x4a87d3.trim() && _0x353f9c.push({
            "ud": _0x4a87d3.trim(),
            "index": _0x3c3ad4 + 1,
            "remark": _0x35c40e.remark || "账号" + (_0x3c3ad4 + 1)
          });
        }
      }
    }
    const _0x19807f = await _0xa8a562();
    if (_0x19807f && _0x19807f.enabled) {
      const _0x13783a = _0x19807f.boundUds || [],
        _0x2a84d9 = _0x353f9c.filter(_0x350433 => !_0x13783a.includes(_0x350433.ud));
      if (_0x2a84d9.length > 0) return {
        "success": false,
        "successCount": _0x17ef1b,
        "failCount": _0x4ca500 + _0x2a84d9.length,
        "totalCount": _0x353f9c.length,
        "unboundUds": _0x2a84d9
      };
    }
    return {
      "success": true,
      "successCount": _0x17ef1b,
      "failCount": _0x4ca500,
      "totalCount": _0x279695.length,
      "boundUds": _0x279695.map(_0x1cdb1e => _0x1cdb1e.ud)
    };
  } catch (_0xd89c5f) {
    return {
      "success": false,
      "error": _0xd89c5f.message || "未知错误"
    };
  }
}
async function _0x1be40b() {
  try {
    {
      const _0x26ad5a = _0x11e841.replace("/auth.php", "/client_api.php"),
        _0x581b9d = _0x26ad5a + "?api=get_script_version";
      try {
        const _0x4d7176 = await _0x55eb6f.get(_0x581b9d, {
          "timeout": 10000,
          "validateStatus": function (_0x2ad5f1) {
            return _0x2ad5f1 >= 200 && _0x2ad5f1 < 600;
          }
        });
        if (_0x4d7176.status === 401) return console.log("⚠️  获取版本号需要登录"), null;
        let _0xb9be08 = _0x4d7176.data;
        if (typeof _0xb9be08 === "string") try {
          _0xb9be08 = JSON.parse(_0xb9be08);
        } catch (_0x4c3c09) {
          console.log("⚠️  服务器响应格式错误");
          return null;
        }
        if (_0xb9be08 && _0xb9be08.status === true && _0xb9be08.data && _0xb9be08.data.configured_version) {
          {
            const _0x20af56 = _0xb9be08.data.configured_version.trim();
            return _0x20af56;
          }
        } else {
          const _0x3ab837 = _0xb9be08?.["message"] || "响应格式不正确";
          console.log("⚠️  无法从服务器获取版本号: " + _0x3ab837);
          return null;
        }
      } catch (_0xac0df7) {
        const _0x5524ae = _0xac0df7.response?.["data"]?.["message"] || _0xac0df7.message || "未知错误";
        console.log("⚠️  获取服务器版本号失败: " + _0x5524ae);
        return null;
      }
    }
  } catch (_0x268376) {
    console.log("⚠️  获取版本号出错: " + _0x268376.message);
    return null;
  }
}
async function _0x1afbe9() {
  try {
    {
      console.log("\n🔍 正在检查脚本版本...");
      console.log("   本地版本: " + _0x1857b4);
      const _0x37e8a5 = await _0x1be40b();
      if (!_0x37e8a5) {
        console.log("\n⚠️  无法从服务器获取版本号，脚本已停止运行");
        process.exit(1);
      }
      console.log("   服务器版本: " + _0x37e8a5);
      const _0x2a2480 = _0x1857b4.toLowerCase().trim(),
        _0x231edc = _0x37e8a5.toLowerCase().trim();
      if (_0x231edc !== _0x2a2480) {
        {
          console.log("\n⚠️  脚本版本不匹配！");
          console.log("   本地版本: " + _0x1857b4);
          console.log("   服务器版本: " + _0x37e8a5);
          console.log("\n⚠️  脚本已停止运行，请更新到正确版本后重新运行。");
          process.exit(1);
        }
      } else console.log("✅ 脚本版本检查通过 (版本: " + _0x1857b4 + ")");
    }
  } catch (_0x3266f1) {
    console.log("\n⚠️  版本检查出错: " + _0x3266f1.message);
    console.log("\n⚠️  脚本已停止运行。");
    process.exit(1);
  }
}
(async () => {
  _0x436786 && _0x436786.length > 0 ? await _0x1afbe9() : (console.log("\n🔍 脚本版本: " + _0x1857b4), console.log("⚠️  未设置卡密，跳过版本检查"));
  const _0x3284ab = _0x3ec26a();
  if (!_0x436786) {
    console.error("❌ 错误: 未设置卡密（AUTH_KEY）");
    console.log("\n💡 使用方法:");
    console.log("   1. 设置环境变量: export AUTH_KEY=your_kamicard_key");
    console.log("   2. 或设置环境变量: export KAMICARD_KEY=your_kamicard_key");
    process.exit(1);
  }
  console.log("\n🔍 正在验证卡密状态...");
  const _0x5f1508 = await _0x42948d();
  !_0x5f1508.isValid && (console.error("\n❌ 卡密验证失败: " + _0x5f1508.message), console.log("💡 提示: 请检查卡密状态或联系管理员"), console.log("\n⚠️  脚本已停止执行，请解决卡密问题后重新运行"), process.exit(1));
  console.log("✅ " + _0x5f1508.message);
  if (_0x5a6815 && _0x436786) {
    try {
      {
        const _0x3fb690 = _0x11e841.replace("/auth.php", "/client_api.php"),
          _0x453a68 = _0x3fb690 + "?api=check_key&key=" + encodeURIComponent(_0x436786) + "&script_version=" + encodeURIComponent(_0x1857b4),
          _0x5a45b3 = await _0x55eb6f.get(_0x453a68, {
            "timeout": 10000
          });
        if (_0x5a45b3.data && _0x5a45b3.data.status) {
          const _0x342f11 = _0x5a45b3.data.data || {},
            _0x34f211 = _0x342f11.device_bind_enabled === true || _0x342f11.device_bind_enabled === "1" || _0x342f11.device_bind_enabled === 1,
            _0x4cfe46 = _0x342f11.bound_device_id || null;
          if (_0x34f211) {
            console.log("\n🔍 正在检查设备ID绑定状态...");
            if (_0x4cfe46) {
              if (_0x3284ab !== _0x4cfe46) {
                console.error("\n❌ 设备ID绑定验证失败！");
                console.error("\n⚠️  设备ID本地与云端绑定不一致，脚本已停止运行！");
                console.error("   请检查设备ID绑定状态或联系管理员。");
                console.error("   如需更换设备，请联系管理员解绑原设备ID。\n");
                process.exit(1);
              } else console.log("✅ 设备ID绑定验证通过");
            } else console.log("ℹ️  设备ID绑定已启用，等待首次绑定（首次使用将自动绑定当前设备ID）");
          }
        }
      }
    } catch (_0x417151) {
      console.log("⚠️  检查设备ID绑定状态时出错: " + _0x417151.message + "，继续执行脚本");
    }
  }
  if (_0x5a6815 && _0x436786) try {
    const _0x466519 = _0x11e841.replace("/auth.php", "/client_api.php"),
      _0x133fb9 = _0x466519 + "?api=check_key&key=" + encodeURIComponent(_0x436786) + "&script_version=" + encodeURIComponent(_0x1857b4),
      _0x56e792 = await _0x55eb6f.get(_0x133fb9, {
        "timeout": 10000
      });
    if (_0x56e792.data && _0x56e792.data.status) {
      const _0x435b91 = _0x56e792.data.data || {},
        _0x3fb63b = _0x435b91.ud_bind_enabled === true || _0x435b91.ud_bind_enabled === "1" || _0x435b91.ud_bind_enabled === 1,
        _0x5290c0 = _0x435b91.bound_uds || [],
        _0x2970a0 = _0x435b91.max_ud_bind_count || 0;
      if (_0x3fb63b) {
        console.log("\n🔍 正在检查UD绑定状态...");
        if (_0x5290c0.length > 0) {
          console.log("✅ 云端已启用UD绑定功能");
          if (_0x2970a0 > 0) {
            console.log("   绑定状态: " + _0x5290c0.length + "/" + _0x2970a0 + " 个账号");
          } else console.log("   已绑定: " + _0x5290c0.length + " 个账号（无限制）");
          console.log("   已绑定UD列表: " + _0x5290c0.join(", "));
        } else console.log("ℹ️  UD绑定已启用，等待首次绑定（首次使用将自动绑定账号UD）");
      }
    }
  } catch (_0x5a6bde) {
    console.log("⚠️  检查UD绑定状态时出错: " + _0x5a6bde.message + "，继续执行脚本");
  }
  _0x29b164();
  const _0x335ae0 = _0x50b58a();
  !_0x335ae0.length && (console.error("\n❌ 错误: 未配置账号信息"), console.log("\n💡 请设置环境变量 ksck 或 ksck1, ksck2... 来配置账号"), _0x188ecf(), process.exit(1));
  let _0x5d76dc = null;
  if (_0x5a6815) {
    _0x5d76dc = await _0x1c973c();
    if (_0x5d76dc !== null) {
      {
        const _0x3b3f31 = await _0xa8a562();
        if (_0x3b3f31 && _0x3b3f31.enabled) {
          !_0x5d76dc.success ? (console.error("\n❌ UD绑定验证失败，脚本已终止"), _0x188ecf(), process.exit(1)) : console.log("✅ UD绑定验证通过: 所有账号的UD都已成功绑定");
        }
      }
    }
  }
  console.log("═══════════════════════════════════════════════════════════════");
  console.log("📋 当前配置信息：");
  console.log("  金币上限 (KSCOIN_LIMIT): " + _0x4246c8);
  console.log("  低奖励阈值 (KSLOW_REWARD_THRESHOLD): " + _0x2bab25);
  console.log("  连续低奖励上限 (KSLOW_REWARD_LIMIT): " + _0x1c583c);
  console.log("  并发策略: 每个账号同时进行 (" + _0x48e1c9 + " 并发)");
  console.log("  跳过直播广告 (SKIP_LIVE_ADS): " + (_0x4d7b04 ? "启用，重试" + _0x2fd02f + "次" : "禁用"));
  console.log("  执行任务 (Task): " + _0x34033a.join(", "));
  _0x34033a.includes("look") && console.log("  look 总执行次数 (KSLOOK_COUNT): " + _0x40b476);
  _0x34033a.includes("box") && console.log("  box 总执行次数 (KSBOX_COUNT): " + _0x455628);
  _0x34033a.includes("food") && console.log("  food 总执行次数 (KSFOOD_COUNT): " + _0x470c6e);
  _0x34033a.includes("kbox") && console.log("  kbox 总执行次数 (KSKBOX_COUNT): " + _0x25a0a8);
  if (_0x34033a.includes("search")) {
    console.log("  search 总执行次数 (KSSEARCH_COUNT): " + _0x2de5ce);
  }
  if (_0x34033a.includes("look_follow")) {
    console.log("  每次 look 成功追加 look_follow 次数 (KSFOLLOW_COUNT): " + _0x10ab29);
  }
  if (_0x34033a.includes("search_follow")) {
    console.log("  每次 search 成功追加 search_follow 次数 (KSSEARCHFOLLOW_COUNT): " + _0x1506d1);
  }
  console.log("  账号数量: " + _0x335ae0.length);
  console.log("═══════════════════════════════════════════════════════════════\n");
  console.log("🚀 开始执行任务，共 " + _0x335ae0.length + " 个账号...\n");
  const _0x3a33d0 = [],
    _0x166e8e = Math.max(1, Math.min(_0x3a0546, _0x335ae0.length));
  await _0x306067(_0x335ae0, _0x166e8e, async _0x536d7b => {
    try {
      const _0x2b1591 = await _0x1a237f(_0x536d7b);
      _0x3a33d0.push({
        "index": _0x536d7b.index,
        "remark": _0x536d7b.remark || "无备注",
        "nickname": _0x2b1591?.["nickname"] || "账号" + _0x536d7b.index,
        "initialCoin": _0x2b1591?.["initialCoin"] || 0,
        "finalCoin": _0x2b1591?.["finalCoin"] || 0,
        "coinChange": _0x2b1591?.["coinChange"] || 0,
        "initialCash": _0x2b1591?.["initialCash"] || 0,
        "finalCash": _0x2b1591?.["finalCash"] || 0,
        "cashChange": _0x2b1591?.["cashChange"] || 0,
        "stats": _0x2b1591?.["stats"] || {},
        "coinLimitExceeded": _0x2b1591?.["coinLimitExceeded"] || false,
        "skipped": _0x2b1591?.["skipped"] || false,
        "infoFetchFailed": _0x2b1591?.["infoFetchFailed"] || false,
        "error": _0x2b1591?.["error"] || null
      });
    } catch (_0x2845d3) {
      console.log("账号[" + _0x536d7b.index + "]" + (_0x536d7b.remark ? "（" + _0x536d7b.remark + "）" : "") + " ❌ 执行异常：" + _0x2845d3.message);
      _0x3a33d0.push({
        "index": _0x536d7b.index,
        "remark": _0x536d7b.remark || "无备注",
        "nickname": "账号" + _0x536d7b.index,
        "initialCoin": 0,
        "finalCoin": 0,
        "coinChange": 0,
        "initialCash": 0,
        "finalCash": 0,
        "cashChange": 0,
        "error": _0x2845d3.message,
        "skipped": true
      });
    }
  });
  _0x3a33d0.sort((_0x4f1ae1, _0x71e44e) => _0x4f1ae1.index - _0x71e44e.index);
  _0x188ecf();
  console.log("\n全部完成。", "✅");
  console.log("\n---------------------------------------------- 账号信息汇总 ----------------------------------------------");
  _0x1af28b(_0x3a33d0);
})();
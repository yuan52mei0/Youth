const $ = new Env('youthshare');
让 md5 = require('md5-node');
让现在时间；
让wxck;
让文章=“https://focus.youth.cn/article/s?signature=LrNmbVzoOlxeyXw4pvm0ZgHe9yjMszx5QgRaM8ZkP3BAW9pJqD&uid=56141571&phone_code=18b670bf674d2aa5f6c4536508fd4bf7&scid=39239392&time=1625449279&app_version=2.0.0&sign=f893d2c35dcfd516cc3f92185568e781”
“https://focus.youth.cn/article/s?signature=XwoQBWe23qDAVz946lXbz9Tm3vKOTkzb8vzavNyb8EMlgYnm6k&uid=56141571&phone_code=18b670bf674d2aa5f6c4536508fd4bf7&scid=39247733&time=1625449320&app_version=2.0.0&sign=cbfb1464d1a8aea68818b6954a37de8a”
“https://focus.youth.cn/article/s?signature=Wn8Pym36L9l0Yoz1y9OBMxI8XWqGUYX25eV1xKXjQqgZBMVdDe&uid=56141571&phone_code=18b670bf674d2aa5f6c4536508fd4bf7&scid=39244601&time=1625449370&app_version=2.0.0&sign=4118fd2c1e5abce2dc2500586f83a839”
“https://focus.youth.cn/article/s?signature=j6LwoklONRyQvgd4k05wnZfqjgVdcjvR99578M9zV2YP3KBGAe&uid=56141571&phone_code=18b670bf674d2aa5f6c4536508fd4bf7&scid=39245460&time=1625449390&app_version=2.0.0&sign=1813f885afdfdccc445e269b7b03884a”]

让编码文章；


让标题 = {
    "Accept-Encoding": "gzip, deflate, br",
    “接受”： ”*/*”，
    "连接": "保持活动",
    "推荐人": "https://focus.youth.cn/",
    "Host": "script.baertt.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.2(0x18000231) NetType/WIFI Language/zh_CN ”，
    “接受-语言”：“zh-cn”
};

!(异步() => {
    for (让 i = 0; i < 文章.长度; i++) {
		encodearticles = encodeURIComponent(encodeURIComponent(articles[i]));
        nowTime = new Date().getTime();
        wxck = md5(nowTime);
        $.log(wxck);
		
        等待存储（）；
        等待 $.wait(3000);

        等待访问（）；
        等待 $.wait(3000);

        等待打开页面（）；
        等待 $.wait(3000);

        等待回调（）；
        等待 $.wait(3000);

    }
})()
.catch((e) => $.logErr(e))
.finally(() => $.done())

函数存储（）{

    返回新的承诺（（解决，拒绝）=> {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/storage?t=${wxck}&referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp2`;
        常量请求 = {
            网址：网址，
            标题：标题，
        };

        $.get(request, function (error, response, data) {
            尝试 {
                $.log(数据);
            }赶上（e）{
                $.log(e)
            }
            解决（）;
        })
    })
}

函数访问（）{

    返回新的承诺（（解决，拒绝）=> {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/visit?type=1&si=${wxck}&referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp3`;

        常量请求 = {
            网址：网址，
            标题：标题，
        };

        $.get(request, function (error, response, data) {
            尝试 {
                $.log(数据);
            }赶上（e）{
                $.log(e)
            }
            解决（）;
        })
    })
}

函数 openpage() {
    返回新的承诺（（解决，拒绝）=> {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/openpage?referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp5`;
        常量请求 = {
            网址：网址，
            标题：标题，

        };

        $.get(request, function (error, response, data) {
            尝试 {
                $.log(数据);
            }赶上（e）{
                $.log(e)
            }
            解决（）;
        })
    })
}

函数回调（）{
    返回新的承诺（（解决，拒绝）=> {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/callback?si=${wxck}&referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp6`;
        常量请求 = {
            网址：网址，
            标题：标题，
        };

        $.get(request, function (error, response, data) {
            尝试 {
                $.log(数据);
            }赶上（e）{
                $.log(e)
            }
            解决（）;
        })
    })
}

函数 Env(t, e) {
    类 {
        构造函数（t）{
            this.env = t
        }
        发送（t，e =“GET”）{
            t = "string" == typeof t ? {
                网址：t
            }
             ：吨；
            让 s = this.get;
            返回 "POST" === e && (s = this.post),
            新承诺((e, i) => {
                s.call(this, t, (t, s, r) => {
                    ? i(t) : e(s)
                })
            })
        }
        得到（吨）{
            返回 this.send.call(this.env, t)
        }
        后（吨）{
            返回 this.send.call(this.env, t, "POST")
        }
    }
    返回新类{
        构造函数（t，e）{
            this.name = t,
            this.http = new s(this),
            this.data = 空，
            this.dataFile = "box.dat",
            this.logs = [],
            this.isMute = !1,
            this.isNeedRewrite = !1,
            this.logSeparator = "\n",
            this.startTime = (new Date).getTime(),
            Object.assign(this, e),
            this.log(`\n${this.name}\u811a\u672c,\u5f00\u59cb\u6267\u884c:`)
        }
        isNode() {
            返回“未定义”！= typeof module && !!module.exports
        }
        isQuanX() {
            返回“未定义”！= typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            返回“未定义”！= typeof $loon
        }
        toObj(t, e = null) {
            尝试 {
                返回 JSON.parse(t)
            } 抓住 {
                返回 e
            }
        }
        toStr(t, e = null) {
            尝试 {
                返回 JSON.stringify(t)
            } 抓住 {
                返回 e
            }
        }
        getjson(t, e) {
            让 s = e;
            const i = this.getdata(t);
            如果我）
                尝试 {
                    s = JSON.parse(this.getdata(t))
                } 抓住 {}
            返回
        }
        setjson(t, e) {
            尝试 {
                返回 this.setdata(JSON.stringify(t), e)
            } 抓住 {
                返回 !1
            }
        }
        获取脚本（t）{
            返回新的承诺（e => {
                this.get({
                    网址：t
                }, (t, s, i) => e(i))
            })
        }
        运行脚本（t，e）{
            返回新的承诺（s => {
                让 i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                我=我？i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20,
                r = e && e.timeout ? e.超时：r;
                const[o, h] = i.split("@"),
                一 = {
                    网址：`http://${h}/v1/scripting/evaluate`，
                    身体： {
                        脚本文本：t，
                        模拟类型：“cron”，
                        超时：r
                    },
                    标题：{
                        “X 键”：o，
                        接受： ”*/*”
                    }
                };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        加载数据（）{
            如果 (!this.isNode())
                返回 {}; {
                这个.fs = 这个.fs ? this.fs : 需要("fs"),
                this.path = this.path ？this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                e = this.path.resolve(process.cwd(), this.dataFile),
                s = this.fs.existsSync(t),
                i = !s && this.fs.existsSync(e);
                如果 (!s && !i)
                    返回 {}; {
                    常量 i = s ? t : e;
                    尝试 {
                        返回 JSON.parse(this.fs.readFileSync(i))
                    }赶上（吨）{
                        返回 {}
                    }
                }
            }
        }
        写数据（）{
            如果 (this.isNode()) {
                这个.fs = 这个.fs ? this.fs : 需要("fs"),
                this.path = this.path ？this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                e = this.path.resolve(process.cwd(), this.dataFile),
                s = this.fs.existsSync(t),
                i = !s && this.fs.existsSync(e),
                r = JSON.stringify(this.data);
                ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            让 r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r)
                    返回 s;
            返回
        }
        lodash_set(t, e, s) {
            返回对象(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1)。 reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        获取数据（t）{
            让 e = this.getval(t);
            如果 (/^@/.test(t)) {
                const[, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                r = s ? this.getval(s) : "";
                如果 (r)
                    尝试 {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, "") : e
                    }赶上（吨）{
                        e = ""
                    }
            }
            返回 e
        }
        设置数据（t，e）{
            让 s = !1;
            如果 (/^@/.test(e)) {
                const[, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                o = this.getval(i),
                h = ? “空” === o ? 空：o || “{}”：“{}”；
                尝试 {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                    s = this.setval(JSON.stringify(e), i)
                }赶上（e）{
                    const o = {};
                    this.lodash_set(o, r, t),
                    s = this.setval(JSON.stringify(o), i)
                }
            } 别的
                s = this.setval(t, e);
            返回
        }
        获取值（t）{
            返回 this.isSurge() || this.isLoon() ？$persistentStore.read(t) : this.isQuanX() ？$prefs.valueForKey(t) : this.isNode() ？(this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || 空值
        }
        setval(t, e) {
            返回 this.isSurge() || this.isLoon() ？$persistentStore.write(t, e) : this.isQuanX() ？$prefs.setValueForKey(t, e) : this.isNode() ？(this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || 空值
        }
        initGotEnv(t) {
            this.got = this.got ？this.got : require("got"),
            this.cktough = this.cktough ? this.cktough : require("tough-cookie"),
            this.ckjar = this.ckjar ? this.ckjar : 新的 this.cktough.CookieJar,
            t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => {})) {
            t.headers && (删除 t.headers["Content-Type"], 删除 t.headers["Content-Length"]),
            this.isSurge() || this.isLoon() ？(this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                        “X-Surge-Skip-Scripting”：!1
                    })), $httpClient.get(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                    e(t, s, i)
                })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                        提示：！1
                    })), $task.fetch(t).then(t => {
                    常量{
                        状态代码：s，
                        状态代码：我，
                        标题：r，
                        身体：o
                    } = t;
                    电子（空，{
                        状态：s，
                        状态代码：我，
                        标题：r，
                        身体：o
                    }, o)
                }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                    尝试 {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            this.ckjar.setCookieSync(s, null),
                            e.cookieJar = this.ckjar
                        }
                    }赶上（吨）{
                        this.logErr(t)
                    }
                }).then(t => {
                    常量{
                        状态代码：s，
                        状态代码：我，
                        标题：r，
                        身体：o
                    } = t;
                    电子（空，{
                        状态：s，
                        状态代码：我，
                        标题：r，
                        身体：o
                    }, o)
                }, t => {
                    常量{
                        消息：s，
                        回复：我
                    } = t;
                    e(s, i, i && i.body)
                }))
        }
        post(t, e = (() => {})) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && 删除 t.headers["Content-Length"], this.isSurge() || this.isLoon())
                this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                        “X-Surge-Skip-Scripting”：!1
                    })), $httpClient.post(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                    e(t, s, i)
                });
            否则如果 (this.isQuanX())
                t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                        提示：！1
                    })), $task.fetch(t).then(t => {
                    常量{
                        状态代码：s，
                        状态代码：我，
                        标题：r，
                        身体：o
                    } = t;
                    电子（空，{
                        状态：s，
                        状态代码：我，
                        标题：r，
                        身体：o
                    }, o)
                }, t => e(t));
            否则如果 (this.isNode()) {
                this.initGotEnv(t);
                常量{
                    网址：s，
                    ...一世
                } = t;
                this.got.post(s, i).then(t => {
                    常量{
                        状态代码：s，
                        状态代码：我，
                        标题：r，
                        身体：o
                    } = t;
                    电子（空，{
                        状态：s，
                        状态代码：我，
                        标题：r，
                        身体：o
                    }, o)
                }, t => {
                    常量{
                        消息：s，
                        回复：我
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        时间（t）{
            让 e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (新日期).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (新日期).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length));
            对于（让 s 输入 e）
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e [s]).substr(("" + e[s]).length)));
            返回
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                如果（！t）
                    返回 t;
                if ("string" == typeof t)
                    返回 this.isLoon() ？t : this.isQuanX() ？{
                        “打开网址”：t
                    }
                 : this.isSurge() ？{
                    网址：t
                }
                 : 无效 0;
                if ("object" == typeof t) {
                    如果 (this.isLoon()) {
                        让 e = t.openUrl || 网址 || t["打开网址"],
                        s = t.mediaUrl || t[“媒体网址”]；
                        返回 {
                            openUrl: e,
                            媒体网址：s
                        }
                    }
                    如果（this.isQuanX（））{
                        让 e = t["open-url"] || 网址 || t.openUrl,
                        s = t["媒体网址"] || t.mediaUrl;
                        返回 {
                            “打开网址”：e，
                            “媒体网址”：s
                        }
                    }
                    如果（this.isSurge（））{
                        让 e = t.url || t.openUrl || t["打开网址"];
                        返回 {
                            网址：e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r) ));
            让 h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3============ =="];
            h.push(e),
            s && h.push(s),
            i && h.push(i),
            console.log(h.join("\n")),
            this.logs = this.logs.concat(h)
        }
        日志（...t）{
            t.length > 0 && (this.logs = [...this.logs, ...t]),
            console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        等待（吨）{
            return new Promise(e => setTimeout(e, t))
        }
        完成（t = {}）{
            const e = (new Date).getTime(),
            s = (e - this.startTime) / 1e3;
            this.log("", `${this.name}\u811a\u672c, \u6267\u884c\u7ed3\u675f!\u7528\u65f6${s}\u79d2`),
            this.log(),
            (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }
    (t, e)
}
const $ = new Env('youthshare');
�� md5 = require('md5-node');
������ʱ�䣻
��wxck;
������=��https://focus.youth.cn/article/s?signature=LrNmbVzoOlxeyXw4pvm0ZgHe9yjMszx5QgRaM8ZkP3BAW9pJqD&uid=56141571&phone_code=18b670bf674d2aa5f6c4536508fd4bf7&scid=39239392&time=1625449279&app_version=2.0.0&sign=f893d2c35dcfd516cc3f92185568e781��
��https://focus.youth.cn/article/s?signature=XwoQBWe23qDAVz946lXbz9Tm3vKOTkzb8vzavNyb8EMlgYnm6k&uid=56141571&phone_code=18b670bf674d2aa5f6c4536508fd4bf7&scid=39247733&time=1625449320&app_version=2.0.0&sign=cbfb1464d1a8aea68818b6954a37de8a��
��https://focus.youth.cn/article/s?signature=Wn8Pym36L9l0Yoz1y9OBMxI8XWqGUYX25eV1xKXjQqgZBMVdDe&uid=56141571&phone_code=18b670bf674d2aa5f6c4536508fd4bf7&scid=39244601&time=1625449370&app_version=2.0.0&sign=4118fd2c1e5abce2dc2500586f83a839��
��https://focus.youth.cn/article/s?signature=j6LwoklONRyQvgd4k05wnZfqjgVdcjvR99578M9zV2YP3KBGAe&uid=56141571&phone_code=18b670bf674d2aa5f6c4536508fd4bf7&scid=39245460&time=1625449390&app_version=2.0.0&sign=1813f885afdfdccc445e269b7b03884a��]

�ñ������£�


�ñ��� = {
    "Accept-Encoding": "gzip, deflate, br",
    �����ܡ��� ��*/*����
    "����": "���ֻ",
    "�Ƽ���": "https://focus.youth.cn/",
    "Host": "script.baertt.com",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.2(0x18000231) NetType/WIFI Language/zh_CN ����
    ������-���ԡ�����zh-cn��
};

!(�첽() => {
    for (�� i = 0; i < ����.����; i++) {
		encodearticles = encodeURIComponent(encodeURIComponent(articles[i]));
        nowTime = new Date().getTime();
        wxck = md5(nowTime);
        $.log(wxck);
		
        �ȴ��洢������
        �ȴ� $.wait(3000);

        �ȴ����ʣ�����
        �ȴ� $.wait(3000);

        �ȴ���ҳ�棨����
        �ȴ� $.wait(3000);

        �ȴ��ص�������
        �ȴ� $.wait(3000);

    }
})()
.catch((e) => $.logErr(e))
.finally(() => $.done())

�����洢����{

    �����µĳ�ŵ����������ܾ���=> {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/storage?t=${wxck}&referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp2`;
        �������� = {
            ��ַ����ַ��
            ���⣺���⣬
        };

        $.get(request, function (error, response, data) {
            ���� {
                $.log(����);
            }���ϣ�e��{
                $.log(e)
            }
            �������;
        })
    })
}

�������ʣ���{

    �����µĳ�ŵ����������ܾ���=> {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/visit?type=1&si=${wxck}&referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp3`;

        �������� = {
            ��ַ����ַ��
            ���⣺���⣬
        };

        $.get(request, function (error, response, data) {
            ���� {
                $.log(����);
            }���ϣ�e��{
                $.log(e)
            }
            �������;
        })
    })
}

���� openpage() {
    �����µĳ�ŵ����������ܾ���=> {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/openpage?referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp5`;
        �������� = {
            ��ַ����ַ��
            ���⣺���⣬

        };

        $.get(request, function (error, response, data) {
            ���� {
                $.log(����);
            }���ϣ�e��{
                $.log(e)
            }
            �������;
        })
    })
}

�����ص�����{
    �����µĳ�ŵ����������ܾ���=> {
        nowTime = new Date().getTime();
        const url = `https://script.baertt.com/count2/callback?si=${wxck}&referer=${encodearticles}&_=${nowTime}&jsonpcallback=jsonp6`;
        �������� = {
            ��ַ����ַ��
            ���⣺���⣬
        };

        $.get(request, function (error, response, data) {
            ���� {
                $.log(����);
            }���ϣ�e��{
                $.log(e)
            }
            �������;
        })
    })
}

���� Env(t, e) {
    �� {
        ���캯����t��{
            this.env = t
        }
        ���ͣ�t��e =��GET����{
            t = "string" == typeof t ? {
                ��ַ��t
            }
             ���֣�
            �� s = this.get;
            ���� "POST" === e && (s = this.post),
            �³�ŵ((e, i) => {
                s.call(this, t, (t, s, r) => {
                    ? i(t) : e(s)
                })
            })
        }
        �õ����֣�{
            ���� this.send.call(this.env, t)
        }
        �󣨶֣�{
            ���� this.send.call(this.env, t, "POST")
        }
    }
    ��������{
        ���캯����t��e��{
            this.name = t,
            this.http = new s(this),
            this.data = �գ�
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
            ���ء�δ���塱��= typeof module && !!module.exports
        }
        isQuanX() {
            ���ء�δ���塱��= typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            ���ء�δ���塱��= typeof $loon
        }
        toObj(t, e = null) {
            ���� {
                ���� JSON.parse(t)
            } ץס {
                ���� e
            }
        }
        toStr(t, e = null) {
            ���� {
                ���� JSON.stringify(t)
            } ץס {
                ���� e
            }
        }
        getjson(t, e) {
            �� s = e;
            const i = this.getdata(t);
            ����ң�
                ���� {
                    s = JSON.parse(this.getdata(t))
                } ץס {}
            ����
        }
        setjson(t, e) {
            ���� {
                ���� this.setdata(JSON.stringify(t), e)
            } ץס {
                ���� !1
            }
        }
        ��ȡ�ű���t��{
            �����µĳ�ŵ��e => {
                this.get({
                    ��ַ��t
                }, (t, s, i) => e(i))
            })
        }
        ���нű���t��e��{
            �����µĳ�ŵ��s => {
                �� i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                ��=�ң�i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20,
                r = e && e.timeout ? e.��ʱ��r;
                const[o, h] = i.split("@"),
                һ = {
                    ��ַ��`http://${h}/v1/scripting/evaluate`��
                    ���壺 {
                        �ű��ı���t��
                        ģ�����ͣ���cron����
                        ��ʱ��r
                    },
                    ���⣺{
                        ��X ������o��
                        ���ܣ� ��*/*��
                    }
                };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        �������ݣ���{
            ��� (!this.isNode())
                ���� {}; {
                ���.fs = ���.fs ? this.fs : ��Ҫ("fs"),
                this.path = this.path ��this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                e = this.path.resolve(process.cwd(), this.dataFile),
                s = this.fs.existsSync(t),
                i = !s && this.fs.existsSync(e);
                ��� (!s && !i)
                    ���� {}; {
                    ���� i = s ? t : e;
                    ���� {
                        ���� JSON.parse(this.fs.readFileSync(i))
                    }���ϣ��֣�{
                        ���� {}
                    }
                }
            }
        }
        д���ݣ���{
            ��� (this.isNode()) {
                ���.fs = ���.fs ? this.fs : ��Ҫ("fs"),
                this.path = this.path ��this.path : require("path");
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
            �� r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r)
                    ���� s;
            ����
        }
        lodash_set(t, e, s) {
            ���ض���(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1)�� reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        ��ȡ���ݣ�t��{
            �� e = this.getval(t);
            ��� (/^@/.test(t)) {
                const[, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
                r = s ? this.getval(s) : "";
                ��� (r)
                    ���� {
                        const t = JSON.parse(r);
                        e = t ? this.lodash_get(t, i, "") : e
                    }���ϣ��֣�{
                        e = ""
                    }
            }
            ���� e
        }
        �������ݣ�t��e��{
            �� s = !1;
            ��� (/^@/.test(e)) {
                const[, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
                o = this.getval(i),
                h = ? ���ա� === o ? �գ�o || ��{}������{}����
                ���� {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t),
                    s = this.setval(JSON.stringify(e), i)
                }���ϣ�e��{
                    const o = {};
                    this.lodash_set(o, r, t),
                    s = this.setval(JSON.stringify(o), i)
                }
            } ���
                s = this.setval(t, e);
            ����
        }
        ��ȡֵ��t��{
            ���� this.isSurge() || this.isLoon() ��$persistentStore.read(t) : this.isQuanX() ��$prefs.valueForKey(t) : this.isNode() ��(this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || ��ֵ
        }
        setval(t, e) {
            ���� this.isSurge() || this.isLoon() ��$persistentStore.write(t, e) : this.isQuanX() ��$prefs.setValueForKey(t, e) : this.isNode() ��(this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || ��ֵ
        }
        initGotEnv(t) {
            this.got = this.got ��this.got : require("got"),
            this.cktough = this.cktough ? this.cktough : require("tough-cookie"),
            this.ckjar = this.ckjar ? this.ckjar : �µ� this.cktough.CookieJar,
            t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => {})) {
            t.headers && (ɾ�� t.headers["Content-Type"], ɾ�� t.headers["Content-Length"]),
            this.isSurge() || this.isLoon() ��(this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                        ��X-Surge-Skip-Scripting����!1
                    })), $httpClient.get(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                    e(t, s, i)
                })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                        ��ʾ����1
                    })), $task.fetch(t).then(t => {
                    ����{
                        ״̬���룺s��
                        ״̬���룺�ң�
                        ���⣺r��
                        ���壺o
                    } = t;
                    ���ӣ��գ�{
                        ״̬��s��
                        ״̬���룺�ң�
                        ���⣺r��
                        ���壺o
                    }, o)
                }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                    ���� {
                        if (t.headers["set-cookie"]) {
                            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                            this.ckjar.setCookieSync(s, null),
                            e.cookieJar = this.ckjar
                        }
                    }���ϣ��֣�{
                        this.logErr(t)
                    }
                }).then(t => {
                    ����{
                        ״̬���룺s��
                        ״̬���룺�ң�
                        ���⣺r��
                        ���壺o
                    } = t;
                    ���ӣ��գ�{
                        ״̬��s��
                        ״̬���룺�ң�
                        ���⣺r��
                        ���壺o
                    }, o)
                }, t => {
                    ����{
                        ��Ϣ��s��
                        �ظ�����
                    } = t;
                    e(s, i, i && i.body)
                }))
        }
        post(t, e = (() => {})) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && ɾ�� t.headers["Content-Length"], this.isSurge() || this.isLoon())
                this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                        ��X-Surge-Skip-Scripting����!1
                    })), $httpClient.post(t, (t, s, i) => {
                    !t && s && (s.body = i, s.statusCode = s.status),
                    e(t, s, i)
                });
            ������� (this.isQuanX())
                t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                        ��ʾ����1
                    })), $task.fetch(t).then(t => {
                    ����{
                        ״̬���룺s��
                        ״̬���룺�ң�
                        ���⣺r��
                        ���壺o
                    } = t;
                    ���ӣ��գ�{
                        ״̬��s��
                        ״̬���룺�ң�
                        ���⣺r��
                        ���壺o
                    }, o)
                }, t => e(t));
            ������� (this.isNode()) {
                this.initGotEnv(t);
                ����{
                    ��ַ��s��
                    ...һ��
                } = t;
                this.got.post(s, i).then(t => {
                    ����{
                        ״̬���룺s��
                        ״̬���룺�ң�
                        ���⣺r��
                        ���壺o
                    } = t;
                    ���ӣ��գ�{
                        ״̬��s��
                        ״̬���룺�ң�
                        ���⣺r��
                        ���壺o
                    }, o)
                }, t => {
                    ����{
                        ��Ϣ��s��
                        �ظ�����
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        ʱ�䣨t��{
            �� e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (������).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (������).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length));
            ���ڣ��� s ���� e��
                new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e [s]).substr(("" + e[s]).length)));
            ����
        }
        msg(e = t, s = "", i = "", r) {
            const o = t => {
                �������t��
                    ���� t;
                if ("string" == typeof t)
                    ���� this.isLoon() ��t : this.isQuanX() ��{
                        ������ַ����t
                    }
                 : this.isSurge() ��{
                    ��ַ��t
                }
                 : ��Ч 0;
                if ("object" == typeof t) {
                    ��� (this.isLoon()) {
                        �� e = t.openUrl || ��ַ || t["����ַ"],
                        s = t.mediaUrl || t[��ý����ַ��]��
                        ���� {
                            openUrl: e,
                            ý����ַ��s
                        }
                    }
                    �����this.isQuanX������{
                        �� e = t["open-url"] || ��ַ || t.openUrl,
                        s = t["ý����ַ"] || t.mediaUrl;
                        ���� {
                            ������ַ����e��
                            ��ý����ַ����s
                        }
                    }
                    �����this.isSurge������{
                        �� e = t.url || t.openUrl || t["����ַ"];
                        ���� {
                            ��ַ��e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r) ));
            �� h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3============ =="];
            h.push(e),
            s && h.push(s),
            i && h.push(i),
            console.log(h.join("\n")),
            this.logs = this.logs.concat(h)
        }
        ��־��...t��{
            t.length > 0 && (this.logs = [...this.logs, ...t]),
            console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        �ȴ����֣�{
            return new Promise(e => setTimeout(e, t))
        }
        ��ɣ�t = {}��{
            const e = (new Date).getTime(),
            s = (e - this.startTime) / 1e3;
            this.log("", `${this.name}\u811a\u672c, \u6267\u884c\u7ed3\u675f!\u7528\u65f6${s}\u79d2`),
            this.log(),
            (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }
    (t, e)
}
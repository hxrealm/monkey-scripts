// ==UserScript==
// @name         拼多多接口数据自动生成工具
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Xiao Niu
// @match        https://mms.pinduoduo.com/sycm/stores_data/operation
// @icon         data:image/png;base64,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
// @run-at       document-start
// @grant        unsafeWindow
// ==/UserScript==

(function () {
  "use strict";
  const originFetch = fetch;
  unsafeWindow.fetch = (url, ...rest) => {
    if (url.indexOf("/sydney/api/mallInfo/mallPayList") > -1) {
      return originFetch(url, ...rest).then(async (response) => {
        var res = await response.json();
        const radixNum = 5;
        Object.assign(res.result, {
          curPayOrdrAmt: Number(res.result.curPayOrdrAmt * radixNum).toFixed(2),
          lastPayOrdrAmt: Number(res.result.lastPayOrdrAmt * radixNum).toFixed(2),
          curPayOrdrUsrCnt: Number(res.result.curPayOrdrUsrCnt * radixNum).toFixed(0),
          lastPayOrdrUsrCnt: Number(res.result.lastPayOrdrUsrCnt * radixNum).toFixed(0),
          curPayOrdrCnt: Number(res.result.curPayOrdrCnt * radixNum).toFixed(0),
          lastPayOrdrCnt: Number(res.result.lastPayOrdrCnt * radixNum).toFixed(0),
        });

        res.result.payList.map((item) => {
          if (item.curPayOrdrAmt) {
            item.curPayOrdrAmt = item.curCfmOrdrAmt * radixNum;
          }
          if (item.lastPayOrdrAmt) {
            item.lastPayOrdrAmt = item.lastPayOrdrAmt * radixNum;
          }
          return item;
        });
        var blob = new Blob([JSON.stringify(res, null, 2)], {
          type: "application/json",
        });
        var init = { status: 200 };

        return new Response(blob, init);
      });
    }

    if (
      url.indexOf("/sydney/api/mallInfo/queryMallDataPageOverViewList") > -1
    ) {
      return originFetch(url, ...rest).then(async (response) => {
        var res = await response.json();
          const radixNum = 2.5;
        res.result.map((item) => {
          item.payOrdrAmt = item.payOrdrAmt * radixNum;
        });
        var blob = new Blob([JSON.stringify(res, null, 2)], {
          type: "application/json",
        });
        var init = { status: 200 };

        return new Response(blob, init);
      });
    }

    if (url.indexOf("/sydney/api/mallInfo/queryMallDataPageOverView") > -1) {
      return originFetch(url, ...rest).then(async (response) => {
        var res = await response.json();
        const radixNum = 2.5;
        Object.assign(res.result, {
          // 支付金额
          payOrdrAmt: Number(Number(434727.07 * radixNum).toFixed(2)).toLocaleString("en-US"),
          payOrdrAmtPct: "15.54%",
          payOrdrAmtPctRised: false,
          payOrdrAmtIsPercent: true,
          // 支付买家数
          payOrdrUsrCnt: Number(Number(56981 * radixNum).toFixed(0)).toLocaleString("en-US"),
          payOrdrUsrCntPct: "18.09%",
          payOrdrUsrCntPctRised: false,
          payOrdrUsrCntIsPercent: true,
          // 支付客单价
          payOrdrAup: "7.63",
          payOrdrAupPct: "3.11%",
          payOrdrAupPctRised: true,
          payOrdrAupIsPercent: true,
          // 支付转化率
          payUvRto: "8.82%",
          payUvRtoPct: "31.09%",
          payUvRtoPctRised: false,
          payUvRtoIsPercent: true,
          // 店铺关注用户数
          mallFavCnt: Number(Number(639 * radixNum).toFixed(0)).toLocaleString("en-US"),
          mallFavCntPct: "10.17%",
          mallFavCntPctRised: true,
          mallFavCntIsPercent: true,
          // 支付订单数
          payOrdrCnt: Number(Number(64972 * radixNum).toFixed(0)).toLocaleString("en-US"),
          payOrdrCntPct: "18.77%",
          payOrdrCntPctRised: false,
          payOrdrCntIsPercent: true,
          // 老买家占比
          rpayOrdrUsrRto: "-",
          rpayOrdrUsrRtoPct: "-",
          rpayOrdrUsrRtoPctRised: false,
          rpayOrdrUsrRtoIsPercent: true,
        });
        var blob = new Blob([JSON.stringify(res, null, 2)], {
          type: "application/json",
        });
        var init = { status: 200 };

        return new Response(blob, init);
      });
    }

    return originFetch(url, ...rest);
  };
})();

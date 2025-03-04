手机安装reqable，光速虚拟机

手机安装reqable的pem证书，这个是用户证书，然后把.0证书导入虚拟机里

虚拟机里mt管理器的shell运行：
mount -o remount,rw /system

cp 9ad09d0f.0 /system/etc/security/cacerts/
这里的9ad09d0f.0 是路径

chmod +644 /system/etc/security/cacerts/9ad09d0f.0 

上两图是手机截图

然后手机reqable就能看虚拟机里app的api了

比如我打开这个首页页面
，
`https://api.bilibili.com/pgc/page/channel?appkey=1d8b6e7d45233436&build=8340200&c_locale=zh_CN&channel=rongyao&disable_rcmd=0&fnval=272&fnver=0&fourk=0&mobi_app=android&page_name=bangumi_tab&platform=android&s_locale=zh_CN&statistics=%7B%22appId%22%3A1%2C%22platform%22%3A3%2C%22version%22%3A%228.34.0%22%2C%22abtest%22%3A%22%22%7D&ts=17411&sign=`

教程：

HttpCanary+光速虚拟机实现免root抓取&重写https请求 | 韶华尐沐 https://ds6666.fun/2024/06/07/HttpCanary-%E5%85%89%E9%80%9F%E8%99%9A%E6%8B%9F%E6%9C%BA%E5%AE%9E%E7%8E%B0%E5%85%8Droot%E6%8A%93%E5%8F%96-%E9%87%8D%E5%86%99https%E8%AF%B7%E6%B1%82


https://api.bilibili.com/pgc/page/channel?appkey=1d8b6e7d45233436&build=8340200&fnval=272&fourk=0&mobi_app=android&page_name=bangumi_tab

响应：

<details>
<summary>样例</summary>

```json
{
  "code": 0,
  "data": {
    "has_next": 1,
    "modules": [
      {
        "id": 2015,
        "module_data": {
          "items": [
            {
              "bg_img": "https://i0.hdslb.com/bfs/bangumi/image/0f28b4a36e15dd5fb2c81c934f48fd4bf0376257.png",
              "cover": "https://i0.hdslb.com/bfs/bangumi/image/0241d0b925c6891877dc8702ec8f6ca1f7533183.png",
              "item_type": "focus_img",
              "oid": 10000000000527150,
              "report": {
                "content_type": "0",
                "index": "1",
                "material_no": "10000000000527150",
                "module_area": "content",
                "module_id": "2015",
                "oid": "10000000000527150",
                "page_id": "185",
                "season_id": ""
              },
              "sub_title": "丹术比试",
              "title": "神道帝尊",
              "url": "https://www.bilibili.com/bangumi/play/ep1111674?from_spmid=pgc.bangumi-tab.banner.0"
            },
            {
              "bg_img": "https://i0.hdslb.com/bfs/bangumi/image/8a7b8e1ffa00dc30982fab3d4d95426056e899fa.png",
              "cover": "https://i0.hdslb.com/bfs/bangumi/image/df8088e3a238d59639ddfcd3229778978e0ce198.png",
              "item_type": "focus_img",
              "oid": 10000000000511583,
              "report": {
                "content_type": "0",
                "index": "2",
                "material_no": "10000000000511583",
                "module_area": "content",
                "module_id": "2015",
                "oid": "10000000000511583",
                "page_id": "185",
                "season_id": ""
              },
              "sub_title": "日常8 坂本商店对战研究所",
              "title": "坂本日常",
              "url": "https://www.bilibili.com/bangumi/play/ep1450347?from_spmid=pgc.bangumi-tab.banner.0"
            },
            {
              "bg_img": "https://i0.hdslb.com/bfs/bangumi/image/7b23ab5cbc73d89d86ee92b065a15afb0a1df430.jpg",
              "cover": "https://i0.hdslb.com/bfs/bangumi/image/0254a2bab661747a2c9188d11a0f71e676753f90.png",
              "item_type": "focus_img",
              "oid": 10000000000511821,
              "report": {
                "content_type": "0",
                "index": "3",
                "material_no": "10000000000511821",
                "module_area": "content",
                "module_id": "2015",
                "oid": "10000000000511821",
                "page_id": "185",
                "season_id": ""
              },
              "sub_title": "风花雪月",
              "title": "宗门里除了我都是卧底",
              "url": "https://www.bilibili.com/bangumi/play/ep838334?from_spmid=pgc.bangumi-tab.banner.0"
            },
            {
              "bg_img": "https://i0.hdslb.com/bfs/bangumi/image/d8e1fde0bcacbe7b13f937cc920daa40374f9755.png",
              "cover": "https://i0.hdslb.com/bfs/bangumi/image/0aa77fbebefa3ca2ea7e2be734cfbb50f2f6f69a.png",
              "item_type": "focus_img",
              "oid": 10000000000530490,
              "report": {
                "content_type": "0",
                "index": "4",
                "material_no": "10000000000530490",
                "module_area": "content",
                "module_id": "2015",
                "oid": "10000000000530490",
                "page_id": "185",
                "season_id": ""
              },
              "sub_title": "第17话 混着鬼牌的同花顺",
              "title": "香格里拉边境 第二季",
              "url": "https://www.bilibili.com/bangumi/play/ep1489484?from_spmid=pgc.bangumi-tab.banner.0"
            },
            {
              "bg_img": "https://i0.hdslb.com/bfs/bangumi/image/38c897f74aeb6420f17c464d262995825810651d.jpg",
              "cover": "https://i0.hdslb.com/bfs/bangumi/image/f455587c5787d480041387cee68768c90dfa5df9.png",
              "item_type": "focus_img",
              "oid": 10000000000515508,
              "report": {
                "content_type": "0",
                "index": "5",
                "material_no": "10000000000515508",
                "module_area": "content",
                "module_id": "2015",
                "oid": "10000000000515508",
                "page_id": "185",
                "season_id": ""
              },
              "sub_title": "不夜城",
              "title": "牧神记",
              "url": "https://www.bilibili.com/bangumi/play/ep1192445?from_spmid=pgc.bangumi-tab.banner.0"
            },
            {
              "bg_img": "https://i0.hdslb.com/bfs/bangumi/image/3155452d8fccaa414cf4d05d0711d5254c9419bb.jpg",
              "cover": "https://i0.hdslb.com/bfs/bangumi/image/180bf56319f838afa8449dac0c5a56ec53938924.png",
              "item_type": "focus_img",
              "oid": 10000000000521181,
              "report": {
                "content_type": "0",
                "index": "6",
                "material_no": "10000000000521181",
                "module_area": "content",
                "module_id": "2015",
                "oid": "10000000000521181",
                "page_id": "185",
                "season_id": ""
              },
              "sub_title": "解连环",
              "title": "长歌行",
              "url": "https://www.bilibili.com/bangumi/play/ep1451341?from_spmid=pgc.bangumi-tab.banner.0"
            },
            {
              "bg_img": "https://i0.hdslb.com/bfs/bangumi/image/83425c54c631d7d1c7949dd4f1b1574cdbadf10a.jpg",
              "cover": "https://i0.hdslb.com/bfs/bangumi/image/a34ecfc3e5a5be6fe34e286160ba46ba32db6e7a.png",
              "item_type": "focus_img",
              "oid": 10000000000511653,
              "report": {
                "content_type": "0",
                "index": "7",
                "material_no": "10000000000511653",
                "module_area": "content",
                "module_id": "2015",
                "oid": "10000000000511653",
                "page_id": "185",
                "season_id": ""
              },
              "sub_title": "出奇制胜 夺宝认主",
              "title": "凡人修仙传",
              "url": "https://www.bilibili.com/bangumi/play/ep1231540?from_spmid=pgc.bangumi-tab.banner.0"
            },
            {
              "bg_img": "https://i0.hdslb.com/bfs/bangumi/image/5585335e23e5478a7fcac379573baa36354eed3b.png",
              "cover": "https://i0.hdslb.com/bfs/bangumi/image/8633d4b75c47d8c3083ccdff102c8699db09b2a4.png",
              "item_type": "focus_img",
              "oid": 10000000000511666,
              "report": {
                "content_type": "0",
                "index": "8",
                "material_no": "10000000000511666",
                "module_area": "content",
                "module_id": "2015",
                "oid": "10000000000511666",
                "page_id": "185",
                "season_id": ""
              },
              "sub_title": "「绝命勿怪/新三号的忧郁」",
              "title": "地缚少年花子君 第二季",
              "url": "https://www.bilibili.com/bangumi/play/ep1467271?from_spmid=pgc.bangumi-tab.banner.0"
            },
            {
              "bg_img": "https://i0.hdslb.com/bfs/bangumi/image/bf35e940b3ce02815a09914d598cc958b101c5ed.jpg",
              "cover": "https://i0.hdslb.com/bfs/bangumi/image/44dd5ff805a348e5f3a89475d7f3f617846964dc.png",
              "item_type": "focus_img",
              "oid": 10000000000511221,
              "report": {
                "content_type": "0",
                "index": "9",
                "material_no": "10000000000511221",
                "module_area": "content",
                "module_id": "2015",
                "oid": "10000000000511221",
                "page_id": "185",
                "season_id": ""
              },
              "sub_title": "柳暗花明",
              "title": "镇魂街 第四季",
              "url": "https://www.bilibili.com/bangumi/play/ep1114885?from_spmid=pgc.bangumi-tab.banner.0"
            },
            {
              "bg_img": "https://i0.hdslb.com/bfs/bangumi/image/b9870c58d159403c5b088d6a3ae97cc6a6556ffc.png",
              "cover": "https://i0.hdslb.com/bfs/bangumi/image/c1ce4ffe7a915ae03b11ffd6e30ce43aaae4d799.png",
              "item_type": "focus_img",
              "oid": 10000000000506370,
              "report": {
                "content_type": "0",
                "index": "10",
                "material_no": "10000000000506370",
                "module_area": "content",
                "module_id": "2015",
                "oid": "10000000000506370",
                "page_id": "185",
                "season_id": ""
              },
              "sub_title": "曲目09 关西的豪强(下)",
              "title": "金牌得主",
              "url": "https://www.bilibili.com/bangumi/play/ep1450351?from_spmid=pgc.bangumi-tab.banner.0"
            },
            {
              "bg_img": "https://i0.hdslb.com/bfs/bangumi/image/03f36fb2d5dda58574d23545a66a0ec8159ce0a8.jpg",
              "cover": "https://i0.hdslb.com/bfs/bangumi/image/9fcbde2048ba67a838ec9ef6bf8ef1ad168a9864.png",
              "item_type": "focus_img",
              "oid": 10000000000511991,
              "report": {
                "content_type": "0",
                "index": "11",
                "material_no": "10000000000511991",
                "module_area": "content",
                "module_id": "2015",
                "oid": "10000000000511991",
                "page_id": "185",
                "season_id": ""
              },
              "sub_title": "虎魄重生，破劫而行",
              "title": "虎鹤妖师录",
              "url": "https://www.bilibili.com/bangumi/play/ep836587?from_spmid=pgc.bangumi-tab.banner.0"
            },
            {
              "bg_img": "https://i0.hdslb.com/bfs/bangumi/image/c0e764f3da46b7cfbaf4e29fe9d54c507898729b.png",
              "cover": "https://i0.hdslb.com/bfs/bangumi/image/c40b20ff3e9afeefc86e5e62312adda1dc5b90e6.png",
              "item_type": "focus_img",
              "oid": 10000000000495029,
              "report": {
                "content_type": "0",
                "index": "12",
                "material_no": "10000000000495029",
                "module_area": "content",
                "module_id": "2015",
                "oid": "10000000000495029",
                "page_id": "185",
                "season_id": ""
              },
              "sub_title": "第9话 君若离去，我不独生。",
              "title": "颂乐人偶",
              "url": "https://www.bilibili.com/bangumi/play/ep1424711?from_spmid=pgc.bangumi-tab.banner.0"
            }
          ],
          "sub_title": ""
        },
        "report": {
          "module_area": "module",
          "module_id": "2015",
          "module_type": "banner"
        },
        "title": "banner（12帧）",
        "type": "BANNER"
      },
      {
        "id": 1986,
        "module_data": {
          "items": [
            {
              "oid": 10000000000205582,
              "report": {
                "index": "1",
                "material_no": "10000000000205582",
                "module_area": "content",
                "module_id": "1986"
              },
              "title": "找番看",
              "url": "bilibili://pgc/bangumi/index?from_spmid=pgc.bangumi-tab.jingang.10000000000205582"
            },
            {
              "oid": 10000000000205585,
              "report": {
                "index": "2",
                "material_no": "10000000000205585",
                "module_area": "content",
                "module_id": "1986"
              },
              "title": "时间表",
              "url": "bilibili://pgc/timeline?from_spmid=pgc.bangumi-tab.jingang.10000000000205585"
            },
            {
              "oid": 10000000000205583,
              "report": {
                "index": "3",
                "material_no": "10000000000205583",
                "module_area": "content",
                "module_id": "1986"
              },
              "title": "番剧",
              "url": "bilibili://pgc/partition_page?page_name=bangumi-operation&title=%E7%95%AA%E5%89%A7&select_id=1&from_spmid=pgc.bangumi-tab.jingang.10000000000205583"
            },
            {
              "oid": 10000000000205584,
              "report": {
                "index": "4",
                "material_no": "10000000000205584",
                "module_area": "content",
                "module_id": "1986"
              },
              "title": "国创",
              "url": "bilibili://pgc/partition_page?page_name=gc-operation&title=%E5%9B%BD%E5%88%9B&select_id=1&from_spmid=pgc.bangumi-tab.jingang.10000000000205584"
            },
            {
              "oid": 10000000000205586,
              "report": {
                "index": "5",
                "material_no": "10000000000205586",
                "module_area": "content",
                "module_id": "1986"
              },
              "title": "少儿",
              "url": "bilibili://pgc/partition_page?page_name=children-operation&title=少儿&from_spmid=pgc.bangumi-tab.jingang.10000000000205586"
            },
            {
              "oid": 10000000000272230,
              "report": {
                "index": "6",
                "material_no": "10000000000272230",
                "module_area": "content",
                "module_id": "1986"
              },
              "title": "冬季导视",
              "url": "https://www.bilibili.com/blackboard/topic/activity-YBvQrDBKYy.html?from_spmid=pgc.bangumi-tab.jingang.10000000000272230"
            }
          ],
          "sub_title": ""
        },
        "report": {
          "module_area": "module",
          "module_id": "1986",
          "module_type": "function_text"
        },
        "title": "金刚位（新版）",
        "type": "FUNCTION_TEXT"
      },
      {
        "id": 1962,
        "module_data": {
          "headers": [
            {
              "title": "更多榜单",
              "url": "bilibili://pgc/new_rank_list_page?index_id=101&rank_id=118"
            }
          ],
          "items": [
            {
              "report": {
                "content_type": "0",
                "index": "1",
                "module_area": "content",
                "module_id": "1962",
                "oid": "",
                "rank_id": "118",
                "season_id": "",
                "tab_type": "1"
              },
              "sub_items": [
                {
                  "cover": "https://i0.hdslb.com/bfs/bangumi/image/41a63442ba47c07f3edeb8169b4d0cc217812e7f.png",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/c30b41907e4f672bf1882400a0ddc49d4e420827.png",
                  "new_ep": {
                    "index_show": "更新至6话"
                  },
                  "oid": 80763,
                  "report": {
                    "content_type": "0",
                    "index": "1",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "80763",
                    "rank_id": "118",
                    "season_id": "80763",
                    "tab_type": "1"
                  },
                  "season_id": 80763,
                  "season_type": 1,
                  "sub_title": "暗影君王再临！",
                  "title": "我独自升级 第二季 -起于暗影-",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss80763?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "https://i0.hdslb.com/bfs/bangumi/image/9d731a02054c4807cc0a01fc7768f87d0bab10c1.png",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/b74b4fb243291d48598a07f0c4c04147a1757c24.png",
                  "new_ep": {
                    "index_show": "更新至8话"
                  },
                  "oid": 76122,
                  "report": {
                    "content_type": "0",
                    "index": "2",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "76122",
                    "rank_id": "118",
                    "season_id": "76122",
                    "tab_type": "1"
                  },
                  "season_id": 76122,
                  "season_type": 1,
                  "sub_title": "这个杀手不太瘦",
                  "title": "坂本日常",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss76122?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "https://i0.hdslb.com/bfs/bangumi/image/23fabc7d3b53912eb53672ffb6b5379d77b97980.png",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/3904224681581242696b57dde7ef54b0acc99ec5.png",
                  "new_ep": {
                    "index_show": "更新至9话"
                  },
                  "oid": 73081,
                  "report": {
                    "content_type": "0",
                    "index": "3",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "73081",
                    "rank_id": "118",
                    "season_id": "73081",
                    "tab_type": "1"
                  },
                  "season_id": 73081,
                  "season_type": 1,
                  "sub_title": "MyGO续篇故事",
                  "title": "颂乐人偶",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss73081?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "https://i0.hdslb.com/bfs/bangumi/image/8f3bf6b461ad4dfae2a221e5b194415d5f7ca697.png",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/c2fbbe3b086a5598e48622eb842abcefebfe0738.png",
                  "new_ep": {
                    "index_show": "更新至25话"
                  },
                  "oid": 48810,
                  "report": {
                    "content_type": "0",
                    "index": "4",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "48810",
                    "rank_id": "118",
                    "season_id": "48810",
                    "tab_type": "1"
                  },
                  "season_id": 48810,
                  "season_type": 1,
                  "sub_title": "令和第六作假面骑士",
                  "title": "假面骑士加布",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss48810?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "https://i0.hdslb.com/bfs/bangumi/image/f1aaf3bac9821935c72643da4b1f1c8db0fcc903.png",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/480252b6b9aca6f28f17703759a1ae2a7257655b.png",
                  "new_ep": {
                    "index_show": "更新至5话"
                  },
                  "oid": 76110,
                  "report": {
                    "content_type": "0",
                    "index": "5",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "76110",
                    "rank_id": "118",
                    "season_id": "76110",
                    "tab_type": "1"
                  },
                  "season_id": 76110,
                  "season_type": 1,
                  "sub_title": "源起厕所的校园怪谈",
                  "title": "地缚少年花子君 第二季",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss76110?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "https://i0.hdslb.com/bfs/bangumi/image/834bdb5d36c401179b9e91fdc1de520a6664c2a7.png",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/da205ed00cd562024da5f8b64eeb4fbf55d11233.png",
                  "new_ep": {
                    "index_show": "更新至8话"
                  },
                  "oid": 80512,
                  "report": {
                    "content_type": "0",
                    "index": "6",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "80512",
                    "rank_id": "118",
                    "season_id": "80512",
                    "tab_type": "1"
                  },
                  "season_id": 80512,
                  "season_type": 1,
                  "sub_title": "穿越百夜，仰望千空",
                  "title": "Ｄｒ．ＳＴＯＮＥ 石纪元 (第四季)",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss80512?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "https://i0.hdslb.com/bfs/bangumi/image/d2c1d3d379d385b2c6abcffd48a55a93deb6889d.png",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/b268ef9d7fa136662a60c021a8a20d03e6824824.png",
                  "new_ep": {
                    "index_show": "更新至9话"
                  },
                  "oid": 76133,
                  "report": {
                    "content_type": "0",
                    "index": "7",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "76133",
                    "rank_id": "118",
                    "season_id": "76133",
                    "tab_type": "1"
                  },
                  "season_id": 76133,
                  "season_type": 1,
                  "sub_title": "教练，我想学滑冰！",
                  "title": "金牌得主",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss76133?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "https://i0.hdslb.com/bfs/bangumi/image/4903bfced5e901f14bf823fd2c6b50381711f6a9.jpg",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/68c95828019e9200f5bf76c89c76b61dff48814b.png",
                  "new_ep": {
                    "index_show": "更新至1话"
                  },
                  "oid": 68583,
                  "report": {
                    "content_type": "0",
                    "index": "8",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "68583",
                    "rank_id": "118",
                    "season_id": "68583",
                    "tab_type": "1"
                  },
                  "season_id": 68583,
                  "season_type": 1,
                  "sub_title": "赛博世界东山再起",
                  "title": "魔王2099",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss68583?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "https://i0.hdslb.com/bfs/bangumi/image/9c716a761afd055e6b65c96aac7880d2a960dd0b.png",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/001beb3d9790cd8a0dd3dbc4c1455991605484a9.png",
                  "new_ep": {
                    "index_show": "更新至66话"
                  },
                  "oid": 48852,
                  "report": {
                    "content_type": "0",
                    "index": "9",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "48852",
                    "rank_id": "118",
                    "season_id": "48852",
                    "tab_type": "1"
                  },
                  "season_id": 48852,
                  "season_type": 1,
                  "sub_title": "危机渐显，萌王速归",
                  "title": "关于我转生变成史莱姆这档事 第三季",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss48852?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "https://i0.hdslb.com/bfs/bangumi/image/767c2e58f5fe2622cfae15597c91d66b9b19b77e.png",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/510c079d5b5b1bfa32c98b16072a444ee7960bee.png",
                  "new_ep": {
                    "index_show": "全45话"
                  },
                  "oid": 88050,
                  "report": {
                    "content_type": "0",
                    "index": "10",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "88050",
                    "rank_id": "118",
                    "season_id": "88050",
                    "tab_type": "1"
                  },
                  "season_id": 88050,
                  "season_type": 1,
                  "sub_title": "天才医生变身骑士",
                  "title": "假面骑士艾克赛德",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss88050?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                }
              ],
              "title": "番剧榜",
              "type": "PGC",
              "url": "bilibili://pgc/new_rank_list_page?index_id=101&rank_id=118&from_spmid=pgc.bangumi-tab.hot-ranklist.0"
            },
            {
              "report": {
                "content_type": "0",
                "index": "2",
                "module_area": "content",
                "module_id": "1962",
                "oid": "",
                "rank_id": "119",
                "season_id": "",
                "tab_type": "4"
              },
              "sub_items": [
                {
                  "cover": "https://i0.hdslb.com/bfs/bangumi/image/ee347bb7ec67696bce514d51b4cef55a5e192284.png",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/c30b41907e4f672bf1882400a0ddc49d4e420827.png",
                  "new_ep": {
                    "index_show": "更新至132话"
                  },
                  "oid": 28747,
                  "report": {
                    "content_type": "0",
                    "index": "1",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "28747",
                    "rank_id": "119",
                    "season_id": "28747",
                    "tab_type": "4"
                  },
                  "season_id": 28747,
                  "season_type": 4,
                  "sub_title": "韩立驰骋外海震乾坤",
                  "title": "凡人修仙传",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss28747?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "https://i0.hdslb.com/bfs/bangumi/image/4f5b819331320d3b06a80442484c549022fd70bc.png",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/b74b4fb243291d48598a07f0c4c04147a1757c24.png",
                  "new_ep": {
                    "index_show": "更新至20话"
                  },
                  "oid": 45969,
                  "report": {
                    "content_type": "0",
                    "index": "2",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "45969",
                    "rank_id": "119",
                    "season_id": "45969",
                    "tab_type": "4"
                  },
                  "season_id": 45969,
                  "season_type": 4,
                  "sub_title": "放牛少年，放牧诸神",
                  "title": "牧神记",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss45969?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "https://i0.hdslb.com/bfs/bangumi/image/b38ef52744dca9356e9a5ef877692ae5376bfcae.png",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/3904224681581242696b57dde7ef54b0acc99ec5.png",
                  "new_ep": {
                    "index_show": "更新至46话"
                  },
                  "oid": 48518,
                  "report": {
                    "content_type": "0",
                    "index": "3",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "48518",
                    "rank_id": "119",
                    "season_id": "48518",
                    "tab_type": "4"
                  },
                  "season_id": 48518,
                  "season_type": 4,
                  "sub_title": "宗门游戏，坐等开玩",
                  "title": "宗门里除了我都是卧底",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss48518?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "https://i0.hdslb.com/bfs/bangumi/image/22c53b77405270b079b95ad6400d6d6bfd1de377.jpg",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/c2fbbe3b086a5598e48622eb842abcefebfe0738.png",
                  "new_ep": {
                    "index_show": "更新至16话"
                  },
                  "oid": 48578,
                  "report": {
                    "content_type": "0",
                    "index": "4",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "48578",
                    "rank_id": "119",
                    "season_id": "48578",
                    "tab_type": "4"
                  },
                  "season_id": 48578,
                  "season_type": 4,
                  "sub_title": "天武风雷，群英大战",
                  "title": "镇魂街 第四季",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss48578?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "https://i0.hdslb.com/bfs/bangumi/image/805a8ea9208c7370327e6c4411981c509650b83b.png",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/480252b6b9aca6f28f17703759a1ae2a7257655b.png",
                  "new_ep": {
                    "index_show": "更新至23话"
                  },
                  "oid": 45960,
                  "report": {
                    "content_type": "0",
                    "index": "5",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "45960",
                    "rank_id": "119",
                    "season_id": "45960",
                    "tab_type": "4"
                  },
                  "season_id": 45960,
                  "season_type": 4,
                  "sub_title": "妖师之名，降魔之义",
                  "title": "虎鹤妖师录",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss45960?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "http://i0.hdslb.com/bfs/bangumi/image/8f96b3cb7a5018f7fb077549248568e2fcac3b2a.jpg",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/da205ed00cd562024da5f8b64eeb4fbf55d11233.png",
                  "new_ep": {
                    "index_show": "全96话"
                  },
                  "oid": 24298,
                  "report": {
                    "content_type": "0",
                    "index": "6",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "24298",
                    "rank_id": "119",
                    "season_id": "24298",
                    "tab_type": "4"
                  },
                  "season_id": 24298,
                  "season_type": 4,
                  "sub_title": "神话人物的日常生活",
                  "title": "非人哉",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss24298?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "https://i0.hdslb.com/bfs/bangumi/image/739a202bc7dd0efc2d9c7d2a130dd705324f928f.png",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/b268ef9d7fa136662a60c021a8a20d03e6824824.png",
                  "new_ep": {
                    "index_show": "更新至56话"
                  },
                  "oid": 35213,
                  "report": {
                    "content_type": "0",
                    "index": "7",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "35213",
                    "rank_id": "119",
                    "season_id": "35213",
                    "tab_type": "4"
                  },
                  "season_id": 35213,
                  "season_type": 4,
                  "sub_title": "仙魔双修，唯我独尊",
                  "title": "永生",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss35213?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "https://i0.hdslb.com/bfs/bangumi/image/bd3100db3be48dbbcd32bffa4286429950f9a5cc.jpg",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/68c95828019e9200f5bf76c89c76b61dff48814b.png",
                  "new_ep": {
                    "index_show": "更新至44话"
                  },
                  "oid": 48519,
                  "report": {
                    "content_type": "0",
                    "index": "8",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "48519",
                    "rank_id": "119",
                    "season_id": "48519",
                    "tab_type": "4"
                  },
                  "season_id": 48519,
                  "season_type": 4,
                  "sub_title": "少年重生，星门传奇",
                  "title": "神道帝尊",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss48519?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "https://i0.hdslb.com/bfs/bangumi/image/63541931ab0d7a0ad32e86e2c1c668ece0f70dcd.jpg",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/001beb3d9790cd8a0dd3dbc4c1455991605484a9.png",
                  "new_ep": {
                    "index_show": "更新至8话"
                  },
                  "oid": 72937,
                  "report": {
                    "content_type": "0",
                    "index": "9",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "72937",
                    "rank_id": "119",
                    "season_id": "72937",
                    "tab_type": "4"
                  },
                  "season_id": 72937,
                  "season_type": 4,
                  "sub_title": "世人笃信梦",
                  "title": "火凤燎原 第二季",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss72937?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "http://i0.hdslb.com/bfs/bangumi/image/dbf13f1b3a55d9adc9fe5dcfc095b9835aabdef2.jpg",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/510c079d5b5b1bfa32c98b16072a444ee7960bee.png",
                  "new_ep": {
                    "index_show": ""
                  },
                  "oid": 43547,
                  "report": {
                    "content_type": "0",
                    "index": "10",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "43547",
                    "rank_id": "119",
                    "season_id": "43547",
                    "tab_type": "4"
                  },
                  "season_id": 43547,
                  "season_type": 4,
                  "sub_title": "镇魂将至，故人归来",
                  "title": "镇魂街 第三季",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss43547?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                }
              ],
              "title": "国创榜",
              "type": "PGC",
              "url": "bilibili://pgc/new_rank_list_page?index_id=101&rank_id=119&from_spmid=pgc.bangumi-tab.hot-ranklist.0"
            },
            {
              "report": {
                "avid": "",
                "content_type": "1",
                "index": "3",
                "module_area": "content",
                "module_id": "1962",
                "oid": "",
                "rank_id": "322",
                "season_id": "",
                "tab_type": ""
              },
              "sub_items": [
                {
                  "cover": "http://i1.hdslb.com/bfs/archive/757171f3456d61e192a00925853bea864389ca94.jpg",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/c30b41907e4f672bf1882400a0ddc49d4e420827.png",
                  "oid": 114081512030262,
                  "report": {
                    "avid": "114081512030262",
                    "content_type": "1",
                    "index": "1",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "114081512030262",
                    "rank_id": "322",
                    "season_id": "",
                    "tab_type": ""
                  },
                  "title": "【独家】《凡人修仙传之外海风云》第09集预告【总第133集预告】",
                  "type": "UGC",
                  "upper": {
                    "image": "https://i2.hdslb.com/bfs/face/ae8149db0fe146563cdbf7ff346eb9bb3dc25a12.jpg",
                    "mid": 98627270,
                    "up_name": "哔哩哔哩国创"
                  },
                  "url": "https://www.bilibili.com/bangumi/play/ep1391832?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "http://i1.hdslb.com/bfs/archive/e5b2ed536241f46f2f60138219915e1b81586b4e.png",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/b74b4fb243291d48598a07f0c4c04147a1757c24.png",
                  "oid": 114085404348408,
                  "report": {
                    "avid": "114085404348408",
                    "content_type": "1",
                    "index": "2",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "114085404348408",
                    "rank_id": "322",
                    "season_id": "",
                    "tab_type": ""
                  },
                  "title": "【独家】牧神记 第21集预告【10月国创】",
                  "type": "UGC",
                  "upper": {
                    "image": "https://i2.hdslb.com/bfs/face/ae8149db0fe146563cdbf7ff346eb9bb3dc25a12.jpg",
                    "mid": 98627270,
                    "up_name": "哔哩哔哩国创"
                  },
                  "url": "https://www.bilibili.com/bangumi/play/ep1112297?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "http://i2.hdslb.com/bfs/archive/e45ac577e73d40d99f2ed06d919a2f843b084b2f.png",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/3904224681581242696b57dde7ef54b0acc99ec5.png",
                  "oid": 114076344785383,
                  "report": {
                    "avid": "114076344785383",
                    "content_type": "1",
                    "index": "3",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "114076344785383",
                    "rank_id": "322",
                    "season_id": "",
                    "tab_type": ""
                  },
                  "title": "【1月】颂乐人偶 第9话「不要把小祥从我身边抢走」【中文字幕】",
                  "type": "UGC",
                  "upper": {
                    "image": "https://i1.hdslb.com/bfs/face/ff445d09efe51be21b6d8170e746699899fb9c52.jpg",
                    "mid": 224267770,
                    "up_name": "夏日幻听MCE"
                  },
                  "url": "https://www.bilibili.com/video/av114076344785383?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "http://i1.hdslb.com/bfs/archive/c5049942dd331e3d0ef7d00aeaeb2d4d60ae0906.jpg",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/c2fbbe3b086a5598e48622eb842abcefebfe0738.png",
                  "oid": 114080102746802,
                  "report": {
                    "avid": "114080102746802",
                    "content_type": "1",
                    "index": "4",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "114080102746802",
                    "rank_id": "322",
                    "season_id": "",
                    "tab_type": ""
                  },
                  "title": "【独家】镇魂街 第四季 第17集预告 死生悠茫【11月国创】",
                  "type": "UGC",
                  "upper": {
                    "image": "https://i2.hdslb.com/bfs/face/ae8149db0fe146563cdbf7ff346eb9bb3dc25a12.jpg",
                    "mid": 98627270,
                    "up_name": "哔哩哔哩国创"
                  },
                  "url": "https://www.bilibili.com/bangumi/play/ep1115470?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "http://i1.hdslb.com/bfs/archive/17cd6863d37c0731dcfbdea9dcc7f76651f461fe.jpg",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/480252b6b9aca6f28f17703759a1ae2a7257655b.png",
                  "oid": 114086763305770,
                  "report": {
                    "avid": "114086763305770",
                    "content_type": "1",
                    "index": "5",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "114086763305770",
                    "rank_id": "322",
                    "season_id": "",
                    "tab_type": ""
                  },
                  "title": "【7月/剧场版/中字首发】鬼灭之刃 无限城篇 第一章 PV【MCE汉化组】",
                  "type": "UGC",
                  "upper": {
                    "image": "https://i1.hdslb.com/bfs/face/ff445d09efe51be21b6d8170e746699899fb9c52.jpg",
                    "mid": 224267770,
                    "up_name": "夏日幻听MCE"
                  },
                  "url": "https://www.bilibili.com/video/av114086763305770?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "http://i0.hdslb.com/bfs/archive/4a4627fa6bfeb7f36004abdf4288875d29af67d6.jpg",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/da205ed00cd562024da5f8b64eeb4fbf55d11233.png",
                  "oid": 114075472239124,
                  "report": {
                    "avid": "114075472239124",
                    "content_type": "1",
                    "index": "6",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "114075472239124",
                    "rank_id": "322",
                    "season_id": "",
                    "tab_type": ""
                  },
                  "title": "【3月14日/新作OVA】为美好的世界献上祝福S3 BONUS STAGE 正式预告PV【MCE汉化组】",
                  "type": "UGC",
                  "upper": {
                    "image": "https://i1.hdslb.com/bfs/face/ff445d09efe51be21b6d8170e746699899fb9c52.jpg",
                    "mid": 224267770,
                    "up_name": "夏日幻听MCE"
                  },
                  "url": "https://www.bilibili.com/video/av114075472239124?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "http://i1.hdslb.com/bfs/archive/e2340ffae326be49c6e4cc47e59fcbba76c14e8c.png",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/b268ef9d7fa136662a60c021a8a20d03e6824824.png",
                  "oid": 114087451169438,
                  "report": {
                    "avid": "114087451169438",
                    "content_type": "1",
                    "index": "7",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "114087451169438",
                    "rank_id": "322",
                    "season_id": "",
                    "tab_type": ""
                  },
                  "title": "【3月/官方联动】路飞 vs 洛杉矶湖人队 特别联动映像【MCE汉化组】",
                  "type": "UGC",
                  "upper": {
                    "image": "https://i1.hdslb.com/bfs/face/ff445d09efe51be21b6d8170e746699899fb9c52.jpg",
                    "mid": 224267770,
                    "up_name": "夏日幻听MCE"
                  },
                  "url": "https://www.bilibili.com/video/av114087451169438?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "http://i1.hdslb.com/bfs/archive/c348fe7326dbd8654d541abfa5c219393fa48d32.jpg",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/68c95828019e9200f5bf76c89c76b61dff48814b.png",
                  "oid": 114067620500650,
                  "report": {
                    "avid": "114067620500650",
                    "content_type": "1",
                    "index": "8",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "114067620500650",
                    "rank_id": "322",
                    "season_id": "",
                    "tab_type": ""
                  },
                  "title": "【4月18日/剧场版/M28】名侦探柯南：独眼的残像 正式预告PV【MCE汉化组】",
                  "type": "UGC",
                  "upper": {
                    "image": "https://i1.hdslb.com/bfs/face/ff445d09efe51be21b6d8170e746699899fb9c52.jpg",
                    "mid": 224267770,
                    "up_name": "夏日幻听MCE"
                  },
                  "url": "https://www.bilibili.com/video/av114067620500650?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "http://i0.hdslb.com/bfs/archive/d37cd8e42fecc0ccf992ac20128f274f3723d633.png",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/001beb3d9790cd8a0dd3dbc4c1455991605484a9.png",
                  "oid": 114104211675523,
                  "report": {
                    "avid": "114104211675523",
                    "content_type": "1",
                    "index": "9",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "114104211675523",
                    "rank_id": "322",
                    "season_id": "",
                    "tab_type": ""
                  },
                  "title": "【TV动画】败犬女主太多了！第二季 制作决定 情报告知【MCE汉化组】",
                  "type": "UGC",
                  "upper": {
                    "image": "https://i1.hdslb.com/bfs/face/ff445d09efe51be21b6d8170e746699899fb9c52.jpg",
                    "mid": 224267770,
                    "up_name": "夏日幻听MCE"
                  },
                  "url": "https://www.bilibili.com/video/av114104211675523?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "http://i0.hdslb.com/bfs/archive/b259c63338c46d698f549ec018b14b24c6450ea4.png",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/510c079d5b5b1bfa32c98b16072a444ee7960bee.png",
                  "oid": 114092685728257,
                  "report": {
                    "avid": "114092685728257",
                    "content_type": "1",
                    "index": "10",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "114092685728257",
                    "rank_id": "322",
                    "season_id": "",
                    "tab_type": ""
                  },
                  "title": "【4月/霸权社/青山刚昌】剑勇传说 / 九龙珠 重制版 正式PV【MCE汉化组】",
                  "type": "UGC",
                  "upper": {
                    "image": "https://i1.hdslb.com/bfs/face/ff445d09efe51be21b6d8170e746699899fb9c52.jpg",
                    "mid": 224267770,
                    "up_name": "夏日幻听MCE"
                  },
                  "url": "https://www.bilibili.com/video/av114092685728257?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                }
              ],
              "title": "资讯榜",
              "type": "UGC",
              "url": "bilibili://pgc/new_rank_list_page?index_id=101&rank_id=322&from_spmid=pgc.bangumi-tab.hot-ranklist.0"
            },
            {
              "report": {
                "content_type": "0",
                "index": "4",
                "module_area": "content",
                "module_id": "1962",
                "oid": "",
                "rank_id": "302",
                "season_id": "",
                "tab_type": "4"
              },
              "sub_items": [
                {
                  "cover": "https://i0.hdslb.com/bfs/bangumi/image/4f5b819331320d3b06a80442484c549022fd70bc.png",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/c30b41907e4f672bf1882400a0ddc49d4e420827.png",
                  "new_ep": {
                    "index_show": "更新至20话"
                  },
                  "oid": 45969,
                  "report": {
                    "content_type": "0",
                    "index": "1",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "45969",
                    "rank_id": "302",
                    "season_id": "45969",
                    "tab_type": "4"
                  },
                  "season_id": 45969,
                  "season_type": 4,
                  "sub_title": "放牛少年，放牧诸神",
                  "title": "牧神记",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss45969?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "https://i0.hdslb.com/bfs/bangumi/image/ee347bb7ec67696bce514d51b4cef55a5e192284.png",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/b74b4fb243291d48598a07f0c4c04147a1757c24.png",
                  "new_ep": {
                    "index_show": "更新至132话"
                  },
                  "oid": 28747,
                  "report": {
                    "content_type": "0",
                    "index": "2",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "28747",
                    "rank_id": "302",
                    "season_id": "28747",
                    "tab_type": "4"
                  },
                  "season_id": 28747,
                  "season_type": 4,
                  "sub_title": "韩立驰骋外海震乾坤",
                  "title": "凡人修仙传",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss28747?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "http://i0.hdslb.com/bfs/bangumi/image/38e2a273f528fd01c34f1fc4df0f69c64487efad.png",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/3904224681581242696b57dde7ef54b0acc99ec5.png",
                  "new_ep": {
                    "index_show": "更新至1213话"
                  },
                  "oid": 33415,
                  "report": {
                    "content_type": "0",
                    "index": "3",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "33415",
                    "rank_id": "302",
                    "season_id": "33415",
                    "tab_type": "1"
                  },
                  "season_id": 33415,
                  "season_type": 1,
                  "sub_title": "小学生的侦探生活",
                  "title": "名侦探柯南（中配）",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss33415?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "https://i0.hdslb.com/bfs/bangumi/image/41a63442ba47c07f3edeb8169b4d0cc217812e7f.png",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/c2fbbe3b086a5598e48622eb842abcefebfe0738.png",
                  "new_ep": {
                    "index_show": "更新至6话"
                  },
                  "oid": 80763,
                  "report": {
                    "content_type": "0",
                    "index": "4",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "80763",
                    "rank_id": "302",
                    "season_id": "80763",
                    "tab_type": "1"
                  },
                  "season_id": 80763,
                  "season_type": 1,
                  "sub_title": "暗影君王再临！",
                  "title": "我独自升级 第二季 -起于暗影-",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss80763?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "https://i0.hdslb.com/bfs/bangumi/image/22c53b77405270b079b95ad6400d6d6bfd1de377.jpg",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/480252b6b9aca6f28f17703759a1ae2a7257655b.png",
                  "new_ep": {
                    "index_show": "更新至16话"
                  },
                  "oid": 48578,
                  "report": {
                    "content_type": "0",
                    "index": "5",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "48578",
                    "rank_id": "302",
                    "season_id": "48578",
                    "tab_type": "4"
                  },
                  "season_id": 48578,
                  "season_type": 4,
                  "sub_title": "天武风雷，群英大战",
                  "title": "镇魂街 第四季",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss48578?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "http://i0.hdslb.com/bfs/bangumi/image/38e2a273f528fd01c34f1fc4df0f69c64487efad.png",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/da205ed00cd562024da5f8b64eeb4fbf55d11233.png",
                  "new_ep": {
                    "index_show": "更新至1213话"
                  },
                  "oid": 33378,
                  "report": {
                    "content_type": "0",
                    "index": "6",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "33378",
                    "rank_id": "302",
                    "season_id": "33378",
                    "tab_type": "1"
                  },
                  "season_id": 33378,
                  "season_type": 1,
                  "sub_title": "真相永远只有一个",
                  "title": "名侦探柯南",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss33378?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "https://i0.hdslb.com/bfs/bangumi/image/23fabc7d3b53912eb53672ffb6b5379d77b97980.png",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/b268ef9d7fa136662a60c021a8a20d03e6824824.png",
                  "new_ep": {
                    "index_show": "更新至9话"
                  },
                  "oid": 73081,
                  "report": {
                    "content_type": "0",
                    "index": "7",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "73081",
                    "rank_id": "302",
                    "season_id": "73081",
                    "tab_type": "1"
                  },
                  "season_id": 73081,
                  "season_type": 1,
                  "sub_title": "MyGO续篇故事",
                  "title": "颂乐人偶",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss73081?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "https://i0.hdslb.com/bfs/bangumi/image/8f3bf6b461ad4dfae2a221e5b194415d5f7ca697.png",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/68c95828019e9200f5bf76c89c76b61dff48814b.png",
                  "new_ep": {
                    "index_show": "更新至25话"
                  },
                  "oid": 48810,
                  "report": {
                    "content_type": "0",
                    "index": "8",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "48810",
                    "rank_id": "302",
                    "season_id": "48810",
                    "tab_type": "1"
                  },
                  "season_id": 48810,
                  "season_type": 1,
                  "sub_title": "令和第六作假面骑士",
                  "title": "假面骑士加布",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss48810?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "https://i0.hdslb.com/bfs/bangumi/image/3a3eb31610713c19bed556fa915a2b7776d8c85d.png",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/001beb3d9790cd8a0dd3dbc4c1455991605484a9.png",
                  "new_ep": {
                    "index_show": "全12话"
                  },
                  "oid": 47211,
                  "report": {
                    "content_type": "0",
                    "index": "9",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "47211",
                    "rank_id": "302",
                    "season_id": "47211",
                    "tab_type": "1"
                  },
                  "season_id": 47211,
                  "season_type": 1,
                  "sub_title": "升级后成为最强",
                  "title": "我独自升级",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss47211?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "http://i0.hdslb.com/bfs/bangumi/image/087b862b772ee4e644478a36c757a26db476193d.png",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/510c079d5b5b1bfa32c98b16072a444ee7960bee.png",
                  "new_ep": {
                    "index_show": "全201话"
                  },
                  "oid": 38157,
                  "report": {
                    "content_type": "0",
                    "index": "10",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "38157",
                    "rank_id": "302",
                    "season_id": "38157",
                    "tab_type": "1"
                  },
                  "season_id": 38157,
                  "season_type": 1,
                  "sub_title": "最无厘头的热血动画",
                  "title": "银魂",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss38157?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                }
              ],
              "title": "热搜榜",
              "type": "PGC",
              "url": "bilibili://pgc/new_rank_list_page?index_id=101&rank_id=302&from_spmid=pgc.bangumi-tab.hot-ranklist.0"
            },
            {
              "report": {
                "content_type": "0",
                "index": "5",
                "module_area": "content",
                "module_id": "1962",
                "oid": "",
                "rank_id": "324",
                "season_id": "",
                "tab_type": "4"
              },
              "sub_items": [
                {
                  "cover": "https://i0.hdslb.com/bfs/bangumi/image/4f5b819331320d3b06a80442484c549022fd70bc.png",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/c30b41907e4f672bf1882400a0ddc49d4e420827.png",
                  "new_ep": {
                    "index_show": "更新至20话"
                  },
                  "oid": 45969,
                  "report": {
                    "content_type": "0",
                    "index": "1",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "45969",
                    "rank_id": "324",
                    "season_id": "45969",
                    "tab_type": "4"
                  },
                  "season_id": 45969,
                  "season_type": 4,
                  "sub_title": "放牛少年，放牧诸神",
                  "title": "牧神记",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss45969?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "https://i0.hdslb.com/bfs/bangumi/image/ee347bb7ec67696bce514d51b4cef55a5e192284.png",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/b74b4fb243291d48598a07f0c4c04147a1757c24.png",
                  "new_ep": {
                    "index_show": "更新至132话"
                  },
                  "oid": 28747,
                  "report": {
                    "content_type": "0",
                    "index": "2",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "28747",
                    "rank_id": "324",
                    "season_id": "28747",
                    "tab_type": "4"
                  },
                  "season_id": 28747,
                  "season_type": 4,
                  "sub_title": "韩立驰骋外海震乾坤",
                  "title": "凡人修仙传",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss28747?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "https://i0.hdslb.com/bfs/bangumi/image/41a63442ba47c07f3edeb8169b4d0cc217812e7f.png",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/3904224681581242696b57dde7ef54b0acc99ec5.png",
                  "new_ep": {
                    "index_show": "更新至6话"
                  },
                  "oid": 80763,
                  "report": {
                    "content_type": "0",
                    "index": "3",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "80763",
                    "rank_id": "324",
                    "season_id": "80763",
                    "tab_type": "1"
                  },
                  "season_id": 80763,
                  "season_type": 1,
                  "sub_title": "暗影君王再临！",
                  "title": "我独自升级 第二季 -起于暗影-",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss80763?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "https://i0.hdslb.com/bfs/bangumi/image/3a3eb31610713c19bed556fa915a2b7776d8c85d.png",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/c2fbbe3b086a5598e48622eb842abcefebfe0738.png",
                  "new_ep": {
                    "index_show": "全12话"
                  },
                  "oid": 47211,
                  "report": {
                    "content_type": "0",
                    "index": "4",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "47211",
                    "rank_id": "324",
                    "season_id": "47211",
                    "tab_type": "1"
                  },
                  "season_id": 47211,
                  "season_type": 1,
                  "sub_title": "升级后成为最强",
                  "title": "我独自升级",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss47211?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "https://i0.hdslb.com/bfs/bangumi/image/b38ef52744dca9356e9a5ef877692ae5376bfcae.png",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/480252b6b9aca6f28f17703759a1ae2a7257655b.png",
                  "new_ep": {
                    "index_show": "更新至46话"
                  },
                  "oid": 48518,
                  "report": {
                    "content_type": "0",
                    "index": "5",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "48518",
                    "rank_id": "324",
                    "season_id": "48518",
                    "tab_type": "4"
                  },
                  "season_id": 48518,
                  "season_type": 4,
                  "sub_title": "宗门游戏，坐等开玩",
                  "title": "宗门里除了我都是卧底",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss48518?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "https://i0.hdslb.com/bfs/bangumi/image/22c53b77405270b079b95ad6400d6d6bfd1de377.jpg",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/da205ed00cd562024da5f8b64eeb4fbf55d11233.png",
                  "new_ep": {
                    "index_show": "更新至16话"
                  },
                  "oid": 48578,
                  "report": {
                    "content_type": "0",
                    "index": "6",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "48578",
                    "rank_id": "324",
                    "season_id": "48578",
                    "tab_type": "4"
                  },
                  "season_id": 48578,
                  "season_type": 4,
                  "sub_title": "天武风雷，群英大战",
                  "title": "镇魂街 第四季",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss48578?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "https://i0.hdslb.com/bfs/bangumi/image/9d731a02054c4807cc0a01fc7768f87d0bab10c1.png",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/b268ef9d7fa136662a60c021a8a20d03e6824824.png",
                  "new_ep": {
                    "index_show": "更新至8话"
                  },
                  "oid": 76122,
                  "report": {
                    "content_type": "0",
                    "index": "7",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "76122",
                    "rank_id": "324",
                    "season_id": "76122",
                    "tab_type": "1"
                  },
                  "season_id": 76122,
                  "season_type": 1,
                  "sub_title": "这个杀手不太瘦",
                  "title": "坂本日常",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss76122?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "http://i0.hdslb.com/bfs/bangumi/image/54bb0aa41490093244c33422883729dc36efe146.jpg",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/68c95828019e9200f5bf76c89c76b61dff48814b.png",
                  "new_ep": {
                    "index_show": "全15话"
                  },
                  "oid": 26194,
                  "report": {
                    "content_type": "0",
                    "index": "8",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "26194",
                    "rank_id": "324",
                    "season_id": "26194",
                    "tab_type": "4"
                  },
                  "season_id": 26194,
                  "season_type": 4,
                  "sub_title": "因为太强而苦恼",
                  "title": "仙王的日常生活",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss26194?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "https://i0.hdslb.com/bfs/bangumi/image/23fabc7d3b53912eb53672ffb6b5379d77b97980.png",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/001beb3d9790cd8a0dd3dbc4c1455991605484a9.png",
                  "new_ep": {
                    "index_show": "更新至9话"
                  },
                  "oid": 73081,
                  "report": {
                    "content_type": "0",
                    "index": "9",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "73081",
                    "rank_id": "324",
                    "season_id": "73081",
                    "tab_type": "1"
                  },
                  "season_id": 73081,
                  "season_type": 1,
                  "sub_title": "MyGO续篇故事",
                  "title": "颂乐人偶",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss73081?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                },
                {
                  "cover": "https://i0.hdslb.com/bfs/bangumi/image/739a202bc7dd0efc2d9c7d2a130dd705324f928f.png",
                  "mask_img": "https://i0.hdslb.com/bfs/bangumi/image/510c079d5b5b1bfa32c98b16072a444ee7960bee.png",
                  "new_ep": {
                    "index_show": "更新至56话"
                  },
                  "oid": 35213,
                  "report": {
                    "content_type": "0",
                    "index": "10",
                    "module_area": "content",
                    "module_id": "1962",
                    "oid": "35213",
                    "rank_id": "324",
                    "season_id": "35213",
                    "tab_type": "4"
                  },
                  "season_id": 35213,
                  "season_type": 4,
                  "sub_title": "仙魔双修，唯我独尊",
                  "title": "永生",
                  "type": "PGC",
                  "url": "https://www.bilibili.com/bangumi/play/ss35213?from_spmid=pgc.bangumi-tab.hot-ranklist.0"
                }
              ],
              "title": "会员榜",
              "type": "PGC",
              "url": "bilibili://pgc/new_rank_list_page?index_id=101&rank_id=324&from_spmid=pgc.bangumi-tab.hot-ranklist.0"
            }
          ],
          "sub_title": ""
        },
        "report": {
          "module_area": "module",
          "module_id": "1962",
          "module_type": "rank"
        },
        "title": "热门排行榜",
        "type": "RANK"
      },
      {
        "id": 1963,
        "module_data": {
          "delivery_module_report": {
            "rank_id": "316",
            "scene": "rank_card"
          },
          "headers": [
            {
              "title": "查看更多",
              "url": "bilibili://pgc/new_rank_list_page?index_id=101&rank_id=316"
            }
          ],
          "items": [
            {
              "cover": "https://i0.hdslb.com/bfs/bangumi/image/f1aaf3bac9821935c72643da4b1f1c8db0fcc903.png",
              "new_ep": {
                "index_show": "更新至5话"
              },
              "oid": 76110,
              "report": {
                "content_type": "0",
                "index": "1",
                "module_area": "content",
                "module_id": "1963",
                "oid": "76110",
                "rank_id": "316",
                "season_id": "76110",
                "tab_type": "1"
              },
              "season_id": 76110,
              "season_type": 1,
              "sub_title": "源起厕所的校园怪谈",
              "title": "地缚少年花子君 第二季",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss76110?from_spmid=pgc.bangumi-tab.rank_card.0"
            },
            {
              "cover": "http://i0.hdslb.com/bfs/bangumi/cbb20ee03e97a9f3ad2e1506a10fd1271f1c584a.jpg",
              "new_ep": {
                "index_show": "更新至南国总集篇（五）"
              },
              "oid": 2543,
              "report": {
                "content_type": "0",
                "index": "2",
                "module_area": "content",
                "module_id": "1963",
                "oid": "2543",
                "rank_id": "316",
                "season_id": "2543",
                "tab_type": "4"
              },
              "season_id": 2543,
              "season_type": 4,
              "sub_title": "可爱狐妖为你牵红线",
              "title": "狐妖小红娘",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss2543?from_spmid=pgc.bangumi-tab.rank_card.0"
            },
            {
              "badge_info": {
                "img": "",
                "text_size": 0
              },
              "cover": "http://i0.hdslb.com/bfs/bangumi/0c39256b7c701547a0ce7082740dc082a50c9e68.jpg",
              "new_ep": {
                "index_show": "全167话"
              },
              "oid": 28324,
              "report": {
                "content_type": "0",
                "index": "3",
                "module_area": "content",
                "module_id": "1963",
                "oid": "28324",
                "rank_id": "316",
                "season_id": "28324",
                "tab_type": "1"
              },
              "season_id": 28324,
              "season_type": 1,
              "sub_title": "带你穿越回童年",
              "title": "犬夜叉",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss28324?from_spmid=pgc.bangumi-tab.rank_card.0"
            },
            {
              "cover": "https://i0.hdslb.com/bfs/bangumi/image/1c4c6a37f212f33596ef6c0a5d1afa9d19fd9bf3.png",
              "new_ep": {
                "index_show": "全12话"
              },
              "oid": 48744,
              "report": {
                "content_type": "0",
                "index": "4",
                "module_area": "content",
                "module_id": "1963",
                "oid": "48744",
                "rank_id": "316",
                "season_id": "48744",
                "tab_type": "1"
              },
              "season_id": 48744,
              "season_type": 1,
              "sub_title": "妖怪vs外星人",
              "title": "胆大党",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss48744?from_spmid=pgc.bangumi-tab.rank_card.0"
            },
            {
              "cover": "https://i0.hdslb.com/bfs/bangumi/image/96f9aeb74c9646c318f25bba798462061bd800d7.png",
              "new_ep": {
                "index_show": "全12话"
              },
              "oid": 48011,
              "report": {
                "content_type": "0",
                "index": "5",
                "module_area": "content",
                "module_id": "1963",
                "oid": "48011",
                "rank_id": "316",
                "season_id": "48011",
                "tab_type": "1"
              },
              "season_id": 48011,
              "season_type": 1,
              "sub_title": "俄语传情真真切切",
              "title": "不时用俄语小声说真心话的邻桌艾莉同学",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss48011?from_spmid=pgc.bangumi-tab.rank_card.0"
            },
            {
              "cover": "http://i0.hdslb.com/bfs/bangumi/a7c3fb28b0292abdfbdfa5999b1f15bd7765682c.jpg",
              "new_ep": {
                "index_show": "全21话"
              },
              "oid": 5857,
              "report": {
                "content_type": "0",
                "index": "6",
                "module_area": "content",
                "module_id": "1963",
                "oid": "5857",
                "rank_id": "316",
                "season_id": "5857",
                "tab_type": "4"
              },
              "season_id": 5857,
              "season_type": 4,
              "sub_title": "前世今生阴差阳错",
              "title": "妖怪名单 第二季",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss5857?from_spmid=pgc.bangumi-tab.rank_card.0"
            },
            {
              "cover": "https://i0.hdslb.com/bfs/bangumi/image/443b3a5e16a07ec09f45c0d1b0bc7a8bc90c7294.jpg",
              "new_ep": {
                "index_show": "更新至18话"
              },
              "oid": 48690,
              "report": {
                "content_type": "0",
                "index": "7",
                "module_area": "content",
                "module_id": "1963",
                "oid": "48690",
                "rank_id": "316",
                "season_id": "48690",
                "tab_type": "1"
              },
              "season_id": 48690,
              "season_type": 1,
              "sub_title": "全力以赴的青春物语",
              "title": "青之箱",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss48690?from_spmid=pgc.bangumi-tab.rank_card.0"
            },
            {
              "cover": "http://i0.hdslb.com/bfs/bangumi/image/0310ac2b537fb8aed2eccd95a2762cf48bab0904.png",
              "new_ep": {
                "index_show": "全12话"
              },
              "oid": 29366,
              "report": {
                "content_type": "0",
                "index": "8",
                "module_area": "content",
                "module_id": "1963",
                "oid": "29366",
                "rank_id": "316",
                "season_id": "29366",
                "tab_type": "1"
              },
              "season_id": 29366,
              "season_type": 1,
              "sub_title": "给真相以合理的谎言",
              "title": "虚构推理",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss29366?from_spmid=pgc.bangumi-tab.rank_card.0"
            },
            {
              "cover": "http://i0.hdslb.com/bfs/bangumi/image/3b97bfc609e08417eb391ef975a8648c28c55e04.png",
              "new_ep": {
                "index_show": "全13话"
              },
              "oid": 34230,
              "report": {
                "content_type": "0",
                "index": "9",
                "module_area": "content",
                "module_id": "1963",
                "oid": "34230",
                "rank_id": "316",
                "season_id": "34230",
                "tab_type": "1"
              },
              "season_id": 34230,
              "season_type": 1,
              "sub_title": "开局就结婚？",
              "title": "总之就是非常可爱",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss34230?from_spmid=pgc.bangumi-tab.rank_card.0"
            },
            {
              "cover": "http://i0.hdslb.com/bfs/bangumi/image/039c4e0b14e27c7a9e5cce2f20a6efd3c8909401.png",
              "new_ep": {
                "index_show": "全13话"
              },
              "oid": 36198,
              "report": {
                "content_type": "0",
                "index": "10",
                "module_area": "content",
                "module_id": "1963",
                "oid": "36198",
                "rank_id": "316",
                "season_id": "36198",
                "tab_type": "1"
              },
              "season_id": 36198,
              "season_type": 1,
              "sub_title": "建议改名：我与狗粮",
              "title": "堀与宫村",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss36198?from_spmid=pgc.bangumi-tab.rank_card.0"
            }
          ]
        },
        "report": {
          "module_area": "module",
          "module_id": "1963",
          "module_type": "rank_card"
        },
        "title": "恋爱榜",
        "type": "RANK_CARD"
      },
      {
        "id": 1963,
        "module_data": {
          "delivery_module_report": {
            "rank_id": "320",
            "scene": "rank_card"
          },
          "headers": [
            {
              "title": "查看更多",
              "url": "bilibili://pgc/new_rank_list_page?index_id=101&rank_id=320"
            }
          ],
          "items": [
            {
              "cover": "https://i0.hdslb.com/bfs/bangumi/image/23fabc7d3b53912eb53672ffb6b5379d77b97980.png",
              "new_ep": {
                "index_show": "更新至9话"
              },
              "oid": 73081,
              "report": {
                "content_type": "0",
                "index": "1",
                "module_area": "content",
                "module_id": "1963",
                "oid": "73081",
                "rank_id": "320",
                "season_id": "73081",
                "tab_type": "1"
              },
              "season_id": 73081,
              "season_type": 1,
              "sub_title": "MyGO续篇故事",
              "title": "颂乐人偶",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss73081?from_spmid=pgc.bangumi-tab.rank_card.0"
            },
            {
              "cover": "https://i0.hdslb.com/bfs/bangumi/image/7bd8a0f13532b713d2befc61275ab85bfc66a582.jpg",
              "new_ep": {
                "index_show": "更新至3话"
              },
              "oid": 39660,
              "report": {
                "content_type": "0",
                "index": "2",
                "module_area": "content",
                "module_id": "1963",
                "oid": "39660",
                "rank_id": "320",
                "season_id": "39660",
                "tab_type": "4"
              },
              "season_id": 39660,
              "season_type": 4,
              "sub_title": "少女李长歌成长之路",
              "title": "长歌行",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss39660?from_spmid=pgc.bangumi-tab.rank_card.0"
            },
            {
              "cover": "http://i0.hdslb.com/bfs/bangumi/6f91d0eda4def08546b0d35abf290f9a48e496eb.png",
              "new_ep": {
                "index_show": "全12话"
              },
              "oid": 26295,
              "report": {
                "content_type": "0",
                "index": "3",
                "module_area": "content",
                "module_id": "1963",
                "oid": "26295",
                "rank_id": "320",
                "season_id": "26295",
                "tab_type": "1"
              },
              "season_id": 26295,
              "season_type": 1,
              "sub_title": "欢迎来到加帕里公园",
              "title": "兽娘动物园 2",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss26295?from_spmid=pgc.bangumi-tab.rank_card.0"
            },
            {
              "cover": "https://i0.hdslb.com/bfs/bangumi/image/9c716a761afd055e6b65c96aac7880d2a960dd0b.png",
              "new_ep": {
                "index_show": "更新至66话"
              },
              "oid": 48852,
              "report": {
                "content_type": "0",
                "index": "4",
                "module_area": "content",
                "module_id": "1963",
                "oid": "48852",
                "rank_id": "320",
                "season_id": "48852",
                "tab_type": "1"
              },
              "season_id": 48852,
              "season_type": 1,
              "sub_title": "危机渐显，萌王速归",
              "title": "关于我转生变成史莱姆这档事 第三季",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss48852?from_spmid=pgc.bangumi-tab.rank_card.0"
            },
            {
              "cover": "http://i0.hdslb.com/bfs/bangumi/image/8d3fe4278e6e9d7e3a8a3794f4395066e4529914.png",
              "new_ep": {
                "index_show": "全12话"
              },
              "oid": 34650,
              "report": {
                "content_type": "0",
                "index": "5",
                "module_area": "content",
                "module_id": "1963",
                "oid": "34650",
                "rank_id": "320",
                "season_id": "34650",
                "tab_type": "1"
              },
              "season_id": 34650,
              "season_type": 1,
              "sub_title": "变成帅哥回来复仇！",
              "title": "政宗君的复仇",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss34650?from_spmid=pgc.bangumi-tab.rank_card.0"
            },
            {
              "cover": "https://i0.hdslb.com/bfs/bangumi/image/a50f4e5b7de83c2040a104c6d8bbaaa2bd9fac80.png",
              "new_ep": {
                "index_show": "更新至9话"
              },
              "oid": 46188,
              "report": {
                "content_type": "0",
                "index": "6",
                "module_area": "content",
                "module_id": "1963",
                "oid": "46188",
                "rank_id": "320",
                "season_id": "46188",
                "tab_type": "4"
              },
              "season_id": 46188,
              "season_type": 4,
              "sub_title": "踏破天启城",
              "title": "少年歌行 血染天启篇",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss46188?from_spmid=pgc.bangumi-tab.rank_card.0"
            },
            {
              "cover": "https://i0.hdslb.com/bfs/bangumi/image/4f5b819331320d3b06a80442484c549022fd70bc.png",
              "new_ep": {
                "index_show": "更新至20话"
              },
              "oid": 45969,
              "report": {
                "content_type": "0",
                "index": "7",
                "module_area": "content",
                "module_id": "1963",
                "oid": "45969",
                "rank_id": "320",
                "season_id": "45969",
                "tab_type": "4"
              },
              "season_id": 45969,
              "season_type": 4,
              "sub_title": "放牛少年，放牧诸神",
              "title": "牧神记",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss45969?from_spmid=pgc.bangumi-tab.rank_card.0"
            },
            {
              "badge_info": {
                "img": "",
                "text_size": 0
              },
              "cover": "http://i0.hdslb.com/bfs/bangumi/a20296165901b6402c54d78c42d0c3274fca6cd1.png",
              "new_ep": {
                "index_show": "全25话"
              },
              "oid": 5535,
              "report": {
                "content_type": "0",
                "index": "8",
                "module_area": "content",
                "module_id": "1963",
                "oid": "5535",
                "rank_id": "320",
                "season_id": "5535",
                "tab_type": "1"
              },
              "season_id": 5535,
              "season_type": 1,
              "sub_title": "不要停下来啊！",
              "title": "机动战士高达 铁血的奥尔芬斯 第二季",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss5535?from_spmid=pgc.bangumi-tab.rank_card.0"
            },
            {
              "cover": "https://i0.hdslb.com/bfs/bangumi/image/4cabd72f34ef91408f1f8b7e29a029d59720ee0b.png",
              "new_ep": {
                "index_show": "全13话"
              },
              "oid": 47561,
              "report": {
                "content_type": "0",
                "index": "9",
                "module_area": "content",
                "module_id": "1963",
                "oid": "47561",
                "rank_id": "320",
                "season_id": "47561",
                "tab_type": "1"
              },
              "season_id": 47561,
              "season_type": 1,
              "sub_title": "久美子强校复兴物语",
              "title": "吹响吧！上低音号 第三季",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss47561?from_spmid=pgc.bangumi-tab.rank_card.0"
            },
            {
              "cover": "http://i0.hdslb.com/bfs/bangumi/image/9870f898b8a39bbb8048f34317f8d78a02cc1770.png",
              "new_ep": {
                "index_show": "全15话"
              },
              "oid": 26257,
              "report": {
                "content_type": "0",
                "index": "10",
                "module_area": "content",
                "module_id": "1963",
                "oid": "26257",
                "rank_id": "320",
                "season_id": "26257",
                "tab_type": "4"
              },
              "season_id": 26257,
              "season_type": 4,
              "sub_title": "面壁计划开启",
              "title": "三体",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss26257?from_spmid=pgc.bangumi-tab.rank_card.0"
            }
          ]
        },
        "report": {
          "module_area": "module",
          "module_id": "1963",
          "module_type": "rank_card"
        },
        "title": "热议榜",
        "type": "RANK_CARD"
      },
      {
        "id": 1963,
        "module_data": {
          "delivery_module_report": {
            "rank_id": "314",
            "scene": "rank_card"
          },
          "headers": [
            {
              "title": "查看更多",
              "url": "bilibili://pgc/new_rank_list_page?index_id=101&rank_id=314"
            }
          ],
          "items": [
            {
              "cover": "https://i0.hdslb.com/bfs/bangumi/image/4f5b819331320d3b06a80442484c549022fd70bc.png",
              "new_ep": {
                "index_show": "更新至20话"
              },
              "oid": 45969,
              "report": {
                "content_type": "0",
                "index": "1",
                "module_area": "content",
                "module_id": "1963",
                "oid": "45969",
                "rank_id": "314",
                "season_id": "45969",
                "tab_type": "4"
              },
              "season_id": 45969,
              "season_type": 4,
              "sub_title": "放牛少年，放牧诸神",
              "title": "牧神记",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss45969?from_spmid=pgc.bangumi-tab.rank_card.0"
            },
            {
              "cover": "https://i0.hdslb.com/bfs/bangumi/image/ee347bb7ec67696bce514d51b4cef55a5e192284.png",
              "new_ep": {
                "index_show": "更新至132话"
              },
              "oid": 28747,
              "report": {
                "content_type": "0",
                "index": "2",
                "module_area": "content",
                "module_id": "1963",
                "oid": "28747",
                "rank_id": "314",
                "season_id": "28747",
                "tab_type": "4"
              },
              "season_id": 28747,
              "season_type": 4,
              "sub_title": "韩立驰骋外海震乾坤",
              "title": "凡人修仙传",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss28747?from_spmid=pgc.bangumi-tab.rank_card.0"
            },
            {
              "cover": "https://i0.hdslb.com/bfs/bangumi/image/22c53b77405270b079b95ad6400d6d6bfd1de377.jpg",
              "new_ep": {
                "index_show": "更新至16话"
              },
              "oid": 48578,
              "report": {
                "content_type": "0",
                "index": "3",
                "module_area": "content",
                "module_id": "1963",
                "oid": "48578",
                "rank_id": "314",
                "season_id": "48578",
                "tab_type": "4"
              },
              "season_id": 48578,
              "season_type": 4,
              "sub_title": "天武风雷，群英大战",
              "title": "镇魂街 第四季",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss48578?from_spmid=pgc.bangumi-tab.rank_card.0"
            },
            {
              "cover": "https://i0.hdslb.com/bfs/bangumi/image/9d731a02054c4807cc0a01fc7768f87d0bab10c1.png",
              "new_ep": {
                "index_show": "更新至8话"
              },
              "oid": 76122,
              "report": {
                "content_type": "0",
                "index": "4",
                "module_area": "content",
                "module_id": "1963",
                "oid": "76122",
                "rank_id": "314",
                "season_id": "76122",
                "tab_type": "1"
              },
              "season_id": 76122,
              "season_type": 1,
              "sub_title": "这个杀手不太瘦",
              "title": "坂本日常",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss76122?from_spmid=pgc.bangumi-tab.rank_card.0"
            },
            {
              "cover": "https://i0.hdslb.com/bfs/bangumi/image/805a8ea9208c7370327e6c4411981c509650b83b.png",
              "new_ep": {
                "index_show": "更新至23话"
              },
              "oid": 45960,
              "report": {
                "content_type": "0",
                "index": "5",
                "module_area": "content",
                "module_id": "1963",
                "oid": "45960",
                "rank_id": "314",
                "season_id": "45960",
                "tab_type": "4"
              },
              "season_id": 45960,
              "season_type": 4,
              "sub_title": "妖师之名，降魔之义",
              "title": "虎鹤妖师录",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss45960?from_spmid=pgc.bangumi-tab.rank_card.0"
            },
            {
              "cover": "https://i0.hdslb.com/bfs/bangumi/image/8f3bf6b461ad4dfae2a221e5b194415d5f7ca697.png",
              "new_ep": {
                "index_show": "更新至25话"
              },
              "oid": 48810,
              "report": {
                "content_type": "0",
                "index": "6",
                "module_area": "content",
                "module_id": "1963",
                "oid": "48810",
                "rank_id": "314",
                "season_id": "48810",
                "tab_type": "1"
              },
              "season_id": 48810,
              "season_type": 1,
              "sub_title": "令和第六作假面骑士",
              "title": "假面骑士加布",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss48810?from_spmid=pgc.bangumi-tab.rank_card.0"
            },
            {
              "cover": "https://i0.hdslb.com/bfs/bangumi/image/bd3100db3be48dbbcd32bffa4286429950f9a5cc.jpg",
              "new_ep": {
                "index_show": "更新至44话"
              },
              "oid": 48519,
              "report": {
                "content_type": "0",
                "index": "7",
                "module_area": "content",
                "module_id": "1963",
                "oid": "48519",
                "rank_id": "314",
                "season_id": "48519",
                "tab_type": "4"
              },
              "season_id": 48519,
              "season_type": 4,
              "sub_title": "少年重生，星门传奇",
              "title": "神道帝尊",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss48519?from_spmid=pgc.bangumi-tab.rank_card.0"
            },
            {
              "cover": "http://i0.hdslb.com/bfs/bangumi/image/087b862b772ee4e644478a36c757a26db476193d.png",
              "new_ep": {
                "index_show": "全201话"
              },
              "oid": 38157,
              "report": {
                "content_type": "0",
                "index": "8",
                "module_area": "content",
                "module_id": "1963",
                "oid": "38157",
                "rank_id": "314",
                "season_id": "38157",
                "tab_type": "1"
              },
              "season_id": 38157,
              "season_type": 1,
              "sub_title": "最无厘头的热血动画",
              "title": "银魂",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss38157?from_spmid=pgc.bangumi-tab.rank_card.0"
            },
            {
              "cover": "https://i0.hdslb.com/bfs/bangumi/image/834bdb5d36c401179b9e91fdc1de520a6664c2a7.png",
              "new_ep": {
                "index_show": "更新至8话"
              },
              "oid": 80512,
              "report": {
                "content_type": "0",
                "index": "9",
                "module_area": "content",
                "module_id": "1963",
                "oid": "80512",
                "rank_id": "314",
                "season_id": "80512",
                "tab_type": "1"
              },
              "season_id": 80512,
              "season_type": 1,
              "sub_title": "穿越百夜，仰望千空",
              "title": "Ｄｒ．ＳＴＯＮＥ 石纪元 (第四季)",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss80512?from_spmid=pgc.bangumi-tab.rank_card.0"
            },
            {
              "cover": "https://i0.hdslb.com/bfs/bangumi/image/63541931ab0d7a0ad32e86e2c1c668ece0f70dcd.jpg",
              "new_ep": {
                "index_show": "更新至8话"
              },
              "oid": 72937,
              "report": {
                "content_type": "0",
                "index": "10",
                "module_area": "content",
                "module_id": "1963",
                "oid": "72937",
                "rank_id": "314",
                "season_id": "72937",
                "tab_type": "4"
              },
              "season_id": 72937,
              "season_type": 4,
              "sub_title": "世人笃信梦",
              "title": "火凤燎原 第二季",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss72937?from_spmid=pgc.bangumi-tab.rank_card.0"
            }
          ]
        },
        "report": {
          "module_area": "module",
          "module_id": "1963",
          "module_type": "rank_card"
        },
        "title": "热血榜",
        "type": "RANK_CARD"
      },
      {
        "id": 1963,
        "module_data": {
          "delivery_module_report": {
            "rank_id": "305",
            "scene": "rank_card"
          },
          "headers": [
            {
              "title": "查看更多",
              "url": "bilibili://pgc/new_rank_list_page?index_id=101&rank_id=305"
            }
          ],
          "items": [
            {
              "cover": "http://i0.hdslb.com/bfs/bangumi/image/8f96b3cb7a5018f7fb077549248568e2fcac3b2a.jpg",
              "new_ep": {
                "index_show": "全96话"
              },
              "oid": 24298,
              "report": {
                "content_type": "0",
                "index": "1",
                "module_area": "content",
                "module_id": "1963",
                "oid": "24298",
                "rank_id": "305",
                "season_id": "24298",
                "tab_type": "4"
              },
              "season_id": 24298,
              "season_type": 4,
              "sub_title": "神话人物的日常生活",
              "title": "非人哉",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss24298?from_spmid=pgc.bangumi-tab.rank_card.0"
            },
            {
              "cover": "http://i0.hdslb.com/bfs/bangumi/6d8bd12e0e1ab2d4d5e8567bdba18240e75d7a1b.jpg",
              "new_ep": {
                "index_show": "全873话"
              },
              "oid": 6262,
              "report": {
                "content_type": "0",
                "index": "2",
                "module_area": "content",
                "module_id": "1963",
                "oid": "6262",
                "rank_id": "305",
                "season_id": "6262",
                "tab_type": "1"
              },
              "season_id": 6262,
              "season_type": 1,
              "sub_title": "不想来笑一下吗？",
              "title": "蜡笔小新 第二季（中文）",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss6262?from_spmid=pgc.bangumi-tab.rank_card.0"
            },
            {
              "cover": "https://i0.hdslb.com/bfs/bangumi/image/3a3eb31610713c19bed556fa915a2b7776d8c85d.png",
              "new_ep": {
                "index_show": "全12话"
              },
              "oid": 47211,
              "report": {
                "content_type": "0",
                "index": "3",
                "module_area": "content",
                "module_id": "1963",
                "oid": "47211",
                "rank_id": "305",
                "season_id": "47211",
                "tab_type": "1"
              },
              "season_id": 47211,
              "season_type": 1,
              "sub_title": "升级后成为最强",
              "title": "我独自升级",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss47211?from_spmid=pgc.bangumi-tab.rank_card.0"
            },
            {
              "cover": "http://i0.hdslb.com/bfs/bangumi/image/087b862b772ee4e644478a36c757a26db476193d.png",
              "new_ep": {
                "index_show": "全201话"
              },
              "oid": 38157,
              "report": {
                "content_type": "0",
                "index": "4",
                "module_area": "content",
                "module_id": "1963",
                "oid": "38157",
                "rank_id": "305",
                "season_id": "38157",
                "tab_type": "1"
              },
              "season_id": 38157,
              "season_type": 1,
              "sub_title": "最无厘头的热血动画",
              "title": "银魂",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss38157?from_spmid=pgc.bangumi-tab.rank_card.0"
            },
            {
              "cover": "http://i0.hdslb.com/bfs/bangumi/a406781e410c84bc58154f666ffb409f79c22f57.jpg",
              "new_ep": {
                "index_show": "全480话"
              },
              "oid": 6260,
              "report": {
                "content_type": "0",
                "index": "5",
                "module_area": "content",
                "module_id": "1963",
                "oid": "6260",
                "rank_id": "305",
                "season_id": "6260",
                "tab_type": "1"
              },
              "season_id": 6260,
              "season_type": 1,
              "sub_title": "童年的快乐记忆",
              "title": "蜡笔小新 第一季（中文）",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss6260?from_spmid=pgc.bangumi-tab.rank_card.0"
            },
            {
              "cover": "https://i0.hdslb.com/bfs/bangumi/image/f3ebb500b701a387f5abde67516c5c96bbd2faff.png",
              "new_ep": {
                "index_show": "全28话"
              },
              "oid": 46089,
              "report": {
                "content_type": "0",
                "index": "6",
                "module_area": "content",
                "module_id": "1963",
                "oid": "46089",
                "rank_id": "305",
                "season_id": "46089",
                "tab_type": "1"
              },
              "season_id": 46089,
              "season_type": 1,
              "sub_title": "花海盛开，故人归来",
              "title": "葬送的芙莉莲",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss46089?from_spmid=pgc.bangumi-tab.rank_card.0"
            },
            {
              "cover": "https://i0.hdslb.com/bfs/bangumi/image/8aa38d11d0d174e554903aa6ca24f98fc1c5def7.png",
              "new_ep": {
                "index_show": "全48话"
              },
              "oid": 39947,
              "report": {
                "content_type": "0",
                "index": "7",
                "module_area": "content",
                "module_id": "1963",
                "oid": "39947",
                "rank_id": "305",
                "season_id": "39947",
                "tab_type": "4"
              },
              "season_id": 39947,
              "season_type": 4,
              "sub_title": "神兽下凡，福瑞相伴",
              "title": "有兽焉",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss39947?from_spmid=pgc.bangumi-tab.rank_card.0"
            },
            {
              "cover": "https://i0.hdslb.com/bfs/bangumi/image/7163c73fc8309ba68154ec19c133c9071c94f1d9.jpg",
              "new_ep": {
                "index_show": "全312话"
              },
              "oid": 48031,
              "report": {
                "content_type": "0",
                "index": "8",
                "module_area": "content",
                "module_id": "1963",
                "oid": "48031",
                "rank_id": "305",
                "season_id": "48031",
                "tab_type": "1"
              },
              "season_id": 48031,
              "season_type": 1,
              "sub_title": "无限快乐蜡笔小新",
              "title": "蜡笔小新 第七季（中文）",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss48031?from_spmid=pgc.bangumi-tab.rank_card.0"
            },
            {
              "cover": "http://i0.hdslb.com/bfs/bangumi/image/9870f898b8a39bbb8048f34317f8d78a02cc1770.png",
              "new_ep": {
                "index_show": "全15话"
              },
              "oid": 26257,
              "report": {
                "content_type": "0",
                "index": "9",
                "module_area": "content",
                "module_id": "1963",
                "oid": "26257",
                "rank_id": "305",
                "season_id": "26257",
                "tab_type": "4"
              },
              "season_id": 26257,
              "season_type": 4,
              "sub_title": "面壁计划开启",
              "title": "三体",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss26257?from_spmid=pgc.bangumi-tab.rank_card.0"
            },
            {
              "cover": "https://i0.hdslb.com/bfs/bangumi/image/8cf02211c3fefa4eccc7307ca4fab404707d0cf7.png",
              "new_ep": {
                "index_show": "全24话"
              },
              "oid": 47083,
              "report": {
                "content_type": "0",
                "index": "10",
                "module_area": "content",
                "module_id": "1963",
                "oid": "47083",
                "rank_id": "305",
                "season_id": "47083",
                "tab_type": "1"
              },
              "season_id": 47083,
              "season_type": 1,
              "sub_title": "我在地下城里做吃播",
              "title": "迷宫饭",
              "type": "PGC",
              "url": "https://www.bilibili.com/bangumi/play/ss47083?from_spmid=pgc.bangumi-tab.rank_card.0"
            }
          ]
        },
        "report": {
          "module_area": "module",
          "module_id": "1963",
          "module_type": "rank_card"
        },
        "title": "完结榜",
        "type": "RANK_CARD"
      },
      {
        "id": 400001,
        "module_data": {
          "items": [
            {
              "cover": "http://i0.hdslb.com/bfs/bangumi/image/c8c0b2f47baf2c70d86de295a5b50b3bfe4ef7c7.png",
              "ep_id": 1484821,
              "feedback_content": "{\"material_no\":5191034042846825063}",
              "feedback_source": 2,
              "from_spmid": "pgc.bangumi-tab.recommend.inline",
              "inline_info": {
                "aid": 114086511707498,
                "cid": 28636155637,
                "dimension": {
                  "height": 1080,
                  "rotate": 0,
                  "width": 1920
                },
                "ep_id": 1484821,
                "player_info": {
                  "no_rexcode": 0,
                  "video_project": false,
                  "fnval": 0,
                  "expire_time": 1741129722,
                  "fnver": 0,
                  "backup_url": [],
                  "support_formats": [],
                  "oid": 5191034042846825063,
                  "support_description": [],
                  "url": "http://upos-sz-mirrorcos.bilivideo.com/ogvresxcode/lb/i8/_000000yuy6oas0cgy294jyc0xpri8lb-1-232111110023.mp4?e=ig8euxZM2rNcNbh3hwdVhoMznwdVhwdEto8g5X10ugNcXBlqNCNEto8g5gNvNE3DN0B5tZlqNxTEto8BTrNvN05fqx6S5ahE9IMvXBvE2ENvNCImNEVEK9GVqJIwqa80WXIekXRE9IB5QK==&uipk=5&nbs=1&deadline=1741129722&gen=playurlv2&os=cosbv&oi=3746144122&trid=d254df13a7d94d7eae15e599802be03bG&mid=0&platform=android&upsig=170e1867cab1aada47259a23a51c3bfa&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=0,1&f=G_0_0&logo=80000000",
                  "quality": 32,
                  "accept_formats": [
                    {
                      "display_desc": "1080P",
                      "sub_description": "",
                      "superscript": "",
                      "format": "flv",
                      "description": "高清 1080P",
                      "quality": 80,
                      "new_description": "1080P 高清"
                    },
                    {
                      "display_desc": "720P",
                      "sub_description": "",
                      "superscript": "",
                      "format": "flv720",
                      "description": "高清 720P",
                      "quality": 64,
                      "new_description": "720P 高清"
                    },
                    {
                      "display_desc": "480P",
                      "sub_description": "",
                      "superscript": "",
                      "format": "flv480",
                      "description": "清晰 480P",
                      "quality": 32,
                      "new_description": "480P 清晰"
                    },
                    {
                      "display_desc": "360P",
                      "sub_description": "",
                      "superscript": "",
                      "format": "mp4",
                      "description": "流畅 360P",
                      "quality": 16,
                      "new_description": "360P 流畅"
                    }
                  ],
                  "support_quality": [],
                  "file_info": {
                    "16": {
                      "infos": [
                        {
                          "ahead": "",
                          "vhead": "",
                          "filesize": 1472517,
                          "timelength": 60160,
                          "order": 1
                        }
                      ]
                    },
                    "80": {
                      "infos": [
                        {
                          "ahead": "",
                          "vhead": "",
                          "filesize": 6109390,
                          "timelength": 60096,
                          "order": 1
                        }
                      ]
                    },
                    "64": {
                      "infos": [
                        {
                          "ahead": "",
                          "vhead": "",
                          "filesize": 3793316,
                          "timelength": 60096,
                          "order": 1
                        }
                      ]
                    },
                    "32": {
                      "infos": [
                        {
                          "ahead": "",
                          "vhead": "",
                          "filesize": 2315560,
                          "timelength": 60096,
                          "order": 1
                        }
                      ]
                    }
                  },
                  "video_codecid": 0,
                  "cid": 0
                },
                "season_id": 33378,
                "season_type": 1,
                "video": {
                  "clip_info": {
                    "end": 279,
                    "id": 5191034042846825063,
                    "start": 219
                  },
                  "inline_scene": 2,
                  "inline_type": 2,
                  "total_duration": 1483
                }
              },
              "item_type": "big_card",
              "oid": 1484821,
              "rcmd_oid": 1484821,
              "rcmd_otype": 10,
              "report": {
                "module_area": "content",
                "inline_scene": "2",
                "module_type": "double_feed",
                "trackid": "2725a66c-b027-4907-924b-9991342141c5",
                "index": "1",
                "epid": "1484821",
                "season_id": "33378",
                "oid": "1484821",
                "inline_epid": "1484821",
                "rid": "5303a927-4c85-42c6-b412-e125d0ae12cd",
                "card_type": "double_feed",
                "inline_type": "2",
                "material_no": "5191034042846825063",
                "module_id": "1845",
                "season_type": "1",
                "content_type": "0",
                "reason_type": "3",
                "lsource": "1011019",
                "track_id": "2725a66c-b027-4907-924b-9991342141c5",
                "avid": "114086511707498",
                "position_id": "2"
              },
              "season_id": 33378,
              "season_type": 1,
              "spmid": "pgc.bangumi-tab.recommend.inline",
              "status": {
                "follow": 0
              },
              "sub_title": "57万评论热议中",
              "title": "名侦探柯南",
              "url": "https://www.bilibili.com/bangumi/play/ep1484821?season_id=33378&season_type=1&aid=114086511707498&season_cover=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Fbangumi%2Fimage%2F38e2a273f528fd01c34f1fc4df0f69c64487efad.png&title=1213&long_title=%E8%BF%BD%E8%B8%AA%EF%BC%81%E4%BE%A6%E6%8E%A2%E5%87%BA%E7%A7%9F%E8%BD%A62&player_width=1920&player_height=1080&player_rotate=0&ep_status=13&player_preload=%7B%22no_rexcode%22%3A0%2C%22video_project%22%3Afalse%2C%22fnval%22%3A0%2C%22expire_time%22%3A1741129722%2C%22fnver%22%3A0%2C%22backup_url%22%3A%5B%5D%2C%22support_formats%22%3A%5B%5D%2C%22oid%22%3A5191034042846825063%2C%22support_description%22%3A%5B%5D%2C%22url%22%3A%22http%3A%2F%2Fupos-sz-mirrorcos.bilivideo.com%2Fogvresxcode%2Flb%2Fi8%2F_000000yuy6oas0cgy294jyc0xpri8lb-1-232111110023.mp4%3Fe%3Dig8euxZM2rNcNbh3hwdVhoMznwdVhwdEto8g5X10ugNcXBlqNCNEto8g5gNvNE3DN0B5tZlqNxTEto8BTrNvN05fqx6S5ahE9IMvXBvE2ENvNCImNEVEK9GVqJIwqa80WXIekXRE9IB5QK%3D%3D%26uipk%3D5%26nbs%3D1%26deadline%3D1741129722%26gen%3Dplayurlv2%26os%3Dcosbv%26oi%3D3746144122%26trid%3Dd254df13a7d94d7eae15e599802be03bG%26mid%3D0%26platform%3Dandroid%26upsig%3D170e1867cab1aada47259a23a51c3bfa%26uparams%3De%2Cuipk%2Cnbs%2Cdeadline%2Cgen%2Cos%2Coi%2Ctrid%2Cmid%2Cplatform%26bvc%3Dvod%26nettype%3D0%26orderid%3D0%2C1%26f%3DG_0_0%26logo%3D80000000%22%2C%22quality%22%3A32%2C%22accept_formats%22%3A%5B%7B%22display_desc%22%3A%221080P%22%2C%22sub_description%22%3A%22%22%2C%22superscript%22%3A%22%22%2C%22need_login%22%3Atrue%2C%22format%22%3A%22flv%22%2C%22description%22%3A%22%E9%AB%98%E6%B8%85%201080P%22%2C%22quality%22%3A80%2C%22new_description%22%3A%221080P%20%E9%AB%98%E6%B8%85%22%7D%2C%7B%22display_desc%22%3A%22720P%22%2C%22sub_description%22%3A%22%22%2C%22superscript%22%3A%22%22%2C%22need_login%22%3Atrue%2C%22format%22%3A%22flv720%22%2C%22description%22%3A%22%E9%AB%98%E6%B8%85%20720P%22%2C%22quality%22%3A64%2C%22new_description%22%3A%22720P%20%E9%AB%98%E6%B8%85%22%7D%2C%7B%22display_desc%22%3A%22480P%22%2C%22sub_description%22%3A%22%22%2C%22superscript%22%3A%22%22%2C%22format%22%3A%22flv480%22%2C%22description%22%3A%22%E6%B8%85%E6%99%B0%20480P%22%2C%22quality%22%3A32%2C%22new_description%22%3A%22480P%20%E6%B8%85%E6%99%B0%22%7D%2C%7B%22display_desc%22%3A%22360P%22%2C%22sub_description%22%3A%22%22%2C%22superscript%22%3A%22%22%2C%22format%22%3A%22mp4%22%2C%22description%22%3A%22%E6%B5%81%E7%95%85%20360P%22%2C%22quality%22%3A16%2C%22new_description%22%3A%22360P%20%E6%B5%81%E7%95%85%22%7D%5D%2C%22support_quality%22%3A%5B%5D%2C%22file_info%22%3A%7B%2216%22%3A%7B%22infos%22%3A%5B%7B%22ahead%22%3A%22%22%2C%22vhead%22%3A%22%22%2C%22filesize%22%3A1472517%2C%22timelength%22%3A60160%2C%22order%22%3A1%7D%5D%7D%2C%2280%22%3A%7B%22infos%22%3A%5B%7B%22ahead%22%3A%22%22%2C%22vhead%22%3A%22%22%2C%22filesize%22%3A6109390%2C%22timelength%22%3A60096%2C%22order%22%3A1%7D%5D%7D%2C%2264%22%3A%7B%22infos%22%3A%5B%7B%22ahead%22%3A%22%22%2C%22vhead%22%3A%22%22%2C%22filesize%22%3A3793316%2C%22timelength%22%3A60096%2C%22order%22%3A1%7D%5D%7D%2C%2232%22%3A%7B%22infos%22%3A%5B%7B%22ahead%22%3A%22%22%2C%22vhead%22%3A%22%22%2C%22filesize%22%3A2315560%2C%22timelength%22%3A60096%2C%22order%22%3A1%7D%5D%7D%7D%2C%22video_codecid%22%3A0%2C%22cid%22%3A0%7D&is_preview=0&track_id=2725a66c-b027-4907-924b-9991342141c5&trackid=2725a66c-b027-4907-924b-9991342141c5&from_spmid=pgc.bangumi-tab.recommend.inline",
              "v_cover": "http://i0.hdslb.com/bfs/bangumi/image/38e2a273f528fd01c34f1fc4df0f69c64487efad.png"
            }
          ]
        },
        "report": {
          "module_area": "content",
          "inline_scene": "2",
          "module_type": "double_feed",
          "trackid": "2725a66c-b027-4907-924b-9991342141c5",
          "index": "1",
          "epid": "1484821",
          "season_id": "33378",
          "oid": "1484821",
          "inline_epid": "1484821",
          "rid": "5303a927-4c85-42c6-b412-e125d0ae12cd",
          "card_type": "double_feed",
          "inline_type": "2",
          "material_no": "5191034042846825063",
          "module_id": "1845",
          "season_type": "1",
          "content_type": "0",
          "reason_type": "3",
          "lsource": "1011019",
          "track_id": "2725a66c-b027-4907-924b-9991342141c5",
          "avid": "114086511707498",
          "position_id": "2"
        },
        "title": "猜你喜欢",
        "type": "FALL_FEED"
      },
      {
        "id": 1845,
        "module_data": {
          "items": [
            {
              "cover": "https://i0.hdslb.com/bfs/bangumi/image/0d074ff70b4ead90556ad9e08686238f835f1bea.png",
              "ep_id": 836727,
              "feedback_source": 2,
              "item_type": "card",
              "oid": 836727,
              "rcmd_oid": 836727,
              "rcmd_otype": 2,
              "report": {
                "module_area": "content",
                "module_type": "double_feed",
                "trackid": "1ecd89a2-1d32-4af9-866f-5e1fda31d754",
                "index": "3",
                "epid": "836727",
                "season_id": "45969",
                "oid": "836727",
                "rid": "5303a927-4c85-42c6-b412-e125d0ae12cd",
                "card_type": "double_feed",
                "module_id": "1845",
                "season_type": "",
                "content_type": "0",
                "lsource": "64",
                "track_id": "1ecd89a2-1d32-4af9-866f-5e1fda31d754",
                "position_id": "4"
              },
              "season_id": 45969,
              "sub_title": "放牛少年，放牧诸神",
              "title": "牧神记",
              "url": "https://www.bilibili.com/bangumi/play/ep836727?track_id=1ecd89a2-1d32-4af9-866f-5e1fda31d754&trackid=1ecd89a2-1d32-4af9-866f-5e1fda31d754&from_spmid=pgc.bangumi-tab.recommend.0"
            },
            {
              "cover": "http://i0.hdslb.com/bfs/archive/5ac571880f996eead5af559de2509228e20164cf.jpg",
              "ep_id": 733316,
              "feedback_source": 2,
              "item_type": "card",
              "oid": 733316,
              "rcmd_oid": 733316,
              "rcmd_otype": 2,
              "report": {
                "module_area": "content",
                "module_type": "double_feed",
                "trackid": "d31c940d-fa4c-4912-9275-c1d3833cc60d",
                "index": "5",
                "epid": "733316",
                "season_id": "28747",
                "oid": "733316",
                "rid": "5303a927-4c85-42c6-b412-e125d0ae12cd",
                "card_type": "double_feed",
                "module_id": "1845",
                "season_type": "",
                "content_type": "0",
                "reason_type": "3",
                "lsource": "64",
                "track_id": "d31c940d-fa4c-4912-9275-c1d3833cc60d",
                "position_id": "6"
              },
              "season_id": 28747,
              "sub_title": "173万评论热议中",
              "title": "凡人修仙传",
              "url": "https://www.bilibili.com/bangumi/play/ep733316?track_id=d31c940d-fa4c-4912-9275-c1d3833cc60d&trackid=d31c940d-fa4c-4912-9275-c1d3833cc60d&from_spmid=pgc.bangumi-tab.recommend.0"
            }
          ]
        },
        "report": {
          "module_id": "1845",
          "module_type": "double_feed"
        },
        "type": "DOUBLE_FEED"
      },
      {
        "id": 1845,
        "module_data": {
          "items": [
            {
              "cover": "http://i0.hdslb.com/bfs/archive/deead746959a4df91795956e0ecdb1d7b77378f2.jpg",
              "ep_id": 1403521,
              "feedback_source": 2,
              "item_type": "card",
              "oid": 1403521,
              "rcmd_oid": 1403521,
              "rcmd_otype": 2,
              "report": {
                "module_area": "content",
                "module_type": "double_feed",
                "trackid": "a1d8553e-8e5f-4977-8496-31e22fcf21ad",
                "index": "7",
                "epid": "1403521",
                "season_id": "80763",
                "oid": "1403521",
                "rid": "5303a927-4c85-42c6-b412-e125d0ae12cd",
                "card_type": "double_feed",
                "module_id": "1845",
                "season_type": "",
                "content_type": "0",
                "lsource": "64",
                "track_id": "a1d8553e-8e5f-4977-8496-31e22fcf21ad",
                "position_id": "8"
              },
              "season_id": 80763,
              "sub_title": "暗影君王再临！",
              "title": "我独自升级 第二季 -起于暗影-",
              "url": "https://www.bilibili.com/bangumi/play/ep1403521?track_id=a1d8553e-8e5f-4977-8496-31e22fcf21ad&trackid=a1d8553e-8e5f-4977-8496-31e22fcf21ad&from_spmid=pgc.bangumi-tab.recommend.0"
            },
            {
              "cover": "http://i0.hdslb.com/bfs/archive/79b9143073f1057a7d3a5107a50d42a1df625eeb.jpg",
              "ep_id": 458588,
              "feedback_source": 2,
              "item_type": "card",
              "oid": 458588,
              "rcmd_oid": 458588,
              "rcmd_otype": 2,
              "report": {
                "module_area": "content",
                "module_type": "double_feed",
                "trackid": "45863b11-cbf8-4b73-a97f-dcd13e20effa",
                "index": "9",
                "epid": "458588",
                "season_id": "35213",
                "oid": "458588",
                "rid": "5303a927-4c85-42c6-b412-e125d0ae12cd",
                "card_type": "double_feed",
                "module_id": "1845",
                "season_type": "",
                "content_type": "0",
                "reason_type": "2",
                "lsource": "64",
                "track_id": "45863b11-cbf8-4b73-a97f-dcd13e20effa",
                "position_id": "10"
              },
              "season_id": 35213,
              "sub_title": "162万弹幕热议中",
              "title": "永生",
              "url": "https://www.bilibili.com/bangumi/play/ep458588?track_id=45863b11-cbf8-4b73-a97f-dcd13e20effa&trackid=45863b11-cbf8-4b73-a97f-dcd13e20effa&from_spmid=pgc.bangumi-tab.recommend.0"
            }
          ]
        },
        "report": {
          "module_id": "1845",
          "module_type": "double_feed"
        },
        "type": "DOUBLE_FEED"
      },
      {
        "id": 1845,
        "module_data": {
          "items": [
            {
              "cover": "http://i0.hdslb.com/bfs/archive/4d76e5eee514ced0af305a99a3e68cf3a0f90e61.jpg",
              "ep_id": 1114870,
              "feedback_source": 2,
              "item_type": "card",
              "oid": 1114870,
              "rcmd_oid": 1114870,
              "rcmd_otype": 2,
              "report": {
                "module_area": "content",
                "module_type": "double_feed",
                "trackid": "d33c641f-bfe1-445b-9a33-210d7d2aba52",
                "index": "11",
                "epid": "1114870",
                "season_id": "48578",
                "oid": "1114870",
                "rid": "5303a927-4c85-42c6-b412-e125d0ae12cd",
                "card_type": "double_feed",
                "module_id": "1845",
                "season_type": "",
                "content_type": "0",
                "reason_type": "4",
                "lsource": "64",
                "track_id": "d33c641f-bfe1-445b-9a33-210d7d2aba52",
                "position_id": "12"
              },
              "season_id": 48578,
              "sub_title": "1047万追番",
              "title": "镇魂街 第四季",
              "url": "https://www.bilibili.com/bangumi/play/ep1114870?track_id=d33c641f-bfe1-445b-9a33-210d7d2aba52&trackid=d33c641f-bfe1-445b-9a33-210d7d2aba52&from_spmid=pgc.bangumi-tab.recommend.0"
            },
            {
              "cover": "http://i0.hdslb.com/bfs/archive/74ffab99e84c7ebbabc5d7da40005941fe225e1a.jpg",
              "ep_id": 833657,
              "feedback_source": 2,
              "item_type": "card",
              "oid": 833657,
              "rcmd_oid": 833657,
              "rcmd_otype": 2,
              "report": {
                "module_area": "content",
                "module_type": "double_feed",
                "trackid": "f47cb8be-af38-46b2-b034-996ad21b8658",
                "index": "13",
                "epid": "833657",
                "season_id": "48518",
                "oid": "833657",
                "rid": "5303a927-4c85-42c6-b412-e125d0ae12cd",
                "card_type": "double_feed",
                "module_id": "1845",
                "season_type": "",
                "content_type": "0",
                "lsource": "64",
                "track_id": "f47cb8be-af38-46b2-b034-996ad21b8658",
                "position_id": "14"
              },
              "season_id": 48518,
              "sub_title": "宗门游戏，坐等开玩",
              "title": "宗门里除了我都是卧底",
              "url": "https://www.bilibili.com/bangumi/play/ep833657?track_id=f47cb8be-af38-46b2-b034-996ad21b8658&trackid=f47cb8be-af38-46b2-b034-996ad21b8658&from_spmid=pgc.bangumi-tab.recommend.0"
            }
          ]
        },
        "report": {
          "module_id": "1845",
          "module_type": "double_feed"
        },
        "type": "DOUBLE_FEED"
      },
      {
        "id": 400001,
        "module_data": {
          "items": [
            {
              "cover": "https://i0.hdslb.com/bfs/bangumi/image/23ad8177856d67753ef78fec990b606e76ceb4e2.png",
              "ep_id": 814346,
              "feedback_content": "{\"material_no\":5573078741454834045}",
              "feedback_source": 2,
              "from_spmid": "pgc.bangumi-tab.recommend.inline",
              "inline_info": {
                "aid": 1350326435,
                "cid": 1431919499,
                "dimension": {
                  "height": 1080,
                  "rotate": 0,
                  "width": 1920
                },
                "ep_id": 814346,
                "player_info": {
                  "no_rexcode": 0,
                  "video_project": false,
                  "fnval": 0,
                  "expire_time": 1741129722,
                  "fnver": 0,
                  "backup_url": [],
                  "support_formats": [],
                  "oid": 5573078741454834045,
                  "support_description": [],
                  "url": "http://upos-sz-mirrorcos.bilivideo.com/ogvresxcode/ib/pa/_00002q3scy4zs3iqp26icgwybhspaib-1-232111110023.mp4?e=ig8euxZM2rNcNbTMhwdVhoMj7wdVhwdEto8g5X10ugNcXBlqNCNEto8g5gNvNE3DN0B5tZlqNxTEto8BTrNvN05fqx6S5ahE9IMvXBvE2ENvNCImNEVEK9GVqJIwqa80WXIekXRE9IB5QK==&uipk=5&nbs=1&deadline=1741129722&gen=playurlv2&os=cosbv&oi=3746144122&trid=d254df13a7d94d7eae15e599802be03bG&mid=0&platform=android&upsig=95383ec10cd1d472ae4821f68d4ceac4&uparams=e,uipk,nbs,deadline,gen,os,oi,trid,mid,platform&bvc=vod&nettype=0&orderid=0,1&f=G_0_0&logo=80000000",
                  "quality": 32,
                  "accept_formats": [
                    {
                      "display_desc": "1080P",
                      "sub_description": "",
                      "superscript": "高码率",
                      "format": "hdflv2",
                      "description": "高清 1080P+",
                      "quality": 112,
                      "new_description": "1080P 高码率"
                    },
                    {
                      "display_desc": "1080P",
                      "sub_description": "",
                      "superscript": "",
                      "format": "flv",
                      "description": "高清 1080P",
                      "quality": 80,
                      "new_description": "1080P 高清"
                    },
                    {
                      "display_desc": "720P",
                      "sub_description": "",
                      "superscript": "",
                      "format": "flv720",
                      "description": "高清 720P",
                      "quality": 64,
                      "new_description": "720P 高清"
                    },
                    {
                      "display_desc": "480P",
                      "sub_description": "",
                      "superscript": "",
                      "format": "flv480",
                      "description": "清晰 480P",
                      "quality": 32,
                      "new_description": "480P 清晰"
                    },
                    {
                      "display_desc": "360P",
                      "sub_description": "",
                      "superscript": "",
                      "format": "mp4",
                      "description": "流畅 360P",
                      "quality": 16,
                      "new_description": "360P 流畅"
                    }
                  ],
                  "support_quality": [],
                  "file_info": {
                    "112": {
                      "infos": [
                        {
                          "ahead": "",
                          "vhead": "",
                          "filesize": 15725157,
                          "timelength": 60096,
                          "order": 1
                        }
                      ]
                    },
                    "16": {
                      "infos": [
                        {
                          "ahead": "",
                          "vhead": "",
                          "filesize": 2516353,
                          "timelength": 60160,
                          "order": 1
                        }
                      ]
                    },
                    "80": {
                      "infos": [
                        {
                          "ahead": "",
                          "vhead": "",
                          "filesize": 11324709,
                          "timelength": 60096,
                          "order": 1
                        }
                      ]
                    },
                    "64": {
                      "infos": [
                        {
                          "ahead": "",
                          "vhead": "",
                          "filesize": 6366847,
                          "timelength": 60096,
                          "order": 1
                        }
                      ]
                    },
                    "32": {
                      "infos": [
                        {
                          "ahead": "",
                          "vhead": "",
                          "filesize": 3862157,
                          "timelength": 60096,
                          "order": 1
                        }
                      ]
                    }
                  },
                  "video_codecid": 0,
                  "cid": 0
                },
                "season_id": 47348,
                "season_type": 4,
                "video": {
                  "clip_info": {
                    "end": 542,
                    "id": 5573078741454834045,
                    "start": 482
                  },
                  "inline_scene": 2,
                  "inline_type": 2,
                  "total_duration": 710
                }
              },
              "item_type": "big_card",
              "oid": 814346,
              "rcmd_oid": 814346,
              "rcmd_otype": 10,
              "report": {
                "module_area": "content",
                "inline_scene": "2",
                "module_type": "double_feed",
                "trackid": "1df52390-88c4-4fce-871e-cb21f027b5de",
                "index": "15",
                "epid": "814346",
                "season_id": "47348",
                "oid": "814346",
                "inline_epid": "814346",
                "rid": "5303a927-4c85-42c6-b412-e125d0ae12cd",
                "card_type": "double_feed",
                "inline_type": "2",
                "material_no": "5573078741454834045",
                "module_id": "1845",
                "season_type": "4",
                "content_type": "0",
                "lsource": "1011019",
                "track_id": "1df52390-88c4-4fce-871e-cb21f027b5de",
                "avid": "1350326435",
                "position_id": "16"
              },
              "season_id": 47348,
              "season_type": 4,
              "spmid": "pgc.bangumi-tab.recommend.inline",
              "status": {
                "follow": 0
              },
              "sub_title": "国创",
              "title": "非人哉 第二季",
              "url": "https://www.bilibili.com/bangumi/play/ep814346?season_id=47348&season_type=4&aid=1350326435&season_cover=https%3A%2F%2Fi0.hdslb.com%2Fbfs%2Fbangumi%2Fimage%2Fd7d2f4b98abc6e611c51bfd685e9aaa4e0095903.png&title=%E9%BE%99%E5%B9%B4%E7%89%B9%E8%BE%91&long_title=&player_width=1920&player_height=1080&player_rotate=0&ep_status=13&player_preload=%7B%22no_rexcode%22%3A0%2C%22video_project%22%3Afalse%2C%22fnval%22%3A0%2C%22expire_time%22%3A1741129722%2C%22fnver%22%3A0%2C%22backup_url%22%3A%5B%5D%2C%22support_formats%22%3A%5B%5D%2C%22oid%22%3A5573078741454834045%2C%22support_description%22%3A%5B%5D%2C%22url%22%3A%22http%3A%2F%2Fupos-sz-mirrorcos.bilivideo.com%2Fogvresxcode%2Fib%2Fpa%2F_00002q3scy4zs3iqp26icgwybhspaib-1-232111110023.mp4%3Fe%3Dig8euxZM2rNcNbTMhwdVhoMj7wdVhwdEto8g5X10ugNcXBlqNCNEto8g5gNvNE3DN0B5tZlqNxTEto8BTrNvN05fqx6S5ahE9IMvXBvE2ENvNCImNEVEK9GVqJIwqa80WXIekXRE9IB5QK%3D%3D%26uipk%3D5%26nbs%3D1%26deadline%3D1741129722%26gen%3Dplayurlv2%26os%3Dcosbv%26oi%3D3746144122%26trid%3Dd254df13a7d94d7eae15e599802be03bG%26mid%3D0%26platform%3Dandroid%26upsig%3D95383ec10cd1d472ae4821f68d4ceac4%26uparams%3De%2Cuipk%2Cnbs%2Cdeadline%2Cgen%2Cos%2Coi%2Ctrid%2Cmid%2Cplatform%26bvc%3Dvod%26nettype%3D0%26orderid%3D0%2C1%26f%3DG_0_0%26logo%3D80000000%22%2C%22quality%22%3A32%2C%22accept_formats%22%3A%5B%7B%22display_desc%22%3A%221080P%22%2C%22sub_description%22%3A%22%22%2C%22superscript%22%3A%22%E9%AB%98%E7%A0%81%E7%8E%87%22%2C%22need_login%22%3Atrue%2C%22format%22%3A%22hdflv2%22%2C%22description%22%3A%22%E9%AB%98%E6%B8%85%201080P%2B%22%2C%22need_vip%22%3Atrue%2C%22quality%22%3A112%2C%22new_description%22%3A%221080P%20%E9%AB%98%E7%A0%81%E7%8E%87%22%7D%2C%7B%22display_desc%22%3A%221080P%22%2C%22sub_description%22%3A%22%22%2C%22superscript%22%3A%22%22%2C%22need_login%22%3Atrue%2C%22format%22%3A%22flv%22%2C%22description%22%3A%22%E9%AB%98%E6%B8%85%201080P%22%2C%22quality%22%3A80%2C%22new_description%22%3A%221080P%20%E9%AB%98%E6%B8%85%22%7D%2C%7B%22display_desc%22%3A%22720P%22%2C%22sub_description%22%3A%22%22%2C%22superscript%22%3A%22%22%2C%22need_login%22%3Atrue%2C%22format%22%3A%22flv720%22%2C%22description%22%3A%22%E9%AB%98%E6%B8%85%20720P%22%2C%22quality%22%3A64%2C%22new_description%22%3A%22720P%20%E9%AB%98%E6%B8%85%22%7D%2C%7B%22display_desc%22%3A%22480P%22%2C%22sub_description%22%3A%22%22%2C%22superscript%22%3A%22%22%2C%22format%22%3A%22flv480%22%2C%22description%22%3A%22%E6%B8%85%E6%99%B0%20480P%22%2C%22quality%22%3A32%2C%22new_description%22%3A%22480P%20%E6%B8%85%E6%99%B0%22%7D%2C%7B%22display_desc%22%3A%22360P%22%2C%22sub_description%22%3A%22%22%2C%22superscript%22%3A%22%22%2C%22format%22%3A%22mp4%22%2C%22description%22%3A%22%E6%B5%81%E7%95%85%20360P%22%2C%22quality%22%3A16%2C%22new_description%22%3A%22360P%20%E6%B5%81%E7%95%85%22%7D%5D%2C%22support_quality%22%3A%5B%5D%2C%22file_info%22%3A%7B%22112%22%3A%7B%22infos%22%3A%5B%7B%22ahead%22%3A%22%22%2C%22vhead%22%3A%22%22%2C%22filesize%22%3A15725157%2C%22timelength%22%3A60096%2C%22order%22%3A1%7D%5D%7D%2C%2216%22%3A%7B%22infos%22%3A%5B%7B%22ahead%22%3A%22%22%2C%22vhead%22%3A%22%22%2C%22filesize%22%3A2516353%2C%22timelength%22%3A60160%2C%22order%22%3A1%7D%5D%7D%2C%2280%22%3A%7B%22infos%22%3A%5B%7B%22ahead%22%3A%22%22%2C%22vhead%22%3A%22%22%2C%22filesize%22%3A11324709%2C%22timelength%22%3A60096%2C%22order%22%3A1%7D%5D%7D%2C%2264%22%3A%7B%22infos%22%3A%5B%7B%22ahead%22%3A%22%22%2C%22vhead%22%3A%22%22%2C%22filesize%22%3A6366847%2C%22timelength%22%3A60096%2C%22order%22%3A1%7D%5D%7D%2C%2232%22%3A%7B%22infos%22%3A%5B%7B%22ahead%22%3A%22%22%2C%22vhead%22%3A%22%22%2C%22filesize%22%3A3862157%2C%22timelength%22%3A60096%2C%22order%22%3A1%7D%5D%7D%7D%2C%22video_codecid%22%3A0%2C%22cid%22%3A0%7D&is_preview=0&track_id=1df52390-88c4-4fce-871e-cb21f027b5de&trackid=1df52390-88c4-4fce-871e-cb21f027b5de&from_spmid=pgc.bangumi-tab.recommend.inline",
              "v_cover": "https://i0.hdslb.com/bfs/bangumi/image/d7d2f4b98abc6e611c51bfd685e9aaa4e0095903.png"
            }
          ]
        },
        "report": {
          "module_area": "content",
          "inline_scene": "2",
          "module_type": "double_feed",
          "trackid": "1df52390-88c4-4fce-871e-cb21f027b5de",
          "index": "15",
          "epid": "814346",
          "season_id": "47348",
          "oid": "814346",
          "inline_epid": "814346",
          "rid": "5303a927-4c85-42c6-b412-e125d0ae12cd",
          "card_type": "double_feed",
          "inline_type": "2",
          "material_no": "5573078741454834045",
          "module_id": "1845",
          "season_type": "4",
          "content_type": "0",
          "lsource": "1011019",
          "track_id": "1df52390-88c4-4fce-871e-cb21f027b5de",
          "avid": "1350326435",
          "position_id": "16"
        },
        "type": "FALL_FEED"
      },
      {
        "id": 1845,
        "module_data": {
          "items": [
            {
              "cover": "http://i0.hdslb.com/bfs/archive/f52f91a05c59c75528992defc42a1067f5e78797.jpg",
              "ep_id": 836565,
              "feedback_source": 2,
              "item_type": "card",
              "oid": 836565,
              "rcmd_oid": 836565,
              "rcmd_otype": 2,
              "report": {
                "module_area": "content",
                "module_type": "double_feed",
                "trackid": "d10441d3-9b4f-4fe7-911e-8b603e363bc7",
                "index": "17",
                "epid": "836565",
                "season_id": "45960",
                "oid": "836565",
                "rid": "5303a927-4c85-42c6-b412-e125d0ae12cd",
                "card_type": "double_feed",
                "module_id": "1845",
                "season_type": "",
                "content_type": "0",
                "lsource": "64",
                "track_id": "d10441d3-9b4f-4fe7-911e-8b603e363bc7",
                "position_id": "18"
              },
              "season_id": 45960,
              "sub_title": "妖师之名，降魔之义",
              "title": "虎鹤妖师录",
              "url": "https://www.bilibili.com/bangumi/play/ep836565?track_id=d10441d3-9b4f-4fe7-911e-8b603e363bc7&trackid=d10441d3-9b4f-4fe7-911e-8b603e363bc7&from_spmid=pgc.bangumi-tab.recommend.0"
            },
            {
              "cover": "http://i0.hdslb.com/bfs/archive/5318044afa02c4efe117bfb89a65995fa3766c22.jpg",
              "ep_id": 323085,
              "feedback_source": 2,
              "item_type": "card",
              "oid": 323085,
              "rcmd_oid": 323085,
              "rcmd_otype": 2,
              "report": {
                "module_area": "content",
                "module_type": "double_feed",
                "trackid": "7992c0e7-0e60-4148-959d-ea85129dfe45",
                "index": "19",
                "epid": "323085",
                "season_id": "33415",
                "oid": "323085",
                "rid": "5303a927-4c85-42c6-b412-e125d0ae12cd",
                "card_type": "double_feed",
                "module_id": "1845",
                "season_type": "",
                "content_type": "0",
                "reason_type": "3",
                "lsource": "64",
                "track_id": "7992c0e7-0e60-4148-959d-ea85129dfe45",
                "position_id": "20"
              },
              "season_id": 33415,
              "sub_title": "站内高分番剧!",
              "title": "名侦探柯南（中配）",
              "url": "https://www.bilibili.com/bangumi/play/ep323085?track_id=7992c0e7-0e60-4148-959d-ea85129dfe45&trackid=7992c0e7-0e60-4148-959d-ea85129dfe45&from_spmid=pgc.bangumi-tab.recommend.0"
            }
          ]
        },
        "report": {
          "module_id": "1845",
          "module_type": "double_feed"
        },
        "type": "DOUBLE_FEED"
      },
      {
        "id": 1845,
        "module_data": {
          "items": [
            {
              "cover": "http://i0.hdslb.com/bfs/archive/81846b0501745bec23442839f7d758f61de8240e.png",
              "ep_id": 1231523,
              "feedback_source": 2,
              "item_type": "card",
              "oid": 1231523,
              "rcmd_oid": 1231523,
              "rcmd_otype": 2,
              "report": {
                "module_area": "content",
                "module_type": "double_feed",
                "trackid": "80cd2dec-22ca-416d-b308-f81c49f34e6f",
                "index": "21",
                "epid": "1231523",
                "season_id": "73081",
                "oid": "1231523",
                "rid": "5303a927-4c85-42c6-b412-e125d0ae12cd",
                "card_type": "double_feed",
                "module_id": "1845",
                "season_type": "",
                "content_type": "0",
                "reason_type": "2",
                "lsource": "64",
                "track_id": "80cd2dec-22ca-416d-b308-f81c49f34e6f",
                "position_id": "22"
              },
              "season_id": 73081,
              "sub_title": "71万弹幕热议中",
              "title": "颂乐人偶",
              "url": "https://www.bilibili.com/bangumi/play/ep1231523?track_id=80cd2dec-22ca-416d-b308-f81c49f34e6f&trackid=80cd2dec-22ca-416d-b308-f81c49f34e6f&from_spmid=pgc.bangumi-tab.recommend.0"
            },
            {
              "cover": "http://i0.hdslb.com/bfs/archive/84c6c81f6d7add0037e251a86cac710d7c65c2b9.jpg",
              "ep_id": 1114552,
              "feedback_source": 2,
              "item_type": "card",
              "oid": 1114552,
              "rcmd_oid": 1114552,
              "rcmd_otype": 2,
              "report": {
                "module_area": "content",
                "module_type": "double_feed",
                "trackid": "09e9b06e-1120-4102-a6d3-714e65a760c6",
                "index": "23",
                "epid": "1114552",
                "season_id": "48852",
                "oid": "1114552",
                "rid": "5303a927-4c85-42c6-b412-e125d0ae12cd",
                "card_type": "double_feed",
                "module_id": "1845",
                "season_type": "",
                "content_type": "0",
                "reason_type": "4",
                "lsource": "64",
                "track_id": "09e9b06e-1120-4102-a6d3-714e65a760c6",
                "position_id": "24"
              },
              "season_id": 48852,
              "sub_title": "1050万追番",
              "title": "关于我转生变成史莱姆这档事 第三季",
              "url": "https://www.bilibili.com/bangumi/play/ep1114552?track_id=09e9b06e-1120-4102-a6d3-714e65a760c6&trackid=09e9b06e-1120-4102-a6d3-714e65a760c6&from_spmid=pgc.bangumi-tab.recommend.0"
            }
          ]
        },
        "report": {
          "module_id": "1845",
          "module_type": "double_feed"
        },
        "type": "DOUBLE_FEED"
      },
      {
        "id": 1845,
        "module_data": {
          "items": [
            {
              "cover": "http://i0.hdslb.com/bfs/bangumi/1e47fe925cb543c09250a142c31c8e42ab4bcbbd.jpg",
              "ep_id": 393434,
              "feedback_source": 2,
              "item_type": "card",
              "oid": 393434,
              "rcmd_oid": 393434,
              "rcmd_otype": 2,
              "report": {
                "module_area": "content",
                "module_type": "double_feed",
                "trackid": "26626efb-4eb7-4a6e-8575-be00c57ded69",
                "index": "25",
                "epid": "393434",
                "season_id": "38157",
                "oid": "393434",
                "rid": "5303a927-4c85-42c6-b412-e125d0ae12cd",
                "card_type": "double_feed",
                "module_id": "1845",
                "season_type": "",
                "content_type": "0",
                "reason_type": "3",
                "lsource": "64",
                "track_id": "26626efb-4eb7-4a6e-8575-be00c57ded69",
                "position_id": "26"
              },
              "season_id": 38157,
              "sub_title": "站内高分番剧!",
              "title": "银魂",
              "url": "https://www.bilibili.com/bangumi/play/ep393434?track_id=26626efb-4eb7-4a6e-8575-be00c57ded69&trackid=26626efb-4eb7-4a6e-8575-be00c57ded69&from_spmid=pgc.bangumi-tab.recommend.0"
            },
            {
              "cover": "http://i0.hdslb.com/bfs/archive/35223f448bd8808a05a5acf0a6b4c657e65a2f4f.png",
              "ep_id": 1226212,
              "feedback_source": 2,
              "item_type": "card",
              "oid": 1226212,
              "rcmd_oid": 1226212,
              "rcmd_otype": 2,
              "report": {
                "module_area": "content",
                "module_type": "double_feed",
                "trackid": "43174097-5a6c-4b62-aa5b-c3b3710f9610",
                "index": "27",
                "epid": "1226212",
                "season_id": "76122",
                "oid": "1226212",
                "rid": "5303a927-4c85-42c6-b412-e125d0ae12cd",
                "card_type": "double_feed",
                "module_id": "1845",
                "season_type": "",
                "content_type": "0",
                "lsource": "64",
                "track_id": "43174097-5a6c-4b62-aa5b-c3b3710f9610",
                "position_id": "28"
              },
              "season_id": 76122,
              "sub_title": "这个杀手不太瘦",
              "title": "坂本日常",
              "url": "https://www.bilibili.com/bangumi/play/ep1226212?track_id=43174097-5a6c-4b62-aa5b-c3b3710f9610&trackid=43174097-5a6c-4b62-aa5b-c3b3710f9610&from_spmid=pgc.bangumi-tab.recommend.0"
            }
          ]
        },
        "report": {
          "module_id": "1845",
          "module_type": "double_feed"
        },
        "type": "DOUBLE_FEED"
      }
    ],
    "next_cursor": "16"
  },
  "message": "success"
}
```
</details>

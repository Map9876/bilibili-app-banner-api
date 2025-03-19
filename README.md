手机安装reqable，光速虚拟机

手机设置里，选择安装CA证书，安装reqable的pem证书，这个是用户证书，然后把.0证书导入虚拟机里

虚拟机里mt管理器的shell运行：
mount -o remount,rw /system

cp 9ad09d0f.0 /system/etc/security/cacerts/
这里的9ad09d0f.0 是路径

chmod +644 /system/etc/security/cacerts/9ad09d0f.0 

上两图是手机截图

然后手机reqable就能看虚拟机里app的api了

比如我打开这个首页页面，再打开 “ 动画 ” 页会出现：
，
`https://api.bilibili.com/pgc/page/channel?appkey=1d8b6e7d45233436&build=8340200&c_locale=zh_CN&channel=rongyao&disable_rcmd=0&fnval=272&fnver=0&fourk=0&mobi_app=android&page_name=bangumi_tab&platform=android&s_locale=zh_CN&statistics=%7B%22appId%22%3A1%2C%22platform%22%3A3%2C%22version%22%3A%228.34.0%22%2C%22abtest%22%3A%22%22%7D&ts=17411&sign=`

“影视” 页：

```
curl -X GET 'https://api.bilibili.com/pgc/page/channel?appkey=1d8b6e7d45233436&build=8340200&c_locale=zh_CN&channel=rongyao&disable_rcmd=0&fnval=272&fnver=0&fourk=0&mobi_app=android&page_name=cinema_tab&platform=android&s_locale=zh_CN&statistics=%7B%22appId%22:1,%22platform%22:3,%22version%22:%228.34.0%22,%22abtest%22:%22%22%7D&ts=1741444433&sign=' -H 'User-Agent: Mozilla/5.0 BiliDroid/8.34.0 (bbcallen@gmail.com)' -H 'Accept: application/json' -H 'accept-charset: UTF-8' -H 'app-key: android64' -H 'bili-http-engine: ignet' -H 'buvid: ' -H 'env: prod' -H 'fp_local: ' -H 'fp_remote: ' -H 'guestid: ' -H 'session_id: 8a224119' -H 'x-bili-ticket: ' -H 'x-bili-trace-id: …:…:0:0' --http2

```
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
              
   …………………
   ………………
   …………………
              
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

```
  "code": 0,
  "data": {
    "has_next": 1,
    "modules": [
      {
        "id": 2015,
        "module_data": {
          "items": [
            {
```

modules是一个列表，有多个

```
{
        "id": 2015,
        "module_data": {
          "items": [
            {
 ……           
           {
        "id": 1986,
        "module_data": {
          "items": [
            { 

```

每个id是一个榜，比如2015是头图banner，1986是玄幻榜，……是热门榜，图片链接在每个里面的 items中

---
## 枕刀歌 第一季
![枕刀歌 第一季](https://i0.hdslb.com/bfs/bangumi/image/1b20b04a98413b6177c1ee2afe2632e8919750e9.png)




## 凸变英雄点映会
![凸变英雄点映会](https://i0.hdslb.com/bfs/bangumi/image/45f77c34367f6002e0704e3e289097b99c27e2e4.png)


## 凹凸世界·Reborn
![凹凸世界·Reborn](https://i0.hdslb.com/bfs/bangumi/image/501b42c8452c05dde63eabd9d0d05178a887f124.png)



## 我独自升级 第二季 -起于暗影-
![我独自升级 第二季 -起于暗影-](https://i0.hdslb.com/bfs/bangumi/image/54429fb153c0ac4872baa6d718aef1d1b4204860.png)


## 那年那兔那些事儿 第七季
![那年那兔那些事儿 第七季](https://i0.hdslb.com/bfs/bangumi/image/0e1819f4df9f6ff29119015e91bc67e3d39c6584.png)


## 王者？别闹！
![王者？别闹！](https://i0.hdslb.com/bfs/bangumi/image/b985733b764541ab44fe103fff2cd06317d34dad.png)

## 动画种草激励计划9.0
![动画种草激励计划9.0](https://i0.hdslb.com/bfs/bangumi/image/08f1ef0be7f03c6faf1f242ae14ce09224988ace.png)



## 金牌得主
![金牌得主](https://i0.hdslb.com/bfs/bangumi/image/f63f4df200f3f7d69e8c9e0c7c00a1c515be1d92.png)


## 魔王2099
![魔王2099](https://i0.hdslb.com/bfs/bangumi/image/2df3011be00118ff1733a5d694c1bbaef30d61df.png)

## 虎鹤妖师录
![虎鹤妖师录](https://i0.hdslb.com/bfs/bangumi/image/9fcbde2048ba67a838ec9ef6bf8ef1ad168a9864.png)


## 请吃红小豆吧！食物世界 第一季
![请吃红小豆吧！食物世界 第一季](https://i0.hdslb.com/bfs/bangumi/image/9174aad11dc451c2b4f6245ab03b595dcd55cdf5.png)


## 青之箱
![青之箱](https://i0.hdslb.com/bfs/bangumi/image/ff9e6ac1901c9bc319addf7967d342db1469340e.png)

## Ｄｒ．ＳＴＯＮＥ 石纪元 (第四季)
![Ｄｒ．ＳＴＯＮＥ 石纪元 (第四季)](https://i0.hdslb.com/bfs/bangumi/image/812f43cad353194ca0dc87dbff5a2f54f0d8f704.png)

## 火凤燎原 第二季
![火凤燎原 第二季](https://i0.hdslb.com/bfs/bangumi/image/b60d19c47d7e741f123a5e0575bf0357d43ecc78.png)

## 颂乐人偶
![颂乐人偶](https://i0.hdslb.com/bfs/bangumi/image/c40b20ff3e9afeefc86e5e62312adda1dc5b90e6.png)


## 关于我转生变成史莱姆这档事 第三季
![关于我转生变成史莱姆这档事 第三季](https://i0.hdslb.com/bfs/bangumi/image/3a01488d6528151f68678f235fbb291a97f90b0d.png)

## 我独自升级 第二季
![我独自升级 第二季](https://i0.hdslb.com/bfs/bangumi/image/54429fb153c0ac4872baa6d718aef1d1b4204860.png)


## 镇魂街 第四季
![镇魂街 第四季](https://i0.hdslb.com/bfs/bangumi/image/44dd5ff805a348e5f3a89475d7f3f617846964dc.png)

## 凡人修仙传
![凡人修仙传](https://i0.hdslb.com/bfs/bangumi/image/a34ecfc3e5a5be6fe34e286160ba46ba32db6e7a.png)

## 长歌行
![长歌行](https://i0.hdslb.com/bfs/bangumi/image/180bf56319f838afa8449dac0c5a56ec53938924.png)

## 地缚少年花子君 第二季
![地缚少年花子君 第二季](https://i0.hdslb.com/bfs/bangumi/image/8633d4b75c47d8c3083ccdff102c8699db09b2a4.png)

## 牧神记
![牧神记](https://i0.hdslb.com/bfs/bangumi/image/f455587c5787d480041387cee68768c90dfa5df9.png)

## 香格里拉边境 第二季
![香格里拉边境 第二季](https://i0.hdslb.com/bfs/bangumi/image/0aa77fbebefa3ca2ea7e2be734cfbb50f2f6f69a.png)

## 宗门里除了我都是卧底
![宗门里除了我都是卧底](https://i0.hdslb.com/bfs/bangumi/image/0254a2bab661747a2c9188d11a0f71e676753f90.png)

## 坂本日常
![坂本日常](https://i0.hdslb.com/bfs/bangumi/image/df8088e3a238d59639ddfcd3229778978e0ce198.png)

## 神道帝尊
![神道帝尊](https://i0.hdslb.com/bfs/bangumi/image/0241d0b925c6891877dc8702ec8f6ca1f7533183.png)

## 天命大主宰
![天命大主宰](https://i0.hdslb.com/bfs/bangumi/image/f70456b86ab55d414c9ad14fa2d39f3303f06ded.png)

## 君子无疾
![君子无疾](https://i0.hdslb.com/bfs/bangumi/image/d802cf9a4df3cb35dea01e6c4ee0087b836eafc3.png)

## 少年歌行 血染天启篇
![少年歌行 血染天启篇](https://i0.hdslb.com/bfs/bangumi/image/076135d26fba6440ec4950b3670fc410a621b002.png)



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

</details>

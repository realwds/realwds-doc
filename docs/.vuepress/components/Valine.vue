<template>
  <div id="vcomments"></div> 
</template> 

<script>
export default {
  data() {
    return {
      Valine: ""
    }
  },
  mounted() {
    import("valine").then(res => {
      this.Valine = res.default
      this.init()
    })
  },
  methods: {
    init() {
      new this.Valine({
        el: "#vcomments",
        appId: "TQKo5UeRATUHdK3BOCz9iiqk-MdYXbMMI",
        appKey: "8Nwp38Wd5y7wySh8PNhBu7fW",
        avatar: "mp",
        visitor: true, //阅读量统计
        pageSize: 10,
        placeholder: "留下你想说的话吧^_^",
        enableQQ: true,
        // 这里设置CDN, 默认微博表情CDN
        emojiCDN: 'https://tb2.bdstatic.com/tb/editor/images/face/', 
        // 表情title和图片映射
        emojiMaps: {
            "tb01":"i_f01.png",
            "tb02":"i_f02.png",
            "tb03":"i_f03.png",
            "tb04":"i_f04.png",
            "tb05":"i_f05.png",
            "tb06":"i_f06.png",
            "tb07":"i_f07.png",
            "tb08":"i_f08.png",
            "tb09":"i_f09.png",
            "tb10":"i_f10.png",
            "tb11":"i_f11.png",
            "tb12":"i_f12.png",
            "tb13":"i_f13.png",
            "tb14":"i_f14.png",
            "tb15":"i_f15.png",
            "tb16":"i_f16.png",
            "tb17":"i_f17.png",
            "tb18":"i_f18.png",
            "tb19":"i_f19.png",
            "tb20":"i_f20.png",
            "tb21":"i_f21.png",
            "tb22":"i_f22.png",
            "tb23":"i_f23.png",
            "tb24":"i_f24.png",
            "tb25":"i_f25.png",
            "tb26":"i_f26.png",
            "tb27":"i_f27.png",
            "tb28":"i_f28.png",
            "tb29":"i_f29.png",
            "tb30":"i_f30.png",
            "tb31":"i_f31.png",
            "tb32":"i_f32.png",
            "tb33":"i_f33.png",
            "tb34":"i_f34.png",
            "tb35":"i_f35.png",
            "tb36":"i_f36.png",
            "tb37":"i_f37.png",
            "tb38":"i_f38.png",
            "tb39":"i_f39.png",
            "tb40":"i_f40.png",
            "tb41":"i_f41.png",
            "tb42":"i_f42.png",
            "tb43":"i_f43.png",
            "tb44":"i_f44.png",
            "tb46":"i_f46.png",
            "tb47":"i_f47.png",
            "tb48":"i_f48.png",
            "tb49":"i_f49.png",
        }
      }) 
    }
  },
}
</script>

<style>
  .v[data-class=v] .vcards .vcard .vh .vmeta .vat {
    color: #3eaf7c !important;
  }
  .v[data-class=v] .txt-right {
    opacity: 0 !important;
  }
  #vcomments textarea {
    box-sizing: border-box;
    background: url(https://cdn.jsdelivr.net/gh/realwds/cdn/img/20210414100654.png) 100% 100% no-repeat;
  }
  .v[data-class=v] .vwrap {
    border: 1px solid #42b983 !important;
  }
</style>

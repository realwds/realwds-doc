/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a7aa4024cc477e28a4770c7bbe9fdaa0"
  },
  {
    "url": "about/comment/index.html",
    "revision": "7f78bd0a5b6cbca9c8e2c2d6018f98f5"
  },
  {
    "url": "about/contact/index.html",
    "revision": "ef52bdd9ece605e49c79d5a3180a0dde"
  },
  {
    "url": "about/index.html",
    "revision": "3e475175aa873308c6aea066b7f074df"
  },
  {
    "url": "about/sponsor/index.html",
    "revision": "c78311bf271c2a776c368e2f8805880e"
  },
  {
    "url": "assets/css/0.styles.f825d6ec.css",
    "revision": "e008bbe22f638610b4dfe3901f494b83"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.9f6c7dec.js",
    "revision": "fefb9c08d5a30d71c5dd5f17a08cdb7c"
  },
  {
    "url": "assets/js/10.c3e6c17b.js",
    "revision": "ee99d985ed13f84a4fccf218dfd544dc"
  },
  {
    "url": "assets/js/100.c2296da0.js",
    "revision": "d7c634f74844d4c94afb592eca5b05b0"
  },
  {
    "url": "assets/js/101.c11b33a1.js",
    "revision": "141aff07f14195e3287c83dcc936751b"
  },
  {
    "url": "assets/js/102.5b2eb3ab.js",
    "revision": "05e87c60a374cf940c05c4c600fe141d"
  },
  {
    "url": "assets/js/103.6174609d.js",
    "revision": "756d0a080ae4f71627f244f01d031e50"
  },
  {
    "url": "assets/js/104.c37a9b6f.js",
    "revision": "694c00c162c6b81e29a6cd4229fa1b65"
  },
  {
    "url": "assets/js/105.fa9279de.js",
    "revision": "17e880775503a748f99695c20702f3df"
  },
  {
    "url": "assets/js/106.b36534ef.js",
    "revision": "23ee334916e4791fa8b4d74c715b8ad2"
  },
  {
    "url": "assets/js/107.a1c76087.js",
    "revision": "0ce4654a603ce9d8b0413ca0f4040dc9"
  },
  {
    "url": "assets/js/108.c0e62049.js",
    "revision": "83e2197d8cd6449ffa966832c0f9b9b0"
  },
  {
    "url": "assets/js/11.f3979e84.js",
    "revision": "1952c84bdea6bbdd76b4992bbdf3fafd"
  },
  {
    "url": "assets/js/12.ddfd511a.js",
    "revision": "031facc073152938ba50866c149b10ce"
  },
  {
    "url": "assets/js/13.d06690cb.js",
    "revision": "214b35d1a1e82ebacd2c965da5e740f8"
  },
  {
    "url": "assets/js/14.52855148.js",
    "revision": "751404855d40457a200438d25bcd7a99"
  },
  {
    "url": "assets/js/15.61797eb2.js",
    "revision": "b41f0745a45c2dbfff8ecf5d43bb365b"
  },
  {
    "url": "assets/js/16.e649e6ee.js",
    "revision": "3d80d9124037ea492778a01c66f62d7b"
  },
  {
    "url": "assets/js/17.550bf817.js",
    "revision": "97b63821d965939d9d901daf50fc0a6b"
  },
  {
    "url": "assets/js/18.fbc871e0.js",
    "revision": "128b2bbe9d5341e1aeb7725e3cedac07"
  },
  {
    "url": "assets/js/19.19e3c96d.js",
    "revision": "08f44d540d9b061ab3c78d41441dc603"
  },
  {
    "url": "assets/js/20.86c599a6.js",
    "revision": "6219f09583fe9163d065a77c5e287367"
  },
  {
    "url": "assets/js/21.9bb345ee.js",
    "revision": "1da49e724f64d679eaebb828876fe4c1"
  },
  {
    "url": "assets/js/22.16dcab21.js",
    "revision": "8791346beffac62892c5792c747ebf0d"
  },
  {
    "url": "assets/js/23.6698433f.js",
    "revision": "05640164747c816ba16950935f04d340"
  },
  {
    "url": "assets/js/24.109466ca.js",
    "revision": "06ba54b965857e084eb510d33b8385bf"
  },
  {
    "url": "assets/js/25.b3a460d1.js",
    "revision": "7525841f4348f0ca73af9b16823852bb"
  },
  {
    "url": "assets/js/26.84aee85c.js",
    "revision": "5714df820ce5e0f5a1ccc850e5a4afcd"
  },
  {
    "url": "assets/js/27.f667a6fe.js",
    "revision": "dc6691cc7f85ad79d0411e98d1f0b600"
  },
  {
    "url": "assets/js/28.8dd5d00f.js",
    "revision": "048fbda257af55a55352ba57ce9fcc7e"
  },
  {
    "url": "assets/js/29.f10847b5.js",
    "revision": "7d77c5fc616c2428bd8bb957db4cba24"
  },
  {
    "url": "assets/js/3.62acc876.js",
    "revision": "09176777548482d3eb81a0382b61c161"
  },
  {
    "url": "assets/js/30.ad9ff195.js",
    "revision": "bf4d8a46913ecb2ed01e2572a4cb51de"
  },
  {
    "url": "assets/js/31.62467c22.js",
    "revision": "66130e35bed2206ad08fcc84a80c7983"
  },
  {
    "url": "assets/js/32.142b740b.js",
    "revision": "ef3d12f3dc0b48b878168cfe175ddef9"
  },
  {
    "url": "assets/js/33.2d4ce92d.js",
    "revision": "aca4d5ab3f2336795480403b778f71b4"
  },
  {
    "url": "assets/js/34.a019abb8.js",
    "revision": "20b6675744e72ab9cddb9614a6a95aa5"
  },
  {
    "url": "assets/js/35.f11cb958.js",
    "revision": "1aed9abeb4336687e232565b3384d587"
  },
  {
    "url": "assets/js/36.dab52ac6.js",
    "revision": "9b2fd04989d5b7e0fc9c6f11952baa19"
  },
  {
    "url": "assets/js/37.81522425.js",
    "revision": "deece3ceda32617a45e19bccb3b642d5"
  },
  {
    "url": "assets/js/38.4fbb7921.js",
    "revision": "eb12093172bde16bdef21e2ede59aea7"
  },
  {
    "url": "assets/js/39.752cb569.js",
    "revision": "7f19a3c29f1ea64d5ab48ec91f89ba53"
  },
  {
    "url": "assets/js/4.f62c7105.js",
    "revision": "fec771e4a989ef51fd75a4146b18eabc"
  },
  {
    "url": "assets/js/40.4db316fb.js",
    "revision": "7ee664e1000c811a368f2878a509b5a2"
  },
  {
    "url": "assets/js/41.c51ea2e4.js",
    "revision": "b1366baac0bcce34d30dc95c55649c87"
  },
  {
    "url": "assets/js/42.94556b7f.js",
    "revision": "898fae5873b06f58f80d917f84af623a"
  },
  {
    "url": "assets/js/43.0c64cb6c.js",
    "revision": "49985d9d7764586ca85a3a4fbb7acfed"
  },
  {
    "url": "assets/js/44.ce2c4453.js",
    "revision": "317c442d930acf59759f2627a910c625"
  },
  {
    "url": "assets/js/45.40e2a2b4.js",
    "revision": "996861e4a96a644fee4ed62019337296"
  },
  {
    "url": "assets/js/46.bde499d0.js",
    "revision": "96b774f942a1c358e3a1c7b4880adcdc"
  },
  {
    "url": "assets/js/47.fee3d25a.js",
    "revision": "e9752057788469a5b1012e182ad17904"
  },
  {
    "url": "assets/js/48.7d8d4f77.js",
    "revision": "5845aaaaf24be0186a10f0df52c46fd0"
  },
  {
    "url": "assets/js/49.95ecb20f.js",
    "revision": "22e8fde1b1c895bac9f1ca82e6edcff1"
  },
  {
    "url": "assets/js/5.3f5411fd.js",
    "revision": "58128b06d9b567bc46048697e37250f4"
  },
  {
    "url": "assets/js/50.a52baec5.js",
    "revision": "b4700550ac080e8ada24ff420667d3cb"
  },
  {
    "url": "assets/js/51.bff9519f.js",
    "revision": "46c5948d363cdcb32f4cdd8698f940fb"
  },
  {
    "url": "assets/js/52.1ed29b99.js",
    "revision": "e3202db3deefa0aa845bbbbc985dc779"
  },
  {
    "url": "assets/js/53.5ab8f6d4.js",
    "revision": "91d11ed2fedb3a479b81c6f3912cc7f4"
  },
  {
    "url": "assets/js/54.684a3933.js",
    "revision": "2e5ae4fe60e5ad1e125a205b1cea3844"
  },
  {
    "url": "assets/js/55.4dbf4867.js",
    "revision": "8bd7e33d049f005cc2be9977dc3869d3"
  },
  {
    "url": "assets/js/56.cb7cee52.js",
    "revision": "ff701e9c3c517be8f02a6d0d9ff05b86"
  },
  {
    "url": "assets/js/57.bdbe1198.js",
    "revision": "49dd2bbb4b49ffa01b6a44c70c5c0426"
  },
  {
    "url": "assets/js/58.e815c638.js",
    "revision": "6a61394f78e4dcecaddf073f4437f374"
  },
  {
    "url": "assets/js/59.c650a2dc.js",
    "revision": "2ac854b77244ef0ce577abf8476079a5"
  },
  {
    "url": "assets/js/6.ed981879.js",
    "revision": "d177b71d1b9b3946a8b8d4fc0e13d093"
  },
  {
    "url": "assets/js/60.cd72df15.js",
    "revision": "b3ec117382c91f7e73c872a1ed4f006e"
  },
  {
    "url": "assets/js/61.2b5021cf.js",
    "revision": "5b2c164d7e6cf5d6a0adc952ab78aa00"
  },
  {
    "url": "assets/js/62.7b109073.js",
    "revision": "8c99d22f649e17c33e27045edd9d8fc4"
  },
  {
    "url": "assets/js/63.5e6ca8a0.js",
    "revision": "cebafcc05652c774cf89b6bc40a77c79"
  },
  {
    "url": "assets/js/64.5b18c0fb.js",
    "revision": "6f0e017c5e2869476b5e02dc2548fce5"
  },
  {
    "url": "assets/js/65.cd9444ce.js",
    "revision": "895c54ce2581a006176b9eed740f3c19"
  },
  {
    "url": "assets/js/66.631aacdf.js",
    "revision": "09f20ce624603dbc68d90c9606660655"
  },
  {
    "url": "assets/js/67.7d3765f4.js",
    "revision": "787b4a44090beba522654287f7cbcdad"
  },
  {
    "url": "assets/js/68.aaef2aa8.js",
    "revision": "66d670bcdad46537b951e6ac58c9917c"
  },
  {
    "url": "assets/js/69.74b846da.js",
    "revision": "52969b41c5dc8c0eee6ea02fa619bf39"
  },
  {
    "url": "assets/js/7.67d73f15.js",
    "revision": "dee5c0972f5608df0260977cb9ac8fcd"
  },
  {
    "url": "assets/js/70.2b4bc103.js",
    "revision": "2214963d4d4761cdd7e168f9f0494675"
  },
  {
    "url": "assets/js/71.b90e708d.js",
    "revision": "264147f30c4f48977b8dba36d7eb8e25"
  },
  {
    "url": "assets/js/72.bee358a2.js",
    "revision": "11f4656ce7c43d2cfd92fba7bf3d43c3"
  },
  {
    "url": "assets/js/73.d7e11cd8.js",
    "revision": "9d07535674ab7e0847c33bdde837d53d"
  },
  {
    "url": "assets/js/74.ca202695.js",
    "revision": "055aeaf048a50d1088860ee4240932b8"
  },
  {
    "url": "assets/js/75.ef86979d.js",
    "revision": "6e05e0a1bea46a8dce2ed43cf1bfac5f"
  },
  {
    "url": "assets/js/76.c32c3467.js",
    "revision": "26a16d86b9532e795aee3fc5158e0bb9"
  },
  {
    "url": "assets/js/77.1bff23d1.js",
    "revision": "6f51575c85e5749e43c6103689d3e5a9"
  },
  {
    "url": "assets/js/78.2ca1ec3e.js",
    "revision": "8fe7d2b4f290ac12b1bafb55473ae87f"
  },
  {
    "url": "assets/js/79.5e2533e6.js",
    "revision": "6b7cf97b4333c71fe8eeae32afff6f3e"
  },
  {
    "url": "assets/js/8.74135bcc.js",
    "revision": "9f5751da1db07136dd651fe06da01f1a"
  },
  {
    "url": "assets/js/80.64a66022.js",
    "revision": "e67d8b3fe4b7b0dab6d84275ea76922d"
  },
  {
    "url": "assets/js/81.89222204.js",
    "revision": "91e09640cc2e6e689707e65966954e86"
  },
  {
    "url": "assets/js/82.457a1565.js",
    "revision": "420b5e8ce3c404a38c2166331944b44c"
  },
  {
    "url": "assets/js/83.9a3ed986.js",
    "revision": "4c4e5c6c90c2687d7c13f532336489c4"
  },
  {
    "url": "assets/js/84.468ab8a6.js",
    "revision": "7f1b9edf8c7b4f7848ae394ee811b492"
  },
  {
    "url": "assets/js/85.76b53214.js",
    "revision": "6df364a809e5c7ccda1d730c913be09f"
  },
  {
    "url": "assets/js/86.0a82a606.js",
    "revision": "37c21475605cce524eb253605771c459"
  },
  {
    "url": "assets/js/87.27420a3d.js",
    "revision": "8c95792fb162f3e82b3a27a4696527b3"
  },
  {
    "url": "assets/js/88.7d04ab55.js",
    "revision": "d21d173d853088991e82135ec989410d"
  },
  {
    "url": "assets/js/89.f7da13d9.js",
    "revision": "7f317ff06cb6d478993cd10f8f6e1143"
  },
  {
    "url": "assets/js/9.422b8645.js",
    "revision": "3455c71086b4b499330fffb7d8a775da"
  },
  {
    "url": "assets/js/90.3f6d82c3.js",
    "revision": "98e1097660535408f0d157c5979782b0"
  },
  {
    "url": "assets/js/91.55678e1b.js",
    "revision": "31187af3cf5e12726f951600a5c5d08e"
  },
  {
    "url": "assets/js/92.a89e3969.js",
    "revision": "90ee06e4b7e5d0c81110634b0a359276"
  },
  {
    "url": "assets/js/93.774cfefb.js",
    "revision": "7cdae347ca0ef4c0ab3d1658ff0b8209"
  },
  {
    "url": "assets/js/94.80eaee43.js",
    "revision": "a83d2573f29ec6afdb21cf4618d31068"
  },
  {
    "url": "assets/js/95.dbf5aa64.js",
    "revision": "74dbff89c263fc5560b9cd81929d57ae"
  },
  {
    "url": "assets/js/96.64151c8e.js",
    "revision": "bee37f4f2c9d8e6743e50ead76eb7ce4"
  },
  {
    "url": "assets/js/97.fa994626.js",
    "revision": "ce8bb8a994df8298391c2c4fa95da12a"
  },
  {
    "url": "assets/js/98.78c310c5.js",
    "revision": "89affc4ede914af0b59797881c0ea974"
  },
  {
    "url": "assets/js/99.54e6f5a7.js",
    "revision": "e30393da166f5d05bb2e40655c2cad8c"
  },
  {
    "url": "assets/js/app.d46cebf3.js",
    "revision": "3a53a05413e482a3784812c5390763c9"
  },
  {
    "url": "css/jquery.fancybox.min.css",
    "revision": "0b8a5b13275298e7568eb7f0c40865d2"
  },
  {
    "url": "daily/2021/02/01/index.html",
    "revision": "b0d46b1b02932081cb44d434f24d53d4"
  },
  {
    "url": "daily/2021/02/02/index.html",
    "revision": "d86925ae8841a47bb362039f57c344e7"
  },
  {
    "url": "daily/2021/02/03/index.html",
    "revision": "be9371d20f7d4a884b9e6d8f007601ac"
  },
  {
    "url": "daily/2021/02/04/index.html",
    "revision": "b5532329dc62550101932be4e1349f02"
  },
  {
    "url": "daily/2021/02/05/index.html",
    "revision": "ac82d97dc5bf55395b3810a0e78e8d8c"
  },
  {
    "url": "daily/2021/02/06/index.html",
    "revision": "bd2d56b135fcc0545cd87916a088e159"
  },
  {
    "url": "daily/2021/02/07/index.html",
    "revision": "24f21b7e3905b48aa089840e3e096b67"
  },
  {
    "url": "daily/2021/02/08/index.html",
    "revision": "858dc2278e8622c6d93216fec534d74e"
  },
  {
    "url": "daily/2021/02/09/index.html",
    "revision": "230bcf875bce30d54edadc527ec941e5"
  },
  {
    "url": "daily/2021/02/10/index.html",
    "revision": "5e1cb9c4e06c98b60064cf771f54b00d"
  },
  {
    "url": "daily/2021/02/11/index.html",
    "revision": "d3ddc0c0f88d812950c360f18356de88"
  },
  {
    "url": "daily/2021/02/12/index.html",
    "revision": "bab0528c0ee35b5318bd74639172dcbc"
  },
  {
    "url": "daily/2021/02/13/index.html",
    "revision": "fb66f8b68b1a7d46bb96566eca7144f5"
  },
  {
    "url": "daily/2021/02/14/index.html",
    "revision": "757f5fc8aa7e30e61cd7d30deb469cb3"
  },
  {
    "url": "daily/2021/03/20/index.html",
    "revision": "e88659e7ad10320b3f16c8068fc08781"
  },
  {
    "url": "daily/2021/03/21/index.html",
    "revision": "09b3b5e6e88cb43452d4a9a1e35c2496"
  },
  {
    "url": "daily/2021/03/22/index.html",
    "revision": "4d7312a38c1e30d829d54ca21859f744"
  },
  {
    "url": "daily/2021/03/23/index.html",
    "revision": "489d771a320074f0a3d1b82aca15fe7f"
  },
  {
    "url": "daily/2021/03/24/index.html",
    "revision": "17278a82255935012e5a5676f3aa023b"
  },
  {
    "url": "daily/2021/03/25/index.html",
    "revision": "4c857708daa0debb4a03479b7c5f004b"
  },
  {
    "url": "daily/2021/03/26/index.html",
    "revision": "236f7ed47431f61d93efed1b092883d2"
  },
  {
    "url": "daily/2021/03/27/index.html",
    "revision": "eafc5ee7db0245a89c1fddd5c79c9cc1"
  },
  {
    "url": "daily/2021/03/28/index.html",
    "revision": "b775525c4163f468b13ebb56dae1f944"
  },
  {
    "url": "daily/2021/03/29/index.html",
    "revision": "3785b27cad5a7ddbbb8176050a359632"
  },
  {
    "url": "daily/2021/03/30/index.html",
    "revision": "ea995b4ce0d3b86eb3529587edd0637d"
  },
  {
    "url": "daily/2021/04/12/index.html",
    "revision": "fe344d5305f1f061c1a507a1e74555db"
  },
  {
    "url": "daily/2021/04/13/index.html",
    "revision": "efe1c7204f950b441a31587b5a95efc1"
  },
  {
    "url": "daily/2021/04/14/index.html",
    "revision": "9cfe6025f7eb88e27ed25d3b40b084d7"
  },
  {
    "url": "daily/2021/04/15/index.html",
    "revision": "05e9333e8c972342d9f28a2f52810ce0"
  },
  {
    "url": "daily/2021/04/16/index.html",
    "revision": "c89d1ccb44be6b18df417c131c7484ca"
  },
  {
    "url": "daily/2021/04/17/index.html",
    "revision": "1b2b30ffaadeab35aed23b6755a2dcc4"
  },
  {
    "url": "daily/2021/04/18/index.html",
    "revision": "e4cba70306b860a9285c935d893b5d09"
  },
  {
    "url": "daily/2021/04/19/index.html",
    "revision": "2abd1bdbb9ac23c8460928c7c1f61005"
  },
  {
    "url": "daily/2021/04/20/index.html",
    "revision": "a521ce7094f537dfbbfd10b513001297"
  },
  {
    "url": "daily/2021/04/21/index.html",
    "revision": "0424e61a448ee1f8f6ff785ed2e04b97"
  },
  {
    "url": "daily/2021/04/22/index.html",
    "revision": "6182c30d7d4ccb3cbe3d1b75a16334ee"
  },
  {
    "url": "daily/2021/04/23/index.html",
    "revision": "c19df79d2d68e22df10839cfdb69945d"
  },
  {
    "url": "daily/2021/04/24/index.html",
    "revision": "1072681cf3f6bd398fa83d1de653d144"
  },
  {
    "url": "daily/2021/04/25/index.html",
    "revision": "8c03d3632937cb67b958efcbfad76731"
  },
  {
    "url": "daily/2021/04/26/index.html",
    "revision": "8e5eec8d6c565a1f324f73c6492f90cd"
  },
  {
    "url": "daily/2021/04/27/index.html",
    "revision": "96463de556cbc39d0e4dbae6cab309f7"
  },
  {
    "url": "daily/2021/04/28/index.html",
    "revision": "afb8c456f8788857dbb9f709fdd087d7"
  },
  {
    "url": "daily/2021/04/29/index.html",
    "revision": "177bbd0afc667b4d3d773b2d6842a82a"
  },
  {
    "url": "daily/2021/05/06/index.html",
    "revision": "b08f28f762fcd4d58bf7d0a5725fab18"
  },
  {
    "url": "daily/2021/05/07/index.html",
    "revision": "1f473962e1d10de11d38e49e542add95"
  },
  {
    "url": "daily/2021/05/08/index.html",
    "revision": "12a3abf2c4cf45b411fb094ab72257d2"
  },
  {
    "url": "daily/2021/05/09/index.html",
    "revision": "d7c5ce2bbdb6d29ec16440e9ee4c4431"
  },
  {
    "url": "daily/2021/05/10/index.html",
    "revision": "188555d7b4913234cb2c4bb52efb5217"
  },
  {
    "url": "daily/2021/05/11/index.html",
    "revision": "a3776768e432815858ab61b68e2891cc"
  },
  {
    "url": "daily/2021/05/12/index.html",
    "revision": "4087bea9956ff03e1ad2aa870552feea"
  },
  {
    "url": "daily/2021/05/13/index.html",
    "revision": "ce6766f7cfebf8c353d57e464b5d93f5"
  },
  {
    "url": "daily/2021/05/14/index.html",
    "revision": "0db1ba3488207d8e0b85c5215bdad507"
  },
  {
    "url": "daily/2021/05/15/index.html",
    "revision": "2639a2721b553cf414eef7a2547bb070"
  },
  {
    "url": "daily/2021/05/16/index.html",
    "revision": "ae1456f5a61549e2cf3d411fdad0ecae"
  },
  {
    "url": "daily/2021/05/17/index.html",
    "revision": "bc051ff347c754f05f27946204683270"
  },
  {
    "url": "daily/2021/05/18/index.html",
    "revision": "b89c35c79122f44340bf9487b9f421b6"
  },
  {
    "url": "daily/2021/05/19/index.html",
    "revision": "97740a4873a7f8fea093f36d364f51a0"
  },
  {
    "url": "daily/2021/05/20/index.html",
    "revision": "406206570f6117d07e93578c14adb5f6"
  },
  {
    "url": "daily/2021/05/21/index.html",
    "revision": "4f58ff5d9fd8431c781f6d2a39c0e511"
  },
  {
    "url": "daily/2021/05/22/index.html",
    "revision": "e423c69bae95b41009ca3296f8eed253"
  },
  {
    "url": "daily/2021/05/23/index.html",
    "revision": "eeebb10c7ab68c4aca85fa8574ad368f"
  },
  {
    "url": "daily/2021/05/24/index.html",
    "revision": "16c18c58b8fda0e3b8da01bb3c94d1bc"
  },
  {
    "url": "daily/2021/05/25/index.html",
    "revision": "1a15495e645ad9ba6b6a49fc4035841b"
  },
  {
    "url": "daily/2021/05/26/index.html",
    "revision": "9b521a864b8d0a2c70bc85152200db5f"
  },
  {
    "url": "daily/2021/05/27/index.html",
    "revision": "c7ef836f913b1fe5730471ca9b6a9dd6"
  },
  {
    "url": "daily/2021/05/28/index.html",
    "revision": "aa866f25880fdb911683756147f45895"
  },
  {
    "url": "daily/2021/05/29/index.html",
    "revision": "b07c35892e02723c478a3c8e0a5f3cc2"
  },
  {
    "url": "daily/index.html",
    "revision": "aaeae0b2d285db5102c7432d2048493d"
  },
  {
    "url": "en/about/comment/index.html",
    "revision": "82922c3740b50f35f303ad707ab4b226"
  },
  {
    "url": "en/about/contact/index.html",
    "revision": "828b280ec99ea0a5b39c50f7e0659a82"
  },
  {
    "url": "en/about/index.html",
    "revision": "9decb68ed93bfc043ec0b127e039ebbd"
  },
  {
    "url": "en/about/sponsor/index.html",
    "revision": "f590050027a262680e773c60c7a910b5"
  },
  {
    "url": "en/index.html",
    "revision": "0e6706d7f70bd7391db0a2432e55925f"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "1e78a74a0a812bf56b9d461f87469f34"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "27dc7da978b75f813a954d7066227a6d"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "18e17e802ded74bee29ab0bae02a35be"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "b18a919221661a6a89a9a3a18ab289a4"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "62fb2004c4508705e9dec7ee9b98ca89"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "9ffdcc80e16886b92ae3e03a5738011a"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "0f1997696436d8f23cf9a979a26fe5fe"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "461e1487402df3a5db256aad9b69d794"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "59ed933f3feef66d5a8503002f8083c7"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "76d97a4e12b3502809b4c8dcb7a1b601"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "img/20210413174751.png",
    "revision": "fe1c038b0cf131102df440d14f07c236"
  },
  {
    "url": "img/20210413174752.png",
    "revision": "f83273a75356b3d9cf0782f01d3399e3"
  },
  {
    "url": "img/20210413174753.png",
    "revision": "1de3c0a8341a5835973e1c3410cbac87"
  },
  {
    "url": "img/home.png",
    "revision": "814566ef9f01d8c1d5d29cdca790e7a0"
  },
  {
    "url": "index.html",
    "revision": "dc5a50d8577de8c369c511876cd0460e"
  },
  {
    "url": "jp/about/comment/index.html",
    "revision": "4dc606064801e785976ab19bd28371e1"
  },
  {
    "url": "jp/about/contact/index.html",
    "revision": "f9d911ddc62b0c144c6a8525867a3f49"
  },
  {
    "url": "jp/about/index.html",
    "revision": "f596e60ce8f1fa14d8486383c48b73af"
  },
  {
    "url": "jp/about/sponsor/index.html",
    "revision": "e1cc5193776ebc8cdb2563dd5693920b"
  },
  {
    "url": "jp/index.html",
    "revision": "4fb57088c79a1b3e8a529eb042e2d912"
  },
  {
    "url": "js/jquery.fancybox.min.js",
    "revision": "2e62b54f794ae2fae6a69feaad8f0820"
  },
  {
    "url": "js/jquery.slim.min.js",
    "revision": "99b0a83cf1b0b1e2cb16041520e87641"
  },
  {
    "url": "kr/about/comment/index.html",
    "revision": "bf43c9344cd6b03764b503ff00059527"
  },
  {
    "url": "kr/about/contact/index.html",
    "revision": "f4b23756b16a412d39c132097d2c6299"
  },
  {
    "url": "kr/about/index.html",
    "revision": "a2148327748714448df66162c7552d2d"
  },
  {
    "url": "kr/about/sponsor/index.html",
    "revision": "1ec481d4d4c18f14c52bd44260ed1b55"
  },
  {
    "url": "kr/index.html",
    "revision": "84fb1aef5ff783e2ec2210df8562b963"
  },
  {
    "url": "logo.png",
    "revision": "76d97a4e12b3502809b4c8dcb7a1b601"
  },
  {
    "url": "more/links/index.html",
    "revision": "473e314c60dbfca6f839b0b1100dff58"
  },
  {
    "url": "more/music/index.html",
    "revision": "ee5dbc5820a463b06542a754c5f088da"
  },
  {
    "url": "more/photo/index.html",
    "revision": "850e1ddc445fd99c3d0049f93486ac87"
  },
  {
    "url": "more/video/index.html",
    "revision": "14bc05cf05ffdf64da836286f7b831c7"
  },
  {
    "url": "post/index.html",
    "revision": "1f95e724bb574baaf36aae1f2c0f58fa"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let d={};const a=e=>i(e,r),u={module:{uri:r},exports:d,require:a};s[r]=Promise.all(n.map((e=>u[e]||a(e)))).then((e=>(l(...e),d)))}}define(["./workbox-56a10583"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"acc9e4074057c2ede9bc609839bce4ec"},{url:"ableton/index.html",revision:"8ec1f4e8eb4978f232b13ffe6c826cf3"},{url:"acid-machine-2/index.html",revision:"22eab76b64065ce202c5760f0e10b621"},{url:"aqwertyon/index.html",revision:"7ca6b27c82ecae9831f38048977fff78"},{url:"archive/synthescheisse/index.html",revision:"723c41e4238ba7b9cacdc5e4649a2dee"},{url:"archive/synthescheisse/SYNTHESCHEISSE_files/script.js",revision:"0f2f9610db3c70bf3ef8128066641621"},{url:"archive/synthescheisse/SYNTHESCHEISSE_files/style.css",revision:"4f047b48cc6fa6eac39a6b6026a8e350"},{url:"assets/ableton_index.md._ET9Cjar.js",revision:null},{url:"assets/ableton_index.md._ET9Cjar.lean.js",revision:null},{url:"assets/acid-machine-2_index.md.TJ6gQ4yV.js",revision:null},{url:"assets/acid-machine-2_index.md.TJ6gQ4yV.lean.js",revision:null},{url:"assets/app.hS4qw_qT.js",revision:null},{url:"assets/aqwertyon_index.md.HPGHRujG.js",revision:null},{url:"assets/aqwertyon_index.md.HPGHRujG.lean.js",revision:null},{url:"assets/auth_accept.md.OVieQU5i.js",revision:null},{url:"assets/auth_accept.md.OVieQU5i.lean.js",revision:null},{url:"assets/auth_index.md.7z6GOGBu.js",revision:null},{url:"assets/auth_index.md.7z6GOGBu.lean.js",revision:null},{url:"assets/auth_invite.md.Ivs4LBrw.js",revision:null},{url:"assets/auth_invite.md.Ivs4LBrw.lean.js",revision:null},{url:"assets/auth_logout.md.c3CLzJ7t.js",revision:null},{url:"assets/auth_logout.md.c3CLzJ7t.lean.js",revision:null},{url:"assets/auth_reset.md.xQMofxh7.js",revision:null},{url:"assets/auth_reset.md.xQMofxh7.lean.js",revision:null},{url:"assets/auth.md.bW8RMgcy.js",revision:null},{url:"assets/auth.md.bW8RMgcy.lean.js",revision:null},{url:"assets/cardboard-synth_index.md.IBctjKTK.js",revision:null},{url:"assets/cardboard-synth_index.md.IBctjKTK.lean.js",revision:null},{url:"assets/chunks/chunk-GJVD322O.gdg4GL9s.js",revision:null},{url:"assets/chunks/framework.LP-A4y3_.js",revision:null},{url:"assets/chunks/SynthPage.4wSYZqKR.js",revision:null},{url:"assets/chunks/useClicks.5-3iI95w.js",revision:null},{url:"assets/chunks/useForm.7IRkuX7A.js",revision:null},{url:"assets/disco-computer_index.md.-WojgDac.js",revision:null},{url:"assets/disco-computer_index.md.-WojgDac.lean.js",revision:null},{url:"assets/dotpiano_index.md.j8vQVos3.js",revision:null},{url:"assets/dotpiano_index.md.j8vQVos3.lean.js",revision:null},{url:"assets/dx7_index.md.0HVM9j8y.js",revision:null},{url:"assets/dx7_index.md.0HVM9j8y.lean.js",revision:null},{url:"assets/elementary_index.md.cmIF10eq.js",revision:null},{url:"assets/elementary_index.md.cmIF10eq.lean.js",revision:null},{url:"assets/groove-pizza_index.md.yBwTTRbc.js",revision:null},{url:"assets/groove-pizza_index.md.yBwTTRbc.lean.js",revision:null},{url:"assets/index.md.7zbS4dD2.js",revision:null},{url:"assets/index.md.7zbS4dD2.lean.js",revision:null},{url:"assets/juno-106_index.md.T7Izqfr-.js",revision:null},{url:"assets/juno-106_index.md.T7Izqfr-.lean.js",revision:null},{url:"assets/meet-the-heisenberg_index.md.FsD3JmcX.js",revision:null},{url:"assets/meet-the-heisenberg_index.md.FsD3JmcX.lean.js",revision:null},{url:"assets/midi-driven-web-audio_index.md.r_1tq2kq.js",revision:null},{url:"assets/midi-driven-web-audio_index.md.r_1tq2kq.lean.js",revision:null},{url:"assets/mod-synth_index.md.MDZ2Y_b3.js",revision:null},{url:"assets/mod-synth_index.md.MDZ2Y_b3.lean.js",revision:null},{url:"assets/muted-io_index.md.c9-g69vp.js",revision:null},{url:"assets/muted-io_index.md.c9-g69vp.lean.js",revision:null},{url:"assets/note-sculptor_index.md.QYBCAYyu.js",revision:null},{url:"assets/note-sculptor_index.md.QYBCAYyu.lean.js",revision:null},{url:"assets/nv-1_index.md.AgoqbZEv.js",revision:null},{url:"assets/nv-1_index.md.AgoqbZEv.lean.js",revision:null},{url:"assets/olif-sy-1-k_index.md.JTosYTlz.js",revision:null},{url:"assets/olif-sy-1-k_index.md.JTosYTlz.lean.js",revision:null},{url:"assets/omni_index.md.zinhJV2q.js",revision:null},{url:"assets/omni_index.md.zinhJV2q.lean.js",revision:null},{url:"assets/online-sequencer_index.md.WoI80hXu.js",revision:null},{url:"assets/online-sequencer_index.md.WoI80hXu.lean.js",revision:null},{url:"assets/pixel-synth_index.md.oqZajiio.js",revision:null},{url:"assets/pixel-synth_index.md.oqZajiio.lean.js",revision:null},{url:"assets/README.md.AMTCDvO1.js",revision:null},{url:"assets/README.md.AMTCDvO1.lean.js",revision:null},{url:"assets/sample-stich_index.md.Z6Y8wGC8.js",revision:null},{url:"assets/sample-stich_index.md.Z6Y8wGC8.lean.js",revision:null},{url:"assets/sampler_index.md.yTC543Bw.js",revision:null},{url:"assets/sampler_index.md.yTC543Bw.lean.js",revision:null},{url:"assets/sound-box_index.md.sYj-2C_n.js",revision:null},{url:"assets/sound-box_index.md.sYj-2C_n.lean.js",revision:null},{url:"assets/sound-trap_index.md.ur_TH-LP.js",revision:null},{url:"assets/sound-trap_index.md.ur_TH-LP.lean.js",revision:null},{url:"assets/style.ugRbPJmy.css",revision:null},{url:"assets/sympathetic_index.md.ys-2q3ab.js",revision:null},{url:"assets/sympathetic_index.md.ys-2q3ab.lean.js",revision:null},{url:"assets/tanguy-synth_index.md.qRwd5ZrY.js",revision:null},{url:"assets/tanguy-synth_index.md.qRwd5ZrY.lean.js",revision:null},{url:"assets/theremin_index.md.xYN385y6.js",revision:null},{url:"assets/theremin_index.md.xYN385y6.lean.js",revision:null},{url:"assets/touch-pianist_index.md.QuFjYU6l.js",revision:null},{url:"assets/touch-pianist_index.md.QuFjYU6l.lean.js",revision:null},{url:"assets/touchme_index.md.4-MTMa3h.js",revision:null},{url:"assets/touchme_index.md.4-MTMa3h.lean.js",revision:null},{url:"assets/video-sampler_index.md.enT_9Ye7.js",revision:null},{url:"assets/video-sampler_index.md.enT_9Ye7.lean.js",revision:null},{url:"assets/virtual-piano_index.md.2sQgBRfl.js",revision:null},{url:"assets/virtual-piano_index.md.2sQgBRfl.lean.js",revision:null},{url:"assets/waveform_index.md.XC1V-lVb.js",revision:null},{url:"assets/waveform_index.md.XC1V-lVb.lean.js",revision:null},{url:"assets/web-audio-synth-v2_index.md._ZDjHjT-.js",revision:null},{url:"assets/web-audio-synth-v2_index.md._ZDjHjT-.lean.js",revision:null},{url:"assets/web-modular_index.md.e_w7uO7K.js",revision:null},{url:"assets/web-modular_index.md.e_w7uO7K.lean.js",revision:null},{url:"assets/web-sid_index.md.KghNW4ke.js",revision:null},{url:"assets/web-sid_index.md.KghNW4ke.lean.js",revision:null},{url:"assets/websynths_index.md.W8E2pYmK.js",revision:null},{url:"assets/websynths_index.md.W8E2pYmK.lean.js",revision:null},{url:"auth.html",revision:"e74f995be8b76be6f3968744c5dfbe54"},{url:"auth/accept.html",revision:"d7d45863aede81092ceed0793e754989"},{url:"auth/index.html",revision:"b368ed3d2169fcc107ae3b3749045cee"},{url:"auth/invite.html",revision:"aff00e2cd6814bbc9e7aa631a9b77b2b"},{url:"auth/logout.html",revision:"e963f8499d0999448df2dc85dc9c3c45"},{url:"auth/reset.html",revision:"ae7f0345ffde692f354f0a8655835c36"},{url:"cardboard-synth/index.html",revision:"1d87e822812f93ba37c187e6d2ae56d6"},{url:"click-logo.svg",revision:"f15e71cb394926c5f8c08f64186d2d49"},{url:"cover/ableton.webp",revision:"ff3a22aa28084b93c0aad2e6569657e0"},{url:"cover/acid-machine-2.webp",revision:"29fcf6a6ce374dfc8391fe6544b5f08e"},{url:"cover/aqwertyon.webp",revision:"afab8d4bdeccf669a03617c5ce738fb7"},{url:"cover/cardboard-synth.webp",revision:"f93526fee97f6674940ca367cb841b58"},{url:"cover/disco-computer.webp",revision:"5dd18857caabf0cf1320d82537daa7d1"},{url:"cover/dotpiano.webp",revision:"c08549fc8ca38e2f4b6d1853b947ad3f"},{url:"cover/dx7.webp",revision:"a401e52d21c6d5e44240645b09d9f9c6"},{url:"cover/elementary.webp",revision:"6368b81c56ee656371254dd87bb421e8"},{url:"cover/groove-pizza.webp",revision:"ace880a23d7a39082a02a011d15ef278"},{url:"cover/juno-106.webp",revision:"08c31646032ced1d4c48d295b9c0ca94"},{url:"cover/meet-the-heisenberg.webp",revision:"52318d42eb06e04073f209dd1f1e5c41"},{url:"cover/midi-driven-web-audio.webp",revision:"897bbc54b77f1e0905ad454063a13189"},{url:"cover/mod-synth.webp",revision:"7d47cac35b80190a3bce223d47756ae0"},{url:"cover/muted-io.webp",revision:"d03f4b77e5d8cddc8adc45c0a67abd50"},{url:"cover/note-sculptor.webp",revision:"67c78a7120358915332faa419a2e1f45"},{url:"cover/nv-1.webp",revision:"4c286383b8df97fae10976500d5456a9"},{url:"cover/olif-sy-1-k.webp",revision:"829a8b74f7a628fa5f319e39077687a2"},{url:"cover/omni.webp",revision:"413b121431478a3ea4aa3b3e26e19bc7"},{url:"cover/online-sequencer.webp",revision:"a5f83fc41f430f8ff6ddf9f45fbc57eb"},{url:"cover/pixel-synth.webp",revision:"f6457eb849297fbd07d5172a39573b4e"},{url:"cover/sample-stich.webp",revision:"2019a72c6963aebca1eb7e73fc5d8737"},{url:"cover/sampler.webp",revision:"2a705835f7ee08ef3b17dd29833cf85c"},{url:"cover/sound-box.webp",revision:"9bc7cf72ec4b983786028af651bfb97a"},{url:"cover/sound-trap.webp",revision:"424d3e69d2cabbbd222fa63e03333693"},{url:"cover/sympathetic.webp",revision:"3b98478cb9627398e816503b41ad91c8"},{url:"cover/tanguy-synth.webp",revision:"7dc2b96bdd88af09c835d1b3f6db0249"},{url:"cover/theremin.webp",revision:"fc256e4ea00b9e7d39fa76ef97677a55"},{url:"cover/touch-pianist.webp",revision:"75cf9432de7a642fe1c71f3dab956857"},{url:"cover/touchme.webp",revision:"c64942d3fbdba893f09b720dac8ecf2f"},{url:"cover/video-sampler.webp",revision:"d4b4af73791843f35f796824011cd4aa"},{url:"cover/virtual-piano.webp",revision:"ef9aacb9a39f6908c9d326c7ce588a8a"},{url:"cover/waveform.webp",revision:"fafd71aa1fb141d388d2df6d2e89b06e"},{url:"cover/web-audio-synth-v2.webp",revision:"14206290388166cf6cb7c4023c8b0503"},{url:"cover/web-modular.webp",revision:"ba22a1a127d07da1f494af6b4b1960bf"},{url:"cover/web-sid.webp",revision:"428998a4856ef3aff09ddd0e0d34bc7d"},{url:"cover/websynths.webp",revision:"d4d2b2796350e9cd786b3b68e1b225ff"},{url:"disco-computer/index.html",revision:"36eb4974e35f71f844a7969e88383ecf"},{url:"dotpiano/index.html",revision:"f97f44e3445a694458044a79b0487df0"},{url:"dx7/index.html",revision:"e7875568ea70fba6197960f31200f58a"},{url:"elementary/index.html",revision:"f34979928c4dcb413a579a4effe494e0"},{url:"groove-pizza/index.html",revision:"9a91c99a70216f19b88de76957dd4943"},{url:"icon.png",revision:"eb8e7369ba634f3bd1a96d889be50f7d"},{url:"index.html",revision:"af65e0dd32823ac78d358b88b25e67ef"},{url:"juno-106/index.html",revision:"d473ad175a94ce67c5777c362619309d"},{url:"line.svg",revision:"4866b853d0c5c97e9f654fa32580076a"},{url:"logo.svg",revision:"134c144f78e462c4672fc8f64e69df9e"},{url:"meet-the-heisenberg/index.html",revision:"29af2355e1df6a0c4fc1bb28c335c666"},{url:"midi-driven-web-audio/index.html",revision:"21c8702fde716dd83f8acdb394000c0c"},{url:"mod-synth/index.html",revision:"e2ce5071ccac2114201279958d86a10d"},{url:"muted-io/index.html",revision:"90996dacef5b8e1d5377080153af7f29"},{url:"note-sculptor/index.html",revision:"c9b0042ca43f8809d3e2d3d384956550"},{url:"nv-1/index.html",revision:"c7dc869e15500cfe6dacc2734aa77363"},{url:"olif-sy-1-k/index.html",revision:"8e10c81ec19c3822847f19b7e242e537"},{url:"omni/index.html",revision:"7e737e2901ed2a00c1946e8da9ad0ba4"},{url:"online-sequencer/index.html",revision:"434e9eea92002fb1083e3aceacbd78d4"},{url:"pixel-synth/index.html",revision:"cab0ff5bb881c2aec904e1988d344d41"},{url:"pl-logo.webp",revision:"9f0d66adf550fa40e8b2e03ff997eb34"},{url:"README.html",revision:"0ee2f1eff3a4948a2da27ed58b887c9b"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"sample-stich/index.html",revision:"731981b06a997484ff0a559857654221"},{url:"sampler/index.html",revision:"c92d8c6ff915e7938c40b5e14579bfe9"},{url:"sound-box/index.html",revision:"f4affe32bf35c1285e17a59252bfda02"},{url:"sound-trap/index.html",revision:"81db7783c12eeca493b2ebc1aec61b04"},{url:"sympathetic/index.html",revision:"b583a9698e4c92dd125b61ea1603e7d2"},{url:"tanguy-synth/index.html",revision:"45de326bf3c86a36155e8c5515e672e7"},{url:"theremin/index.html",revision:"f92f30dfddfeab05e99782e8e485eeee"},{url:"touch-pianist/index.html",revision:"84f6228c640c288f29d01ee4cc305828"},{url:"touchme/index.html",revision:"f3ebc22913ac5ee8715fbf836d604936"},{url:"video-sampler/index.html",revision:"9d19d5c65fcf87dbc27d8bcb561fb5a4"},{url:"virtual-piano/index.html",revision:"97bd557e67baca823993a4e737eb56c3"},{url:"waveform/index.html",revision:"45f567e7a3aaa6d595d79341a5385511"},{url:"web-audio-synth-v2/index.html",revision:"b692f8be58b1639a910b26b29fbab83c"},{url:"web-modular/index.html",revision:"665a0d2afd480b9bdf6c6ce6e95713eb"},{url:"web-sid/index.html",revision:"c1be447bec3a00dad735cacec478151f"},{url:"websynths/index.html",revision:"a4d07d15fe1cb711d052e59d0d0daf1d"},{url:"logo.svg",revision:"134c144f78e462c4672fc8f64e69df9e"},{url:"icon.png",revision:"eb8e7369ba634f3bd1a96d889be50f7d"},{url:"manifest.webmanifest",revision:"aee00a3fc5429948aa59c7d1c9d825cc"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

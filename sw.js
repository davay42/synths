if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,l)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let d={};const a=e=>i(e,r),o={module:{uri:r},exports:d,require:a};s[r]=Promise.all(n.map((e=>o[e]||a(e)))).then((e=>(l(...e),d)))}}define(["./workbox-f3e6b16a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"10b8d522572198ac879c76fdd94c1235"},{url:"ableton/index.html",revision:"737e27a184aceea05895029df580324b"},{url:"acid-machine-2/index.html",revision:"2919a753a8bf40df0f0869c8345413bb"},{url:"aqwertyon/index.html",revision:"58539b9a8e36d440cdb1ca58ab5d64c3"},{url:"archive/synthescheisse/index.html",revision:"723c41e4238ba7b9cacdc5e4649a2dee"},{url:"archive/synthescheisse/SYNTHESCHEISSE_files/script.js",revision:"0f2f9610db3c70bf3ef8128066641621"},{url:"archive/synthescheisse/SYNTHESCHEISSE_files/style.css",revision:"4f047b48cc6fa6eac39a6b6026a8e350"},{url:"assets/ableton_index.md.DczF5cM_.js",revision:null},{url:"assets/ableton_index.md.DczF5cM_.lean.js",revision:null},{url:"assets/acid-machine-2_index.md.C4UooCFo.js",revision:null},{url:"assets/acid-machine-2_index.md.C4UooCFo.lean.js",revision:null},{url:"assets/app.Dm9Ji9U6.js",revision:null},{url:"assets/aqwertyon_index.md.CZAWpKr8.js",revision:null},{url:"assets/aqwertyon_index.md.CZAWpKr8.lean.js",revision:null},{url:"assets/auth_accept.md.R6ZamVlX.js",revision:null},{url:"assets/auth_accept.md.R6ZamVlX.lean.js",revision:null},{url:"assets/auth_index.md.BVjxGfmo.js",revision:null},{url:"assets/auth_index.md.BVjxGfmo.lean.js",revision:null},{url:"assets/auth_invite.md.DHhCTrJe.js",revision:null},{url:"assets/auth_invite.md.DHhCTrJe.lean.js",revision:null},{url:"assets/auth_logout.md.C7-RQ5eA.js",revision:null},{url:"assets/auth_logout.md.C7-RQ5eA.lean.js",revision:null},{url:"assets/auth_reset.md.D4atnDLj.js",revision:null},{url:"assets/auth_reset.md.D4atnDLj.lean.js",revision:null},{url:"assets/auth.md.CB9uqvzU.js",revision:null},{url:"assets/auth.md.CB9uqvzU.lean.js",revision:null},{url:"assets/bassoon_index.md.C_N9zORK.js",revision:null},{url:"assets/bassoon_index.md.C_N9zORK.lean.js",revision:null},{url:"assets/beepbox_index.md.BFrttfbb.js",revision:null},{url:"assets/beepbox_index.md.BFrttfbb.lean.js",revision:null},{url:"assets/biliard_index.md.BhPgousJ.js",revision:null},{url:"assets/biliard_index.md.BhPgousJ.lean.js",revision:null},{url:"assets/binary-synth_index.md.DcZXnxhk.js",revision:null},{url:"assets/binary-synth_index.md.DcZXnxhk.lean.js",revision:null},{url:"assets/blokdust_index.md.CvFAyX8H.js",revision:null},{url:"assets/blokdust_index.md.CvFAyX8H.lean.js",revision:null},{url:"assets/cardboard-synth_index.md.Csc5mlCx.js",revision:null},{url:"assets/cardboard-synth_index.md.Csc5mlCx.lean.js",revision:null},{url:"assets/cardinal_index.md.D4rwGYLn.js",revision:null},{url:"assets/cardinal_index.md.D4rwGYLn.lean.js",revision:null},{url:"assets/chrome-lab_index.md.B7y1x_CN.js",revision:null},{url:"assets/chrome-lab_index.md.B7y1x_CN.lean.js",revision:null},{url:"assets/chunks/framework.Ch2f3zJW.js",revision:null},{url:"assets/chunks/index.CVGuM2cA.js",revision:null},{url:"assets/chunks/SynthPage.CH5KmkC0.js",revision:null},{url:"assets/chunks/theme.DaoXcD6v.js",revision:null},{url:"assets/chunks/useClicks.RkCdhX3B.js",revision:null},{url:"assets/chunks/virtual_pwa-register.BritzuXO.js",revision:null},{url:"assets/chunks/workbox-window.prod.es5.D5gOYdM7.js",revision:null},{url:"assets/disco-computer_index.md.BozNG4Al.js",revision:null},{url:"assets/disco-computer_index.md.BozNG4Al.lean.js",revision:null},{url:"assets/dotpiano_index.md.B10eDfL1.js",revision:null},{url:"assets/dotpiano_index.md.B10eDfL1.lean.js",revision:null},{url:"assets/dx7_index.md.jYNa1wS1.js",revision:null},{url:"assets/dx7_index.md.jYNa1wS1.lean.js",revision:null},{url:"assets/elementary_index.md.DdsqncAT.js",revision:null},{url:"assets/elementary_index.md.DdsqncAT.lean.js",revision:null},{url:"assets/granular_index.md.D13yGB7o.js",revision:null},{url:"assets/granular_index.md.D13yGB7o.lean.js",revision:null},{url:"assets/groove-pizza_index.md.B6khQlkH.js",revision:null},{url:"assets/groove-pizza_index.md.B6khQlkH.lean.js",revision:null},{url:"assets/index.md.MqSGm3kh.js",revision:null},{url:"assets/index.md.MqSGm3kh.lean.js",revision:null},{url:"assets/isleoftune_index.md.SXhjnOF6.js",revision:null},{url:"assets/isleoftune_index.md.SXhjnOF6.lean.js",revision:null},{url:"assets/juno-106_index.md.CttXbG04.js",revision:null},{url:"assets/juno-106_index.md.CttXbG04.lean.js",revision:null},{url:"assets/meet-the-heisenberg_index.md.m-zSoSCY.js",revision:null},{url:"assets/meet-the-heisenberg_index.md.m-zSoSCY.lean.js",revision:null},{url:"assets/microtonal_index.md.BQr2kZLD.js",revision:null},{url:"assets/microtonal_index.md.BQr2kZLD.lean.js",revision:null},{url:"assets/midi-city_index.md.DVcfycn_.js",revision:null},{url:"assets/midi-city_index.md.DVcfycn_.lean.js",revision:null},{url:"assets/midi-driven-web-audio_index.md.D5o01KIB.js",revision:null},{url:"assets/midi-driven-web-audio_index.md.D5o01KIB.lean.js",revision:null},{url:"assets/mod-synth_index.md.BWFZbtW3.js",revision:null},{url:"assets/mod-synth_index.md.BWFZbtW3.lean.js",revision:null},{url:"assets/multiplayer-orchestra_index.md.Bn1ZP0Le.js",revision:null},{url:"assets/multiplayer-orchestra_index.md.Bn1ZP0Le.lean.js",revision:null},{url:"assets/multiplayer-piano_index.md.wlXWLto-.js",revision:null},{url:"assets/multiplayer-piano_index.md.wlXWLto-.lean.js",revision:null},{url:"assets/muted-io_index.md.D43Qeahz.js",revision:null},{url:"assets/muted-io_index.md.D43Qeahz.lean.js",revision:null},{url:"assets/neosynth_index.md.Cl0lwbBL.js",revision:null},{url:"assets/neosynth_index.md.Cl0lwbBL.lean.js",revision:null},{url:"assets/note-sculptor_index.md.bqwLgWuL.js",revision:null},{url:"assets/note-sculptor_index.md.bqwLgWuL.lean.js",revision:null},{url:"assets/nv-1_index.md.Dlahz4z0.js",revision:null},{url:"assets/nv-1_index.md.Dlahz4z0.lean.js",revision:null},{url:"assets/olif-sy-1-k_index.md.B8Nf7_YA.js",revision:null},{url:"assets/olif-sy-1-k_index.md.B8Nf7_YA.lean.js",revision:null},{url:"assets/omni_index.md.5QqUvQT_.js",revision:null},{url:"assets/omni_index.md.5QqUvQT_.lean.js",revision:null},{url:"assets/online-sequencer_index.md.DHtuOuyO.js",revision:null},{url:"assets/online-sequencer_index.md.DHtuOuyO.lean.js",revision:null},{url:"assets/pixel-synth_index.md.DRhl36ra.js",revision:null},{url:"assets/pixel-synth_index.md.DRhl36ra.lean.js",revision:null},{url:"assets/polyrhythm3_index.md.5vdQPlmm.js",revision:null},{url:"assets/polyrhythm3_index.md.5vdQPlmm.lean.js",revision:null},{url:"assets/README.md.0WYYXl0I.js",revision:null},{url:"assets/README.md.0WYYXl0I.lean.js",revision:null},{url:"assets/roland50_index.md.DNCo20Ad.js",revision:null},{url:"assets/roland50_index.md.DNCo20Ad.lean.js",revision:null},{url:"assets/sample-stich_index.md.C6HSWhk4.js",revision:null},{url:"assets/sample-stich_index.md.C6HSWhk4.lean.js",revision:null},{url:"assets/sound-box_index.md.DMLjon_8.js",revision:null},{url:"assets/sound-box_index.md.DMLjon_8.lean.js",revision:null},{url:"assets/sound-trap_index.md.Bd-cTd-x.js",revision:null},{url:"assets/sound-trap_index.md.Bd-cTd-x.lean.js",revision:null},{url:"assets/soundfont_index.md.BuDQHXOa.js",revision:null},{url:"assets/soundfont_index.md.BuDQHXOa.lean.js",revision:null},{url:"assets/style.CROUv_Sd.css",revision:null},{url:"assets/sympathetic_index.md.DLgRO4uJ.js",revision:null},{url:"assets/sympathetic_index.md.DLgRO4uJ.lean.js",revision:null},{url:"assets/tanguy-synth_index.md.C2mPKMs8.js",revision:null},{url:"assets/tanguy-synth_index.md.C2mPKMs8.lean.js",revision:null},{url:"assets/theremin_index.md.C5ujLYR9.js",revision:null},{url:"assets/theremin_index.md.C5ujLYR9.lean.js",revision:null},{url:"assets/topos_index.md.Bv0poAaW.js",revision:null},{url:"assets/topos_index.md.Bv0poAaW.lean.js",revision:null},{url:"assets/touch-pianist_index.md.Dg8XINaj.js",revision:null},{url:"assets/touch-pianist_index.md.Dg8XINaj.lean.js",revision:null},{url:"assets/touchme_index.md.CWfXW_T_.js",revision:null},{url:"assets/touchme_index.md.CWfXW_T_.lean.js",revision:null},{url:"assets/typedrummer_index.md.CL6Zrx1F.js",revision:null},{url:"assets/typedrummer_index.md.CL6Zrx1F.lean.js",revision:null},{url:"assets/video-sampler_index.md.DGl1KLkc.js",revision:null},{url:"assets/video-sampler_index.md.DGl1KLkc.lean.js",revision:null},{url:"assets/virtual-piano_index.md.CK3tQKUU.js",revision:null},{url:"assets/virtual-piano_index.md.CK3tQKUU.lean.js",revision:null},{url:"assets/waveform_index.md.DD7Ze0Le.js",revision:null},{url:"assets/waveform_index.md.DD7Ze0Le.lean.js",revision:null},{url:"assets/web-audio-synth-v2_index.md.DlrY1C9Q.js",revision:null},{url:"assets/web-audio-synth-v2_index.md.DlrY1C9Q.lean.js",revision:null},{url:"assets/web-modular_index.md.CzwIYdsp.js",revision:null},{url:"assets/web-modular_index.md.CzwIYdsp.lean.js",revision:null},{url:"assets/web-sid_index.md.DrBhnxPl.js",revision:null},{url:"assets/web-sid_index.md.DrBhnxPl.lean.js",revision:null},{url:"auth.html",revision:"00677943b5fd48af15717a2605fd8189"},{url:"auth/accept.html",revision:"522c2aefa4794fa49ca247b241a7a72c"},{url:"auth/index.html",revision:"4648c5980e7181144c2b92a93db64172"},{url:"auth/invite.html",revision:"1bd8a69add48aae491b498f285c8801f"},{url:"auth/logout.html",revision:"1f63eb83c712c672fa2235c5f6064fc2"},{url:"auth/reset.html",revision:"e81ad6adba9752a02e499b17faae96dc"},{url:"bassoon/index.html",revision:"005d5fef9586e3d5d5230971aa5e8881"},{url:"beepbox/index.html",revision:"22a8b7d5f545b23a3e0181e36a64b652"},{url:"biliard/index.html",revision:"99db7630128d8ca7643c54f64a4ab2c2"},{url:"binary-synth/index.html",revision:"97cf3fb2837856f3272f2e276de0dbe7"},{url:"blokdust/index.html",revision:"828d5ebca0f56903aee0a8a82cdde14e"},{url:"cardboard-synth/index.html",revision:"191b04d2a1d2108f50d71c352ac24809"},{url:"cardinal/index.html",revision:"a134965dac2772e99daa40cd785f21e1"},{url:"chrome-lab/index.html",revision:"e70c16aa98635d7e21958e96b8b5369b"},{url:"click-logo.svg",revision:"f15e71cb394926c5f8c08f64186d2d49"},{url:"cover/ableton.webp",revision:"ff3a22aa28084b93c0aad2e6569657e0"},{url:"cover/acid-machine-2.webp",revision:"29fcf6a6ce374dfc8391fe6544b5f08e"},{url:"cover/aqwertyon.webp",revision:"afab8d4bdeccf669a03617c5ce738fb7"},{url:"cover/bassoon.webp",revision:"68d4a434861c2f294623fe762e694ee6"},{url:"cover/beepbox.webp",revision:"e4f93e998951d212c5b678b425769537"},{url:"cover/biliard.webp",revision:"de153e95a72f67e8e2bc5b123ac1d50b"},{url:"cover/binary-synth.webp",revision:"30cff76fd2b6a32053a76622a54f1108"},{url:"cover/blokdust.webp",revision:"0613b83a920d709a268d9de2284a0354"},{url:"cover/cardboard-synth.webp",revision:"f93526fee97f6674940ca367cb841b58"},{url:"cover/cardinal.webp",revision:"1cf71dbecd04b9046aa68389b5a12dd0"},{url:"cover/chrome-lab.webp",revision:"d18ee6ca84364e4d175efa054a736fd9"},{url:"cover/disco-computer.webp",revision:"5dd18857caabf0cf1320d82537daa7d1"},{url:"cover/dotpiano.webp",revision:"c08549fc8ca38e2f4b6d1853b947ad3f"},{url:"cover/dx7.webp",revision:"a401e52d21c6d5e44240645b09d9f9c6"},{url:"cover/elementary.webp",revision:"6368b81c56ee656371254dd87bb421e8"},{url:"cover/granular.webp",revision:"b95f2781eb6c89580991d829f6c6dfa6"},{url:"cover/groove-pizza.webp",revision:"ace880a23d7a39082a02a011d15ef278"},{url:"cover/isleoftune.webp",revision:"4aa136591dee0383df4d60b551bb94d8"},{url:"cover/juno-106.webp",revision:"08c31646032ced1d4c48d295b9c0ca94"},{url:"cover/meet-the-heisenberg.webp",revision:"52318d42eb06e04073f209dd1f1e5c41"},{url:"cover/microtonal.webp",revision:"d4d2b2796350e9cd786b3b68e1b225ff"},{url:"cover/midi-city.webp",revision:"fecb8bf989aba90045bd17cfd0748576"},{url:"cover/midi-driven-web-audio.webp",revision:"897bbc54b77f1e0905ad454063a13189"},{url:"cover/mod-synth.webp",revision:"7d47cac35b80190a3bce223d47756ae0"},{url:"cover/multiplayer-orchestra.webp",revision:"de82211bb0cf8997437f9b263e1dd1b2"},{url:"cover/multiplayer-piano.webp",revision:"70e6eba35fc631046c89637286b57f29"},{url:"cover/muted-io.webp",revision:"d03f4b77e5d8cddc8adc45c0a67abd50"},{url:"cover/neosynth.webp",revision:"2e2d602c48a8d80d8a8bdb8000065807"},{url:"cover/note-sculptor.webp",revision:"67c78a7120358915332faa419a2e1f45"},{url:"cover/nv-1.webp",revision:"4c286383b8df97fae10976500d5456a9"},{url:"cover/olif-sy-1-k.webp",revision:"829a8b74f7a628fa5f319e39077687a2"},{url:"cover/omni.webp",revision:"413b121431478a3ea4aa3b3e26e19bc7"},{url:"cover/online-sequencer.webp",revision:"a5f83fc41f430f8ff6ddf9f45fbc57eb"},{url:"cover/pixel-synth.webp",revision:"f6457eb849297fbd07d5172a39573b4e"},{url:"cover/polyrhythm3.webp",revision:"3d8c7702e8181d85cb1875a1a8e51e0c"},{url:"cover/roland50.webp",revision:"1a9fe1ddb1dcd07cb42cd52567ca7173"},{url:"cover/sample-stich.webp",revision:"2019a72c6963aebca1eb7e73fc5d8737"},{url:"cover/sound-box.webp",revision:"9bc7cf72ec4b983786028af651bfb97a"},{url:"cover/sound-trap.webp",revision:"424d3e69d2cabbbd222fa63e03333693"},{url:"cover/soundfont.webp",revision:"c534fa79bd1c6f0c93244189778d400b"},{url:"cover/sympathetic.webp",revision:"3b98478cb9627398e816503b41ad91c8"},{url:"cover/tanguy-synth.webp",revision:"7dc2b96bdd88af09c835d1b3f6db0249"},{url:"cover/theremin.webp",revision:"fc256e4ea00b9e7d39fa76ef97677a55"},{url:"cover/topos.webp",revision:"43b64de4250b21fed95712b9bb5d0ad6"},{url:"cover/touch-pianist.webp",revision:"75cf9432de7a642fe1c71f3dab956857"},{url:"cover/touchme.webp",revision:"c64942d3fbdba893f09b720dac8ecf2f"},{url:"cover/typedrummer.webp",revision:"8d7be4a5046e7335cf6b91caea120e43"},{url:"cover/video-sampler.webp",revision:"d4b4af73791843f35f796824011cd4aa"},{url:"cover/virtual-piano.webp",revision:"ef9aacb9a39f6908c9d326c7ce588a8a"},{url:"cover/waveform.webp",revision:"fafd71aa1fb141d388d2df6d2e89b06e"},{url:"cover/web-audio-synth-v2.webp",revision:"14206290388166cf6cb7c4023c8b0503"},{url:"cover/web-modular.webp",revision:"ba22a1a127d07da1f494af6b4b1960bf"},{url:"cover/web-sid.webp",revision:"428998a4856ef3aff09ddd0e0d34bc7d"},{url:"disco-computer/index.html",revision:"fa4b4530474cb98c04280f3d1941da93"},{url:"dotpiano/index.html",revision:"d5059e7b7c0ce834db168f4e72951bb0"},{url:"dx7/index.html",revision:"62f7a12722b85052ac1a4df89a70bafc"},{url:"elementary/index.html",revision:"04309f2e02d869f2856d07aa78087238"},{url:"granular/index.html",revision:"84a72568a5ca9cce53c4bc1276a3dc20"},{url:"groove-pizza/index.html",revision:"dec10d8fdf95fef6d4caffb2f8855dc8"},{url:"icon.png",revision:"eb8e7369ba634f3bd1a96d889be50f7d"},{url:"index.html",revision:"67d120cb946157caffb0ea11f4f642b3"},{url:"isleoftune/index.html",revision:"a6727a6cf9cf18ae1ddbca8b94002064"},{url:"juno-106/index.html",revision:"f33ee693263cae165a1fee2a678cc9af"},{url:"line.svg",revision:"4866b853d0c5c97e9f654fa32580076a"},{url:"logo.svg",revision:"134c144f78e462c4672fc8f64e69df9e"},{url:"meet-the-heisenberg/index.html",revision:"b40d17b3e24a17e829945f943c0b3e12"},{url:"microtonal/index.html",revision:"b2f9466eb9817c6af9aad006918d8c8c"},{url:"midi-city/index.html",revision:"1e98178a32d1b72c8bbe19ff8ebaeae5"},{url:"midi-driven-web-audio/index.html",revision:"f17ac88244e9067de68d73e3bb21369a"},{url:"mod-synth/index.html",revision:"7dc7c9049e02a9282fcf51747ae7587e"},{url:"multiplayer-orchestra/index.html",revision:"a9f5a9b1af0475d1b4d39fefa39d14cf"},{url:"multiplayer-piano/index.html",revision:"975b8fe8b8c55c26593ed452cc6a0bff"},{url:"muted-io/index.html",revision:"5f016475a46761ca9bc8ca8a010ee0a3"},{url:"neosynth/index.html",revision:"bf49e9f5b9b9921e672c96a8648a28d4"},{url:"note-sculptor/index.html",revision:"20ce9c70d1a78d67725ea13fad988439"},{url:"nv-1/index.html",revision:"862ec2018585db3f74596f640260531f"},{url:"olif-sy-1-k/index.html",revision:"321b5ae1d82f54900347b857071bd006"},{url:"omni/index.html",revision:"12922cd4f5d7178b2825344f75efb33f"},{url:"online-sequencer/index.html",revision:"0f5d25568ba5a64e5a9f47a2e6f59cb2"},{url:"pixel-synth/index.html",revision:"3428417b14614bfbaafa6da92609d77c"},{url:"pl-logo.webp",revision:"9f0d66adf550fa40e8b2e03ff997eb34"},{url:"polyrhythm3/index.html",revision:"b9405ff52ed17ab0ced6673835055d46"},{url:"README.html",revision:"fd481300efe4ddcddf1dd7a37cd42a93"},{url:"roland50/index.html",revision:"a4faff4dd06cd4ba383cc8de8edc9962"},{url:"sample-stich/index.html",revision:"80a708b29f008beb03f04f063bd35c8a"},{url:"sound-box/index.html",revision:"d3e4c8639562dc7073af70baa710d53c"},{url:"sound-trap/index.html",revision:"c37b3712b080aa83fe20b93e119ed367"},{url:"soundfont/index.html",revision:"626b00d228cbd8772f432b6c1326c3c7"},{url:"sympathetic/index.html",revision:"822f497dd0d4dbc4aab3b56ff45e0f65"},{url:"tanguy-synth/index.html",revision:"5781d8105249fbcfeb257248cfc7bffa"},{url:"theremin/index.html",revision:"60dc7615c111e94321b73508ffe3362e"},{url:"topos/index.html",revision:"a2ffaa8ffd2e4d79ffb09346623c9bf7"},{url:"touch-pianist/index.html",revision:"8252f41af9944e561e6372764789b458"},{url:"touchme/index.html",revision:"18051bf9159affbfce0363d70fdb58a7"},{url:"typedrummer/index.html",revision:"530c8e2c1ab18bf2b617dc2a30919b97"},{url:"video-sampler/index.html",revision:"a5714ea30d7856287e6434f2582ddd3b"},{url:"virtual-piano/index.html",revision:"4c70117a60b5a2d7ff489c966659f25f"},{url:"waveform/index.html",revision:"290409d4ea378be1294be6058ba1dcf7"},{url:"web-audio-synth-v2/index.html",revision:"4845cbbf4ddf8ba804fb3eb8aa1fcc01"},{url:"web-modular/index.html",revision:"5dcbf9b35d59bfcd4a7c216b727440df"},{url:"web-sid/index.html",revision:"dba48c1d400f0ec1d1826c09cf7d3b85"},{url:"logo.svg",revision:"134c144f78e462c4672fc8f64e69df9e"},{url:"icon.png",revision:"eb8e7369ba634f3bd1a96d889be50f7d"},{url:"manifest.webmanifest",revision:"aee00a3fc5429948aa59c7d1c9d825cc"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));

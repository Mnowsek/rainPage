(() => {
    "use strict";
    var n = {
            3629(n, e, o) {
                o.d(e, { A: () => u });
                var i = o(1601),
                    r = o.n(i),
                    t = o(6314),
                    a = o.n(t),
                    c = o(4417),
                    s = o.n(c),
                    l = new URL(o(2532), o.b),
                    d = new URL(o(7958), o.b),
                    g = a()(r()),
                    m = s()(l),
                    p = s()(d);
                g.push([
                    n.id,
                    `@font-face { font-family: Rodondo; src: url(${m}); font-display: swap; }\n@font-face { font-family: RainMenu; src: url(${p}); font-display: swap; }\n\n@property --iais { /* is any item selected */\n  syntax: '<number>';\n  initial-value: 0;\n  inherits: true;\n}\n\n@property --iais-left {\n  syntax: '<length-percentage>';\n  initial-value: 0px;\n  inherits: true;\n}\n\n@property --iais-trans {\n  syntax: '<transform-function>';\n  initial-value: translateX(50%);\n  inherits: true;\n}\n\n@property --iais-opacity {\n  syntax: '<number>';\n  initial-value: 0;\n  inherits: true;\n}\n\n@property --iais-pe { /* is any item selected - pointer events */\n  syntax: 'none | all';\n  initial-value: none;\n  inherits: true;\n}\n\n@property --bg-mpx {\n  syntax: '<number>';\n  initial-value: 0;\n  inherits: true;\n}\n\n@property --bg-mpy {\n  syntax: '<number>';\n  initial-value: 0;\n  inherits: true;\n}\n\nhtml {\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n  \n  transition: --iais-left 1s, --iais-trans 1s, --iais-opacity 1s;\n  transition-timing-function: cubic-bezier(.37,.34,.22,.99), cubic-bezier(.37,.34,.22,.99), cubic-bezier(1,0,.56,.99);\n  \n  --iais: 0;\n  --iais-left    : calc(15% + 35% * (1 - var(--iais)));\n  --iais-trans   : translateX(calc(-50% * (1 - var(--iais))));\n  --iais-opacity : var(--iais);\n}\n\nbody {\n  background: #000000;\n  margin: 0;\n  overflow: hidden;\n  background-size: cover;\n}\n\na {\n  text-decoration: none;\n}\n\n.button {\n  display: block;\n  color: #A9A4B2;\n  line-height: 38px;\n  font-family: RainMenu;\n  font-size: medium;\n  text-align: center;\n  user-select: none;\n}\n\n#btn-back {\n  position: absolute;\n  top: 7%;\n  left: var(--iais-left);\n  transform: var(--iais-trans);\n  height: 40px;\n  width: 15%;\n}\n\n#item-list {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  scrollbar-color: #ffff #0000;\n  scrollbar-width: thin;\n  overflow-x: hidden;\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  box-sizing: border-box;\n  mask-image:\n    linear-gradient(to top, #0000 0%, #000 5%, #000 calc(100% - 5%), #0000 100%),\n    linear-gradient(to right, #0000 0%, #0000 calc(100% - 10px), #000 calc(100% - 10px), #000 100%); /* used to unmask the scrollbar*/\n  mask-composite: add;\n}\n\n#item-list-border {\n  background: linear-gradient(to top, #0000, #0008 10%, #0008 90%, #0000);\n  position: absolute;\n  width: 15%;\n  left: var(--iais-left);\n  transform: var(--iais-trans);\n  top: calc(9% + 40px);\n  bottom: 7%;\n}\n\n#item-list-border::after {\n  content: "";\n  position: absolute;\n  top: 0%;\n  left: -2px;\n  width: calc(100% + 4px);\n  height: 100%;\n  background: linear-gradient(to top, #0000, #FFF 10%, #FFF 90%, #0000);\n  mask-image: linear-gradient(to right, #000 0%, #000 2px, #0000 2px, #0000 calc(100% - 2px), #000 calc(100% - 2px), #000 100%);\n  pointer-events: none;\n}\n\n#item-list-border::before {\n  content: "";\n  position: absolute;\n  top: 0%;\n  left: 0%;\n  width: 100%;\n  height: 100%;\n  backdrop-filter: blur(10px);\n  mask-image: linear-gradient(to top, #0000, #000 10%, #000 90%, #0000);\n}\n\n\n#item-info {\n  --box-bg-col: #0008;\n  width: 50%;\n  height: 90%;\n  position: absolute;\n  right: 15%;\n  top: 5%;\n  pointer-events: var(--iais-pe);\n  opacity: var(--iais-opacity);\n}\n\n.item-info-content {\n  font-family: RainMenu;\n  color: #FFF;\n  padding: 40px;\n  position: absolute;\n  inset: 0;\n  opacity: 0;\n  pointer-events: none;\n  user-select: none;\n  transition-property: opacity;\n  transition-duration: 0.5s;\n  display: flex;\n  flex-direction: column;\n  scrollbar-color: #ffff #0000;\n  scrollbar-width: thin;\n}\n\n.item-info-content.selected {\n  pointer-events: initial;\n  user-select: initial;\n  opacity: 1;\n}\n\n\n.item-info-text {\n  height: 100%;\n  overflow-y: auto;\n  flex-shrink: 1;\n  flex-grow: 1;\n  text-align: justify;\n  mask-image: linear-gradient(to bottom, #0000 0, #000 1em, #000 calc(100% - 1em), #0000 100%);\n  padding-top: 2em;\n  padding-bottom: 2em;\n}\n\n.item-info-images-scroll {\n  width: 100%;\n  overflow-x: auto;\n  overflow-y: hidden;\n  flex-shrink: 0;\n  flex-grow: 0;\n}\n\n.item-info-images {\n  width: 100%;\n  min-width: fit-content;\n  height: 150px;\n  margin-top: 10px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.item-info-images img {\n  height: 100%;\n  margin-left: 10px;\n  margin-right: 10px;\n  border-radius: 10px;\n}\n\n#item-info-backblur {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  backdrop-filter: blur(10px);\n  mask-image:\n  linear-gradient(to top, #0000 0%, #000 40px, #000 calc(100% - 40px), #0000 100%),\n  linear-gradient(to right, #0000 0%, #000 40px, #000 calc(100% - 40px), #0000 100%);\n  mask-composite: intersect;\n}\n\n.item {\n  display: block;\n  position: relative;\n  font-family: RainMenu;\n  color: #A9A4B2;\n  margin-left: 1.6em;\n  line-height: 1.2em;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  user-select: none;\n  transition-property: color;\n  transition-duration: 0.1s;\n  cursor: default;\n  /* image-rendering: pixelated; */\n}\n\n.item:hover {\n  color: #FFF;\n}\n\n@keyframes item-glow-anim {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n.item::before {\n  content: "";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  /* transform: translateX(-10%); */\n}\n\n.item-info-text-image {\n  height: 150px;\n  border-radius: 10px;\n}\n\n.item-info-text-image-large {\n  height: 200px;\n  border-radius: 10px;\n}\n\n.w100 {\n  width: 100%;\n}\n\n.item-info-text-box {\n  display: inline-block;\n  --box-bg-col: #a9a4b255;\n  height: fit-content;\n}\n\n.item-info-text-box-content {\n  padding: 10px;\n  height: auto;\n}\n\n.item:hover::before {\n  background: radial-gradient(#FFF4, #0000 80%, #0000);\n  animation-name: item-glow-anim;\n  animation-duration: 0.5s;\n  animation-iteration-count: infinite;\n}\n\n.item-img {\n  position: absolute;\n  top: 50%;\n  left: -1.4em;\n  width: 1.2em;\n  height: 1.2em;\n  transform: translateY(-50%);\n}\n\n.item-category {\n  position: relative;\n  font-family: RainMenu;\n  color: #FFF;\n  font-size: 1.4em;\n  width: fit-content;\n  left: 50%;\n  transform: translateX(-50%);\n  text-align: center;\n  user-select: none;\n}\n\n.item-category::before {\n  position: absolute;\n  top: 50%;\n  right: calc(100% + 10px);\n  content: "";\n  width: calc(7.5vw - 50% - 20px);\n  height: 2px;\n  background: linear-gradient(to left, #FFF 50%, #0000);\n}\n\n.item-category::after {\n  position: absolute;\n  top: 50%;\n  left: calc(100% + 10px);\n  content: "";\n  width: calc(7.5vw - 50% - 20px);\n  height: 2px;\n  background: linear-gradient(to right, #FFF 50%, #0000);\n}\n\n.item.selected::before {\n  background: radial-gradient(#34723444, #0000 80%, #0000)\n}\n\n.item-info-content > h1 {\n  margin: 0;\n  margin-left: 2.4em;\n  position: relative;\n}\n\n.item-info-title-img {\n  position: absolute;\n  top: 50%;\n  left: -2.4em;\n  width: 2em;\n  height: auto;\n  transform: translateY(-50%);\n  image-rendering: pixelated;\n}\n\n.item-table tr {\n  padding-left: 5px;\n  padding-right: 5px;\n  border-bottom: 2px solid #ffffff;\n\n}\n\n.item-table td {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n#bg-image1,\n#bg-image2,\n#bg-image3,\n#bg-image4,\n#bg-image5,\n#bg-image6,\n#bg-image7 {\n  position: absolute;\n  width: 150%;\n  height: auto;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n#bg-image1 {transform: translate(calc(-50% -   1vw * var(--bg-mpx)), calc(-50% -   1vw * var(--bg-mpy)))}\n#bg-image2 {transform: translate(calc(-50% -   2vw * var(--bg-mpx)), calc(-50% -   2vw * var(--bg-mpy)))}\n#bg-image3 {transform: translate(calc(-50% -   3vw * var(--bg-mpx)), calc(-50% -   3vw * var(--bg-mpy)))}\n#bg-image4 {transform: translate(calc(-50% -   4vw * var(--bg-mpx)), calc(-50% -   4vw * var(--bg-mpy)))}\n#bg-image5 {transform: translate(calc(-50% -   5vw * var(--bg-mpx)), calc(-50% -   5vw * var(--bg-mpy)))}\n#bg-image6 {transform: translate(calc(-50% - 5.1vw * var(--bg-mpx)), calc(-50% - 5.1vw * var(--bg-mpy)))}\n#bg-image7 {transform: translate(calc(-50% -   7vw * var(--bg-mpx)), calc(-50% -   7vw * var(--bg-mpy)))}\n\n#background {\n  position: absolute;\n  width : 100vw;\n  height: 56.25vw;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 0;\n}\n\n#background::after {\n  content: "";\n  background-image: linear-gradient(to bottom, black 0%, black 95%, #0000 100%);\n  position: absolute;\n  width: 100%;\n  height: 100vw;\n  top: 0%;\n  left: 0%;\n  transform: translateY(-95%);\n  z-index: 1;\n}\n\n#background::before {\n  content: "";\n  background-image: linear-gradient(to top, black 0%, black 95%, #0000 100%);\n  position: absolute;\n  width: 100%;\n  height: 100vw;\n  bottom: 0%;\n  left: 0%;\n  transform: translateY(95%);\n  z-index: 1;\n}\n\n/* 😭 */\n#item-blue-fruit.selected            { color: #0000ff; }\n#item-blue-fruit.selected:hover      { color: #6666FF; }\n#item-bubble-fruit.selected          { color: #0d4db3; }\n#item-bubble-fruit.selected:hover    { color: #83b3ff; }\n#item-slime-mold.selected            { color: #ff9900; }\n#item-slime-mold.selected:hover      { color: #ffcc80; }\n#item-karma-flower.selected          { color: #f7b45b; }\n#item-karma-flower.selected:hover    { color: #ffddb1; }\n#item-eggbug-egg.selected            { color: #00ff78; }\n#item-eggbug-egg.selected:hover      { color: #7dffba; }\n#item-lilypuck.selected              { color: #2bf5ff; }\n#item-lilypuck.selected:hover        { color: #a2faff; }\n#item-mushroom.selected              { color: #ffffff; }\n#item-mushroom.selected:hover        { color: #bebebe; }\n#item-rock.selected                  { color: #ffffff; }\n#item-rock.selected:hover            { color: #c5c3ca; }\n#item-spear.selected                 { color: #ffffff; }\n#item-spear.selected:hover           { color: #c5c3ca; }\n#item-grenade.selected               { color: #e60e0e; }\n#item-grenade.selected:hover         { color: #dc5252; }\n#item-explosive-spear.selected       { color: #e60e0e; }\n#item-explosive-spear.selected:hover { color: #ff8383; }\n#item-cherrybomb.selected            { color: #AE281E; }\n#item-cherrybomb.selected:hover      { color: #bd4c44; }\n#item-flashbang.selected             { color: #bbaeff; }\n#item-flashbang.selected:hover       { color: #ded7ff; }\n#item-batnip.selected                { color: #ac4335; }\n#item-batnip.selected:hover          { color: #ad655c; }\n#item-lantern.selected               { color: #ff9251; }\n#item-lantern.selected:hover         { color: #fab188; }\n#item-spore-puff.selected            { color: #ffffff; }\n#item-spore-puff.selected:hover      { color: #c5c3ca; }\n#item-vulture-mask.selected          { color: #ffffff; }\n#item-vulture-mask.selected:hover    { color: #c5c3ca; }\n\n#item-blue-fruit.selected::before            { background-image: radial-gradient(#0000ff44, #0000 80%, #0000); }\n#item-blue-fruit.selected:hover::before      { background-image: radial-gradient(#6666FF44, #0000 80%, #0000); }\n#item-bubble-fruit.selected::before          { background-image: radial-gradient(#0d4db344, #0000 80%, #0000); }\n#item-bubble-fruit.selected:hover::before    { background-image: radial-gradient(#83b3ff44, #0000 80%, #0000); }\n#item-slime-mold.selected::before            { background-image: radial-gradient(#ff990044, #0000 80%, #0000); }\n#item-slime-mold.selected:hover::before      { background-image: radial-gradient(#ffcc8044, #0000 80%, #0000); }\n#item-karma-flower.selected::before          { background-image: radial-gradient(#f7b45b44, #0000 80%, #0000); }\n#item-karma-flower.selected:hover::before    { background-image: radial-gradient(#ffddb144, #0000 80%, #0000); }\n#item-eggbug-egg.selected::before            { background-image: radial-gradient(#00ff7844, #0000 80%, #0000); }\n#item-eggbug-egg.selected:hover::before      { background-image: radial-gradient(#7dffba44, #0000 80%, #0000); }\n#item-lilypuck.selected::before              { background-image: radial-gradient(#2bf5ff44, #0000 80%, #0000); }\n#item-lilypuck.selected:hover::before        { background-image: radial-gradient(#a2faff44, #0000 80%, #0000); }\n#item-mushroom.selected::before              { background-image: radial-gradient(#ffffff44, #0000 80%, #0000); }\n#item-mushroom.selected:hover::before        { background-image: radial-gradient(#bebebe44, #0000 80%, #0000); }\n#item-rock.selected::before                  { background-image: radial-gradient(#e2dfe844, #0000 80%, #0000); }\n#item-rock.selected:hover::before            { background-image: radial-gradient(#c5c3ca44, #0000 80%, #0000); }\n#item-spear.selected::before                 { background-image: radial-gradient(#e2dfe844, #0000 80%, #0000); }\n#item-spear.selected:hover::before           { background-image: radial-gradient(#c5c3ca44, #0000 80%, #0000); }\n#item-grenade.selected::before               { background-image: radial-gradient(#e60e0e44, #0000 80%, #0000); }\n#item-grenade.selected:hover::before         { background-image: radial-gradient(#dc525244, #0000 80%, #0000); }\n#item-explosive-spear.selected::before       { background-image: radial-gradient(#e60e0e44, #0000 80%, #0000); }\n#item-explosive-spear.selected:hover::before { background-image: radial-gradient(#ff838344, #0000 80%, #0000); }\n#item-cherrybomb.selected::before            { background-image: radial-gradient(#AE281E44, #0000 80%, #0000); }\n#item-cherrybomb.selected:hover::before      { background-image: radial-gradient(#bd4c4444, #0000 80%, #0000); }\n#item-flashbang.selected::before             { background-image: radial-gradient(#e2dfe844, #0000 80%, #0000); }\n#item-flashbang.selected:hover::before       { background-image: radial-gradient(#c5c3ca44, #0000 80%, #0000); }\n#item-batnip.selected::before                { background-image: radial-gradient(#ac433544, #0000 80%, #0000); }\n#item-batnip.selected:hover::before          { background-image: radial-gradient(#ad655c44, #0000 80%, #0000); }\n#item-lantern.selected::before               { background-image: radial-gradient(#ff925144, #0000 80%, #0000); }\n#item-lantern.selected:hover::before         { background-image: radial-gradient(#fab18844, #0000 80%, #0000); }\n#item-spore-puff.selected::before            { background-image: radial-gradient(#e2dfe844, #0000 80%, #0000); }\n#item-spore-puff.selected:hover::before      { background-image: radial-gradient(#c5c3ca44, #0000 80%, #0000); }\n#item-vulture-mask.selected::before          { background-image: radial-gradient(#e2dfe844, #0000 80%, #0000); }\n#item-vulture-mask.selected:hover::before    { background-image: radial-gradient(#c5c3ca44, #0000 80%, #0000); }\n\n#item-info-blue-fruit      > h1 { color: #0000ff; }\n#item-info-bubble-fruit    > h1 { color: #0d4db3; }\n#item-info-slime-mold      > h1 { color: #ff9900; }\n#item-info-karma-flower    > h1 { color: #f7b45b; }\n#item-info-eggbug-egg      > h1 { color: #00ff78; }\n#item-info-lilypuck        > h1 { color: #2bf5ff; }\n#item-info-mushroom        > h1 { color: #ffffff; }\n#item-info-rock            > h1 { color: #e2dfe8; }\n#item-info-spear           > h1 { color: #e2dfe8; }\n#item-info-grenade         > h1 { color: #e60e0e; }\n#item-info-explosive-spear > h1 { color: #e60e0e; }\n#item-info-cherrybomb      > h1 { color: #AE281E; }\n#item-info-flashbang       > h1 { color: #bbaeff; }\n#item-info-batnip          > h1 { color: #ac4335; }\n#item-info-lantern         > h1 { color: #ff9251; }\n#item-info-spore-puff      > h1 { color: #e2dfe8; }\n#item-info-vulture-mask    > h1 { color: #e2dfe8; }\n\n#item-info-blue-fruit-eng      { color: #6666FF; opacity: 0.5; float: right; }\n#item-info-bubble-fruit-eng    { color: #83b3ff; opacity: 0.5; float: right; }\n#item-info-slime-mold-eng      { color: #ffcc80; opacity: 0.5; float: right; }\n#item-info-karma-flower-eng    { color: #ffddb1; opacity: 0.5; float: right; }\n#item-info-eggbug-egg-eng      { color: #7dffba; opacity: 0.5; float: right; }\n#item-info-lilypuck-eng        { color: #a2faff; opacity: 0.5; float: right; }\n#item-info-mushroom-eng        { color: #bebebe; opacity: 0.5; float: right; }\n#item-info-rock-eng            { color: #c5c3ca; opacity: 0.5; float: right; }\n#item-info-spear-eng           { color: #c5c3ca; opacity: 0.5; float: right; }\n#item-info-grenade-eng         { color: #dc5252; opacity: 0.5; float: right; }\n#item-info-explosive-spear-eng { color: #ff8383; opacity: 0.5; float: right; }\n#item-info-cherrybomb-eng      { color: #bd4c44; opacity: 0.5; float: right; }\n#item-info-flashbang-eng       { color: #ded7ff; opacity: 0.5; float: right; }\n#item-info-batnip-eng          { color: #ad655c; opacity: 0.5; float: right; }\n#item-info-lantern-eng         { color: #fab188; opacity: 0.5; float: right; }\n#item-info-spore-puff-eng      { color: #c5c3ca; opacity: 0.5; float: right; }\n#item-info-vulture-mask-eng    { color: #c5c3ca; opacity: 0.5; float: right; }\n`,
                    "",
                ]);
                const u = g;
            },
            400(n, e, o) {
                o.d(e, { A: () => c });
                var i = o(1601),
                    r = o.n(i),
                    t = o(6314),
                    a = o.n(t)()(r());
                a.push([
                    n.id,
                    "@property --box-scale {\n  syntax: '<number>';\n  initial-value: 1;\n  inherits: true;\n}\n\n@property --box-col {\n  syntax: '<color>';\n  initial-value: #FFFFFF;\n  inherits: true;\n}\n\n@property --box-bg-col {\n  syntax: '<color>';\n  initial-value: #00000000;\n  inherits: true;\n}\n\nmw-svgdiv.box {\n  --svg-x : 0px;\n  --svg-y : 0px;\n  --svg-sx: 100%;\n  --svg-sy: 100%;\n  \n  --box-scale: 1.25;\n  \n  --box-col: #FFF;\n}\n\nmw-svgdiv.box.disabled {\n  --svg-x : 0px;\n  --svg-y : 0px;\n  --svg-sx: 100%;\n  --svg-sy: 100%;\n  \n  --box-scale: 1.25;\n  \n  --box-bg-col: #0007;\n  --box-col: #6c6c6c;\n}",
                    "",
                ]);
                const c = a;
            },
            8984(n, e, o) {
                o.d(e, { A: () => c });
                var i = o(1601),
                    r = o.n(i),
                    t = o(6314),
                    a = o.n(t)()(r());
                a.push([
                    n.id,
                    "@property --box-check-dist {\n  syntax: '<length>';\n  initial-value: 0px;\n  inherits: true;\n}\n\n@property --box-check-col {\n  syntax: '<color>';\n  initial-value: #FFFFFF;\n  inherits: true;\n}\n\nmw-svgdiv.check-box {\n  display: block;\n  \n  --svg-x : 0px;\n  --svg-y : 0px;\n  --svg-sx: 100%;\n  --svg-sy: 100%;\n  \n  --box-scale: 1.25;\n  \n  --box-sel-dist: 0px;\n  --box-col: #4B4653;\n  --box-sel-col: #0000;\n  --box-check-col: #0000;\n  --box-bg-col: #0007;\n  color: #A9A4B2;\n  \n  transition: --box-sel-dist 0.1s, --box-check-dist 0.1s, --svg-x 0.1s, --svg-y 0.1s, --svg-sx 0.1s, --svg-sy 0.1s, --box-sel-col 0.4s, --box-col 0.4s, color 0.4s;\n  transition-timing-function: linear;\n}\n\nmw-svgdiv.check-box:hover {\n  --svg-x : -5px;\n  --svg-y : -5px;\n  --svg-sx: calc(100% + 10px);\n  --svg-sy: calc(100% + 10px);\n  \n  --box-sel-dist: 5px;\n  --box-col: #FFF;\n  --box-sel-col: #FFF;\n  --box-bg-col: #0009;\n  color: #FFF;\n  \n  transition: --box-sel-dist 0.25s, --svg-x 0.25s, --svg-y 0.25s, --svg-sx 0.25s, --svg-sy 0.25s, --box-sel-col 0.25s, --box-col 0.25s, color 0.25s;\n  transition-timing-function: cubic-bezier(.6,.11,0,1.66);\n  \n  animation-name: flicker, flash;\n  animation-iteration-count: infinite, 1;\n  animation-duration: 0.40s, 0.1s;\n  animation-timing-function: ease-in-out, ease-in-out;\n}\n\nmw-svgdiv.check-box:active {\n  transition: --box-sel-dist 0.05s, --svg-x 0.05s, --svg-y 0.05s, --svg-sx 0.05s, --svg-sy 0.05s, --box-sel-col 0.4s, --box-col 0.4s, color 0.4s;\n  --svg-x : 0px;\n  --svg-y : 0px;\n  --svg-sx: 100%;\n  --svg-sy: 100%;\n  --box-sel-dist: 0px;\n  animation-name: none;\n}\n\n\nmw-svgdiv.check-box.checked {\n  --svg-x : -5px;\n  --svg-y : -5px;\n  --svg-sx: calc(100% + 10px);\n  --svg-sy: calc(100% + 10px);\n  --box-check-dist: 5px;\n  color: #A9A4B2;\n  --box-col: #A9A4B2;\n  --box-check-col: #A9A4B2;\n}\n\nmw-svgdiv.check-box.checked:hover {\n  --svg-x : -10px;\n  --svg-y : -10px;\n  --svg-sx: calc(100% + 20px);\n  --svg-sy: calc(100% + 20px);\n  --box-check-dist: 5px;\n  color: #FFF;\n  --box-col: #FFF;\n  --box-sel-col: #FFF;\n  --box-check-col: #FFF;\n}\n\nmw-svgdiv.check-box.checked:active {\n  --svg-x : -5px;\n  --svg-y : -5px;\n  --svg-sx: calc(100% + 10px);\n  --svg-sy: calc(100% + 10px);\n  --box-check-dist: 5px;\n}",
                    "",
                ]);
                const c = a;
            },
            8584(n, e, o) {
                o.d(e, { A: () => c });
                var i = o(1601),
                    r = o.n(i),
                    t = o(6314),
                    a = o.n(t)()(r());
                a.push([
                    n.id,
                    "@property --box-sel-dist {\n  syntax: '<length>';\n  initial-value: 0px;\n  inherits: true;\n}\n\n@property --box-sel-col {\n  syntax: '<color>';\n  initial-value: #FFFFFF;\n  inherits: true;\n}\n\nmw-svgdiv.selection-box {\n  display: block;\n  \n  --svg-x : 0px;\n  --svg-y : 0px;\n  --svg-sx: 100%;\n  --svg-sy: 100%;\n  \n  --box-scale: 1.25;\n  \n  --box-sel-dist: 0px;\n  --box-col: #A9A4B2;\n  --box-sel-col: #0000;\n  --box-bg-col: #0007;\n  color: #A9A4B2;\n  \n  transition: --box-sel-dist 0.1s, --svg-x 0.1s, --svg-y 0.1s, --svg-sx 0.1s, --svg-sy 0.1s, --box-sel-col 0.4s, --box-col 0.4s, color 0.4s;\n  transition-timing-function: linear;\n}\n\n@keyframes flicker {\n  0%   {--box-sel-col: #0000;}\n  50%  {--box-sel-col: #FFF;}\n  100% {--box-sel-col: #0000;}\n}\n\n@keyframes flash {\n  0%   {--box-bg-col: #0007;}\n  50%  {--box-bg-col: #FFF6;}\n  100% {--box-bg-col: #0009;}\n}\n\nmw-svgdiv.selection-box:hover {\n  --svg-x : -5px;\n  --svg-y : -5px;\n  --svg-sx: calc(100% + 10px);\n  --svg-sy: calc(100% + 10px);\n  \n  --box-sel-dist: 5px;\n  --box-col: #FFF;\n  --box-sel-col: #FFF;\n  --box-bg-col: #0009;\n  color: #FFF;\n  \n  transition: --box-sel-dist 0.25s, --svg-x 0.25s, --svg-y 0.25s, --svg-sx 0.25s, --svg-sy 0.25s, --box-sel-col 0.25s, --box-col 0.25s, color 0.25s;\n  transition-timing-function: cubic-bezier(.6,.11,0,1.66);\n  \n  animation-name: flicker, flash;\n  animation-iteration-count: infinite, 1;\n  animation-duration: 0.40s, 0.1s;\n  animation-timing-function: ease-in-out, ease-in-out;\n}\n\nmw-svgdiv.selection-box:active {\n  transition: --box-sel-dist 0.05s, --svg-x 0.05s, --svg-y 0.05s, --svg-sx 0.05s, --svg-sy 0.05s, --box-sel-col 0.4s, --box-col 0.4s, color 0.4s;\n  --svg-x : 0px;\n  --svg-y : 0px;\n  --svg-sx: 100%;\n  --svg-sy: 100%;\n  --box-sel-dist: 0px;\n  animation-name: none;\n}",
                    "",
                ]);
                const c = a;
            },
            7448(n, e, o) {
                o.d(e, { A: () => tn });
                var i = o(1601),
                    r = o.n(i),
                    t = o(6314),
                    a = o.n(t),
                    c = o(4417),
                    s = o.n(c),
                    l = new URL(o(6117), o.b),
                    d = new URL(o(6660), o.b),
                    g = new URL(o(4352), o.b),
                    m = new URL(o(7313), o.b),
                    p = new URL(o(9011), o.b),
                    u = new URL(o(9552), o.b),
                    b = new URL(o(1323), o.b),
                    f = new URL(o(701), o.b),
                    h = new URL(o(5309), o.b),
                    v = new URL(o(7596), o.b),
                    y = new URL(o(8643), o.b),
                    x = new URL(o(2161), o.b),
                    k = new URL(o(3948), o.b),
                    w = new URL(o(2269), o.b),
                    F = new URL(o(5638), o.b),
                    A = new URL(o(4389), o.b),
                    _ = new URL(o(4014), o.b),
                    L = new URL(o(2287), o.b),
                    z = new URL(o(6), o.b),
                    R = new URL(o(4148), o.b),
                    $ = new URL(o(1895), o.b),
                    U = new URL(o(7930), o.b),
                    E = new URL(o(5698), o.b),
                    T = new URL(o(8474), o.b),
                    S = a()(r()),
                    P = s()(l),
                    M = s()(d),
                    j = s()(g),
                    q = s()(m),
                    I = s()(p),
                    C = s()(u),
                    B = s()(b),
                    N = s()(f),
                    D = s()(h),
                    H = s()(v),
                    Y = s()(y),
                    O = s()(x),
                    W = s()(k),
                    X = s()(w),
                    G = s()(F),
                    J = s()(A),
                    K = s()(_),
                    Q = s()(L),
                    V = s()(z),
                    Z = s()(R),
                    nn = s()($),
                    en = s()(U),
                    on = s()(E),
                    rn = s()(T);
                S.push([
                    n.id,
                    `.icon-green-lizard   ,\n.icon-pink-lizard    ,\n.icon-blue-lizard    ,\n.icon-red-lizard     ,\n.icon-white-lizard   ,\n.icon-yellow-lizard  ,\n.icon-caramel-lizard ,\n.icon-black-lizard   ,\n.icon-batfly         ,\n.icon-eggbug         ,\n.icon-jellyfish      ,\n.icon-scavenger      ,\n.icon-jetfish        ,\n.icon-lantern-mouse  ,\n.icon-rain-deer      ,\n.icon-pole-plant     ,\n.icon-monster-kelp   ,\n.icon-worm-grass     ,\n.icon-squidcada      ,\n.icon-snail          ,\n.icon-centipede      ,\n.icon-noodlefly     ,\n.icon-garbage-worm   ,\n.icon-daddy-long-legs\n{\n  display: inline-block;\n  width: 1.5em;\n  min-height: 1.5em;\n  display: inline;\n  background-repeat: no-repeat;\n  background-size: auto 1.5em;\n  image-rendering: pixelated;\n  background-position: 0 0.4em;\n}\n\n.icon-green-lizard:not(:empty)   ,\n.icon-pink-lizard:not(:empty)    ,\n.icon-blue-lizard:not(:empty)    ,\n.icon-red-lizard:not(:empty)     ,\n.icon-white-lizard:not(:empty)   ,\n.icon-yellow-lizard:not(:empty)  ,\n.icon-caramel-lizard:not(:empty) ,\n.icon-black-lizard:not(:empty)   ,\n.icon-batfly:not(:empty)         ,\n.icon-eggbug:not(:empty)         ,\n.icon-jellyfish:not(:empty)      ,\n.icon-scavenger:not(:empty)      ,\n.icon-jetfish:not(:empty)        ,\n.icon-lantern-mouse:not(:empty)  ,\n.icon-rain-deer:not(:empty)      ,\n.icon-pole-plant:not(:empty)     ,\n.icon-monster-kelp:not(:empty)   ,\n.icon-worm-grass:not(:empty)     ,\n.icon-squidcada:not(:empty)      ,\n.icon-snail:not(:empty)          ,\n.icon-centipede:not(:empty)      ,\n.icon-noodlefly:not(:empty)     ,\n.icon-garbage-worm:not(:empty)   ,\n.icon-daddy-long-legs:not(:empty)\n{\n  width: fit-content;\n  min-width: 1.5em;\n  display: inline;\n  transform: none;\n  background-position: 0 0.4em;\n}\n\n.icon-green-lizard    { min-height:   2em; padding-left:   2em; }\n.icon-pink-lizard     { min-height:   2em; padding-left:   2em; }\n.icon-blue-lizard     { min-height:   2em; padding-left:   2em; }\n.icon-red-lizard      { min-height:   2em; padding-left:   2em; }\n.icon-white-lizard    { min-height:   2em; padding-left:   2em; }\n.icon-yellow-lizard   { min-height:   2em; padding-left:   2em; }\n.icon-caramel-lizard  { min-height:   2em; padding-left:   2em; }\n.icon-black-lizard    { min-height:   2em; padding-left:   2em; }\n.icon-batfly          { min-height: 2.2em; padding-left: 2.2em; }\n.icon-eggbug          { min-height:   2em; padding-left:   2em; }\n.icon-jellyfish       { min-height: 1.6em; padding-left: 1.6em; }\n.icon-scavenger       { min-height: 1.6em; padding-left: 1.6em; }\n.icon-jetfish         { min-height: 1.6em; padding-left: 1.6em; }\n.icon-lantern-mouse   { min-height: 1.6em; padding-left: 1.6em; }\n.icon-rain-deer       { min-height: 1.8em; padding-left: 1.8em; }\n.icon-pole-plant      { min-height: 1.8em; padding-left: 1.8em; }\n.icon-monster-kelp    { min-height:   2em; padding-left:   2em; }\n.icon-worm-grass      { min-height: 2.4em; padding-left: 2.4em; }\n.icon-squidcada       { min-height: 1.6em; padding-left: 1.6em; }\n.icon-snail           { min-height: 1.6em; padding-left: 1.6em; }\n.icon-centipede       { min-height:   2em; padding-left:   2em; }\n.icon-noodlefly      { min-height: 1.2em; padding-left: 1.2em; }\n.icon-garbage-worm    { min-height: 1.6em; padding-left: 1.6em; }\n.icon-daddy-long-legs { min-height: 1.6em; padding-left: 1.6em; }\n\n.icon-green-lizard    { background-image: url(${P}    ); }\n.icon-pink-lizard     { background-image: url(${M}     ); }\n.icon-blue-lizard     { background-image: url(${j}     ); }\n.icon-red-lizard      { background-image: url(${q}      ); }\n.icon-white-lizard    { background-image: url(${I}    ); }\n.icon-yellow-lizard   { background-image: url(${C}   ); }\n.icon-caramel-lizard  { background-image: url(${B}  ); }\n.icon-black-lizard    { background-image: url(${N}    ); }\n.icon-batfly          { background-image: url(${D}          ); }\n.icon-eggbug          { background-image: url(${H}          ); }\n.icon-jellyfish       { background-image: url(${Y}       ); }\n.icon-scavenger       { background-image: url(${O}       ); }\n.icon-jetfish         { background-image: url(${W}         ); }\n.icon-lantern-mouse   { background-image: url(${X}   ); }\n.icon-rain-deer       { background-image: url(${G}       ); }\n.icon-pole-plant      { background-image: url(${J}      ); }\n.icon-monster-kelp    { background-image: url(${K}    ); }\n.icon-worm-grass      { background-image: url(${Q}      ); }\n.icon-squidcada       { background-image: url(${V} ); }\n.icon-snail           { background-image: url(${Z}           ); }\n.icon-centipede       { background-image: url(${nn}); }\n.icon-noodlefly      { background-image: url(${en} ); }\n.icon-garbage-worm    { background-image: url(${on}    ); }\n.icon-daddy-long-legs { background-image: url(${rn}    ); }\n\n.icon-green-lizard    , .icon-green-lizard:link    , .icon-green-lizard:visited    { color: #5bff33; }\n.icon-pink-lizard     , .icon-pink-lizard:link     , .icon-pink-lizard:visited     { color: #ff00ff; }\n.icon-blue-lizard     , .icon-blue-lizard:link     , .icon-blue-lizard:visited     { color: #0080ff; }\n.icon-red-lizard      , .icon-red-lizard:link      , .icon-red-lizard:visited      { color: #e60e0e; }\n.icon-white-lizard    , .icon-white-lizard:link    , .icon-white-lizard:visited    { color: #ffffff; }\n.icon-yellow-lizard   , .icon-yellow-lizard:link   , .icon-yellow-lizard:visited   { color: #ff9900; }\n.icon-caramel-lizard  , .icon-caramel-lizard:link  , .icon-caramel-lizard:visited  { color: #8c6633; }\n.icon-black-lizard    , .icon-black-lizard:link    , .icon-black-lizard:visited    { color: #5e5e6f; }\n.icon-batfly          , .icon-batfly:link          , .icon-batfly:visited          { color: #bebebe; }\n.icon-eggbug          , .icon-eggbug:link          , .icon-eggbug:visited          { color: #00ff78; }\n.icon-jellyfish       , .icon-jellyfish:link       , .icon-jellyfish:visited       { color: #e2dfe8; }\n.icon-scavenger       , .icon-scavenger:link       , .icon-scavenger:visited       { color: #bebebe; }\n.icon-jetfish         , .icon-jetfish:link         , .icon-jetfish:visited         { color: #bebebe; }\n.icon-lantern-mouse   , .icon-lantern-mouse:link   , .icon-lantern-mouse:visited   { color: #bebebe; }\n.icon-rain-deer       , .icon-rain-deer:link       , .icon-rain-deer:visited       { color: #bebebe; }\n.icon-pole-plant      , .icon-pole-plant:link      , .icon-pole-plant:visited      { color: #bebebe; }\n.icon-monster-kelp    , .icon-monster-kelp:link    , .icon-monster-kelp:visited    { color: #bebebe; }\n.icon-worm-grass      , .icon-worm-grass:link      , .icon-worm-grass:visited      { color: #bebebe; }\n.icon-squidcada       , .icon-squidcada:link       , .icon-squidcada:visited       { color: #ffffff; }\n.icon-snail           , .icon-snail:link           , .icon-snail:visited           { color: #bebebe; }\n.icon-centipede       , .icon-centipede:link       , .icon-centipede:visited       { color: #ff9800; }\n.icon-noodlefly      , .icon-noodlefly:link      , .icon-noodlefly:visited      { color: #ff9898; }\n.icon-garbage-worm    , .icon-garbage-worm:link    , .icon-garbage-worm:visited    { color: #bebebe; }\n.icon-daddy-long-legs , .icon-daddy-long-legs:link , .icon-daddy-long-legs:visited { color: #0000ff; }\n\na.icon-green-lizard:hover   { color: #48cc28; }\na.icon-pink-lizard:hover    { color: #cc00cc; }\na.icon-blue-lizard:hover    { color: #0066cc; }\na.icon-red-lizard:hover     { color: #b30a0a; }\na.icon-white-lizard:hover   { color: #cccccc; }\na.icon-yellow-lizard:hover  { color: #cc7a00; }\na.icon-caramel-lizard:hover { color: #594020; }\na.icon-black-lizard:hover   { color: #7e7e95; }\na.icon-batfly:hover         { color: #e2dfe8; }\na.icon-eggbug:hover         { color: #00cc5f; }\na.icon-jellyfish:hover      { color: #c5c3ca; }\na.icon-scavenger:hover      { color: #e2dfe8; }\na.icon-jetfish:hover        { color: #e2dfe8; }\na.icon-lantern-mouse:hover  { color: #e2dfe8; }\na.icon-rain-deer:hover      { color: #e2dfe8; }\na.icon-pole-plant:hover     { color: #e2dfe8; }\na.icon-monster-kelp:hover   { color: #e2dfe8; }\na.icon-worm-grass:hover     { color: #e2dfe8; }\na.icon-squidcada:hover      { color: #cccccc; }\na.icon-snail:hover          { color: #e2dfe8; }\na.icon-centipede:hover      { color: #cc7900; }\na.icon-noodlefly:hover     { color: #cc7979; }\na.icon-garbage-worm         { color: #e2dfe8; }\na.icon-daddy-long-legs      { color: #0000cc; }`,
                    "",
                ]);
                const tn = S;
            },
            6474(n, e, o) {
                o.d(e, { A: () => x });
                var i = o(1601),
                    r = o.n(i),
                    t = o(6314),
                    a = o.n(t),
                    c = o(4417),
                    s = o.n(c),
                    l = new URL(o(6118), o.b),
                    d = new URL(o(8171), o.b),
                    g = new URL(o(4762), o.b),
                    m = new URL(o(5425), o.b),
                    p = new URL(o(9218), o.b),
                    u = a()(r()),
                    b = s()(l),
                    f = s()(d),
                    h = s()(g),
                    v = s()(m),
                    y = s()(p);
                u.push([
                    n.id,
                    `.icon-pip-full         ,\n.icon-pip-quarter-empty,\n.icon-pip-half         ,\n.icon-pip-quarter      ,\n.icon-pip-empty\n{\n  display: inline-block;\n  width: 1.5em;\n  min-height: 1.5em;\n  padding-left: 1.5em;\n  display: inline;\n  background-repeat: no-repeat;\n  background-size: auto 1.5em;\n  image-rendering: pixelated;\n  background-position: 0 0.4em;\n}\n\n.icon-pip-full          { background-image: url(${b}         ); }\n.icon-pip-quarter-empty { background-image: url(${f}); }\n.icon-pip-half          { background-image: url(${h}         ); }\n.icon-pip-quarter       { background-image: url(${v}      ); }\n.icon-pip-empty         { background-image: url(${y}        ); }`,
                    "",
                ]);
                const x = u;
            },
            9676(n, e, o) {
                o.d(e, { A: () => Y });
                var i = o(1601),
                    r = o.n(i),
                    t = o(6314),
                    a = o.n(t),
                    c = o(4417),
                    s = o.n(c),
                    l = new URL(o(9926), o.b),
                    d = new URL(o(4048), o.b),
                    g = new URL(o(1710), o.b),
                    m = new URL(o(9633), o.b),
                    p = new URL(o(2540), o.b),
                    u = new URL(o(2598), o.b),
                    b = new URL(o(7325), o.b),
                    f = new URL(o(4058), o.b),
                    h = new URL(o(1178), o.b),
                    v = new URL(o(2849), o.b),
                    y = new URL(o(642), o.b),
                    x = new URL(o(2202), o.b),
                    k = new URL(o(6215), o.b),
                    w = new URL(o(145), o.b),
                    F = new URL(o(2679), o.b),
                    A = new URL(o(5694), o.b),
                    _ = new URL(o(2693), o.b),
                    L = a()(r()),
                    z = s()(l),
                    R = s()(d),
                    $ = s()(g),
                    U = s()(m),
                    E = s()(p),
                    T = s()(u),
                    S = s()(b),
                    P = s()(f),
                    M = s()(h),
                    j = s()(v),
                    q = s()(y),
                    I = s()(x),
                    C = s()(k),
                    B = s()(w),
                    N = s()(F),
                    D = s()(A),
                    H = s()(_);
                L.push([
                    n.id,
                    `.icon-blue-fruit     ,\n.icon-bubble-fruit   ,\n.icon-slime-mold     ,\n.icon-karma-flower   ,\n.icon-eggbug-egg     ,\n.icon-lilypuck       ,\n.icon-mushroom       ,\n.icon-rock           ,\n.icon-spear          ,\n.icon-grenade        ,\n.icon-explosive-spear,\n.icon-cherrybomb     ,\n.icon-flashbang      ,\n.icon-batnip         ,\n.icon-lantern        ,\n.icon-spore-puff     ,\n.icon-vulture-mask\n{\n  display: inline-block;\n  width: 1.5em;\n  min-height: 1.5em;\n  padding-left: 1.5em;\n  display: inline;\n  background-repeat: no-repeat;\n  background-size: auto 1.5em;\n  image-rendering: pixelated;\n  background-position: 0 0.4em;\n}\n\n.icon-blue-fruit:not(:empty)     ,\n.icon-bubble-fruit:not(:empty)   ,\n.icon-slime-mold:not(:empty)     ,\n.icon-karma-flower:not(:empty)   ,\n.icon-eggbug-egg:not(:empty)     ,\n.icon-lilypuck:not(:empty)       ,\n.icon-mushroom:not(:empty)       ,\n.icon-rock:not(:empty)           ,\n.icon-spear:not(:empty)          ,\n.icon-grenade:not(:empty)        ,\n.icon-explosive-spear:not(:empty),\n.icon-cherrybomb:not(:empty)     ,\n.icon-flashbang:not(:empty)      ,\n.icon-batnip:not(:empty)         ,\n.icon-lantern:not(:empty)        ,\n.icon-spore-puff:not(:empty)     ,\n.icon-vulture-mask:not(:empty)\n{\n  width: fit-content;\n  min-width: 1.5em;\n  display: inline;\n  transform: none;\n  padding-left: 1.5em;\n  background-position: 0 0.4em;\n}\n\n.icon-blue-fruit      { background-image: url(${z}     ); }\n.icon-bubble-fruit    { background-image: url(${R}   ); }\n.icon-slime-mold      { background-image: url(${$}     ); }\n.icon-karma-flower    { background-image: url(${U}   ); }\n.icon-eggbug-egg      { background-image: url(${E}     ); }\n.icon-lilypuck        { background-image: url(${T}       ); }\n.icon-mushroom        { background-image: url(${S}       ); }\n.icon-rock            { background-image: url(${P}           ); }\n.icon-spear           { background-image: url(${M}          ); }\n.icon-grenade         { background-image: url(${j}        ); }\n.icon-explosive-spear { background-image: url(${q}); }\n.icon-cherrybomb      { background-image: url(${I}     ); }\n.icon-flashbang       { background-image: url(${C}      ); }\n.icon-batnip          { background-image: url(${B}         ); }\n.icon-lantern         { background-image: url(${N}        ); }\n.icon-spore-puff      { background-image: url(${D}     ); }\n.icon-vulture-mask    { background-image: url(${H}   ); }\n\n.icon-blue-fruit      , .icon-blue-fruit:link      , .icon-blue-fruit:visited      { color: #0000ff; }\n.icon-bubble-fruit    , .icon-bubble-fruit:link    , .icon-bubble-fruit:visited    { color: #0d4db3; }\n.icon-slime-mold      , .icon-slime-mold:link      , .icon-slime-mold:visited      { color: #ff9900; }\n.icon-karma-flower    , .icon-karma-flower:link    , .icon-karma-flower:visited    { color: #f7b45b; }\n.icon-eggbug-egg      , .icon-eggbug-egg:link      , .icon-eggbug-egg:visited      { color: #00ff78; }\n.icon-lilypuck        , .icon-lilypuck:link        , .icon-lilypuck:visited        { color: #2bf5ff; }\n.icon-mushroom        , .icon-mushroom:link        , .icon-mushroom:visited        { color: #ffffff; }\n.icon-rock            , .icon-rock:link            , .icon-rock:visited            { color: #e2dfe8; }\n.icon-spear           , .icon-spear:link           , .icon-spear:visited           { color: #e2dfe8; }\n.icon-grenade         , .icon-grenade:link         , .icon-grenade:visited         { color: #e60e0e; }\n.icon-explosive-spear , .icon-explosive-spear:link , .icon-explosive-spear:visited { color: #e60e0e; }\n.icon-cherrybomb      , .icon-cherrybomb:link      , .icon-cherrybomb:visited      { color: #AE281E; }\n.icon-flashbang       , .icon-flashbang:link       , .icon-flashbang:visited       { color: #bbaeff; }\n.icon-batnip          , .icon-batnip:link          , .icon-batnip:visited          { color: #ac4335; }\n.icon-lantern         , .icon-lantern:link         , .icon-lantern:visited         { color: #ff9251; }\n.icon-spore-puff      , .icon-spore-puff:link      , .icon-spore-puff:visited      { color: #e2dfe8; }\n.icon-vulture-mask    , .icon-vulture-mask:link    , .icon-vulture-mask:visited    { color: #e2dfe8; }\n\na.icon-blue-fruit:hover      { color: #6666FF; }\na.icon-bubble-fruit:hover    { color: #83b3ff; }\na.icon-slime-mold:hover      { color: #ffcc80; }\na.icon-karma-flower:hover    { color: #ffddb1; }\na.icon-eggbug-egg:hover      { color: #7dffba; }\na.icon-lilypuck:hover        { color: #a2faff; }\na.icon-mushroom:hover        { color: #bebebe; }\na.icon-rock:hover            { color: #c5c3ca; }\na.icon-spear:hover           { color: #c5c3ca; }\na.icon-grenade:hover         { color: #dc5252; }\na.icon-explosive-spear:hover { color: #ff8383; }\na.icon-cherrybomb:hover      { color: #bd4c44; }\na.icon-flashbang:hover       { color: #ded7ff; }\na.icon-batnip:hover          { color: #ad655c; }\na.icon-lantern:hover         { color: #fab188; }\na.icon-spore-puff:hover      { color: #c5c3ca; }\na.icon-vulture-mask:hover    { color: #c5c3ca; }`,
                    "",
                ]);
                const Y = L;
            },
            3707(n, e, o) {
                o.d(e, { A: () => Y });
                var i = o(1601),
                    r = o.n(i),
                    t = o(6314),
                    a = o.n(t),
                    c = o(4417),
                    s = o.n(c),
                    l = new URL(o(3814), o.b),
                    d = new URL(o(2140), o.b),
                    g = new URL(o(4716), o.b),
                    m = new URL(o(2589), o.b),
                    p = new URL(o(7577), o.b),
                    u = new URL(o(618), o.b),
                    b = new URL(o(9944), o.b),
                    f = new URL(o(2106), o.b),
                    h = new URL(o(3254), o.b),
                    v = new URL(o(9452), o.b),
                    y = new URL(o(7356), o.b),
                    x = new URL(o(9890), o.b),
                    k = new URL(o(4864), o.b),
                    w = new URL(o(3801), o.b),
                    F = new URL(o(4031), o.b),
                    A = new URL(o(3290), o.b),
                    _ = new URL(o(1902), o.b),
                    L = a()(r()),
                    z = s()(l),
                    R = s()(d),
                    $ = s()(g),
                    U = s()(m),
                    E = s()(p),
                    T = s()(u),
                    S = s()(b),
                    P = s()(f),
                    M = s()(h),
                    j = s()(v),
                    q = s()(y),
                    I = s()(x),
                    C = s()(k),
                    B = s()(w),
                    N = s()(F),
                    D = s()(A),
                    H = s()(_);
                L.push([
                    n.id,
                    `/*\nsu - outskirts\nhi - industrial-complex\ngw - garbage-wastelands\nds - drainage-system\nsl - shoreline\ndm - looks-to-the-moon\nsh - shaded-citadel\nuw - the-exterior\nss - five-pebbles\nlc - metropolis\ncc - chimney-canopy\nsi - sky-islands\nvs - pipeyard\nlf - farm-arrays\nms - submerged-superstructure\noe - outer-expanse\nsb - subterranean\n*/\n\n\n.icon-outskirts               ,\n.icon-industrial-complex      ,\n.icon-garbage-wastelands      ,\n.icon-drainage-system         ,\n.icon-shoreline               ,\n.icon-looks-to-the-moon       ,\n.icon-shaded-citadel          ,\n.icon-the-exterior            ,\n.icon-five-pebbles            ,\n.icon-metropolis              ,\n.icon-chimney-canopy          ,\n.icon-sky-islands             ,\n.icon-pipeyard                ,\n.icon-farm-arrays             ,\n.icon-submerged-superstructure,\n.icon-outer-expanse           ,\n.icon-subterranean\n{\n  display: inline-block;\n  width: 1.5em;\n  min-height: 1.5em;\n  padding-left: 1.5em;\n  display: inline;\n  background-repeat: no-repeat;\n  background-size: auto 1.5em;\n  image-rendering: pixelated;\n  background-position: 0 0.4em;\n}\n\n.icon-outskirts:not(:empty)               ,\n.icon-industrial-complex:not(:empty)      ,\n.icon-garbage-wastelands:not(:empty)      ,\n.icon-drainage-system:not(:empty)         ,\n.icon-shoreline:not(:empty)               ,\n.icon-looks-to-the-moon:not(:empty)       ,\n.icon-shaded-citadel:not(:empty)          ,\n.icon-the-exterior:not(:empty)            ,\n.icon-five-pebbles:not(:empty)            ,\n.icon-metropolis:not(:empty)              ,\n.icon-chimney-canopy:not(:empty)          ,\n.icon-sky-islands:not(:empty)             ,\n.icon-pipeyard:not(:empty)                ,\n.icon-farm-arrays:not(:empty)             ,\n.icon-submerged-superstructure:not(:empty),\n.icon-outer-expanse:not(:empty)           ,\n.icon-subterranean:not(:empty)\n{\n  width: fit-content;\n  min-width: 1.5em;\n  display: inline;\n  transform: none;\n  padding-left: 1.8em;\n  background-position: 0 0.4em;\n}\n\n.icon-outskirts                { background-image: url(${z}               ); }\n.icon-industrial-complex       { background-image: url(${R}      ); }\n.icon-garbage-wastelands       { background-image: url(${$}      ); }\n.icon-drainage-system          { background-image: url(${U}         ); }\n.icon-shoreline                { background-image: url(${E}               ); }\n.icon-looks-to-the-moon        { background-image: url(${T}       ); }\n.icon-shaded-citadel           { background-image: url(${S}          ); }\n.icon-the-exterior             { background-image: url(${P}            ); }\n.icon-five-pebbles             { background-image: url(${M}            ); }\n.icon-metropolis               { background-image: url(${j}              ); }\n.icon-chimney-canopy           { background-image: url(${q}          ); }\n.icon-sky-islands              { background-image: url(${I}             ); }\n.icon-pipeyard                 { background-image: url(${C}                ); }\n.icon-farm-arrays              { background-image: url(${B}             ); }\n.icon-submerged-superstructure { background-image: url(${N}); }\n.icon-outer-expanse            { background-image: url(${D}           ); }\n.icon-subterranean             { background-image: url(${H}            ); }\n\n.icon-outskirts                , .icon-outskirts:link                , .icon-outskirts:visited                { color: #a0aea2; }\n.icon-industrial-complex       , .icon-industrial-complex:link       , .icon-industrial-complex:visited       { color: #76aa95; }\n.icon-garbage-wastelands       , .icon-garbage-wastelands:link       , .icon-garbage-wastelands:visited       { color: #d4e262; }\n.icon-drainage-system          , .icon-drainage-system:link          , .icon-drainage-system:visited          { color: #e5724d; }\n.icon-shoreline                , .icon-shoreline:link                , .icon-shoreline:visited                { color: #b2f1ce; }\n.icon-looks-to-the-moon        , .icon-looks-to-the-moon:link        , .icon-looks-to-the-moon:visited        { color: #685aab; }\n.icon-shaded-citadel           , .icon-shaded-citadel:link           , .icon-shaded-citadel:visited           { color: #9f7379; }\n.icon-the-exterior             , .icon-the-exterior:link             , .icon-the-exterior:visited             { color: #e74337; }\n.icon-five-pebbles             , .icon-five-pebbles:link             , .icon-five-pebbles:visited             { color: #c21f94; }\n.icon-metropolis               , .icon-metropolis:link               , .icon-metropolis:visited               { color: #6eb5f5; }\n.icon-chimney-canopy           , .icon-chimney-canopy:link           , .icon-chimney-canopy:visited           { color: #faf9e4; }\n.icon-sky-islands              , .icon-sky-islands:link              , .icon-sky-islands:visited              { color: #fdd697; }\n.icon-pipeyard                 , .icon-pipeyard:link                 , .icon-pipeyard:visited                 { color: #c99477; }\n.icon-farm-arrays              , .icon-farm-arrays:link              , .icon-farm-arrays:visited              { color: #55dfbb; }\n.icon-submerged-superstructure , .icon-submerged-superstructure:link , .icon-submerged-superstructure:visited { color: #41de6f; }\n.icon-outer-expanse            , .icon-outer-expanse:link            , .icon-outer-expanse:visited            { color: #f2b788; }\n.icon-subterranean             , .icon-subterranean:link             , .icon-subterranean:visited             { color: #f15444; }\n\n.icon-outskirts:hover                { color: #717b72; }\n.icon-industrial-complex:hover       { color: #527768; }\n.icon-garbage-wastelands:hover       { color: #a4af4b; }\n.icon-drainage-system:hover          { color: #b2583b; }\n.icon-shoreline:hover                { color: #8cbea2; }\n.icon-looks-to-the-moon:hover        { color: #483f77; }\n.icon-shaded-citadel:hover           { color: #6c4e52; }\n.icon-the-exterior:hover             { color: #b3342a; }\n.icon-five-pebbles:hover             { color: #8f166d; }\n.icon-metropolis:hover               { color: #578fc2; }\n.icon-chimney-canopy:hover           { color: #c6c6b5; }\n.icon-sky-islands:hover              { color: #caaa78; }\n.icon-pipeyard:hover                 { color: #956e58; }\n.icon-farm-arrays:hover              { color: #41ac90; }\n.icon-submerged-superstructure:hover { color: #32ab55; }\n.icon-outer-expanse:hover            { color: #bf906b; }\n.icon-subterranean:hover             { color: #be4235; }\n`,
                    "",
                ]);
                const Y = L;
            },
            1856(n, e, o) {
                o.d(e, { A: () => R });
                var i = o(1601),
                    r = o.n(i),
                    t = o(6314),
                    a = o.n(t),
                    c = o(4417),
                    s = o.n(c),
                    l = new URL(o(5383), o.b),
                    d = new URL(o(3648), o.b),
                    g = new URL(o(7611), o.b),
                    m = new URL(o(8638), o.b),
                    p = new URL(o(7882), o.b),
                    u = new URL(o(3286), o.b),
                    b = new URL(o(5988), o.b),
                    f = new URL(o(3990), o.b),
                    h = new URL(o(1368), o.b),
                    v = a()(r()),
                    y = s()(l),
                    x = s()(d),
                    k = s()(g),
                    w = s()(m),
                    F = s()(p),
                    A = s()(u),
                    _ = s()(b),
                    L = s()(f),
                    z = s()(h);
                v.push([
                    n.id,
                    `.icon-survivor   ,\n.icon-monk       ,\n.icon-hunter     ,\n.icon-gourmand   ,\n.icon-artificer  ,\n.icon-rivulet    ,\n.icon-spearmaster,\n.icon-saint      ,\n.icon-inv\n{\n  display: inline-block;\n  width: 1.5em;\n  min-height: 1.5em;\n  padding-left: 1.5em;\n  display: inline;\n  background-repeat: no-repeat;\n  background-size: auto 1.5em;\n  image-rendering: pixelated;\n  background-position: 0 0.4em;\n}\n\n.icon-survivor:not(:empty)   ,\n.icon-monk:not(:empty)       ,\n.icon-hunter:not(:empty)     ,\n.icon-gourmand:not(:empty)   ,\n.icon-artificer:not(:empty)  ,\n.icon-rivulet:not(:empty)    ,\n.icon-spearmaster:not(:empty),\n.icon-saint:not(:empty)      ,\n.icon-inv:not(:empty)\n{\n  width: fit-content;\n  min-width: 1.5em;\n  display: inline;\n  transform: none;\n  padding-left: 1.5em;\n  background-position: 0 0.4em;\n}\n\n.icon-survivor    { background-image: url(${y}   ); }\n.icon-monk        { background-image: url(${x}       ); }\n.icon-hunter      { background-image: url(${k}     ); }\n.icon-gourmand    { background-image: url(${w}   ); }\n.icon-artificer   { background-image: url(${F}  ); }\n.icon-rivulet     { background-image: url(${A}    ); }\n.icon-spearmaster { background-image: url(${_}); }\n.icon-saint       { background-image: url(${L}      ); }\n.icon-inv         { background-image: url(${z}        ); }\n\n.icon-survivor    , .icon-survivor:link    , .icon-survivor:visited    { color: #FFFFFF; }\n.icon-monk        , .icon-monk:link        , .icon-monk:visited        { color: #FFFF73; }\n.icon-hunter      , .icon-hunter:link      , .icon-hunter:visited      { color: #FF7373; }\n.icon-gourmand    , .icon-gourmand:link    , .icon-gourmand:visited    { color: #F0C197; }\n.icon-artificer   , .icon-artificer:link   , .icon-artificer:visited   { color: #70233C; }\n.icon-rivulet     , .icon-rivulet:link     , .icon-rivulet:visited     { color: #91CCF0; }\n.icon-spearmaster , .icon-spearmaster:link , .icon-spearmaster:visited { color: #4F2E69; }\n.icon-saint       , .icon-saint:link       , .icon-saint:visited       { color: #AAF156; }\n.icon-inv         , .icon-inv:link         , .icon-inv:visited         { color: #17234F; }\n\na.icon-survivor:hover    { color: #d5d5d5; }\na.icon-monk:hover        { color: #ffff9b; }\na.icon-hunter:hover      { color: #ff9e9e; }\na.icon-gourmand:hover    { color: #fcdbbd; }\na.icon-artificer:hover   { color: #874359; }\na.icon-rivulet:hover     { color: #c1dced; }\na.icon-spearmaster:hover { color: #82619b; }\na.icon-saint:hover       { color: #beee84; }\na.icon-inv:hover         { color: #3c4a7c; }\n`,
                    "",
                ]);
                const R = v;
            },
            4643(n, e, o) {
                o.d(e, { A: () => c });
                var i = o(1601),
                    r = o.n(i),
                    t = o(6314),
                    a = o.n(t)()(r());
                a.push([
                    n.id,
                    "@property --svg-x {\n  syntax: '<length-percentage>';\n  initial-value: 0px;\n  inherits: true;\n}\n\n@property --svg-y {\n  syntax: '<length-percentage>';\n  initial-value: 0px;\n  inherits: true;\n}\n\n@property --svg-sx {\n  syntax: '<length-percentage> | auto';\n  initial-value: 100%;\n  inherits: true;\n}\n\n@property --svg-sy {\n  syntax: '<length-percentage> | auto';\n  initial-value: 100%;\n  inherits: true;\n}\n\n@property --svg-rot {\n  syntax: '<angle>';\n  initial-value: 0deg;\n  inherits: true;\n}\n\n@property --svg-trans {\n  syntax: '<transform-list>';\n  initial-value: translate(0, 0);\n  inherits: true;\n}\n",
                    "",
                ]);
                const c = a;
            },
            2437(n, e, o) {
                o.d(e, { A: () => c });
                var i = o(1601),
                    r = o.n(i),
                    t = o(6314),
                    a = o.n(t)()(r());
                a.push([
                    n.id,
                    "@property --rw-transition {\n  syntax: '<number>';\n  initial-value: 1;\n  inherits: true;\n}\n\n#rw-transition {\n  position: fixed;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 999;\n  transition-property: --rw-transition;\n  transition-duration: 1s;\n  background: radial-gradient(circle at 50% 50%, #00000000 calc((var(--rw-transition) * 1.5 - 0.5) * 100%), #000000 calc(var(--rw-transition) * 1.5 * 100%));\n  pointer-events: none;\n  transition-timing-function: cubic-bezier(0.843, 0.253, 0.171, 0.764);\n}",
                    "",
                ]);
                const c = a;
            },
            6314(n) {
                n.exports = function (n) {
                    var e = [];
                    return (
                        (e.toString = function () {
                            return this.map(function (e) {
                                var o = "",
                                    i = void 0 !== e[5];
                                return (
                                    e[4] &&
                                        (o += "@supports (".concat(
                                            e[4],
                                            ") {",
                                        )),
                                    e[2] && (o += "@media ".concat(e[2], " {")),
                                    i &&
                                        (o += "@layer".concat(
                                            e[5].length > 0
                                                ? " ".concat(e[5])
                                                : "",
                                            " {",
                                        )),
                                    (o += n(e)),
                                    i && (o += "}"),
                                    e[2] && (o += "}"),
                                    e[4] && (o += "}"),
                                    o
                                );
                            }).join("");
                        }),
                        (e.i = function (n, o, i, r, t) {
                            "string" == typeof n && (n = [[null, n, void 0]]);
                            var a = {};
                            if (i)
                                for (var c = 0; c < this.length; c++) {
                                    var s = this[c][0];
                                    null != s && (a[s] = !0);
                                }
                            for (var l = 0; l < n.length; l++) {
                                var d = [].concat(n[l]);
                                (i && a[d[0]]) ||
                                    (void 0 !== t &&
                                        (void 0 === d[5] ||
                                            (d[1] = "@layer"
                                                .concat(
                                                    d[5].length > 0
                                                        ? " ".concat(d[5])
                                                        : "",
                                                    " {",
                                                )
                                                .concat(d[1], "}")),
                                        (d[5] = t)),
                                    o &&
                                        (d[2]
                                            ? ((d[1] = "@media "
                                                  .concat(d[2], " {")
                                                  .concat(d[1], "}")),
                                              (d[2] = o))
                                            : (d[2] = o)),
                                    r &&
                                        (d[4]
                                            ? ((d[1] = "@supports ("
                                                  .concat(d[4], ") {")
                                                  .concat(d[1], "}")),
                                              (d[4] = r))
                                            : (d[4] = "".concat(r))),
                                    e.push(d));
                            }
                        }),
                        e
                    );
                };
            },
            4417(n) {
                n.exports = function (n, e) {
                    return (
                        e || (e = {}),
                        n
                            ? ((n = String(n.__esModule ? n.default : n)),
                              /^['"].*['"]$/.test(n) && (n = n.slice(1, -1)),
                              e.hash && (n += e.hash),
                              /["'() \t\n]|(%20)/.test(n) || e.needQuotes
                                  ? '"'.concat(
                                        n
                                            .replace(/"/g, '\\"')
                                            .replace(/\n/g, "\\n"),
                                        '"',
                                    )
                                  : n)
                            : n
                    );
                };
            },
            1601(n) {
                n.exports = function (n) {
                    return n[1];
                };
            },
            5072(n) {
                var e = [];
                function o(n) {
                    for (var o = -1, i = 0; i < e.length; i++)
                        if (e[i].identifier === n) {
                            o = i;
                            break;
                        }
                    return o;
                }
                function i(n, i) {
                    for (var t = {}, a = [], c = 0; c < n.length; c++) {
                        var s = n[c],
                            l = i.base ? s[0] + i.base : s[0],
                            d = t[l] || 0,
                            g = "".concat(l, " ").concat(d);
                        t[l] = d + 1;
                        var m = o(g),
                            p = {
                                css: s[1],
                                media: s[2],
                                sourceMap: s[3],
                                supports: s[4],
                                layer: s[5],
                            };
                        if (-1 !== m) (e[m].references++, e[m].updater(p));
                        else {
                            var u = r(p, i);
                            ((i.byIndex = c),
                                e.splice(c, 0, {
                                    identifier: g,
                                    updater: u,
                                    references: 1,
                                }));
                        }
                        a.push(g);
                    }
                    return a;
                }
                function r(n, e) {
                    var o = e.domAPI(e);
                    return (
                        o.update(n),
                        function (e) {
                            if (e) {
                                if (
                                    e.css === n.css &&
                                    e.media === n.media &&
                                    e.sourceMap === n.sourceMap &&
                                    e.supports === n.supports &&
                                    e.layer === n.layer
                                )
                                    return;
                                o.update((n = e));
                            } else o.remove();
                        }
                    );
                }
                n.exports = function (n, r) {
                    var t = i((n = n || []), (r = r || {}));
                    return function (n) {
                        n = n || [];
                        for (var a = 0; a < t.length; a++) {
                            var c = o(t[a]);
                            e[c].references--;
                        }
                        for (var s = i(n, r), l = 0; l < t.length; l++) {
                            var d = o(t[l]);
                            0 === e[d].references &&
                                (e[d].updater(), e.splice(d, 1));
                        }
                        t = s;
                    };
                };
            },
            7659(n) {
                var e = {};
                n.exports = function (n, o) {
                    var i = (function (n) {
                        if (void 0 === e[n]) {
                            var o = document.querySelector(n);
                            if (
                                window.HTMLIFrameElement &&
                                o instanceof window.HTMLIFrameElement
                            )
                                try {
                                    o = o.contentDocument.head;
                                } catch (n) {
                                    o = null;
                                }
                            e[n] = o;
                        }
                        return e[n];
                    })(n);
                    if (!i)
                        throw new Error(
                            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
                        );
                    i.appendChild(o);
                };
            },
            540(n) {
                n.exports = function (n) {
                    var e = document.createElement("style");
                    return (
                        n.setAttributes(e, n.attributes),
                        n.insert(e, n.options),
                        e
                    );
                };
            },
            5056(n, e, o) {
                n.exports = function (n) {
                    var e = o.nc;
                    e && n.setAttribute("nonce", e);
                };
            },
            7825(n) {
                n.exports = function (n) {
                    if ("undefined" == typeof document)
                        return {
                            update: function () {},
                            remove: function () {},
                        };
                    var e = n.insertStyleElement(n);
                    return {
                        update: function (o) {
                            !(function (n, e, o) {
                                var i = "";
                                (o.supports &&
                                    (i += "@supports (".concat(
                                        o.supports,
                                        ") {",
                                    )),
                                    o.media &&
                                        (i += "@media ".concat(o.media, " {")));
                                var r = void 0 !== o.layer;
                                (r &&
                                    (i += "@layer".concat(
                                        o.layer.length > 0
                                            ? " ".concat(o.layer)
                                            : "",
                                        " {",
                                    )),
                                    (i += o.css),
                                    r && (i += "}"),
                                    o.media && (i += "}"),
                                    o.supports && (i += "}"));
                                var t = o.sourceMap;
                                (t &&
                                    "undefined" != typeof btoa &&
                                    (i +=
                                        "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                                            btoa(
                                                unescape(
                                                    encodeURIComponent(
                                                        JSON.stringify(t),
                                                    ),
                                                ),
                                            ),
                                            " */",
                                        )),
                                    e.styleTagTransform(i, n, e.options));
                            })(e, n, o);
                        },
                        remove: function () {
                            !(function (n) {
                                if (null === n.parentNode) return !1;
                                n.parentNode.removeChild(n);
                            })(e);
                        },
                    };
                };
            },
            1113(n) {
                n.exports = function (n, e) {
                    if (e.styleSheet) e.styleSheet.cssText = n;
                    else {
                        for (; e.firstChild; ) e.removeChild(e.firstChild);
                        e.appendChild(document.createTextNode(n));
                    }
                };
            },
            7958(n, e, o) {
                n.exports = o.p + "resources/fonts/RainMenuCzech.otf";
            },
            2532(n, e, o) {
                n.exports = o.p + "resources/fonts/RodondoCzech.otf";
            },
            7930(n, e, o) {
                n.exports =
                    o.p + "resources/images/creatures/Adult_Noodlefly_icon.png";
            },
            5309(n, e, o) {
                n.exports = o.p + "resources/images/creatures/Batfly_icon.png";
            },
            701(n, e, o) {
                n.exports =
                    o.p + "resources/images/creatures/Black_Lizard_icon.png";
            },
            4352(n, e, o) {
                n.exports =
                    o.p + "resources/images/creatures/Blue_Lizard_icon.png";
            },
            1323(n, e, o) {
                n.exports =
                    o.p + "resources/images/creatures/Caramel_Lizard_icon.png";
            },
            8474(n, e, o) {
                n.exports =
                    o.p + "resources/images/creatures/Daddy_Long_Legs_icon.png";
            },
            7596(n, e, o) {
                n.exports = o.p + "resources/images/creatures/Eggbug_icon.png";
            },
            5698(n, e, o) {
                n.exports =
                    o.p + "resources/images/creatures/Garbage_Worm_icon.png";
            },
            6117(n, e, o) {
                n.exports =
                    o.p + "resources/images/creatures/Green_Lizard_icon.png";
            },
            8643(n, e, o) {
                n.exports =
                    o.p + "resources/images/creatures/Jellyfish_icon.png";
            },
            3948(n, e, o) {
                n.exports = o.p + "resources/images/creatures/Jetfish_icon.png";
            },
            2269(n, e, o) {
                n.exports =
                    o.p + "resources/images/creatures/Lantern_Mouse_icon.png";
            },
            1895(n, e, o) {
                n.exports =
                    o.p +
                    "resources/images/creatures/Mature_Centipede_icon.png";
            },
            4014(n, e, o) {
                n.exports =
                    o.p + "resources/images/creatures/Monster_Kelp_icon.png";
            },
            6660(n, e, o) {
                n.exports =
                    o.p + "resources/images/creatures/Pink_Lizard_icon.png";
            },
            4389(n, e, o) {
                n.exports =
                    o.p + "resources/images/creatures/Pole_Plant_icon.png";
            },
            5638(n, e, o) {
                n.exports =
                    o.p + "resources/images/creatures/Rain_Deer_icon.png";
            },
            7313(n, e, o) {
                n.exports =
                    o.p + "resources/images/creatures/Red_Lizard_icon.png";
            },
            2161(n, e, o) {
                n.exports =
                    o.p + "resources/images/creatures/Scavenger_icon.png";
            },
            4148(n, e, o) {
                n.exports = o.p + "resources/images/creatures/Snail_icon.png";
            },
            9011(n, e, o) {
                n.exports =
                    o.p + "resources/images/creatures/White_Lizard_icon.png";
            },
            6(n, e, o) {
                n.exports =
                    o.p + "resources/images/creatures/White_Squidcada_icon.png";
            },
            2287(n, e, o) {
                n.exports =
                    o.p + "resources/images/creatures/Worm_Grass_icon.png";
            },
            9552(n, e, o) {
                n.exports =
                    o.p + "resources/images/creatures/Yellow_Lizard_icon.png";
            },
            9218(n, e, o) {
                n.exports = o.p + "resources/images/food/empty.png";
            },
            6118(n, e, o) {
                n.exports = o.p + "resources/images/food/full.png";
            },
            4762(n, e, o) {
                n.exports = o.p + "resources/images/food/half.png";
            },
            5425(n, e, o) {
                n.exports = o.p + "resources/images/food/quarter.png";
            },
            8171(n, e, o) {
                n.exports = o.p + "resources/images/food/quarter_empty.png";
            },
            145(n, e, o) {
                n.exports = o.p + "resources/images/items/Batnip_icon.png";
            },
            9926(n, e, o) {
                n.exports = o.p + "resources/images/items/Blue_Fruit_icon.png";
            },
            4048(n, e, o) {
                n.exports =
                    o.p + "resources/images/items/Bubble_Fruit_icon.png";
            },
            2202(n, e, o) {
                n.exports = o.p + "resources/images/items/Cherrybomb_icon.png";
            },
            2540(n, e, o) {
                n.exports = o.p + "resources/images/items/Eggbug_Egg_icon.png";
            },
            642(n, e, o) {
                n.exports =
                    o.p + "resources/images/items/Explosive_Spear_icon.png";
            },
            6215(n, e, o) {
                n.exports = o.p + "resources/images/items/Flashbang_icon.png";
            },
            2849(n, e, o) {
                n.exports = o.p + "resources/images/items/Grenade_icon.png";
            },
            9633(n, e, o) {
                n.exports =
                    o.p + "resources/images/items/Karma_Flower_icon.png";
            },
            2679(n, e, o) {
                n.exports = o.p + "resources/images/items/Lantern_icon.png";
            },
            2598(n, e, o) {
                n.exports = o.p + "resources/images/items/Lilypuck_icon.png";
            },
            7325(n, e, o) {
                n.exports = o.p + "resources/images/items/Mushroom_icon.png";
            },
            4058(n, e, o) {
                n.exports = o.p + "resources/images/items/Rock_icon.png";
            },
            1710(n, e, o) {
                n.exports = o.p + "resources/images/items/Slime_Mold_icon.png";
            },
            1178(n, e, o) {
                n.exports = o.p + "resources/images/items/Spear_icon.png";
            },
            5694(n, e, o) {
                n.exports = o.p + "resources/images/items/Spore_Puff_icon.png";
            },
            2693(n, e, o) {
                n.exports =
                    o.p + "resources/images/items/Vulture_Mask_icon.png";
            },
            7356(n, e, o) {
                n.exports =
                    o.p + "resources/images/regions/chimney_canopy_icon.png";
            },
            2589(n, e, o) {
                n.exports =
                    o.p + "resources/images/regions/drainage_system_icon.png";
            },
            3801(n, e, o) {
                n.exports =
                    o.p + "resources/images/regions/farm_arrays_icon.png";
            },
            3254(n, e, o) {
                n.exports =
                    o.p + "resources/images/regions/five_pebbles_icon.png";
            },
            4716(n, e, o) {
                n.exports =
                    o.p +
                    "resources/images/regions/garbage_wastelands_icon.png";
            },
            2140(n, e, o) {
                n.exports =
                    o.p +
                    "resources/images/regions/industrial_complex_icon.png";
            },
            618(n, e, o) {
                n.exports =
                    o.p + "resources/images/regions/looks_to_the_moon_icon.png";
            },
            9452(n, e, o) {
                n.exports =
                    o.p + "resources/images/regions/metropolis_icon.png";
            },
            3290(n, e, o) {
                n.exports =
                    o.p + "resources/images/regions/outer_expanse_icon.png";
            },
            3814(n, e, o) {
                n.exports = o.p + "resources/images/regions/outskirts_icon.png";
            },
            4864(n, e, o) {
                n.exports = o.p + "resources/images/regions/pipeyard_icon.png";
            },
            9944(n, e, o) {
                n.exports =
                    o.p + "resources/images/regions/shaded_citadel_icon.png";
            },
            7577(n, e, o) {
                n.exports = o.p + "resources/images/regions/shoreline_icon.png";
            },
            9890(n, e, o) {
                n.exports =
                    o.p + "resources/images/regions/sky_islands_icon.png";
            },
            4031(n, e, o) {
                n.exports =
                    o.p +
                    "resources/images/regions/submerged_superstructure_icon.png";
            },
            1902(n, e, o) {
                n.exports =
                    o.p + "resources/images/regions/subterranean_icon.png";
            },
            2106(n, e, o) {
                n.exports =
                    o.p + "resources/images/regions/the_exterior_icon.png";
            },
            7882(n, e, o) {
                n.exports =
                    o.p + "resources/images/scugs/icons_small/artificer.png";
            },
            8638(n, e, o) {
                n.exports =
                    o.p + "resources/images/scugs/icons_small/gourmand.png";
            },
            7611(n, e, o) {
                n.exports =
                    o.p + "resources/images/scugs/icons_small/hunter.png";
            },
            1368(n, e, o) {
                n.exports = o.p + "resources/images/scugs/icons_small/inv.png";
            },
            3648(n, e, o) {
                n.exports = o.p + "resources/images/scugs/icons_small/monk.png";
            },
            3286(n, e, o) {
                n.exports =
                    o.p + "resources/images/scugs/icons_small/rivulet.png";
            },
            3990(n, e, o) {
                n.exports =
                    o.p + "resources/images/scugs/icons_small/saint.png";
            },
            5988(n, e, o) {
                n.exports =
                    o.p + "resources/images/scugs/icons_small/spearmaster.png";
            },
            5383(n, e, o) {
                n.exports =
                    o.p + "resources/images/scugs/icons_small/survivor.png";
            },
        },
        e = {};
    function o(i) {
        var r = e[i];
        if (void 0 !== r) return r.exports;
        var t = (e[i] = { id: i, exports: {} });
        return (n[i](t, t.exports, o), t.exports);
    }
    ((o.m = n),
        (o.n = (n) => {
            var e = n && n.__esModule ? () => n.default : () => n;
            return (o.d(e, { a: e }), e);
        }),
        (o.d = (n, e) => {
            for (var i in e)
                o.o(e, i) &&
                    !o.o(n, i) &&
                    Object.defineProperty(n, i, { enumerable: !0, get: e[i] });
        }),
        (o.g = (function () {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (n) {
                if ("object" == typeof window) return window;
            }
        })()),
        (o.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
        (() => {
            var n;
            o.g.importScripts && (n = o.g.location + "");
            var e = o.g.document;
            if (
                !n &&
                e &&
                (e.currentScript &&
                    "SCRIPT" === e.currentScript.tagName.toUpperCase() &&
                    (n = e.currentScript.src),
                !n)
            ) {
                var i = e.getElementsByTagName("script");
                if (i.length)
                    for (
                        var r = i.length - 1;
                        r > -1 && (!n || !/^http(s?):/.test(n));
                    )
                        n = i[r--].src;
            }
            if (!n)
                throw new Error(
                    "Automatic publicPath is not supported in this browser",
                );
            ((n = n
                .replace(/^blob:/, "")
                .replace(/#.*$/, "")
                .replace(/\?.*$/, "")
                .replace(/\/[^\/]+$/, "/")),
                (o.p = n));
        })(),
        (o.b =
            ("undefined" != typeof document && document.baseURI) ||
            self.location.href),
        (o.nc = void 0));
    var i = o(5072),
        r = o.n(i),
        t = o(7825),
        a = o.n(t),
        c = o(7659),
        s = o.n(c),
        l = o(5056),
        d = o.n(l),
        g = o(540),
        m = o.n(g),
        p = o(1113),
        u = o.n(p),
        b = o(3629),
        f = {};
    ((f.styleTagTransform = u()),
        (f.setAttributes = d()),
        (f.insert = s().bind(null, "head")),
        (f.domAPI = a()),
        (f.insertStyleElement = m()),
        r()(b.A, f),
        b.A && b.A.locals && b.A.locals);
    var h = o(4643),
        v = {};
    ((v.styleTagTransform = u()),
        (v.setAttributes = d()),
        (v.insert = s().bind(null, "head")),
        (v.domAPI = a()),
        (v.insertStyleElement = m()),
        r()(h.A, v),
        h.A && h.A.locals && h.A.locals);
    class y extends HTMLElement {
        static observedAttributes = ["svg"];
        shadow;
        static add =
            "\n\n<style>\n.cont {\n  position: relative;\n  isolation: isolate;\n  width: 100%;\n  height: 100%;\n}\n\nsvg {\n  position: absolute;\n  left:     var(--svg-x, 0px);\n  top:      var(--svg-y, 0px);\n  width:    var(--svg-sx, 100%);\n  height:   var(--svg-sy, 100%);\n  transform: rotate(var(--svg-rot)) var(--svg-trans);\n  z-index:  -1;\n}\n\n</style>\n\n";
        constructor() {
            (super(), (this.shadow = this.attachShadow({ mode: "open" })));
        }
        async attributeChangedCallback(n, e, o) {
            {
                const n = this.getAttribute("svg");
                if ("" === n || null == n) return;
                const e = await fetch(n);
                this.shadow.innerHTML =
                    '<div class="cont">' +
                    (await e.text()) +
                    "<slot></slot></div>" +
                    y.add;
            }
        }
    }
    customElements.define("mw-svgdiv", y);
    var x = o(400),
        k = {};
    ((k.styleTagTransform = u()),
        (k.setAttributes = d()),
        (k.insert = s().bind(null, "head")),
        (k.domAPI = a()),
        (k.insertStyleElement = m()),
        r()(x.A, k),
        x.A && x.A.locals && x.A.locals);
    var w = o(8584),
        F = {};
    ((F.styleTagTransform = u()),
        (F.setAttributes = d()),
        (F.insert = s().bind(null, "head")),
        (F.domAPI = a()),
        (F.insertStyleElement = m()),
        r()(w.A, F),
        w.A && w.A.locals && w.A.locals);
    var A = o(8984),
        _ = {};
    ((_.styleTagTransform = u()),
        (_.setAttributes = d()),
        (_.insert = s().bind(null, "head")),
        (_.domAPI = a()),
        (_.insertStyleElement = m()),
        r()(A.A, _),
        A.A && A.A.locals && A.A.locals);
    var L = o(6474),
        z = {};
    ((z.styleTagTransform = u()),
        (z.setAttributes = d()),
        (z.insert = s().bind(null, "head")),
        (z.domAPI = a()),
        (z.insertStyleElement = m()),
        r()(L.A, z),
        L.A && L.A.locals && L.A.locals);
    var R = o(1856),
        $ = {};
    (($.styleTagTransform = u()),
        ($.setAttributes = d()),
        ($.insert = s().bind(null, "head")),
        ($.domAPI = a()),
        ($.insertStyleElement = m()),
        r()(R.A, $),
        R.A && R.A.locals && R.A.locals);
    var U = o(9676),
        E = {};
    ((E.styleTagTransform = u()),
        (E.setAttributes = d()),
        (E.insert = s().bind(null, "head")),
        (E.domAPI = a()),
        (E.insertStyleElement = m()),
        r()(U.A, E),
        U.A && U.A.locals && U.A.locals);
    var T = o(3707),
        S = {};
    ((S.styleTagTransform = u()),
        (S.setAttributes = d()),
        (S.insert = s().bind(null, "head")),
        (S.domAPI = a()),
        (S.insertStyleElement = m()),
        r()(T.A, S),
        T.A && T.A.locals && T.A.locals);
    var P = o(7448),
        M = {};
    ((M.styleTagTransform = u()),
        (M.setAttributes = d()),
        (M.insert = s().bind(null, "head")),
        (M.domAPI = a()),
        (M.insertStyleElement = m()),
        r()(P.A, M),
        P.A && P.A.locals && P.A.locals);
    var j = o(2437),
        q = {};
    let I;
    function C(n = 1e3) {
        return (
            (I.style.transitionDuration = "0"),
            I.style.setProperty("--rw-transition", "1"),
            requestAnimationFrame(() => {
                ((I.style.transitionDuration = `${n}ms`),
                    I.style.setProperty("--rw-transition", "0"));
            }),
            new Promise((e, o) => setTimeout(e, n))
        );
    }
    ((q.styleTagTransform = u()),
        (q.setAttributes = d()),
        (q.insert = s().bind(null, "head")),
        (q.domAPI = a()),
        (q.insertStyleElement = m()),
        r()(j.A, q),
        j.A && j.A.locals && j.A.locals);
    let B,
        N = !1;
    (document.getElementById("load-cover")?.remove(),
        (I = document.createElement("div")),
        (I.id = "rw-transition"),
        document.body.appendChild(I),
        (function (n = 1e3) {
            ((I.style.transitionDuration = "0"),
                I.style.setProperty("--rw-transition", "0"),
                requestAnimationFrame(() => {
                    ((I.style.transitionDuration = `${n}ms`),
                        I.style.setProperty("--rw-transition", "1"));
                }),
                new Promise((e, o) => setTimeout(e, n)));
        })(),
        document
            .getElementById("btn-back")
            .addEventListener("click", async (n) => {
                (await C(), location.assign("./rainPage"));
            }));
    const D = document.querySelectorAll(".item");
    function H(n) {
        ((B = n),
            document.querySelectorAll(".selected").forEach((n) => {
                n.classList.remove("selected");
            }),
            document.body.parentElement?.style.setProperty("--iais", "1"),
            document.body.parentElement?.style.setProperty("--iais-pe", "all"),
            n.classList.add("selected"));
        const e = n.getAttribute("target-info");
        if (!e) return;
        const o = document.getElementById(e);
        if (!o) return;
        const i = n.getAttribute("web-title"),
            r = document.querySelector("title");
        (i && r && (r.innerHTML = i), o.classList.add("selected"));
    }
    function Y(n = window.location.search) {
        for (const [e, o] of new URLSearchParams(n))
            if ("item" === e)
                for (let n = 0; n < D.length; n++) {
                    const e = D[n];
                    if (e.getAttribute("search-query") === o) {
                        H(e);
                        break;
                    }
                }
            else
                "ext" === e &&
                    "true" === o &&
                    (document.getElementById("btn-back").innerHTML =
                        "ZPĚT DO MENU");
    }
    var O;
    (Y(),
        (O = Y),
        navigation.addEventListener("navigate", (n) => {
            if (N) return;
            if (
                "reload" === n.navigationType ||
                (null == n.sourceElement && "" === n.destination.key)
            )
                return;
            const e = new URL(n.destination.url);
            e.pathname === window.location.pathname
                ? n.intercept({
                      async handler() {
                          O(e.search);
                      },
                  })
                : ((N = !0),
                  n.preventDefault(),
                  (async function () {
                      (await C(), location.assign(e));
                  })());
        }));
    const W = document.getElementById("background");
    let X = 0,
        G = 0,
        J = 0,
        K = 0,
        Q = 0;
    (document.addEventListener("mousemove", (n) => {
        const e = document.body.clientWidth,
            o = document.body.clientHeight,
            i = n.clientX - e / 2,
            r = n.clientY - o / 2,
            t = Math.sqrt(i * i + r * r);
        if (0 === t) return ((J = 0), void (K = 0));
        ((J = (i / t) * Math.min(t / (e / 3), 1)),
            (K = (r / t) * Math.min(t / (e / 3), 1)));
    }),
        (function n(e) {
            const o = Math.min((e - Q) / 1e3, 2);
            ((Q = e),
                isNaN(X) && (X = J),
                isNaN(G) && (G = K),
                (X += 1.5 * (J - X) * o),
                (G += 1.5 * (K - G) * o),
                W.style.setProperty("--bg-mpx", `${X}`),
                W.style.setProperty("--bg-mpy", `${G}`),
                requestAnimationFrame(n));
        })(0));
})();

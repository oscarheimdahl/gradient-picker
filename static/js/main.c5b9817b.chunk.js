(this["webpackJsonpgradient-picker"]=this["webpackJsonpgradient-picker"]||[]).push([[0],{18:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAABbklEQVR4Ae3VAWQCYRTA8QGGcAjhEIZhOMAhjGEYQjiEMMAQQhg+BBgGGGAYhhCGAGEYwjAECAOEEEJ4++ON85Td3XU6058fAO/c973v5L9XQ2nqwpVpGIErzTDKlWYY5UozjJrjCR2cHnoYa4kHVFBoZ9hAEpojRKHdYAUxXtDHFyRmjRb2UhXbatihzKGOsICoDRrIlY8FWgmHcnZzYwZR3/CQuWcI1ggTDOV2f1T+1VA3h/cSNjuUw7Yic/s8pO4eosb4qwZ62NUnRLWRuglEdZC3vrmN2V5vVUXeQoj6wMGrm2V58Hxz/VPXg1Me8hZA1BSpm0JUtOcHeYjUDSDqFXl7h6hbpO7CvEMBsnZlHtoaMjWKDXSNLHmYQ9QjMneOFVrIUsX8qiVqyJWPeB2ECRfhDBLTxF67g6gR2maLVxHhDWJ0i9i0a4jh8JuDGEs0UUgBJgkH2mAIH4UXYIApemb5jeHg49ixY6XrB+MRtdio+M6GAAAAAElFTkSuQmCC"},19:function(t,e,n){t.exports=n.p+"static/media/hide.19d98df8.png"},20:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAA2UlEQVR4Ae3XIQyCQBiGYQM92WefPRnsRgKRnggEg+H6CASDPRkMBCOBSM9Egn0Eg+F8A8GCNznuR7b7tqe/u+0Pt/JzOL8dEqgJRLDaBXpiCUZtA20mF3WE7lVQI1VTRSnonsLYKYuXEg8yRskHAdG/BamlBjm4Mvsge0sN8kE+qMENBdo5gzrE+FyAFK85gkIMLZUOqvFtAVrJoBymFZJBGUy7SgaVMK2RCwL2GFo8x5U9BqJCdO6CzEpkyFG7+IVE0AKeWMO4AHeBoDN+2hYnKAcO8PNzsjf0byWVn71QQAAAAABJRU5ErkJggg=="},26:function(t,e,n){t.exports=n(36)},31:function(t,e,n){},36:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(9),i=n.n(r),c=n(15),l=n(5),u=n(16),s=n(17),d=n(23),g=(n(31),n(18)),m=n.n(g),A=n(19),h=n.n(A),p=n(20),f=n.n(p),E=n(21),b=n.n(E),C=n(47),B=n(11),y=Object(B.a)({root:{color:"#fff",height:8},thumb:{color:" #bb0000"}})(C.a),v=Object(B.a)({root:{color:"#fff",height:8},thumb:{color:" #00bb00"}})(C.a),S=Object(B.a)({root:{color:"#fff",height:8},thumb:{color:" #0000bb"}})(C.a),O=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(u.a)(this,Object(s.a)(e).call(this,t))).state={colors:[{r:0,g:0,b:0},{r:0,g:0,b:0}],initColors:[{r:0,g:0,b:0},{r:0,g:0,b:0}],copiedOpacity:0,rotation:120,uiOpacity:1,randomizeButtonColor:"white",gradientImage:null},n.getGradient=function(){var t="";return n.state.colors.forEach((function(e){t+="rgb("+e.r+", "+e.g+", "+e.b+"), "})),t=t.substring(0,t.length-2),{background:"linear-gradient("+n.state.rotation+"deg, "+t+")"}},n.updateColor=function(t,e,o,a){if(a)n.setState({colors:a,initColors:a});else{var r=n.state.colors;r[t][e]=o,n.setState({colors:r,initColors:r})}},n.updateRotation=function(t){var e=t.target.value;n.setState({rotation:e})},n.handleSliderChange=function(){},n.getColorSlider=function(t,e){switch(e){case"r":return a.a.createElement(y,{value:n.state.initColors[t][e],min:0,max:255,onChange:function(o,a){n.updateColor(t,e,a)},"aria-labelledby":"continuous-slider"});case"g":return a.a.createElement(v,{value:n.state.initColors[t][e],min:0,max:255,onChange:function(o,a){n.updateColor(t,e,a)},"aria-labelledby":"continuous-slider"});default:return a.a.createElement(S,{value:n.state.initColors[t][e],min:0,max:255,onChange:function(o,a){n.updateColor(t,e,a)},"aria-labelledby":"continuous-slider"})}},n.getSliderBlock=function(t){return a.a.createElement("div",{key:t,className:"sliderBlock"},n.getColorSlider(t,"r"),n.getColorSlider(t,"g"),n.getColorSlider(t,"b"))},n.colorSliders=function(){return a.a.createElement("div",{className:"slidersBlockContainer"},n.state.colors.map((function(t,e){return n.getSliderBlock(e)})))},n.opacityToggle=function(){return a.a.createElement("button",{className:"opacityToggle roundButton",onMouseEnter:function(){return n.setState({uiOpacity:0})},onMouseLeave:function(){return n.setState({uiOpacity:1})}},a.a.createElement("img",{src:h.a,alt:"hide"}))},n.saveButton=function(){return a.a.createElement("button",{className:"roundButton saveButton",onClick:function(){n.setState({uiOpacity:0}),setTimeout((function(){return n.setState({uiOpacity:1})}),150),setTimeout((function(){b()(document.body).then((function(t){t.id="canvas",document.getElementById("imageSave").appendChild(t);var e=document.createElement("a");e.download="awesome-gradient.png",e.href=document.getElementById("canvas").toDataURL(),e.click()}))}),100)}}," ",a.a.createElement("img",{src:f.a,alt:"hide"}))},n.randomizeButton=function(){return a.a.createElement("button",{style:{background:n.state.randomizeButtonColor},className:"randomizeButton roundButton",onClick:function(){var t=[{r:k(255),g:k(255),b:k(255)},{r:k(255),g:k(255),b:k(255)}];n.setState({allColors:t}),n.updateColor(null,null,null,t)}}," ",a.a.createElement("img",{src:m.a,alt:"randomize"}))},n.cssButton=function(){return a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){n.setState({copiedOpacity:1}),setTimeout((function(){return n.setState({copiedOpacity:0})}),500);var t=document.getElementById("css");t.select(),t.setSelectionRange(0,99999),document.execCommand("copy")},className:"randomizeButton roundButton"},"CSS"),a.a.createElement("div",{className:"copied",style:{opacity:n.state.copiedOpacity}},"Copied!"))},n.imageSave=a.a.createRef(),n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){var t=[{r:k(255),g:k(255),b:k(255)},{r:k(255),g:k(255),b:k(255)}];this.setState({colors:t,initColors:t})}},{key:"render",value:function(){var t=this.getGradient();return a.a.createElement("div",{style:t,className:"gradientBackground"},a.a.createElement("div",{style:{opacity:this.state.uiOpacity,transitionDuration:"300ms"}},a.a.createElement("div",{className:"buttons"},this.saveButton(),this.cssButton(),this.randomizeButton(),this.opacityToggle()),this.colorSliders()),a.a.createElement("div",{id:"imageSave",style:{display:"none"}}),a.a.createElement("input",{id:"css",onChange:function(){},value:t.background}))}}]),e}(o.Component);function k(t){return Math.floor(Math.random()*(t+1))}i.a.render(a.a.createElement(O,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.c5b9817b.chunk.js.map
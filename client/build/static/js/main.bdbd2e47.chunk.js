(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{36:function(e,t,n){e.exports=n(72)},41:function(e,t,n){},69:function(e,t){},72:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n(2),c=n(4),r=n(3),o=n(0),i=n.n(o),m=n(34),s=n.n(m),u=(n(41),function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("header",{className:"box Header"},i.a.createElement("h3",{className:"box__title Header__title"},"GUI_ROV4"))}}]),n}(i.a.Component)),d=function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"box Module"},i.a.createElement("h3",{className:"box__title Module__title"},this.props.title),i.a.createElement("div",{className:"Module__content"},this.props.content))}}]),n}(i.a.Component),h=n(35),v=n.n(h),p=function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(e){var l;return Object(a.a)(this,n),(l=t.call(this,e)).state={img:null},l}return Object(l.a)(n,[{key:"getRandomRGBValue",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:255;return Math.floor(Math.random()*t)+e}},{key:"getRandomRGBImgArray",value:function(e,t){for(var n=[],a=0;a<e;a++){for(var l=[],c=0;c<t;c++)l.push([this.getRandomRGBValue(0,255),this.getRandomRGBValue(0,255),this.getRandomRGBValue(0,255)]);n.push(l)}return n}},{key:"renderRandomRGBImg",value:function(e){for(var t=this.refs.canvas.getContext("2d"),n=0;n<e.length;n++)for(var a=0;a<e[0].length;a++)t.fillStyle="rgba("+e[n][a][0]+","+e[n][a][1]+","+e[n][a][2]+", 1)",t.fillRect(n,a,1,1)}},{key:"animateRandomRGBImg",value:function(){var e=this;setInterval((function(){e.renderRandomRGBImg(e.getRandomRGBImgArray(e.refs.canvas.width,e.refs.canvas.height))}),500)}},{key:"renderImg",value:function(e){var t="data:image/jpg;base64, "+e;this.setState({img:t})}},{key:"fetchImgTxtBase64",value:function(e){var t=this;fetch("b64.txt").then((function(e){return e.text()})).then((function(e){t.renderImg(e)}))}},{key:"handleClick",value:function(){var e=this;this.animateRandomRGBImg();var t=v()("http://localhost:5000");t.on("connect",(function(){console.log("Socket connected"),t.send("Client connected")}));var n=0;t.on("message",(function(t){console.log("Frame received: "+n),e.renderImg(t),n++}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"Camera",onClick:function(){return e.handleClick()}},i.a.createElement("img",{src:this.state.img,alt:"ROV camera output"}),i.a.createElement("canvas",{ref:"canvas",width:"4",height:"3"}))}}]),n}(i.a.Component),f=function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"box Terminal"},i.a.createElement("h3",{className:"box__title Terminal__title"},this.props.title))}}]),n}(i.a.Component),g=function(e){Object(c.a)(n,e);var t=Object(r.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"app"},i.a.createElement(u,null),i.a.createElement("main",null,i.a.createElement("div",{className:"modules"},i.a.createElement(d,{title:"Module 1",content:"sample content sample content"}),i.a.createElement(d,{title:"Module 2",content:"sample content sample content"}),i.a.createElement(d,{title:"Module 3",content:"sample content sample content"}),i.a.createElement(d,{title:"Module 4",content:"sample content sample content"})),i.a.createElement(p,null),i.a.createElement("div",{className:"modules"},i.a.createElement(d,{title:"Module 5",content:"sample content sample content"}),i.a.createElement(d,{title:"Module 6",content:"sample content sample content"}),i.a.createElement(d,{title:"Module 7",content:"sample content sample content"}))),i.a.createElement("div",{className:"terminals"},i.a.createElement(f,{title:"Terminal 1"}),i.a.createElement(f,{title:"Terminal 2"})))}}]),n}(i.a.Component);s.a.render(i.a.createElement(g,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.bdbd2e47.chunk.js.map
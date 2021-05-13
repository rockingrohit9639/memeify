(this.webpackJsonpmemeapp=this.webpackJsonpmemeapp||[]).push([[0],{38:function(e,t,a){e.exports=a(49)},43:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),o=a(12),r=a.n(o),i=(a(43),a(33)),c=a(70),s=a(75),d=a(72),h=a(73),m=a(74),u=Object(c.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,color:"white"}}}));var v=function(){var e=u(),t=Object(n.useState)(!1),a=Object(i.a)(t,2),o=a[0],r=a[1];return l.a.createElement(s.a,{position:"static",className:"inverted-theme"},l.a.createElement(d.a,null,l.a.createElement(m.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"}),l.a.createElement(h.a,{variant:"h6",className:e.title},l.a.createElement("img",{className:"inverted inverted-theme",src:"https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png",alt:"Problem?",height:"50px",width:"50px"})),l.a.createElement(h.a,{variant:"h5",className:e.title},l.a.createElement("p",null,"Meme Generator")),l.a.createElement(h.a,{variant:"h6"},l.a.createElement("label",{className:"theme-switch",htmlFor:"checkbox"},l.a.createElement("input",{type:"checkbox",id:"checkbox",onChange:function(e){var t=document.querySelectorAll(".inverted");document.body.classList.toggle("inverted-theme"),t.forEach((function(e){return e.classList.toggle("inverted-theme")})),r(!o)}}),l.a.createElement("div",{className:"slider round"})))))},g=a(25),f=a(15),p=a(29),x=a(30),b=a(9),C=a(34),w=a(32),E=a(24);var y=function(e){var t=this;return e.state.texts,l.a.createElement("form",{className:"meme-form",onSubmit:e.handleSubmit},e.state.texts.map((function(a){return l.a.createElement("div",null,l.a.createElement("input",{className:"input",key:a.id,type:"text",name:a.text,placeholder:"Funny text goes here....",value:a.text,onChange:e.handleChange.bind(t,a.id)}),l.a.createElement("input",{className:"colorPicker",type:"color",name:"bottomColor",value:a.color,onChange:e.handleColorChange.bind(t,a.id)}),l.a.createElement("input",{className:"colorPicker",type:"color",name:"bottomBorderColor",value:a.borderColor,onChange:e.handleBorderColorChange.bind(t,a.id)}))})),l.a.createElement("div",{className:"input-control"},l.a.createElement("button",{id:"remove ",className:"inverted button",onClick:e.handleRemoveText},"-"),l.a.createElement("button",{id:"add",className:"inverted button",onClick:e.handleAddText},"+")),l.a.createElement("button",{type:"submit",onClick:e.handleRandomClick,className:"inverted button"},l.a.createElement(E.MdShuffle,null)," Random"),l.a.createElement("button",{type:"submit",onClick:e.handleDownloadClick,className:"inverted button"},l.a.createElement(E.MdFileDownload,null),"  download"),l.a.createElement("button",{className:"cutom-file-upload inverted button",type:"button",onClick:function(){document.getElementById("file-upload").click()}}," ",l.a.createElement(E.MdFileUpload,null)," Upload"),l.a.createElement("input",{id:"file-upload",type:"file",onChange:e.handleFileChange}))};var k=function(e){return l.a.createElement("div",{className:"meme"},l.a.createElement("center",null,l.a.createElement("canvas",{id:"my-canvas",className:"inverted",width:"568px",height:"335px"})))},F=function(e,t,a){var n=t,l=e;t>a&&(l=e*(a/t),n=a);return{newheight:n,newwidth:l}},T=function(e){Object(C.a)(a,e);var t=Object(w.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).getPos=function(e){for(var t=0,a=0;null!=e;)t+=e.offsetLeft,a+=e.offsetTop,e=e.offsetParent;return{x:t,y:a}},e.textHittest=function(t,a,n){var l=e.state.texts[n];return t>=l.x&&t<=l.x+l.width&&a>=l.y-l.height&&a<=l.y},e.handleMouseDown=function(t){var a,n,l;t.preventDefault();var o=e.state,r=o.texts,i=o.canvas;n=(a=e.getPos(i)).x,l=a.y,e.startX=parseInt(t.clientX-n),e.startY=parseInt(t.clientY-l);for(var c=0;c<r.length;c++)e.textHittest(e.startX,e.startY,c)&&(e.selectedText=c)},e.handleMouseMove=function(t){t.preventDefault();var a,n,l,o,r,i,c,s=e.state.canvas;n=(a=e.getPos(s)).x,l=a.y,i=parseInt(t.clientX-n),c=parseInt(t.clientY-l),o=parseInt(i-e.startX),r=parseInt(c-e.startY);var d=Object(f.a)(e.state.texts);d[e.selectedText].x+=o,d[e.selectedText].y+=r,e.startX=i,e.startY=c,e.setState({texts:d})},e.handleMouseUp=function(t){t.preventDefault(),e.selectedText=-1},e.handleMouseOut=function(t){t.preventDefault(),e.selectedText=-1},e.setImage=function(){var t=e.state,a=t.image,n=t.texts,l=t.height,o=t.width,r=t.url,i=t.maxHeight,c=document.getElementById("my-canvas"),s=c.getContext("2d");a.src=r,a.crossOrigin="anonymous";var d=F(o,l,i),h=d.newheight,m=d.newwidth;a.onload=function(){c.height=h,c.width=m,s.drawImage(a,0,0,o,l,0,0,m,h);for(var e=0;e<n.length;e++){s.font="2em impact, sans-serif";var t=n[e],r=t.text,i=t.color,d=t.borderColor,u=t.x,v=t.y;t.size,s.measureText(r).width;s.strokeStyle=d,s.strokeText(r,u,v),s.fillStyle=i,s.fillText(r,u,v)}}},e.handleColorChange=function(t,a){var n=a.target,l=n.name,o=n.value;setTimeout((function(){Object(f.a)(e.state.texts)[t].color=o,e.setState(Object(g.a)({},l,o))}),250)},e.handleBorderColorChange=function(t,a){var n=a.target,l=n.name,o=n.value;setTimeout((function(){Object(f.a)(e.state.texts)[t].borderColor=o,e.setState(Object(g.a)({},l,o))}),250)},e.state={texts:[{id:0,text:"",color:"#000000",borderColor:"#FFFFFF",height:36,width:null,x:250,y:50},{id:1,text:"",color:"#000000",borderColor:"#FFFFFF",height:36,width:null,x:250,y:300}],context:void 0,canvas:void 0,topText:"",bottomText:"",bottomColor:"#000000",bottomBorderColor:"#FFFFFF",height:335,width:568,url:"http://i.imgflip.com/1bij.jpg",allMemeImgs:[],image:void 0,maxHeight:Math.floor(.8*window.innerHeight),updateImage:!1,selectedText:-1},e.componentDidMount=e.componentDidMount.bind(Object(b.a)(e)),e.handleChange=e.handleChange.bind(Object(b.a)(e)),e.handleRandomClick=e.handleRandomClick.bind(Object(b.a)(e)),e.handleFileChange=e.handleFileChange.bind(Object(b.a)(e)),e.handleAddText=e.handleAddText.bind(Object(b.a)(e)),e.handleRemoveText=e.handleRemoveText.bind(Object(b.a)(e)),e.selectedText=-1,e.startX=void 0,e.startY=void 0,e}return Object(x.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.state.url,a=document.getElementById("my-canvas"),n=a.getContext("2d"),l=new Image;l.src=t,fetch("https://api.imgflip.com/get_memes").then((function(e){return e.json()})).then((function(t){var o=t.data.memes;e.setState({allMemeImgs:o,image:l,canvas:a,context:n})})).then((function(){a.onmousedown=function(t){t.preventDefault(),e.handleMouseDown(t)},a.onmousemove=function(t){t.preventDefault(),-1!==e.selectedText&&e.handleMouseMove(t)},a.onmouseup=function(t){t.preventDefault(),e.handleMouseUp(t)},a.onmouseout=function(t){t.preventDefault(),e.handleMouseOut(t)}}))}},{key:"componentDidUpdate",value:function(){this.setImage()}},{key:"handleChange",value:function(e,t){t.preventDefault();var a=document.getElementById("my-canvas").getContext("2d");a.font="2em impact, sans-serif";var n=t.target.value,l=Object(f.a)(this.state.texts);l[e].text=n,l[e].width=a.measureText(n).width,this.setState({texts:l})}},{key:"handleAddText",value:function(e){e.preventDefault();var t=Object(f.a)(this.state.texts);t.push({id:t.length,text:"",color:"#000000",borderColor:"#FFFFFF",size:10,x:50,y:50,height:36}),this.setState({texts:t})}},{key:"handleRemoveText",value:function(e){e.preventDefault();var t=this.state.texts.slice(0,-1);this.setState({texts:t})}},{key:"handleRandomClick",value:function(e){e.preventDefault();var t=Math.floor(Math.random()*this.state.allMemeImgs.length),a=this.state.allMemeImgs[t],n=a.url,l=a.width,o=a.height;this.setState({url:n,width:l,height:o,updateImage:!0}),console.log(this.state)}},{key:"handleFileChange",value:function(e){var t=this,a=window.URL.createObjectURL(e.target.files[0]),n=new Image;n.onload=function(){var e=F(this.width,this.height),n=e.newheight,l=e.newwidth;t.setState({url:a,width:l,height:n,updateImage:!0})},n.src=a}},{key:"handleDownloadClick",value:function(e){e.preventDefault(),console.log(e);var t=document.getElementById("my-canvas").toDataURL("image/jpeg"),a=new Image;a.crossOrigin="anonymous",a.href=t;var n=document.createElement("a");n.download="meme.jpeg",n.href=t,n.click()}},{key:"render",value:function(){return l.a.createElement("div",{className:"memeRoot"},l.a.createElement(y,{state:this.state,handleRandomClick:this.handleRandomClick,handleChange:this.handleChange,handleChangeBT:this.handleChangeBT,handleColorChange:this.handleColorChange,handleBorderColorChange:this.handleBorderColorChange,handleFileChange:this.handleFileChange,handleAddText:this.handleAddText,handleRemoveText:this.handleRemoveText,handleDownloadClick:this.handleDownloadClick}),l.a.createElement(k,null))}}]),a}(n.Component),j=a(31),I=a(26),M=a(0);var D=function(){return l.a.createElement("div",{id:"footer"},l.a.createElement("div",{id:"left"},l.a.createElement("a",{href:"https://twitter.com/jai_dewani"},l.a.createElement(M.IconContext.Provider,{value:{color:"rgb(29, 161, 242)"}},l.a.createElement("div",null,l.a.createElement(I.b,null))))),l.a.createElement("div",{id:"middle"},"Made with ",l.a.createElement(j.a,null)," by ",l.a.createElement("a",{href:"https://github.com/jai-dewani"},"Jai Kumar Dewani")),l.a.createElement("div",{id:"right"},l.a.createElement("a",{href:"https://github.com/jai-dewani/Meme-App"},l.a.createElement(M.IconContext.Provider,{value:{color:"black"}},l.a.createElement("div",null,l.a.createElement(I.a,null))))))};a(48);var O=function(){return l.a.createElement("div",{className:"app-container","data-theme":"dark"},l.a.createElement(v,null),l.a.createElement(T,null),l.a.createElement(D,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.e5ad37eb.chunk.js.map
(this["webpackJsonpstreaming-fe"]=this["webpackJsonpstreaming-fe"]||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/bmpl.a985aa5c.png"},54:function(e,t,a){e.exports=a.p+"static/media/github.617870e4.svg"},66:function(e,t,a){e.exports=a(99)},71:function(e,t,a){},72:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},98:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(20),l=a.n(r),i=(a(71),a(27)),c=a(19),s=a(28),m=a(29),u=a(32),p=(a(72),a(26)),h=a(127),g=a(136),d=a(131),f=a(134),E=a(133),v=a(132),b=a(126),y=a(130),w=a(128),x=a(100),C=a(53),k=a(129),O=a(125),j=a(24),B=a.n(j),S=a(30),N=a.n(S),P=a(51);a(92);function W(){return o.a.createElement(x.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",o.a.createElement(O.a,{color:"inherit",href:"#"},"BrainMentorsPvtLtd")," ",(new Date).getFullYear(),".")}var D=Object(C.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column",cursor:"pointer"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}}));function G(e){var t=Object(n.useState)([]),a=Object(p.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(" "),c=Object(p.a)(i,2),s=c[0],m=c[1],u=[],C=D();return Object(n.useEffect)((function(){console.log("useEffect"),console.log("fetching video list"),B.a.post("http://ec2-18-219-162-155.us-east-2.compute.amazonaws.com:3000/user/isUserLoggedIn",{},{withCredentials:!0}).then((function(t){console.log(t.data),1==t.data?(console.log("axios get username and get available videos"),B.a.get("http://ec2-18-219-162-155.us-east-2.compute.amazonaws.com:3000/user/userDetails",{withCredentials:!0}).then((function(e){console.log(e.data),s!==e.data?m(e.data):console.log(s)})).catch((function(e){return console.log(e)})),B.a.get("http://ec2-18-219-162-155.us-east-2.compute.amazonaws.com:3000/user/getAvailableVideos",{withCredentials:!0}).then((function(e){console.log(e.data),u=e.data,JSON.stringify(r)!==JSON.stringify(u)?(console.log("inside getcards"),l(u)):console.log(r,u)})).catch((function(e){return console.log(e)}))):(console.log("push history to login page"),e.history.push({pathname:"/"}))})).catch((function(e){return console.log(e)}))})),console.log(r,u),o.a.createElement(o.a.Fragment,null,o.a.createElement(b.a,null),o.a.createElement(h.a,{position:"relative"},o.a.createElement(w.a,null,o.a.createElement(x.a,{variant:"h6",color:"inherit",align:"left",noWrap:!0},"Welcome ",s),"\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003 \u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003 \u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003 \u2003\u2003",o.a.createElement(x.a,{variant:"h6",color:"inherit",style:{cursor:"pointer",textAlign:"right"},align:"right",onClick:function(){Object(P.confirmAlert)({title:"Confirm to Sign Out",message:"This will log you out from all the sessions",buttons:[{label:"Yes",onClick:function(){window.location.href="http://ec2-18-219-162-155.us-east-2.compute.amazonaws.com:3000/auth/logout"}},{label:"No",onClick:function(){return console.log("signout discarded")}}]})},noWrap:!0},"Sign Out"))),o.a.createElement("main",null,o.a.createElement("div",{className:C.heroContent},o.a.createElement(k.a,{maxWidth:"sm"},o.a.createElement(x.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"Video Gallery"))),o.a.createElement(k.a,{className:C.cardGrid,maxWidth:"md"},o.a.createElement(y.a,{container:!0,spacing:4},r.map((function(t){return o.a.createElement(y.a,{item:!0,key:t,xs:12,sm:6,md:4},o.a.createElement(d.a,{className:C.card,onClick:function(){e.history.push({pathname:"/playVideo",state:{title:t,username:s}})}},o.a.createElement(v.a,{className:C.cardMedia,image:N.a,title:"Image title"}),o.a.createElement(E.a,{className:C.cardContent},o.a.createElement(x.a,{gutterBottom:!0,variant:"h5",component:"h2"},t),o.a.createElement(x.a,null,"Description title : dummy video for testing purposes")),o.a.createElement(f.a,null,o.a.createElement(g.a,{size:"small",color:"primary"},"View"),o.a.createElement(g.a,{size:"small",color:"primary"},"Edit"))))}))))),o.a.createElement("footer",{className:C.footer},o.a.createElement(x.a,{variant:"h6",align:"center",gutterBottom:!0},"Brain Mentors Pvt Limited"),o.a.createElement(x.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},"23, 1st & 2nd Floor, Block-C, Pocket-9, Rohini Sector-7 Delhi-110085",o.a.createElement("br",null),"   Oppposite to Metro Pillar No-400"),o.a.createElement(W,null)))}var z=a(137),M=a(135),L=a(54),T=a.n(L);function F(){return o.a.createElement(x.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",o.a.createElement(O.a,{color:"inherit",href:"#"},"BrainMentorsPvtLtd")," ",(new Date).getFullYear(),".")}var R=Object(C.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function I(e){Object(n.useEffect)((function(){console.log("useEffect-- checking for logged in"),B.a.post("http://ec2-18-219-162-155.us-east-2.compute.amazonaws.com:3000/user/isUserLoggedIn",{},{withCredentials:!0}).then((function(t){console.log(t.data),1==t.data&&(console.log("push history to dashboard"),e.history.push({pathname:"/DashBoard"}))})).catch((function(e){return console.log(e)}))}));var t=R();function a(){console.log("axios call")}return o.a.createElement(k.a,{component:"header",maxWidth:"md"},o.a.createElement("br",null),o.a.createElement(x.a,{component:"h1",variant:"h2",align:"center"},"Welcome to Brain Mentors ' ",o.a.createElement("br",null),"e-Learning Corner"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(x.a,{component:"h1",variant:"h4",align:"center"},"Your one stop destination to enhance your professional IT skills at your own pace."),o.a.createElement(k.a,{component:"main",maxWidth:"xs"},o.a.createElement(b.a,null),o.a.createElement("div",{className:t.paper},o.a.createElement(z.a,{className:t.avatar}),o.a.createElement("br",null),o.a.createElement("a",{href:"http://ec2-18-219-162-155.us-east-2.compute.amazonaws.com:3000/auth/google"},o.a.createElement("div",null,o.a.createElement(g.a,{props:e,onClick:function(){a()}},o.a.createElement("img",{width:"35px",style:{marginTop:"7px",marginRight:"8px"},alt:"Google sign-in",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"}),o.a.createElement(x.a,{component:"h2",variant:"h5",style:{fontSize:"1.0rem"}},"Continue with Google")))),o.a.createElement("a",{href:"http://ec2-18-219-162-155.us-east-2.compute.amazonaws.com:3000/auth/google"},o.a.createElement("div",null,o.a.createElement(g.a,{onClick:function(){a()}},o.a.createElement("img",{width:"35px",style:{marginTop:"7px",marginRight:"8px"},alt:"Google sign-in",src:T.a}),o.a.createElement(x.a,{component:"h5",variant:"h5",style:{fontSize:"1.0rem"}},"Continue with GitHub"))))),o.a.createElement("br",null),o.a.createElement(M.a,{mt:8},o.a.createElement(F,null))))}var V=a(15),A=a(16),Y=(a(94),a(95));function J(){return o.a.createElement(x.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",o.a.createElement(O.a,{color:"inherit",href:"#"},"BrainMentorsPvtLtd")," ",(new Date).getFullYear(),".")}var _=function(e){function t(e){var a;return Object(i.a)(this,t),console.log(e),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).videoComponent=o.a.createRef(),a.videoContainer=o.a.createRef(),a.onErrorEvent=a.onErrorEvent.bind(Object(V.a)(a)),a.onError=a.onError.bind(Object(V.a)(a)),console.log(e.history.location.state),a.title=void 0,a.username=void 0,void 0!=e.history.location.state&&(a.title=e.history.location.state.title,a.username=e.history.location.state.username),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"onErrorEvent",value:function(e){this.onError(e.detail)}},{key:"onError",value:function(e){console.error("Error code",e.code,"object",e)}},{key:"componentWillMount",value:function(){return console.log(this.title,this.username),o.a.createElement(A.a,{to:"/somewhere"})}},{key:"componentDidMount",value:function(){if(this.title&&this.username){var e="http://ec2-18-219-162-155.us-east-2.compute.amazonaws.com:3000/user/stream?filename="+this.title;console.log(e);var t=this.videoComponent.current,a=this.videoContainer.current,n=new Y.Player(t);Y.polyfill.installAll(),Y.Player.isBrowserSupported()?console.log("everything good"):console.error("Browser not supported!"),n.configure({drm:{clearKeys:{f3c5e0361e6654b28f8049c778b23946:"a4631a153a443df9eed0593043db7519",abba271e8bcf552bbd2e86a434a9a5d9:"69eaa802a6763af979e8d1940fb88392","6d76f25cb17f5e16b8eaef6bbf582d8e":"cb541084c99731aef4fff74500c12ead"}}}),console.log(n.getConfiguration()),new Y.ui.Overlay(n,a,t).getControls(),n.addEventListener("error",this.onErrorEvent),n.load(e).then((function(){console.log("The video has now been loaded!")})).catch(this.onError)}}},{key:"render",value:function(){var e=this;return void 0==this.username||void 0==this.title?o.a.createElement(A.a,{to:"/"}):o.a.createElement(o.a.Fragment,null,o.a.createElement(h.a,{position:"relative"},o.a.createElement(w.a,null,o.a.createElement(x.a,{variant:"h6",color:"inherit",align:"left",noWrap:!0},this.username),"\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003 \u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003 \u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003\u2003",o.a.createElement(x.a,{variant:"h6",color:"inherit",style:{cursor:"pointer",textAlign:"right"},align:"right",onClick:function(){e.props.history.push({pathname:"/DashBoard"})},noWrap:!0},"Video Gallery"))),o.a.createElement("div",{className:"video-container",ref:this.videoContainer,style:{width:"854px",height:"512px",cursor:"none",top:"30px",left:"230px"}},o.a.createElement("video",{style:{width:"854px",height:"512px",cursor:"none",top:"30px",left:"230px"},autoPlay:!0,className:"shaka-video",ref:this.videoComponent,poster:N.a})),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("footer",null,o.a.createElement(x.a,{variant:"h6",align:"center",gutterBottom:!0},"Brain Mentors Pvt Limited"),o.a.createElement(x.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},"23, 1st & 2nd Floor, Block-C, Pocket-9, Rohini Sector-7 Delhi-110085",o.a.createElement("br",null),"   Oppposite to Metro Pillar No-400"),o.a.createElement(J,null)))}}]),t}(o.a.PureComponent),U=(a(98),a(56)),H=function(e){function t(e){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(U.a,null,o.a.createElement(k.a,{maxWidth:"xl"},o.a.createElement(A.b,{path:"/",exact:!0,component:I}),o.a.createElement(A.b,{path:"/DashBoard",component:G}),o.a.createElement(A.b,{path:"/playVideo",component:_})))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[66,1,2]]]);
//# sourceMappingURL=main.3997f7c0.chunk.js.map
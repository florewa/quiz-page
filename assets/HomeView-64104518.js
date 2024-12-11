import{r as p,k as q,x as N,C as r,D as d,E as e,G as f,H as y,I as x,L as C,J as A,N as H,A as a,R as w,U as z,V as R,z as u,K as k,F as E,W as U,w as O,M as T}from"./@vue-9fac9aaa.js";import{_ as b,a as W,u as P}from"./index-2c9c70f9.js";import{u as V}from"./vue-i18n-a324c9be.js";import{S as j,a as G,E as J,P as K,N as Q}from"./swiper-6cfad1ce.js";import"./pinia-69449fab.js";import"./vue-router-f638a451.js";import"./axios-3a76d256.js";import"./@intlify-fdc60c1c.js";const X="/img/border.svg",Y="/img/starttimer.png",Z=c=>(y("data-v-dd009280"),c=c(),x(),c),ee={class:"timer"},te=Z(()=>e("div",{class:"rotating-image"},[e("img",{src:W,alt:"loading"})],-1)),se={class:"number-wrapper"},oe={__name:"CanvasTimer",setup(c){const t=p(3),i=p(null),l=()=>{i.value=setInterval(()=>{t.value>1?t.value--:clearInterval(i.value)},1e3)};return q(()=>{l()}),N(()=>{clearInterval(i.value)}),(_,s)=>(r(),d("div",ee,[te,e("div",se,[(r(),d("div",{class:"number",key:t.value},f(t.value),1))])]))}},ae=b(oe,[["__scopeId","data-v-dd009280"]]),D=c=>(y("data-v-2eb1372a"),c=c(),x(),c),ce={class:"canvas-container"},ne=D(()=>e("canvas",{width:"2160",height:"3840",id:"canvas",class:"canvas"},null,-1)),ie=D(()=>e("img",{src:X,alt:"",class:"border"},null,-1)),le={__name:"VCanvas",setup(c){const t=P(),i=p(),l=p(!1),{locale:_}=V();let s=null;const g=()=>{setTimeout(()=>{l.value=!0,setTimeout(()=>{$()},3e3)},1e3)},$=()=>{const o=document.getElementById("canvas"),n=o.getContext("2d");i.value.setAttribute("src",o.toDataURL()),s.pause(),n.clearRect(0,0,o.width,o.height),fetch(i.value.src).then(v=>v.blob()).then(async v=>{const h=new File([v],"image.png",v),m=new FormData;m.append("userFaceImage",h),m.append("costumeId",t.selectedCostume.id),console.log(t.selectedCostume.id),t.setActiveCanvas(!1),t.setActivePhoto(!0),await t.setUserFaces(m,_.value),console.log(_.value)})};return q(()=>{const o=document.getElementById("canvas"),n=o.getContext("2d");i.value.src="";const v=2160,h=3840;s=document.createElement("video"),s.addEventListener("play",function(){s.height=3840,s.width=2160,m()}),navigator.mediaDevices.getUserMedia({video:{width:{ideal:h},height:{ideal:v}},audio:!1}).then(function(S){s.srcObject=S,s.play()});const m=()=>{n.clearRect(0,0,o.width,o.height),n.save(),n.drawImage(s,0,0,window.cameraSize[0],window.cameraSize[1],0,0,o.width,o.height),n.save(),n.rotate(-Math.PI/2),n.drawImage(o,-o.height,0,o.height,o.width),n.restore(),n.save(),n.translate(o.width,0),n.scale(-1,1),n.drawImage(o,0,0,o.width,o.height),n.restore(),requestAnimationFrame(m)}}),(o,n)=>(r(),d("div",ce,[ne,e("img",{ref_key:"finalPhoto",ref:i,src:"",alt:"",class:"final-photo"},null,512),ie,l.value?C("",!0):(r(),d("img",{key:0,src:Y,alt:"",class:"startTimer",onClick:g})),l.value?(r(),A(ae,{key:1,time:3})):C("",!0)]))}},re=b(le,[["__scopeId","data-v-2eb1372a"]]),de="/img/Bg.webp",_e="/img/line.png",ue="/img/strelka-left.svg",ve="/img/strelka-right.svg",me="/img/back.png",he="/img/Manual.png",pe="/img/Logo.png";const ge={class:"switch-labels"},fe={__name:"ToggleLang",setup(c){const{locale:t}=V(),i=()=>{t.value=t.value==="ru"?"tt":"ru"};return(l,_)=>(r(),d("div",{class:w(["switch",{active:a(t)==="tt"}]),onClick:i},[e("div",{class:"switch-circle",style:H({left:a(t)==="tt"?"calc(100% - 168px)":"22px"})},null,4),e("div",ge,[e("span",{class:w({active:a(t)==="ru"})},"Рус",2),e("span",{class:w({active:a(t)==="tt"})},"Тат",2)])],2))}},we=b(fe,[["__scopeId","data-v-161ee78c"]]);const L=c=>(y("data-v-3ba3422b"),c=c(),x(),c),be={class:"footer"},Ce={class:"footer-item-left"},$e=L(()=>e("img",{src:me,alt:"Назад"},null,-1)),ke=[$e],ye=L(()=>e("img",{src:he,alt:"Открыть инструкцию"},null,-1)),xe=[ye],Ie={class:"footer-lang-toggle"},Se=L(()=>e("div",{class:"footer-item-right"},[e("img",{src:pe,alt:"Логотип"})],-1)),Pe={__name:"VFooter",setup(c){const t=P(),i=()=>{t.activePhoto?(window.location.reload(),console.log("window.reload")):t.activeCanvas?(t.activePhoto=!0,t.finalPerson=null):console.log('Кнопка "Назад" нажата')};return(l,_)=>(r(),d("div",be,[e("div",Ce,[z(e("div",{onClick:i,class:"footer-back-button"},ke,512),[[R,a(t).selectedCostume]]),e("div",{class:"footer-manual-button",onClick:_[0]||(_[0]=(...s)=>a(t).openManual&&a(t).openManual(...s))},xe),e("div",Ie,[u(we)])]),Se]))}},Te=b(Pe,[["__scopeId","data-v-3ba3422b"]]);const Me=["src"],Ve={__name:"VButton",props:{value:String},setup(c){const t=p(!1),i=()=>{t.value=!0},l=()=>{t.value=!1},_=()=>{t.value=!1};return(s,g)=>(r(),d("div",{class:"button",onMousedown:i,onMouseup:l,onMouseleave:_},[e("img",{src:t.value?"/img/button-a.svg":"/img/button.svg",alt:""},null,8,Me),e("div",{class:w(["button-text",{active:t.value}])},f(c.value),3)],32))}},M=b(Ve,[["__scopeId","data-v-fbf18401"]]),Le="/img/plashka.svg";const Be={},Fe=c=>(y("data-v-0a4bc023"),c=c(),x(),c),Ee={class:"background"},qe=Fe(()=>e("img",{src:Le,alt:""},null,-1)),Ae=[qe];function De(c,t){return r(),d("div",Ee,Ae)}const Ne=b(Be,[["render",De],["__scopeId","data-v-0a4bc023"]]);const He=["src"],ze={class:"custom-buttons"},Re={__name:"VSlider",setup(c){const t=P(),i=[J,K,Q],l=p(null),_=o=>{l.value=o},s=()=>{l.value&&l.value.slidePrev()},g=()=>{l.value&&l.value.slideNext()},$=()=>{if(l.value){const o=l.value.realIndex,n=t.costumes[o];t.setCostume(n),console.log("Selected costume:",n)}else console.error("Swiper не инициализирован")};return(o,n)=>(r(),d(E,null,[u(a(G),{loop:!0,slidesPerView:3,effect:"coverflow",grabCursor:!0,spaceBetween:10,centeredSlides:!0,simulateTouch:!1,coverflowEffect:{rotate:-20,stretch:-50,depth:200,modifier:1,slideShadows:!1},modules:i,class:"swiper",onSwiper:_},{default:k(()=>[(r(!0),d(E,null,U(a(t).costumes,(v,h)=>(r(),A(a(j),{key:h,class:"swiper-slide"},{default:k(()=>[e("img",{src:v.image,alt:"slide image",loading:"lazy"},null,8,He)]),_:2},1024))),128))]),_:1}),e("div",ze,[e("div",{onMouseenter:g,class:"custom-button prev-button"},null,32),e("div",{onClick:$,class:"custom-button select-button"}),e("div",{onMouseenter:s,class:"custom-button next-button"},null,32)])],64))}};const I=c=>(y("data-v-aa19bdcb"),c=c(),x(),c),Ue={class:"page"},Oe=I(()=>e("div",{class:"page-bg"},[e("img",{src:de,alt:""})],-1)),We={class:"page-content"},je={class:"content-item"},Ge={class:"title"},Je=I(()=>e("div",{class:"line"},[e("img",{src:_e,alt:""})],-1)),Ke={class:"text"},Qe=["src"],Xe={class:"description-text"},Ye={class:"description-title"},Ze={class:"author-wrapper"},et=I(()=>e("img",{src:ue,alt:""},null,-1)),tt={class:"author"},st=I(()=>e("img",{src:ve,alt:""},null,-1)),ot={key:0,class:"photo-container"},at={key:0,class:"final-container"},ct=["src"],nt={key:0},it={key:0,class:"qr-container"},lt=I(()=>e("div",{class:"overlay"},null,-1)),rt={class:"qr"},dt={class:"qr-wrapper"},_t={class:"qr-text"},ut=["innerHTML"],vt={__name:"HomeView",setup(c){const t=window.API,i=p(!1),l=()=>{i.value=!0},_=()=>{window.location.reload()},s=P(),g=p(!1);O(()=>s.selectedCostume,n=>{n.image&&(s.activeCanvas=!0,setTimeout(()=>{s.activeCanvas=!1,s.activePhoto=!0,setTimeout(()=>{g.value=!0},2e3)},1e3))});const $=()=>{s.activePhoto=!0,s.finalPerson=null,console.log("click-retry")},{t:o}=V();return(n,v)=>{var h,m,S,B;return r(),d("div",Ue,[Oe,e("div",We,[e("div",{class:w(["main-screen",{active:!a(s).selectedCostume}])},[e("div",je,[e("div",Ge,f(a(o)("title")),1),Je,e("div",Ke,f(a(o)("description")),1),u(Re,{class:"slider"})])],2),e("div",{class:w(["selected-costume",{active:a(s).selectedCostume},{cameraON:g.value}])},[e("img",{src:(h=a(s).selectedCostume)==null?void 0:h.image,alt:"Selected",class:"costume-pic"},null,8,Qe),e("div",{class:w(["description",{visible:(m=a(s).selectedCostume)==null?void 0:m.image}])},[e("div",Xe,[e("div",Ye,f((S=a(s).selectedCostume)==null?void 0:S.title[n.$i18n.locale]),1),e("div",Ze,[et,e("div",tt,f((B=a(s).selectedCostume)==null?void 0:B.author[n.$i18n.locale]),1),st])])],2)],2),u(T,{name:"fade"},{default:k(()=>[a(s).activePhoto&&!a(s).isLoading&&!a(s).finalPerson?(r(),d("div",ot,[u(re)])):C("",!0)]),_:1}),u(T,{name:"fade"},{default:k(()=>{var F;return[a(s).finalPerson&&!a(s).isLoading?(r(),d("div",at,[e("img",{class:"photo",src:a(t)+((F=a(s).finalPerson)==null?void 0:F.image),alt:"Фото"},null,8,ct),i.value?C("",!0):(r(),d("div",nt,[u(M,{class:"like-btn",value:a(o)("button.buttonLike"),onClick:l},null,8,["value"]),u(M,{class:"retry-btn",value:a(o)("button.buttonRetry"),onClick:$},null,8,["value"])])),u(T,{name:"fade"},{default:k(()=>[i.value?(r(),d("div",it,[lt,e("div",rt,[e("div",dt,[e("div",_t,f(a(o)("qrText")),1),e("div",{class:"qr-img",innerHTML:a(s).qr},null,8,ut)])]),u(M,{class:"toMain-btn",value:a(o)("button.buttonToMain"),onClick:_},null,8,["value"])])):C("",!0)]),_:1})])):C("",!0)]}),_:1}),u(Ne),u(Te)])])}}},$t=b(vt,[["__scopeId","data-v-aa19bdcb"]]);export{$t as default};

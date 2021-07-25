var e=Object.defineProperty,t=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,a=(t,o,i)=>o in t?e(t,o,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[o]=i,r=(e,t)=>{for(var o in t||(t={}))s.call(t,o)&&a(e,o,t[o]);if(i)for(var o of i(t))n.call(t,o)&&a(e,o,t[o]);return e},l=(e,i)=>t(e,o(i));import{q as d,r as h,R as c,C as p,a as u,h as m,B as g,d as f,n as x,b as w}from"./vendor.3cb1642e.js";const y={header:{top:{style:{backgroundColor:"#333333",fontSize:10,color:"white",textAlign:"center"}},middle:{style:{backgroundColor:"chocolate"},selectedStyle:{backgroundColor:"#b13525",fontWeight:"bold"}},bottom:{style:{background:"#f3f4f5",color:"#667280",fontSize:".9em"},selectedStyle:{backgroundColor:"#b13525",fontWeight:"bold"}}},taskList:{title:{label:"Projects",style:{backgroundColor:"#333333",borderBottom:"solid 1px silver",color:"white",textAlign:"center"}},task:{style:{backgroundColor:"#fbf9f9"}},verticalSeparator:{style:{backgroundColor:"#333333"},grip:{style:{backgroundColor:"#cfcfcd"}}}},dataViewPort:{rows:{style:{}},task:{showLabel:!1,style:{position:"absolute",borderRadius:14,color:"white",textAlign:"center",backgroundColor:"grey"},selectedStyle:{position:"absolute",borderRadius:14,border:"solid 1px #ff00fa",color:"white",textAlign:"center",backgroundColor:"grey"}}},links:{color:"black",selectedColor:"#ff00fa"}};const k=new class{constructor(){this.load=e=>{this.data={},e?this.populate(e,y,this.data):this.data=y},this.data=y}populate(e,t,o){if(this.isObject(t))for(let i in t)e[i]?(o[i]=e[i],this.populate(e[i],t[i],o[i])):o[i]=t[i]}isObject(e){return"string"!=typeof e&&"boolean"!=typeof e&&"number"!=typeof e}get values(){return this.data}};var v=d((e=>{const t=h.exports.useRef(null),o=h.exports.useRef(!1),[i,s]=h.exports.useState(!1),n=e=>{o.current=e,s(e)},a=h.exports.useRef(0),r=t=>{var i;if(o.current){t.stopPropagation(),console.log("MOUSEMOVE",t);let o=(a.current||0)-t.clientX;a.current=t.clientX,o>0&&console.log("delta",o),null==(i=e.onTaskListSizing)||i.call(e,t.clientX+6)}};return console.log("Dragging",o.current),c.createElement("div",{ref:t,className:`${e.className} ${1==i?"dragging":""}`,style:k.values.taskList.verticalSeparator.style,onMouseDown:e=>{if(0===e.button){console.log("MOUSE DOWN"),a.current=e.clientX,n(!0);const t=()=>{console.log("CLEANUP"),n(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",t)};window.addEventListener("mousemove",r),window.addEventListener("mouseup",t)}}},c.createElement(p,null),c.createElement(u,null))}))`
  width: 5px;
  transition: width 100ms ease-out;
  cursor: col-resize;

  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  & svg{
    transition opacity 100ms ease-out;
  }
  &:not(:hover) svg{
    opacity: 0;
  }

  &:hover svg{
    opacity: 1;
  }

  &:hover{
    width: 13px;
  }
  &.dragging{
    width: 13px;
  }
`;const b=new class{constructor(){this.dayToPosition=(e,t,o)=>e*o+t,this.daysInYear=e=>this.isLeapYear(e)?366:365}dateToPixel(e,t,o){let i=this.getToday(),s=new Date(e),n=60*(s.getTimezoneOffset()-i.getTimezoneOffset())*1e3;return(s.getTime()-i.getTime()-n)/36e5*(o/24)+t}pixelToDate(e,t,o){let i=24/o,s=e-t,n=this.getToday(),a=n.getTime()+s*i*36e5,r=new Date(a),l=60*(r.getTimezoneOffset()-n.getTimezoneOffset())*1e3;return r.setTime(r.getTime()+l),r}getToday(){let e=new Date;return e.setHours(0,0,0,0),e}monthDiff(e,t){return Math.abs(t.getMonth()-e.getMonth()+12*(t.getFullYear()-e.getFullYear()))}daysInMonth(e,t){return new Date(t,e,0).getDate()}isLeapYear(e){return e%400==0||e%100!=0&&e%4==0}},E=d((e=>c.createElement("div",{className:e.className,style:{display:"flex",justifyContent:"center",alignItems:"center",borderLeft:"solid 1px rgb(216, 217, 218)",position:"absolute",height:20,left:e.left,width:e.width,cursor:"pointer"}},c.createElement("div",null,e.label))))`
  
    &:hover{
        background: rgba(127, 127, 127, 0.3);
    }
  `,S=c.createContext({}),L=e=>c.createElement("div",{style:{position:"absolute",background:e.background,left:e.left,height:"100%",width:`${e.width}px`}});var C=d((e=>{const t=h.exports.useRef(null),{mode:o,dayWidth:i}=h.exports.useContext(S),s=(e,t)=>{switch(e){case"year":return"YYYY";case"month":return"top"==t?"MMMM YYYY":"MMMM";case"week":return"top"==t?"ww MMMM YYYY":"ww";case"dayweek":return"dd";case"daymonth":return"D"}},n=(e,t,o,i)=>{let s=[],n=t/24,a=0;for(let r=0;r<24;r++)s.push(c.createElement(E,{key:r,left:a,width:n,label:"shorttime"==o?r:`${r}:00`})),a+=n;return c.createElement("div",{key:i,style:{position:"absolute",height:20,left:e,width:t}}," ",s)},a=(t,o,s=0)=>{let n=((e,t)=>{switch(t){case"year":return b.daysInYear(e.year());case"month":return e.daysInMonth();case"week":return 7;default:return 1}})(t,o)*(i||0);if(!s){let n=((e,t)=>{let o=null;switch(t){case"year":return o=e.year(),m([o,0,1]);case"month":o=e.year();let t=e.month();return m([o,t,1]);case"week":return e.clone().startOf("week");default:return e}})(t,o);n=n.startOf("day");let a=m().startOf("day"),r=n.diff(a,"days");s=b.dayToPosition(r,e.nowposition||0,i||0)}return{left:s,width:n}},l=(t,o,i)=>{let l={top:[],middle:[],bottom:[],background:[]},d={},h="",p="",u="",g=null,f=null,x=e.currentday,w=(e.currentday||0)+(e.numVisibleDays||0);for(let e=(x||0)-30;e<w+30;e++)if(g=m().add(e,"days"),h!=g.format(s(t,"top"))&&(h=g.format(s(t,"top")),f=a(g,t,d.top),d.top=f.left+f.width,l.top.push(c.createElement(E,{key:e,left:f.left,width:f.width,label:h}))),p!=g.format(s(o))&&(p=g.format(s(o)),f=a(g,o,d.middle),d.middle=f.left+f.width,l.middle.push(c.createElement(E,{key:e,left:f.left,width:f.width,label:p}))),u!=g.format(s(i)))if(u=g.format(s(i)),f=a(g,i,d.bottom),d.bottom=f.left+f.width,"shorttime"==i||"fulltime"==i){let t=Array.apply(null,Array(24)).map((function(){})).map(((t,o)=>c.createElement(L,{key:`tile-${e}-${o}`,background:o%2==0?"#5d9634":"#538c2b",left:f.left+f.width/24*o,width:f.width/24})));l.background.push(t),l.bottom.push(n(f.left,f.width,i,e))}else l.background.push(c.createElement(L,{key:`tile-${e}`,left:f.left,width:f.width,background:e%2==0?"#5d9634":"#538c2b"})),l.bottom.push(c.createElement(E,{key:e,left:f.left,width:f.width,label:u}));return c.createElement("div",{className:"timeLine-main-header-container",style:{width:5e3,maxWidth:5e3}},c.createElement("div",{className:"header-top",style:r({},k.values.header.top.style)},l.top),c.createElement("div",{className:"header-middle",style:r({},k.values.header.middle.style)},l.middle),c.createElement("div",{className:"header-bottom",style:r({},k.values.header.bottom.style)},l.bottom),c.createElement("div",{className:"header-bottom",style:r({height:"100%"},k.values.header.bottom.style)},l.background))};return t.current&&(t.current.scrollLeft=e.scrollLeft||0),c.createElement("div",{id:"timeline-header",ref:t,className:`${e.className} timeLine-main-header-viewPort`},(()=>{switch(o||e.mode){case"day":return l("week","dayweek","fulltime");case"week":return l("month","week","dayweek");case"month":return l("month","dayweek","daymonth");case"year":return l("year","month","week")}})())}))`
.header-top {
  height: 20px;

  border-bottom: solid 0.5px silver;
}

.header-middle {
  height: 20px;
  background-color: chocolate;
  color: white;
  font-size: 10px;
  border-bottom: solid 0.5px silver;
}
.header-bottom {
  height: 20px;
  font-size: 10px;
  background-color: silver;
  border-bottom: solid 0.5px silver;
}
`;class M extends h.exports.Component{constructor(e){super(e),this.onCreateLinkMouseDown=(e,t)=>{var o,i;0===e.button&&(e.stopPropagation(),null==(i=(o=this.props).onStartCreateLink)||i.call(o,this.props.item,t))},this.onCreateLinkMouseUp=(e,t)=>{e.stopPropagation(),this.props.onFinishCreateLink(this.props.item,t)},this.onCreateLinkTouchStart=(e,t)=>{var o,i;e.stopPropagation(),null==(i=(o=this.props).onStartCreateLink)||i.call(o,this.props.item,t)},this.onCreateLinkTouchEnd=(e,t)=>{e.stopPropagation(),this.props.onFinishCreateLink(this.props.item,t)},this.doMouseDown=(e,t)=>{this.props.onUpdateTask&&0===e.button&&(e.stopPropagation(),this.dragStart(e.clientX,t))},this.doMouseMove=e=>{this.state.dragging&&(e.stopPropagation(),this.dragProcess(e.clientX))},this.doMouseUp=()=>{this.dragEnd()},this.doTouchStart=(e,t)=>{this.props.onUpdateTask&&(console.log("start"),e.stopPropagation(),this.dragStart(e.touches[0].clientX,t))},this.doTouchMove=e=>{this.state.dragging&&(console.log("move"),e.stopPropagation(),this.dragProcess(e.changedTouches[0].clientX))},this.doTouchEnd=e=>{console.log("end"),this.dragEnd()},this.calculateStyle=this.calculateStyle.bind(this),this.state={dragging:!1,left:this.props.left||0,width:this.props.width||0,mode:0}}componentDidUpdate(e,t){this.state.dragging&&!t.dragging?(document.addEventListener("mousemove",this.doMouseMove),document.addEventListener("mouseup",this.doMouseUp),document.addEventListener("touchmove",this.doTouchMove),document.addEventListener("touchend",this.doTouchEnd)):!this.state.dragging&&t.dragging&&(document.removeEventListener("mousemove",this.doMouseMove),document.removeEventListener("mouseup",this.doMouseUp),document.removeEventListener("touchmove",this.doTouchMove),document.removeEventListener("touchend",this.doTouchEnd))}updatePosition(){let e=b.pixelToDate(this.state.left,this.props.nowposition,this.props.dayWidth||0),t=b.pixelToDate(this.state.left+this.state.width,this.props.nowposition,this.props.dayWidth||0);this.props.onUpdateTask(this.props.item,{start:e,end:t})}dragStart(e,t){this.props.onChildDrag(!0),this.draggingPosition=e,this.setState({dragging:!0,mode:t,left:this.props.left||0,width:this.props.width||0})}dragProcess(e){let t=this.draggingPosition-e,o=this.state.left,i=this.state.width;switch(this.state.mode){case 1:o=this.state.left-t;break;case 2:o=this.state.left-t,i=this.state.width+t;break;case 3:i=this.state.width-t}let s={item:this.props.item,position:{start:o-this.props.nowposition,end:o+i-this.props.nowposition}};this.updatePosition(),this.props.onTaskChanging(s),this.setState({left:o,width:i}),this.draggingPosition=e}dragEnd(){this.props.onChildDrag(!1),this.updatePosition(),this.setState({dragging:!1,mode:0})}calculateStyle(){let e=this.props.isSelected?k.values.dataViewPort.task.selectedStyle:k.values.dataViewPort.task.style,t=this.props.color?this.props.color:e.backgroundColor;return this.state.dragging?l(r({},e),{backgroundColor:t,left:this.state.left,width:this.state.width,height:this.props.height-5}):l(r({},e),{backgroundColor:t,left:this.props.left,width:this.props.width,height:this.props.height-5})}render(){let e=this.calculateStyle();return c.createElement(g,{focusIndicator:!1,elevation:"medium",onMouseDown:e=>this.doMouseDown(e,1),onTouchStart:e=>this.doTouchStart(e,1),onClick:e=>{this.props.onSelectItem(this.props.item)},style:l(r({},e),{top:3})},c.createElement("div",{className:"timeLine-main-data-task-side",style:{top:0,left:-4,height:e.height},onMouseDown:e=>this.doMouseDown(e,2),onTouchStart:e=>this.doTouchStart(e,2)},c.createElement("div",{className:"timeLine-main-data-task-side-linker",onMouseUp:e=>this.onCreateLinkMouseUp(e,"LINK_POS_LEFT"),onTouchEnd:e=>this.onCreateLinkTouchEnd(e,"LINK_POS_LEFT")})),c.createElement("div",{style:{overflow:"hidden"}},k.values.dataViewPort.task.showLabel?this.props.item.name:""),c.createElement("div",{className:"timeLine-main-data-task-side",style:{top:0,left:e.width-3,height:e.height},onMouseDown:e=>this.doMouseDown(e,3),onTouchStart:e=>this.doTouchStart(e,3)},c.createElement("div",{className:"timeLine-main-data-task-side-linker",onMouseDown:e=>this.onCreateLinkMouseDown(e,"LINK_POS_RIGHT"),onTouchStart:e=>this.onCreateLinkTouchStart(e,"LINK_POS_RIGHT")})))}}class T extends h.exports.Component{constructor(e){super(e)}render(){return c.createElement(g,{className:"timeLine-main-data-row",style:l(r({},k.values.dataViewPort.rows.style),{top:this.props.top,height:this.props.itemheight,borderBottom:"2px dashed #d3d3d350",strokeDasharray:1e3,strokeDashoffset:1e3})},this.props.children)}}const D=e=>{switch(e){case"year":return 7;case"month":case"week":return 1;case"day":return 1/24;default:return 1}},I=e=>{switch(e){case"year":return"12px";default:return 0}},N=e=>{switch(e){case"day":return 792;case"week":case"month":return 28;case"year":return 4;default:return 28}},P=d((e=>{var t;const o=h.exports.useRef(null),{mode:i,style:s,dayWidth:n,moveTimeline:a,scrollLeft:r}=h.exports.useContext(S),[l,d]=h.exports.useState(!1),[p,u]=f((t=>{var o;let i={width:(null==t?void 0:t.clientWidth)||null,height:(null==t?void 0:t.clientHeight)||null};return i.width&&i.height&&(null==(o=e.onSize)||o.call(e,i)),i})),m=e=>{d(e)};return h.exports.useEffect((()=>{o.current&&(o.current.scrollLeft=0)}),[]),h.exports.useEffect((()=>{o.current&&(o.current.scrollLeft=e.scrollLeft,o.current.scrollTop=e.scrollTop)}),[e.scrollLeft,e.scrollTop]),i&&(null==s?void 0:s.background)?null==(t=null==s?void 0:s.background)||t.call(s,i,n||0):(D(e.mode||"month"),I(e.mode||"month")),c.createElement("div",{ref:o,id:"timeLinedataViewPort",className:`${e.className} timeLine-main-data-viewPort`,onWheel:e=>{null==a||a((r||0)+e.deltaX)},onMouseDown:t=>{0!==t.button||l||e.onMouseDown(t)},onMouseMove:t=>{e.onMouseMove(t,o.current)},onMouseUp:e.onMouseUp,onMouseLeave:e.onMouseLeave,onTouchStart:t=>{l||e.onTouchStart(t)},onTouchMove:t=>{e.onTouchMove(t,o.current)},onTouchEnd:e.onTouchEnd,onTouchCancel:e.onTouchCancel},p,c.createElement("div",{className:"timeLine-main-data-container",style:{background:"transparent",height:"100%",width:5e3,maxWidth:5e3}},(()=>{let t=[];for(let o=e.startRow;o<e.endRow+1;o++){let i=e.data[o];if(!i)break;let s=b.dateToPixel(i.start,e.nowposition,n||0),a=b.dateToPixel(i.end,e.nowposition,n||0)-s;t.push(c.createElement(T,{isSelected:e.selectedItem==i,key:o,label:i.name,top:o*(e.itemheight+5),left:20,itemheight:e.itemheight+5},c.createElement(M,{item:i,label:i.name,nowposition:e.nowposition,dayWidth:n,color:i.color,left:s,width:a,height:e.itemheight,onChildDrag:m,isSelected:e.selectedItem==i,onSelectItem:e.onSelectItem,onStartCreateLink:e.onStartCreateLink,onFinishCreateLink:e.onFinishCreateLink,onTaskChanging:e.onTaskChanging,onUpdateTask:e.onUpdateTask}," ")))}return t})()))}))`
.timeLine-main-data-container{
  background: ;
  }

`;class $ extends h.exports.Component{constructor(e){super(e),this.calcNormCoordinates=()=>{let e={x:0,y:0},t={x:0,y:0},o=0;return o=this.props.start.x+(this.props.end.x-this.props.start.x)/2,e={x:o,y:this.props.start.y},t={x:o,y:this.props.end.y},{cpt1:e,cpt2:t}},this.calcSCoordinates=()=>{let e={x:this.props.start.x+20,y:this.props.start.y},t=(this.props.end.y-this.props.start.y)/2,o={x:e.x,y:e.y+t},i={x:this.props.end.x-20,y:o.y};return{cpt1:e,cpt2:o,cpt3:i,cpt4:{x:i.x,y:i.y+t}}},this.getPath=e=>{let t=null;return this.props.start.x>this.props.end.x?(t=this.calcSCoordinates(),`M${this.props.start.x} ${this.props.start.y}  ${t.cpt1.x} ${t.cpt1.y} ${t.cpt2.x} ${t.cpt2.y} ${t.cpt3.x} ${t.cpt3.y} ${t.cpt4.x} ${t.cpt4.y} ${this.props.end.x} ${this.props.end.y}`):(t=this.calcNormCoordinates(),`M${this.props.start.x} ${this.props.start.y}  ${t.cpt1.x} ${t.cpt1.y} ${t.cpt2.x} ${t.cpt2.y} ${this.props.end.x} ${this.props.end.y}`)},this.onSelect=e=>{this.props.onSelectItem&&this.props.onSelectItem(this.props.item)}}render(){let e=this.props.isSelected?k.values.links.selectedColor:k.values.links.color;return c.createElement("g",{className:"timeline-link"},c.createElement("path",{pointerEvents:"stroke",onMouseDown:this.onSelect,stroke:"white",d:this.getPath(),strokeLinejoin:"round",fill:"transparent",strokeWidth:"4",cursor:"pointer"}),c.createElement("path",{pointerEvents:"stroke",onMouseDown:this.onSelect,stroke:e,d:this.getPath(),strokeLinejoin:"round",fill:"transparent",strokeWidth:"1",cursor:"pointer",markerEnd:"url(#arrow)"}))}}class z extends h.exports.Component{constructor(e){super(e),this.doMouseMove=e=>{this.init||(this.lastX=e.clientX,this.lastY=e.clientY,this.init=!0);let t=this.state.x+(e.clientX-this.lastX),o=this.state.y+(e.clientY-this.lastY);this.lastX=e.clientX,this.lastY=e.clientY,this.setState({x:t,y:o})},this.doMouseUp=e=>{this.props.onFinishCreateLink()},this.state={x:this.props.start.x,y:this.props.start.y},this.init=!1,this.lastX=-1,this.lastY=-1}componentDidMount(){document.addEventListener("mousemove",this.doMouseMove),document.addEventListener("mouseup",this.doMouseUp)}componentWillUnmount(){document.removeEventListener("mousemove",this.doMouseMove),document.removeEventListener("mouseup",this.doMouseUp)}render(){return c.createElement($,{key:-1,start:{x:this.props.start.x,y:this.props.start.y},end:{x:this.state.x,y:this.state.y}})}}const R=e=>{var t,o,i,s;const n=(e=>{const{data:t}=h.exports.useContext(S);return null==t?void 0:t.map(((e,t)=>l(r({},e),{index:t}))).find((t=>t.id==e))})((null==(o=null==(t=e.taskToCreate)?void 0:t.task)?void 0:o.id)||"");(e=>{const{links:t}=h.exports.useContext(S);console.log(t,e),null==t||t.map(((e,t)=>l(r({},e),{index:t}))).find((t=>t.id==e))})(null==(s=null==(i=e.taskToCreate)?void 0:i.task)?void 0:s.id);const a=(()=>{const{links:e}=h.exports.useContext(S);return null==e?void 0:e.map(((e,t)=>l(r({},e),{index:t})))})(),{data:d,dayWidth:p}=h.exports.useContext(S);h.exports.useState(null),h.exports.useState(),h.exports.useState([]);const u=(t,o,i,s)=>{let n=m(t.index,t.end),a=m(o.index,o.start);return c.createElement($,{key:i.id,item:i,start:{x:n.x,y:n.y},end:{x:a.x,y:a.y},isSelected:e.selectedItem==i,onSelectItem:e.onSelectItem})},m=(t,o)=>{let i=(e.itemheight||0)+5;return{x:b.dateToPixel(o,0,p||0),y:t*i+i/2}};return c.createElement("svg",{x:0,y:0,width:"100%",pointerEvents:"none",style:{position:"absolute",top:0,userSelect:"none",height:"100%"}},c.createElement("defs",null,c.createElement("marker",{id:"arrow",viewBox:"0 0 10 10",refX:"5",refY:"5",markerWidth:"9",markerHeight:"9",orient:"auto-start-reverse"},c.createElement("path",{d:"M 0 0 L 10 5 L 0 10 z",strokeLinejoin:"round"}))),c.createElement("g",{transform:`matrix(1,0,0,1,${-((e.scrollLeft||0)-(e.nowposition||0))},${-(e.scrollTop||0)})`},(()=>{let e=[],t={},o={};if(0!=(null==d?void 0:d.length)){for(let i=0;i<(a||[]).length;i++){let s=null==a?void 0:a[i];if(!s)return;t=null==d?void 0:d.find((e=>e.id==(null==s?void 0:s.source))),t&&(o=null==d?void 0:d.find((e=>e.id==(null==s?void 0:s.target))),o&&(e=e.concat([u(t,o,s)])))}return e}})(),(()=>{var t;if(e.interactiveMode&&(null==(t=e.taskToCreate)?void 0:t.task.id)){if(!n)return console.error("No link");let t=m(null==n?void 0:n.index,null==n?void 0:n.end);return c.createElement(z,{start:t,onFinishCreateLink:e.onFinishCreateLink})}})()))};class U extends h.exports.Component{constructor(e){super(e),this.textInput=c.createRef(),this.onFocus=()=>{this.setState({editing:!0})},this.onBlur=()=>{this.finishEditing()},this.handleKey=e=>{13===(e.keyCode||e.which)&&this.finishEditing()},this.finishEditing=()=>{this.isFocus=!1,this.setState({editing:!1}),this.props.onChange&&this.props.onChange(this.state.value)},this.handleChange=e=>{this.setState({value:e.target.value})},this.renderDiv=()=>c.createElement("div",{tabIndex:this.props.index,onClick:this.onFocus,onFocus:this.onFocus,style:{width:"100%"}}," ",this.state.value),this.renderEditor=()=>c.createElement("input",{ref:this.textInput,onBlur:this.onBlur,style:{width:"100%",outlineColor:"black",outlineStyle:"oinset"},type:"text",name:"name",value:this.state.value,onKeyUp:this.handleKey,onChange:this.handleChange}),this.isFocus=!1,this.state={editing:!1,value:this.props.value}}componentDidUpdate(e,t){this.textInput.current&&!this.isFocus&&(this.textInput.current.focus(),this.isFocus=!0)}shouldComponentUpdate(e,t){return e.value!=this.props.value&&this.setState({value:e.value}),!0}render(){return this.state.editing?this.renderEditor():this.renderDiv()}}class O extends h.exports.Component{constructor(e){super(e),this.onChange=e=>{this.props.onUpdateTask&&this.props.onUpdateTask(this.props.item,{name:e})}}render(){return c.createElement(g,{direction:"row",align:"center",style:l(r({},k.values.taskList.task.style),{top:this.props.top,height:this.props.itemheight+5}),onClick:e=>this.props.onSelectItem(this.props.item)},c.createElement("div",{className:"color-dot",style:{width:12,height:12,borderRadius:12,marginRight:8,background:this.props.item.color}}),this.props.nonEditable?c.createElement(g,{tabIndex:this.props.index},this.props.label):c.createElement(U,{value:this.props.label,index:this.props.index,onChange:this.onChange}))}}class Y extends h.exports.Component{constructor(e){super(e),this.taskViewRef=c.createRef(),this.doScroll=()=>{this.taskViewRef.current&&this.props.onScroll(this.taskViewRef.current.scrollTop)}}getContainerStyle(e){return{height:e>0?e*this.props.itemheight:10}}renderTaskRow(e){let t=[];for(let o=this.props.startRow;o<this.props.endRow+1;o++){let i=e[o];if(!i)break;t.push(c.createElement(O,{key:o,index:o,item:i,label:i.name,top:o*(this.props.itemheight+5),itemheight:this.props.itemheight,isSelected:this.props.selectedItem==i,onUpdateTask:this.props.onUpdateTask,onSelectItem:this.props.onSelectItem,nonEditable:this.props.nonEditable}))}return t}render(){let e=this.props.data?this.props.data:[];return this.containerStyle=this.getContainerStyle(e.length),c.createElement(g,{className:"timeLine-side"},c.createElement(g,{height:"60px",background:"dark-2",elevation:"small",pad:"small",align:"center",justify:"center",direction:"row"},c.createElement("div",null,k.values.taskList.title.label)),c.createElement(g,{ref:this.taskViewRef,className:"timeLine-side-task-viewPort",onScroll:this.doScroll},c.createElement(g,{className:"timeLine-side-task-container",style:r({display:"flex",alignItems:"center",justifyContent:"center"},this.containerStyle)},this.renderTaskRow(e))))}}class j{constructor(){this.initialise=(e,t,o,i)=>{this.nowposition=o,this.daywidth=i,this.setLimits(e,t),this.loadDataHorizon()},this.setStartEnd=(e,t,o,i)=>{this.nowposition=o,this.daywidth=i,this.needData(e,t)&&(this.setLimits(e,t),this.loadDataHorizon())},this.needData=(e,t)=>e<this.lower_data_limit||t>this.upper_data_limit,this.setLimits=(e,t)=>{this.lower_limit=e-1e3,this.lower_data_limit=e-750,this.upper_limit=t+1e3,this.upper_data_limit=t+750},this.loadDataHorizon=()=>{let e=b.pixelToDate(this.lower_limit,this.nowposition,this.daywidth),t=b.pixelToDate(this.upper_limit,this.nowposition,this.daywidth);this.onHorizonChange(e,t)},this.lower_limit=0,this.upper_limit=0,this._dataToRender=[]}onHorizonChange(e,t){throw new Error("Method not implemented.")}}const F=d((e=>{const[t,o]=h.exports.useState(!1),[i,s]=h.exports.useState(0),[n,a]=h.exports.useState(24e3),[r,l]=h.exports.useState(0),[d,p]=h.exports.useState(0),[u,m]=h.exports.useState(),[f,w]=h.exports.useState(),[y,b]=h.exports.useState(40),[E,L]=h.exports.useState(60),[M,T]=h.exports.useState(0),[D,I]=h.exports.useState({width:200}),$=h.exports.useRef(N(e.mode||"month")),[z,U]=h.exports.useState(0),[O,F]=h.exports.useState(!1),[H,X]=h.exports.useState(e.mode?e.mode:"month"),[_,W]=h.exports.useState({width:1,height:1}),[A,V]=h.exports.useState(),[B,K]=h.exports.useState(),G=h.exports.useRef(new j),[q,J]=h.exports.useState(),[Q,Z]=h.exports.useState(),[ee,te]=h.exports.useState([]),[oe,ie]=h.exports.useState([]);h.exports.useEffect((()=>{G.current.onHorizonChange=le,k.load(e.config),G.current.initialise(d+M,d+M+_.width,M,$.current)}),[]);const se=(t,o,i)=>{let s=Math.trunc(i/(e.itemheight||0));return{start:s,end:s+t>=o.length?o.length:s+t}},ne=()=>{G.current.setStartEnd(d,d+_.width,M,$.current)},ae=t=>{var o,i;let s=M,a=-1,l=u,d=f;t>n?(s=M-n-0,a=0):t<=0?(s=M+n+14,a=n):a=t;let h=Math.trunc((t-M)/$.current);l=Math.trunc(r/(e.itemheight||0)),d=l+y>=(e.data||[]).length?(e.data||[]).length-1:l+y,ne(),U(h);let c=new Date,g=e.date;c.setHours(0,0,0,0),null==g||g.setHours(0,0,0,0),c.setDate(c.getDate()+h),(null==(o=e.date)?void 0:o.getTime())!=c.getTime()&&(null==(i=e.onDateChange)||i.call(e,c)),T(s),Z(Q),p(a),m(l),w(d)},re=e=>{a(5e3*(1-e.width/5e3)-1)},le=(t,o)=>{e.onHorizonChange&&e.onHorizonChange(t,o)},de=t=>{e.onSelectItem&&t!=e.selectedItem&&e.onSelectItem(t)},he=(t,o)=>{if(console.log("End Link",t,A,e.onCreateLink),e.onCreateLink&&t&&A&&A.task.id!=t.id){let i={id:x(),source:A.task.id,sourceHandle:A.position,target:t.id,targetHandle:o};console.log("New link",i),e.onCreateLink(i)}F(!1),V(void 0)},ce=(e,t)=>(console.log(e,t||$),Math.ceil(e.width/(t||$.current))+30),pe=e=>{if(console.log("Change mode",e),e!=H){let t=N(e),o=Math.ceil(-z*t/n),i=(z*t+M)%n;console.log(e,t),X(e),$.current=t,L(ce(_,t)),T(o*n),p(i)}};return h.exports.useEffect((()=>{e.data&&te(e.data)}),[e.data]),h.exports.useEffect((()=>{e.links&&ie(e.links)}),[e.links]),h.exports.useEffect((()=>{e.mode&&pe(e.mode)}),[e.mode]),console.log(ee),c.createElement(S.Provider,{value:{data:ee,links:oe,style:e.style,mode:H,scrollLeft:d,moveTimeline:ae,changeMode:pe,dayWidth:$.current}},c.createElement("div",{className:`${e.className} timeLine`,style:{position:"relative",flex:1}},c.createElement("div",{className:"timeLine-side-main",style:D},c.createElement(Y,{itemheight:e.itemheight,startRow:u,endRow:f,data:e.data,selectedItem:e.selectedItem,onSelectItem:de,onUpdateTask:e.onUpdateTask,onScroll:t=>{if(t==t)return;let o=se(y,e.data||[],t);o.start!==u&&(l(t),m(o.start),w(o.end))},nonEditable:e.nonEditableName}),c.createElement(v,{onTaskListSizing:e=>{I({width:e})}})),c.createElement("div",{className:"timeLine-main"},c.createElement(g,{style:{position:"absolute",height:"100%",width:"100%",top:0,left:0},className:"header-container"},c.createElement(C,{headerData:Q,numVisibleDays:E,currentday:z,nowposition:M,scrollLeft:d})),c.createElement(g,{style:{position:"absolute",width:"100%",height:"calc(100% - 60px)",zIndex:9,top:60,left:0}},c.createElement(P,{scrollLeft:d,scrollTop:r,itemheight:e.itemheight,nowposition:M,startRow:u,endRow:f,data:e.data,selectedItem:e.selectedItem,onScroll:q,onMouseDown:e=>{o(!0),s(e.clientX)},onMouseMove:e=>{if(t){let t=i-e.clientX;0!==t&&(s(e.clientX),ae(d+t))}},onMouseUp:e=>{o(!1)},onMouseLeave:e=>{o(!1)},onTouchStart:e=>{o(!0),s(e.touches[0].clientX)},onTouchMove:e=>{if(t){let t=i-e.touches[0].clientX;0!==t&&(s(e.touches[0].clientX),ae(d+t))}},onTouchEnd:e=>{o(!1)},onTouchCancel:e=>{o(!1)},onSelectItem:de,onUpdateTask:e.onUpdateTask,onTaskChanging:e=>{console.log("Changing task",e),K(e)},onStartCreateLink:(e,t)=>{console.log("=> Start Link",e,t),F(!0),V({task:e,position:t})},onFinishCreateLink:he,boundaries:{lower:d,upper:d+_.width},onSize:t=>{console.log(t,$),re(t),ne();let o=Math.ceil(t.height/(e.itemheight||0)),i=ce(t,$.current),s=se(o,e.data||[],r);L(i),console.log("DAYS",i),b(o),m(s.start),w(s.end),W(t)}}),c.createElement(R,{scrollLeft:d,scrollTop:r,startRow:u,endRow:f,data:e.data||[],nowposition:M,interactiveMode:O,taskToCreate:A,onFinishCreateLink:he,changingTask:B,selectedItem:e.selectedItem,onSelectItem:de,itemheight:e.itemheight,links:e.links||[]})))))}))`
.timeLine {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  border: solid 1px rgb(207, 207, 205);
  font-size: 12px;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

/* Main Area */

.timeLine-main {
  flex: 1 1 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
}
/* Main Area Header*/

.timeLine-main-header-viewPort {
  flex: 1;
  position: relative;
  height: 100%;
  width: 100%;
  background-color: rgb(112, 112, 112);
  overflow: hidden;
}

.timeLine-main-header-container {
  flex: 0 0 60px;
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #333333;
  overflow: hidden;
  user-select: none;
}

.timeLine-main-header-day-item {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgb(112, 112, 112);
  font-size: 10px;
  text-align: center;
  border-right: solid 1px;
  border-top: solid 1px;
  border-bottom: solid 1px;
  top: 20px;
  height: 40px;
  color: white;
  text-align: center;
}

.timeLine-main-header-top-item {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: solid 1px white;
  height: 20px;
  z-index: 91;
}

.timeLine-main-header-day-week {
  flex: 0 0 12px;
  padding: 4px;
  z-index: 90;
}

.timeLine-main-header-day-month {
  top: 0px;
  position: sticky;
  flex: 0 0 15px;
  padding: 5px;
  z-index: 90;
}

.timeLine-main-header-time {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  height: 22px;
  justify-content: stretch;
}

.timeLine-main-header-time-item {
  border-left: solid 1px silver;
  border-bottom: solid 1px silver;
  border-top: solid 1px silver;
  text-align: center;
  padding-top: 5px;
}
/* Main Area Data*/

.timeLine-main-data-viewPort {
  flex: 1 1 auto;
  position: relative;
  overflow: hidden;
}
.timeLine-main-data-container {
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  background-color: rgb(255, 255, 255);
}

.timeLine-main-data-row {
  position: absolute;
  width: 100%;
  height: 50px;
}

.timeLine-main-data-task {
  position: absolute;
  background-color: darkorchid;
  border-radius: 14px;
  color: white;
  text-align: center;
}

.timeLine-main-data-task-side {
  position: absolute;
  width: 10px;
  cursor: col-resize;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.timeLine-main-data-task-side-linker {
  width: 8px;
  height: 8px;
  border-radius: 4px;
  cursor: default;
  z-index: 100;
}
.timeLine-main-data-task-side-linker:hover {
  background-color: black;
  border: solid 0.5px grey;
}
/* .timeLine-main-data-task:hover {
    background-color:chocolate;
    border:solid 2px darkorchid;
    cursor: move;
} */

.timeLine-main-data-verticalLine {
  flex: 1 1 auto;
  height: 100%;
  width: 24px;
  background-color: white;
  border-left-width: 0.5px;
  border-left-color: rgb(207, 207, 205);
  border-left-style: dashed;
}

/* Side Area */

.timeLine-side-main {
  flex: 0 0 auto;
  width: 108px;
  min-width: 108px;
  display: flex;
  flex-direction: row;
}

.timeLine-side {
  flex: 1 0 100px;
  display: flex;
  flex-direction: column;
  border-right: solid 1px rgb(207, 207, 205);
}

.verticalResizer {
  flex: 0 0 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: col-resize;
  border-right: solid 1px rgb(207, 207, 205);
  height: 100%;
}
.squareGrip {
  flex: 0 0 auto;

  border-radius: 50%;
  height: 5px;
  width: 5px;
  margin: 3px 0;
}

.timeLine-side-title {
  flex: 0 0 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.timeLine-side-task-viewPort {
  position: relative;
  flex: 1 1 auto;
  height: 100%;
  background-color: #fbf9f9;
  overflow-x: hidden;
  overflow-y: auto;
}

.timeLine-side-task-container {
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
}

.timeLine-side-task-row {
  background-color: rgb(112, 112, 112);
  border-bottom-width: 0.5px;
  border-bottom-color: rgb(207, 207, 205);
  border-bottom-style: solid;
  height: 30px;
  color: grey;
  text-align: center;
  text-overflow: ellipsis;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

`,H=e=>{const{mode:t,changeMode:o}=h.exports.useContext(S),i=t=>{var i;null==o||o(t),null==(i=e.onChange)||i.call(e,t)},s=e=>t==e?{backgroundColor:"grey",boder:"solid 1px #223344"}:{};return c.createElement("div",{className:"mode-container"},c.createElement("div",{className:"mode-container-item mode-container-item-left",onClick:e=>null==i?void 0:i("day"),style:s("day")},"Day"),c.createElement("div",{className:"mode-container-item",onClick:e=>null==i?void 0:i("week"),style:s("week")},"Week"),c.createElement("div",{className:"mode-container-item",onClick:e=>null==i?void 0:i("month"),style:s("month")},"Month"),c.createElement("div",{className:"mode-container-item mode-container-item-right",onClick:e=>null==i?void 0:i("year"),style:s("year")},"Year"))};const X=[{id:1,color:"purple",name:"Test",start:new Date(2021,2,12),end:new Date(2021,5,9)},{id:2,color:"orange",name:"Test",start:new Date(2021,7,12),end:new Date(2021,12,9)}];class _ extends h.exports.Component{constructor(e){super(e),this.handleDayWidth=e=>{this.setState({daysWidth:parseInt(e.target.value)})},this.handleItemHeight=e=>{this.setState({itemheight:parseInt(e.target.value)})},this.onHorizonChange=(e,t)=>{let o=X.filter((o=>o.start<e&&o.end>t||o.start>e&&o.start<t||o.end>e&&o.end<t));console.log("Calculating "),this.setState({data:o})},this.onSelectItem=e=>{console.log(`Select Item ${e}`),this.setState({selectedItem:e})},this.onUpdateTask=(e,t)=>{e.start=t.start,e.end=t.end,this.setState({data:[...this.state.data]}),console.log(`Update Item ${e}`)},this.onCreateLink=e=>{this.setState({links:[...this.state.links,e]}),console.log(`Update Item ${e}`)},this.modeChange=e=>{this.setState({timelineMode:e})},this.addTask=()=>{let e={id:this.state.data.length+1,start:new Date,end:this.getRandomDate(),name:"New Task",color:this.getRandomColor()};this.setState({data:[e,...this.state.data]})},this.delete=()=>{if(console.log("On delete"),this.state.selectedItem){let e=this.state.links.indexOf(this.state.selectedItem);e>-1&&(this.state.links.splice(e,1),this.setState({links:[...this.state.links]})),e=this.state.data.indexOf(this.state.selectedItem),e>-1&&(this.state.data.splice(e,1),this.setState({data:[...this.state.data]}))}},this.state={itemheight:50,data:X,selectedItem:null,timelineMode:"month",links:[],nonEditableName:!1,date:new Date}}getbuttonStyle(e){return this.state.timelineMode==e?{backgroundColor:"grey",boder:"solid 1px #223344"}:{}}getRandomDate(){let e=new Date;return e.setDate(e.getDate()+10*Math.random()),e}getRandomColor(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}getStripes(e,t){let o=[];for(var i=0;i<e;i++){let s=0==i||i==e-1?"#5d9634":"#538c2b";o.push(`\n        ${0==i?`#ffffff ${i*t}px,\n        #ffffff ${i*t+.5}px,`:""}\n        ${s} ${i*t+.5}px,\n        ${s} ${i*t+t}px\n        , #ffffff ${i*t}px,\n        #ffffff ${i*t+.5}px`)}return o.join(",")}getOffset(e){switch(e){case"year":return 4;default:return 0}}handleDateChange(e){this.setState({date:e}),console.log("Date",e)}render(){return c.createElement("div",{className:"app-container"},c.createElement("div",{className:"nav-container"},c.createElement("div",{className:"mode-container-title"},"Full Demo"),c.createElement("div",{className:"operation-button-container"},c.createElement("div",{className:"operation-button-container"},c.createElement("div",{className:"mode-button",onClick:this.addTask},c.createElement("svg",{height:30,width:30,viewBox:"0 0 48 48"},c.createElement("path",{fill:"silver",d:"M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm10 22h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z"}))),c.createElement("div",{className:"mode-button",onClick:this.delete},c.createElement("svg",{height:30,width:30,viewBox:"0 0 48 48"},c.createElement("path",{fill:"silver",d:"M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm10 22H14v-4h20v4z"}))))),c.createElement(H,{onChange:e=>this.setState({timelineMode:e})})),c.createElement("div",{className:"time-line-container"},c.createElement(F,{style:{background:(e,t)=>("year"==e&&(t*=7),{background:`linear-gradient(\n                  to right, \n                  ${this.getStripes(2,t)}\n                )`,backgroundSize:2*t+"px 100%",backgroundPosition:`${this.getOffset(e)}px 0`})},data:this.state.data,date:this.state.date,onDateChange:this.handleDateChange.bind(this),links:this.state.links,onHorizonChange:this.onHorizonChange,onSelectItem:this.onSelectItem,onUpdateTask:this.onUpdateTask,onCreateLink:this.onCreateLink,mode:this.state.timelineMode,itemheight:this.state.itemheight,selectedItem:this.state.selectedItem,nonEditableName:this.state.nonEditableName})))}}w.render(c.createElement(c.StrictMode,null,c.createElement(_,null)),document.getElementById("root"));

"use strict";(self.webpackChunkuntitled_4=self.webpackChunkuntitled_4||[]).push([[1784],{11784:(k,M,s)=>{s.r(M),s.d(M,{default:()=>p});var t=s(19968),c=s(62552),T=s(5e3),A=s(28724),O=s(70996),P=s(35933),m=s(13384),B=s(20596),I=s(48112),W=s(28464),U=s(35676),K=s(42816),E=s(79632),j=s(15396),h=s(53305),x=s(13192),_=s(33104),u=s(14632),i=s(13360),S=s(29088),z=s(85676),N=s(35184),w=s(9568),q=s(12132),ss=s(48632),ts=s(31812),as=s(52540),is=s(40980),es=s(3396),ns=s(79804);const C=({sort:n="",pageSize:d=10,onChange:e})=>{const{formatMessage:o}=(0,u.c)();return(0,t.jsx)(T.k,{background:"neutral0",hasRadius:!0,shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,t.jsxs)(A.y,{gap:4,children:[(0,t.jsx)(O.C,{s:12,col:6,children:(0,t.jsx)(P.M,{label:o({id:(0,i.g)("config.entries.title"),defaultMessage:"Entries per page"}),hint:o({id:(0,i.g)("config.entries.note"),defaultMessage:"Number of assets displayed by default in the Media Library"}),onChange:a=>e({target:{name:"pageSize",value:a}}),name:"pageSize",value:d,children:i.C.map(a=>(0,t.jsx)(m.c,{value:a,children:a},a))})}),(0,t.jsx)(O.C,{s:12,col:6,children:(0,t.jsx)(P.M,{label:o({id:(0,i.g)("config.sort.title"),defaultMessage:"Default sort order"}),hint:o({id:(0,i.g)("config.note"),defaultMessage:"Note: You can override this value in the media library."}),onChange:a=>e({target:{name:"sort",value:a}}),name:"sort",value:n,"test-sort":n,"data-testid":"sort-select",children:i.D.map(a=>(0,t.jsx)(m.c,{"data-testid":`sort-option-${a.value}`,value:a.value,children:o({id:(0,i.g)(a.key),defaultMessage:`${a.value}`})},a.key))})})]})})};C.propTypes={sort:_.string.isRequired,pageSize:_.number.isRequired,onChange:_.func.isRequired};const f=`${i.p}/ON_CHANGE`,v=`${i.p}/SET_LOADED`,$=({name:n,value:d})=>({type:f,keys:n,value:d}),G=()=>({type:v}),r={initialData:{},modifiedData:{}},y=n=>({...r,initialData:n,modifiedData:n}),b=(n=r,d)=>(0,S.cp)(n,e=>{switch(d.type){case f:{N(e,["modifiedData",...d.keys.split(".")],d.value);break}case v:{const o=y(z(e,["modifiedData"],{}));e.initialData=o.initialData,e.modifiedData=o.modifiedData;break}default:return e}}),p=({config:n})=>{const{trackUsage:d}=(0,E.m4)(),{formatMessage:e}=(0,u.c)(),o=(0,E.eo)(),{mutateConfig:a}=(0,i.z)(),{isLoading:L}=a,[H,F]=(0,c.useState)(!1),D=()=>F(g=>!g),[J,R]=(0,c.useReducer)(b,r,()=>y(n)),{initialData:V,modifiedData:l}=J,Y=g=>{g.preventDefault(),D()},Z=async()=>{d("willEditMediaLibraryConfig"),await a.mutateAsync(l),D(),R(G()),o({type:"success",message:{id:"notification.form.success.fields",defaultMessage:"Changes saved"}})},Q=({target:{name:g,value:X}})=>{R($({name:g,value:X}))};return(0,E.G0)(),(0,t.jsx)(B._,{children:(0,t.jsx)(I.G,{"aria-busy":L,children:(0,t.jsxs)("form",{onSubmit:Y,children:[(0,t.jsx)(W.a,{navigationAction:(0,t.jsx)(E.cH,{startIcon:(0,t.jsx)(j.c,{}),to:`/plugins/${i.p}`,id:"go-back",children:e({id:(0,i.g)("config.back"),defaultMessage:"Back"})}),primaryAction:(0,t.jsx)(U.Z,{size:"S",startIcon:(0,t.jsx)(h.c,{}),disabled:x(l,V),type:"submit",children:e({id:"global.save",defaultMessage:"Save"})}),subtitle:e({id:(0,i.g)("config.subtitle"),defaultMessage:"Define the view settings of the media library."}),title:e({id:(0,i.g)("config.title"),defaultMessage:"Configure the view - Media Library"})}),(0,t.jsx)(K.S,{children:(0,t.jsx)(C,{"data-testid":"settings",pageSize:l.pageSize||"",sort:l.sort||"",onChange:Q})}),(0,t.jsx)(E.cz,{bodyText:{id:(0,i.g)("config.popUpWarning.warning.updateAllSettings"),defaultMessage:"This will modify all your settings"},iconRightButton:(0,t.jsx)(h.c,{}),isConfirmButtonLoading:L,isOpen:H,onToggleDialog:D,onConfirm:Z,variantRightButton:"success-light"})]})})})};p.propTypes={config:_.shape({pageSize:_.number,sort:_.string}).isRequired}}}]);

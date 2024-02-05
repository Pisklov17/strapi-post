"use strict";(self.webpackChunkuntitled_4=self.webpackChunkuntitled_4||[]).push([[6e3],{46e3:(S,D,s)=>{s.d(D,{ProtectedSSO:()=>F});var t=s(19968),g=s(20596),R=s(48112),L=s(28464),m=s(35676),h=s(42816),C=s(48936),v=s(63358),M=s(28724),E=s(70996),A=s(28216),c=s(35933),I=s(13384),O=s(5928),o=s(79632),B=s(53305),T=s(31812),y=s(14632),d=s(52540),r=s(94248),j=s(59784),q=s(54320),ss=s(5240),ts=s(91892),as=s(36196),os=s(20880),_s=s(21424),ns=s(62552),es=s(70516),ls=s(18424),Es=s(21968),is=s(12132),ds=s(48632),rs=s(85676),Ms=s(35184),Os=s(99568),Ps=s(96556),Ds=s(13192),gs=s(30840),Rs=s(77784),Ls=s(79371),ms=s(67888),hs=s(52600),Cs=s(95752),vs=s(37388),As=s(61840),cs=s(49108),Is=s(44632),Bs=s(50840),Ts=s(20252),Us=s(86432),Ks=s(22612),Ws=s(24808),fs=s(24024),us=s(40960),Ss=s(33656),ys=s(43280),js=s(79804),xs=s(19632),ps=s(29576),Fs=s(61152),zs=s(9589),Ns=s(45488),Vs=s(75516);const x=d.kt().shape({autoRegister:d.SK().required(o.aO.required),defaultRole:d.Er().when("autoRegister",(a,_)=>a?_.required(o.aO.required):_.nullable()),ssoLockedRoles:d.M$().nullable().of(d.Er().when("ssoLockedRoles",(a,_)=>a?_.required(o.aO.required):_.nullable()))}),p=()=>{(0,o.G0)();const{formatMessage:a}=(0,y.c)(),_=(0,r.j)(l=>l.admin_app.permissions),{lockApp:z,unlockApp:N}=(0,o.H6)(),U=(0,o.eo)(),{_unstableFormatAPIError:V,_unstableFormatValidationErrors:J}=(0,o.An)(),{isLoading:Y,data:Z}=(0,r.W)(),[G,{isLoading:Q}]=(0,r.X)(),{isLoading:H,allowedActions:{canUpdate:K,canReadRoles:X}}=(0,o.aU)({..._.settings?.sso,readRoles:_.settings?.roles.read??[]}),{roles:f,isLoading:$}=(0,j.u)(void 0,{skip:!X}),k=async(l,P)=>{z();try{const n=await G(l);if("error"in n){(0,r.x)(n.error)&&n.error.name==="ValidationError"?P.setErrors(J(n.error)):U({type:"warning",message:V(n.error)});return}U({type:"success",message:{id:"notification.success.saved"}})}catch{U({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred, please try again."}})}finally{N()}},u=$||H||Y;return(0,t.jsxs)(g._,{children:[(0,t.jsx)(o.K8,{name:"SSO"}),(0,t.jsx)(R.G,{"aria-busy":Q||u,tabIndex:-1,children:(0,t.jsx)(T.QJ,{onSubmit:k,initialValues:Z||{autoRegister:!1,defaultRole:null,ssoLockedRoles:null},validationSchema:x,validateOnChange:!1,enableReinitialize:!0,children:({handleChange:l,isSubmitting:P,values:n,setFieldValue:b,dirty:w,errors:i})=>(0,t.jsxs)(o.QF,{children:[(0,t.jsx)(L.a,{primaryAction:(0,t.jsx)(m.Z,{disabled:!w,loading:P,startIcon:(0,t.jsx)(B.c,{}),type:"submit",size:"L",children:a({id:"global.save",defaultMessage:"Save"})}),title:a({id:"Settings.sso.title",defaultMessage:"Single Sign-On"}),subtitle:a({id:"Settings.sso.description",defaultMessage:"Configure the settings for the Single Sign-On feature."})}),(0,t.jsx)(h.S,{children:P||u?(0,t.jsx)(o.Wm,{}):(0,t.jsxs)(C.C,{direction:"column",alignItems:"stretch",gap:4,background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:[(0,t.jsx)(v.O,{variant:"delta",as:"h2",children:a({id:"global.settings",defaultMessage:"Settings"})}),(0,t.jsxs)(M.y,{gap:4,children:[(0,t.jsx)(E.C,{col:6,s:12,children:(0,t.jsx)(A.a,{disabled:!K,checked:n.autoRegister,hint:a({id:"Settings.sso.form.registration.description",defaultMessage:"Create new user on SSO login if no account exists"}),label:a({id:"Settings.sso.form.registration.label",defaultMessage:"Auto-registration"}),name:"autoRegister",offLabel:a({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:a({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:l})}),(0,t.jsx)(E.C,{col:6,s:12,children:(0,t.jsx)(c.M,{disabled:!K,hint:a({id:"Settings.sso.form.defaultRole.description",defaultMessage:"It will attach the new authenticated user to the selected role"}),error:i.defaultRole?a({id:i.defaultRole,defaultMessage:i.defaultRole}):"",label:a({id:"Settings.sso.form.defaultRole.label",defaultMessage:"Default role"}),name:"defaultRole",onChange:e=>l({target:{name:"defaultRole",value:e}}),placeholder:a({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),value:n.defaultRole,children:f.map(({id:e,name:W})=>(0,t.jsx)(I.c,{value:e.toString(),children:W},e))})}),(0,t.jsx)(E.C,{col:6,s:12,children:(0,t.jsx)(O.e,{disabled:!K,hint:a({id:"Settings.sso.form.localAuthenticationLock.description",defaultMessage:"Select the roles for which you want to disable the local authentication"}),error:i.ssoLockedRoles?a({id:i.ssoLockedRoles,defaultMessage:i.ssoLockedRoles}):"",label:a({id:"Settings.sso.form.localAuthenticationLock.label",defaultMessage:"Local authentication lock-out"}),name:"ssoLockedRoles",onChange:e=>l({target:{value:e,name:"ssoLockedRoles"}}),placeholder:a({id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}),onClear:()=>b("ssoLockedRoles",[]),value:n.ssoLockedRoles||[],withTags:!0,children:f.map(({id:e,name:W})=>(0,t.jsx)(O.eI,{value:e.toString(),children:W},e))})})]})]})})]})})})]})},F=()=>{const a=(0,r.j)(_=>_.admin_app.permissions.settings?.sso?.main);return(0,t.jsx)(o.rF,{permissions:a,children:(0,t.jsx)(p,{})})}},59784:(S,D,s)=>{s.d(D,{u:()=>m});var t=s(62552),g=s(79632),R=s(14632),L=s(94248);const m=(h={},C)=>{const{locale:v}=(0,R.c)(),M=(0,g.In)(v,{sensitivity:"base"}),{data:E,error:A,isError:c,isLoading:I,refetch:O}=(0,L.z)(h,C);return{roles:t.useMemo(()=>[...E??[]].sort((B,T)=>M.compare(B.name,T.name)),[E,M]),error:A,isError:c,isLoading:I,refetch:O}}}}]);

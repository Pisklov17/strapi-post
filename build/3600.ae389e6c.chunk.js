"use strict";(self.webpackChunkuntitled_4=self.webpackChunkuntitled_4||[]).push([[3600],{20894:(h,M,s)=>{s.d(M,{B:()=>U,D:()=>I,H:()=>K,R:()=>A});var t=s(19968),l=s(48936),d=s(63358),O=s(20596),P=s(48112),g=s(42816),m=s(28464),a=s(79632),e=s(14520),o=s(15396),E=s(14632),c=s(94248),C=s(1844),i=s(5596);const D=(0,i.cp)(l.C)`
  svg path {
    fill: ${({theme:r})=>r.colors.neutral600};
  }
`,R=({name:r})=>(0,t.jsxs)(l.C,{background:"primary100",borderStyle:"dashed",borderColor:"primary600",borderWidth:"1px",gap:3,hasRadius:!0,padding:3,shadow:"tableShadow",width:(0,a.W8)(300),children:[(0,t.jsx)(D,{alignItems:"center",background:"neutral200",borderRadius:"50%",height:6,justifyContent:"center",width:6,children:(0,t.jsx)(e.c,{width:`${8/16}rem`})}),(0,t.jsx)(d.O,{fontWeight:"bold",children:r})]}),I=()=>(0,t.jsx)(c.P,{renderItem:r=>{if(r.type===C.D.STAGE)return(0,t.jsx)(R,{name:typeof r.item=="string"?r.item:null})}}),A=({children:r})=>(0,t.jsx)(O._,{children:(0,t.jsx)(P.G,{tabIndex:-1,children:(0,t.jsx)(g.S,{children:r})})}),U=({href:r})=>{const{formatMessage:T}=(0,E.c)();return(0,t.jsx)(a.cH,{startIcon:(0,t.jsx)(o.c,{}),to:r,children:T({id:"global.back",defaultMessage:"Back"})})},K=({title:r,subtitle:T,navigationAction:y,primaryAction:W})=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.K8,{name:r}),(0,t.jsx)(m.a,{navigationAction:y,primaryAction:W,title:r,subtitle:T})]})},93600:(h,M,s)=>{s.d(M,{ProtectedReviewWorkflowsPage:()=>X});var t=s(19968),l=s(62552),d=s(48936),O=s(89296),P=s(42848),g=s(89616),m=s(20464),a=s(76512),e=s(9752),o=s(63358),E=s(35480),c=s(48744),C=s(23264),i=s(79632),D=s(48636),R=s(89940),I=s(71324),A=s(14632),U=s(49008),K=s(5596),r=s(94248),T=s(41712),y=s(56456),W=s(20894),j=s(6484),Y=s(1844),Q=s(85204),Es=s(54320),ds=s(5240),Ds=s(91892),Ms=s(36196),Os=s(20880),Ps=s(21424),gs=s(70516),ms=s(31812),cs=s(18424),vs=s(52540),fs=s(21968),Cs=s(12132),Ts=s(48632),hs=s(85676),Ws=s(35184),Ls=s(99568),Bs=s(96556),Rs=s(13192),Is=s(30840),As=s(77784),Us=s(79371),Ks=s(67888),ys=s(52600),js=s(95752),us=s(37388),xs=s(61840),ps=s(49108),ws=s(44632),Ss=s(50840),$s=s(20252),Fs=s(86432),Ns=s(22612),zs=s(24808),Gs=s(24024),Hs=s(40960),Ys=s(33656),Qs=s(43280),Zs=s(79804),Js=s(19632),Xs=s(29576),ks=s(61152),Vs=s(9589),bs=s(45488),qs=s(75516),st=s(29384);const Z=(0,K.cp)(i.cH)`
  align-items: center;
  height: ${(0,i.W8)(32)};
  display: flex;
  justify-content: center;
  padding: ${({theme:n})=>`${n.spaces[2]}}`};
  width: ${(0,i.W8)(32)};

  svg {
    height: ${(0,i.W8)(12)};
    width: ${(0,i.W8)(12)};

    path {
      fill: ${({theme:n})=>n.colors.neutral500};
    }
  }

  &:hover,
  &:focus {
    svg {
      path {
        fill: ${({theme:n})=>n.colors.neutral800};
      }
    }
  }
`,J=()=>{const{formatMessage:n}=(0,A.c)(),{push:L}=(0,U.Uz)(),{trackUsage:S}=(0,i.m4)(),[u,x]=l.useState(null),[k,B]=l.useState(!1),{collectionTypes:V,singleTypes:b,isLoading:q}=(0,T.u)(),{meta:v,workflows:$,isLoading:p,deleteWorkflow:ss}=(0,Q.u)(),[ts,F]=l.useState(!1),{_unstableFormatAPIError:os}=(0,i.An)(),w=(0,i.eo)(),{getFeature:es,isLoading:N}=(0,y.u)(),ns=(0,r.j)(_=>_.admin_app.permissions.settings?.["review-workflows"]),{allowedActions:{canCreate:z,canDelete:_s}}=(0,i.aU)(ns),f=es("review-workflows")?.[Y.C],as=_=>[...V,...b].find(H=>H.uid===_)?.info.displayName,is=_=>{x(_)},rs=()=>{x(null)},ls=async()=>{if(u)try{F(!0);const _=await ss({id:u});if("error"in _){w({type:"warning",message:os(_.error)});return}x(null),w({type:"success",message:{id:"notification.success.deleted",defaultMessage:"Deleted"}})}catch{w({type:"warning",message:{id:"notification.error.unexpected",defaultMessage:"An error occurred"}})}finally{F(!1)}};return l.useEffect(()=>{!p&&!N&&f&&v&&v?.workflowCount>parseInt(f,10)&&B(!0)},[N,p,v,v?.workflowCount,f]),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(W.H,{primaryAction:z&&(0,t.jsx)(i.EZ,{startIcon:(0,t.jsx)(D.c,{}),size:"S",to:"/settings/review-workflows/create",onClick:_=>{f&&v&&v?.workflowCount>=parseInt(f,10)?(_.preventDefault(),B(!0)):S("willCreateWorkflow")},children:n({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}),subtitle:n({id:"Settings.review-workflows.list.page.subtitle",defaultMessage:"Manage your content review process"}),title:n({id:"Settings.review-workflows.list.page.title",defaultMessage:"Review Workflows"})}),(0,t.jsxs)(W.R,{children:[p||q?(0,t.jsx)(d.C,{justifyContent:"center",children:(0,t.jsx)(O.c,{children:n({id:"Settings.review-workflows.page.list.isLoading",defaultMessage:"Workflows are loading"})})}):(0,t.jsxs)(P.o,{colCount:3,footer:z&&(0,t.jsx)(g.U,{icon:(0,t.jsx)(D.c,{}),onClick:()=>{f&&v&&v?.workflowCount>=parseInt(f,10)?B(!0):(L("/settings/review-workflows/create"),S("willCreateWorkflow"))},children:n({id:"Settings.review-workflows.list.page.create",defaultMessage:"Create new workflow"})}),rowCount:1,children:[(0,t.jsx)(m.o,{children:(0,t.jsxs)(a.Tr,{children:[(0,t.jsx)(e.Th,{children:(0,t.jsx)(o.O,{variant:"sigma",children:n({id:"Settings.review-workflows.list.page.list.column.name.title",defaultMessage:"Name"})})}),(0,t.jsx)(e.Th,{children:(0,t.jsx)(o.O,{variant:"sigma",children:n({id:"Settings.review-workflows.list.page.list.column.stages.title",defaultMessage:"Stages"})})}),(0,t.jsx)(e.Th,{children:(0,t.jsx)(o.O,{variant:"sigma",children:n({id:"Settings.review-workflows.list.page.list.column.contentTypes.title",defaultMessage:"Content Types"})})}),(0,t.jsx)(e.Th,{children:(0,t.jsx)(E.K,{children:n({id:"Settings.review-workflows.list.page.list.column.actions.title",defaultMessage:"Actions"})})})]})}),(0,t.jsx)(c.K,{children:$?.map(_=>(0,l.createElement)(a.Tr,{...(0,i.on)({fn(G){G.target.nodeName!=="BUTTON"&&L(`/settings/review-workflows/${_.id}`)}}),key:`workflow-${_.id}`},(0,t.jsx)(e.Td,{width:(0,i.W8)(250),children:(0,t.jsx)(o.O,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0,children:_.name})}),(0,t.jsx)(e.Td,{children:(0,t.jsx)(o.O,{textColor:"neutral800",children:_.stages.length})}),(0,t.jsx)(e.Td,{children:(0,t.jsx)(o.O,{textColor:"neutral800",children:(_?.contentTypes??[]).map(as).join(", ")})}),(0,t.jsx)(e.Td,{children:(0,t.jsxs)(d.C,{alignItems:"center",justifyContent:"end",children:[(0,t.jsx)(Z,{to:`/settings/review-workflows/${_.id}`,"aria-label":n({id:"Settings.review-workflows.list.page.list.column.actions.edit.label",defaultMessage:"Edit {name}"},{name:_.name}),children:(0,t.jsx)(R.c,{})}),$.length>1&&_s&&(0,t.jsx)(C.w,{"aria-label":n({id:"Settings.review-workflows.list.page.list.column.actions.delete.label",defaultMessage:"Delete {name}"},{name:"Default workflow"}),icon:(0,t.jsx)(I.c,{}),noBorder:!0,onClick:()=>{is(String(_.id))}})]})})))})]}),(0,t.jsx)(i.cz,{bodyText:{id:"Settings.review-workflows.list.page.delete.confirm.body",defaultMessage:"If you remove this worfklow, all stage-related information will be removed for this content-type. Are you sure you want to remove it?"},isConfirmButtonLoading:ts,isOpen:!!u,onToggleDialog:rs,onConfirm:ls}),(0,t.jsxs)(j.L.Root,{isOpen:k,onClose:()=>B(!1),children:[(0,t.jsx)(j.L.Title,{children:n({id:"Settings.review-workflows.list.page.workflows.limit.title",defaultMessage:"You\u2019ve reached the limit of workflows in your plan"})}),(0,t.jsx)(j.L.Body,{children:n({id:"Settings.review-workflows.list.page.workflows.limit.body",defaultMessage:"Delete a workflow or contact Sales to enable more workflows."})})]})]})]})},X=()=>{const n=(0,r.j)(L=>L.admin_app.permissions.settings?.["review-workflows"]?.main);return(0,t.jsx)(i.rF,{permissions:n,children:(0,t.jsx)(J,{})})}},41712:(h,M,s)=>{s.d(M,{u:()=>m});var t=s(62552),l=s(79632),d=s(94248);const O=d.m.injectEndpoints({endpoints:a=>({getComponents:a.query({query:()=>({url:"/content-manager/components",method:"GET"}),transformResponse:e=>e.data}),getContentTypes:a.query({query:()=>({url:"/content-manager/content-types",method:"GET"}),transformResponse:e=>e.data})}),overrideExisting:!1}),{useGetComponentsQuery:P,useGetContentTypesQuery:g}=O;function m(){const{_unstableFormatAPIError:a}=(0,l.An)(),e=(0,l.eo)(),o=P(),E=g();t.useEffect(()=>{E.error&&e({type:"warning",message:a(E.error)})},[E.error,a,e]),t.useEffect(()=>{o.error&&e({type:"warning",message:a(o.error)})},[o.error,a,e]);const c=o.isLoading||E.isLoading,C=t.useMemo(()=>(E?.data??[]).filter(D=>D.kind==="collectionType"&&D.isDisplayed),[E?.data]),i=t.useMemo(()=>(E?.data??[]).filter(D=>D.kind!=="collectionType"&&D.isDisplayed),[E?.data]);return{isLoading:c,components:t.useMemo(()=>o?.data??[],[o?.data]),collectionTypes:C,singleTypes:i}}},85204:(h,M,s)=>{s.d(M,{u:()=>l});var t=s(29384);function l(d={}){const{id:O="",...P}=d,{data:g,isLoading:m}=(0,t.c)({id:O,populate:"stages",...P}),[a]=(0,t.d)(),[e]=(0,t.e)(),[o]=(0,t.f)(),{workflows:E,meta:c}=g??{};return{meta:c,workflows:E,isLoading:m,createWorkflow:a,updateWorkflow:e,deleteWorkflow:o}}},89616:(h,M,s)=>{s.d(M,{U:()=>e});var t=s(19968),l=s(5596),d=s(5e3),O=s(6912),P=s(48936),g=s(63358);const m=(0,l.cp)(d.k)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:o})=>o.colors.primary600};
  }
`,a=(0,l.cp)(d.k)`
  border-radius: 0 0 ${({theme:o})=>o.borderRadius} ${({theme:o})=>o.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,e=({children:o,icon:E,...c})=>(0,t.jsxs)("div",{children:[(0,t.jsx)(O.c,{}),(0,t.jsx)(a,{as:"button",background:"primary100",padding:5,...c,children:(0,t.jsxs)(P.C,{children:[(0,t.jsx)(m,{"aria-hidden":!0,background:"primary200",children:E}),(0,t.jsx)(d.k,{paddingLeft:3,children:(0,t.jsx)(g.O,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:o})})]})})]})}}]);

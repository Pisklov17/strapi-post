"use strict";(self.webpackChunkuntitled_4=self.webpackChunkuntitled_4||[]).push([[700],{70700:(x,f,t)=>{t.d(f,{ProtectedListView:()=>rt});var s=t(19968),l=t(62552),R=t(48112),B=t(28464),d=t(81504),D=t(42816),o=t(79632),E=t(48636),a=t(12132),T=t(14632),e=t(49008),I=t(94248),K=t(99104),g=t(49748),W=t(72984),u=t(54320),F=t(5240),V=t(91892),z=t(36196),G=t(20880),Y=t(21424),p=t(70516),J=t(31812),H=t(18424),Q=t(52540),Z=t(21968),n=t(48632),r=t(85676),P=t(35184),O=t(99568),m=t(96556),M=t(13192),i=t(30840),v=t(77784),c=t(79371),y=t(67888),X=t(52600),w=t(95752),b=t(37388),q=t(61840),tt=t(49108),_=t(44632),st=t(50840),S=t(20252),Ot=t(86432),mt=t(22612),ct=t(24808),ft=t(24024),At=t(40960),Lt=t(33656),Ct=t(43280),gt=t(79804),vt=t(19632),Ut=t(29576),ht=t(61152),Rt=t(9589),Bt=t(45488),It=t(75516);const _t=[{name:"name",key:"name",metadatas:{label:{id:"Settings.tokens.ListView.headers.name",defaultMessage:"Name"},sortable:!0}},{name:"description",key:"description",metadatas:{label:{id:"Settings.tokens.ListView.headers.description",defaultMessage:"Description"},sortable:!1}},{name:"createdAt",key:"createdAt",metadatas:{label:{id:"Settings.tokens.ListView.headers.createdAt",defaultMessage:"Created at"},sortable:!1}},{name:"lastUsedAt",key:"lastUsedAt",metadatas:{label:{id:"Settings.tokens.ListView.headers.lastUsedAt",defaultMessage:"Last used"},sortable:!1}}],ot=()=>{(0,o.G0)();const{formatMessage:A}=(0,T.c)(),U=(0,o.eo)(),dt=(0,I.j)(C=>C.admin_app.permissions.settings?.["transfer-tokens"]),{isLoading:Et,allowedActions:{canCreate:k,canDelete:it,canUpdate:lt,canRead:h}}=(0,o.aU)(dt),{push:at}=(0,e.Uz)(),{trackUsage:j}=(0,o.m4)(),{_unstableFormatAPIError:N}=(0,o.An)();l.useEffect(()=>{at({search:a.stringify({sort:"name:ASC"},{encode:!1})})},[at]),(0,I.b)(()=>{j("willAccessTokenList",{tokenType:g.T})});const Tt=_t.map(C=>({...C,metadatas:{...C.metadatas,label:A(C.metadatas.label)}})),{data:L=[],isLoading:Mt,error:$}=(0,K.c)(void 0,{skip:!h});l.useEffect(()=>{L&&j("didAccessTokenList",{number:L.length,tokenType:g.T})},[j,L]),l.useEffect(()=>{$&&U({type:"warning",message:N($)})},[$,N,U]);const[Dt]=(0,K.d)(),Pt=async C=>{try{const nt=await Dt(C);"error"in nt&&U({type:"warning",message:N(nt.error)})}catch{U({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}},et=Mt||Et;return(0,s.jsxs)(R.G,{"aria-busy":et,children:[(0,s.jsx)(o.K8,{name:"Transfer Tokens"}),(0,s.jsx)(B.a,{title:A({id:"Settings.transferTokens.title",defaultMessage:"Transfer Tokens"}),subtitle:A({id:"Settings.transferTokens.description",defaultMessage:'"List of generated transfer tokens"'}),primaryAction:k?(0,s.jsx)(d.E,{"data-testid":"create-transfer-token-button",startIcon:(0,s.jsx)(E.c,{}),size:"S",onClick:()=>j("willAddTokenFromList",{tokenType:g.T}),to:"/settings/transfer-tokens/create",children:A({id:"Settings.transferTokens.create",defaultMessage:"Create new Transfer Token"})}):void 0}),(0,s.jsxs)(D.S,{children:[!h&&(0,s.jsx)(o.o5,{}),h&&L.length>0&&(0,s.jsx)(W.T,{permissions:{canRead:h,canDelete:it,canUpdate:lt},headers:Tt,contentType:"trasfer-tokens",isLoading:et,onConfirmDelete:Pt,tokens:L,tokenType:g.T}),h&&k&&L.length===0&&(0,s.jsx)(o.kP,{content:{id:"Settings.transferTokens.addFirstToken",defaultMessage:"Add your first Transfer Token"},action:(0,s.jsx)(d.E,{variant:"secondary",startIcon:(0,s.jsx)(E.c,{}),to:"/settings/transfer-tokens/create",children:A({id:"Settings.transferTokens.addNewToken",defaultMessage:"Add new Transfer Token"})})}),h&&!k&&L.length===0&&(0,s.jsx)(o.kP,{content:{id:"Settings.transferTokens.emptyStateLayout",defaultMessage:"You don\u2019t have any content yet..."}})]})]})},rt=()=>{const A=(0,I.j)(U=>U.admin_app.permissions.settings?.["transfer-tokens"].main);return(0,s.jsx)(o.rF,{permissions:A,children:(0,s.jsx)(ot,{})})}},72984:(x,f,t)=>{t.d(f,{T:()=>z});var s=t(19968),l=t(62552),R=t(48744),B=t(76512),d=t(9752),D=t(63358),o=t(48936),E=t(5e3),a=t(23264),T=t(5540),e=t(79632),I=t(71324),K=t(14032),g=t(89940),W=t(14632),u=t(49008),F=t(39380),V=t(5596);const z=({permissions:n,headers:r=[],contentType:P,isLoading:O=!1,tokens:m=[],onConfirmDelete:M,tokenType:i})=>{const{canDelete:v,canUpdate:c,canRead:y}=n;return(0,s.jsx)(e.AL,{headers:r,contentType:P,rows:m,withBulkActions:v||c||y,isLoading:O,onConfirmDelete:M,children:(0,s.jsx)(G,{tokenType:i,permissions:n,onConfirmDelete:M})})},G=({tokenType:n,permissions:r,rows:P=[],withBulkActions:O,onConfirmDelete:m})=>{const{canDelete:M,canUpdate:i,canRead:v}=r,[{query:c}]=(0,e.WK)(),{formatMessage:y}=(0,W.c)(),[,X]=c&&c.sort?c.sort.split(":"):[void 0,"ASC"],{push:w,location:{pathname:b}}=(0,u.Uz)(),{trackUsage:q}=(0,e.m4)(),tt=[...P].sort((_,st)=>{const S=_.name.localeCompare(st.name);return X==="DESC"?-S:S});return(0,s.jsx)(R.K,{children:tt.map(_=>(0,s.jsxs)(B.Tr,{...(0,e.on)({fn(){q("willEditTokenFromList",{tokenType:n}),w(`${b}/${_.id}`)},condition:i}),children:[(0,s.jsx)(d.Td,{maxWidth:(0,e.W8)(250),children:(0,s.jsx)(D.O,{textColor:"neutral800",fontWeight:"bold",ellipsis:!0,children:_.name})}),(0,s.jsx)(d.Td,{maxWidth:(0,e.W8)(250),children:(0,s.jsx)(D.O,{textColor:"neutral800",ellipsis:!0,children:_.description})}),(0,s.jsx)(d.Td,{children:(0,s.jsx)(D.O,{textColor:"neutral800",children:(0,s.jsx)(e.od,{timestamp:new Date(_.createdAt)})})}),(0,s.jsx)(d.Td,{children:_.lastUsedAt&&(0,s.jsx)(D.O,{textColor:"neutral800",children:(0,s.jsx)(e.od,{timestamp:new Date(_.lastUsedAt),customIntervals:[{unit:"hours",threshold:1,text:y({id:"Settings.apiTokens.lastHour",defaultMessage:"last hour"})}]})})}),O&&(0,s.jsx)(d.Td,{children:(0,s.jsxs)(o.C,{justifyContent:"end",children:[i&&(0,s.jsx)(Z,{tokenName:_.name,tokenId:_.id}),!i&&v&&(0,s.jsx)(Q,{tokenName:_.name,tokenId:_.id}),M&&(0,s.jsx)(H,{tokenName:_.name,onClickDelete:()=>m?.(_.id),tokenType:n})]})})]},_.id))})},Y={edit:{id:"app.component.table.edit",defaultMessage:"Edit {target}"},read:{id:"app.component.table.read",defaultMessage:"Read {target}"}},p=({tokenName:n,tokenId:r,buttonType:P="edit",children:O})=>{const{formatMessage:m}=(0,W.c)(),{location:{pathname:M}}=(0,u.Uz)();return(0,s.jsx)(J,{forwardedAs:F.Af,to:`${M}/${r}`,title:m(Y[P],{target:n}),children:O})},J=(0,V.cp)(T.c)`
  svg {
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
`,H=({tokenName:n,onClickDelete:r,tokenType:P})=>{const{formatMessage:O}=(0,W.c)(),{trackUsage:m}=(0,e.m4)(),[M,i]=l.useState(!1),v=()=>{i(!1),m("willDeleteToken",{tokenType:P}),r()};return(0,s.jsxs)(E.k,{paddingLeft:1,onClick:c=>c.stopPropagation(),children:[(0,s.jsx)(a.w,{onClick:()=>{i(!0)},label:O({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:`${n}`}),name:"delete",borderWidth:0,icon:(0,s.jsx)(I.c,{})}),(0,s.jsx)(e.cz,{onToggleDialog:()=>i(!1),onConfirm:v,isOpen:M})]})},Q=({tokenName:n,tokenId:r})=>(0,s.jsx)(p,{tokenName:n,tokenId:r,buttonType:"read",children:(0,s.jsx)(K.c,{})}),Z=({tokenName:n,tokenId:r})=>(0,s.jsx)(p,{tokenName:n,tokenId:r,children:(0,s.jsx)(g.c,{width:12})})},49748:(x,f,t)=>{t.d(f,{A:()=>s,T:()=>l});const s="api-token",l="transfer-token"},99104:(x,f,t)=>{t.d(f,{a:()=>d,b:()=>o,c:()=>R,d:()=>D,u:()=>B});var s=t(94248);const l=s.m.injectEndpoints({endpoints:E=>({getTransferTokens:E.query({query:()=>({url:"/admin/transfer/tokens",method:"GET"}),transformResponse:a=>a.data,providesTags:(a,T)=>[...a?.map(({id:e})=>({type:"TransferToken",id:e}))??[],{type:"TransferToken",id:"LIST"}]}),getTransferToken:E.query({query:a=>`/admin/transfer/tokens/${a}`,transformResponse:a=>a.data,providesTags:(a,T,e)=>[{type:"TransferToken",id:e}]}),createTransferToken:E.mutation({query:a=>({url:"/admin/transfer/tokens",method:"POST",data:a}),transformResponse:a=>a.data,invalidatesTags:[{type:"TransferToken",id:"LIST"}]}),deleteTransferToken:E.mutation({query:a=>({url:`/admin/transfer/tokens/${a}`,method:"DELETE"}),transformResponse:a=>a.data,invalidatesTags:(a,T,e)=>[{type:"TransferToken",id:e}]}),updateTransferToken:E.mutation({query:({id:a,...T})=>({url:`/admin/transfer/tokens/${a}`,method:"PUT",data:T}),transformResponse:a=>a.data,invalidatesTags:(a,T,{id:e})=>[{type:"TransferToken",id:e}]})}),overrideExisting:!1}),{useGetTransferTokensQuery:R,useGetTransferTokenQuery:B,useCreateTransferTokenMutation:d,useDeleteTransferTokenMutation:D,useUpdateTransferTokenMutation:o}=l}}]);

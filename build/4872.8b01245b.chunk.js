"use strict";(self.webpackChunkuntitled_4=self.webpackChunkuntitled_4||[]).push([[4872],{64872:(K,s,_)=>{_.r(s),_.d(s,{UserListPageEE:()=>m});var D=_(19968),M=_(22032),o=_(82188),n=_(62552),O=_(79632),i=_(12132),P=_(94248),l=_(54320),L=_(5240),a=_(91892),t=_(36196),C=_(20880),v=_(21424),R=_(70516),U=_(31812),d=_(18424),B=_(52540),I=_(21968),E=_(48632),T=_(85676),W=_(35184),A=_(99568),r=_(96556),h=_(13192),f=_(30840),g=_(77784),e=_(79371),S=_(67888),j=_(52600),y=_(95752),N=_(37388),c=_(61840),u=_(49108),F=_(44632),Y=_(50840),G=_(20252),V=_(86432),x=_(22612),$=_(24808),H=_(24024),Z=_(40960),J=_(33656),X=_(43280),z=_(79804),Q=_(19632),p=_(29576),k=_(61152),w=_(9589),b=_(45488),q=_(75516),__=_(60080),E_=_(75612),t_=_(59784),s_=_(56008),O_=_(17892),a_=_(31212),D_=_(81136),M_=_(56456);const m=()=>((0,o.u)(),(0,D.jsx)(M.C,{}))},82188:(K,s,_)=>{_.d(s,{u:()=>a});var D=_(62552),M=_(79632),o=_(81136),n=_(14632),O=_(49008),i=_(56456);const P="strapi-notification-seat-limit",l="https://cloud.strapi.io/profile/billing",L="https://strapi.io/billing/request-seats",a=()=>{const{formatMessage:t}=(0,n.c)(),{license:C,isError:v,isLoading:R}=(0,i.u)(),U=(0,M.eo)(),{pathname:d}=(0,O.IT)(),{enforcementUserCount:B,permittedSeats:I,licenseLimitStatus:E,isHostedOnStrapiCloud:T}=C??{};D.useEffect(()=>{if(v||R)return;const W=!o(I)&&!window.sessionStorage.getItem(`${P}-${d}`)&&(E==="AT_LIMIT"||E==="OVER_LIMIT");let A;E==="OVER_LIMIT"?A="warning":E==="AT_LIMIT"&&(A="softWarning"),W&&U({type:A,message:t({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:E}),title:t({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:E,enforcementUserCount:B,permittedSeats:I}),link:{url:T?l:L,label:t({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:T})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${P}-${d}`,"true")}})},[U,C,d,t,R,I,E,B,T,v])}},56456:(K,s,_)=>{_.d(s,{u:()=>o});var D=_(62552),M=_(94248);function o({enabled:n}={enabled:!0}){const{data:O,isError:i,isLoading:P}=(0,M.n)(void 0,{skip:!n}),l=D.useCallback(L=>{const a=O?.data?.features.find(t=>t.name===L);return a&&"options"in a?a.options:{}},[O]);return{license:O?.data,getFeature:l,isError:i,isLoading:P}}}}]);
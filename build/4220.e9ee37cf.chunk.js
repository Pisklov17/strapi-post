"use strict";(self.webpackChunkuntitled_4=self.webpackChunkuntitled_4||[]).push([[4220],{44220:(Y,m,e)=>{e.r(m),e.d(m,{default:()=>K});var s=e(19968),k=e(62552),D=e(3400),_=e(48112),u=e(28464),E=e(42816),y=e(35676),A=e(5e3),x=e(48936),L=e(63358),T=e(28724),p=e(70996),C=e(35933),R=e(13384),a=e(79632),S=e(53305),j=e(31812),I=e(14632),r=e(48632),t=e(19480),q=e(79804),o=e(52540);const U=[{intlLabel:{id:(0,t.g)("EditForm.inputToggle.label.email"),defaultMessage:"One account per email address"},description:{id:(0,t.g)("EditForm.inputToggle.description.email"),defaultMessage:"Disallow the user to create multiple accounts using the same email address with different authentication providers."},name:"unique_email",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,t.g)("EditForm.inputToggle.label.sign-up"),defaultMessage:"Enable sign-ups"},description:{id:(0,t.g)("EditForm.inputToggle.description.sign-up"),defaultMessage:"When disabled (OFF), the registration process is forbidden. No one can subscribe anymore no matter the used provider."},name:"allow_register",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,t.g)("EditForm.inputToggle.label.email-reset-password"),defaultMessage:"Reset password page"},description:{id:(0,t.g)("EditForm.inputToggle.description.email-reset-password"),defaultMessage:"URL of your application's reset password page."},placeholder:{id:(0,t.g)("EditForm.inputToggle.placeholder.email-reset-password"),defaultMessage:"ex: https://youtfrontend.com/reset-password"},name:"email_reset_password",type:"text",size:{col:6,xs:12}},{intlLabel:{id:(0,t.g)("EditForm.inputToggle.label.email-confirmation"),defaultMessage:"Enable email confirmation"},description:{id:(0,t.g)("EditForm.inputToggle.description.email-confirmation"),defaultMessage:"When enabled (ON), new registered users receive a confirmation email."},name:"email_confirmation",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,t.g)("EditForm.inputToggle.label.email-confirmation-redirection"),defaultMessage:"Redirection url"},description:{id:(0,t.g)("EditForm.inputToggle.description.email-confirmation-redirection"),defaultMessage:"After you confirmed your email, choose where you will be redirected."},placeholder:{id:(0,t.g)("EditForm.inputToggle.placeholder.email-confirmation-redirection"),defaultMessage:"ex: https://youtfrontend.com/email-confirmation"},name:"email_confirmation_redirection",type:"text",size:{col:6,xs:12}}],M=new RegExp("(^$)|((.+:\\/\\/.*)(d*)\\/?(.*))"),W=o.kt().shape({email_confirmation_redirection:o.Er().when("email_confirmation",{is:!0,then:o.Qb().matches(M).required(),otherwise:o.Qb().nullable()}),email_reset_password:o.Qb(a.aO.string).matches(M,a.aO.regex).nullable()}),K=()=>(0,s.jsx)(a.rF,{permissions:t.P.readAdvancedSettings,children:(0,s.jsx)(B,{})}),B=()=>{const{formatMessage:d}=(0,I.c)(),l=(0,a.eo)(),{lockApp:b,unlockApp:f}=(0,a.H6)(),{notifyStatus:F}=(0,D.O)(),Q=(0,r.useQueryClient)(),{get:z,put:N}=(0,a.Qn)(),{formatAPIError:w}=(0,a.An)();(0,a.G0)();const{isLoading:H,allowedActions:{canUpdate:h}}=(0,a.aU)({update:t.P.updateAdvancedSettings}),{isLoading:G,data:v}=(0,r.useQuery)(["users-permissions","advanced"],async()=>{const{data:n}=await z("/users-permissions/advanced");return n},{onSuccess(){F(d({id:(0,t.g)("Form.advancedSettings.data.loaded"),defaultMessage:"Advanced settings data has been loaded"}))},onError(){l({type:"warning",message:{id:(0,t.g)("notification.error"),defaultMessage:"An error occured"}})}}),J=H||G,O=(0,r.useMutation)(n=>N("/users-permissions/advanced",n),{async onSuccess(){await Q.invalidateQueries(["users-permissions","advanced"]),l({type:"success",message:{id:(0,t.g)("notification.success.saved"),defaultMessage:"Saved"}}),f()},onError(n){l({type:"warning",message:w(n)}),f()},refetchActive:!0}),{isLoading:V}=O,X=async n=>{b(),O.mutate({...n,email_confirmation_redirection:n.email_confirmation?n.email_confirmation_redirection:""})};return J?(0,s.jsxs)(_.G,{"aria-busy":"true",children:[(0,s.jsx)(a.K8,{name:d({id:(0,t.g)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),(0,s.jsx)(u.a,{title:d({id:(0,t.g)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),(0,s.jsx)(E.S,{children:(0,s.jsx)(a.Wm,{})})]}):(0,s.jsxs)(_.G,{"aria-busy":V,children:[(0,s.jsx)(a.K8,{name:d({id:(0,t.g)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),(0,s.jsx)(j.QJ,{onSubmit:X,initialValues:v.settings,validateOnChange:!1,validationSchema:W,enableReinitialize:!0,children:({errors:n,values:c,handleChange:P,isSubmitting:Z,dirty:$})=>(0,s.jsxs)(a.QF,{children:[(0,s.jsx)(u.a,{title:d({id:(0,t.g)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"}),primaryAction:(0,s.jsx)(y.Z,{loading:Z,type:"submit",disabled:h?!$:!h,startIcon:(0,s.jsx)(S.c,{}),size:"S",children:d({id:"global.save",defaultMessage:"Save"})})}),(0,s.jsx)(E.S,{children:(0,s.jsx)(A.k,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7,children:(0,s.jsxs)(x.C,{direction:"column",alignItems:"stretch",gap:4,children:[(0,s.jsx)(L.O,{variant:"delta",as:"h2",children:d({id:"global.settings",defaultMessage:"Settings"})}),(0,s.jsxs)(T.y,{gap:6,children:[(0,s.jsx)(p.C,{col:6,s:12,children:(0,s.jsx)(C.M,{label:d({id:(0,t.g)("EditForm.inputSelect.label.role"),defaultMessage:"Default role for authenticated users"}),value:c.default_role,hint:d({id:(0,t.g)("EditForm.inputSelect.description.role"),defaultMessage:"It will attach the new authenticated user to the selected role."}),onChange:i=>P({target:{name:"default_role",value:i}}),children:v.roles.map(i=>(0,s.jsx)(R.c,{value:i.type,children:i.name},i.type))})}),U.map(i=>{let g=c[i.name];return g||(g=i.type==="bool"?!1:""),(0,s.jsx)(p.C,{...i.size,children:(0,s.jsx)(a.u,{...i,value:g,error:n[i.name],disabled:i.name==="email_confirmation_redirection"&&c.email_confirmation===!1,onChange:P})},i.name)})]})]})})})]})})]})}}}]);

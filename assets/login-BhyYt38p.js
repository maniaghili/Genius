import{r as n,a as g,u as h,j as e,H as p,L as d,l as f,o as b,s as j,b as v}from"./index-Dsj8QEHm.js";import{u as y,h as N}from"./registerfuncs-Dif8EBeu.js";const M=n.memo(()=>{const t=g(),a=n.useContext(h),{register:l,handleSubmit:i,formState:{errors:s}}=y(),c=o=>{const x={identifier:o.userNic,password:o.userPass};f.post("https://academic.liara.run/v1/auth/login",x).then(m=>{N(m.data),b().then(r=>{r&&(a.setUserInfo(r[0]),a.setUserToken(r[1]),r[0].role==="ADMIN"&&j({title:"آیا میخواهید به پنل ادمین بروید؟",icon:"info",buttons:["خیر","بله"]}).then(u=>{u?alert("هنوز تکمیل نشده"):t("/")}),t("/"))})}).catch(()=>{v("ناموفق","نام کاربری یا رمز ورود اشتباه است ","red")})};return e.jsxs(e.Fragment,{children:[e.jsx(p,{}),e.jsx("div",{className:"h-screen flex items-start justify-center bg-background p-5",children:e.jsxs("div",{className:"w-full max-w-sm space-y-5  rounded-2xl",children:[e.jsxs("div",{className:"bg-gradient-to-b from-secondary bg-gray-100 dark:text-gray-300 dark:bg-gray-900 to-background rounded-3xl space-y-5 px-5 pb-5",children:[e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-b-3xl space-y-2 p-5",children:e.jsxs(d,{to:"./home.html",className:"inline-flex items-center gap-2 text-primary",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6 text-blue-600",children:[e.jsx("path",{d:"M12 .75a8.25 8.25 0 0 0-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 0 0 .577.706c.352.083.71.148 1.074.195.323.041.6-.218.6-.544v-4.661a6.714 6.714 0 0 1-.937-.171.75.75 0 1 1 .374-1.453 5.261 5.261 0 0 0 2.626 0 .75.75 0 1 1 .374 1.452 6.712 6.712 0 0 1-.937.172v4.66c0 .327.277.586.6.545.364-.047.722-.112 1.074-.195a.75.75 0 0 0 .577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0 0 12 .75Z"}),e.jsx("path",{"fill-rule":"evenodd",d:"M9.013 19.9a.75.75 0 0 1 .877-.597 11.319 11.319 0 0 0 4.22 0 .75.75 0 1 1 .28 1.473 12.819 12.819 0 0 1-4.78 0 .75.75 0 0 1-.597-.876ZM9.754 22.344a.75.75 0 0 1 .824-.668 13.682 13.682 0 0 0 2.844 0 .75.75 0 1 1 .156 1.492 15.156 15.156 0 0 1-3.156 0 .75.75 0 0 1-.668-.824Z","clip-rule":"evenodd"})]}),e.jsxs("span",{className:"flex flex-col items-start",children:[e.jsx("span",{className:"font-semibold text-sm text-muted",children:"آکــــادمـــی"}),e.jsx("span",{className:"font-bold text-xl  text-blue-600",children:"نـــابــــغه"})]})]})}),e.jsxs("form",{action:"#",className:"space-y-3",onSubmit:i(c),children:[e.jsxs("div",{className:"flex items-center ",children:[e.jsx("div",{className:"font-bold text-[12px]",children:"حساب کاربری ندارید؟"}),e.jsx(d,{to:"/register",className:"font-bold text-[12px] text-blue-600",children:"ثبت نام"})]}),e.jsxs("div",{className:"flex items-center justify-start relative flex-col gap-3 ",children:[e.jsx("input",{type:"text",...l("userNic",{required:"حداقل 5 رقم الزامیست",minLength:{value:5,message:"حداقل 5 رقم الزامیست"}}),placeholder:"نام کاربری یا ایمیل خود را وارد نمایید",dir:"ltr",className:"bg-gray-50 dark:bg-gray-800 dark:border-gray-700 border form-input w-full h-11 !ring-0 !ring-offset-0 bg-secondary border-border focus:border-border rounded-xl text-sm text-foreground placeholder:text-right px-5"}),s.userNic&&e.jsx("span",{className:"text-red-600 w-full text-[10px]",children:s.userNic.message}),e.jsx("input",{type:"text",...l("userPass",{required:"حداقل 8 رقم الزامیست",minLength:{value:8,message:"حداقل 8 رقم الزامیست"}}),placeholder:"رمز عبور خود را وارد نمایید",dir:"ltr",className:"bg-gray-50 dark:bg-gray-800 dark:border-gray-700 border form-input w-full h-11 !ring-0 !ring-offset-0 bg-secondary border-border focus:border-border rounded-xl text-sm text-foreground placeholder:text-right px-5"}),s.userPass&&e.jsx("span",{className:"text-red-600 w-full text-[10px]",children:s.userPass.message})]}),e.jsxs("button",{type:"submit",className:"flex text-white items-center justify-center gap-1 w-full h-10 bg-blue-700 rounded-full text-primary-foreground transition-all hover:opacity-80 px-4",children:[e.jsx("span",{className:"font-semibold  text-sm",children:"برو بریم"}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-5 h-5",children:e.jsx("path",{"fill-rule":"evenodd",d:"M14.78 14.78a.75.75 0 0 1-1.06 0L6.5 7.56v5.69a.75.75 0 0 1-1.5 0v-7.5A.75.75 0 0 1 5.75 5h7.5a.75.75 0 0 1 0 1.5H7.56l7.22 7.22a.75.75 0 0 1 0 1.06Z","clip-rule":"evenodd"})})]})]})]}),e.jsx("div",{className:"bg-gray-100 dark:text-gray-300 dark:bg-gray-800 rounded-xl space-y-5 p-5",children:e.jsxs("div",{className:"font-medium text-xs text-center text-muted",children:["ورود شما به معنای پذیرش ",e.jsx("a",{href:"#",className:"text-foreground transition-colors hover:text-primary hover:underline",children:"شرایط"})," و",e.jsx("a",{href:"#",className:"text-foreground transition-colors hover:text-primary hover:underline",children:"قوانین حریم خصوصی"})," است."]})})]})})]})});export{M as default};

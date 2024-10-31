(()=>{"use strict";const e=window.React,t=window.wp.i18n,a=window.wp.element,s=window.wc.wcBlocksRegistry,n=window.wp.htmlEntities,o=window.wc.wcSettings,r=s=>{const{eventRegistration:n,emitResponse:o,issuers:r}=s,{onPaymentProcessing:c}=n,[p,i]=(0,a.useState)(""),w=r.map((t=>(0,e.createElement)("option",{value:t.id,key:t.id},t.name)));return(0,a.useEffect)((()=>{const e=c((async()=>""===p?{type:o.responseTypes.ERROR,message:(0,t.__)("Please select your bank","paypro-gateways-woocommerce")}:{type:o.responseTypes.SUCCESS,meta:{paymentMethodData:{selected_issuer:p}}}));return()=>{e()}}),[o.responseTypes.ERROR,o.responseTypes.SUCCESS,c,p]),(0,e.createElement)("select",{onChange:e=>{i(e.target.value)}},(0,e.createElement)("option",{value:""}),w)},c=()=>"",p=t=>(0,e.createElement)("span",{className:"pp-woocommerce-label"},t.title,(0,e.createElement)("img",{className:"pp-woocommerce-icon",src:t.iconUrl,alt:t.title}));["paypro_wc_gateway_ideal","paypro_wc_gateway_idealqr","paypro_wc_gateway_paypal","paypro_wc_gateway_mistercash","paypro_wc_gateway_afterpay","paypro_wc_gateway_banktransfer","paypro_wc_gateway_sofort","paypro_wc_gateway_mastercard","paypro_wc_gateway_visa"].forEach((t=>{const a=(0,o.getSetting)(`${t}_data`,{}),i=(0,n.decodeEntities)(a.title);let w;w="paypro_wc_gateway_ideal"==t?(0,e.createElement)(r,{issuers:a.issuers}):(0,e.createElement)(c,null);const l={name:t,label:(0,e.createElement)(p,{title:i,iconUrl:a.iconUrl}),content:w,edit:w,canMakePayment:()=>!0,ariaLabel:i,supports:{features:a.supports}};(0,s.registerPaymentMethod)(l)}))})();
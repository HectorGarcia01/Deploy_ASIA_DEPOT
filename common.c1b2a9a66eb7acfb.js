"use strict";(self.webpackChunkFrontend_ASIA_DEPOT=self.webpackChunkFrontend_ASIA_DEPOT||[]).push([[592],{3809:(d,a,i)=>{i.d(a,{M:()=>u});var n=i(529),s=i(8256),c=i(9616);let u=(()=>{class h{constructor(t,e){this.http=t,this.authService=e}getProducts(t,e,r){let o=new n.LE;return e&&r&&(o=o.set("page",e.toString()).set("pageSize",r.toString())),this.http.get(t,{params:o})}addFavoriteProduct(t,e){const r=this.authService.getCookieAuth(),o=new n.WM({Authorization:`Bearer ${r}`});return this.http.post(t=`${t}/${e}`,null,{headers:o})}getFavoriteProducts(t){const e=this.authService.getCookieAuth(),r=new n.WM({Authorization:`Bearer ${e}`});return this.http.get(t,{headers:r})}deleteFavoriteProduct(t,e){const r=this.authService.getCookieAuth(),o=new n.WM({Authorization:`Bearer ${r}`});return this.http.delete(t=`${t}/${e}`,{headers:o})}getProductId(t){return this.http.get(t)}}return h.\u0275fac=function(t){return new(t||h)(s.LFG(n.eN),s.LFG(c.e))},h.\u0275prov=s.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},8104:(d,a,i)=>{i.d(a,{Y:()=>u});var n=i(529),s=i(8256),c=i(9616);let u=(()=>{class h{constructor(t,e){this.http=t,this.authService=e}addReview(t,e){const r=this.authService.getCookieAuth(),o=new n.WM({Authorization:`Bearer ${r}`});return this.http.post(t,e,{headers:o})}getReviews(t,e){return this.http.get(t=`${t}/${e}`)}getAllReviews(t){return this.http.get(t)}}return h.\u0275fac=function(t){return new(t||h)(s.LFG(n.eN),s.LFG(c.e))},h.\u0275prov=s.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},3650:(d,a,i)=>{i.d(a,{F:()=>u});var n=i(529),s=i(8256),c=i(9616);let u=(()=>{class h{constructor(t,e){this.http=t,this.authService=e}addProductCart(t,e){const r=this.authService.getCookieAuth(),o=new n.WM({Authorization:`Bearer ${r}`});return this.http.post(t,e,{headers:o})}getShoppingCart(t){const e=this.authService.getCookieAuth(),r=new n.WM({Authorization:`Bearer ${e}`});return this.http.get(t,{headers:r})}updateProductCart(t,e){const r=this.authService.getCookieAuth(),o=new n.WM({Authorization:`Bearer ${r}`});return this.http.patch(t,e,{headers:o})}deleteProductCart(t,e){const r=this.authService.getCookieAuth(),o=new n.WM({Authorization:`Bearer ${r}`});return this.http.delete(t=`${t}/${e}`,{headers:o})}deleteShoppingCart(t){const e=this.authService.getCookieAuth(),r=new n.WM({Authorization:`Bearer ${e}`});return this.http.delete(t,{headers:r})}getShipmentInformation(t){const e=this.authService.getCookieAuth(),r=new n.WM({Authorization:`Bearer ${e}`});return this.http.get(t,{headers:r})}processSale(t,e){const r=this.authService.getCookieAuth(),o=new n.WM({Authorization:`Bearer ${r}`});return this.http.patch(t,e,{headers:o})}getShoppingHistory(t){const e=this.authService.getCookieAuth(),r=new n.WM({Authorization:`Bearer ${e}`});return this.http.get(t,{headers:r})}cancelCustomerSaleId(t,e){const r=this.authService.getCookieAuth(),o=new n.WM({Authorization:`Bearer ${r}`});return this.http.delete(t=`${t}/${e}`,{headers:o})}shoppingHistoryId(t,e){const r=this.authService.getCookieAuth(),o=new n.WM({Authorization:`Bearer ${r}`});return this.http.get(t=`${t}/${e}`,{headers:o})}}return h.\u0275fac=function(t){return new(t||h)(s.LFG(n.eN),s.LFG(c.e))},h.\u0275prov=s.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()}}]);
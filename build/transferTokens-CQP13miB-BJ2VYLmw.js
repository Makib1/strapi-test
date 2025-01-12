import{aM as s}from"./strapi-C4Iwt-vC.js";const t=s.enhanceEndpoints({addTagTypes:["TransferToken"]}).injectEndpoints({endpoints:n=>({regenerateToken:n.mutation({query:e=>({method:"POST",url:`${e}/regenerate`}),transformResponse:e=>e.data}),getTransferTokens:n.query({query:()=>({url:"/admin/transfer/tokens",method:"GET"}),transformResponse:e=>e.data,providesTags:(e,a)=>[...e?.map(({id:r})=>({type:"TransferToken",id:r}))??[],{type:"TransferToken",id:"LIST"}]}),getTransferToken:n.query({query:e=>`/admin/transfer/tokens/${e}`,transformResponse:e=>e.data,providesTags:(e,a,r)=>[{type:"TransferToken",id:r}]}),createTransferToken:n.mutation({query:e=>({url:"/admin/transfer/tokens",method:"POST",data:e}),transformResponse:e=>e.data,invalidatesTags:[{type:"TransferToken",id:"LIST"}]}),deleteTransferToken:n.mutation({query:e=>({url:`/admin/transfer/tokens/${e}`,method:"DELETE"}),transformResponse:e=>e.data,invalidatesTags:(e,a,r)=>[{type:"TransferToken",id:r}]}),updateTransferToken:n.mutation({query:({id:e,...a})=>({url:`/admin/transfer/tokens/${e}`,method:"PUT",data:a}),transformResponse:e=>e.data,invalidatesTags:(e,a,{id:r})=>[{type:"TransferToken",id:r}]})}),overrideExisting:!1}),{useGetTransferTokensQuery:T,useGetTransferTokenQuery:d,useCreateTransferTokenMutation:f,useDeleteTransferTokenMutation:i,useUpdateTransferTokenMutation:u,useRegenerateTokenMutation:k}=t;export{f as a,u as b,T as c,i as d,k as e,d as u};

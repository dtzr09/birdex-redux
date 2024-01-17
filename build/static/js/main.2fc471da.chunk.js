(this.webpackJsonpbirdex=this.webpackJsonpbirdex||[]).push([[0],{295:function(e,t,n){},296:function(e,t,n){},300:function(e,t,n){},306:function(e,t,n){},307:function(e,t,n){},414:function(e,t,n){},419:function(e,t,n){"use strict";n.r(t);var i,a,r,c,s,o,d,l=n(0),p=n.n(l),h=n(51),b=n.n(h),j=(n(295),n(296),n(16)),x=n(8),u=n(9),g=u.a.div(i||(i=Object(x.a)(["\n  width: 100%;\n"]))),m=u.a.div(a||(a=Object(x.a)(["\n  position: relative;\n  max-width: 100vw;\n  max-height: 790px;\n  z-index: 1;\n"]))),O=u.a.div(r||(r=Object(x.a)(["\n  width: 100%;\n"]))),f=u.a.div(c||(c=Object(x.a)(['\n  background-color: transparent;\n  display: flex;\n  padding: 40px;\n  width: 500px;\n  margin-left: auto;\n  margin-right: auto;\n  justify-content: center;\n\n  //Styling the input field\n  [type="text"] {\n    padding: 5px;\n  }\n\n  @media (min-width: 320px) and (max-width: 568px) {\n    padding: 0px;\n    margin: 0px;\n    padding-top: 10px;\n    width: 100vw;\n    text-align: center;\n  }\n']))),w=u.a.div(s||(s=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),v=u.a.h3(o||(o=Object(x.a)(["\n  font-size: 18px;\n  color: white;\n  margin-bottom: 10px;\n  font-size: 20px;\n\n  @media (min-width: 320px) and (max-width: 568px) {\n    font-size: 18px;\n  }\n"]))),y=u.a.input(d||(d=Object(x.a)(["\n  opacity: 0.7;\n  border-radius: 10px;\n  border: none;\n  outline: none;\n  width: 300px;\n  height: 30px;\n\n  @media (min-width: 320px) and (max-width: 568px) {\n    width: 250px;\n    height: 30px;\n    border-radius: 5px;\n  }\n"]))),k=n(1);var C=function(e){var t=e.value,n=e.handleChange;return Object(k.jsx)("div",{children:Object(k.jsx)(f,{children:Object(k.jsxs)(w,{children:[Object(k.jsx)(v,{children:" Search by name "}),Object(k.jsx)(y,{type:"text",value:t,onChange:n})]})})})},S=n(34),_=n(432),A=n(438),N=n(223);n(300);var z=function(e){var t=e.results;return Object(k.jsx)("div",{children:Object(k.jsx)(_.a,{className:"card--container--search",children:t.map((function(e){return Object(k.jsxs)(A.a,{className:"CardStyle--search",as:S.b,to:"/species/".concat(e.name),children:[Object(k.jsx)(N.a,{className:"CardStyle__img--search",src:e.img}),Object(k.jsx)(A.a.Content,{className:"CardStyle--content--search",children:Object(k.jsx)(A.a.Header,{children:e.name})})]},e.id)}))})})},B=(n(306),n(18));var D=function(){var e=Object(B.c)((function(e){return e.species})).map((function(e){return Object(k.jsxs)(A.a,{className:"CardStyle",as:S.b,to:"/species/".concat(e.name),children:[Object(k.jsx)("div",{className:"image--wrapper",children:Object(k.jsx)(N.a,{className:"CardStyle__img",src:e.img})}),Object(k.jsx)(A.a.Content,{className:"CardStyle--content",children:Object(k.jsx)(A.a.Header,{children:e.name})})]},e.id)}));return Object(k.jsx)("div",{className:"TotalContainer",children:Object(k.jsx)(_.a,{className:"card--container",children:e})})};var M,E,W,R,H=function(){var e=Object(B.c)((function(e){return e.species})),t=Object(l.useState)(""),n=Object(j.a)(t,2),i=n[0],a=n[1],r=e.filter((function(e){return""===i&&i.length>3||e.name.toLowerCase().includes(i.toLowerCase())?e:void 0}));return Object(k.jsx)(g,{children:Object(k.jsx)(m,{children:Object(k.jsxs)(O,{children:[Object(k.jsx)(C,{value:i,handleChange:function(e){return function(e){a(e)}(e.target.value)}}),i?Object(k.jsx)(z,{results:r}):Object(k.jsx)(D,{})]})})})},L=n(437),T=n(433),V=n(436),I=n(434),P=n(420),F=n(48),G=n(62),U=[{id:1,name:"American Robin",description:"The quintessential early bird, American Robins are common sights on lawns across North America, where you often see them tugging earthworms out of the ground. Robins are popular birds for their warm orange breast, cheery song, and early appearance at the end of winter. Though they\u2019re familiar town and city birds, American Robins are at home in wilder areas, too, including mountain forests and Alaskan wilderness",img:"https://www.allaboutbirds.org/guide/assets/photo/303441381-480px.jpg"},{id:2,name:"Northern Cardinal",description:"The male Northern Cardinal is perhaps responsible for getting more people to open up a field guide than any other bird. They\u2019re a perfect combination of familiarity, conspicuousness, and style: a shade of red you can\u2019t take your eyes off. Even the brown females sport a sharp crest and warm red accents. Cardinals don\u2019t migrate and they don\u2019t molt into a dull plumage, so they\u2019re still breathtaking in winter\u2019s snowy backyards. In summer, their sweet whistles are one of the first sounds of the morning.",img:"https://www.allaboutbirds.org/guide/assets/photo/297087301-480px.jpg"},{id:3,name:"Blue Jay",description:"This common, large songbird is familiar to many people, with its perky crest; blue, white, and black plumage; and noisy calls. Blue Jays are known for their intelligence and complex social systems with tight family bonds. Their fondness for acorns is credited with helping spread oak trees after the last glacial period.",img:"https://www.allaboutbirds.org/guide/assets/photo/311635911-480px.jpg"},{id:4,name:"American Crow",description:"American Crows are familiar over much of the continent: large, intelligent, all-black birds with hoarse, cawing voices. They are common sights in treetops, fields, and roadsides, and in habitats ranging from open woods and empty beaches to town centers. They usually feed on the ground and eat almost anything\u2014typically earthworms, insects and other small animals, seeds, and fruit; also garbage, carrion, and chicks they rob from nests. Their flight style is unique, a patient, methodical flapping that is rarely broken up with glides.",img:"https://www.allaboutbirds.org/guide/assets/photo/59858041-480px.jpg"},{id:5,name:"Fish Crow",description:"Not everyone realizes it, but there are two kinds of crows across much of the eastern United States. Looking almost identical to the ubiquitous American Crow, Fish Crows are tough to identify until you learn their nasal calls. Look for them around bodies of water, usually in flocks and sometimes with American Crows. They are supreme generalists, eating just about anything they can find. Fish Crows have expanded their range inland and northward along major river systems in recent decades.",img:"https://www.allaboutbirds.org/guide/assets/photo/302400101-480px.jpg"}],q=Object(G.b)({name:"species",initialState:U,reducers:{addSpecies:function(e,t){var n={id:Math.random(),name:t.payload.name,description:t.payload.desc,img:t.payload.img,date:new Date(Date.now()).toLocaleString().split(",")[0]};e.push(n)},deleteSpecies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;return e.filter((function(e){return e.name!==t.payload.name}))},updateSpecies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;return e.map((function(e){return console.log(e)})),Object(F.a)(Object(F.a)({},e),{},{species:e.map((function(e){return e.id===t.payload.id?Object(F.a)(Object(F.a)({},e),{},{description:e.description,img:e.img}):e}))})}}}),J=q.actions,Y=J.addSpecies,Z=J.deleteSpecies,$=J.updateSpecies,K=q.reducer,Q=u.a.div(M||(M=Object(x.a)(["\n  height: 100%;\n  width: 100%;\n  background-color: rgba(49, 103, 70, 0.6);\n  color: c1a673;\n  display: flex;\n  flex-direction: column;\n  padding: 0 10px;\n\n  @media (min-width: 320px) and (max-width: 568px) {\n    width: 100vw;\n    align-items: center;\n    flex-direction: row;\n    justify-content: space-between;\n  }\n"]))),X=Object(u.a)(S.b)(E||(E=Object(x.a)(["\n  padding: 10px;\n  margin-left: 10px;\n  font-size: 35px;\n  text-decoration: none;\n  color: black;\n  cursor: pointer;\n  margin-top: 10px;\n  margin-bottom: 10px;\n\n  &:hover {\n    color: white;\n  }\n\n  @media (min-width: 320px) and (max-width: 568px) {\n    color: white;\n  }\n"]))),ee=u.a.div(W||(W=Object(x.a)(["\n  display: none;\n  background-color: rgb(208, 212, 206);\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  font-size: 22px;\n  text-align: center;\n  justify-content: center;\n\n  @media (min-width: 320px) and (max-width: 568px) {\n    display: block;\n  }\n"]))),te=u.a.button(R||(R=Object(x.a)(["\n  padding: 10px 5px;\n  border-radius: 10px;\n  width: 100%;\n  max-width: 150px;\n  margin-top: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  opacity: 0.7;\n  border: none;\n  cursor: pointer;\n\n  &:hover {\n    opacity: 1;\n  }\n\n  @media (min-width: 320px) and (max-width: 568px) {\n    display: none;\n  }\n"])));var ne,ie=function(){var e=Object(B.c)((function(e){return e.species})),t=Object(B.b)(),n=window.location.pathname,i=Object(l.useState)(!1),a=Object(j.a)(i,2),r=a[0],c=a[1],s=Object(l.useState)(""),o=Object(j.a)(s,2),d=o[0],p=o[1],h=Object(l.useState)(""),b=Object(j.a)(h,2),x=b[0],u=b[1],g=Object(l.useState)(""),m=Object(j.a)(g,2),O=m[0],f=m[1],w=0;return Object(k.jsxs)("div",{children:[Object(k.jsxs)(Q,{children:[Object(k.jsx)(X,{to:"/birdex-redux",children:" BirdDex "}),"/birdex-redux"===n?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(te,{onClick:function(){return c(!r)},children:"Add new species"}),Object(k.jsx)(ee,{onClick:function(){return c(!r)},children:"+"})]}):null]}),Object(k.jsxs)(L.a,{onClose:function(){return c(!1)},onOpen:function(){return c(!0)},open:r,children:[Object(k.jsx)(L.a.Header,{children:"Add New Species"}),Object(k.jsxs)(L.a.Content,{image:!0,children:[Object(k.jsx)(N.a,{size:"large",src:O,wrapped:!0}),Object(k.jsxs)(L.a.Description,{style:{display:"flex",flexDirection:"column",padding:"10px",width:"100%",maxWidth:"350px",marginLeft:"20px"},children:[Object(k.jsx)(T.a,{placeholder:"Name",type:"text",value:d,onChange:function(e){return p(e.target.value)},style:{marginBottom:"20px"}}),Object(k.jsx)(V.a,{children:Object(k.jsx)(I.a,{placeholder:"Description",value:x,onChange:function(e){return u(e.target.value)},style:{marginBottom:"20px",height:"200px"}})}),Object(k.jsx)(T.a,{placeholder:"Image Address",type:"text",value:O,onChange:function(e){return f(e.target.value)}})]})]}),Object(k.jsx)(L.a.Actions,{children:Object(k.jsx)(P.a,{content:"Add",labelPosition:"right",icon:"checkmark",onClick:function(){!function(){for(;w<e.length;w++)return e[w].name!==d||(p(""),u(""),f(""),!1)}()?alert("Species Name Already Exists!"):t(Y({name:d,description:x,img:O})),c(!r)},positive:!0})})]})]})},ae=u.a.div(ne||(ne=Object(x.a)(['\n  display: flex;\n  background: url("https://images.unsplash.com/photo-1455218873509-8097305ee378?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80")\n    center center no-repeat;\n  background-size: cover;\n  min-height: 100%;\n  min-width: 1024px;\n  overflow: hidden;\n\n  /* Set up proportionate scaling */\n  width: 100%;\n  height: auto;\n\n  /* Set up positioning */\n  position: fixed;\n  top: 0;\n  left: 0;\n\n  @media (min-width: 320px) and (max-width: 568px) {\n    overflow-y: scroll;\n    flex-direction: column;\n  }\n'])));var re=function(){return Object(k.jsxs)(ae,{children:[Object(k.jsx)(ie,{}),Object(k.jsx)(H,{})]})},ce=n(15),se=n(222),oe=n.n(se);n(307);var de,le,pe,he,be,je,xe,ue,ge,me=function(e){var t=Object(B.c)((function(e){return e.birds})).map((function(t){if(t.species_id===e.id)return Object(k.jsxs)(A.a,{className:"Card--birdStyle",as:S.b,to:"/birds/".concat(t.name,"/").concat(t.id),children:[Object(k.jsx)("div",{className:"img--wrapper",children:Object(k.jsx)(N.a,{className:"bird__img",src:t.img})}),Object(k.jsx)(A.a.Content,{children:Object(k.jsx)(A.a.Header,{style:{color:"white"},children:t.name})})]},t.id)}));return Object(k.jsxs)("div",{className:"members__wrapper",children:[Object(k.jsx)("h2",{className:"container__title",children:"Members"}),Object(k.jsx)(_.a,{className:"birdStyleContainer",children:t})]})},Oe=n(435),fe=u.a.div(de||(de=Object(x.a)(['\n  display: flex;\n  background: url("https://images.unsplash.com/photo-1455218873509-8097305ee378?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80")\n  center center\n  no-repeat;\n  background-size: cover;\n  width: 100%;\n  height: 100vh;\n']))),we=u.a.div(le||(le=Object(x.a)(["\n  z-index: 1;\n  margin-left: auto;\n  margin-right: auto;\n  overflow: hidden;\n"]))),ve=u.a.div(pe||(pe=Object(x.a)(["\n  background-color: rgba(0,0,0,0.4);\n  max-height: 300px;\n  color: white;\n  width: 1100px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 100px;\n  display: flex;\n  border-radius: 20px;\n"]))),ye=u.a.img(he||(he=Object(x.a)(["\n  object-fit: cover;\n  width: 300px;\n  border-radius: 20px 0 0 20px;\n  background-position: center center;\n"]))),ke=u.a.div(be||(be=Object(x.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  margin-left: 10px;\n"]))),Ce=u.a.h1(je||(je=Object(x.a)(["\n  font-size: 50px;\n  margin-bottom: 20px;\n"]))),Se=u.a.p(xe||(xe=Object(x.a)(["\n  font-size: 16px;\n\n"]))),_e=u.a.button(ue||(ue=Object(x.a)(["\n  position: absolute;\n  right: 0;\n  font-size: 15px;\n  background-color: red;\n  color: white;\n  padding: 5px;\n  border: none;\n  margin: 10px;\n  cursor: pointer;\n  border-radius: 5px;\n"]))),Ae=(u.a.button(ge||(ge=Object(x.a)(["\n  position: absolute;\n  right: 10%;\n  font-size: 15px;\n  color: white;\n  padding: 5px;\n  border: none;\n  margin: 10px;\n  cursor: pointer;\n  border-radius: 5px;\n"]))),[{id:1,species_id:1,name:"Tom",sex:"M",species:"American Robin",weights:[{weight:"20",created_at:"1/1/2000"},{weight:"50",created_at:"1/2/2000"},{weight:"80",created_at:"1/3/2000"}],img:"https://www.allaboutbirds.org/guide/assets/photo/59858031-480px.jpg"},{id:2,species_id:1,name:"Mary",sex:"M",species:"American Robin",weights:[{weight:"20",created_at:"1/1/2000"}],img:"https://www.allaboutbirds.org/guide/assets/photo/303441871-240px.jpg"},{id:3,species_id:1,name:"John",sex:"M",species:"American Robin",weights:[{weight:"20",created_at:"1/1/2000"}],img:"https://www.allaboutbirds.org/guide/assets/photo/60412921-1280px.jpg"},{id:4,species_id:1,name:"Harry",sex:"M",species:"American Robin",weights:[{weight:"25",created_at:"1/1/2000"}],img:"https://www.allaboutbirds.org/guide/assets/photo/60412941-240px.jpg"}]),Ne=Object(G.b)({name:"birds",initialState:Ae,reducers:{addBird:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0,n={id:t.payload.id,species_id:t.payload.speciesId,name:t.payload.name,sex:t.payload.sex,species:t.payload.species,weights:[{weight:t.payload.weight,created_at:new Date(Date.now()).toLocaleString().split(",")[0]}],img:t.payload.img};e.push(n)},deletebird:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,n=arguments.length>1?arguments[1]:void 0;for(e=0;e<t.length;e++)t[e].id===n.payload.id&&(t.splice(e,1),e--);return t}}}),ze=Ne.actions,Be=ze.addBird,De=ze.deletebird,Me=Ne.reducer;var Ee,We,Re,He,Le,Te,Ve,Ie,Pe,Fe,Ge,Ue,qe,Je,Ye,Ze,$e,Ke,Qe,Xe,et,tt=function(e){var t,n,i,a,r,c=e.match,s=Object(B.b)(),o=Object(ce.e)(),d=Object(B.c)((function(e){return e.species})),p=Object(B.c)((function(e){return e.birds})),h=c.params.name;for(t=0;t<d.length;t++)d[t].name===h&&(i=d[t].id,n=d[t].description,a=d[t].img,r=d[t].name);var b,x,u=Object(l.useState)(!1),g=Object(j.a)(u,2),m=g[0],O=g[1],f=Object(l.useState)(""),w=Object(j.a)(f,2),v=w[0],y=w[1],C=Object(l.useState)(""),S=Object(j.a)(C,2),_=S[0],A=S[1],z={id:i,name:r,description:v,img:_},D=Object(l.useState)(0),M=Object(j.a)(D,2),E=M[0],W=M[1],R=Object(l.useState)(!1),H=Object(j.a)(R,2),F=H[0],G=H[1],U=Object(l.useState)(""),q=Object(j.a)(U,2),J=q[0],Y=q[1],K=Object(l.useState)(""),Q=Object(j.a)(K,2),X=Q[0],ee=Q[1],te=Object(l.useState)(""),ne=Object(j.a)(te,2),ae=ne[0],re=ne[1],se=[];for(x=0;x<p.length;x++)p[x].species===r&&se.push(p[x].name);return Object(k.jsxs)(fe,{children:[Object(k.jsx)(ie,{}),Object(k.jsx)(_e,{onClick:function(){s(Z({name:r})),o.push("/birdex-redux")},children:"Delete Species"}),Object(k.jsxs)(we,{children:[Object(k.jsxs)(ve,{children:[Object(k.jsx)(ye,{src:a}),Object(k.jsxs)(ke,{children:[Object(k.jsx)(Ce,{children:r}),Object(k.jsx)(Se,{children:n})]})]}),Object(k.jsx)("button",{className:"AddBirdButton",onClick:function(){return G(!F)},children:"Add New Bird"}),null!==i&&null!==r&&null!==a?Object(k.jsx)(me,{id:i}):null]},i),Object(k.jsxs)(L.a,{size:"large",onClose:function(){return O(!1)},onOpen:function(){return O(!0)},open:m,trigger:Object(k.jsx)(P.a,{className:"update--showmodal--button",style:{position:"absolute",right:0,margin:"130px 100px 130px 130px",cursor:"pointer",zIndex:999},children:"Update Species"}),children:[Object(k.jsx)(L.a.Header,{children:"Update Species"}),Object(k.jsxs)(L.a.Content,{image:!0,children:[Object(k.jsx)(N.a,{size:"large",src:_,wrapped:!0}),Object(k.jsxs)(L.a.Description,{style:{display:"flex",flexDirection:"column",width:"100%"},children:[Object(k.jsx)(V.a,{children:Object(k.jsx)(I.a,{placeholder:"Enter description",defaultValue:n||v,onChange:function(e){return y(e.target.value)},style:{marginBottom:"30px",height:"150px",width:"100%"}})}),Object(k.jsx)(T.a,{placeholder:"Enter Image Address",defaultValue:a||_,onChange:function(e){return A(e.target.value)}})]})]}),Object(k.jsx)(L.a.Actions,{children:Object(k.jsx)(P.a,{content:"Update",labelPosition:"right",icon:"checkmark",onClick:function(){""===v?y(n):""===_?A(a):(s($(z)),o.go(0))},positive:!0})})]}),Object(k.jsxs)(L.a,{onClose:function(){return G(!1)},onOpen:function(){return G(!0)},open:F,children:[Object(k.jsx)(L.a.Header,{children:"Add New Bird"}),Object(k.jsxs)(L.a.Content,{image:!0,children:[Object(k.jsx)(N.a,{size:"large",src:X,wrapped:!0}),Object(k.jsxs)(L.a.Description,{style:{display:"flex",flexDirection:"column",padding:"10px",width:"100%",maxWidth:"350px",marginLeft:"20px"},children:[Object(k.jsx)(T.a,{placeholder:"Name",type:"text",value:J,onChange:function(e){return Y(e.target.value)},style:{marginBottom:"20px"}}),Object(k.jsx)(T.a,{placeholder:"Sex",type:"text",value:ae,onChange:function(e){return re(e.target.value)},style:{marginBottom:"20px"}}),Object(k.jsx)(T.a,{placeholder:"Image Address",type:"text",value:X,onChange:function(e){return ee(e.target.value)}}),Object(k.jsx)(T.a,{type:"number",label:Object(k.jsx)(Oe.a,{defaultValue:"int",options:[{key:"integer",text:"integer",value:"integer"},{key:"decimals",text:"decimals",value:"decimals"}]}),labelPosition:"right",placeholder:"Enter weight",value:E,onChange:function(e){return W(e.target.value)},style:{marginTop:"20px"}})]})]}),Object(k.jsx)(L.a.Actions,{children:Object(k.jsx)(P.a,{content:"Add",labelPosition:"right",icon:"checkmark",onClick:function(){!function(){for(b=0;b<se.length;b++)return se[b]!==J&&""!==J&&""!==X&&0!==E&&"M"===ae.toUpperCase()||(Y(""),ee(""),re(""),W(0),!1)}()?alert("ERROR: Either bird name already exists, there are blank input fields or weight input is invalid."):(s(Be({id:Math.random(),speciesId:i,name:J,sex:ae.toUpperCase(),species:r,img:X,weight:E})),G(!F),o.go(0))},positive:!0})})]})]})},nt=n(101),it=u.a.div(Ee||(Ee=Object(x.a)(['\n  display: flex;\n  background: url("https://images.unsplash.com/photo-1455218873509-8097305ee378?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80")\n    center center no-repeat;\n  background-size: cover;\n  height: 100vh;\n']))),at=Object(u.a)(S.b)(We||(We=Object(x.a)(["\n  margin-left: 180px;\n  position: absolute;\n  bottom: 0;\n  margin-top: 10px;\n  color: white;\n  font-size: 16px;\n  padding: 10px 10px 10px 30px;\n  text-decoration: none;\n  border-radius: 0 15px 15px 0;\n  padding: 40px;\n  cursor: pointer;\n  opacity: 0.7;\n\n  &:hover {\n    color: white;\n    opacity: 1;\n  }\n"]))),rt=u.a.div(Re||(Re=Object(x.a)(["\n  margin-top: 40px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),ct=u.a.div(He||(He=Object(x.a)(["\n  color: white;\n  width: 100%;\n  justify-content: center;\n  display: flex;\n  align-items: center;\n  border-radius: 30px;\n"]))),st=u.a.div(Le||(Le=Object(x.a)(["\n  height: 250px;\n  width: 300px;\n  overflow: hidden;\n  background-position: center;\n  border-radius: 20%;\n"]))),ot=u.a.img(Te||(Te=Object(x.a)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]))),dt=u.a.div(Ve||(Ve=Object(x.a)(["\n  background-color: rgba(0, 0, 0, 0.4);\n  border-radius: 20px;\n  height: fit-content;\n  width: 300px;\n  display: flex;\n  text-align: center;\n  align-items: center;\n  flex-direction: column;\n  padding: 20px;\n  margin-left: 10px;\n"]))),lt=u.a.h1(Ie||(Ie=Object(x.a)(["\n  font-size: 50px;\n  margin-bottom: 20px;\n"]))),pt=u.a.p(Pe||(Pe=Object(x.a)(["\n  font-size: 16px;\n  padding: 5px;\n"]))),ht=u.a.p(Fe||(Fe=Object(x.a)(["\n  font-size: 16px;\n  padding: 5px;\n"]))),bt=u.a.p(Ge||(Ge=Object(x.a)(["\n  font-size: 16px;\n  padding: 5px;\n"]))),jt=Object(u.a)(S.b)(Ue||(Ue=Object(x.a)(["\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  margin: 20px;\n  padding: 5px;\n  background-color: white;\n  border-radius: 5px;\n  text-decoration: none;\n  font-size: 18px;\n  cursor: pointer;\n  opacity: 0.7;\n  color: black;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),xt=u.a.button(qe||(qe=Object(x.a)(["\n  position: absolute;\n  right: 0;\n  padding: 5px;\n  color: white;\n  background-color: red;\n  margin: 20px;\n  opacity: 0.8;\n  cursor: pointer;\n  border: none;\n  border-radius: 5px;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),ut=u.a.div(Je||(Je=Object(x.a)(["\n  background-color: rgba(0, 0, 0, 0.6);\n  border: 1px dashed gray;\n  border-radius: 20px;\n  padding: 20px;\n  width: 900px;\n  height: 450px;\n  margin-top: 30px;\n  display: flex;\n"]))),gt=u.a.div(Ye||(Ye=Object(x.a)(["\n  max-width: 70%;\n  width: 100%;\n  height: 400px;\n  margin: 10px;\n"]))),mt=u.a.div(Ze||(Ze=Object(x.a)(["\n  width: 100%;\n  max-width: 30%;\n  height: 400px;\n  margin: 10px;\n  border-right: 1px dashed gray;\n"]))),Ot=u.a.div($e||($e=Object(x.a)(["\n  padding: 60px 0px;\n  display: flex;\n  flex-direction: column;\n  color: white;\n"]))),ft=u.a.h3(Ke||(Ke=Object(x.a)(["\n  font-size: 1.2rem;\n  padding: 5px;\n  margin: 5px;\n  line-height: 30px;\n"]))),wt=u.a.div(Qe||(Qe=Object(x.a)(["\n  width: 80%;\n  height: 80%;\n  margin-top: 40px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),vt=u.a.h1(Xe||(Xe=Object(x.a)(["\n  color: white;\n  font-size: 1.2rem;\n  float: right;\n  cursor: pointer;\n"]))),yt=u.a.h1(et||(et=Object(x.a)(["\n  color: white;\n  font-size: 1.2rem;\n  float: right;\n  cursor: pointer;\n"]))),kt=n(142);var Ct=function(e){var t=e.data;return Object(k.jsx)("div",{children:Object(k.jsx)(kt.a,{data:{labels:t.map((function(e){return e.created_at})),datasets:[{label:"Weight",data:t.map((function(e){return e.weight})),backgroundColor:"rgba(255, 99, 132, 0.2)",borderWidth:1,borderColor:"rgb(255, 99, 132)"}]},height:200,options:{maintainAspectRatio:!0,scales:{xAxes:[{ticks:{maxRotation:90,minRotation:80},gridLines:{offsetGridLines:!0}},{position:"top",ticks:{maxRotation:90,minRotation:80},gridLines:{offsetGridLines:!1}}],yAxes:[{ticks:{beginAtZero:!0}}]}}})})};var St=function(e){var t=e.data;return Object(k.jsx)("div",{children:Object(k.jsx)(kt.b,{data:{labels:t.map((function(e){return e.created_at})),datasets:[{label:"Weight",data:t.map((function(e){return e.weight})),backgroundColor:"rgba(255, 99, 132, 0.2)",borderWidth:1,borderColor:"rgb(255, 99, 132)"}]},height:200,options:{resposive:!0,maintainAspectRatio:!0,scales:{y:{beginAtZero:!0}}}})})};var _t=function(e){var t,n,i,a,r,c,s,o=e.match,d=Object(B.c)((function(e){return e.birds})),p=Object(ce.e)(),h=Object(B.b)();for(t=0;t<d.length;t++)d[t].name===o.params.name&&d[t].id==o.params.birdsid&&(n=d[t].img,i=d[t].name,a=d[t].id,r=d[t].weights,c=d[t].sex,s=d[t].species,d[t].species_id);var b,x=Object.values(r.map((function(e){return e.weight}))),u={avg_weight:parseFloat(nt.c(x)).toFixed(2),min_weights:nt.e(x),max_weights:nt.b(x),median_weights:nt.d(x),weights_dev:parseFloat(nt.a(x)).toFixed(2)},g=Object(l.useState)(!1),m=Object(j.a)(g,2),O=m[0],f=m[1],w=[];for(b=0;b<r.length;b++)w.push({created_at:r[b].created_at,weight:r[b].weight});return Object(k.jsxs)(it,{children:[Object(k.jsx)(ie,{}),Object(k.jsx)(xt,{onClick:function(){h(De({id:a})),p.push("/species/".concat(s))},children:" Delete Bird "}),Object(k.jsxs)(rt,{children:[Object(k.jsxs)(ct,{children:[Object(k.jsx)(st,{children:Object(k.jsx)(ot,{src:n})}),Object(k.jsxs)(dt,{children:[Object(k.jsx)(lt,{children:i}),Object(k.jsxs)(pt,{children:["Species: ",s]}),Object(k.jsxs)(ht,{children:["Sex: ",c]}),Object(k.jsxs)(bt,{children:["Average Weight: ",u.avg_weight,"g"]})]})]}),Object(k.jsxs)(ut,{children:[Object(k.jsx)(mt,{children:Object(k.jsxs)(Ot,{children:[Object(k.jsxs)(ft,{children:["Average Weight: ",u.avg_weight,"g"]}),Object(k.jsxs)(ft,{children:["Minimum Weight: ",u.min_weights,"g"]}),Object(k.jsxs)(ft,{children:["Maximum Weight: ",u.max_weights,"g"]}),Object(k.jsxs)(ft,{children:["Median Weight: ",u.median_weights,"g"]}),Object(k.jsxs)(ft,{children:["Weight Deviation: ",u.weights_dev,"g"]})]})}),Object(k.jsxs)(gt,{children:[Object(k.jsx)(wt,{children:O?Object(k.jsx)(St,{data:w}):Object(k.jsx)(Ct,{data:w})}),O?Object(k.jsx)(yt,{LineActive:!0,onClick:function(){return f(!1)},children:"Bar Chart"}):Object(k.jsx)(vt,{LineActive:!0,onClick:function(){return f(!0)},children:"Line Chart"})]})]})]},a),Object(k.jsx)(at,{onClick:function(){return p.goBack()},children:" Back "}),Object(k.jsx)(jt,{to:"/birds/".concat(i,"/").concat(a,"/").concat(s,"/entries"),children:"View Entries"})]})},At=n(53),Nt=n.n(At),zt=n(221),Bt=n(78),Dt=(n(414),[{id:1,species_id:1,name:"Tom",sex:"M",species:"American Robin",weights:[{weight:"20",created_at:"1/1/2000"},{weight:"50",created_at:"1/2/2000"},{weight:"80",created_at:"1/3/2000"}],img:"https://www.allaboutbirds.org/guide/assets/photo/59858031-480px.jpg"},{id:2,species_id:1,name:"Mary",sex:"M",species:"American Robin",weights:[{weight:"20",created_at:"1/1/2000"}],img:"https://www.allaboutbirds.org/guide/assets/photo/303441871-240px.jpg"},{id:3,species_id:1,name:"John",sex:"M",species:"American Robin",weights:[{weight:"20",created_at:"1/1/2000"}],img:"https://www.allaboutbirds.org/guide/assets/photo/60412921-1280px.jpg"},{id:4,species_id:1,name:"Harry",sex:"M",species:"American Robin",weights:[{weight:"25",created_at:"1/1/2000"}],img:"https://www.allaboutbirds.org/guide/assets/photo/60412941-240px.jpg"}]),Mt=Object(G.b)({name:"entries",initialState:Dt,reducers:{addWeights:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Dt,t=arguments.length>1?arguments[1]:void 0,n={weight:t.payload.weight.toString(),created_at:new Date(Date.now()).toLocaleString().split(",")[0]};e.map((function(e){t.payload.species_name==e.species&&t.payload.name==e.name&&e.weights.push(n)}))}}}),Et=Mt.actions.addWeights,Wt=Mt.reducer;var Rt=function(e){var t=e.match,n=Object(B.c)((function(e){return e.birds})),i=Object(l.useState)(),a=Object(j.a)(i,2),r=a[0],c=a[1],s=Object(B.b)(),o=new Date,d=Object(ce.e)();Object(l.useEffect)((function(){n.map((function(e){e.name===t.params.birdName&&e.species===t.params.species_name&&c(e.weights)}))}),[]);var p=Object(l.useState)(!1),h=Object(j.a)(p,2),b=h[0],x=h[1],u=Object(l.useState)(0),g=Object(j.a)(u,2),m=g[0],O=g[1],f=(o.toLocaleDateString("en-US"),o.toLocaleTimeString("en-US"),Object(l.useState)(!1)),w=Object(j.a)(f,2),v=w[0],y=w[1],C=Object(l.useState)(""),S=Object(j.a)(C,2),_=S[0],A=S[1],N=function(){var e=Object(zt.a)(Nt.a.mark((function e(){return Nt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m<=0?(alert("Incorrect Weight Value!"),O(0)):(s(Et({weight:m,species_name:t.params.species_name,name:t.params.birdName})),console.log(r));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=[{key:"integer",text:"integer",value:"integer"},{key:"decimals",text:"decimals",value:"decimals"}];return Object(k.jsxs)("div",{className:"EntriesContainer",children:[Object(k.jsx)(ie,{}),Object(k.jsx)("div",{className:"EntriesWrapper",children:Object(k.jsx)("div",{children:Object(k.jsxs)("div",{className:"TableContainer",children:[Object(k.jsxs)("div",{className:"HeaderContainer",children:[Object(k.jsx)("div",{children:Object(k.jsx)("p",{children:"TimeStamp"})}),Object(k.jsx)("div",{children:Object(k.jsx)("p",{children:"Weight"})}),Object(k.jsx)("div",{children:Object(k.jsx)("p",{children:"Edit"})}),Object(k.jsx)("div",{children:Object(k.jsx)("p",{children:"Delete"})})]}),Object(k.jsx)("div",{className:"allEntriesContainer",children:null===r||void 0===r?void 0:r.map((function(e,t){return Object(k.jsxs)("div",{className:"EntryContainer",children:[Object(k.jsx)("div",{children:Object(k.jsx)("p",{children:e.created_at})}),Object(k.jsx)("div",{children:Object(k.jsxs)("p",{children:[e.weight,"g"]})}),Object(k.jsx)("div",{children:Object(k.jsx)(Bt.a,{className:"edit-button",name:"edit",size:"large",color:"green",style:{cursor:"pointer"}})}),Object(k.jsx)("div",{children:Object(k.jsx)(Bt.a,{className:"delete-button",name:"delete",size:"large",color:"red",style:{cursor:"pointer"}})})]},e.index)}))})]})})}),Object(k.jsxs)(L.a,{size:"tiny",onClose:function(){return x(!1)},onOpen:function(){return x(!0)},open:b,trigger:Object(k.jsx)(P.a,{className:"showmodal--button",children:"Add New Entry"}),children:[Object(k.jsx)(L.a.Header,{children:"Add New Entry"}),Object(k.jsx)(L.a.Content,{children:Object(k.jsx)(L.a.Description,{children:Object(k.jsx)(T.a,{label:Object(k.jsx)(Oe.a,{defaultValue:"int",options:z}),labelPosition:"right",placeholder:"Enter weight",value:m,onChange:function(e){return O(e.target.value)}})})}),Object(k.jsx)(L.a.Actions,{children:Object(k.jsx)(P.a,{content:"Add",labelPosition:"right",icon:"checkmark",onClick:function(){x(!1),N()},positive:!0})})]}),Object(k.jsxs)(L.a,{size:"tiny",onClose:function(){return y(!1)},onOpen:function(){return y(!0)},open:v,children:[Object(k.jsx)(L.a.Header,{children:" Edit Entry"}),Object(k.jsx)(L.a.Content,{children:Object(k.jsx)(L.a.Description,{children:Object(k.jsx)(T.a,{label:Object(k.jsx)(Oe.a,{defaultValue:"int",options:z}),labelPosition:"right",placeholder:"Enter weight",value:_,onChange:function(e){return A(e.target.value)}})})}),Object(k.jsx)(L.a.Actions,{children:Object(k.jsx)(P.a,{content:"Add",labelPosition:"right",icon:"checkmark",positive:!0})})]}),Object(k.jsx)(P.a,{onClick:function(){return d.goBack()},content:"Back",icon:"left arrow",labelPosition:"left"})]})},Ht=(n(415),oe()());var Lt=function(){return Object(l.useEffect)((function(){document.title="B-xcopedia"}),[]),Object(k.jsx)(ce.b,{history:Ht,children:Object(k.jsxs)(S.a,{children:[Object(k.jsx)(ce.a,{exact:!0,path:"/birdex-redux",children:Object(k.jsx)(re,{})}),Object(k.jsx)(ce.a,{exact:!0,path:"/species/:name",component:tt}),Object(k.jsx)(ce.a,{exact:!0,path:"/birds/:name/:birdsid",component:_t}),Object(k.jsx)(ce.a,{exact:!0,path:"/birds/:birdName/:birdsid/:species_name/entries",component:Rt})]})})},Tt=Object(G.a)({reducer:{species:K,birds:Me,entries:Wt}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));b.a.render(Object(k.jsx)(p.a.StrictMode,{children:Object(k.jsx)(B.a,{store:Tt,children:Object(k.jsx)(Lt,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[419,1,2]]]);
//# sourceMappingURL=main.2fc471da.chunk.js.map
(this.webpackJsonppics=this.webpackJsonppics||[]).push([[0],{25:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(2),s=n.n(r),c=n(17),i=n.n(c),o=(n(25),n(8)),u=n.n(o),l=n(18),h=n(3),p=n(4),m=n(6),b=n(5),d=n(19),j=n.n(d).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID 5Qn9Lo7AMYNz-AbFpnndblrl-qKpNHKT7lawUMZ3wIE"}}),f=(n(44),function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={term:""},e.handleSubmit=function(t){t.preventDefault(),e.props.onSearchSubmit(e.state.term)},e.handleInputChange=function(t){e.setState({term:t.target.value})},e}return Object(p.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"ui segment",children:Object(a.jsx)("form",{onSubmit:this.handleSubmit,className:"ui form",children:Object(a.jsxs)("div",{className:"field",children:[Object(a.jsx)("label",{children:"Image Search"}),Object(a.jsx)("input",{type:"text",value:this.state.term,onChange:this.handleInputChange,placeholder:"What do you want to search about ?"})]})})})}}]),n}(r.Component)),g=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){a.imageRef.current.addEventListener("load",a.setSpans)},a.setSpans=function(){var e=a.imageRef.current.clientHeight,t=Math.ceil(e/10);a.setState({spans:t})},a.state={spans:0},a.imageRef=s.a.createRef(),a}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props.image,t=e.urls,n=e.description;return Object(a.jsx)("div",{style:{gridRowEnd:"span ".concat(this.state.spans)},children:Object(a.jsx)("img",{ref:this.imageRef,src:t.regular,alt:n})})}}]),n}(r.Component),v=(n(45),function(e){var t=e.images.map((function(e){return Object(a.jsx)(g,{image:e},e.id)}));return Object(a.jsx)("div",{className:"images-list",children:t})}),O=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={images:[]},e.onSearchSubmit=function(){var t=Object(l.a)(u.a.mark((function t(n){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.get("/search/photos",{params:{query:n},headers:{Authorization:"Client-ID 5Qn9Lo7AMYNz-AbFpnndblrl-qKpNHKT7lawUMZ3wIE"}});case 2:a=t.sent,e.setState({images:a.data.results});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(p.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"ui container",style:{marginTop:"35px"},children:[Object(a.jsx)(f,{onSearchSubmit:this.onSearchSubmit}),Object(a.jsx)(v,{images:this.state.images})]})}}]),n}(r.Component);i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.dd7ac20f.chunk.js.map
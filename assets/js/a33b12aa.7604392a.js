"use strict";(self.webpackChunkfly_doc=self.webpackChunkfly_doc||[]).push([[83],{339:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var n=r(7462),o=r(3366),s=(r(7294),r(3905)),i=["components"],a={sidebar_position:2},c="Fly \u7c7b",u={unversionedId:"tutorial-architecture/Fly",id:"tutorial-architecture/Fly",isDocsHomePage:!1,title:"Fly \u7c7b",description:"\u670d\u52a1\u5668\u4e3b\u8981\u903b\u8f91\u5982\uff08\u62a5\u6587\u89e3\u6790\uff0c\u62a5\u6587\u62fc\u63a5\uff0c\u8def\u7531\u8bbe\u7f6e\uff09\u90fd\u5728\u6b64\u51fd\u6570\u5185\u5b9e\u73b0:",source:"@site/docs/tutorial-architecture/Fly.md",sourceDirName:"tutorial-architecture",slug:"/tutorial-architecture/Fly",permalink:"/fly-doc/docs/tutorial-architecture/Fly",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tutorial-architecture/Fly.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u603b\u4f53\u601d\u8def",permalink:"/fly-doc/docs/tutorial-architecture/general"},next:{title:"\u8def\u7531\u6a21\u5757",permalink:"/fly-doc/docs/tutorial-architecture/router"}},l=[],d={toc:l};function p(t){var e=t.components,r=(0,o.Z)(t,i);return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"fly-\u7c7b"},"Fly \u7c7b"),(0,s.kt)("p",null,"\u670d\u52a1\u5668\u4e3b\u8981\u903b\u8f91\u5982\uff08\u62a5\u6587\u89e3\u6790\uff0c\u62a5\u6587\u62fc\u63a5\uff0c\u8def\u7531\u8bbe\u7f6e\uff09\u90fd\u5728\u6b64\u51fd\u6570\u5185\u5b9e\u73b0:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"}," socket.on('data', (data) => {\n    const request = requestParser(JSON.stringify(data));\n    const response = ResponseInstance(responseSocket, request);\n    this.CROSEnabled ? response.enableCROS() : '';\n    this.router.handle(request, response);\n});\n")),(0,s.kt)("p",null,"\u8fd9\u91cc\u5c01\u88c5\u4e86\u4e00\u4e0b\uff0clisten\u51fd\u6570\uff0c\u65b9\u4fbf\u8c03\u7528\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"start(port = 80): Promise<void> {\n    this.port = port;\n    this.server.listen(this.port);\n    const server = this.server;\n    return new Promise((resolve) => {\n      server.on('listening', resolve);\n    });\n  }\n")))}p.isMDXComponent=!0}}]);
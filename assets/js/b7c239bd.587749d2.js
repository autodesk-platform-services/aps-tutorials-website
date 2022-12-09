"use strict";(self.webpackChunkaps_tutorials_website=self.webpackChunkaps_tutorials_website||[]).push([[153],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,k=d["".concat(l,".").concat(h)]||d[h]||c[h]||i;return n?r.createElement(k,a(a({ref:t},u),{},{components:n})):r.createElement(k,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},425:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294),o=n(6010);const i="tabItem_Ymn6";function a(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,a),hidden:n},t)}},4259:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(7462),o=n(7294),i=n(6010),a=n(1048),s=n(3609),l=n(1943),p=n(2957);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){const{lazy:t,block:n,defaultValue:a,values:d,groupId:h,className:k}=e,m=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??m.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),f=(0,s.l)(g,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===a?a:a??m.find((e=>e.props.default))?.props.value??m[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:C}=(0,l.U)(),[y,N]=(0,o.useState)(b),v=[],{blockElementScrollPositionUntilNextRender:T}=(0,p.o5)();if(null!=h){const e=w[h];null!=e&&e!==y&&g.some((t=>t.value===e))&&N(e)}const A=e=>{const t=e.currentTarget,n=v.indexOf(t),r=g[n].value;r!==y&&(T(t),N(r),null!=h&&C(h,String(r)))},_=e=>{let t=null;switch(e.key){case"Enter":A(e);break;case"ArrowRight":{const n=v.indexOf(e.currentTarget)+1;t=v[n]??v[0];break}case"ArrowLeft":{const n=v.indexOf(e.currentTarget)-1;t=v[n]??v[v.length-1];break}}t?.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},k)},g.map((e=>{let{value:t,label:n,attributes:a}=e;return o.createElement("li",(0,r.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>v.push(e),onKeyDown:_,onClick:A},a,{className:(0,i.Z)("tabs__item",c,a?.className,{"tabs__item--active":y===t})}),n??t)}))),t?(0,o.cloneElement)(m.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},m.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function h(e){const t=(0,a.Z)();return o.createElement(d,(0,r.Z)({key:String(t)},e))}},415:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294),o=n(4259),i=n(425);function a(e){let{NodeJsVsCode:t,DotNetVsCode:n,DotNetVs2022:a}=e;return r.createElement(o.Z,{groupId:"development-environment"},r.createElement(i.Z,{value:"nodejs-vscode",label:"Node.js & VSCode",default:!0},r.createElement(t,null)),r.createElement(i.Z,{value:"dotnet-vscode",label:".NET 6 & VSCode"},r.createElement(n,null)),r.createElement(i.Z,{value:"dotnet-vs2022",label:".NET 6 & VS2022"},r.createElement(a,null)))}},5547:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>_,frontMatter:()=>C,metadata:()=>N,toc:()=>T});var r=n(7462),o=(n(7294),n(4137)),i=n(415);const a={toc:[]};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create an ",(0,o.kt)("inlineCode",{parentName:"p"},"aps.js")," file under the ",(0,o.kt)("inlineCode",{parentName:"p"},"services")," folder. This is where we will be implementing\nall the APS logic that will be used in different areas of our server application. Let's start\nby adding the following code to the file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="services/aps.js"',title:'"services/aps.js"'},"const APS = require('forge-apis');\nconst { APS_CLIENT_ID, APS_CLIENT_SECRET, APS_CALLBACK_URL, INTERNAL_TOKEN_SCOPES, PUBLIC_TOKEN_SCOPES } = require('../config.js');\n\nconst internalAuthClient = new APS.AuthClientThreeLegged(APS_CLIENT_ID, APS_CLIENT_SECRET, APS_CALLBACK_URL, INTERNAL_TOKEN_SCOPES);\nconst publicAuthClient = new APS.AuthClientThreeLegged(APS_CLIENT_ID, APS_CLIENT_SECRET, APS_CALLBACK_URL, PUBLIC_TOKEN_SCOPES);\n\nconst service = module.exports = {};\n\nservice.getAuthorizationUrl = () => internalAuthClient.generateAuthUrl();\n\nservice.authCallbackMiddleware = async (req, res, next) => {\n    const internalCredentials = await internalAuthClient.getToken(req.query.code);\n    const publicCredentials = await publicAuthClient.refreshToken(internalCredentials);\n    req.session.public_token = publicCredentials.access_token;\n    req.session.internal_token = internalCredentials.access_token;\n    req.session.refresh_token = publicCredentials.refresh_token;\n    req.session.expires_at = Date.now() + internalCredentials.expires_in * 1000;\n    next();\n};\n\nservice.authRefreshMiddleware = async (req, res, next) => {\n    const { refresh_token, expires_at } = req.session;\n    if (!refresh_token) {\n        res.status(401).end();\n        return;\n    }\n\n    if (expires_at < Date.now()) {\n        const internalCredentials = await internalAuthClient.refreshToken({ refresh_token });\n        const publicCredentials = await publicAuthClient.refreshToken(internalCredentials);\n        req.session.public_token = publicCredentials.access_token;\n        req.session.internal_token = internalCredentials.access_token;\n        req.session.refresh_token = publicCredentials.refresh_token;\n        req.session.expires_at = Date.now() + internalCredentials.expires_in * 1000;\n    }\n    req.internalOAuthToken = {\n        access_token: req.session.internal_token,\n        expires_in: Math.round((req.session.expires_at - Date.now()) / 1000)\n    };\n    req.publicOAuthToken = {\n        access_token: req.session.public_token,\n        expires_in: Math.round((req.session.expires_at - Date.now()) / 1000)\n    };\n    next();\n};\n\nservice.getUserProfile = async (token) => {\n    const resp = await new APS.UserProfileApi().getUserProfile(internalAuthClient, token);\n    return resp.body;\n};\n")),(0,o.kt)("p",null,"The code provides a couple of helper functions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"getAuthorizationUrl")," function generates a URL for our users to be redirected to when\ninitiating the 3-legged authentication workflow"),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"authCallbackMiddleware")," function can be used as an Express.js middleware\nwhen the user logs in successfully and is redirected back to our application"),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"authRefreshMiddleware")," function is then used as an Express.js middleware for all requests\nthat will need to make use of the APS access tokens"),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("inlineCode",{parentName:"li"},"getUserProfile")," function returns additional details about the authenticated user based on\nan existing access token")))}s.isMDXComponent=!0;const l={toc:[]};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create an ",(0,o.kt)("inlineCode",{parentName:"p"},"auth.js")," file under the ",(0,o.kt)("inlineCode",{parentName:"p"},"routes")," subfolder with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="routes/auth.js"',title:'"routes/auth.js"'},"const express = require('express');\nconst { getAuthorizationUrl, authCallbackMiddleware, authRefreshMiddleware, getUserProfile } = require('../services/aps.js');\n\nlet router = express.Router();\n\nrouter.get('/api/auth/login', function (req, res) {\n    res.redirect(getAuthorizationUrl());\n});\n\nrouter.get('/api/auth/logout', function (req, res) {\n    req.session = null;\n    res.redirect('/');\n});\n\nrouter.get('/api/auth/callback', authCallbackMiddleware, function (req, res) {\n    res.redirect('/');\n});\n\nrouter.get('/api/auth/token', authRefreshMiddleware, function (req, res) {\n    res.json(req.publicOAuthToken);\n});\n\nrouter.get('/api/auth/profile', authRefreshMiddleware, async function (req, res, next) {\n    try {\n        const profile = await getUserProfile(req.internalOAuthToken);\n        res.json({ name: `${profile.firstName} ${profile.lastName}` });\n    } catch (err) {\n        next(err);\n    }\n});\n\nmodule.exports = router;\n")),(0,o.kt)("p",null,"Here we implement a new Express.js ",(0,o.kt)("a",{parentName:"p",href:"http://expressjs.com/en/4x/api.html#router"},"router"),' that\nwill handle all the authentication-related endpoints. Let\'s "mount" the router to our server\napplication by modifying ',(0,o.kt)("inlineCode",{parentName:"p"},"server.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="server.js"',title:'"server.js"'},"const express = require('express');\nconst session = require('cookie-session');\nconst { PORT, SERVER_SESSION_SECRET } = require('./config.js');\n\nlet app = express();\napp.use(express.static('wwwroot'));\napp.use(session({ secret: SERVER_SESSION_SECRET, maxAge: 24 * 60 * 60 * 1000 }));\n// highlight-start\napp.use(require('./routes/auth.js'));\n// highlight-end\napp.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));\n")),(0,o.kt)("p",null,"The router will now handle the following requests:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /api/auth/login")," will redirect the user to the Autodesk login page"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /api/auth/callback")," is the URL our user will be redirected to after logging in successfully,\nand it is where we're going to generate a new set of tokens for the user"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /api/auth/logout")," will remove any cookie-based session data for the given user, effectively\nlogging the user out of our application"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /api/auth/token")," will generate a public access token that will later be used by the Viewer\nto load our designs"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /api/auth/profile")," will return a simple JSON with additional information about the logged in user")))}p.isMDXComponent=!0;const u={toc:[]};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If the application is still running, restart it (for example, using ",(0,o.kt)("em",{parentName:"p"},"Run > Restart Debugging"),",\nor by clicking the green restart icon), otherwise start it again (using ",(0,o.kt)("em",{parentName:"p"},"Run > Start Debugging"),",\nor by pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"F5"),")."),(0,o.kt)("p",null,"When you navigate to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080/api/auth/login"},"http://localhost:8080/api/auth/login"),"\nin the browser, you should be redirected to Autodesk login page, and after logging in,\nyou should be redirected back to your application, for now simply showing ",(0,o.kt)("inlineCode",{parentName:"p"},"Cannot GET /"),".\nThis is expected as we haven't implemented the ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /")," endpoint yet. However, if you use\nbrowser dev tools and explore the cookies stored by your browser for the ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost")," origin,\nyou'll notice that the application is already storing the authentication data there."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Here's where you can find your website cookies in different browsers:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.chrome.com/docs/devtools/storage/sessionstorage/"},"Chrome")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Tools/Storage_Inspector/Cookies"},"Firefox")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/storage/cookies"},"Edge")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.apple.com/safari/tools/"},"Safari")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Empty Response",src:n(6545).Z,width:"1500",height:"929"})))}c.isMDXComponent=!0;const d={toc:[]};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create an ",(0,o.kt)("inlineCode",{parentName:"p"},"APS.cs")," file under the ",(0,o.kt)("inlineCode",{parentName:"p"},"Models")," subfolder. This is where we will be implementing\nthe APS-specific logic that will be used in different areas of our server application. Let's\nstart by adding the following code to the file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Models/APS.cs"',title:'"Models/APS.cs"'},"using System;\nusing Autodesk.Forge;\n\npublic class Tokens\n{\n    public string InternalToken;\n    public string PublicToken;\n    public string RefreshToken;\n    public DateTime ExpiresAt;\n}\n\npublic partial class APS\n{\n    private readonly string _clientId;\n    private readonly string _clientSecret;\n    private readonly string _callbackUri;\n    private readonly Scope[] InternalTokenScopes = new Scope[] { Scope.DataRead, Scope.ViewablesRead };\n    private readonly Scope[] PublicTokenScopes = new Scope[] { Scope.ViewablesRead };\n\n    public APS(string clientId, string clientSecret, string callbackUri)\n    {\n        _clientId = clientId;\n        _clientSecret = clientSecret;\n        _callbackUri = callbackUri;\n    }\n}\n")),(0,o.kt)("p",null,"Notice that the ",(0,o.kt)("inlineCode",{parentName:"p"},"APS")," class is declared as ",(0,o.kt)("inlineCode",{parentName:"p"},"partial"),". We're going to extend it\nin other ",(0,o.kt)("inlineCode",{parentName:"p"},"*.cs")," files later. An ",(0,o.kt)("inlineCode",{parentName:"p"},"APS")," singleton will then be provided to our server\nthrough ASP.NET's ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-6.0"},"dependency injection"),"."),(0,o.kt)("p",null,"Next, let's create an ",(0,o.kt)("inlineCode",{parentName:"p"},"APS.Auth.cs")," file under the ",(0,o.kt)("inlineCode",{parentName:"p"},"Models")," subfolder with the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Models/APS.Auth.cs"',title:'"Models/APS.Auth.cs"'},'using System;\nusing System.Threading.Tasks;\nusing Autodesk.Forge;\n\npublic partial class APS\n{\n    public string GetAuthorizationURL()\n    {\n        return new ThreeLeggedApi().Authorize(_clientId, "code", _callbackUri, InternalTokenScopes);\n    }\n\n    public async Task<Tokens> GenerateTokens(string code)\n    {\n        dynamic internalAuth = await new ThreeLeggedApi().GettokenAsync(_clientId, _clientSecret, "authorization_code", code, _callbackUri);\n        dynamic publicAuth = await new ThreeLeggedApi().RefreshtokenAsync(_clientId, _clientSecret, "refresh_token", internalAuth.refresh_token, PublicTokenScopes);\n        return new Tokens\n        {\n            PublicToken = publicAuth.access_token,\n            InternalToken = internalAuth.access_token,\n            RefreshToken = publicAuth.refresh_token,\n            ExpiresAt = DateTime.Now.ToUniversalTime().AddSeconds(internalAuth.expires_in)\n        };\n    }\n\n    public async Task<Tokens> RefreshTokens(Tokens tokens)\n    {\n        dynamic internalAuth = await new ThreeLeggedApi().RefreshtokenAsync(_clientId, _clientSecret, "refresh_token", tokens.RefreshToken, InternalTokenScopes);\n        dynamic publicAuth = await new ThreeLeggedApi().RefreshtokenAsync(_clientId, _clientSecret, "refresh_token", internalAuth.refresh_token, PublicTokenScopes);\n        return new Tokens\n        {\n            PublicToken = publicAuth.access_token,\n            InternalToken = internalAuth.access_token,\n            RefreshToken = publicAuth.refresh_token,\n            ExpiresAt = DateTime.Now.ToUniversalTime().AddSeconds(internalAuth.expires_in)\n        };\n    }\n\n    public async Task<dynamic> GetUserProfile(Tokens tokens)\n    {\n        var api = new UserProfileApi();\n        api.Configuration.AccessToken = tokens.InternalToken;\n        dynamic profile = await api.GetUserProfileAsync();\n        return profile;\n    }\n}\n')),(0,o.kt)("p",null,"These helper methods will later be used in our server's controllers to handle\nvarious types of requests related to authentication, for example, redirecting the user\nto the Autodesk login page, processing the callback when the user gets redirected back\nto our application, or refreshing tokens that have expired."),(0,o.kt)("p",null,"Finally, let's update our ",(0,o.kt)("inlineCode",{parentName:"p"},"Startup.cs")," file to make a singleton instance of the ",(0,o.kt)("inlineCode",{parentName:"p"},"APS")," class\navailable to our server application:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Startup.cs"',title:'"Startup.cs"'},'using System;\nusing Microsoft.AspNetCore.Builder;\nusing Microsoft.AspNetCore.Hosting;\nusing Microsoft.Extensions.Configuration;\nusing Microsoft.Extensions.DependencyInjection;\nusing Microsoft.Extensions.Hosting;\n\npublic class Startup\n{\n    public Startup(IConfiguration configuration)\n    {\n        Configuration = configuration;\n    }\n\n    public IConfiguration Configuration { get; }\n\n    // This method gets called by the runtime. Use this method to add services to the container.\n    public void ConfigureServices(IServiceCollection services)\n    {\n        services.AddControllers();\n        var clientID = Configuration["APS_CLIENT_ID"];\n        var clientSecret = Configuration["APS_CLIENT_SECRET"];\n        var callbackURL = Configuration["APS_CALLBACK_URL"];\n        if (string.IsNullOrEmpty(clientID) || string.IsNullOrEmpty(clientSecret) || string.IsNullOrEmpty(callbackURL))\n        {\n            throw new ApplicationException("Missing required environment variables APS_CLIENT_ID, APS_CLIENT_SECRET, or APS_CALLBACK_URL.");\n        }\n        // highlight-start\n        services.AddSingleton<APS>(new APS(clientID, clientSecret, callbackURL));\n        // highlight-end\n    }\n\n    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.\n    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n    {\n        if (env.IsDevelopment())\n        {\n            app.UseDeveloperExceptionPage();\n        }\n        app.UseDefaultFiles();\n        app.UseStaticFiles();\n        app.UseRouting();\n        app.UseEndpoints(endpoints =>\n        {\n            endpoints.MapControllers();\n        });\n    }\n}\n')))}h.isMDXComponent=!0;const k={toc:[]};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Create an ",(0,o.kt)("inlineCode",{parentName:"p"},"AuthController.cs")," file under the ",(0,o.kt)("inlineCode",{parentName:"p"},"Controllers")," subfolder with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Controllers/AuthController.cs"',title:'"Controllers/AuthController.cs"'},'using System;\nusing System.Threading.Tasks;\nusing Microsoft.AspNetCore.Http;\nusing Microsoft.AspNetCore.Mvc;\nusing Microsoft.Extensions.Logging;\n\n[ApiController]\n[Route("api/[controller]")]\npublic class AuthController : ControllerBase\n{\n    private readonly ILogger<AuthController> _logger;\n    private readonly APS _aps;\n\n    public AuthController(ILogger<AuthController> logger, APS aps)\n    {\n        _logger = logger;\n        _aps = aps;\n    }\n\n    public static async Task<Tokens> PrepareTokens(HttpRequest request, HttpResponse response, APS aps)\n    {\n        if (!request.Cookies.ContainsKey("internal_token"))\n        {\n            return null;\n        }\n        var tokens = new Tokens\n        {\n            PublicToken = request.Cookies["public_token"],\n            InternalToken = request.Cookies["internal_token"],\n            RefreshToken = request.Cookies["refresh_token"],\n            ExpiresAt = DateTime.Parse(request.Cookies["expires_at"])\n        };\n        if (tokens.ExpiresAt < DateTime.Now.ToUniversalTime())\n        {\n            tokens = await aps.RefreshTokens(tokens);\n            response.Cookies.Append("public_token", tokens.PublicToken);\n            response.Cookies.Append("internal_token", tokens.InternalToken);\n            response.Cookies.Append("refresh_token", tokens.RefreshToken);\n            response.Cookies.Append("expires_at", tokens.ExpiresAt.ToString());\n        }\n        return tokens;\n    }\n\n    [HttpGet("login")]\n    public ActionResult Login()\n    {\n        var redirectUri = _aps.GetAuthorizationURL();\n        return Redirect(redirectUri);\n    }\n\n    [HttpGet("logout")]\n    public ActionResult Logout()\n    {\n        Response.Cookies.Delete("public_token");\n        Response.Cookies.Delete("internal_token");\n        Response.Cookies.Delete("refresh_token");\n        Response.Cookies.Delete("expires_at");\n        return Redirect("/");\n    }\n\n    [HttpGet("callback")]\n    public async Task<ActionResult> Callback(string code)\n    {\n        var tokens = await _aps.GenerateTokens(code);\n        Response.Cookies.Append("public_token", tokens.PublicToken);\n        Response.Cookies.Append("internal_token", tokens.InternalToken);\n        Response.Cookies.Append("refresh_token", tokens.RefreshToken);\n        Response.Cookies.Append("expires_at", tokens.ExpiresAt.ToString());\n        return Redirect("/");\n    }\n\n    [HttpGet("profile")]\n    public async Task<dynamic> GetProfile()\n    {\n        var tokens = await PrepareTokens(Request, Response, _aps);\n        if (tokens == null)\n        {\n            return Unauthorized();\n        }\n        dynamic profile = await _aps.GetUserProfile(tokens);\n        return new\n        {\n            name = string.Format("{0} {1}", profile.firstName, profile.lastName)\n        };\n    }\n\n    [HttpGet("token")]\n    public async Task<dynamic> GetPublicToken()\n    {\n        var tokens = await PrepareTokens(Request, Response, _aps);\n        if (tokens == null)\n        {\n            return Unauthorized();\n        }\n        return new\n        {\n            access_token = tokens.PublicToken,\n            token_type = "Bearer",\n            expires_in = Math.Floor((tokens.ExpiresAt - DateTime.Now.ToUniversalTime()).TotalSeconds)\n        };\n    }\n}\n')),(0,o.kt)("p",null,"The controller handles several different endpoints:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /api/auth/login")," will redirect the user to the Autodesk login page"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /api/auth/callback")," is the URL our user will be redirected to after logging in successfully,\nand it is where we're going to generate a new set of tokens for the user"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /api/auth/logout")," will remove any cookie-based session data for the given user, effectively\nlogging the user out of our application"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /api/auth/token")," will generate a public access token that will later be used by the Viewer\nto load our designs"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GET /api/auth/profile")," will return a simple JSON with additional information about the logged in user")))}m.isMDXComponent=!0;const g={toc:[]};function f(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If the application is still running, restart it (for example, using ",(0,o.kt)("em",{parentName:"p"},"Run > Restart Debugging"),",\nor by clicking the green restart icon), otherwise start it again (using ",(0,o.kt)("em",{parentName:"p"},"Run > Start Debugging"),",\nor by pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"F5"),")."),(0,o.kt)("p",null,"When you navigate to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080/api/auth/login"},"http://localhost:8080/api/auth/login"),"\nin the browser, you should be redirected to Autodesk login page, and after logging in, you should\nbe redirected back to your application, for now simply returning 404. This is expected as we haven't\nimplemented the ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /")," endpoint yet. However, if you use browser dev tools and explore the cookies\nstored by your browser for the ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost")," origin, you'll notice that the application is already\nstoring the authentication data there."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Here's where you can find your website cookies in different browsers:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.chrome.com/docs/devtools/storage/sessionstorage/"},"Chrome")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Tools/Storage_Inspector/Cookies"},"Firefox")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/storage/cookies"},"Edge")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.apple.com/safari/tools/"},"Safari")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Empty Response",src:n(9491).Z,width:"1500",height:"929"})))}f.isMDXComponent=!0;const b={toc:[]};function w(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},b,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If the application is still running, restart it (for example, using ",(0,o.kt)("em",{parentName:"p"},"Debug > Restart"),",\nor by pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl"),"+",(0,o.kt)("inlineCode",{parentName:"p"},"Shift"),"+",(0,o.kt)("inlineCode",{parentName:"p"},"F5"),"), otherwise start it again (using ",(0,o.kt)("em",{parentName:"p"},"Debug > Start Debugging"),",\nor by pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"F5"),")."),(0,o.kt)("p",null,"When you navigate to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8080/api/auth/login"},"http://localhost:8080/api/auth/login"),"\nin the browser, you should be redirected to Autodesk login page, and after logging in, you should\nbe redirected back to your application, for now simply returning 404. This is expected as we haven't\nimplemented the ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /")," endpoint yet. However, if you use browser dev tools and explore the cookies\nstored by your browser for the ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost")," origin, you'll notice that the application is already\nstoring the authentication data there."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Here's where you can find your website cookies in different browsers:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.chrome.com/docs/devtools/storage/sessionstorage/"},"Chrome")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Tools/Storage_Inspector/Cookies"},"Firefox")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/storage/cookies"},"Edge")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developer.apple.com/safari/tools/"},"Safari")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Empty Response",src:n(9491).Z,width:"1500",height:"929"})))}w.isMDXComponent=!0;const C={title:"Authentication"},y="Authentication",N={unversionedId:"tutorials/hubs-browser/auth",id:"tutorials/hubs-browser/auth",title:"Authentication",description:"In this step we're going to extend the server implementation so that it can authenticate itself",source:"@site/docs/tutorials/02-hubs-browser/02-auth.mdx",sourceDirName:"tutorials/02-hubs-browser",slug:"/tutorials/hubs-browser/auth",permalink:"/tutorials/hubs-browser/auth",draft:!1,editUrl:"https://github.com/autodesk-platform-services/aps-tutorials-website/edit/master/docs/tutorials/02-hubs-browser/02-auth.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Authentication"},sidebar:"tutorialSidebar",previous:{title:"Application Setup",permalink:"/tutorials/hubs-browser/setup"},next:{title:"Data Browsing",permalink:"/tutorials/hubs-browser/data"}},v={},T=[{value:"Access tokens",id:"access-tokens",level:2},{value:"Server endpoints",id:"server-endpoints",level:2},{value:"Try it out",id:"try-it-out",level:2}],A={toc:T};function _(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},A,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"In this step we're going to extend the server implementation so that it can authenticate itself\nto the APS platform, guide the user through a ",(0,o.kt)("a",{parentName:"p",href:"https://aps.autodesk.com/en/docs/oauth/v2/tutorials/get-3-legged-token"},"3-legged OAuth workflow"),",\nand generate access tokens for various needs."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},'It is a good practice to generate an "internal" token with more capabilities (for example,\nallowing the owner to create or delete files in the Data Management service) that will only be used\nby the server, and a "public" token with fewer capabilities that can be safely shared with\nthe client-side logic.')),(0,o.kt)("h2",{id:"access-tokens"},"Access tokens"),(0,o.kt)(i.Z,{NodeJsVsCode:s,DotNetVsCode:h,DotNetVs2022:h,mdxType:"EnvTabs"}),(0,o.kt)("h2",{id:"server-endpoints"},"Server endpoints"),(0,o.kt)("p",null,"Now let's expose this functionality via a collection of endpoints in our server."),(0,o.kt)(i.Z,{NodeJsVsCode:p,DotNetVsCode:m,DotNetVs2022:m,mdxType:"EnvTabs"}),(0,o.kt)("h2",{id:"try-it-out"},"Try it out"),(0,o.kt)(i.Z,{NodeJsVsCode:c,DotNetVsCode:f,DotNetVs2022:w,mdxType:"EnvTabs"}))}_.isMDXComponent=!0},9491:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/empty-response-450925c17b800559c0109e7793d17786.webp"},6545:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/empty-response-449d92b063a2380003d09b03f156f917.webp"}}]);
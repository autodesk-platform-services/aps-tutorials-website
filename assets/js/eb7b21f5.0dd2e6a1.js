"use strict";(self.webpackChunkaps_tutorials_website=self.webpackChunkaps_tutorials_website||[]).push([[868],{425:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(7294),a=n(6010);const s="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return i.createElement("div",{role:"tabpanel",className:(0,a.Z)(s,r),hidden:n},t)}},4259:(e,t,n)=>{n.d(t,{Z:()=>m});var i=n(7462),a=n(7294),s=n(6010),r=n(1048),o=n(3609),l=n(1943),c=n(2957);const u="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:n,block:r,defaultValue:p,values:m,groupId:v,className:f}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??g.map((e=>{let{props:{value:t,label:n,attributes:i}}=e;return{value:t,label:n,attributes:i}})),h=(0,o.l)(y,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const A=null===p?p:p??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==A&&!y.some((e=>e.value===A)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${A}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:N}=(0,l.U)(),[w,k]=(0,a.useState)(A),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=v){const e=b[v];null!=e&&e!==w&&y.some((t=>t.value===e))&&k(e)}const D=e=>{const t=e.currentTarget,n=x.indexOf(t),i=y[n].value;i!==w&&(E(t),k(i),null!=v&&N(v,String(i)))},C=e=>{var t;let n=null;switch(e.key){case"Enter":D(e);break;case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},f)},y.map((e=>{let{value:t,label:n,attributes:r}=e;return a.createElement("li",(0,i.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:C,onClick:D},r,{className:(0,s.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,a.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,r.Z)();return a.createElement(p,(0,i.Z)({key:String(t)},e))}},415:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(7294),a=n(4259),s=n(425);function r(e){let{NodeJsVsCode:t,DotNetVsCode:n,DotNetVs2022:r}=e;return i.createElement(a.Z,{groupId:"development-environment"},i.createElement(s.Z,{value:"nodejs-vscode",label:"Node.js & VSCode",default:!0},i.createElement(t,null)),i.createElement(s.Z,{value:"dotnet-vscode",label:".NET 6 & VSCode"},i.createElement(n,null)),i.createElement(s.Z,{value:"dotnet-vs2022",label:".NET 6 & VS2022"},i.createElement(r,null)))}},3913:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(7294),a=n(2004);const s="wrapper_emgM",r="player_m1gG";function o(e){let{src:t}=e;return i.createElement("div",{className:s},i.createElement(a.Z,{className:r,url:t,playing:!0,loop:!0,width:"100%",height:"100%"}))}},5972:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>m,default:()=>h,frontMatter:()=>p,metadata:()=>v,toc:()=>g});var i=n(7462),a=(n(7294),n(4137)),s=n(3913);const r=n.p+"assets/medias/define-activity-f57d18783180be635e9a68642214f7bf.mp4",o={toc:[]};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following methods should be added to the ",(0,a.kt)("inlineCode",{parentName:"p"},"DesignAutomationController")," class."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"EngineAttributes")),(0,a.kt)("p",null,"To define the activity we'll need the executable and the default file extension. This helper function provides it (from the engine name)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'/// <summary>\n/// Helps identify the engine\n/// </summary>\nprivate dynamic EngineAttributes(string engine)\n{\n    if (engine.Contains("3dsMax")) return new { commandLine = "$(engine.path)\\\\3dsmaxbatch.exe -sceneFile \\"$(args[inputFile].path)\\" $(settings[script].path)", extension = "max", script = "da = dotNetClass(\\"Autodesk.Forge.Sample.DesignAutomation.Max.RuntimeExecute\\")\\nda.ModifyWindowWidthHeight()\\n" };\n    if (engine.Contains("AutoCAD")) return new { commandLine = "$(engine.path)\\\\accoreconsole.exe /i \\"$(args[inputFile].path)\\" /al \\"$(appbundles[{0}].path)\\" /s $(settings[script].path)", extension = "dwg", script = "UpdateParam\\n" };\n    if (engine.Contains("Inventor")) return new { commandLine = "$(engine.path)\\\\inventorcoreconsole.exe /i \\"$(args[inputFile].path)\\" /al \\"$(appbundles[{0}].path)\\"", extension = "ipt", script = string.Empty };\n    if (engine.Contains("Revit")) return new { commandLine = "$(engine.path)\\\\revitcoreconsole.exe /i \\"$(args[inputFile].path)\\" /al \\"$(appbundles[{0}].path)\\"", extension = "rvt", script = string.Empty };\n    throw new Exception("Invalid engine");\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CreateActivity")),(0,a.kt)("p",null,"Define a new activity with an input file, input data (JSON) and an output file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'/// <summary>\n/// Define a new activity\n/// </summary>\n[HttpPost]\n[Route("api/aps/designautomation/activities")]\npublic async Task<IActionResult> CreateActivity([FromBody]JObject activitySpecs)\n{\n    // basic input validation\n    string zipFileName = activitySpecs["zipFileName"].Value<string>();\n    string engineName = activitySpecs["engine"].Value<string>();\n\n    // standard name for this sample\n    string appBundleName = zipFileName + "AppBundle";\n    string activityName = zipFileName + "Activity";\n\n    //\n    Page<string> activities = await _designAutomation.GetActivitiesAsync();\n    string qualifiedActivityId = string.Format("{0}.{1}+{2}", NickName, activityName, Alias);\n    if (!activities.Data.Contains(qualifiedActivityId))\n    {\n        // define the activity\n        // ToDo: parametrize for different engines...\n        dynamic engineAttributes = EngineAttributes(engineName);\n        string commandLine = string.Format(engineAttributes.commandLine, appBundleName);\n        Activity activitySpec = new Activity()\n        {\n            Id = activityName,\n            Appbundles = new List<string>() { string.Format("{0}.{1}+{2}", NickName, appBundleName, Alias) },\n            CommandLine = new List<string>() { commandLine },\n            Engine = engineName,\n            Parameters = new Dictionary<string, Parameter>()\n            {\n                { "inputFile", new Parameter() { Description = "input file", LocalName = "$(inputFile)", Ondemand = false, Required = true, Verb = Verb.Get, Zip = false } },\n                { "inputJson", new Parameter() { Description = "input json", LocalName = "params.json", Ondemand = false, Required = false, Verb = Verb.Get, Zip = false } },\n                { "outputFile", new Parameter() { Description = "output file", LocalName = "outputFile." + engineAttributes.extension, Ondemand = false, Required = true, Verb = Verb.Put, Zip = false } }\n            },\n            Settings = new Dictionary<string, ISetting>()\n            {\n                { "script", new StringSetting(){ Value = engineAttributes.script } }\n            }\n        };\n        Activity newActivity = await _designAutomation.CreateActivityAsync(activitySpec);\n\n        // specify the alias for this Activity\n        Alias aliasSpec = new Alias() { Id = Alias, Version = 1 };\n        Alias newAlias = await _designAutomation.CreateActivityAliasAsync(activityName, aliasSpec);\n\n        return Ok(new { Activity = qualifiedActivityId });\n    }\n\n    // as this activity points to a AppBundle "dev" alias (which points to the last version of the bundle),\n    // there is no need to update it (for this sample), but this may be extended for different contexts\n    return Ok(new { Activity = "Activity already defined" });\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GetDefinedActivities")),(0,a.kt)("p",null,"We'll also need a method to return all defined activities. Note that returns only those defined by you (we use the APS Client Id as nick name, which then appears as a prefix)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'/// <summary>\n/// Get all Activities defined for this account\n/// </summary>\n[HttpGet]\n[Route("api/aps/designautomation/activities")]\npublic async Task<List<string>> GetDefinedActivities()\n{\n    // filter list of\n    Page<string> activities = await _designAutomation.GetActivitiesAsync();\n    List<string> definedActivities = new List<string>();\n    foreach (string activity in activities.Data)\n        if (activity.StartsWith(NickName) && activity.IndexOf("$LATEST") == -1)\n            definedActivities.Add(activity.Replace(NickName + ".", String.Empty));\n\n    return definedActivities;\n}\n')))}l.isMDXComponent=!0;const c={toc:[]};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Activity")),(0,a.kt)("p",null,"Now we will write endpoints for creating new activity and getting the existing activities, copy the following code into DesignAutomation.js file before the last line ",(0,a.kt)("inlineCode",{parentName:"p"},"module.exports = router;")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"title=DesignAutomation.js",title:"DesignAutomation.js"},'/// <summary>\n/// CreateActivity a new Activity\n/// </summary>\nrouter.post(\n  "/aps/designautomation/activities",\n  async (/*CreateActivity*/ req, res) => {\n    const activitySpecs = req.body;\n\n    // basic input validation\n    const zipFileName = activitySpecs.zipFileName;\n    const engineName = activitySpecs.engine;\n\n    // standard name for this sample\n    const appBundleName = zipFileName + "AppBundle";\n    const activityName = zipFileName + "Activity";\n\n    // get defined activities\n    const api = await Utils.dav3API(req.oauth_token);\n    let activities = null;\n    try {\n      activities = await api.getActivities();\n    } catch (ex) {\n      console.error(ex);\n      return res.status(500).json({\n        diagnostic: "Failed to get activity list",\n      });\n    }\n    const qualifiedActivityId = `${Utils.NickName}.${activityName}+${Utils.Alias}`;\n    if (!activities.data.includes(qualifiedActivityId)) {\n      // define the activity\n      // ToDo: parametrize for different engines...\n      const engineAttributes = Utils.EngineAttributes(engineName);\n      const commandLine = engineAttributes.commandLine.replace(\n        "{0}",\n        appBundleName\n      );\n      const activitySpec = {\n        id: activityName,\n        appbundles: [`${Utils.NickName}.${appBundleName}+${Utils.Alias}`],\n        commandLine: [commandLine],\n        engine: engineName,\n        parameters: {\n          inputFile: {\n            description: "input file",\n            localName: "$(inputFile)",\n            ondemand: false,\n            required: true,\n            verb: dav3.Verb.get,\n            zip: false,\n          },\n          inputJson: {\n            description: "input json",\n            localName: "params.json",\n            ondemand: false,\n            required: false,\n            verb: dav3.Verb.get,\n            zip: false,\n          },\n          outputFile: {\n            description: "output file",\n            localName: "outputFile." + engineAttributes.extension,\n            ondemand: false,\n            required: true,\n            verb: dav3.Verb.put,\n            zip: false,\n          },\n        },\n        settings: {\n          script: {\n            value: engineAttributes.script,\n          },\n        },\n      };\n      try {\n        const newActivity = await api.createActivity(activitySpec);\n      } catch (ex) {\n        console.error(ex);\n        return res.status(500).json({\n          diagnostic: "Failed to create new activity",\n        });\n      }\n      // specify the alias for this Activity\n      const aliasSpec = {\n        id: Utils.Alias,\n        version: 1,\n      };\n      try {\n        const newAlias = await api.createActivityAlias(activityName, aliasSpec);\n      } catch (ex) {\n        console.error(ex);\n        return res.status(500).json({\n          diagnostic: "Failed to create new alias for activity",\n        });\n      }\n      res.status(200).json({\n        activity: qualifiedActivityId,\n      });\n      return;\n    }\n\n    // as this activity points to a AppBundle "dev" alias (which points to the last version of the bundle),\n    // there is no need to update it (for this sample), but this may be extended for different contexts\n    res.status(200).json({\n      activity: "Activity already defined",\n    });\n  }\n);\n\n/// <summary>\n/// Get all Activities defined for this account\n/// </summary>\nrouter.get(\n  "/aps/designautomation/activities",\n  async (/*GetDefinedActivities*/ req, res) => {\n    const api = await Utils.dav3API(req.oauth_token);\n    // filter list of\n    let activities = null;\n    try {\n      activities = await api.getActivities();\n    } catch (ex) {\n      console.error(ex);\n      return res.status(500).json({\n        diagnostic: "Failed to get activity list",\n      });\n    }\n    let definedActivities = [];\n    for (let i = 0; i < activities.data.length; i++) {\n      let activity = activities.data[i];\n      if (\n        activity.startsWith(Utils.NickName) &&\n        activity.indexOf("$LATEST") === -1\n      )\n        definedActivities.push(activity.replace(Utils.NickName + ".", ""));\n    }\n\n    res.status(200).json(definedActivities);\n  }\n);\n')))}u.isMDXComponent=!0;var d=n(415);const p={title:"Define Activity"},m=void 0,v={unversionedId:"tutorials/design-automation/define-activity",id:"tutorials/design-automation/define-activity",title:"Define Activity",description:"Activity is the specification of an action that can be executed using a specified engine. It specifies the number of input and output files, and the AppBundle and entry-point to use.",source:"@site/docs/tutorials/04-design-automation/03-define-activity.mdx",sourceDirName:"tutorials/04-design-automation",slug:"/tutorials/design-automation/define-activity",permalink:"/tutorials/design-automation/define-activity",draft:!1,editUrl:"https://github.com/autodesk-platform-services/aps-tutorials-website/edit/master/docs/tutorials/04-design-automation/03-define-activity.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Define Activity"},sidebar:"tutorialSidebar",previous:{title:"Create Plugin",permalink:"/tutorials/design-automation/prepare-plugin"},next:{title:"Execute Workitem",permalink:"/tutorials/design-automation/execute-workitem"}},f={},g=[],y={toc:g};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Activity is the specification of an action that can be executed using a specified engine. It specifies the number of input and output files, and the AppBundle and entry-point to use."),(0,a.kt)("p",null,"In this tutorial sample, the activity has 2 inputs (file & JSON data) and 1 output (file)."),(0,a.kt)(d.Z,{NodeJsVsCode:u,DotNetVsCode:l,DotNetVs2022:l,mdxType:"EnvTabs"}),(0,a.kt)("p",null,"Now you can click on Configure (top-right), select the AppBundle, select the Engine\nand click on Define Activity, which should define and upload the appbundle and define\nthe activity. The results panel (left-side) shows the respective ids. All other buttons\ndo not work yet... let's move forward."),(0,a.kt)(s.Z,{src:r,mdxType:"ResponsiveVideo"}))}h.isMDXComponent=!0}}]);
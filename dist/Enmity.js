const modules$1={clipboard:{props:["setString","getString"]},assets:{props:["registerAsset"]},messages:{props:["receiveMessage","sendMessage"]},clyde:{props:["createBotMessage"]},avatars:{props:["BOT_AVATARS"]},native:{props:["NativeModules"],export:"NativeModules"},React:{props:["createElement"]},Dispatcher:{props:["dirtyDispatch"]},storage:{props:["getItem"]},toasts:{props:["open","close"],ensure:t=>!t.openLazy&&!t.startDrag&&!t.init&&!t.openReplay},dialog:{props:["show","openLazy","open","close"]},token:{props:["getToken"]},rest:{props:["getAPIBaseURL"]},settings:{props:["watchKeys"]},users:{props:["fetchProfile"]},theme:{props:["theme"]},linking:{props:["openURL"]},navigation:{props:["pushLazy"]},navigationNative:{props:["NavigationContainer"]},navigationStack:{props:["createStackNavigator"]},stylesheet:{props:["createThemedStyleSheet"]},colorMap:{props:["ThemeColorMap"]},Components:{multiple:!0,props:{Forms:["Form","FormSection"],General:["Button","Text","View"]}},Locales:{props:["Messages"]}},common={},blacklist$1=[t=>t>=944&&t<=994,125,203,433,434,445,446,457],filters={byProps:(...t)=>n=>t.every(o=>n[o]!==void 0),byName:t=>n=>typeof n=="function"&&n.name===t,byTypeName:t=>n=>n?typeof n=="function"&&n.name===t:!1,byDisplayName:t=>n=>n?typeof n=="function"&&n.displayName===t:!1,byTypeString:(...t)=>n=>n?.default?t.every(o=>n.default.toString?.()?.includes?.(o)):!1,byDefaultString:(...t)=>n=>n?.default?t.every(o=>n.default.toString?.()?.includes?.(o)):!1,byString:(...t)=>n=>t.every(o=>n.toString?.()?.includes?.(o))},getters=[];Object.entries(modules$1).map(([t,n])=>{n.multiple?Object.entries(n.props).map(([o,r])=>{getters.push({id:o,filter:a=>filters.byProps(...r)(a),submodule:t})}):n.props?n.props.every(o=>Array.isArray(o))?getters.push({id:t,filter:o=>{const r=n.props.some(a=>a.every(s=>o[s]));return r&&n.ensure&&!n.ensure(o)?!1:r},map:n.export}):getters.push({id:t,filter:o=>{const r=filters.byProps(...n.props)(o);return r&&n.ensure&&n.ensure(o)===!1?!1:r},map:n.export}):n.displayName?getters.push({id:t,filter:filters.byDisplayName(n.displayName),map:n.export}):n.filter&&getters.push({id:t,filter:n.filter,map:n.export})});const results=bulk(...getters.map(({filter:t})=>t));getters.map(({id:t,map:n,submodule:o},r)=>{let a=l=>l;if(typeof n=="string")a=l=>l[n];else if(Array.isArray(n)){let l={};a=c=>{for(const u of n)l[u]=c[u];return l}}const s=a(results[r]);o?(common[o]??={},common[o][t]=s):common[t]=s});function getModule$1(t,{all:n=!1,traverse:o=!0,defaultExport:r=!0}={}){if(typeof t!="function")return null;const a=[],s=function(l,c){try{return t(l,c)}catch{return!1}};for(const l in modules){if(blacklist$1.some(u=>typeof u=="function"?u(l):u===Number(l)))continue;modules[l].isInitialized||__r(Number(l));const c=modules[l].publicModule.exports;if(!(!c||c===window)){if(typeof c=="object"){if(s(c,l)){if(!n)return c;a.push(c)}if(c.__esModule&&c.default&&s(c.default,l)){const u=r?c.default:c;if(!n)return u;a.push(u)}if(o&&c.__esModule){for(const u in c)if(c[u]!==void 0&&s(c[u],l)){if(!n)return c[u];a.push(c[u])}}}else if(typeof c=="function"){if(!s(c,l))continue;if(!n)return c;a.push(c)}}}return n?a:a[0]}function getModules$1(t){return getModule$1(t,{all:!0})}function bulk(...t){const n=new Array(t.length),o=t.map(r=>a=>{try{return r(a)}catch{return!1}});return getModule$1(r=>{for(let a=0;a<o.length;a++){const s=o[a];typeof s!="function"||!s(r)||n[a]!=null||(n[a]=r)}return n.filter(String).length===t.length}),n}function getByProps(...t){const[n,{bulk:o=!1,...r}]=parseOptions(t);if(o){const a=n.map(s=>Array.isArray(s)?a.byProps(...s):a.byProps(s)).concat({...r});return o(...a)}return getModule$1(filters.byProps(...n),r)}function getByDisplayName(...t){const[n,{bulk:o=!1,default:r=!0,...a}]=parseOptions(t);if(o){const s=n.map(filters.byDisplayName).concat({defaultExport:r,...a});return o(...s)}return getModule$1(filters.byDisplayName(n[0]),{defaultExport:r,...a})}function getByTypeName(...t){const[n,{bulk:o=!1,default:r=!0,...a}]=parseOptions(t);if(o){const s=n.map(filters.byTypeName).concat({defaultExport:r,...a});return o(...s)}return getModule$1(filters.byTypeName(n[0]),{defaultExport:r,...a})}function getByName(...t){const[n,{bulk:o=!1,default:r=!0,...a}]=parseOptions(t);if(o){const s=n.map(filters.byName).concat({defaultExport:r,...a});return o(...s)}return getModule$1(filters.byName(n[0]),{defaultExport:r,...a})}function getByDefaultString(...t){const[n,{bulk:o=!1,...r}]=parseOptions(t);if(o){const a=n.map(s=>Array.isArray(s)?a.byDefaultString(...s):a.byDefaultString(s)).concat({...r});return o(...a)}return getModule$1(filters.byDefaultString(...n),r)}function getByTypeString(...t){const[n,{bulk:o=!1,...r}]=parseOptions(t);if(o){const a=n.map(s=>Array.isArray(s)?a.byTypeString(...s):a.byTypeString(s)).concat({...r});return o(...a)}return getModule$1(filters.byTypeString(...n),r)}function getByString(...t){const[n,{bulk:o=!1,...r}]=parseOptions(t);if(o){const a=n.map(s=>Array.isArray(s)?a.byString(...s):a.byString(s)).concat({...r});return o(...a)}return getModule$1(filters.byString(...n),r)}function getByKeyword(...t){const[[n],{caseSensitive:o=!1,all:r=!1,...a}]=parseOptions(t);return getModule$1(s=>{const l=[...Object.keys(s),...Object.keys(s.__proto__)];for(let c=0;c<l.length;c++){const u=l[c];if(o){if(~u.indexOf(n))return!0}else{const d=n.toLowerCase();if(~u.toLowerCase().indexOf(d))return!0}}return!1},{all:r,...a})}function parseOptions(t,n=o=>typeof o=="object"&&!Array.isArray(o)){return[t,n(t[t.length-1])?t.pop():{}]}var Modules=Object.freeze({__proto__:null,common,filters,getModule:getModule$1,getModules:getModules$1,bulk,getByProps,getByDisplayName,getByTypeName,getByName,getByDefaultString,getByTypeString,getByString,getByKeyword});const REST=common.rest;async function getRequest(t){return REST.get(t)}async function postRequest(t){return REST.post(t)}async function putRequest(t){return REST.put(t)}async function deleteRequest(t){return REST.delete(t)}async function getAPIBaseURL(){return REST.getAPIBaseURL()}var getRandomValues,rnds8=new Uint8Array(16);function rng(){if(!getRandomValues&&(getRandomValues=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!getRandomValues))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}var REGEX=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function validate(t){return typeof t=="string"&&REGEX.test(t)}for(var byteToHex=[],i=0;i<256;++i)byteToHex.push((i+256).toString(16).substr(1));function stringify(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,o=(byteToHex[t[n+0]]+byteToHex[t[n+1]]+byteToHex[t[n+2]]+byteToHex[t[n+3]]+"-"+byteToHex[t[n+4]]+byteToHex[t[n+5]]+"-"+byteToHex[t[n+6]]+byteToHex[t[n+7]]+"-"+byteToHex[t[n+8]]+byteToHex[t[n+9]]+"-"+byteToHex[t[n+10]]+byteToHex[t[n+11]]+byteToHex[t[n+12]]+byteToHex[t[n+13]]+byteToHex[t[n+14]]+byteToHex[t[n+15]]).toLowerCase();if(!validate(o))throw TypeError("Stringified UUID is invalid");return o}function v4(t,n,o){t=t||{};var r=t.random||(t.rng||rng)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,n){o=o||0;for(var a=0;a<16;++a)n[o+a]=r[a];return n}return stringify(r)}const URLHandler=common.linking,replies={};URLHandler.addEventListener("url",t=>{let n=t.url;n=decodeURIComponent(n.replace("com.hammerandchisel.discord://",""));try{const o=JSON.parse(n);if(o.data===void 0)return;replies[o.id]&&(replies[o.id](o.data),delete replies[o.id])}catch{return}});function sendCommand(t,n=[],o){const r=v4();URLHandler.openURL(`com.hammerandchisel.discord://enmity?id=${r}&command=${t}&params=${n.join(",")}`).then(()=>{o&&(replies[r]=o)})}const Settings$2=common.theme,theme=window.themes?.theme??"";let themes$2=window.themes?.list??[];function getTheme(){return theme}function getThemeByName(t){return themes$2.find(n=>n.name===t)}function listThemes(){return themes$2.map(t=>t.name)}async function installTheme(t,n){sendCommand("install-theme",[t],o=>{n(o),getRequest(t).then(r=>{const a=JSON.parse(r.text);themes$2.push(a)}).catch(r=>{console.error(r)})})}async function applyTheme(t,n){sendCommand("apply-theme",[t,Settings$2.theme],o=>{n(o)})}async function removeTheme(t){sendCommand("remove-theme",[],n=>{t(n)})}async function uninstallTheme(t,n){sendCommand("uninstall-theme",[t],o=>{n(o),themes$2=themes$2.filter(r=>r.name!==t)})}const React=common.React,ComponentsModule=common.Components.General,FormsModule=common.Components.Forms,{lazy,memo,useCallback,useContext,useEffect,useImperativeHandle,useMemo,useReducer,useRef,useState}=React,{Alert,Button,FlatList,Image,ImageBackground,KeyboardAvoidingView,Modal,Pressable,RefreshControl,ScrollView,SectionList,StatusBar,StyleSheet:StyleSheet$2,Switch,Text,TextInput,TouchableHighlight,TouchableOpacity,TouchableWithoutFeedback,Touchable,View,VirtualizedList}=ComponentsModule,{Form,FormArrow,FormCTA,FormCTAButton,FormCardSection,FormCheckbox,FormDivider,FormHint,FormIcon,FormInput,FormLabel,FormRadio,FormRow,FormSection,FormSelect,FormSubLabel,FormSwitch,FormTernaryCheckBox,FormText,FormTextColors,FormTextSizes}=FormsModule;var React$1=Object.freeze({__proto__:null,React,lazy,memo,useCallback,useContext,useEffect,useImperativeHandle,useMemo,useReducer,useRef,useState,Alert,Button,FlatList,Image,ImageBackground,KeyboardAvoidingView,Modal,Pressable,RefreshControl,ScrollView,SectionList,StatusBar,StyleSheet:StyleSheet$2,Switch,Text,TextInput,TouchableHighlight,TouchableOpacity,TouchableWithoutFeedback,Touchable,View,VirtualizedList,Form,FormArrow,FormCTA,FormCTAButton,FormCardSection,FormCheckbox,FormDivider,FormHint,FormIcon,FormInput,FormLabel,FormRadio,FormRow,FormSection,FormSelect,FormSubLabel,FormSwitch,FormTernaryCheckBox,FormText,FormTextColors,FormTextSizes});const patches=[];function getPatchesByCaller(t){const n=[];for(const o of patches)for(const r of o.patches)r.caller===t&&n.push(r);return n}function unpatchAll(t){const n=getPatchesByCaller(t);if(!!n.length)for(const o of n)o.unpatch()}function override(t){return function(){if(!t.patches.length)return new.target?new t.original(...arguments):t.original.apply(this,arguments);let n,o=arguments;for(const a of t.patches.filter(s=>s.type==="before"))try{const s=a.callback(this,o,t.original.bind(this));Array.isArray(s)&&(o=s)}catch(s){console.error(`Could not fire before patch for ${t.func} of ${a.caller}`),console.error(s)}const r=t.patches.filter(a=>a.type==="instead");if(!r.length)new.target?n=new t.original(...o):n=t.original.apply(this,o);else for(const a of r)try{const s=a.callback(this,o,t.original.bind(this));s!==void 0&&(n=s)}catch(s){console.error(`Could not fire instead patch for ${t.func} of ${a.caller}`),console.error(s)}for(const a of t.patches.filter(s=>s.type==="after"))try{const s=a.callback(this,o,n);s!==void 0&&(n=s)}catch(s){console.error(`Could not fire after patch for ${t.func} of ${a.caller}`),console.error(s)}return n}}function push([t,n,o]){const r={caller:t,mdl:n,func:o,original:n[o],unpatch:()=>{r.mdl[r.func]=r.original,r.patches=[]},patches:[]};if(!r.original)return;n[o]=override(r);const a=Object.getOwnPropertyDescriptors(r.original);return delete a.length,Object.defineProperties(n[o],{...a,toString:{value:()=>r.original.toString(),configurable:!0,enumerable:!1},__original:{value:r.original,configurable:!0,enumerable:!1}}),patches.push(r),r}function get(t,n,o){const r=patches.find(a=>a.mdl===n&&a.func===o);return r||push([t,n,o])}function patch(t,n,o,r,a="after"){if(!t||!n||!o||!r)return;const s=get(t,n,o);if(!s)return;const l={caller:t,type:a,id:s.patches.length,callback:r,unpatch:()=>{if(s.patches.splice(s.patches.findIndex(c=>c.id===l.id&&c.type===a),1),s.patches.length<=0){const c=patches.findIndex(u=>u.mdl===n&&u.func===o);patches[c].unpatch(),patches.splice(c,1)}}};return s.patches.push(l),l.unpatch}function before(t,n,o,r){return patch(t,n,o,r,"before")}function instead(t,n,o,r){return patch(t,n,o,r,"instead")}function after(t,n,o,r){return patch(t,n,o,r,"after")}function create(t){return{getPatchesByCaller,before:(n,o,r)=>before(t,n,o,r),instead:(n,o,r)=>instead(t,n,o,r),after:(n,o,r)=>after(t,n,o,r),unpatchAll:()=>unpatchAll(t)}}var Patcher$2=Object.freeze({__proto__:null,create,before,instead,after,unpatchAll});const Patcher$1=create("enmity-commands"),[Commands,Discovery,Assets$1]=bulk(filters.byProps("getBuiltInCommands"),filters.byProps("useApplicationCommandsDiscoveryState"),filters.byProps("getApplicationIconURL"));let commands=[];const section={id:"enmity",type:1,name:"Enmity",icon:"https://files.enmity.app/icon.png"};Patcher$1.after(Commands,"getBuiltInCommands",(t,n,o)=>[...o,...commands.values()]),Patcher$1.after(Assets$1,"getApplicationIconURL",(t,[n],o)=>{if(n.id==="enmity")return section.icon}),Patcher$1.after(Discovery,"useApplicationCommandsDiscoveryState",(t,[,,,n],o)=>{if(n!==!1)return o;if(!o.discoverySections.find(a=>a.key===section.id)&&commands.length){const a=[...commands.values()];o.discoveryCommands.push(...a),o.commands.push(...a.filter(s=>!o.commands.some(l=>l.name===s.name))),o.discoverySections.push({data:a,key:section.id,section}),o.sectionsOffset.push(commands.length)}!o.applicationCommandSections.find(a=>a.id===section.id)&&commands.length&&o.applicationCommandSections.push(section);const r=o.discoverySections.findIndex(a=>a.key==="-2");if(o.discoverySections[r]?.data){const a=o.discoverySections[r];a.data=a.data.filter(s=>!s.__enmity),a.data.length===0&&o.discoverySections.splice(r,1)}});function registerCommands(t,n){n.map(o=>{o.__enmity=!0,o.caller=t}),commands.push(...n)}function unregisterCommands(t){commands=commands.filter(n=>n.caller!==t)}var Commands$1=Object.freeze({__proto__:null,section,registerCommands,unregisterCommands});const plugins$1=[];let enabled=window.plugins.enabled,disabled=window.plugins.disabled;function registerPlugin(t){t.onEnable=()=>{t.onStart(),t.commands&&registerCommands(t.name,t.commands),console.log(`${t.name} has been enabled`)},t.onDisable=()=>{if(t.patches)for(const n of t.patches)n.unpatchAll();t.commands&&unregisterCommands(t.name),t.onStop(),console.log(`${t.name} has been disabled`)},enabled.includes(t.name)&&t.onEnable(),disabled.includes(t.name)&&t.onDisable(),plugins$1.push(t)}function getPlugin(t){return plugins$1.find(n=>n.name===t)}function getPlugins(){return plugins$1}function getEnabledPlugins(){return enabled}function getDisabledPlugins(){return disabled}function disablePlugin(t,n){enabled.includes(t)&&enabled.splice(enabled.indexOf(t),1),disabled.push(t),getPlugin(t).onDisable(),sendCommand("disable-plugin",[t],n)}function enablePlugin(t,n){disabled.includes(t)&&disabled.splice(disabled.indexOf(t),1),disabled.push(t),getPlugin(t).onEnable(),sendCommand("enable-plugin",[t],n)}function evalPlugin(url,update){getRequest(url).then(response=>{const code=response.text,name=url.split("/").pop().split(".")[0],id=Number(Object.keys(window.modules).pop())+1,wrapper=`__d(function(...args) {
        try {
          ${code}
        } catch(err) {
          console.log(err);
        }
      }, ${id}, []);
      __r(${id})`;enabled.push(name),eval(wrapper),update()}).catch(t=>{console.error(t),update()})}function installPlugin(t,n,o){sendCommand("install-plugin",[t],r=>{evalPlugin(t,o),n(r)})}function uninstallPlugin(t,n){disablePlugin(t),enabled=enabled.filter(o=>o!==t),disabled=disabled.filter(o=>o!==t),sendCommand("uninstall-plugin",[t],o=>{n(o)})}var Plugins=Object.freeze({__proto__:null,registerPlugin,getPlugin,getPlugins,getEnabledPlugins,getDisabledPlugins,disablePlugin,enablePlugin,evalPlugin,installPlugin,uninstallPlugin});const Toasts=common.toasts;function showToast(t){Toasts.open(t)}var Toasts$1=Object.freeze({__proto__:null,showToast});const Navigation$2=common.navigation,NavigationNative$1=common.navigationNative,NavigationStack$1=common.navigationStack,StyleSheet$1=common.stylesheet,ColorMap$1=common.colorMap,{NavigationContainer:NavigationContainer$1}=NavigationNative$1,{createStackNavigator:createStackNavigator$1}=NavigationStack$1,{createThemedStyleSheet:createThemedStyleSheet$1}=StyleSheet$1,{ThemeColorMap:ThemeColorMap$1}=ColorMap$1,navbarStyle$1=createThemedStyleSheet$1({container:{backgroundColor:ThemeColorMap$1.BACKGROUND_MOBILE_SECONDARY,flex:1},cardStyle:{backgroundColor:"transparent"},header:{backgroundColor:ThemeColorMap$1.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},headerTitleContainer:{color:ThemeColorMap$1.HEADER_PRIMARY}}),cardStyle$1=createThemedStyleSheet$1({cardContainer:{padding:15,width:"100%",flex:1,flexDirection:"column"},container:{backgroundColor:ThemeColorMap$1.BACKGROUND_PRIMARY},cardHeader:{height:45,borderTopLeftRadius:5,borderTopRightRadius:5,backgroundColor:ThemeColorMap$1.BACKGROUND_SECONDARY_ALT},cardBody:{padding:5,backgroundColor:ThemeColorMap$1.BACKGROUND_SECONDARY},text:{color:ThemeColorMap$1.TEXT_DANGER}}),PluginCard=({plugin:t,removePlugin:n})=>{const[o,r]=useState(!0);return useEffect(()=>{const a=getEnabledPlugins().includes(t.name);r(a)},[]),React.createElement(View,{style:cardStyle$1.cardContainer},React.createElement(View,{style:cardStyle$1.cardHeader},React.createElement(FormRow,{label:t.name,trailing:React.createElement(TouchableOpacity,{onPress:()=>{uninstallPlugin(t.name,a=>{showToast({content:`${t.name} has been uninstalled.`}),n(t.name)})}},React.createElement(Text,{style:cardStyle$1.text},"Uninstall"))})),React.createElement(View,{style:cardStyle$1.cardBody},React.createElement(FormRow,{label:"Enabled",trailing:React.createElement(FormSwitch,{value:o,onValueChange:a=>{r(a),showToast({content:`${t.name} has been ${a?"enabled":"disabled"}.`}),a?enablePlugin(t.name):disablePlugin(t.name)}})})))},Stack$1=createStackNavigator$1(),PluginPage=()=>{const[t,n]=useState([]),[o,r]=React.useState(!1);useEffect(()=>{n(getPlugins)},[]);const a=l=>{n(t.filter(c=>c.name!==l))},s=()=>React.createElement(View,{style:{flex:1}},React.createElement(ScrollView,{style:cardStyle$1.container,refreshControl:React.createElement(RefreshControl,{refreshing:o,onRefresh:()=>{r(!0),n(getPlugins),r(!1)}})},t.map(l=>React.createElement(PluginCard,{plugin:l,removePlugin:a}))));return React.createElement(NavigationContainer$1,null,React.createElement(Stack$1.Navigator,{style:navbarStyle$1.container,screenOptions:{cardOverlayEnabled:!1,cardShadowEnabled:!1,cardStyle:navbarStyle$1.cardStyle,headerStyle:navbarStyle$1.header,headerTitleContainerStyle:navbarStyle$1.headerTitleContainer,headerTitleAlign:"center",safeAreaInsets:{top:0}}},React.createElement(Stack$1.Screen,{name:"Plugins",component:s,options:{headerTitleStyle:{color:"white"},headerLeft:()=>React.createElement(Button,{color:"#fff",title:"Close",onPress:()=>Navigation$2.pop()}),headerRight:()=>React.createElement(Button,{color:"#fff",title:"Add",onPress:()=>{Alert.prompt("Install a plugin","Please enter the URL of the plugin to install.",l=>{installPlugin(l,c=>{showToast({content:"Plugin has been installed."})},()=>{n(getPlugins)})})}})}})))};var Themes=Object.freeze({__proto__:null,getTheme,getThemeByName,listThemes,applyTheme,removeTheme,uninstallTheme});const Native=common.native;function reloadDiscord(){Native.BundleUpdaterManager.reload()}function getVersion(){return Native.InfoDictionaryManager.Version}function getBuild(){return Native.InfoDictionaryManager.Build}function getDevice(){return Native.DCDDeviceManager.device}function getSystemVersion(){return Native.DCDDeviceManager.systemVersion}const Dialog=common.dialog;function showDialog(t){Dialog.show(t)}var Dialog$1=Object.freeze({__proto__:null,showDialog});const Navigation$1=common.navigation,NavigationNative=common.navigationNative,NavigationStack=common.navigationStack,StyleSheet=common.stylesheet,ColorMap=common.colorMap,{NavigationContainer}=NavigationNative,{createStackNavigator}=NavigationStack,{createThemedStyleSheet}=StyleSheet,{ThemeColorMap}=ColorMap,navbarStyle=createThemedStyleSheet({container:{backgroundColor:ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,flex:1},cardStyle:{backgroundColor:"transparent"},header:{backgroundColor:ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,shadowColor:"transparent",elevation:0},headerTitleContainer:{color:ThemeColorMap.HEADER_PRIMARY}}),cardStyle=createThemedStyleSheet({cardContainer:{padding:15,width:"100%",flex:1,flexDirection:"column"},cardHeader:{height:45,borderTopLeftRadius:5,borderTopRightRadius:5,backgroundColor:ThemeColorMap.BACKGROUND_SECONDARY_ALT},cardBody:{padding:5,backgroundColor:ThemeColorMap.BACKGROUND_SECONDARY},text:{color:ThemeColorMap.TEXT_DANGER}}),ThemeCard=({theme:t,deleteTheme:n})=>React.createElement(View,{style:cardStyle.cardContainer},React.createElement(View,{style:cardStyle.cardHeader},React.createElement(FormRow,{label:t,trailing:React.createElement(TouchableOpacity,{onPress:()=>{uninstallTheme(t,o=>{showToast({content:o}),n(t)})}},React.createElement(Text,{style:cardStyle.text},"Uninstall"))})),React.createElement(View,{style:cardStyle.cardBody},React.createElement(FormRow,{label:"Apply",onPress:()=>{applyTheme(t,o=>{showDialog({title:"Theme Applied",body:"Applying a theme requires a restart, would you like to restart Discord to apply the new theme?",confirmText:"Yes",cancelText:"No",onConfirm:reloadDiscord})})}}))),ThemesScreen=()=>{const[t,n]=useState([]);useEffect(()=>{n(listThemes())},[]);const o=r=>{getTheme()===r&&removeTheme(),n(t.filter(a=>a!==r))};return React.createElement(View,{style:{flex:1}},React.createElement(Form,null,getTheme()!==""&&React.createElement(FormRow,{label:"Remove applied theme",onPress:()=>{removeTheme().then(()=>{showDialog({title:"Theme Removed",body:"Removing the applied theme requires a restart, would you like to restart Discord to remove the applied theme?",confirmText:"Yes",cancelText:"No",onConfirm:reloadDiscord})})}}),t.map(r=>React.createElement(ThemeCard,{theme:r,deleteTheme:o}))))},Stack=createStackNavigator(),ThemePage=()=>React.createElement(NavigationContainer,null,React.createElement(Stack.Navigator,{style:navbarStyle.container,screenOptions:{cardOverlayEnabled:!1,cardShadowEnabled:!1,cardStyle:navbarStyle.cardStyle,headerStyle:navbarStyle.header,headerTitleContainerStyle:navbarStyle.headerTitleContainer,headerTitleAlign:"center",safeAreaInsets:{top:0}}},React.createElement(Stack.Screen,{name:"Themes",component:ThemesScreen,options:{headerTitleStyle:{color:"white"},headerLeft:()=>React.createElement(Button,{color:"#fff",title:"Close",onPress:()=>Navigation$1.pop()}),headerRight:()=>React.createElement(Button,{color:"#fff",title:"Add",onPress:()=>{Alert.prompt("Install a theme","Please enter the URL of the theme to install.",t=>{if(!t.includes("json")){showToast({content:"Invalid url for theme."});return}installTheme(t,n=>{showToast({content:n})})})}})}}))),Navigation=common.navigation;function patchSettings(){const t=create("enmity-settings");let n;const o=getByTypeName("UserSettingsOverviewWrapper",{default:!1}),r=t.after(o,"default",(a,s,l)=>{if(n!==void 0)return;r(),n=l.type;const{openURL:c}=getByProps("handleSupportedURL"),u=common.Locales.Messages;t.after(n.prototype,"render",(d,y,{props:{children:m}})=>{const g=m.findIndex(f=>f.props.title===u.PREMIUM_SETTINGS),{version:p}=window.enmity;m.splice(g,0,React.createElement(React.Fragment,null,React.createElement(FormSection,{title:"Enmity"},React.createElement(FormRow,{label:"Enmity",trailing:React.createElement(FormLabel,{text:p}),onPress:()=>{c(`https://github.com/enmity-mod/enmity/commit/${p}`)}}),React.createElement(FormDivider,null),React.createElement(FormRow,{label:"Plugins",trailing:React.createElement(FormArrow,null),onPress:()=>{Navigation.push(PluginPage,{})}}),React.createElement(FormDivider,null),React.createElement(FormRow,{label:"Themes",trailing:React.createElement(FormArrow,null),onPress:()=>{Navigation.push(ThemePage,{})}}),React.createElement(FormDivider,null),React.createElement(FormRow,{label:React.createElement(FormLabel,{style:{color:"#d83c3f"},text:"Reload Discord"}),arrowShown:!0,onPress:()=>{showDialog({title:"Reload Discord",body:"Are you sure you want to reload Discord?",confirmText:"Yes",cancelText:"No",onConfirm:reloadDiscord})}})),React.createElement(FormSection,null,React.createElement(FormRow,{label:React.createElement(FormLabel,{text:"Discord"}),trailing:React.createElement(FormArrow,null),onPress:()=>{c("https://discord.gg/rMdzhWUaGT")}}),React.createElement(FormDivider,null),React.createElement(FormRow,{label:React.createElement(FormLabel,{text:"GitHub"}),trailing:React.createElement(FormArrow,null),onPress:()=>{c("https://github.com/enmity-mod/enmity")}}),React.createElement(FormDivider,null),React.createElement(FormRow,{label:React.createElement(FormLabel,{text:"Twitter"}),trailing:React.createElement(FormArrow,null),onPress:()=>{c("https://twitter.com/enmityapp")}}),React.createElement(FormDivider,null))))})})}const Patcher=create("no-track"),blacklist=["useAndTrack","TextTrack","useAnalyticsContext"],Trackers=getModules$1(t=>typeof t=="object"&&Object.keys(t)?.some(n=>(~n.toLowerCase().indexOf("track")||~n.toLowerCase().indexOf("analytics"))&&!blacklist.some(o=>~n.indexOf(o)))),Reporters=getModules$1(t=>typeof t=="object"&&Object.keys(t)?.some(n=>~n.toLowerCase().indexOf("crashreport")&&!blacklist.some(o=>~n.indexOf(o))));function patchTracking(){for(let n=0;n<Trackers.length;n++)traverse(Trackers[n],o=>(~e.toLowerCase().indexOf("track")||~e.toLowerCase().indexOf("analytics"))&&!blacklist.some(r=>~o.indexOf(r)));for(let n=0;n<Reporters.length;n++)traverse(Reporters[n],o=>~o.toLowerCase().indexOf("crashreport")&&!blacklist.some(r=>~o.indexOf(r)));const t={main:window.__SENTRY__?.hub,client:window.__SENTRY__?.hub?.getClient()};if(t.main&&t.client){t.client.close(0),t.main.getStackTop().scope.clear(),t.main.getScope().clear(),Patcher.instead(t.main,"addBreadcrumb",()=>{}),window.__oldConsole=window.console;for(const n of["debug","info","warn","error","log","assert"]){const o=console[n];if(!!o){if(o.__sentry_original__)console[n]=o.__sentry_original__;else if(o.__REACT_DEVTOOLS_ORIGINAL_METHOD__){const r=o.__REACT_DEVTOOLS_ORIGINAL_METHOD__.__sentry_original__;console[n].__REACT_DEVTOOLS_ORIGINAL_METHOD__=r}}}}}function traverse(t,n){const o=[...Object.keys(t),...Object.keys(t.__proto__)].filter(n);for(let r=0;r<o.length;r++){const a=o[r];if(!!~["function","object"].indexOf(typeof t[a]))if(typeof t[a]=="object")traverse(t[a],n);else try{Patcher.instead(t,a,()=>{})}catch{}}}function applyPatches(){try{patchSettings()}catch(t){console.log("Failed to patch settings: ",t.message)}try{patchTracking()}catch(t){console.log("Failed to patch trackers: ",t.message)}}const Assets=common.assets;function getAssetByName(t){let n,o=1;for(;n=Assets.getAssetByID(o),!(n===void 0||n.name===t);)o+=1;return{id:o,...n}}function getAssets(){const t=[];let n=1;for(;;){const o=Assets.getAssetByID(n);if(o===void 0)break;t.push({id:n,...o}),n+=1}return t}function modulesBlacklist(t){return t===203||t===433||t===434||t===445||t===446||t===457||t>=944&&t<=994}function getModules(t,n=!1){const o=a=>{if(modulesBlacklist(Number(a)))return;const s=modules[a];if(s.isInitialized||__r(Number(a)),s.publicModule.exports!==void 0)return t(s.publicModule.exports)};return(n?[Object.keys(modules).find(o)]:Object.keys(modules).filter(o)).filter(a=>a!==void 0).map(a=>Number(a))}function getModule(t,n=!0){const o=getModules(t,!0);if(o.length===0)return;const{publicModule:r}=modules[o[0]];return n?r.exports:r}function getModuleByProps(...t){return getModule(n=>t.every(o=>(n[o]??n.default?.[o])!==void 0),!0)}function getModuleByIndex(t){const n=modules[t];if(n!==void 0)return n.isInitialized||__r(Number(t)),n.publicModule}const Clipboard=common.clipboard;function setString(t){return Clipboard.setString(t)}async function getString(){return Clipboard.getString()}var Clipboard$1=Object.freeze({__proto__:null,setString,getString});const Messages=common.messages,BotMessages=common.clyde,Images=common.avatars;Images.BOT_AVATARS.ENMITY="https://github.com/enmity-mod.png";function sendReply(t,n,o,r){const a=BotMessages.createBotMessage(t,"");a.author.username=o??"Enmity",a.author.avatar=r?o:"ENMITY",r&&(Images.BOT_AVATARS[o]=r),typeof n=="string"?a.content=n:Object.assign(a,n),Messages.receiveMessage(t,a)}var Clyde=Object.freeze({__proto__:null,sendReply});const Settings=common.settings;function getSetting(t){return Settings.get(t)}function setSetting(t){Settings.set(t)}var Settings$1=Object.freeze({__proto__:null,getSetting,setSetting});const Storage=common.storage;async function getItem(t){return Storage.getItem(t)}async function setItem(t,n){return Storage.setItem(t,n)}async function removeItem(t){return Storage.removeItem(t)}var Storage$1=Object.freeze({__proto__:null,getItem,setItem,removeItem});const Token=common.token;function getToken(){return Token.getToken()}function setToken(t){return Token.setToken(t)}function hideToken(){Token.hideToken()}function showToken(){Token.showToken()}function removeToken(){Token.removeToken()}var Token$1=Object.freeze({__proto__:null,getToken,setToken,hideToken,showToken,removeToken});const Users=common.users;async function fetchCurrentUser(){return Users.fetchCurrentUser()}async function fetchProfile(t){return Users.fetchProfile(t)}async function getUser(t){return Users.getUser(t)}var Users$1=Object.freeze({__proto__:null,fetchCurrentUser,fetchProfile,getUser});function prepareApi(){window.enmity={modules:Modules,themer:Themes,patcher:Patcher$2,version:"4f6487a",plugins:Plugins,clipboard:Clipboard$1,clyde:Clyde,commands:Commands$1,dialog:Dialog$1,rest:{getAPIBaseURL,get:getRequest,put:putRequest,post:postRequest,delete:deleteRequest},react:React$1,settings:Settings$1,storage:Storage$1,toast:Toasts$1,token:Token$1,users:Users$1,components:common.components,native:{reloadDiscord,getVersion,getBuild,getDevice,getSystemVersion},getModule,getModules,getModuleByProps,getModuleByIndex,getAssetByName,getAssets}}var ApplicationCommandSectionType;(function(t){t[t.BuiltIn=0]="BuiltIn",t[t.Guild=1]="Guild",t[t.DM=2]="DM"})(ApplicationCommandSectionType||(ApplicationCommandSectionType={}));var ApplicationCommandType;(function(t){t[t.Chat=1]="Chat",t[t.User=2]="User",t[t.Message=3]="Message"})(ApplicationCommandType||(ApplicationCommandType={}));var ApplicationCommandInputType;(function(t){t[t.BuiltIn=0]="BuiltIn",t[t.BuiltInText=1]="BuiltInText",t[t.BuiltInIntegration=2]="BuiltInIntegration",t[t.Bot=3]="Bot",t[t.Placeholder=4]="Placeholder"})(ApplicationCommandInputType||(ApplicationCommandInputType={}));var ApplicationCommandPermissionType;(function(t){t[t.Role=1]="Role",t[t.User=2]="User"})(ApplicationCommandPermissionType||(ApplicationCommandPermissionType={}));var ApplicationCommandOptionType;(function(t){t[t.SubCommand=1]="SubCommand",t[t.SubCommandGroup=2]="SubCommandGroup",t[t.String=3]="String",t[t.Integer=4]="Integer",t[t.Boolean=5]="Boolean",t[t.User=6]="User",t[t.Channel=7]="Channel",t[t.Role=8]="Role",t[t.Mentionnable=9]="Mentionnable",t[t.Number=10]="Number"})(ApplicationCommandOptionType||(ApplicationCommandOptionType={}));var InteractionTypes;(function(t){t[t.ApplicationCommand=2]="ApplicationCommand",t[t.MessageComponent=3]="MessageComponent"})(InteractionTypes||(InteractionTypes={}));const list={id:"installed-plugins",applicationId:section.id,name:"plugins",displayName:"plugins",description:"List installed plugins",displayDescription:"List installed plugins",type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltIn,execute:(t,n)=>{const o=n.channel.id;if(getPlugins().length===0){sendReply(o,"No plugins installed.");return}const a=getEnabledPlugins(),s=getDisabledPlugins();let l="";a.length>0&&(l=`**Enabled plugins (${a.length})**:
`,l+=`> ${a.join(", ")}
`),s.length>0&&(l+=`**Disabled plugins (${s.length})**:
`,l+=`> ${s.join(", ")}`),sendReply(o,l)}},install={id:"install-plugin",applicationId:section.id,name:"install",displayName:"install",description:"Install a plugin",displayDescription:"Install a plugin",type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltIn,options:[{name:"plugin",displayName:"plugin",description:"Plugin url",displayDescription:"Plugin url",required:!0,type:ApplicationCommandOptionType.String}],execute:(t,n)=>{const o=t[0].value,r=n.channel.id;installPlugin(o,a=>{sendReply(r,a)})}},uninstall={id:"uninstall-plugin",applicationId:section.id,name:"uninstall",displayName:"uninstall",description:"Uninstall a plugin",displayDescription:"Uninstall a plugin",type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltIn,options:[{name:"plugin",displayName:"plugin",description:"Plugin name",displayDescription:"Plugin name",type:ApplicationCommandOptionType.String,required:!0}],execute:(t,n)=>{const o=t[0].value,r=n.channel.id;uninstallPlugin(o,a=>{sendReply(r,a)})}},disable={id:"disable-plugin",applicationId:section.id,name:"disable",displayName:"disable",description:"Disable a plugin",displayDescription:"Disable a plugin",type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltIn,options:[{name:"plugin",displayName:"plugin",description:"Plugin name",displayDescription:"Plugin name",type:ApplicationCommandOptionType.String,required:!0}],execute:(t,n)=>{const o=t[0].value,r=n.channel.id;disablePlugin(o,a=>{if(a==="yes"){sendReply(r,`**${o}** has been disabled.`);return}sendReply(r,`Error when disabling **${o}**.`)})}},enable={id:"enable-plugin",applicationId:section.id,name:"enable",displayName:"enable",description:"Enable a plugin",displayDescription:"Enable a plugin",type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltIn,options:[{name:"plugin",displayName:"plugin",description:"Plugin name",displayDescription:"Plugin name",type:ApplicationCommandOptionType.String,required:!0}],execute:(t,n)=>{const o=t[0].value,r=n.channel.id;enablePlugin(o,a=>{if(a==="yes"){sendReply(r,`**${o}** has been enabled.`);return}sendReply(r,`Error when enabling **${o}**.`)})}};var plugins=[list,install,uninstall,disable,enable];const themes={id:"list-themes",applicationId:section.id,name:"themes",displayName:"themes",description:"List available themes",displayDescription:"List available themes",type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltIn,execute:(t,n)=>{const o=listThemes();if(o.length===0){sendReply(n.channel.id,"No themes installed.");return}sendReply(n.channel.id,`**Installed themes (${o.length})**: ${o.join(", ")}`)}},apply={id:"apply-theme",applicationId:section.id,name:"apply",displayName:"apply",description:"Apply a theme",displayDescription:"Apply a theme",type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltIn,options:[{name:"name",displayName:"name",description:"Theme's name",displayDescription:"Theme's name",type:ApplicationCommandOptionType.String,required:!0,choices:listThemes().map(t=>({name:t,displayName:t,value:t}))}],execute:(t,n)=>{const o=t[0].value;getThemeByName(o)||sendReply(n.channel.id,"Theme couldn't be found."),applyTheme(o).then(a=>{sendReply(n.channel.id,a)})}},clear={id:"clear-theme",applicationId:section.id,name:"clear",displayName:"clear",description:"Remove applied theme",displayDescription:"Remove applied theme",type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltIn,execute:(t,n)=>{removeTheme().then(o=>{sendReply(n.channel.id,o)})}};var themes$1=[themes,apply,clear];const debug={id:"debug-command",name:"debug",displayName:"debug",description:"Print out your device information",displayDescription:"Print out your device information",applicationId:section.id,type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltInText,execute:()=>{let t=`**Debug Info:**
`;return t+=`> Enmity: ${window.enmity.version}
`,t+=`> Discord: ${getVersion()} (${getBuild()})
`,t+=`> Device: ${getDevice()}
`,t+=`> System: ${getSystemVersion()}
`,{content:t}}},reload={id:"reload-command",name:"reload",displayName:"reload",description:"Reload Discord",displayDescription:"Reload Discord",applicationId:section.id,type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltIn,execute:function(t){reloadDiscord()}},token={id:"token-command",name:"token",displayName:"token",description:"Show your Discord's token",displayDescription:"Show your Discord's token",applicationId:section.id,type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltIn,execute:function(t,n){sendReply(n.channel.id,getToken())}};var utils=[debug,reload,token];const logger=getModule$1(t=>t.default?.name==="Logger"),EnmityLogger=new logger.default("Enmity");let socket;function connectWebsocket(host){console.log("Connecting to debug ws"),socket!==void 0&&socket.readyState!==WebSocket.CLOSED&&(socket.close(),socket=null),socket=new WebSocket(`ws://${host}`),socket.addEventListener("open",()=>{console.log("Connected with debug websocket"),showToast({content:"Connected to the websocket server."})}),socket.addEventListener("error",t=>{console.log(`Error with debug websocket: ${t.message}`),showToast({content:"An error occured with the websocket connection."})}),socket.addEventListener("close",t=>{console.log(`Error with debug websocket: ${t.message}`),showToast({content:"The websocket connection has been closed."})}),socket.addEventListener("message",message=>{try{console.log(eval(message.data))}catch(t){console.error(t)}})}function prepareWebsocket(){const t=nativeLoggingHook;globalThis.nativeLoggingHook=(n,o)=>(socket?.readyState===WebSocket.OPEN&&socket.send(JSON.stringify({level:o,message:n})),EnmityLogger.log(n),t(n,o)),window.enmity_debug===!0&&connectWebsocket(`${window.enmity_debug_ip}:9090`)}function sendMessage(t){socket?.readyState===WebSocket.OPEN&&socket.send(t)}const connect={id:"websocket-devtools",applicationId:section.id,name:"websocket",displayName:"websocket",description:"Connect to the websocket server",displayDescription:"Connect to the websocket server",type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltIn,options:[{name:"host",displayName:"host",description:"Host of the debugger",displayDescription:"Host of the debugger",type:ApplicationCommandOptionType.String,required:!0}],execute:t=>{const n=t[0].value;connectWebsocket(n)}},dump={id:"dump-command",applicationId:section.id,name:"dump",displayName:"dump",description:"Dump Discord's modules",displayDescription:"Dump Discord's modules",type:ApplicationCommandType.Chat,inputType:ApplicationCommandInputType.BuiltIn,execute:function(t,n){const o=n.channel.id,r=window.modules;function a(s){if(typeof s=="function")return s.toString();if(Array.isArray(s))return s.map(a);if(typeof s=="object"){const l={};for(const c in s)l[c]=a(s[c]);return l}return s}for(const s of Object.keys(r))try{const l=r[s],c={id:s};if(!l.publicModule?.exports)continue;const u=l.publicModule.exports;for(const d of Object.keys(l.publicModule.exports))c[d]=a(u[d]);sendMessage(JSON.stringify(c,null,"	"))}catch(l){console.log(`Couldn't dump module ${s}`),console.log(l)}sendReply(o,"Modules has been dumped.")}};var websocket=[connect,dump];function prepareCommands(){const t=[...plugins,...websocket,...utils,...themes$1];registerCommands("enmity",t)}try{prepareWebsocket(),prepareApi(),applyPatches(),prepareCommands()}catch(t){console.error(t)}

"use strict";(self.webpackChunkwebgi=self.webpackChunkwebgi||[]).push([[803],{5898:function(e,t,r){var i=r(352),o=r.n(i)()((function(e){return e[1]}));o.push([e.id,':root{--tp-blade-unit-size: 24px;--tp-element-border-radius: 0.25rem;--tp-base-background-color: #28223C;--tp-base-shadow-color: hsla(0, 0%, 0%, 0.2);--tp-button-background-color: hsla(230, 10%, 80%, 1.00);--tp-button-background-color-active: hsla(230, 10%, 95%, 1.00);--tp-button-background-color-focus: hsla(230, 10%, 90%, 1.00);--tp-button-background-color-hover: hsla(230, 10%, 85%, 1.00);--tp-button-foreground-color: hsla(230, 20%, 11%, 1.00);--tp-container-background-color: hsla(230, 25%, 16%, 0.65);--tp-container-background-color-active: hsla(230, 25%, 31%, 0.65);--tp-container-background-color-focus: hsla(230, 25%, 26%, 0.65);--tp-container-background-color-hover: hsla(230, 25%, 21%, 0.65);--tp-container-foreground-color: hsl(240, 10%, 92%);--tp-groove-foreground-color: hsla(230, 20%, 8%, 1.00);--tp-input-background-color: hsla(230, 20%, 8%, 1.00);--tp-input-background-color-active: hsla(230, 28%, 23%, 1.00);--tp-input-background-color-focus: hsla(230, 28%, 18%, 1.00);--tp-input-background-color-hover: hsla(230, 20%, 13%, 1.00);--tp-input-foreground-color: hsla(230, 10%, 80%, 1.00);--tp-monitor-background-color: hsla(230, 20%, 8%, 1.00);--tp-monitor-foreground-color: hsla(230, 12%, 48%, 1.00);--tp-label-foreground-color: #E4E2ED;--tp-font-family: "Inter"}.tp-fldv{margin-top:.25rem;margin-bottom:.25rem;background-blend-mode:luminosity;position:relative}.tp-fldv .tp-fldv{margin-top:.5rem;margin-bottom:.5rem}.tp-fldv .tp-brkv{background-color:rgba(32,32,50,.85)}.tp-fldv .tp-fldv .tp-brkv{background-color:rgba(32,32,50,.25) !important}.tp-fldv-expanded>.tp-fldv_b{background-color:rgba(32,32,50,.8) !important}.tp-fldv_b{height:calc(var(--bld-us)*1.5 + 4px) !important;font-size:.85rem !important}.tp-fldv_b+.tp-brkv .tp-fldv_b{height:calc(var(--bld-us)*1.1 + 4px) !important;font-size:.65rem !important}.tp-lblv_l{font-size:.7rem !important;font-weight:400 !important;flex-grow:1 !important;flex-basis:20% !important}.tp-lblv_v{flex-grow:1 !important;flex-basis:50% !important}.tp-txtv_i{font-size:.7rem !important;font-weight:400 !important}.tp-fldv_t{font-weight:400 !important;padding-left:1.5rem !important}.tp-fldv_m{right:auto !important;left:.75rem;opacity:1 !important}.pluginOptionsButton{position:absolute;right:0;top:.75rem;padding-left:.5rem;padding-right:.5rem;height:-moz-min-content;height:min-content;background:rgba(0,0,0,0);color:#eee;border:none}',""]),t.Z=o},7769:function(e,t,r){r.d(t,{n:function(){return o}});var i=r(5793);class o extends i.P6{async parseAsync(e,t){const r=this.parse(e.renderer.rendererObject,e,t);return new Blob([r],{type:"image/x-exr"})}}},38:function(e,t,r){r.d(t,{n:function(){return u}});var i=r(9008),o=r(3995),s=r(3206),n=r(4107),a=r(2988);class p extends i.SimpleEventDispatcher{get state(){return this._state}setState(e,t){this._state=e,this.dispatchEvent({type:e,...t})}_setOptions(e){Object.assign(this.options,e)}setOptions(e){this._setOptions(e)}constructor(e,t){super(),this._state="stopped",this._console=console,this._currentRecording=[],this._frameCount=0,this._ondataavailable=e=>{e.data&&e.data.size>0&&this._currentRecording.push(e.data)},this._canvas=e,t?.mimeType,this.options={mimeType:"auto",frameRate:30,stepMode:!1},this._setOptions(t||this.options)}isRecording(){return"recording"===this._state}requestFrame(){return"recording"===this._state&&(this._frameCount++,!0)}dispose(){(this.isRecording()||"paused"===this._state)&&this.stop((e=>{this._console.warn("disposed with blob",e),this.dispose()}))}}class d extends p{constructor(){super(...arguments),this._currentImages=[],this._onstop=e=>{this._currentImages.length>0&&(this._writeImages([...this._currentImages]),this._currentImages=[]),this.setState("stopped")},this._onerror=e=>{this.setState("error",{error:e}),this._console.error(e)}}start(){if("recording"!==this.state){if("error"===this.state&&this._console.warn("Resetting from error state."),"paused"===this.state)return this.setState("starting"),void this.setState("recording");this._currentRecording=[],this._currentImages=[],this._frameCount=0,this.setState("starting"),window&&window.showDirectoryPicker&&window.showDirectoryPicker().then((async e=>{const t=await(e?.getDirectoryHandle("i-"+Math.floor(Date.now()),{create:!0}));this._imgDirectory=t,this._frameCount=0,this.setState("recording")})).catch((e=>{this._onerror({detail:e})}))}else this._console.log("Already recording canvas")}requestFrame(){if(!super.requestFrame())return!1;const e=this.options.mimeType;return this._canvas.toBlob((t=>{this._currentImages.push(["frame_"+String(this._frameCount).padStart(5,"0")+(e.includes("png")?".png":".jpg"),t])}),e,90),this._currentImages.length>60&&(this._writeImages([...this._currentImages]),this._currentImages=[]),!0}pause(){"paused"!==this.state&&"stopped"!==this.state&&this.setState("paused")}stop(e){"stopped"!==this.state&&("error"!==this.state?(this._recordingCallback=e,this.setState("stopping"),this._onstop({})):this._console.error("Recorder in error state, cannot stop, call start again."))}async _writeImages(e){if(!this._imgDirectory)return;const t=[];for(const r of e){const e=await this._imgDirectory.getFileHandle(r[0],{create:!0});t.push((0,i.writeFile)(e,r[1]))}await Promise.all(t)}}class c extends p{_setOptions(e){super._setOptions(e),this.options.mimeType&&"auto"!==this.options.mimeType||(this.options.mimeType=c.GetSupportedMimeTypes([],["h264"],!0)??c.GetSupportedMimeTypes(void 0,void 0,!0)),this.options.mimeType&&!this.options.mimeType?.startsWith("video/")||window.MediaRecorder||(this._console.warn("MediaRecorder is not supported, switching to png"),this.options.mimeType="image/png"),this.options.mimeType||console.warn(new Error("No supported mimetype found"))}setOptions(e){this._setOptions(e)}constructor(e,t){super(e,t),this._resumeSyncTime=0,this._onstop=e=>{if(this._recorder&&this._currentRecording.length>0){const e=new Blob(this._currentRecording,{type:this.options.mimeType});this._recordingCallback?.(e)}this._recorder=void 0,this.setState("stopped")},this._onstart=e=>{this._frameCount=0,this.options.stepMode&&this._recorder?.pause(),this.setState("recording")},this._onresume=e=>{if("paused"!==this.state&&"starting"!==this.state&&"stopped"!==this.state||this.setState("recording"),!this.options.stepMode)return;const t=()=>{"recording"===this.state&&this._recorder?.pause()},r=Math.min(this._resumeSyncTime-(0,i.now)(),0)+1e3/this.options.frameRate;r>0?(0,i.timeout)(r).then(t):t()},this._onerror=e=>{this.setState("error",{error:e}),this._console.error(e),this._recorder=void 0}}start(){if("recording"===this.state)return void this._console.log("Already recording canvas");if("error"===this.state&&(this._recorder=void 0,this._console.warn("Resetting from error state.")),this._recorder)return"paused"===this.state?(this.setState("starting"),void this._recorder.resume()):void this._console.warn("Canvas recorder unknown state",this.state);const e={mimeType:this.options.mimeType,videoBitsPerSecond:this.options.videoBitsPerSecond};if(this._currentRecording=[],this._frameCount=0,e.mimeType?.startsWith("video")){if(!window.MediaRecorder)return this._console.error("MediaRecorder not supported, use image sequence"),void this.setState("error",{error:new Error("MediaRecorder not supported")});{const t=this._canvas.captureStream(this.options.stepMode?0:this.options.frameRate),r=t.getVideoTracks()?.[0];this._track=r,this._recorder=new window.MediaRecorder(t,e),this._recorder.onstop=this._onstop,this._recorder.ondataavailable=this._ondataavailable,this._recorder.onerror=this._onerror,this._recorder.onresume=this._onresume,this._recorder.onstart=this._onstart}}this.setState("starting"),this._recorder&&this._recorder?.start()}requestFrame(){return!(!this._recorder||!super.requestFrame()||this._track&&this.options.stepMode&&(this._resumeSyncTime=(0,i.now)(),this._track.requestFrame(),this._recorder.resume(),0))}pause(){"paused"!==this.state&&"stopped"!==this.state&&(this.options.stepMode?console.error("Pause not supported in stepMode"):this._recorder&&(this._recorder.pause(),this.setState("paused")))}stop(e){"stopped"!==this.state&&("error"!==this.state?(this._recordingCallback=e,this.setState("stopping"),this._recorder&&this._recorder.stop()):this._console.error("Recorder in error state, cannot stop, call start again."))}dispose(){this._recorder&&(super.dispose(),this._recorder=void 0)}static GetSupportedMimeTypes(e,t,r=!1){if(!window.MediaRecorder)return r?void 0:[];const i=["webm","ogg","mp4","x-matroska"].filter((t=>!e||e.length<1||e.includes(t))),o=["vp9","vp9.0","vp8","vp8.0","avc1","av1","h265","h.265","h264","h.264","opus"].filter((e=>!t||t.length<1||t.includes(e))),s=[];return i.forEach((e=>{const t=`video/${e}`;o.forEach((e=>{[`${t};codecs=${e}`,`${t};codecs:${e}`,`${t};codecs=${e.toUpperCase()}`,`${t};codecs:${e.toUpperCase()}`,`${t}`].forEach((e=>{MediaRecorder.isTypeSupported(e)&&s.push(e)}))}))})),r?s.length>0?s[0]:void 0:s}}class l extends p{constructor(e,t){super(e,t),this._workerRunning=!1,this.worker=new Worker((0,i.remoteWorkerURL)(l.LIBRARY_PATH+"ffmpeg-worker-mp4.js",l.LIBRARY_PATH+"ffmpeg-worker-mp4.wasm"));let r=0;this.worker.onmessage=e=>{const t=e.data;switch(t.type){case"stdout":case"stderr":if(0===t.data.indexOf("frame=")){const e=parseInt(t.data.split("frame=")[1].split("fps")[0].trim()),r=this._frameCount,i=Math.round(e/r*100);this.dispatchEvent({type:"encode-progress",progress:i,frame:e,totalFrames:r})}console.log(t.data+"\n");break;case"exit":console.log("Process exited with code "+t.data),r=parseInt(t.data);break;case"done":if(void 0===t.data.MEMFS[0].data)return void console.log("video processing failed");this._workerRunning=!1,this._recordingCallback?.(new Blob([t.data.MEMFS[0].data],{type:"video/mp4"})),console.timeEnd("ffmpeg-record"),this.setState("stopped")}}}start(){"recording"!==this.state?("error"===this.state&&console.warn("Resetting from error state."),"paused"!==this.state&&(this._frameCount=0),this.setState("starting"),this.setState("recording")):console.log("Already recording canvas")}stop(e){"stopped"!==this.state&&("error"!==this.state?(this._recordingCallback=e,this.setState("stopping"),this._onStop()):console.error("Recorder in error state, cannot stop, call start again."))}_onStop(){const e=this._canvas.width%2==0?this._canvas.width:this._canvas.width-1;this._workerRunning=!0,console.time("ffmpeg-record");const t=this.options.frameRate.toString(),r=this.options.frameRate.toString();this.worker.postMessage({type:"run",arguments:["-r",t,"-an","-i","img%03d.jpeg","-c:v","libx264","-crf","17","-filter:v",`scale=${e}:-2`,"-pix_fmt","yuv420p","-b:v","10M","-preset","ultrafast","-r",r,"out.mp4"]})}requestFrame(){return!!super.requestFrame()&&(this.sendBlobToWorker(this._frameCount-1),!0)}sendBlobToWorker(e){this._canvas.toBlob((t=>{this.worker.postMessage({type:"image",file:{name:`img${this.pad(e,3)}.jpeg`,data:t}})}),"image/jpeg",90)}pad(e,t){return(e+="").length>=t?e:new Array(t-e.length+1).join("0")+e}pause(){"paused"!==this.state&&"stopped"!==this.state&&this.setState("paused")}}l.LIBRARY_PATH="https://cdn.jsdelivr.net/npm/@repalash/ffmpeg.js@4.2.9005/dist/";var h=function(e,t,r,i){var o,s=arguments.length,n=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(n=(s<3?o(n):s>3?o(t,r,n):o(t,r))||n);return s>3&&n&&Object.defineProperty(t,r,n),n};class u extends o.Q{get recorder(){return this._recorder}constructor(){super(),this.enabled=!0,this.convergeMode=!1,this.mimeType="image/jpeg",this.videoFrameRate=30,this._recorders={},this._renderToScreenDisabled=!1,this._preRender=()=>{if(this.convergeMode&&this._recorder?.isRecording()){const e=this._viewer.renderer.composer.renderToScreen;this._viewer.renderer.composer.renderToScreen=this._viewer?.getPluginByType("Progressive")?.isConverged()||!1,e&&!this._viewer.renderer.composer.renderToScreen&&(this._renderToScreenDisabled=!0)}},this._postRender=()=>{if(this._recorder?.isRecording()&&(!this.convergeMode||this._viewer?.getPluginByType("Progressive")?.isConverged(!0))){const e=()=>this._recorder?.requestFrame();if(this.convergeMode){const t=1;(0,i.timeout)(t).then(e)}else e()}this._renderToScreenDisabled&&(this._viewer.renderer.composer.renderToScreen=!0)},this._refreshUi=()=>{this.uiConfig.children?.map((e=>(0,i.getOrCall)(e))).flat(2).forEach((e=>e?.uiRefresh?.()))},this.uiConfig={type:"folder",label:"Video Export",children:[{type:"slider",label:"Frame Rate",bounds:[1,60],stepSize:1,property:[this,"videoFrameRate"]},{type:"checkbox",limitedUi:!0,property:[this,"convergeMode"]},{type:"dropdown",label:"Mime type",limitedUi:!0,property:[this,"mimeType"],children:[["Auto Video (x264)","auto"],["PNG sequence","image/png"],["JPEG sequence","image/jpeg"],["MP4 Video (ffmpeg)","video/mp4"]].map((e=>({label:e[0],value:e[1]})))},{type:"input",disabled:!0,label:"State",getValue:()=>this.recorder?.state??"not initialized"},{type:"button",label:()=>this.recorder?.isRecording()?"Stop Recording":"Start Recording",value:()=>{this.recorder?.isRecording()?this.stopRecording().then((async e=>{if(e){const t=e.type.split(";")[0].split("/").pop()||"mp4";await this._downloadBlob(e,t)}})):this.startRecording()}},{type:"button",limitedUi:!0,label:"Record Camera Views",hidden:()=>!!this.recorder?.isRecording()||!this._viewer?.getPluginByType("CameraViews"),value:()=>{this._viewer?.getPluginByType("CameraViews")?.recordAllViews()}},{type:"button",limitedUi:!0,label:"Record Camera Views + GLTF Anim",hidden:()=>!!this.recorder?.isRecording()||!this._viewer?.getPluginByType("CameraViews")||!this._viewer?.getPluginByType("GLTFAnimation")?.animations.length,value:()=>{const e="playing"===this._viewer?.getPluginByType("GLTFAnimation")?.animationState;this._viewer?.getPluginByType("CameraViews")?.recordAllViews((()=>{this._viewer?.getPluginByType("GLTFAnimation")?.playAnimation()})).then((()=>{e||this._viewer?.getPluginByType("GLTFAnimation")?.stopAnimation()}))}},{type:"button",limitedUi:!0,label:"Record GLTF Anim",hidden:()=>!!this.recorder?.isRecording()||!this._viewer?.getPluginByType("GLTFAnimation")?.animations.length,value:async()=>{if(this.recorder?.isRecording())return;const e=this._viewer?.getPluginByType("GLTFAnimation");if(!e)return;let t=!1;e.loopAnimations&&(t=!0),t&&(e.loopAnimations=!1);const r=await this.record((async()=>e.playAnimation()));if(t&&(e.loopAnimations=!0),r){const e=r.type.split(";")[0].split("/").pop()||"mp4";await this._downloadBlob(r,e)}}},{type:"button",limitedUi:!0,label:"Record 360 animation",hidden:()=>!!this.recorder?.isRecording(),value:async()=>{if(this.recorder?.isRecording())return;if(!this._viewer)return;const e=await this._viewer.prompt("Enter duration in seconds","5",!0);if(null===e)return;const t=parseFloat(e||"5");if(!isFinite(t)||t<=0)return;const r=this._viewer.scene.activeCamera,i=r.interactionsEnabled;i&&(r.interactionsEnabled=!1);const o=r.position.clone(),n=await this._viewer.getPluginByType("PopmotionPlugin");if(!n)return void console.error("Popmotion plugin not found");const p=(new a.$V).setFromVector3(o);r.position.setFromSpherical(p),r.positionUpdated(!0);const d=await this.record((async()=>n.animate({from:p.theta,to:p.theta+2*Math.PI,duration:1e3*t,ease:s.q8.linear,onUpdate:e=>{p.theta=e,r.position.setFromSpherical(p),r.positionUpdated(!0)}}).promise));if(r.position.copy(o),r.positionUpdated(!0),i&&(r.interactionsEnabled=!0),d){const e=d.type.split(";")[0].split("/").pop()||"mp4";await this._downloadBlob(d,e)}}}]},this.refreshRecorderOptions=this.refreshRecorderOptions.bind(this)}isRecording(){return this._recorder?.isRecording()??!1}refreshRecorderOptions(){if(!this._viewer)return;let e="image";"video/mp4"===this.mimeType?e="ffmpeg.js":"auto"===this.mimeType?e="canvas-media":this.mimeType.startsWith("image")&&(e="image"),this._recorder=this._getRecorder(e),this._recorder&&this._recorder.setOptions({frameRate:this.videoFrameRate,mimeType:this.mimeType,stepMode:this.convergeMode})}async onAdded(e){await super.onAdded(e),e.addEventListener("preRender",this._preRender),e.addEventListener("postRender",this._postRender),e.scene.addEventListener("addSceneObject",this._refreshUi),this._recordIndicator=document.createElement("div"),this._recordIndicator.style.width="20px",this._recordIndicator.style.height="20px",this._recordIndicator.style.backgroundColor="red",this._recordIndicator.style.top="10px",this._recordIndicator.style.left="10px",this._recordIndicator.style.position="absolute",this._recordIndicator.style.borderRadius="100%",this._recordIndicator.style.visibility="hidden",e.canvas.parentElement?.appendChild(this._recordIndicator),this.refreshRecorderOptions()}_stateChange(e){this.dirty=e,this._viewer?.setDirty(),this.uiConfig.children?.map((e=>(0,i.getOrCall)(e))).flat(2).forEach((e=>e?.uiRefresh?.()))}async onRemove(e){return e.removeEventListener("preRender",this._preRender),e.removeEventListener("preRender",this._postRender),e.scene.removeEventListener("addSceneObject",this._refreshUi),this._recorder?.dispose(),Object.values(this._recorders).forEach((e=>{e?.dispose()})),super.onRemove(e)}async record(e,t){if(this.enabled&&!this._recorder?.isRecording())return await new Promise(((r,i)=>{const o=()=>{this.removeEventListener("start",s),this.removeEventListener("stop",o),this.removeEventListener("error",n)},s=async()=>{o(),t?.(),await e(),r()},n=async()=>{o(),i()};this.addEventListener("start",s),this.addEventListener("stop",o),this.addEventListener("error",n),this.startRecording()})),await this.stopRecording()}startRecording(){return!!this.enabled&&!1===this.recorder?.isRecording()&&(this.recorder.options.stepMode=this.convergeMode,this.recorder.start(),!0)}async stopRecording(){if(this.recorder?.isRecording())return new Promise(((e,t)=>this.recorder?.stop(e)))}async _downloadBlob(e,t){const r=await(this._viewer?.prompt("Canvas Recorder: Save file as","recording.mp4",!1)),i=this._viewer?.getPluginByType("FileTransferPlugin");i?await i.exportFile(e,r||"recording.mp4"):this._viewer?.console.error("FileTransferPlugin required to export/download file")}_getRecorder(e){if(!this._viewer)throw new Error("No viewer");if(this._recorders[e])return this._recorders[e];let t;return t="canvas-media"===e?new c(this._viewer.canvas,{frameRate:this.videoFrameRate,mimeType:this.mimeType}):"ffmpeg.js"===e?new l(this._viewer.canvas,{frameRate:this.videoFrameRate,mimeType:this.mimeType}):new d(this._viewer.canvas,{frameRate:this.videoFrameRate,mimeType:this.mimeType}),t.addEventListener("starting",(()=>this._stateChange(!1))),t.addEventListener("recording",(()=>{this._recordIndicator.style.visibility="visible",this._recordIndicator.style.backgroundColor="red",this.dispatchEvent({type:"start"}),this._stateChange(!this.convergeMode)})),t.addEventListener("error",(()=>{this.dispatchEvent({type:"error"})})),t.addEventListener("paused",(()=>this._stateChange(!1))),t.addEventListener("stopped",(()=>{this._recordIndicator.style.visibility="hidden",this.dispatchEvent({type:"stop"}),this._stateChange(!1)})),t.addEventListener("encode-progress",(e=>{this.dispatchEvent({...e})})),this._recorders[e]=t,t}}u.PluginType="CanvasRecorder",h([(0,i.onChange)(u.prototype.refreshRecorderOptions),(0,n.qC)()],u.prototype,"convergeMode",void 0),h([(0,i.onChange)(u.prototype.refreshRecorderOptions),(0,n.qC)()],u.prototype,"mimeType",void 0),h([(0,i.onChange)(u.prototype.refreshRecorderOptions),(0,n.qC)()],u.prototype,"videoFrameRate",void 0)},5614:function(e,t,r){r.d(t,{L:function(){return V}});var i=r(9008),o=r(819),s=r(4821),n=r(589),a=r(2665),p=r(2988),d=r(2314);const c=(e,t,r)=>{const i=e.controller_,o=i.parent?.children?.indexOf(i),s=((e,t)=>t.controller_.rackController.rack===e.controller_.parent)(e,t);return!(s&&o===r||(t.add(e,r),0))},l=(e,t,r,o)=>{let s=t.uiRef;s?.controller_.viewProps.get("disposed")&&(s=void 0);const n=s?.expanded;if(!s){const r=e.addFolder({title:""});s=r,s.on("fold",(e=>{let o=r.expanded;(0,i.safeSetProperty)(t,"expanded",o,!0),o=(0,i.getOrCall)(t.expanded)??o,o!==r.expanded&&(r.expanded=o),t.uiRefresh?.("postFrame",!0,10),o?t.onExpand?.(t):t.onCollapse?.(t)}))}if(!s)return s;s.expanded=(0,i.getOrCall)(t.expanded)??n??!1;const a=(t.children??[]).map((e=>e&&(0,i.getOrCall)(e))).flat(2).filter((e=>e));let p=0;for(const e of a){if(Array.isArray(e)||"object"!=typeof e){console.error("child is not an object",e);continue}let t=e.uiRef;t&&t.controller_.viewProps.get("disposed")&&(e.uiRef=void 0,e.uiRefresh=void 0),t=e.uiRef,t||(r.appendUiObject({uiConfig:e},s),t=e.uiRef),t&&c(t,s,p++)&&r.appendUiObject({uiConfig:e},s)}let d=s.children;for(;d.length>p;){const e=d[d.length-1];s.remove(e),e.dispose(),d=s.children}s.controller_.props.set("title",(0,i.getOrCall)(t.label)??"");const l=s.controller_.view.containerElement,h=(0,i.getOrCall)(t.domChildren,[]);if(void 0!==h?.length){const e=[];for(let t=0;t<l.children.length;t++){const r=l.children[t];r.dataset?.tpCustomDOM&&e.push(r)}for(const t of e)l.removeChild(t);for(const e of h)e.parentElement!==l&&(l.appendChild(e),e.dataset.tpCustomDOM="true");s.controller_.foldable.cleanUpTransition()}return s},h=(e,t,r,o)=>{const[s,n]=t.property??[void 0,void 0],a=(0,i.getOrCall)(t.label)??n;let p=t.uiRef;return p?.controller_.viewProps.get("disposed")&&(p=void 0),p||(p=e.addButton({title:""}),p.on("click",(async()=>{const e=[];t.prompt&&e.push(await r.prompt(...t.prompt));const i=(s&&n?s[n]:void 0)??t.value;if("function"==typeof i){const o=()=>{r.removeEventListener("postFrame",o),i.call(t,...e)};r.addEventListener("postFrame",o)}else console.warn("Invalid action type for button")}))),p&&(p.title=(a??"click me")+""),p},u=(e,t,r,o)=>{const s=Object.fromEntries(((0,i.getOrCall)(t.children)??[]).map((e=>(0,i.getOrCall)(e))).flat(2).filter((e=>e)).map((e=>{const t=(0,i.getOrCall)(e.label);return[t,e.value??t]})));return v(e,t,r,{options:s,...o??{}})},m=(e,t,r,o)=>{const s=(0,i.getOrCall)(t.bounds),n=(s?.length??0)>=2?s[1]:1,a=(s?.length??0)>=1?s[0]:0,p=t.stepSize||void 0;return v(e,t,r,{min:a,max:n,step:p,...o??{}})},g=(e,t,r,o)=>{const s=(0,i.getOrCall)(t.bounds);if(!s||s.length<1)return v(e,t,r,{...o??{}});const n=(s.length??0)>=2?s[1]:1,a=(s.length??0)>=1?s[0]:0,d={min:a,max:n,step:t.stepSize??(n-a)/100},c={x:d,y:d};"vec3"!==t.type&&"vec4"!==t.type||(c.z=d),"vec4"===t.type&&(c.w=d);const l=t.property;if(void 0===t.value&&l&&l[0]&&"object"==typeof l[0]&&l[0][l[1]]&&Array.isArray(l[0][l[1]])){const[e,r]=l,i=e[r],o=i.length,s=(new(2===o?p.FM8:3===o?p.Pa4:p.Ltg)).fromArray(i);t.value=s,t.property=void 0,t.onChange=[()=>{e[r]=s.toArray()},...Array.isArray(t.onChange)?t.onChange:[t.onChange]].filter((e=>e)),void 0===t.label&&(t.label=r)}return v(e,t,r,{...c,...o??{}})},f=(e,t,r,o)=>{const s=t.property;if(void 0===t.value&&s&&"object"==typeof s[0]&&s[0][s[1]]?.isColor){const[e,r]=s,i=p.KI_;Object.defineProperty(t,"value",{get:()=>{const t=e[r];return t?new d.I(t).getHex(i):0},set:t=>{const o=e[r],s=(new d.I).setHex(t,i);o.isColor?o.copy(s):"number"==typeof o?e[r]=s.getHex():"string"==typeof o&&(e[r]="#"+s.getHexString()),"function"==typeof e?.setDirty&&e.setDirty()}}),t.property=void 0,t.onChange=[...Array.isArray(t.onChange)?t.onChange:[t.onChange]].filter((e=>e)),void 0===t.label&&(t.label=r+"")}return(o=o??{}).view="color",(0,i.getOrCall)(t.inlinePicker)&&(o.picker="inline"),v(e,t,r,o)},v=(e,t,r,o)=>{let s=(0,i.getOrCall)(t.property);if((t.getValue||t.setValue)&&s&&console.error("specify either property or value, or getValue and setValue",t),s)t.value&&console.warn("Both property and value are defined, value will be ignored",t);else if((Object.hasOwn?Object.hasOwn(t,"value"):t.hasOwnProperty("value"))||void 0!==t.value||!t.getValue&&!t.setValue||(Object.defineProperty(t,"value",{get:()=>t.getValue?.(),set:e=>t.setValue?.(e)}),s=[t,"value"]),s||void 0===t.value||(s=[t,"value"]),!s)return void console.error("cannot determine property",t);o=o??{};const n={label:(0,i.getOrCall)(t.label)??s[1],...o};let a=t.uiRef;if(a?.controller_.viewProps.get("disposed")&&(a=void 0),!a&&"object"==typeof s[0]&&s[0]){const[r,i]=s;try{a=t.isMonitor?e.addMonitor(r,i,n):e.addInput(r,i,n).on("change",(e=>{[t.onChange].flat().forEach((t=>"function"==typeof t&&t?.(e))),"function"==typeof r?.setDirty&&r.setDirty(e)}))}catch(e){if(!e.message.startsWith("No matching controller for"))throw e;a=void 0}}if(a){for(const[e,t]of Object.entries(n)){const r=a.controller_.props.value(e);void 0!==r&&r.rawValue!==t&&a.controller_.props.set(e,t)}"slider"===t.type&&(void 0!==n.min&&a.controller_.valueController.sliderController.props.set("minValue",n.min),void 0!==n.max&&a.controller_.valueController.sliderController.props.set("maxValue",n.max)),a?.controller_.valueController.view.inputElement?.setAttribute("placeholder",(0,i.getOrCall)(t.placeholder)??""),a.refresh()}return a};var _=r(8570);class y extends i.SimpleEventDispatcher{constructor(e=!1,t=!1,r=!1,i=!0,o=document.body){super(),this._refreshQueue={preRender:[],postRender:[],preFrame:[],postFrame:[]},this._lastModeTime={preRender:0,postRender:0,preFrame:0,postFrame:0},this._typeGenerators={panel:l,folder:l,input:v,number:v,slider:m,dropdown:u,checkbox:v,color:f,vec:g,vec2:g,vec3:g,vec4:g,button:h,monitor:(e,t,r,i)=>(t.isMonitor=!0,v(e,t,r,i)),dummy:(e,t,r,i)=>v(e,t,r,i)},this.alert=async e=>alert(e),this.confirm=async e=>confirm(e),this.prompt=async(e,t,r=!0)=>prompt(e,t),this._expand=e,this._limitedOptions=r;const s=this._createUiContainer();o.appendChild(s),this._pane=new a.Pane({title:"Configuration",container:s}),this._pane.expanded=this._expand,i&&(this.addEventListener("postFrame",(()=>this.refreshQueue("postFrame"))),setTimeout((()=>{this.dispatchEvent({type:"postFrame"})}),32))}refreshQueue(e){const t=this._refreshQueue[e],r=[],o=(0,i.now)(),s=o-this._lastModeTime[e];t.forEach((e=>{e[2]>.001?(e[2]-=s,r.push(e)):this._refreshUiObject(e[0],e[1],e[2])})),this._refreshQueue[e]=r,this._lastModeTime[e]=o}addToRefreshQueue(e,t){const r=t[0]?.uiConfig,i=r?.uuid,o=this._refreshQueue[e],s=o.find((e=>e[3]===i));s?s[2]=Math.max(s[2],t[2]):o.push([...t,i]),this._refreshQueue[e]=o}dispose(){this._pane?.dispose(),this._pane=void 0}appendUiObject(e,t){e&&this._appendUiObject(e,t)}_appendUiObject(e,t){const{uiConfig:r}=e??{};if(r&&(!this._limitedOptions||r.limitedUi)&&(t=t??this._pane,r.type)){r.uuid||(r.uuid=(0,_.Z)()),r.uiRef&&r.uiRefType!==r.type&&this.removeUiConfig(r);const o=this._typeGenerators[r.type]?.(t,r,this);o&&(o.hidden=(0,i.getOrCall)(r.hidden)??!1,o.disabled=(0,i.getOrCall)(r.disabled)??!1),r.uiRef=o,r.uiRefType=o?r.type:void 0,r.uiRefresh=(i="postFrame",o=!1,s=0)=>this._uiObjectRefresh(i,e?.uiConfig??r,t,o,s),o?.controller_.viewProps.handleDispose((()=>{r.uiRef=void 0,r.uiRefType=void 0,r.uiRefresh=void 0}))}}removeUiObject(e){this.removeUiConfig(e?.uiConfig)}removeUiConfig(e){e&&e.uiRef&&(e.uiRef.dispose?.(),e.uiRef=void 0,e.uiRefType=void 0,e.uiRefresh=void 0)}_uiObjectRefresh(e,t,r,i,o){(i?w(t,r):[{uiConfig:t,parentFolder:r}]).forEach((t=>{const r=[{uiConfig:t.uiConfig},t.parentFolder,o];"immediate"===e?this._refreshUiObject(...r):this.addToRefreshQueue(e,r)}))}_refreshUiObject(e,t,r=0){this._appendUiObject(e,t),r>1e-4&&console.error("no support for immediate delay")}_createUiContainer(){const e=(0,i.createDiv)({id:"tweakpaneUiContainer",addToBody:!1});return(0,i.createStyles)(i.css`
          :root{
            --tweakpane-ui-container-width: 300px;
          }
          @media only screen and (min-width: 1500px) {
            :root{
              --tweakpane-ui-container-width: 300px;
            }
          }
          @media only screen and (min-width: 2500px) {
            :root{
              --tweakpane-ui-container-width: 500px;
            }
          }
          #tweakpaneUiContainer {
            position: fixed;
            top: 0px;
            padding-right: 4px;
            padding-bottom: 10px;
            right: 10px;
            width: var(--tweakpane-ui-container-width);
            height: auto;
            overflow-y: scroll;
            z-index: 100;
            pointer-events: auto;
            max-height: calc(100% - 6rem);
            border-radius: 0.5rem;
            font-family: Inter, ui-sans-serif, system-ui, -apple-system, "system-ui", "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
          }
        `),e}}function w(e,t,r){return r=r??[],e&&e.uiRef?(r.push({uiConfig:e,parentFolder:t}),[...e.children||[]].forEach((t=>{"function"!=typeof t&&t&&(Array.isArray(t)?t.forEach((t=>r=w(t,e.uiRef,r))):r=w(t,e.uiRef,r))})),r):r}var b=r(1974),R=r(8052),C=r(7769),T=r(5701),x=r.n(T),O=r(8236),E=r.n(O),k=r(6850),S=r.n(k),F=r(7182),P=r.n(F),M=r(9213),j=r.n(M),D=r(5898),U={};D.Z&&D.Z.locals&&(U.locals=D.Z.locals);var L,B=0,I={};I.styleTagTransform=j(),I.setAttributes=S(),I.insert=function(e,t){(t.target||document.head).appendChild(e)},I.domAPI=E(),I.insertStyleElement=P(),U.use=function(e){return I.options=e||{},B++||(L=x()(D.Z,I)),U},U.unuse=function(){B>0&&!--B&&(L(),L=null)};var A=U;class V extends y{constructor(e=!1,t=!1,r=!1,i=document.body){super(e,t,r,!1),this.dependencies=[s.k],this._preRender=()=>this.refreshQueue("preRender"),this._postRender=()=>this.refreshQueue("postRender"),this._postFrame=e=>{this.dispatchEvent(e),this.refreshQueue("postFrame")},this._preFrame=()=>this.refreshQueue("preFrame"),this._plugins=[],this.alert=async e=>this._viewer?this._viewer.alert(e):super.alert(e),this.confirm=async e=>this._viewer?this._viewer.confirm(e):super.confirm(e),this.prompt=async(e,t,r=!0)=>this._viewer?this._viewer.prompt(e,t,r):super.prompt(e,t,r),this._pane.registerPlugin(o),A.use({target:i})}async onAdded(e){this._viewer=e,this._typeGenerators.image=(e=>(t,r,o,a)=>{let d=r.property||r.__property;const c="placeholder";if(void 0===r.value&&(r.getValue||r.setValue)&&(Object.defineProperty(r,"_value",{get:()=>r.getValue?.(),set:e=>r.setValue?.(e)}),d=[r,"_value"]),(!(Object.hasOwn?Object.hasOwn(r,"value"):r.hasOwnProperty("value"))||void 0===r.value)&&d&&"object"==typeof d[0]){const[t,o]=d,n=(0,i.makeTextSvg)("Render Target"),a=(0,i.makeTextSvg)("Data Texture"),l=(0,i.makeTextSvg)("CUBE Texture"),h=(0,i.makeTextSvg)("Compressed Texture"),u={},m={};Object.defineProperty(r,"value",{get:()=>{let r,s=t[o];if(s?.get&&(s=s.get()),!s)return c;if(s.isCompressedTexture&&!s.image.tp_src&&(s.image.tp_src=h),s.isTexture?(s.image&&!s.image.tp_src&&(s.image instanceof ImageBitmap||s.image instanceof HTMLImageElement||s.image instanceof HTMLVideoElement)?s.image.tp_src=(0,i.imageBitmapToBase64)(s.image,160):s.image&&s.isRenderTargetTexture&&!s.image.tp_src?s.__target&&(s.image.tp_src=e.renderer.renderTargetToDataUrl(s.__target)):s.image&&!s.image.tp_src&&(s.image.tp_src=(0,R.T9)(s,160,!1).toDataURL("image/png",90)),s.isRenderTargetTexture&&!s.image.tp_src&&(s.image.tp_src=n),s.isDataTexture&&!s.image.tp_src&&(s.image.tp_src=a),s.image&&(r=s.image.tp_src_uuid,r=r?u[r]:void 0,r||(r=s.image.tp_src||s.image.src))):"string"==typeof s?r=s:s.domainMin?(r=s.texture,s.texture.image&&!s.texture.image.tp_src&&(s.texture.image.tp_src=l),s.texture.image&&(r=s.texture.image.tp_src_uuid,r=r?u[r]:void 0,r||(r=s.texture.image.tp_src||s.texture.image.src))):s&&console.error("unknown value",s),r||(r=c),s.image&&!s.image.tp_src_uuid){const e=(0,_.Z)();s.image.tp_src_uuid=e,m[r]=e}return"string"==typeof r&&(r=u[r]??r),r},set:i=>{const n=t[o],a=e=>{t[o]=e,e?.isTexture&&(e.flipY=e.isDataTexture?e.flipY:n?.flipY??!0)};if("string"==typeof i)return void("string"==typeof n&&a(i));if(!i)return void(r.value=c);if(i.isPlaceholder)return void(n&&(a("string"==typeof n?"":null),"function"==typeof t?.setDirty&&t.setDirty()));let d=i.tp_src_uuid;if(d||(d=i.src??i.tp_src,d=m[d]??d,delete m[d],i.tp_src_uuid=d),d&&(u[d]=i),"string"!=typeof n){if(!(n?.image===i||n?.image?.src===i.src||n?.image?.tp_src===i.tp_src&&null!=i.tp_src||n?.image?.tp_src===i.src&&null!=i.src||n?.image?.src===i.tp_src&&null!=i.tp_src))if(i instanceof File){const o=e?.getPlugin(s.k);if(!o)throw"Viewer or AssetManagerPlugin not found";o.importer?.importSingle({file:i,path:i.src}).then((e=>{if(e){e.isDataTexture&&(e.needsUpdate=!0);const o=i.src?.split("?")?.[0]?.split(".").pop();e.userData&&(e.userData.mimeType||(e.userData.mimeType="image/"+(["jpg","jpeg"].includes(o)?"jpeg":"png"))),a(e),[r.onChange].flat().forEach((e=>"function"==typeof e&&e?.())),"function"==typeof t?.setDirty&&t.setDirty(),r.uiRefresh?.("postFrame",!1)}}))}else{const e=new b.x(i);e.assetType="texture",e.needsUpdate=!0;const s=i.src?.split("?")?.[0]?.split(".").pop();e.userData.mimeType||(e.userData.mimeType="image/"+(["jpg","jpeg"].includes(s)?"jpeg":"png"));const n=["normalMap","aoMap","emissiveMap","roughnessMap","metalnessMap","displacementMap","bumpMap","alphaMap"].includes(o);e.colorSpace=n?p.GUF:p.KI_,e.wrapS=p.rpg,e.wrapT=p.rpg,a(e),[r.onChange].flat().forEach((e=>"function"==typeof e&&e?.())),"function"==typeof t?.setDirty&&t.setDirty(),r.uiRefresh?.("postFrame",!1)}}else a(d)}}),r.__property=r.property,r.property=void 0,void 0===r.label&&(r.label=o)}return(a=a??{}).extensions=[".jpg",".png",".svg",".hdr",".exr",".jpeg",".bmp",".gif",".webp",".cube"],void 0===a.imageFit&&(a.imageFit="contain"),void 0===a.clickCallback&&(a.clickCallback=(t,a)=>{const d=t?.target,l=d?.getBoundingClientRect();if(!l)return void a.click();const h=r.uiRef.controller_.valueController.value.rawValue,u=h===c||h?.isPlaceholder?{}:{"remove image":()=>{r.uiRef.controller_.valueController.value.setRawValue("");const[e,t]=r.property||r.__property||[r,"value"],i="string"==typeof e[t];e[t]=i?"":null,[r.onChange].flat().forEach((e=>"function"==typeof e&&e?.())),"function"==typeof e?.setDirty&&e.setDirty(),r.uiRefresh?.("postFrame",!1),n.D.Remove()},"download image":async()=>{n.D.Remove();const[t,o]=r.property||r.__property||[r,"value"],s=t[o];if(!s)return;const a=s?.image??r.uiRef.controller_.valueController.value.rawValue;let d=s.__rootBlob?s.__rootBlob.objectUrl||URL.createObjectURL(s.__rootBlob):s.userData.rootPath||a?.src;a&&(a instanceof ImageBitmap||a instanceof HTMLImageElement||a instanceof HTMLVideoElement)&&!d&&(d=(0,i.imageBitmapToBase64)(a));let c=s.__rootBlob?s.__rootBlob.name||"image."+(s.__rootBlob.ext||"png"):null;if(!d&&s.isRenderTargetTexture){const i=s.__target;if(s.type===p.ywz)d=e.renderer.renderTargetToDataUrl(i,"image/png",90),c="renderTarget.png";else{const s=(new C.n).parse(e.renderer.rendererObject,i),n=new Blob([s],{type:"image/x-exr"});if(!n)return void console.error("cannot export render target",a,t[o],t,o,r);c="renderTarget.exr",d=URL.createObjectURL(n)}}if(!d&&s.isDataTexture){const e=(new C.n).parse(void 0,s),i=new Blob([e],{type:"image/x-exr"});if(!i)return void console.error("cannot export data texture",a,t[o],t,o,r);c="dataTexture.exr",d=URL.createObjectURL(i)}if(!d)return void console.error("cannot export image",a,t[o],t,o,r);const l=document.createElement("a");document.body.appendChild(l),l.style.display="none",l.href=d,l.download=c||(d.startsWith("data:")?"image.png":d.split("/").pop()??"image.png"),l.target="_blank",l.click(),document.body.removeChild(l)}},m=n.D.Create({...u,"set/replace image":()=>{a.click(),n.D.Remove()},"from url":async()=>{let t="";if(t=await o.prompt("Load texture: Enter Image/Texture URL",t,!0),!t||!t.startsWith("http")&&!t.startsWith("data:image"))return null!==t&&await o.alert("Loading Image: Invalid URL"),void n.D.Remove();t=t.trim();const[i,a]=r.property||r.__property||[r,"value"],d=i[a];if("string"==typeof d)i[a]=t,[r.onChange].flat().forEach((e=>"function"==typeof e&&e?.())),"function"==typeof i?.setDirty&&i.setDirty(),r.uiRefresh?.("postFrame",!1);else{const o=e?.getPlugin(s.k);if(!o)throw"Viewer or AssetManagerPlugin not found";o.importer?.importSinglePath(t).then((e=>{if(e){e.isDataTexture?e.needsUpdate=!0:e&&void 0!==d?.flipY&&(e.flipY=d.flipY);const t=["normalMap","aoMap","emissiveMap","roughnessMap","metalnessMap","displacementMap","bumpMap","alphaMap"].includes(a);e.colorSpace=t?p.GUF:p.KI_,i[a]=e,[r.onChange].flat().forEach((e=>"function"==typeof e&&e?.())),"function"==typeof i?.setDirty&&i.setDirty(),r.uiRefresh?.("postFrame",!1)}else console.warn("Failed to load texture",t)}))}n.D.Remove()},cancel:()=>{n.D.Remove()}},2,l.height+8);d.parentElement?.appendChild(m),l.y>.7*document.body.clientHeight&&(m.style.top="auto",m.style.bottom=l.height+8+"px")}),a.view="input-image",v(t,r,o,a)})(this._viewer),e.addEventListener("preRender",this._preRender),e.addEventListener("postRender",this._postRender),e.addEventListener("preFrame",this._preFrame),e.addEventListener("postFrame",this._postFrame)}async onDispose(e){this.dispose()}async onRemove(e){this._viewer=void 0,e.removeEventListener("preRender",this._preRender),e.removeEventListener("postRender",this._postRender),e.removeEventListener("preFrame",this._preFrame),e.removeEventListener("postFrame",this._postFrame),this.dispose()}setupPluginUi(e){const t=this._viewer?.getPlugin(e);if(!t)return void console.warn("plugin not found:",e);this._plugins.push(t),t.uiConfig&&(t.uiConfig.limitedUi=!0),t.uiConfig&&void 0===t.uiConfig.hidden&&(t.uiConfig.hidden=!1),this._appendUiObject(t);const r=t.uiConfig;if(r?.uiRef&&t.toJSON){const e="function"==typeof t.toJSON?t.toJSON():null;t.resetDefaults=async()=>{await(t.fromJSON?.(e)),r.uiRefresh?.("postFrame",!0)};const o=r.uiRef.controller_.view.element,a=(0,i.createDiv)({innerHTML:"&#8942;",classList:["pluginOptionsButton"],elementTag:"button"});a.onclick=a=>{const p={};"function"==typeof t.toJSON&&(p["download preset"]=async()=>{const e=this._viewer?.getPlugin(s.k)?.exportPluginPreset(t);await(0,i.downloadBlob)(new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),"preset."+t.constructor.PluginType+".json"),n.D.Remove()}),"function"==typeof t.fromJSON&&(p["upload preset"]=async()=>{n.D.Remove();const e=await(0,i.uploadFile)(!1,!1);if(0===e.length)return;const o=e[0],a=await o.text(),p=JSON.parse(a);await(this._viewer?.getPlugin(s.k)?.importPluginPreset(p,t)),r.uiRefresh?.("postFrame",!0)},e&&(p["reset defaults"]=async()=>{n.D.Remove(),await(t.resetDefaults?.())}));const d=n.D.Create(p,o.clientWidth-120,12);o.append(d),a.preventDefault()},o.appendChild(a)}return r}setupPlugins(...e){e.forEach((e=>this.setupPluginUi(e)))}refreshPluginsEnabled(){this._plugins.forEach((e=>{const t=e.uiConfig;t&&(!0!==(0,i.getOrCall)(t.hidden)?t.uiRefresh?.("postFrame",!0):t.uiRef&&(t.uiRef.hidden=!0))}))}}V.PluginType="TweakpaneUi"}}]);
//# sourceMappingURL=803.cad10963.js.map
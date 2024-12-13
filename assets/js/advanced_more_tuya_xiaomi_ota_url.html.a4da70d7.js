"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[56051],{31442:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>h,data:()=>s});var o=a(6254);const i=a.p+"assets/img/android_studio_run.429dab07.png",r=a.p+"assets/img/android_studio_adv.eb66c947.png",l=a.p+"assets/img/tuya_ota.c1e743af.png",n={},h=(0,a(89596).A)(n,[["render",function(e,t){return(0,o.uX)(),(0,o.CE)("div",null,t[0]||(t[0]=[(0,o.Fv)('<h1 id="get-tuya-and-xiaomi-ota-url" tabindex="-1"><a class="header-anchor" href="#get-tuya-and-xiaomi-ota-url"><span>Get Tuya and Xiaomi OTA url</span></a></h1><p>This guide explains how to retrieve a TuYa or Xiaomi OTA file for your device. This file can then be used to update your TuYa/Xiaomi device via Zigbee2MQTT.</p><p>Prerequisites:</p><ul><li>Docker</li><li>TuYa bridge or Xiaomi gateway</li><li><a href="https://developer.android.com/studio" target="_blank" rel="noopener noreferrer">Android Studio</a></li></ul><h2 id="step-1-running-the-proxy" tabindex="-1"><a class="header-anchor" href="#step-1-running-the-proxy"><span>Step 1: running the proxy</span></a></h2><p>Execute the following command: <code>docker run --rm -it -p 8080:8080 mitmproxy/mitmproxy</code></p><h2 id="step-2-setup-the-android-emulator" tabindex="-1"><a class="header-anchor" href="#step-2-setup-the-android-emulator"><span>Step 2: setup the Android emulator</span></a></h2><p>Start Android Studio and create a new empty project:</p><ol><li>File -&gt; New -&gt; New Project...</li><li>Phone and Tablet -&gt; Empty Activity -&gt; Next</li><li>Finish</li><li>Click on the emulator (&quot;Pixel<em>3a</em>...&quot; in the case below) -&gt; Device Manager <br> <img src="'+i+'" alt=""></li><li>Click on the pencil icon of the device, under &quot;Show Advanced Settings&quot; change the &quot;Internal Storage&quot; to &quot;2000&quot;. Click &quot;Finish&quot;.</li><li>Start the emulator by clicking the play icon. <br> <img src="'+r+'" alt=""></li><li>On the emulator, go to Settings -&gt; Network &amp; internet -&gt; Internet -&gt; AndroidWifi -&gt; Edit (pencil right top) -&gt; Advanced options -&gt; Proxy -&gt; Manual. For proxy host name fill in the IP address of your computer (e.g. 192.168.2.145), for port fill in 8080. Save.</li><li>Open Chrome on the emulator, go to http://mitm.it and click on &quot;Get mitmproxy-ca-cert.cer&quot; under Android.</li><li>Go to settings again, Security -&gt; Encryption &amp; credentials -&gt; Install a certificate -&gt; CA certificate -&gt; Install anyway -&gt; Drawer icon -&gt; Downloads -&gt; click on the downloaded certificate.</li></ol><h2 id="step-3a-get-the-tuya-ota-url" tabindex="-1"><a class="header-anchor" href="#step-3a-get-the-tuya-ota-url"><span>Step 3a: get the TuYa OTA url</span></a></h2><ol><li>Download the TuYa app apk from <a href="https://aapks.com/download.php?dl=48267761" target="_blank" rel="noopener noreferrer">this link</a> (IMPORTANT: newer version don&#39;t work, tested with 3.12.6). Drag the downloaded apk on the emulator (which will install it).</li><li>Open the TuYa Smart Life app in the emulator, log in with your account</li><li>Make sure the TuYa bridge + the device you want to get the OTA of is already coupled to your account, this cannot be done from the emulator so use your phone for this. Make sure to use the same app on your phone, otherwise the device will not show up (e.g. for iOS use <a href="https://apps.apple.com/nl/app/smart-life-smart-living/id1115101477" target="_blank" rel="noopener noreferrer">this</a>, <a href="https://apps.apple.com/nl/app/tuya-smart/id1034649547" target="_blank" rel="noopener noreferrer"><strong>not this</strong></a>).</li><li>Click on the device -&gt; edit (pencil icon right top). Click &quot;Check for Firmware Upgrade&quot;.</li><li>If an firmware upgrade is available, quickly go back to the output of mitm (step 1), click on the latest request (yes you can click in the console window). This will show your the OTA url (see red box below). <ul><li>Tip: to go back to the overview of requests press the <code>Q</code> key on your keyboard.</li></ul></li></ol><p><img src="'+l+'" alt=""></p><h2 id="step-3b-get-the-xiaomi-ota-url" tabindex="-1"><a class="header-anchor" href="#step-3b-get-the-xiaomi-ota-url"><span>Step 3b: get the Xiaomi OTA url</span></a></h2><p>NOTE: This only works for native Aqara gateways which can be connected to the Aqara Home app (not the Xiaomi home app!)</p><ul><li>Works: ZHWG16LM/HE1-G0, ZHWG15LM, ZHWG12LM</li><li>Doesn&#39;t work: ZNDMWG03LM, DGNWG02LM</li></ul><ol><li>Download the Aqara home app apk from <a href="https://apkpure.com/nl/aqara-home/com.lumiunited.aqarahome" target="_blank" rel="noopener noreferrer">this link</a>, tested with version 2.2.5. Drag the downloaded apk on the emulator (which will install it).</li><li>Open the Aqara home app in the emulator, log in with your account</li><li>Make sure the Aqara gateway + the device you want to get the OTA of is already coupled to your account, this cannot be done from the emulator so use your phone for this.</li><li>Click on your device and check for a firmware upgrade.</li><li>If an firmware upgrade is available, quickly go back to the output of mitm (step 1), click on the latest request (yes you can click in the console window). This will show your the OTA url (see screenshot of step 3a).</li></ol><h2 id="step-4-add-ota-to-zigbee-ota" tabindex="-1"><a class="header-anchor" href="#step-4-add-ota-to-zigbee-ota"><span>Step 4: add OTA to zigbee-ota</span></a></h2><ol><li>Follow <a href="https://github.com/koenkk/zigbee-ota#adding-new-and-updating-existing-ota-files" target="_blank" rel="noopener noreferrer">this guide</a> to add the OTA to the <a href="https://github.com/koenkk/zigbee-ota" target="_blank" rel="noopener noreferrer">zigbee-OTA</a> repository.</li><li>Enable the ota by adding <code>ota: ota.zigbeeOTA</code> to your device definition (<a href="https://github.com/Koenkk/zigbee-herdsman-converters/blob/3e45f8f13b419ea8ce33fb3d30b11f5ac1bdec08/devices/tuya.js#L1172" target="_blank" rel="noopener noreferrer">example</a>).</li></ol>',18)]))}]]),s=JSON.parse('{"path":"/advanced/more/tuya_xiaomi_ota_url.html","title":"Get Tuya and Xiaomi OTA url","lang":"en-US","frontmatter":{"pageClass":"content-page"},"headers":[{"level":2,"title":"Step 1: running the proxy","slug":"step-1-running-the-proxy","link":"#step-1-running-the-proxy","children":[]},{"level":2,"title":"Step 2: setup the Android emulator","slug":"step-2-setup-the-android-emulator","link":"#step-2-setup-the-android-emulator","children":[]},{"level":2,"title":"Step 3a: get the TuYa OTA url","slug":"step-3a-get-the-tuya-ota-url","link":"#step-3a-get-the-tuya-ota-url","children":[]},{"level":2,"title":"Step 3b: get the Xiaomi OTA url","slug":"step-3b-get-the-xiaomi-ota-url","link":"#step-3b-get-the-xiaomi-ota-url","children":[]},{"level":2,"title":"Step 4: add OTA to zigbee-ota","slug":"step-4-add-ota-to-zigbee-ota","link":"#step-4-add-ota-to-zigbee-ota","children":[]}],"git":{"updatedTime":1734118954000},"filePathRelative":"advanced/more/tuya_xiaomi_ota_url.md"}')}}]);
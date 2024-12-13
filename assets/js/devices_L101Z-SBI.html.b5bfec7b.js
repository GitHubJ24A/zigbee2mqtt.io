"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[57345],{22285:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>a,data:()=>n});var i=o(6254);const d={},a=(0,o(89596).A)(d,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[11]||(t[11]=(0,i.Lk)("h1",{id:"lytko-l101z-sbi",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#lytko-l101z-sbi"},[(0,i.Lk)("span",null,"Lytko L101Z-SBI")])],-1)),(0,i.Lk)("table",null,[t[6]||(t[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"L101Z-SBI")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=Lytko"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("Lytko")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Single channel Zigbee thermostat")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"temperature, humidity, climate (local_temperature, occupied_heating_setpoint, system_mode, running_mode, local_temperature_calibration), min_setpoint_deadband, sensor_type, target_temp_first, keypad_lockout, brightness, brightness_standby, linkquality")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/L101Z-SBI.png",alt:"Lytko L101Z-SBI"})])],-1))])]),t[12]||(t[12]=(0,i.Lk)("h2",{id:"ota-updates",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#ota-updates"},[(0,i.Lk)("span",null,"OTA updates")])],-1)),(0,i.Lk)("p",null,[t[8]||(t[8]=(0,i.eW)("This device supports OTA updates, for more information see ")),(0,i.bF)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,i.k6)((()=>t[7]||(t[7]=[(0,i.eW)("OTA updates")]))),_:1}),t[9]||(t[9]=(0,i.eW)("."))]),t[13]||(t[13]=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>t[10]||(t[10]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),t[14]||(t[14]=(0,i.Fv)('<ul><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="temperature-numeric-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#temperature-numeric-l2-endpoint"><span>Temperature (numeric, l2 endpoint)</span></a></h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature_l2</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_l2&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="humidity-numeric-l2-endpoint" tabindex="-1"><a class="header-anchor" href="#humidity-numeric-l2-endpoint"><span>Humidity (numeric, l2 endpoint)</span></a></h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity_l2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="climate-l3-endpoint" tabindex="-1"><a class="header-anchor" href="#climate-l3-endpoint"><span>Climate (l3 endpoint)</span></a></h3><p>This climate device supports the following features: <code>local_temperature</code>, <code>occupied_heating_setpoint</code>, <code>system_mode</code>, <code>running_mode</code>, <code>local_temperature_calibration</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint_l3&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>15</code> and <code>35</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint_l3&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature_l3&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode_l3&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode_l3&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature_calibration</code>: Offset to add/subtract to the local temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration_l3&quot;: VALUE}.</code>To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature_l3&quot;: &quot;&quot;}</code>.The minimal value is <code>-3</code> and the maximum value is <code>3</code> with a step size of <code>0.1</code>.</li></ul><h3 id="min-setpoint-deadband-numeric-l3-endpoint" tabindex="-1"><a class="header-anchor" href="#min-setpoint-deadband-numeric-l3-endpoint"><span>Min setpoint deadband (numeric, l3 endpoint)</span></a></h3><p>Hysteresis setting. Value can be found in the published state on the <code>min_setpoint_deadband_l3</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;min_setpoint_deadband_l3&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;min_setpoint_deadband_l3&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>3</code>. The unit of this value is <code>C</code>.</p><h3 id="sensor-type-enum-l3-endpoint" tabindex="-1"><a class="header-anchor" href="#sensor-type-enum-l3-endpoint"><span>Sensor type (enum, l3 endpoint)</span></a></h3><p>Type of sensor. Sensor resistance value (kOhm). Value can be found in the published state on the <code>sensor_type_l3</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;sensor_type_l3&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensor_type_l3&quot;: NEW_VALUE}</code>. The possible values are: <code>3.3</code>, <code>5</code>, <code>6.8</code>, <code>10</code>, <code>12</code>, <code>14.8</code>, <code>15</code>, <code>20</code>, <code>33</code>, <code>47</code>.</p><h3 id="target-temp-first-binary-l3-endpoint" tabindex="-1"><a class="header-anchor" href="#target-temp-first-binary-l3-endpoint"><span>Target temp first (binary, l3 endpoint)</span></a></h3><p>Display current temperature or target temperature. Value can be found in the published state on the <code>target_temp_first_l3</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;target_temp_first_l3&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;target_temp_first_l3&quot;: NEW_VALUE}</code>. If value equals <code>true</code> target temp first is ON, if <code>false</code> OFF.</p><h3 id="keypad-lockout-enum-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#keypad-lockout-enum-l1-endpoint"><span>Keypad lockout (enum, l1 endpoint)</span></a></h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>keypad_lockout_l1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;keypad_lockout_l1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;keypad_lockout_l1&quot;: NEW_VALUE}</code>. The possible values are: <code>unlock</code>, <code>lock1</code>.</p><h3 id="brightness-numeric-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#brightness-numeric-l1-endpoint"><span>Brightness (numeric, l1 endpoint)</span></a></h3><p>Display brightness. Value can be found in the published state on the <code>brightness_l1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness_l1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness_l1&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="brightness-standby-numeric-l1-endpoint" tabindex="-1"><a class="header-anchor" href="#brightness-standby-numeric-l1-endpoint"><span>Brightness standby (numeric, l1 endpoint)</span></a></h3><p>Display brightness in standby mode. Value can be found in the published state on the <code>brightness_standby_l1</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness_standby_l1&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness_standby_l1&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',23))])}]]),n=JSON.parse('{"path":"/devices/L101Z-SBI.html","title":"Lytko L101Z-SBI control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Lytko L101Z-SBI control via MQTT","description":"Integrate your Lytko L101Z-SBI via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-09-01T13:40:11.000Z"},"headers":[{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Temperature (numeric, l2 endpoint)","slug":"temperature-numeric-l2-endpoint","link":"#temperature-numeric-l2-endpoint","children":[]},{"level":3,"title":"Humidity (numeric, l2 endpoint)","slug":"humidity-numeric-l2-endpoint","link":"#humidity-numeric-l2-endpoint","children":[]},{"level":3,"title":"Climate (l3 endpoint)","slug":"climate-l3-endpoint","link":"#climate-l3-endpoint","children":[]},{"level":3,"title":"Min setpoint deadband (numeric, l3 endpoint)","slug":"min-setpoint-deadband-numeric-l3-endpoint","link":"#min-setpoint-deadband-numeric-l3-endpoint","children":[]},{"level":3,"title":"Sensor type (enum, l3 endpoint)","slug":"sensor-type-enum-l3-endpoint","link":"#sensor-type-enum-l3-endpoint","children":[]},{"level":3,"title":"Target temp first (binary, l3 endpoint)","slug":"target-temp-first-binary-l3-endpoint","link":"#target-temp-first-binary-l3-endpoint","children":[]},{"level":3,"title":"Keypad lockout (enum, l1 endpoint)","slug":"keypad-lockout-enum-l1-endpoint","link":"#keypad-lockout-enum-l1-endpoint","children":[]},{"level":3,"title":"Brightness (numeric, l1 endpoint)","slug":"brightness-numeric-l1-endpoint","link":"#brightness-numeric-l1-endpoint","children":[]},{"level":3,"title":"Brightness standby (numeric, l1 endpoint)","slug":"brightness-standby-numeric-l1-endpoint","link":"#brightness-standby-numeric-l1-endpoint","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1734118954000},"filePathRelative":"devices/L101Z-SBI.md"}')}}]);
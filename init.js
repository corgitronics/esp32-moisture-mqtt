load('api_config.js');
load('api_mqtt.js');
load('api_sys.js');
load('api_timer.js');
load('api_adc.js');
load('api_esp32_touchpad.js');

let topic = 'metrics/' + Cfg.get('device.id');

let dfRobotPin = 32;
let aliexpressPin = 35;
let messageID = 0;
ADC.enable(dfRobotPin);
ADC.enable(aliexpressPin);

let ts1 = TouchPad.GPIO[14];
let ts2 = TouchPad.GPIO[12];
TouchPad.init();
TouchPad.setVoltage(TouchPad.HVOLT_2V4, TouchPad.LVOLT_0V8, TouchPad.HVOLT_ATTEN_1V5);
TouchPad.config(ts1, 0);
TouchPad.config(ts2, 0);

Timer.set(1000 /* milliseconds */, Timer.REPEAT, function() {
  messageID = messageID + 1;
  let msg = JSON.stringify({device: 1, messageID: messageID, DFRobot: ADC.read(dfRobotPin), Aliexpress: ADC.read(aliexpressPin),
    Touch1: TouchPad.read(ts1), Touch2: TouchPad.read(ts2)});
  print(topic, '->', msg);
  MQTT.pub(topic, msg, 1);
}, null);

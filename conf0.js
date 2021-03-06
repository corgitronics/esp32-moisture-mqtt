{
 "device": {
  "id": "esp32_??????"
 },
 "debug": {
  "level": 2,
  "factory_reset_gpio": -1
 },
 "sys": {
  "wdt_timeout": 30,
  "atca": {
   "i2c_addr": 96,
   "ecdh_slots_mask": 12
  }
 },
 "conf_acl": "*",
 "i2c": {
  "enable": true,
  "freq": 100000,
  "sda_gpio": 32,
  "scl_gpio": 33
 },
 "mqtt": {
  "server": "iot.eclipse.org:1883",
  "reconnect_timeout_min": 2.0,
  "reconnect_timeout_max": 60.0,
  "clean_session": true,
  "keep_alive": 60,
  "max_qos": 2,
  "recv_mbuf_limit": 8192
 },
 "mqtt1": {
  "server": "iot.eclipse.org:1883",
  "reconnect_timeout_min": 2.0,
  "reconnect_timeout_max": 60.0,
  "clean_session": true,
  "keep_alive": 60,
  "max_qos": 2,
  "recv_mbuf_limit": 3072
 },
 "shadow": {
  "enable": true,
  "ota_enable": true
 },
 "aws": {
  "greengrass": {
   "reconnect_timeout_min": 2,
   "reconnect_timeout_max": 60
  }
 },
 "sntp": {
  "enable": true,
  "server": "time.google.com",
  "retry_min": 1,
  "retry_max": 30,
  "update_interval": 7200
 },
 "azure": {
  "token_ttl": 3600,
  "enable_cm": true,
  "enable_dm": true
 },
 "bt": {
  "enable": true,
  "adv_enable": true,
  "allow_pairing": true,
  "max_paired_devices": -1,
  "random_address": true,
  "config_svc_enable": true,
  "debug_svc_enable": true
 },
 "update": {
  "timeout": 300,
  "ssl_ca_file": "ca.pem",
  "enable_post": true
 },
 "rpc": {
  "enable": true,
  "max_frame_size": 4096,
  "max_queue_length": 25,
  "default_out_channel_idle_close_timeout": 10,
  "ws": {
   "enable": true,
   "reconnect_interval_min": 1,
   "reconnect_interval_max": 60
  },
  "enable_dm": true,
  "gatts": {
   "enable": true
  },
  "mqtt": {
   "enable": true,
   "pub_topic": "%.*s/rpc",
   "sub_topic": "%.*s/rpc",
   "sub_wc": true,
   "qos": 1
  },
  "uart": {
   "baud_rate": 115200,
   "fc_type": 2
  }
 },
 "dash": {
  "server": "wss://dash.mongoose-os.com/api/v2/rpc",
  "ca_file": "ca.pem",
  "send_logs": true,
  "stats_interval": 10,
  "ota_chunk_size": 1024
 },
 "http": {
  "enable": true,
  "listen_addr": "80",
  "document_root": "/",
  "upload_acl": "*"
 },
 "dns_sd": {
  "host_name": "mOS-esp32-??????",
  "ttl": 120
 },
 "eth": {
  "mdc_gpio": 23,
  "mdio_gpio": 18
 },
 "gcp": {
  "token_ttl": 3600
 },
 "pppos": {
  "uart_no": 1,
  "baud_rate": 115200,
  "connect_cmd": "ATDT*99***1#",
  "echo_interval": 10,
  "echo_fails": 3
 },
 "provision": {
  "button": {
   "pin": -1,
   "pull": 1
  }
 },
 "wifi": {
  "ap": {
   "enable": true,
   "ssid": "Mongoose_??????",
   "pass": "Mongoose",
   "channel": 6,
   "max_connections": 10,
   "ip": "192.168.4.1",
   "netmask": "255.255.255.0",
   "gw": "192.168.4.1",
   "dhcp_start": "192.168.4.2",
   "dhcp_end": "192.168.4.100",
   "trigger_on_gpio": -1,
   "keep_enabled": true
  },
  "sta_connect_timeout": 30
 },
 "spi": {
  "unit_no": 3,
  "miso_gpio": 19,
  "mosi_gpio": 23,
  "sclk_gpio": 18,
  "cs0_gpio": 5,
  "cs1_gpio": -1,
  "cs2_gpio": -1
 },
 "pins": {
  "led": 21,
  "button_pull_up": true
 },
 "mjs": {
  "generate_jsc": true
 }
}

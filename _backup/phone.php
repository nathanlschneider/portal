<?php

$request = new HttpRequest();
$request->setUrl('https://phone.mhgi.net/gui/user/status_by_uid');
$request->setMethod(HTTP_METH_PUT);

$request->setHeaders(array(
  'postman-token' => '5b967385-2e71-5a45-3265-6e5c922341ab',
  'cache-control' => 'no-cache',
  'authorization' => 'Basic MTEwMTo0NDcz',
  'cookie' => 'settings-225={\\"ccc_window_size\\":[640,480,367,295],\\"active_phone\\":{\\"bbx_phone_registration_id\\":351,\\"bbx_phone_id\\":219},\\"layout\\":[[{\\"h\\":1,\\"panels\\":[\\"addressbook\\",\\"conference\\",\\"queue\\",\\"redial\\",\\"settings\\"]}]],\\"suppress_notify\\":\\"1\\",\\"active_tab\\":\\"settings\\"}; xsrfkey=192f6d638bf24dee675d0eb7626589dc7dcf35ff4432878ae8174f74f8b0562a; bps_session=dd7d60a4ffa015ec060fc54599fb6f9d56d12f9a; settings-225={\\"ccc_window_size\\":[640,480,367,295],\\"active_phone\\":{\\"bbx_phone_registration_id\\":351,\\"bbx_phone_id\\":219},\\"layout\\":[[{\\"h\\":1,\\"panels\\":[\\"addressbook\\",\\"conference\\",\\"queue\\",\\"redial\\",\\"settings\\"]}]],\\"suppress_notify\\":\\"1\\",\\"active_tab\\":\\"settings\\"}; xsrfkey=192f6d638bf24dee675d0eb7626589dc7dcf35ff4432878ae8174f74f8b0562a; bps_session=dd7d60a4ffa015ec060fc54599fb6f9d56d12f9a',
  'accept-language' => 'en-US,en;q=0.8',
  'accept-encoding' => 'gzip, deflate, sdch, br',
  'referer' => 'https://phone.mhgi.net/',
  'content-type' => 'application/x-www-form-urlencoded',
  'user-agent' => 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36',
  'x-requested-with' => 'XMLHttpRequest',
  'origin' => 'https://phone.mhgi.net',
  'accept' => 'application/json'
));

$request->setContentType('application/x-www-form-urlencoded');
$request->setPostFields(array(
  
));

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}

?>

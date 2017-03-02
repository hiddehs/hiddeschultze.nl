<?php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://api.instagram.com/v1/users/self/media/recent/?access_token=568701846.6e2e18e.8311e57e02d845a6a5eaa385d65f5f52&count=1");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
echo curl_exec($ch);
curl_close($ch);
?>

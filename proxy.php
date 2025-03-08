<?php
if (!isset($_GET['url'])) {
    http_response_code(400);
    echo "No URL provided.";
    exit;
}
$url = filter_var($_GET['url'], FILTER_VALIDATE_URL);
if (!$url) {
    http_response_code(400);
    echo "Invalid URL.";
    exit;
}

// Initialize a cURL session to fetch the target URL
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
$content = curl_exec($ch);

if (curl_errno($ch)) {
    http_response_code(500);
    echo "Error fetching URL: " . curl_error($ch);
    exit;
}
curl_close($ch);

// Send the fetched content to the client
echo $content;
?>

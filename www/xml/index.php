<?php

$url ="https://websitedofeed.com/arquivo.xml";
$ch = curl_init();
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_URL, $url); // get the url contents

$data = curl_exec ($ch); //execute curl request
curl_close($ch);

$xml = simplexml_load_string($data);

define("DB_SERVER", "host_do_db");
define("DB_USER", "login");
define("DB_PASSWORD", "senha");
define("DB_DATABASE", "bancodedados");

foreach ($xml -> item as $row ) {
    $title = $row -> title;
    $description = $row -> description;

//performing SQL query

$sql = "INSERT INTO 'xml_information' ('title')"
            . "VALUES('$title')";

$result = mysqli_query($sql);
if (!$result) {
    echo 'MySQL ERROR';
    } else {
    echo 'Success!';    
    }

                                }

?>
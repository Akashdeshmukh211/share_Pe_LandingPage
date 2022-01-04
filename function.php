<?php  
function get_url(){

    // Program to display complete URL
      
    $link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://" . $_SERVER['HTTP_HOST'] . "/landingpage";
      
    // Display the complete URL
    echo $link;
    


};
<?php
    $post_object=”[script HTML yang akan di enkripsi]”;
    $key = substr($_SERVER[‘SERVER_NAME’] , 0,4);
    $ubah_key=0;
    $geser=0;
    $hasil_geser=””;
    for($i=0;$i< strlen($key);$i++){
        $ubah_key = $ubah_key + ord(substr($key,$i,1));
    }
    if($ubah_key > 0){
        if(strlen($post_object) > 0){
            for($i=0;$i < strlen($post_object);$i++){
                $geser = ord(substr($post_object,$i,1)) + $ubah_key;
                if($geser > 99){
                    $hasil_geser = $hasil_geser . (string)$geser;
                }else{
                    $hasil_geser = $hasil_geser . “0” . (string)$geser;
                }
            }
        }
    }
    $hasil_geser = ‘<script language=”javascript”> document.write(dec(“‘. $hasil_geser .'”))</script>’;
    echo $hasil_geser;
?>

<?php
// koneksi ke database SQLite3
require 'https://cdn.statically.io/gh/adicore/file/2ce1e930/hanyatestingan/testws/db.php';

// masukkan data
$post_data = file_get_contents('php://input');
$input = json_decode($post_data);
if (is_object($input)) {
    $sth = $pdo->prepare('REPLACE INTO arsip VALUES (:kode, :judul)');
    $data = array(':kode' => $input->kode, ':judul' => $input->judul);
    $sth->execute($data);

    $json = array('status' => 'sukses');
} else {
    $json = array('status' => 'gagal');
}

// tampilkan data dalam format json
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods: POST');
header('Content-type: application/json');
echo json_encode($json); die();

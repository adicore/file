<?php
// koneksi ke database SQLite3
require 'https://cdn.statically.io/gh/adicore/file/2ce1e930/hanyatestingan/testws/db.php';

// masukkan data
$kode_delete = file_get_contents('php://input');;
if (!empty($kode_delete)) {
    $sth = $pdo->prepare('DELETE FROM arsip WHERE kode=:kode');
    $data = array(':kode' => $kode_delete);
    $sth->execute($data);

    $json = array('status' => 'sukses');
} else {
    $json = array('status' => 'gagal');
}

// tampilkan data dalam format json
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Access-Control-Allow-Methods: DELETE');
header('Content-type: application/json');
echo json_encode($json); die();

<?php
// koneksi ke database SQLite3
try {
    $pdo = new PDO('sqlite:./db/arsip.sq3', null, null, array(PDO::ATTR_PERSISTENT => true)); 
} catch(Exception $e) {
    $error = array('error' => 'Gagal terkoneksi ke database karena '.$e);
    // tampilkan data dalam format json
    header('Access-Control-Allow-Origin: *');
    header('Content-type: application/json');
    echo json_encode($error); die();
}

// buat tabel apabila belum ada
$table_def = 'CREATE TABLE IF NOT EXISTS arsip (kode VARCHAR PRIMARY KEY, judul VARCHAR NOT NULL)';
$create = $pdo->exec($table_def);
if ($create === false) {
    $error = array('error' => 'Error ketika membuat tabel!');
    // tampilkan data dalam format json
    header('Access-Control-Allow-Origin: *');
    header('Content-type: application/json');
    echo json_encode($error); die();
}

<?php
// koneksi ke database SQLite3
require 'https://cdn.statically.io/gh/adicore/file/2ce1e930/hanyatestingan/testws/db.php';

// ambil data
$json = array();
$select_str = 'SELECT * FROM arsip';

// filter data berdasarkan kata kunci pencarian
$filter = filter_input(INPUT_GET, 'katakunci');
if ($filter) {
    $select_str .= " WHERE kode LIKE '$filter%' OR judul LIKE '%$filter%'";
}
$query_data = $pdo->query($select_str);
while ($row = $query_data->fetch(PDO::FETCH_ASSOC)) {
    $json[] = $row;
}

// tampilkan data dalam format json
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');
echo json_encode($json); die();

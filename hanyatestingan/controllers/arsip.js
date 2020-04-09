/**
 * Modul "arsipApp"
 * Controller "arsipController"
 */
angular.module('arsipApp', []).controller('arsipController', function($scope, $http) {
  // variabel "arsip" merujuk kepada objek/instance dari "arsipController"
  var arsip = this;

  // controller "arsipController" memiliki property/anggota "data" untuk menampung data arsip
  arsip.data = [];
  // ambil data arsip dari server
  $http.get('https://cdn.statically.io/gh/adicore/file/b2c88615/hanyatestingan/testws/index.php').then(function(response) {
    arsip.data = response.data;
  });

  // metode "tambah" untuk menambahkan data arsip
  arsip.tambah = function() {
    var baru = {kode:arsip.inputKode, judul:arsip.inputJudul};
    var updateIndex = arsip.data.findIndex(function(obj) {
      return obj.kode == arsip.inputKode;
    });
    $http.post('https://cdn.statically.io/gh/adicore/file/b2c88615/hanyatestingan/testws/post.php', angular.toJson(baru))
    .then(function() {
      if (updateIndex > -1) {
        arsip.data[updateIndex].kode = arsip.inputKode;
        arsip.data[updateIndex].judul = arsip.inputJudul;
      } else {
        arsip.data.push(baru);
      }
      arsip.inputJudul = '';
      arsip.inputKode = '';
    }, function() {
      alert('Data gagal dimasukkan ke database');
    });
  };

  // metode "hapus" untuk menghapus data arsip terpilih
  arsip.hapus = function(kode) {
    var deleteIndex = arsip.data.findIndex(function(obj) {
      return obj.kode == kode;
    });
    var konf = confirm('Yakin akan menghapus data ini?');
    if (konf) {
      $http.delete('https://cdn.statically.io/gh/adicore/file/b2c88615/hanyatestingan/testws/delete.php', {data: kode})
      .then(function() {
        arsip.data.splice(deleteIndex, 1);
      }, function() {
        alert('Data gagal dihapus ke database');
      });
    }
  };

  // metode "ubah" untuk mengubah data arsip
  arsip.ubah = function(kode) {
    var ubahIndex = arsip.data.findIndex(function(obj) {
      return obj.kode == kode;
    });
    console.log(arsip.inputKode);
    arsip.inputJudul = arsip.data[ubahIndex].judul;
    arsip.inputKode = arsip.data[ubahIndex].kode;
  };

  // metode "total" untuk mendapatkan jumlah total data arsip
  arsip.total = function() {
    var count = arsip.data.length;
    return count;
  };
});

var input = [
  "0001",
  "Roman Alamsyah",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca"
];
function dataHandling2(input) {
  input.splice(1, 1, "Roman Alamsyah Elsharawy");
  input.splice(2, 1, "Provinsi Bandar Lampung");
  input.splice(4, 1, "Pria");
  input.splice(5, 1, "SMA Internasional Metro");
  var date = input[3].split("/");
  var bulan = date[1];
  switch (bulan) {
    case "01":
      bulan = "Januari";
      break;
    case "02":
      bulan = "Februari";
      break;
    case "03":
      bulan = "Maret";
      break;
    case "04":
      bulan = "April";
      break;
    case "05":
      bulan = "Mei";
      break;
    case "06":
      bulan = "Juni";
      break;
    case "07":
      bulan = "Juli";
      break;
    case "08":
      bulan = "Agustus";
      break;
    case "09":
      bulan = "September";
      break;
    case "10":
      bulan = "Oktober";
      break;
    case "11":
      bulan = "November";
      break;
    case "12":
      bulan = "Desember";
      break;
    default:
      bulan = "Bulan Invalid";
      break;
  }
  var sort = date.sort(function(a, b) {
    return b - a;
  });
  var join = input[3].split("/").join("-");
  var nama = input[1].slice(0, 15);

  console.log(input);
  console.log(bulan);
  console.log(sort);
  console.log(join);
  console.log(nama);
}
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */

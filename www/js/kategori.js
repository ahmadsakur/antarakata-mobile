function kategori(id) {
   xmlhttp = new XMLHttpRequest();
   var url = "https://antarakata99.000webhostapp.com/mobile/kategori.php?idkategori=" + id;
   var post, html = "";
   xmlhttp.open("GET", url, true);
   xmlhttp.onreadystatechange = function () {
      document.getElementById("kategoripost").innerHTML = 'LOADING ...';
      if ((xmlhttp.readyState == 4) && (xmlhttp.status == 200)) {
         post = JSON.parse(xmlhttp.responseText);
         if (isEmpty(post)) {
            html += "<div class=\"row\"><div class=\"text-center text-empty-query\">";
            html += "<h3>Hasil Pencarian Tidak Ditemukan</h3>"
            html += "</div></div>";
         } else {
            for (x in post) {
               html += "<div class=\"col-sm-3 float-left card text-dark bg-dark index-content mb-2 mt-2 ml-3 mr-3 p-2\">";
               html += "<div>";
               html += "<h1 class=\"mt-1 post-title\">" + post[x].judul + "</h1>";
               html += "<img src=\"https://antarakata99.000webhostapp.com/asset/img/blog/" + post[x].file_gambar + "\" class=\"img-fluid rounded mb-2\" alt=\"gambar1\" style=\"width:100%\">";
               html += "<p class=\"teks-justify post-summary\">" + post[x].isi_post.substr(0, 140) + "....</p>";
               html += "</div>";
               html += "<div class=\"mb-2\"><button type=\"button\" onclick=\"window.location.href='detail.html#id/" + post[x].idpost + "';\" class=\"btn btn-warning tombol-detail\">Read More . .</button></div>";
               html += "<div class=\"card-footer\">";
               html += "<p>Posted on " + post[x].tgl_insert + " by <a href=\"#\" class=\"id-penulis\">" + post[x].nama + "</a></p>";
               html += "</div></div>";
            }
         }
         document.getElementById("kategoripost").innerHTML = html;
      }
      return false;
   }
   xmlhttp.send(null);
}

function isEmpty(post) {
   for (var key in post) {
      if (post.hasOwnProperty(key))
         return false;
   }
   return true;
}
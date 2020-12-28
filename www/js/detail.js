document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
   xmlhttp = new XMLHttpRequest();
   var url = "https://antarakata99.000webhostapp.com/mobile/detail.php?idpost=" + window.location.hash.substr(4);
   var post, html = "";
   xmlhttp.open("GET", url, true);
   xmlhttp.onreadystatechange = function () {
      document.getElementById("detailpost").innerHTML = 'LOADING ...';
      if ((xmlhttp.readyState == 4) && (xmlhttp.status == 200)) {
         post = JSON.parse(xmlhttp.responseText);
         for (x in post) {
            html += "<h1 class=\"post-title mt-3 p-1\">" + post[x].judul + "</h1>"
            html += "<p class=\"detail-author p-1\">" + post[x].nama + "</p>"
            html += "<hr>"
            html += "<img src=\"https://antarakata99.000webhostapp.com/asset/img/blog/" + post[x].file_gambar + "\" class=\"img-fluid rounded mb-2\" alt=\"gambar1\" style=\"width:100%\">";
            html += "<p class=\"detail-artikel p-1\">" + post[x].isi_post + "</p>"
         }
         document.getElementById("detailpost").innerHTML = html;
         komentar();
      }
      return false;
   }
   xmlhttp.send(null);
}

function komentar() {
   xmlhttp = new XMLHttpRequest();
   var url = "https://antarakata99.000webhostapp.com/mobile/komentar.php?idpost=" + window.location.hash.substr(4);
   var post, html = "";
   xmlhttp.open("GET", url, true);
   xmlhttp.onreadystatechange = function () {
      document.getElementById("komentarpost").innerHTML = 'LOADING ...';
      if ((xmlhttp.readyState == 4) && (xmlhttp.status == 200)) {
         post = JSON.parse(xmlhttp.responseText);
         for (x in post) {
            html += "<div class=\"card border-light bg-transparent text-light p-2 rounded card-komentar\">"
            html += "<h5 class=\"text-white\">" + post[x].nama + "</h5>"
            html += "<p class=\"text-white text-light\">" + post[x].isi + "</p>"
            html += "</div>"
         }
         document.getElementById("komentarpost").innerHTML = html;
         // fetch_comments();
      }
      return false;
   }
   xmlhttp.send(null);
}
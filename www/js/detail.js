function detail(idpost) {
   location.replace("detail.html");
   xmlhttp = new XMLHttpRequest();
   var url = "https://antarakata99.000webhostapp.com/mobile/index.php?idpost=" + idpost;
   var post, html = "";
   xmlhttp.open("GET", url, true);
   xmlhttp.onreadystatechange = function () {
      document.getElementById("detailpost").innerHTML = 'LOADING ...';
      if ((xmlhttp.readyState == 4) && (xmlhttp.status == 200)) {
         post = JSON.parse(xmlhttp.responseText);
         for (x in post) {
            html += "<h1 class=\"post-title mt-3 p-1\">" + post[x].judul + "</h1>"
            html += "<p class\"text-white p-1\">Wriiten by" + post[x].nama + "</p>"
            html += "<hr>"
            html += "<img src=\"https://antarakata99.000webhostapp.com/asset/img/blog/" + post[x].file_gambar + "\" class=\"img-fluid rounded mb-2\" alt=\"gambar1\" style=\"width:100%\">";
            html += "<p class\"text-white p-1\">" + post[x].isi_post + "</p>"
         }
         document.getElementById("detailpost").innerHTML = html;

      }
      return false;
   }
   xmlhttp.send(null);
}
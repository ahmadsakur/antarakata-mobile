/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    xmlhttp = new XMLHttpRequest();
    var url = "https://antarakata99.000webhostapp.com/mobile/index.php";
    var post, html = "";
    xmlhttp.open("GET", url, true);
    xmlhttp.onreadystatechange = function () {
        document.getElementById("indexposts").innerHTML = 'LOADING ...';
        if ((xmlhttp.readyState == 4) && (xmlhttp.status == 200)) {
            post = JSON.parse(xmlhttp.responseText);
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
            document.getElementById("indexposts").innerHTML = html;

        }
        return false;
    }
    xmlhttp.send(null);
}
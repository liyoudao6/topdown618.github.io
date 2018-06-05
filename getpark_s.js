                        var xmlhttp;
                        var park_res;
                        function loadXMLDoc(url)
                        {
                                xmlhttp=null;
                                if (window.XMLHttpRequest)
                                {// code for IE7, Firefox, Opera, etc.
                                        xmlhttp=new XMLHttpRequest();
                                }
                                else if (window.ActiveXObject)
                                {// code for IE6, IE5
                                        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
                                }
                                if (xmlhttp!=null)
                                {
                                        xmlhttp.onreadystatechange=state_Change;
                                        xmlhttp.open("GET",url,true);
                                        xmlhttp.send(null);
                                }
                                else
                                {
                                        alert("Your browser does not support XMLHTTP.");
                                }
                        }

                        function state_Change()
                        {
                                if (xmlhttp.readyState==4)
                                {// 4 = "loaded"
                                        if (xmlhttp.status==200)
                                                {
                                                        // 200 = "OK"
                                                        //document.getElementById('A1').innerHTML=xmlhttp.status;
                                                        //document.getElementById('A2').innerHTML=xmlhttp.statusText;
                                                        //document.getElementById('A3').innerHTML=xmlhttp.responseText;
                                                        park_res_raw=xmlhttp.responseText;
                                                        park_res_cs=park_res_raw.match("carslot=[0-9]+");
                                                        park_res=park_res_cs[0].match("[0-9]+");
                                                        if (park_res>100) {park_res=256-park_res;park_res= "园内有多余车                           辆</br>"+park_res+"辆" }
                                                        document.getElementById('A3').innerHTML='<h3 align="center">' +                            park_res + '</h3>';
                                                        //document.getElementById('A4').innerHTML='';
                                                        window.setTimeout(myloadXML,500)
                                                }
                                        else
                                                {
                                                        // alert("Problem retrieving XML data:" + xmlhttp.statusText);
                                                         window.setTimeout(myloadXML,500)
                                                }
                                }
                        }
                        function myloadXML()
                        {
                                try
                                {
                                        //loadXMLDoc('../cgi-bin/getdate.cgi');
                                        //loadXMLDoc('../cgi-bin/getpark.cgi');
                                        loadXMLDoc('http://holysite.cn:10000/cgi-bin/wait_park_change.cgi');
                                }
                                catch(err)
                                {
                                        alert("disconneced! please refresh")
                                }

                        }
                        alert("dRUNNEDh")
                        loadXMLDoc('http://holysite.cn:10000/cgi-bin/getpark_raw.cgi');
                        window.setTimeout(myloadXML,500)

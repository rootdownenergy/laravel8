var global_lat = 1;
var global_lng = 2;
var global_pos;
var global_pos1;
var global_pos2;
var global_pos3;
var global_pos4;
var global_pos5;
var global_pos6;
var global_pos7;
var global_pos8;
var global_pos9;
var global_pos10;
var global_id = 1434;

jQuery(document).ready(function() {

    var img_reg_l = '/img/btn_l_reg.png';
    var img_reg_r = '/img/btn_r_reg.png';
    var img_hover_l = '/img/btn_l_hover.png';
    var img_hover_r = '/img/btn_r_hover.png';
    $( '.img-l' ).hover(function(event) {
        /* Stuff to do when the mouse enters the element */
        $( '.img-l' ).attr("src", img_hover_l);
        }, 
        function(event) {
            /* Stuff to do when the mouse leaves the element */
            $( '.img-l' ).attr("src", img_reg_l);
        }
    );
    $( '.img-r' ).hover(function(event) {
            /* Stuff to do when the mouse enters the element */
            $( '.img-r' ).attr("src", img_hover_r);
        }, 
        function(event) {
            /* Stuff to do when the mouse leaves the element */
            $( '.img-r' ).attr("src", img_reg_r);
        }
    );
    $('#hamburgerbtn').click(function(){
        $('#hamburgerbtn').toggle();
        $('#mobileMenu').toggle();
        $('#hamburgerbtn2').toggle();
    });
    $('#hamburgerbtn2').click(function(){
        $('#hamburgerbtn2').toggle();
        $('#mobileMenu').toggle();
        $('#hamburgerbtn').toggle();
    });


    var CSRF_TOKEN = $('meta[name="csrf_token"]').attr('content');
    var rstLatRst = global_lat.toString();
    var rstLngRst = global_lng.toString(); 
    var finLatRst = rstLatRst.split("");
    var finLngRst = rstLngRst.split("");
    var hld1Lat = finLatRst[0];
    var hld2Lat = finLatRst[1];
    var hld1Lng = finLngRst[0];
    var hld2Lng = finLngRst[1];
    var hld3Lng = finLngRst[2];
    var hld4Lng = finLngRst[3];
    var nLatLd = hld1Lat + hld2Lat; 
    var nLngLd = hld1Lng + hld2Lng + hld3Lng + hld4Lng;
    var numLat = parseFloat(nLatLd);
    var numLng = parseFloat(nLngLd);
    i_load();
    go();        
});
function go()
{
    window.ico_build();
    window.ico_build_add();
    m_ico = {url:"/img/med_m.png"};
    console.log('connectMArr');
    connectMArr = [];
    console.log(connectMArr);
    cAlt = new google.maps.LatLng(pLatx0,pLngx0);
    console.log(pLatx0);
    console.log(pLngx0);
    infoWindow = new google.maps.InfoWindow();
    markerBounds = new google.maps.LatLngBounds();
    var tmpLat1 = $( "td:nth-child(7)" ).text();
    var tmpLng1 = $( "td:nth-child(8)" ).text();
    console.log(tmpLat1);
    console.log(tmpLng1);
    var cTRArr = document.getElementsByTagName("td");
    console.log(cTRArr);
    var xCTRArr = [];
    xCTRArr = getTD(cTRArr);
    var xCTRFinal = $(xCTRArr).clone();
    console.log(xCTRFinal);
    function getTD(cTRArr)
    {
        for (i = 0; i < cTRArr.length; ++i)
        {
            return cTRArr;
        }
    }
    var addServices = $(".additional-services").each(function( index ) {
        return $(this).text();
    });
    var xAddServices = $(addServices).clone().show();
    var cWHold1 = xCTRFinal[1]; //c_name
    t1 = $(cWHold1).text();
    var cWHold1a = xCTRFinal[0]; //logo
    var cWHold1b = xCTRFinal[5]; //add services
    var cWHold1bShow;
    cWHold1bShow = xAddServices[0];
    console.log(cWHold1bShow);
    var cWHold1c = xCTRFinal[8]; //view profile
    $('#container1-1').append(cWHold1a); //logo
    $('#container1-1').append(t1); //view profile
    $('#container1-1').append(cWHold1b); //c_name
    $('#container1-1').append(cWHold1c); //add services
    var cStr1 = $('#container1').html();
    var cWHold2 = xCTRFinal[11];
    t2 = $(cWHold2).text();
    var cWHold2a = xCTRFinal[10];
    var cWHold2b = xCTRFinal[15];
    var cWHold2bShow;
    cWHold2bShow = xAddServices[1];
    var cWHold2c = xCTRFinal[18];
    $('#container2-2').append(cWHold2a);
    $('#container2-2').append(t2);
    $('#container2-2').append(cWHold2b);
    $('#container2-2').append(cWHold2c);
    var cStr2 = $('#container2').html();
    var cWHold3 = xCTRFinal[21];
    t3 = $(cWHold3).text();
    var cWHold3a = xCTRFinal[20];
    var cWHold3b = xCTRFinal[25];
    var cWHold3bShow;
    cWHold3bShow = xAddServices[2];
    var cWHold3c = xCTRFinal[28];
    $('#container3-3').append(cWHold3a);
    $('#container3-3').append(t3);
    $('#container3-3').append(cWHold3b);
    $('#container3-3').append(cWHold3c);
    var cStr3 = $('#container3').html();
    var cWHold4 = xCTRFinal[31];
    t4 = $(cWHold4).text();
    var cWHold4a = xCTRFinal[30];
    var cWHold4b = xCTRFinal[35];
    var cWHold4bShow;
    cWHold4bShow = xAddServices[3];
    var cWHold4c = xCTRFinal[38];
    $('#container4-4').append(cWHold4a);
    $('#container4-4').append(t4);
    $('#container4-4').append(cWHold4b);
    $('#container4-4').append(cWHold4c);
    var cStr4 = $('#container4').html();
    var cWHold5 = xCTRFinal[41];
    t5 = $(cWHold5).text();
    var cWHold5a = xCTRFinal[40];
    var cWHold5b = xCTRFinal[45];
    var cWHold5bShow;
    cWHold5bShow = xAddServices[4];
    var cWHold5c = xCTRFinal[48];
    $('#container5-5').append(cWHold5a);
    $('#container5-5').append(t5);
    $('#container5-5').append(cWHold5b);
    $('#container5-5').append(cWHold5c);
    var cStr5 = $('#container5').html();
    var cWHold6 = xCTRFinal[51];
    t6 = $(cWHold6).text();
    var cWHold6a = xCTRFinal[50];
    var cWHold6b = xCTRFinal[55];
    var cWHold6bShow;
    cWHold6bShow = xAddServices[5];
    var cWHold6c = xCTRFinal[58];
    $('#container6-6').append(cWHold6a);
    $('#container6-6').append(t6);
    $('#container6-6').append(cWHold6b);
    $('#container6-6').append(cWHold6c);
    var cStr6 = $('#container6').html();
    var cWHold7 = xCTRFinal[61];
    t7 = $(cWHold7).text();
    var cWHold7a = xCTRFinal[60];
    var cWHold7b = xCTRFinal[65];
    var cWHold7bShow;
    cWHold7bShow = xAddServices[6];
    var cWHold7c = xCTRFinal[68];
    $('#container7-7').append(cWHold7a);
    $('#container7-7').append(t7);
    $('#container7-7').append(cWHold7b);
    $('#container7-7').append(cWHold7c);
    var cStr7 = $('#container7').html();
    var cWHold8 = xCTRFinal[71];
    t8 = $(cWHold8).text();
    var cWHold8a = xCTRFinal[70];
    var cWHold8b = xCTRFinal[75];
    var cWHold8bShow;
    cWHold8bShow = xAddServices[7];
    var cWHold8c = xCTRFinal[78];
    $('#container8-8').append(cWHold8a);
    $('#container8-8').append(t8);
    $('#container8-8').append(cWHold8b);
    $('#container8-8').append(cWHold8c);
    var cStr8 = $('#container8').html();
    var cWHold9 = xCTRFinal[81];
    t9 = $(cWHold9).text();
    var cWHold9a = xCTRFinal[80];
    var cWHold9b = xCTRFinal[85];
    var cWHold9bShow;
    cWHold9bShow = xAddServices[8];
    var cWHold9c = xCTRFinal[88];
    $('#container9-9').append(cWHold9a);
    $('#container9-9').append(t9);
    $('#container9-9').append(cWHold9b);
    $('#container9-9').append(cWHold9c);
    var cStr9 = $('#container9').html();
    var cWHold10 = xCTRFinal[91];
    t10 = $(cWHold10).text();
    var cWHold10a = xCTRFinal[90];
    var cWHold10b = xCTRFinal[95];
    var cWHold10bShow;
    cWHold10bShow = xAddServices[9];
    var cWHold10c = xCTRFinal[98];
    $('#container10-10').append(cWHold10a);
    $('#container10-10').append(t10);
    $('#container10-10').append(cWHold10b);
    $('#container10-10').append(cWHold10c);
    var cStr10 = $('#container10').html();
    contentString0 = cStr1;
    contentString1 = cStr2;
    contentString2 = cStr3;
    contentString3 = cStr4;
    contentString4 = cStr5;
    contentString5 = cStr6;
    contentString6 = cStr7;
    contentString7 = cStr8;
    contentString8 = cStr9;
    contentString9 = cStr10;
    function getRows(xRow)
    {
        for (i = 0; i < xRow.length; ++i)
        {
            return xRow;
        }
    }
    var nLat = '';
    nLat = getLat(tmpLat1);
    var resLat = nLat.split(" ", 11);
    var pLatx0 = resLat[1];
    var pLatx1 = resLat[2];
    var pLatx2 = resLat[3];
    var pLatx3 = resLat[4];
    var pLatx4 = resLat[5];
    var pLatx5 = resLat[6];
    var pLatx6 = resLat[7];
    var pLatx7 = resLat[8];
    var pLatx8 = resLat[9];
    var pLatx9 = resLat[10];
    console.log(resLat);
    function getLat(tmpLat1)
    {
        for (var i = 0; i < tmpLat1.length; ++i)
        {
            return tmpLat1;
        }
    }
    var nLng = '';
    nLng = getLng(tmpLng1);
    var resLng = nLng.split(" ", 11);
    console.log(nLng);
    console.log("!!!!!!CHECK ARRAY STAT!!!!!");
    var pLngx0 = resLng[1];
    var pLngx1 = resLng[2];
    var pLngx2 = resLng[3];
    var pLngx3 = resLng[4];
    var pLngx4 = resLng[5];
    var pLngx5 = resLng[6];
    var pLngx6 = resLng[7];
    var pLngx7 = resLng[8];
    var pLngx8 = resLng[9];
    var pLngx9 = resLng[10];
    function getLng(tmpLng1)
    {
        for (var i = 0; i < tmpLng1.length; ++i)
        {
            return tmpLng1;
        }
    }
    var eDoc = document.getElementsByClassName("view");
    var eConnector = [];
    eConnector = $(".view").each(function (index)
    {
        return $(this).text;
    });

    var eCL = eConnector.length;
    var eConnect0 = eConnector[0];
    var eConnect1 = eConnector[1];
    var eConnect2 = eConnector[2];
    var eConnect3 = eConnector[3];
    var eConnect4 = eConnector[4];
    var eConnect5 = eConnector[5];
    var eConnect6 = eConnector[6];
    var eConnect7 = eConnector[7];
    var eConnect8 = eConnector[8];
    var eConnect9 = eConnector[9];
    function setAllMap(rd_map)
    {
        for (var i = 0; i < connectMArr.length; i++)
        {
            connectMArr[i].setMap(rd_map);
        }
    }
    function clearMarkers()
    {
        setAllMap(null);
    }
    function deleteMarkers()
    {
        clearMarkers();
        connectMArr = [];
    }
    function connectM(eBtn)
    {
        var tester;
        tester = eBtn;
        var eXConn = [];
        eXConn = connectMArr;
        if (tester == 0)
        {
            var eShow0;
            eShow0 = eXConn[0];
            return eShow0;
        }
        else if (tester == 1)
        {
            var eShow1 =  1;
            return eShow1;
        }
        else if (tester == 2)
        {
            var eShow2 = 2;
            return eShow2;
        }
        else if (tester == 3)
        {
            var eShow3 = 3;
            return eShow3;
        }
        else if (tester == 4)
        {
            var eShow4 = 4;
            return eShow4;
        }
        else if (tester == 5)
        {
            var eShow5 = 5;
            return eShow5;
        }
        else if (tester == 6)
        {
            var eShow6 = 6;
            return eShow6;
        }
        else if (tester == 7)
        {
            var eShow7 = 7;
            return eShow7;
        }
        else if (tester == 8)
        {
            var eShow8 = 8;
            return eShow8;
        }
        else if (tester == 9)
        {
            var eShow9 = 9;
            return eShow9;
        }
        else
        {
            return false;
        }
    }
    function mAnimation(mNum)
    {
        if (mNum == 1)
        {
            if (m1.getAnimation() != null)
            {
                m1.setAnimation(null);
            }
            else
            {
                m1.setAnimation(google.maps.Animation.BOUNCE);
            }
        }
        else if (mNum == 2)
        {
            if (m2.getAnimation() != null)
            {
                m2.setAnimation(null);
            } else {
                m2.setAnimation(google.maps.Animation.BOUNCE);
            }
        }
        else if (mNum == 3)
        {
            if (m3.getAnimation() != null)
            {
                m3.setAnimation(null);
            } else {
                m3.setAnimation(google.maps.Animation.BOUNCE);
            }
        }
        else if (mNum == 4)
        {
            if (m4.getAnimation() != null)
            {
                m4.setAnimation(null);
            } else {
                m4.setAnimation(google.maps.Animation.BOUNCE);
            }
        }
        else if (mNum == 5)
        {
            if (m5.getAnimation() != null)
            {
                m5.setAnimation(null);
            } else {
                m5.setAnimation(google.maps.Animation.BOUNCE);
            }
        }
        else if (mNum == 6)
        {
            if (m6.getAnimation() != null)
            {
                m6.setAnimation(null);
            } else {
                m6.setAnimation(google.maps.Animation.BOUNCE);
            }
        }
        else if (mNum == 7)
        {
            if (m7.getAnimation() != null)
            {
                m7.setAnimation(null);
            } else {
                m7.setAnimation(google.maps.Animation.BOUNCE);
            }
        }
        else if (mNum == 8)
        {
            if (m8.getAnimation() != null)
            {
                m8.setAnimation(null);
            } else {
                m8.setAnimation(google.maps.Animation.BOUNCE);
            }
        }
        else if (mNum == 9)
        {
            if (m9.getAnimation() != null)
            {
                m9.setAnimation(null);
            } else {
                m9.setAnimation(google.maps.Animation.BOUNCE);
            }
        }
        else if (mNum == 10)
        {
            if (m10.getAnimation() != null)
            {
                m10.setAnimation(null);
            } else {
                m10.setAnimation(google.maps.Animation.BOUNCE);
            }
        } else {
            return false;
        }
    }
    function initialize()
    {
        const domMapper0 = document.getElementById('mapper-0');
        const domMapper1 = document.getElementById('mapper-1');
        const domMapper2 = document.getElementById('mapper-2');
        const domMapper3 = document.getElementById('mapper-3');
        const domMapper4 = document.getElementById('mapper-4');
        const domMapper5 = document.getElementById('mapper-5');
        const domMapper6 = document.getElementById('mapper-6');
        const domMapper7 = document.getElementById('mapper-7');
        const domMapper8 = document.getElementById('mapper-8');
        const domMapper9 = document.getElementById('mapper-9');
        
        console.log('initialize activation');
        console.log(pLatx0);
        console.log(pLngx0);
        var userLat = parseFloat(pLatx0);
        var userLng = parseFloat(pLngx0);
        var mapOptions =
        {
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoom: 12,
            scrollwheel:false,
            center: {lat: userLat, lng: userLng}
        }
        var rd_map_opt = mapOptions;
        var rd_map = new google.maps.Map(document.getElementById('rd-map'), rd_map_opt);
        function makeMarker(rd_map_opt)
        {
            var createM = new google.maps.Marker({rd_map:rd_map});
            createM.setOptions(rd_map_opt);
            google.maps.event.addListener(createM, "click", function()
            {
                infoWindow.setOptions(rd_map_opt);
                infoWindow.open(rd_map, createM);
            });
            var idleIcon = createM.getIcon();
            markerBounds.extend(rd_map_opt.position);
            connectMArr.push(createM);
            return createM;
        }
        // marker assignments
        m1 = makeMarker({
            map:rd_map,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(pLatx0,pLngx0),
            content: contentString0,
            icon: m_ico,
            title: t1
        });
        m2 = makeMarker({
            map:rd_map,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(pLatx1,pLngx1),
            content: contentString1,
            icon: m_ico,
            title: t2
        });
        m3 = makeMarker({
            map:rd_map,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(pLatx2,pLngx2),
            content: contentString2,
            icon: m_ico,
            title: t3
        });
        m4 = makeMarker({
            map:rd_map,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(pLatx3,pLngx3),
            content: contentString3,
            icon: m_ico,
            title: t4
        });
        m5 = makeMarker({
            map:rd_map,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(pLatx4,pLngx4),
            content: contentString4,
            icon: m_ico,
            title: t5
        });
        m6 = makeMarker({
            map:rd_map,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(pLatx5,pLngx5),
            content: contentString5,
            icon: m_ico,
            title: t6
        });
        m7 = makeMarker({
            map:rd_map,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(pLatx6,pLngx6),
            content: contentString6,
            icon: m_ico,
            title: t7
        });
        m8 = makeMarker({
            map:rd_map,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(pLatx7,pLngx7),
            content: contentString7,
            icon: m_ico,
            title: t8
        });
        m9 = makeMarker({
            map:rd_map,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(pLatx8,pLngx8),
            content: contentString8,
            icon: m_ico,
            title: t9
        });
        m10  = makeMarker({
            map:rd_map,
            animation: google.maps.Animation.DROP,
            position: new google.maps.LatLng(pLatx9,pLngx9),
            content: contentString9,
            icon: m_ico,
            title: t10
        });
        // dom listeners
        domMapper0.addEventListener('click', function (){
            infoWindow = new google.maps.InfoWindow({
                content: contentString0
            });
            infoWindow.open(rd_map,m1);
            clearMarkers();
            m1.setMap(rd_map);
        });
        domMapper1.addEventListener('click', function (){
            infoWindow = new google.maps.InfoWindow({
                content: contentString1
            });
            infoWindow.open(rd_map,m2);
            clearMarkers();
            m2.setMap(rd_map);
        });
        domMapper2.addEventListener('click', function (){
            infoWindow = new google.maps.InfoWindow({
                content: contentString2
            });
            infoWindow.open(rd_map,m3);
            clearMarkers();
            m3.setMap(rd_map);
        });
        domMapper3.addEventListener('click', function (){
            infoWindow = new google.maps.InfoWindow({
                content: contentString3
            });
            infoWindow.open(rd_map,m4);
            clearMarkers();
            m4.setMap(rd_map);
        });
        domMapper4.addEventListener('click', function (){
            infoWindow = new google.maps.InfoWindow({
                content: contentString4
            });
            infoWindow.open(rd_map,m5);
            clearMarkers();
            m5.setMap(rd_map);
        });
        domMapper5.addEventListener('click', function (){
            infoWindow = new google.maps.InfoWindow({
                content: contentString5
            });
            infoWindow.open(rd_map,m6);
            clearMarkers();
            m6.setMap(rd_map);
        });
        domMapper6.addEventListener('click', function (){
            infoWindow = new google.maps.InfoWindow({
                content: contentString6
            });
            infoWindow.open(rd_map,m7);
            clearMarkers();
            m7.setMap(rd_map);
        });
        domMapper7.addEventListener('click', function (){
            infoWindow = new google.maps.InfoWindow({
                content: contentString7
            });
            infoWindow.open(rd_map,m8);
            clearMarkers();
            m8.setMap(rd_map);
        });
        domMapper8.addEventListener('click', function (){
            infoWindow = new google.maps.InfoWindow({
                content: contentString8
            });
            infoWindow.open(rd_map,m9);
            clearMarkers();
            m9.setMap(rd_map);
        });
        domMapper9.addEventListener('click', function (){
            infoWindow = new google.maps.InfoWindow({
                content: contentString9
            });
            infoWindow.open(rd_map,m10);
            clearMarkers();
            m10.setMap(rd_map);
        });
        google.maps.event.addListener(rd_map, "click", function()
        {
            console.log('IN google.maps.event.addEventListener click');
            infoWindow.close();
            setAllMap(rd_map);
        });

    }
    initialize();
    ico_build();
}

function ico_build()
{
    //var get_services = document.getElementsByClassName("services");
    var tmpTR = document.getElementsByTagName("td");
    var get_services = $(".services").each(function( index ){
        return $( this ).text();
    });
    var addS1 = get_services[0];
    console.log("SERVICES CLASS ELEMENTS");
    var rst_addS1 = $(addS1).text();
    console.log(rst_addS1);
    var rst_addS1_arr = rst_addS1.split("");
    var x0S0 = rst_addS1_arr[0];
    var x0S1 = rst_addS1_arr[1];
    console.log("This is an app by: Jonathan E Lewis codedforweb@gmail.com");

    if(x0S0 == '1' && x0S1 == '1')
    {
        $(addS1).empty();
        $(addS1).html("<img src='/img/med.png' title='medical'>" + "<img src='/img/rec.png' title='recreational'>");
    } 
    else if(x0S0 == '1' && x0S1 == '0')
    {
        $(addS1).empty();
        $(addS1).html("<img src='/img/med.png' title='medical'>");
    }
    else if(x0S0 == '0' && x0S1 == '1')
    {
        $(addS1).empty();
        $(addS1).html("<img src='/img/rec.png' title='recreational'>");
    }
    else if(x0S0 == '0' || x0S1 == '0')
    {
        $(addS1).empty();
        $(addS1).html('');
    }
    else
    {
        return false;
    }
    var addS2 = get_services[1];
    var rst_addS2 = $(addS2).text();
    var rst_addS2_arr = rst_addS2.split("");
    var x1S0 = rst_addS2_arr[0];
    var x1S1 = rst_addS2_arr[1];
    if(x1S0 == '1' && x1S1 == '1')
    {
        $(addS2).empty();
        $(addS2).html("<img src='/img/med.png' title='medical'>" + "<img src='/img/rec.png' title='recreational'>");
    }
    else if(x1S0 == '1' && x1S1 == '0')
    {
        $(addS2).empty();
        $(addS2).html("<img src='/img/med.png' title='medical'>");
    }
    else if(x1S0 == '0' && x1S1 == '1')
    {
        $(addS2).empty();
        $(addS2).html("<img src='/img/rec.png' title='recreational'>");
    }
    else if(x1S0 == '0' && x1S1 == '0')
    {
        $(addS2).empty();
        $(addS2).html('');
    }
    else
    {
        return false;
    }

    var addS3 = get_services[2];
    var rst_addS3 = $(addS3).text();
    var rst_addS3_arr = rst_addS3.split("");
    var x2S0 = rst_addS3_arr[0];
    var x2S1 = rst_addS3_arr[1];

    if(x2S0 == '1' && x2S1 == '1')
    {
        $(addS3).empty();
        $(addS3).html("<img src='/img/med.png' title='medical'>" + "<img src='/img/rec.png' title='recreational'>");
    }
    else if(x2S0 == '1' && x2S1 == '0')
    {
        $(addS3).empty();
        $(addS3).html("<img src='/img/med.png' title='medical'>");
    }
    else if(x2S0 == '0' && x2S1 == '1')
    {
        $(addS3).empty();
        $(addS3).html("<img src='/img/rec.png' title='recreational'>");
    }
    else if(x2S0 == '0' && x2S1 == '0')
    {
        $(addS3).empty();
        $(addS3).html('');
    }
    else
    {
        return false;
    }

    var addS4 = get_services[3];
    var rst_addS4 = $(addS4).text();
    var rst_addS4_arr = rst_addS4.split("");
    var x3S0 = rst_addS4_arr[0];
    var x3S1 = rst_addS4_arr[1];
    if(x3S0 == '1' && x3S1 == '1')
    {
        $(addS4).empty();
        $(addS4).html("<img src='/img/med.png' title='medical'>" + "<img src='/img/rec.png' title='recreational'>");
    }
    else if(x3S0 == '1' && x3S1 == '0')
    {
        $(addS4).empty();
        $(addS4).html("<img src='/img/med.png' title='medical'>");
    }
    else if(x3S0 == '0' && x3S1 == '1')
    {
        $(addS4).empty();
        $(addS4).html("<img src='/img/rec.png' title='recreational'>");
    }
    else if(x3S0 == '0' && x3S1 == '0')
    {
        $(addS4).empty();
        $(addS4).html('');
    }
    else
    {
        return false;
    }


    var addS5 = get_services[4];
    var rst_addS5 = $(addS5).text();
    var rst_addS5_arr = rst_addS5.split("");
    var x4S0 = rst_addS5_arr[0];
    var x4S1 = rst_addS5_arr[1];
    if(x4S0 == '1' && x4S1 == '1')
    {
        $(addS5).empty();
        $(addS5).html("<img src='/img/med.png' title='medical'>" + "<img src='/img/rec.png' title='recreational'>");
    }
    else if(x4S0 == '1' && x4S1 == '0')
    {
        $(addS5).empty();
        $(addS5).html("<img src='/img/med.png' title='medical'>");
    }
    else if(x4S0 == '0' && x4S1 == '1')
    {
        $(addS5).empty();
        $(addS5).html("<img src='/img/rec.png' title='recreational'>");
    }
    else if(x4S0 == '0' && x4S1 == '0')
    {
        $(addS5).empty();
        $(addS5).html('');
    }
    else
    {
        return false;
    }


    var addS6 = get_services[5];
    var rst_addS6 = $(addS6).text();
    var rst_addS6_arr = rst_addS6.split("");
    var x5S0 = rst_addS6_arr[0];
    var x5S1 = rst_addS6_arr[1];

    if(x5S0 == '1' && x5S1 == '1')
    {
        $(addS6).empty();
        $(addS6).html("<img src='/img/med.png' title='medical'>" + "<img src='/img/rec.png' title='recreational'>");
    }
    else if(x5S0 == '1' && x5S1 == '0')
    {
        $(addS6).empty();
        $(addS6).html("<img src='/img/med.png' title='medical'>");
    }
    else if(x5S0 == '0' && x5S1 == '1')
    {
        $(addS6).empty();
        $(addS6).html("<img src='/img/rec.png' title='recreational'>");
    }
    else if(x5S0 == '0' && x5S1 == '0')
    {
        $(addS6).empty();
        $(addS6).html('');
    }
    else
    {
        return false;
    }


    var addS7 = get_services[6];
    var rst_addS7 = $(addS7).text();
    var rst_addS7_arr = rst_addS7.split("");
    var x6S0 = rst_addS7_arr[0];
    var x6S1 = rst_addS7_arr[1];

    if(x6S0 == '1' && x6S1 == '1')
    {
        $(addS7).empty();
        $(addS7).html("<img src='/img/med.png' title='medical'>" + "<img src='/img/rec.png' title='recreational'>");
    }
    else if(x6S0 == '1' && x6S1 == '0')
    {
        $(addS7).empty();
        $(addS7).html("<img src='/img/med.png' title='medical'>");
    }
    else if(x6S0 == '0' && x6S1 == '1')
    {
        $(addS7).empty();
        $(addS7).html("<img src='/img/rec.png' title='recreational'>");
    }
    else if(x6S0 == '0' && x6S1 == '0')
    {
        $(addS7).empty();
        $(addS7).html('');
    }
    else
    {
        return false;
    }

    var addS8 = get_services[7];
    var rst_addS8 = $(addS8).text();
    var rst_addS8_arr = rst_addS8.split("");
                var x7S0 = rst_addS8_arr[0];
                var x7S1 = rst_addS8_arr[1];
                if(x7S0 == '1' && x7S1 == '1')
                {
                    $(addS8).empty();
                    $(addS8).html("<img src='/img/med.png' title='medical'>" + "<img src='/img/rec.png' title='recreational'>");
                }
                else if(x7S0 == '1' && x7S1 == '0')
                {
                    $(addS8).empty();
                    $(addS8).html("<img src='/img/med.png' title='medical'>");
                }
                else if(x7S0 == '0' && x7S1 == '1')
                {
                    $(addS8).empty();
                    $(addS8).html("<img src='/img/rec.png' title='recreational'>");
                }
                else if(x7S0 == '0' && x7S1 == '0')
                {
                    $(addS8).empty();
                    $(addS8).html('');
                }
                else
                {
                    return false;
                }
                var addS9 = get_services[8];
                var rst_addS9 = $(addS9).text();
                var rst_addS9_arr = rst_addS9.split("");
                var x8S0 = rst_addS9_arr[0];
                var x8S1 = rst_addS9_arr[1];
                if(x8S0 == '1' && x8S1 == '1')
                {
                    $(addS9).empty();
                    $(addS9).html("<img src='/img/med.png' title='medical'>" + "<img src='/img/rec.png' title='recreational'>");
                }
                else if(x8S0 == '1' && x8S1 == '0')
                {
                    $(addS9).empty();
                    $(addS9).html("<img src='/img/med.png' title='medical'>");
                }
                else if(x8S0 == '0' && x8S1 == '1')
                {
                    $(addS9).empty();
                    $(addS9).html("<img src='/img/rec.png' title='recreational'>");
                }
                else if(x8S0 == '0' && x8S1 == '0')
                {
                    $(addS9).empty();
                    $(addS9).html('');
                }
                else
                {
                    return false;
                }
    var addS10 = get_services[9];
    var rst_addS10 = $(addS10).text();
    var rst_addS10_arr = rst_addS10.split("");
    var x9S0 = rst_addS9_arr[0];
    var x9S1 = rst_addS9_arr[1];
                if(x9S0 == '1' && x9S1 == '1')
                {
                    $(addS10).empty();
                    $(addS10).html("<img src='/img/med.png' title='medical'>" + "<img src='/img/rec.png' title='recreational'>");
                }
                else if(x9S0 == '1' && x9S1 == '0')
                {
                    $(addS10).empty();
                    $(addS10).html("<img src='/img/med.png' title='medical'>");
                }
                else if(x9S0 == '0' && x9S1 == '1')
                {
                    $(addS10).empty();
                    $(addS10).html("<img src='/img/rec.png' title='recreational'>");
                }
                else if(x9S0 == '0' && x9S1 == '0')
                {
                    $(addS10).empty();
                    $(addS10).html('');
                }
                else
                {
                    return false;
                }
}

function ico_build_add()
{
                var addS = $( ".additional-services" ).each(function( index ) {
                  return $( this ).text();
                });
                var addSer0 = addS[0];
                var addSer1 = addS[1];
                var addSer2 = addS[2];
                var addSer3 = addS[3];
                var addSer4 = addS[4];
                var addSer5 = addS[5];
                var addSer6 = addS[6];
                var addSer7 = addS[7];
                var addSer8 = addS[8];
                var addSer9 = addS[9];
                var adServ1 = $( addSer0 ).text();
                var adServ2 = $( addSer1 ).text();
                var adServ3 = $( addSer2 ).text();
                var adServ4 = $( addSer3 ).text();
                var adServ5 = $( addSer4 ).text();
                var adServ6 = $( addSer5 ).text();
                var adServ7 = $( addSer6 ).text();
                var adServ8 = $( addSer7 ).text();
                var adServ9 = $( addSer8 ).text();
                var adServ10 = $( addSer9 ).text();
                var adServArr1 = adServ1.split("");
                var adS1Conv1 = adServArr1[0];
                var adS1Conv2 = adServArr1[1];
                var adS1Conv3 = adServArr1[2];
                var adS1Conv4 = adServArr1[3];
                var adS1Conv5 = adServArr1[4];
                var adS1Conv6 = adServArr1[5];
                var adS1Conv7 = adServArr1[6];
                var adS1Conv8 = adServArr1[7];
                var adS1Conv9 = adServArr1[8];
                if(adS1Conv1 == '1')
                {
                    $( addSer0 ).empty();
                    $( '#container1' ).append("<img src='/img/ada.png' title='wheelchair accessible' alt='American's with disabilities' >");
                }
                if(adS1Conv2 == '1')
                {
                    $( addSer0 ).empty();
                    $( '#container1' ).append("<img src='/img/delivery.png' title='delivery' alt='delivery' >");
                }
                if(adS1Conv3 == '1')
                {
                    $( addSer0 ).empty();
                    $( '#container1' ).append("<img src='/img/delivery.png' title='delivery only' alt='delivery only' >");
                }
                if(adS1Conv4 == '1')
                {
                    $( addSer0 ).empty();
                    $( '#container1' ).append("<img src='/img/cbd.png' title='cbd' alt='cbd' >");
                }
                if(adS1Conv5 == '1')
                {
                    $( addSer0 ).empty();
                    $( '#container1' ).append("<img src='/img/edibles.png' title='edibles' alt='edibles' >");
                }
                if(adS1Conv6 == '1')
                {
                    $( addSer0 ).empty();
                    $( '#container1' ).append("<img src='/img/concentrates.png' title='concentrates' alt='concentrates' >");
                }
                if(adS1Conv7 == '1')
                {
                    $( addSer0 ).empty();
                    $( '#container1' ).append("<img src='/img/cc.png' title='credit cards accepted' alt='credit cards' >");
                }
                if(adS1Conv8 == '1')
                {
                    $( addSer0 ).empty();
                    $( '#container1' ).append("<img src='/img/clones.png' title='clones' alt='clones' >");
                }
                if(adS1Conv9 == '1')
                {
                    $( addSer0 ).empty();
                    $( '#container1' ).append("<img src='/img/seeds.png' title='seeds' alt='seeds' >");
                }
                var adServArr2 = adServ2.split("");
                var adS2Conv1 = adServArr2[0];
                var adS2Conv2 = adServArr2[1];
                var adS2Conv3 = adServArr2[2];
                var adS2Conv4 = adServArr2[3];
                var adS2Conv5 = adServArr2[4];
                var adS2Conv6 = adServArr2[5];
                var adS2Conv7 = adServArr2[6];
                var adS2Conv8 = adServArr2[7];
                var adS2Conv9 = adServArr2[8];
                if(adS2Conv1 == '1')
                {
                    $( addSer1 ).empty();
                    $( '#container2' ).append("<img src='/img/ada.png' title='wheelchair accessible' alt='American's with disabilities' >");
                }
                if(adS2Conv2 == '1')
                {
                    $( addSer1 ).empty();
                    $( '#container2' ).append("<img src='/img/delivery.png' title='delivery' alt='delivery' >");
                }
                if(adS2Conv3 == '1')
                {
                    $( addSer1 ).empty();
                    $( '#container2' ).append("<img src='/img/delivery.png' title='delivery only' alt='delivery only' >");
                }
                if(adS2Conv4 == '1')
                {
                    $( addSer1 ).empty();
                    $( '#container2' ).append("<img src='/img/cbd.png' title='cbd' alt='cbd' >");
                }
                if(adS2Conv5 == '1')
                {
                    $( addSer1 ).empty();
                    $( '#container2' ).append("<img src='/img/edibles.png' title='edibles' alt='edibles' >");
                }
                if(adS2Conv6 == '1')
                {
                    $( addSer1 ).empty();
                    $( '#container2' ).append("<img src='/img/concentrates.png' title='concentrates' alt='concentrates' >");
                }
                if(adS2Conv7 == '1')
                {
                    $( addSer1 ).empty();
                    $( '#container2' ).append("<img src='/img/cc.png' title='credit cards accepted' alt='credit cards' >");
                }
                if(adS2Conv8 == '1')
                {
                    $( addSer1 ).empty();
                    $( '#container2' ).append("<img src='/img/clones.png' title='clones' alt='clones' >");
                }
                if(adS2Conv9 == '1')
                {
                    $( addSer1 ).empty();
                    $( '#container2' ).append("<img src='/img/seeds.png' title='seeds' alt='seeds' >");
                }
                var adServArr3 = adServ3.split("");
                var adS3Conv1 = adServArr3[0];
                var adS3Conv2 = adServArr3[1];
                var adS3Conv3 = adServArr3[2];
                var adS3Conv4 = adServArr3[3];
                var adS3Conv5 = adServArr3[4];
                var adS3Conv6 = adServArr3[5];
                var adS3Conv7 = adServArr3[6];
                var adS3Conv8 = adServArr3[7];
                var adS3Conv9 = adServArr3[8];
                if(adS3Conv1 == '1')
                {
                    $( addSer2 ).empty();
                    $( '#container3' ).append("<img src='/img/ada.png' title='wheelchair accessible' alt='American's with disabilities' >");
                }
                if(adS3Conv2 == '1')
                {
                    $( addSer2 ).empty();
                    $( '#container3' ).append("<img src='/img/delivery.png' title='delivery' alt='delivery' >");
                }
                if(adS3Conv3 == '1')
                {
                    $( addSer2 ).empty();
                    $( '#container3' ).append("<img src='/img/delivery.png' title='delivery only' alt='delivery only' >");
                }
                if(adS3Conv4 == '1')
                {
                    $( addSer2 ).empty();
                    $( '#container3' ).append("<img src='/img/cbd.png' title='cbd' alt='cbd' >");
                }
                if(adS3Conv5 == '1')
                {
                    $( addSer2 ).empty();
                    $( '#container3' ).append("<img src='/img/edibles.png' title='edibles' alt='edibles' >");
                }
                if(adS3Conv6 == '1')
                {
                    $( addSer2 ).empty();
                    $( '#container3' ).append("<img src='/img/concentrates.png' title='concentrates' alt='concentrates' >");
                }
                if(adS3Conv7 == '1')
                {
                  $( addSer2 ).empty();
                  $( '#container3' ).append("<img src='/img/cc.png' title='credit cards accepted' alt='credit cards' >");
                }
                if(adS3Conv8 == '1')
                {
                  $( addSer2 ).empty();
                  $( '#container3' ).append("<img src='/img/clones.png' title='clones' alt='clones' >");
                }
                if(adS3Conv9 == '1')
                {
                  $( addSer2 ).empty();
                  $( '#container3' ).append("<img src='/img/seeds.png' title='seeds' alt='seeds' >");
                }
                var adServArr4 = adServ4.split("");
                var adS4Conv1 = adServArr4[0];
                var adS4Conv2 = adServArr4[1];
                var adS4Conv3 = adServArr4[2];
                var adS4Conv4 = adServArr4[3];
                var adS4Conv5 = adServArr4[4];
                var adS4Conv6 = adServArr4[5];
                var adS4Conv7 = adServArr4[6];
                var adS4Conv8 = adServArr4[7];
                var adS4Conv9 = adServArr4[8];
                if(adS4Conv1 == '1')
                {
                  $( addSer3 ).empty();
                  $( '#container4' ).append("<img src='/img/ada.png' title='wheelchair accessible' alt='American's with disabilities' >");
                }
                if(adS4Conv2 == '1')
                {
                  $( addSer3 ).empty();
                  $( '#container4' ).append("<img src='/img/delivery.png' title='delivery' alt='delivery' >");
                }
                if(adS4Conv3 == '1')
                {
                  $( addSer3 ).empty();
                  $( '#container4' ).append("<img src='/img/delivery.png' title='delivery only' alt='delivery only' >");
                }
                if(adS4Conv4 == '1')
                {
                  $( addSer3 ).empty();
                  $( '#container4' ).append("<img src='/img/cbd.png' title='cbd' alt='cbd' >");
                }
                if(adS4Conv5 == '1')
                {
                  $( addSer3 ).empty();
                  $( '#container4' ).append("<img src='/img/edibles.png' title='edibles' alt='edibles' >");
                }
                if(adS4Conv6 == '1')
                {
                  $( addSer3 ).empty();
                  $( '#container4' ).append("<img src='/img/concentrates.png' title='concentrates' alt='concentrates' >");
                }
                if(adS4Conv7 == '1')
                {
                  $( addSer3 ).empty();
                  $( '#container4' ).append("<img src='/img/cc.png' title='credit cards accepted' alt='credit cards' >");
                }
                if(adS4Conv8 == '1')
                {
                  $( addSer3 ).empty();
                  $( '#container4' ).append("<img src='/img/clones.png' title='clones' alt='clones' >");
                }
                if(adS4Conv9 == '1')
                {
                  $( addSer3 ).empty();
                  $( '#container4' ).append("<img src='/img/seeds.png' title='seeds' alt='seeds' >");
                }
                var adServArr5 = adServ5.split("");
                var adS5Conv1 = adServArr5[0];
                var adS5Conv2 = adServArr5[1];
                var adS5Conv3 = adServArr5[2];
                var adS5Conv4 = adServArr5[3];
                var adS5Conv5 = adServArr5[4];
                var adS5Conv6 = adServArr5[5];
                var adS5Conv7 = adServArr5[6];
                var adS5Conv8 = adServArr5[7];
                var adS5Conv9 = adServArr5[8];
                if(adS5Conv1 == '1')
                {
                  $( addSer4 ).empty();
                  $( '#container5' ).append("<img src='/img/ada.png' title='wheelchair accessible' alt='American's with disabilities' >");
                }
                if(adS5Conv2 == '1')
                {
                  $( addSer4 ).empty();
                  $( '#container5' ).append("<img src='/img/delivery.png' title='delivery' alt='delivery' >");
                }
                if(adS5Conv3 == '1')
                {
                  $( addSer4 ).empty();
                  $( '#container5' ).append("<img src='/img/delivery.png' title='delivery only' alt='delivery only' >");
                }
                if(adS5Conv4 == '1')
                {
                  $( addSer4 ).empty();
                  $( '#container5' ).append("<img src='/img/cbd.png' title='cbd' alt='cbd' >");
                }
                if(adS5Conv5 == '1')
                {
                  $( addSer4 ).empty();
                  $( '#container5' ).append("<img src='/img/edibles.png' title='edibles' alt='edibles' >");
                }
                if(adS5Conv6 == '1')
                {
                  $( addSer4 ).empty();
                  $( '#container5' ).append("<img src='/img/concentrates.png' title='concentrates' alt='concentrates' >");
                }
                if(adS5Conv7 == '1')
                {
                  $( addSer4 ).empty();
                  $( '#container5' ).append("<img src='/img/cc.png' title='credit cards accepted' alt='credit cards' >");
                }
                if(adS5Conv8 == '1')
                {
                  $( addSer4 ).empty();
                  $( '#container5' ).append("<img src='/img/clones.png' title='clones' alt='clones' >");
                }
                if(adS5Conv9 == '1')
                {
                  $( addSer4 ).empty();
                  $( '#container5' ).append("<img src='/img/seeds.png' title='seeds' alt='seeds' >");
                }
                var adServArr6 = adServ6.split("");
                var adS6Conv1 = adServArr6[0];
                var adS6Conv2 = adServArr6[1];
                var adS6Conv3 = adServArr6[2];
                var adS6Conv4 = adServArr6[3];
                var adS6Conv5 = adServArr6[4];
                var adS6Conv6 = adServArr6[5];
                var adS6Conv7 = adServArr6[6];
                var adS6Conv8 = adServArr6[7];
                var adS6Conv9 = adServArr6[8];
                if(adS6Conv1 == '1')
                {
                  $( addSer5 ).empty();
                  $( '#container6' ).append("<img src='/img/ada.png' title='wheelchair accessible' alt='American's with disabilities' >");
                }
                if(adS6Conv2 == '1')
                {
                  $( addSer5 ).empty();
                  $( '#container6' ).append("<img src='/img/delivery.png' title='delivery' alt='delivery' >");
                }
                if(adS6Conv3 == '1')
                {
                  $( addSer5 ).empty();
                  $( '#container6' ).append("<img src='/img/delivery.png' title='delivery only' alt='delivery only' >");
                }
                if(adS6Conv4 == '1')
                {
                  $( addSer5 ).empty();
                  $( '#container6' ).append("<img src='/img/cbd.png' title='cbd' alt='cbd' >");
                }
                if(adS6Conv5 == '1')
                {
                  $( addSer5 ).empty();
                  $( '#container6' ).append("<img src='/img/edibles.png' title='edibles' alt='edibles' >");
                }
                if(adS6Conv6 == '1')
                {
                  $( addSer5 ).empty();
                  $( '#container6' ).append("<img src='/img/concentrates.png' title='concentrates' alt='concentrates' >");
                }
                if(adS6Conv7 == '1')
                {
                  $( addSer5 ).empty();
                  $( '#container6' ).append("<img src='/img/cc.png' title='credit cards accepted' alt='credit cards' >");
                }
                if(adS6Conv8 == '1')
                {
                  $( addSer5 ).empty();
                  $( '#container6' ).append("<img src='/img/clones.png' title='clones' alt='clones' >");
                }
                if(adS6Conv9 == '1')
                {
                  $( addSer5 ).empty();
                  $( '#container6' ).append("<img src='/img/seeds.png' title='seeds' alt='seeds' >");
                }
                var adServArr7 = adServ7.split("");
                var adS7Conv1 = adServArr7[0];
                var adS7Conv2 = adServArr7[1];
                var adS7Conv3 = adServArr7[2];
                var adS7Conv4 = adServArr7[3];
                var adS7Conv5 = adServArr7[4];
                var adS7Conv6 = adServArr7[5];
                var adS7Conv7 = adServArr7[6];
                var adS7Conv8 = adServArr7[7];
                var adS7Conv9 = adServArr7[8];
                if(adS7Conv1 == '1')
                {
                  $( addSer6 ).empty();
                  $( '#container7' ).append("<img src='/img/ada.png' title='wheelchair accessible' alt='American's with disabilities' >");
                }
                if(adS7Conv2 == '1')
                {
                  $( addSer6 ).empty();
                  $( '#container7' ).append("<img src='/img/delivery.png' title='delivery' alt='delivery' >");
                }
                if(adS7Conv3 == '1')
                {
                  $( addSer6 ).empty();
                  $( '#container7' ).append("<img src='/img/delivery.png' title='delivery only' alt='delivery only' >");
                }
                if(adS7Conv4 == '1')
                {
                  $( addSer6 ).empty();
                  $( '#container7' ).append("<img src='/img/cbd.png' title='cbd' alt='cbd' >");
                }
                if(adS7Conv5 == '1')
                {
                  $( addSer6 ).empty();
                  $( '#container7' ).append("<img src='/img/edibles.png' title='edibles' alt='edibles' >");
                }
                if(adS7Conv6 == '1')
                {
                  $( addSer6 ).empty();
                  $( '#container7' ).append("<img src='/img/concentrates.png' title='concentrates' alt='concentrates' >");
                }
                if(adS7Conv7 == '1')
                {
                  $( addSer6 ).empty();
                  $( '#container7' ).append("<img src='/img/cc.png' title='credit cards accepted' alt='credit cards' >");
                }
                if(adS7Conv8 == '1')
                {
                  $( addSer6 ).empty();
                  $( '#container7' ).append("<img src='/img/clones.png' title='clones' alt='clones' >");
                }
                if(adS7Conv9 == '1')
                {
                  $( addSer6 ).empty();
                  $( '#container7' ).append("<img src='/img/seeds.png' title='seeds' alt='seeds' >");
                }
                var adServArr8 = adServ8.split("");
                var adS8Conv1 = adServArr8[0];
                var adS8Conv2 = adServArr8[1];
                var adS8Conv3 = adServArr8[2];
                var adS8Conv4 = adServArr8[3];
                var adS8Conv5 = adServArr8[4];
                var adS8Conv6 = adServArr8[5];
                var adS8Conv7 = adServArr8[6];
                var adS8Conv8 = adServArr8[7];
                var adS8Conv9 = adServArr8[8];
                if(adS8Conv1 == '1')
                {
                  $( addSer7 ).empty();
                  $( '#container8' ).append("<img src='/img/ada.png' title='wheelchair accessible' alt='American's with disabilities' >");
                }
                if(adS8Conv2 == '1')
                {
                  $( addSer7 ).empty();
                  $( '#container8' ).append("<img src='/img/delivery.png' title='delivery' alt='delivery' >");
                }
                if(adS8Conv3 == '1')
                {
                  $( addSer7 ).empty();
                  $( '#container8' ).append("<img src='/img/delivery.png' title='delivery only' alt='delivery only' >");
                }
                if(adS8Conv4 == '1')
                {
                  $( addSer7 ).empty();
                  $( '#container8' ).append("<img src='/img/cbd.png' title='cbd' alt='cbd' >");
                }
                if(adS8Conv5 == '1')
                {
                  $( addSer7 ).empty();
                  $( '#container8' ).append("<img src='/img/edibles.png' title='edibles' alt='edibles' >");
                }
                if(adS8Conv6 == '1')
                {
                  $( addSer7 ).empty();
                  $( '#container8' ).append("<img src='/img/concentrates.png' title='concentrates' alt='concentrates' >");
                }
                if(adS8Conv7 == '1')
                {
                  $( addSer7 ).empty();
                  $( '#container8' ).append("<img src='/img/cc.png' title='credit cards accepted' alt='credit cards' >");
                }
                if(adS8Conv8 == '1')
                {
                  $( addSer7 ).empty();
                  $( '#container8' ).append("<img src='/img/clones.png' title='clones' alt='clones' >");
                }
                if(adS8Conv9 == '1')
                {
                  $( addSer7 ).empty();
                  $( '#container8' ).append("<img src='/img/seeds.png' title='seeds' alt='seeds' >");
                }
    var adServArr9 = adServ9.split("");
    var adS9Conv1 = adServArr9[0];
    var adS9Conv2 = adServArr9[1];
    var adS9Conv3 = adServArr9[2];
    var adS9Conv4 = adServArr9[3];
    var adS9Conv5 = adServArr9[4];
    var adS9Conv6 = adServArr9[5];
    var adS9Conv7 = adServArr9[6];
    var adS9Conv8 = adServArr9[7];
    var adS9Conv9 = adServArr9[8];


                if(adS9Conv1 == '1')
                {
                  $( addSer8 ).empty();
                  $( '#container9' ).append("<img src='/img/ada.png' title='wheelchair accessible' alt='American's with disabilities' >");
                }
                if(adS9Conv2 == '1')
                {
                  $( addSer8 ).empty();
                  $( '#container9' ).append("<img src='/img/delivery.png' title='delivery' alt='delivery' >");
                }
                if(adS9Conv3 == '1')
                {
                  $( addSer8 ).empty();
                  $( '#container9' ).append("<img src='/img/delivery.png' title='delivery only' alt='delivery only' >");
                }
                if(adS9Conv4 == '1')
                {
                  $( addSer8 ).empty();
                  $( '#container9' ).append("<img src='/img/cbd.png' title='cbd' alt='cbd' >");
                }
                if(adS9Conv5 == '1')
                {
                  $( addSer8 ).empty();
                  $( '#container9' ).append("<img src='/img/edibles.png' title='edibles' alt='edibles' >");
                }
                if(adS9Conv6 == '1')
                {
                  $( addSer8 ).empty();
                  $( '#container9' ).append("<img src='/img/concentrates.png' title='concentrates' alt='concentrates' >");
                }
                if(adS9Conv7 == '1')
                {
                  $( addSer8 ).empty();
                  $( '#container9' ).append("<img src='/img/cc.png' title='credit cards accepted' alt='credit cards' >");
                }
                if(adS9Conv8 == '1')
                {
                  $( addSer8 ).empty();
                  $( '#container9' ).append("<img src='/img/clones.png' title='clones' alt='clones' >");
                }
                if(adS9Conv9 == '1')
                {
                  $( addSer8 ).empty();
                  $( '#container9' ).append("<img src='/img/seeds.png' title='seeds' alt='seeds' >");
                }
    var adServArr10 = adServ10.split("");
    var adS10Conv1 = adServArr10[0];
    var adS10Conv2 = adServArr10[1];
    var adS10Conv3 = adServArr10[2];
    var adS10Conv4 = adServArr10[3];
    var adS10Conv5 = adServArr10[4];
    var adS10Conv6 = adServArr10[5];
    var adS10Conv7 = adServArr10[6];
    var adS10Conv8 = adServArr10[7];
    var adS10Conv9 = adServArr10[8];
                if(adS10Conv1 == '1')
                {
                    $( addSer9 ).empty();
                    $( '#container10' ).append("<img src='/img/ada.png' title='wheelchair accessible' alt='American's with disabilities>");
                }
                if(adS10Conv2 == '1')
                {
                    $( addSer9 ).empty();
                    $( '#container10' ).append("<img src='/img/delivery.png' title='delivery' alt='delivery' >");
                }
                if(adS10Conv3 == '1')
                {
                    $( addSer9 ).empty();
                    $( '#container10' ).append("<img src='/img/delivery.png' title='delivery only' alt='delivery only' >");
                }
                if(adS10Conv4 == '1')
                {
                    $( addSer9 ).empty();
                    $( '#container10' ).append("<img src='/img/cbd.png' title='cbd' alt='cbd' >");
                }
                if(adS10Conv5 == '1')
                {
                    $( addSer9 ).empty();
                    $( '#container10' ).append("<img src='/img/edibles.png' title='edibles' alt='edibles' >");
                }
                if(adS10Conv6 == '1')
                {
                    $( addSer9 ).empty();
                    $( '#container10' ).append("<img src='/img/concentrates.png' title='concentrates' alt='concentrates' >");
                }
                if(adS10Conv7 == '1')
                {
                    $( addSer9 ).empty();
                    $( '#container10' ).append("<img src='/img/cc.png' title='credit cards accepted' alt='credit cards' >");
                }
                if(adS10Conv8 == '1')
                {
                    $( addSer9 ).empty();
                    $( '#container10' ).append("<img src='/img/clones.png' title='clones' alt='clones' >");
                }
                if(adS10Conv9 == '1')
                {
                    $( addSer9 ).empty();
                    $( '#container10' ).append("<img src='/img/seeds.png' title='seeds' alt='seeds' >");
                }
}

function i_load()
{

    $.get( '/get_id',
        {
            '_token': $('meta[name=csrf_token]').attr('content'),
        },
        function(result)
        {
            console.log("post #1");
            console.log(result);
            global_id = result.split(" ");
            console.log("GLOBAL ID");
            console.log(global_id);
        }
    );
}

function getLat()
{
    var lat = 44.051671;
    var resLat = [9];
    for(var i = 0; lat.length; ++i)
    {
        resLat[lat];
    }
    var tmp1 = [9];
    for (var i = 0; i < tmp1.length; ++i)
    {
        ;

    }
}
function getLng()
{
    var lng = -123.09925;

    var tmp1 = [11];
    for (var i = 0; i < tmp1.length; ++i)
    {
        ;

    }
}
function getCo1(t1)
{
    global_pos1 = t1;
    console.log(global_pos1);
}
function getCo2(t2)
{
            global_pos2 = t2;
            console.log(global_pos2);
}
function getCo3(t3)
{
            global_pos3 = t3;
            console.log(global_pos3);
}
function getCo4(t4)
{
    global_pos4 = t4;
    console.log(global_pos4);
}
function getCo5(t5)
{
    global_pos5 = t5;
    console.log(global_pos5);
}
function getCo6(t6)
{
    global_pos6 = t6;
    console.log(global_pos6);
}
function getCo7(t7)
{
    global_pos7 = t7;
    console.log(global_pos7);
}
function getCo8(t8)
{
    global_pos8 = t8;
    console.log(global_pos8);
}
function getCo9(t9)
{
    global_pos9 = t9;
    console.log(global_pos9);
}
function getCo10(t10)
{
    global_pos10 = t10;
    console.log(global_pos10);
    x();
}
function x()
{
    console.log("TEST !!!!!!!!!!!!!!!!!!!!!!!!!");
    console.log(global_pos1);
    console.log(global_pos2);
    console.log(global_pos3);
    console.log(global_pos4);
    console.log(global_pos5);
    console.log(global_pos6);
    console.log(global_pos7);
    console.log(global_pos8);
    console.log(global_pos9);
    console.log(global_pos10);
    $.ajax({
        type: 'post',
        url: '/on_top',
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf_token"]').attr('content')
        },
        data: {
            "t1": global_pos1,
            "t2": global_pos2,
            "t3": global_pos3,
            "t4": global_pos4,
            "t5": global_pos5,
            "t6": global_pos6,
            "t7": global_pos7,
            "t8": global_pos8,
            "t9": global_pos9,
            "t10": global_pos10,
            _method: 'post'
        },
        success: function (response) {
            console.log("AJAX STOP");
            console.log(response);
            $( '#home-tbl-contain' ).html(response);
                go();
            },
            error: function(textStatus, errorThrown) {
                console.log("AJAX error: " + textStatus + ' : ' + errorThrown);
            }
    });
}


// listener find near me
$(document).on('click', '.geo-loc', function (e) {
    var lat1;
    var lng1;
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    function success(pos)
    {
        var crd = pos.coords;
        console.log(crd);
        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
        var latitude = pos.coords.latitude;
        var longitude = pos.coords.longitude;
        lat1 = latitude;
        lng1 = longitude;
        console.log(lat1);
        console.log(lng1);

        $.get( '/on_l',
            {
                '_token': $('meta[name=csrf_token]').attr('content'),
            },
            // Put the results in a div
            function(result)
            {
                console.log("CHECK GLOBAL LATLNG");
                var tmpL = result;
                var rstL = tmpL.split(" ");
                console.log(rstL);
                rst_loc(rstL, global_id, lat1, lng1);
                const domGeo1 = document.getElementById("top-desktop");
                domGeo1.innerHTML = '';
                const domGeo2 = document.getElementById("top-mobile");
                domGeo2.innerHTML = '';

            }
        );

    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
});

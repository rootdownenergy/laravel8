//console.log();
function rst_loc(inL, glb, lat, lng)
{
    console.log("glb");
    console.log(glb);
    var rstID = [];
    var rstinL = [];
    var hldVal = [];
    var fin1 = [1431];
    //index positions of original row in DB
    console.log(inL);
    // original lat/lng from DB
    console.log(rstinL);

    // type convertion 
    for(ex=0; ex < glb.length; ex++)
    {
        rstID.push(parseInt(glb[ex]));
    }
    //log org struct
    //log index positions of DB rows converted to integer
    console.log("converted glb ");
    console.log(rstID);

    //type convertion 
    //turn the lat/lng from strings in DB to number so they can be used in the geometry matrix
    for(i=0; i < inL.length; i++)
    {
       rstinL.push(parseFloat(inL[i]));
    }
    console.log("rstinL");
    console.log(rstinL);

    //restructure the geometry values in descending order
    var rstrGeom = [];
    var rstrCoor = [];
    console.log(lat);
    console.log(lng);
    //user location global variable 
    usr_loc = new google.maps.LatLng(lat,lng,noWrap=true);
    //usr_loc = glb_pos;
    console.log("USER LOCATION");
    console.log(usr_loc);
    cAlt0 = new google.maps.LatLng(lat,lng,noWrap=true);
    console.log(cAlt0);
    console.log(rstinL[1]);
    console.log(rstinL[2]);
    // calculate distance between user location and each lat/lng from DB
    cAlt1 = new google.maps.LatLng(rstinL[1],rstinL[2],noWrap=true);
    var geom1 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1);
    rstrGeom.push(geom1);
    console.log(geom1);
    console.log(rstrGeom[0]);

    cAlt2 = new google.maps.LatLng(rstinL[3],rstinL[4],noWrap=true);
    var geom2 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt2);
    rstrGeom.push(geom2);
    console.log(geom2);

    cAlt3 = new google.maps.LatLng(rstinL[5],rstinL[6],noWrap=true);
    var geom3 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt3);
    rstrGeom.push(geom3);

    cAlt4 = new google.maps.LatLng(rstinL[7],rstinL[8],noWrap=true);
    var geom4 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt4);
    rstrGeom.push(geom4);

    cAlt5 = new google.maps.LatLng(rstinL[9],rstinL[10],noWrap=true);
    var geom5 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt5);
    rstrGeom.push(geom5);

    cAlt6 = new google.maps.LatLng(rstinL[11],rstinL[12],noWrap=true);
    var geom6 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt6);
    rstrGeom.push(geom6);

    cAlt7 = new google.maps.LatLng(rstinL[13],rstinL[14],noWrap=true);
    var geom7 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt7);
    rstrGeom.push(geom7);

    cAlt8 = new google.maps.LatLng(rstinL[15],rstinL[16],noWrap=true);
    var geom8 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt8);
    rstrGeom.push(geom8);

    cAlt9 = new google.maps.LatLng(rstinL[17],rstinL[18],noWrap=true);
    var geom9 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt9);
    rstrGeom.push(geom9);

    cAlt10 = new google.maps.LatLng(rstinL[19],rstinL[20],noWrap=true);
    var geom10 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt10);
    rstrGeom.push(geom10);

    cAlt11 = new google.maps.LatLng(rstinL[21],rstinL[22],noWrap=true);
    var geom11 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt11);
    rstrGeom.push(geom11);

    cAlt12 = new google.maps.LatLng(rstinL[23],rstinL[24],noWrap=true);
    var geom12 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt12);
    rstrGeom.push(geom12);

    cAlt13 = new google.maps.LatLng(rstinL[25],rstinL[26],noWrap=true);
    var geom13 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt13);
    rstrGeom.push(geom13);

    cAlt14 = new google.maps.LatLng(rstinL[27],rstinL[28],noWrap=true);
    var geom14 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt14);
    rstrGeom.push(geom14);

    cAlt15 = new google.maps.LatLng(rstinL[29],rstinL[30],noWrap=true);
    var geom15 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt15);
    rstrGeom.push(geom15);

    cAlt16 = new google.maps.LatLng(rstinL[31],rstinL[32],noWrap=true);
    var geom16 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt16);
    rstrGeom.push(geom16);

    cAlt17 = new google.maps.LatLng(rstinL[33],rstinL[34],noWrap=true);
    var geom17 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt17);
    rstrGeom.push(geom17);

    cAlt18 = new google.maps.LatLng(rstinL[35],rstinL[36],noWrap=true);
    var geom18 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt18);
    rstrGeom.push(geom18);

    cAlt19 = new google.maps.LatLng(rstinL[37],rstinL[38],noWrap=true);
    var geom19 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt19);
    rstrGeom.push(geom19);

    cAlt20 = new google.maps.LatLng(rstinL[39],rstinL[40],noWrap=true);
    var geom20 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt20);
    rstrGeom.push(geom20);

    cAlt21 = new google.maps.LatLng(rstinL[41],rstinL[42],noWrap=true);
    var geom21 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt21);
    rstrGeom.push(geom21);

    cAlt22 = new google.maps.LatLng(rstinL[43],rstinL[44],noWrap=true);
    var geom22 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt22);
    rstrGeom.push(geom22);

    cAlt23 = new google.maps.LatLng(rstinL[45],rstinL[46],noWrap=true);
    var geom23 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt23);
    rstrGeom.push(geom23);

    cAlt24 = new google.maps.LatLng(rstinL[47],rstinL[48],noWrap=true);
    var geom24 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt24);
    rstrGeom.push(geom24);

    cAlt25 = new google.maps.LatLng(rstinL[49],rstinL[50],noWrap=true);
    var geom25 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt25);
    rstrGeom.push(geom25);

    cAlt26 = new google.maps.LatLng(rstinL[51],rstinL[52],noWrap=true);
    var geom26 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt26);
    rstrGeom.push(geom26);

    cAlt27 = new google.maps.LatLng(rstinL[53],rstinL[54],noWrap=true);
    var geom27 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt27);
    rstrGeom.push(geom27);

    cAlt28 = new google.maps.LatLng(rstinL[55],rstinL[56],noWrap=true);
    var geom28 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt28);
    rstrGeom.push(geom28);

    cAlt29 = new google.maps.LatLng(rstinL[57],rstinL[58],noWrap=true);
    var geom29 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt29);
    rstrGeom.push(geom29);

    cAlt30 = new google.maps.LatLng(rstinL[59],rstinL[60],noWrap=true);
    var geom30 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt30);
    rstrGeom.push(geom30);
    console.log(geom30);

    cAlt31 = new google.maps.LatLng(rstinL[61],rstinL[62],noWrap=true);
    var geom31 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt31);
    rstrGeom.push(geom31);

    cAlt32 = new google.maps.LatLng(rstinL[63],rstinL[64],noWrap=true);
    var geom32 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt32);
    rstrGeom.push(geom32);

    cAlt33 = new google.maps.LatLng(rstinL[65],rstinL[66],noWrap=true);
    var geom33 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt33);
    rstrGeom.push(geom33);

    cAlt34 = new google.maps.LatLng(rstinL[67],rstinL[68],noWrap=true);
    var geom34 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt34);
    rstrGeom.push(geom34);

    cAlt35 = new google.maps.LatLng(rstinL[69],rstinL[70],noWrap=true);
    var geom35 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt35);
    rstrGeom.push(geom35);

    cAlt36 = new google.maps.LatLng(rstinL[71],rstinL[72],noWrap=true);
    var geom36 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt36);
    rstrGeom.push(geom36);

    cAlt37 = new google.maps.LatLng(rstinL[73],rstinL[74],noWrap=true);
    var geom37 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt37);
    rstrGeom.push(geom37);

    cAlt38 = new google.maps.LatLng(rstinL[75],rstinL[76],noWrap=true);
    var geom38 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt38);
    rstrGeom.push(geom38);

    cAlt39 = new google.maps.LatLng(rstinL[77],rstinL[78],noWrap=true);
    var geom39 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt39);
    rstrGeom.push(geom39);

    cAlt40 = new google.maps.LatLng(rstinL[79],rstinL[80],noWrap=true);
    var geom40 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt40);
    rstrGeom.push(geom40);

    cAlt41 = new google.maps.LatLng(rstinL[81],rstinL[82],noWrap=true);
    var geom41 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt41);
    rstrGeom.push(geom41);

    cAlt42 = new google.maps.LatLng(rstinL[83],rstinL[84],noWrap=true);
    var geom42 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt42);
    rstrGeom.push(geom42);

    cAlt43 = new google.maps.LatLng(rstinL[85],rstinL[86],noWrap=true);
    var geom43 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt43);
    rstrGeom.push(geom43);

    cAlt44 = new google.maps.LatLng(rstinL[87],rstinL[88],noWrap=true);
    var geom44 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt44);
    rstrGeom.push(geom44);

    cAlt45 = new google.maps.LatLng(rstinL[89],rstinL[90],noWrap=true);
    var geom45 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt45);
    rstrGeom.push(geom45);

    cAlt46 = new google.maps.LatLng(rstinL[91],rstinL[92],noWrap=true);
    var geom46 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt46);
    rstrGeom.push(geom46);

    cAlt47 = new google.maps.LatLng(rstinL[93],rstinL[94],noWrap=true);
    var geom47 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt47);
    rstrGeom.push(geom47);

    cAlt48 = new google.maps.LatLng(rstinL[95],rstinL[96],noWrap=true);
    var geom48 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt48);
    rstrGeom.push(geom48);

    cAlt49 = new google.maps.LatLng(rstinL[97],rstinL[98],noWrap=true);
    var geom49 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt49);
    rstrGeom.push(geom49);

    cAlt50 = new google.maps.LatLng(rstinL[99],rstinL[100],noWrap=true);
    var geom50 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt50);
    rstrGeom.push(geom50);

    cAlt51 = new google.maps.LatLng(rstinL[101],rstinL[102],noWrap=true);
    var geom51 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt51);
    rstrGeom.push(geom51);

    cAlt52 = new google.maps.LatLng(rstinL[103],rstinL[104],noWrap=true);
    var geom52 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt52);
    rstrGeom.push(geom52);

    cAlt53 = new google.maps.LatLng(rstinL[105],rstinL[106],noWrap=true);
    var geom53 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt53);
    rstrGeom.push(geom53);

    cAlt54 = new google.maps.LatLng(rstinL[107],rstinL[108],noWrap=true);
    var geom54 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt54);
    rstrGeom.push(geom54);

    cAlt55 = new google.maps.LatLng(rstinL[109],rstinL[110],noWrap=true);
    var geom55 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt55);
    rstrGeom.push(geom55);

    cAlt56 = new google.maps.LatLng(rstinL[111],rstinL[112],noWrap=true);
    var geom56 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt56);
    rstrGeom.push(geom56);

    cAlt57 = new google.maps.LatLng(rstinL[113],rstinL[114],noWrap=true);
    var geom57 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt57);
    rstrGeom.push(geom57);

    cAlt58 = new google.maps.LatLng(rstinL[115],rstinL[116],noWrap=true);
    var geom58 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt58);
    rstrGeom.push(geom58);

    cAlt59 = new google.maps.LatLng(rstinL[117],rstinL[118],noWrap=true);
    var geom59 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt59);
    rstrGeom.push(geom59);

    cAlt60 = new google.maps.LatLng(rstinL[119],rstinL[120],noWrap=true);
    var geom60 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt60);
    rstrGeom.push(geom60);

    cAlt61 = new google.maps.LatLng(rstinL[121],rstinL[122],noWrap=true);
    var geom61 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt61);
    rstrGeom.push(geom61);

    cAlt62 = new google.maps.LatLng(rstinL[123],rstinL[124],noWrap=true);
    var geom62 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt62);
    rstrGeom.push(geom62);

    cAlt63 = new google.maps.LatLng(rstinL[125],rstinL[126],noWrap=true);
    var geom63 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt63);
    rstrGeom.push(geom63);

    cAlt64 = new google.maps.LatLng(rstinL[127],rstinL[128],noWrap=true);
    var geom64 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt64);
    rstrGeom.push(geom64);

    cAlt65 = new google.maps.LatLng(rstinL[129],rstinL[130],noWrap=true);
    var geom65 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt65);
    rstrGeom.push(geom65);

    cAlt66 = new google.maps.LatLng(rstinL[131],rstinL[132],noWrap=true);
    var geom66 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt66);
    rstrGeom.push(geom66);

    cAlt67 = new google.maps.LatLng(rstinL[133],rstinL[134],noWrap=true);
    var geom67 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt67);
    rstrGeom.push(geom67);

    cAlt68 = new google.maps.LatLng(rstinL[135],rstinL[136],noWrap=true);
    var geom68 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt68);
    rstrGeom.push(geom68);

    cAlt69 = new google.maps.LatLng(rstinL[137],rstinL[138],noWrap=true);
    var geom69 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt69);
    rstrGeom.push(geom69);

    cAlt70 = new google.maps.LatLng(rstinL[139],rstinL[140],noWrap=true);
    var geom70 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt70);
    rstrGeom.push(geom70);

    cAlt71 = new google.maps.LatLng(rstinL[141],rstinL[142],noWrap=true);
    var geom71 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt71);
    rstrGeom.push(geom71);

    cAlt72 = new google.maps.LatLng(rstinL[143],rstinL[144],noWrap=true);
    var geom72 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt72);
    rstrGeom.push(geom72);

    cAlt73 = new google.maps.LatLng(rstinL[145],rstinL[146],noWrap=true);
    var geom73 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt73);
    rstrGeom.push(geom73);

    cAlt74 = new google.maps.LatLng(rstinL[147],rstinL[148],noWrap=true);
    var geom74 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt74);
    rstrGeom.push(geom74);

    cAlt75 = new google.maps.LatLng(rstinL[149],rstinL[150],noWrap=true);
    var geom75 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt75);
    rstrGeom.push(geom75);

    cAlt76 = new google.maps.LatLng(rstinL[151],rstinL[152],noWrap=true);
    var geom76 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt76);
    rstrGeom.push(geom76);

    cAlt77 = new google.maps.LatLng(rstinL[153],rstinL[154],noWrap=true);
    var geom77 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt77);
    rstrGeom.push(geom77);

    cAlt78 = new google.maps.LatLng(rstinL[155],rstinL[156],noWrap=true);
    var geom78 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt78);
    rstrGeom.push(geom78);

    cAlt79 = new google.maps.LatLng(rstinL[157],rstinL[158],noWrap=true);
    var geom79 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt79);
    rstrGeom.push(geom79);

    cAlt80 = new google.maps.LatLng(rstinL[159],rstinL[160],noWrap=true);
    var geom80 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt80);
    rstrGeom.push(geom80);

    cAlt81 = new google.maps.LatLng(rstinL[161],rstinL[162],noWrap=true);
    var geom81 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt81);
    rstrGeom.push(geom81);

    cAlt82 = new google.maps.LatLng(rstinL[163],rstinL[164],noWrap=true);
    var geom82 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt82);
    rstrGeom.push(geom82);

    cAlt83 = new google.maps.LatLng(rstinL[165],rstinL[166],noWrap=true);
    var geom83 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt83);
    rstrGeom.push(geom83);

    cAlt84 = new google.maps.LatLng(rstinL[167],rstinL[168],noWrap=true);
    var geom84 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt84);
    rstrGeom.push(geom84);

    cAlt85 = new google.maps.LatLng(rstinL[169],rstinL[170],noWrap=true);
    var geom85 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt85);
    rstrGeom.push(geom85);

    cAlt86 = new google.maps.LatLng(rstinL[171],rstinL[172],noWrap=true);
    var geom86 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt86);
    rstrGeom.push(geom86);

    cAlt87 = new google.maps.LatLng(rstinL[173],rstinL[174],noWrap=true);
    var geom87 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt87);
    rstrGeom.push(geom87);

    cAlt88 = new google.maps.LatLng(rstinL[175],rstinL[176],noWrap=true);
    var geom88 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt88);
    rstrGeom.push(geom88);

    cAlt89 = new google.maps.LatLng(rstinL[177],rstinL[178],noWrap=true);
    var geom89 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt89);
    rstrGeom.push(geom89);

    cAlt90 = new google.maps.LatLng(rstinL[179],rstinL[180],noWrap=true);
    var geom90 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt90);
    rstrGeom.push(geom90);

    cAlt91 = new google.maps.LatLng(rstinL[181],rstinL[182],noWrap=true);
    var geom91 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt91);
    rstrGeom.push(geom91);

    cAlt92 = new google.maps.LatLng(rstinL[183],rstinL[184],noWrap=true);
    var geom92 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt92);
    rstrGeom.push(geom92);

    cAlt93 = new google.maps.LatLng(rstinL[185],rstinL[186],noWrap=true);
    var geom93 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt93);
    rstrGeom.push(geom93);

    cAlt94 = new google.maps.LatLng(rstinL[187],rstinL[188],noWrap=true);
    var geom94 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt94);
    rstrGeom.push(geom94);

    cAlt95 = new google.maps.LatLng(rstinL[189],rstinL[190],noWrap=true);
    var geom95 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt95);
    rstrGeom.push(geom95);

    cAlt96 = new google.maps.LatLng(rstinL[191],rstinL[192],noWrap=true);
    var geom96 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt96);
    rstrGeom.push(geom96);

    cAlt97 = new google.maps.LatLng(rstinL[193],rstinL[194],noWrap=true);
    var geom97 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt97);
    rstrGeom.push(geom97);

    cAlt98 = new google.maps.LatLng(rstinL[195],rstinL[196],noWrap=true);
    var geom98 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt98);
    rstrGeom.push(geom98);

    cAlt99 = new google.maps.LatLng(rstinL[197],rstinL[198],noWrap=true);
    var geom99 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt99);
    rstrGeom.push(geom99);

    cAlt100 = new google.maps.LatLng(rstinL[199],rstinL[200],noWrap=true);
    var geom100 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt100);
    rstrGeom.push(geom100);

    cAlt101 = new google.maps.LatLng(rstinL[201],rstinL[202],noWrap=true);
    var geom101 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt101);
    rstrGeom.push(geom101);

    cAlt102 = new google.maps.LatLng(rstinL[203],rstinL[204],noWrap=true);
    var geom102 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt102);
    rstrGeom.push(geom102);

    cAlt103 = new google.maps.LatLng(rstinL[205],rstinL[206],noWrap=true);
    var geom103 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt103);
    rstrGeom.push(geom103);

    cAlt104 = new google.maps.LatLng(rstinL[207],rstinL[208],noWrap=true);
    var geom104 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt104);
    rstrGeom.push(geom104);

    cAlt105 = new google.maps.LatLng(rstinL[209],rstinL[210],noWrap=true);
    var geom105 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt105);
    rstrGeom.push(geom105);

    cAlt106 = new google.maps.LatLng(rstinL[211],rstinL[212],noWrap=true);
    var geom106 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt106);
    rstrGeom.push(geom106);

    cAlt107 = new google.maps.LatLng(rstinL[213],rstinL[214],noWrap=true);
    var geom107 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt107);
    rstrGeom.push(geom107);

    cAlt108 = new google.maps.LatLng(rstinL[215],rstinL[216],noWrap=true);
    var geom108 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt108);
    rstrGeom.push(geom108);

    cAlt109 = new google.maps.LatLng(rstinL[217],rstinL[218],noWrap=true);
    var geom109 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt109);
    rstrGeom.push(geom109);

    cAlt110 = new google.maps.LatLng(rstinL[219],rstinL[220],noWrap=true);
    var geom110 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt110);
    rstrGeom.push(geom110);

    cAlt111 = new google.maps.LatLng(rstinL[221],rstinL[222],noWrap=true);
    var geom111 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt111);
    rstrGeom.push(geom111);

    cAlt112 = new google.maps.LatLng(rstinL[223],rstinL[224],noWrap=true);
    var geom112 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt112);
    rstrGeom.push(geom112);

    cAlt113 = new google.maps.LatLng(rstinL[225],rstinL[226],noWrap=true);
    var geom113 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt113);
    rstrGeom.push(geom113);

    cAlt114 = new google.maps.LatLng(rstinL[227],rstinL[228],noWrap=true);
    var geom114 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt114);
    rstrGeom.push(geom114);

    cAlt115 = new google.maps.LatLng(rstinL[229],rstinL[230],noWrap=true);
    var geom115 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt115);
    rstrGeom.push(geom115);

    cAlt116 = new google.maps.LatLng(rstinL[231],rstinL[232],noWrap=true);
    var geom116 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt116);
    rstrGeom.push(geom116);

    cAlt117 = new google.maps.LatLng(rstinL[233],rstinL[234],noWrap=true);
    var geom117 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt117);
    rstrGeom.push(geom117);

    cAlt118 = new google.maps.LatLng(rstinL[235],rstinL[236],noWrap=true);
    var geom118 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt118);
    rstrGeom.push(geom118);

    cAlt119 = new google.maps.LatLng(rstinL[237],rstinL[238],noWrap=true);
    var geom119 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt119);
    rstrGeom.push(geom119);

    cAlt120 = new google.maps.LatLng(rstinL[239],rstinL[240],noWrap=true);
    var geom120 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt120);
    rstrGeom.push(geom120);

    cAlt121 = new google.maps.LatLng(rstinL[241],rstinL[242],noWrap=true);
    var geom121 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt121);
    rstrGeom.push(geom121);

    cAlt122 = new google.maps.LatLng(rstinL[243],rstinL[244],noWrap=true);
    var geom122 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt122);
    rstrGeom.push(geom122);

    cAlt123 = new google.maps.LatLng(rstinL[245],rstinL[246],noWrap=true);
    var geom123 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt123);
    rstrGeom.push(geom123);

    cAlt124 = new google.maps.LatLng(rstinL[247],rstinL[248],noWrap=true);
    var geom124 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt124);
    rstrGeom.push(geom124);

    cAlt125 = new google.maps.LatLng(rstinL[249],rstinL[250],noWrap=true);
    var geom125 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt125);
    rstrGeom.push(geom125);

    cAlt126 = new google.maps.LatLng(rstinL[251],rstinL[252],noWrap=true);
    var geom126 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt126);
    rstrGeom.push(geom126);

    cAlt127 = new google.maps.LatLng(rstinL[253],rstinL[254],noWrap=true);
    var geom127 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt127);
    rstrGeom.push(geom127);

    cAlt128 = new google.maps.LatLng(rstinL[255],rstinL[256],noWrap=true);
    var geom128 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt128);
    rstrGeom.push(geom128);

    cAlt129 = new google.maps.LatLng(rstinL[257],rstinL[258],noWrap=true);
    var geom129 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt129);
    rstrGeom.push(geom129);

    cAlt130 = new google.maps.LatLng(rstinL[259],rstinL[260],noWrap=true);
    var geom130 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt130);
    rstrGeom.push(geom130);

    cAlt131 = new google.maps.LatLng(rstinL[261],rstinL[262],noWrap=true);
    var geom131 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt131);
    rstrGeom.push(geom131);

    cAlt132 = new google.maps.LatLng(rstinL[263],rstinL[264],noWrap=true);
    var geom132 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt132);
    rstrGeom.push(geom132);

    cAlt133 = new google.maps.LatLng(rstinL[265],rstinL[266],noWrap=true);
    var geom133 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt133);
    rstrGeom.push(geom133);

    cAlt134 = new google.maps.LatLng(rstinL[267],rstinL[268],noWrap=true);
    var geom134 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt134);
    rstrGeom.push(geom134);

    cAlt135 = new google.maps.LatLng(rstinL[269],rstinL[270],noWrap=true);
    var geom135 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt135);
    rstrGeom.push(geom135);

    cAlt136 = new google.maps.LatLng(rstinL[271],rstinL[272],noWrap=true);
    var geom136 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt136);
    rstrGeom.push(geom136);

    cAlt137 = new google.maps.LatLng(rstinL[273],rstinL[274],noWrap=true);
    var geom137 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt137);
    rstrGeom.push(geom137);

    cAlt138 = new google.maps.LatLng(rstinL[275],rstinL[276],noWrap=true);
    var geom138 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt138);
    rstrGeom.push(geom138);

    cAlt139 = new google.maps.LatLng(rstinL[277],rstinL[278],noWrap=true);
    var geom139 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt139);
    rstrGeom.push(geom139);

    cAlt140 = new google.maps.LatLng(rstinL[279],rstinL[280],noWrap=true);
    var geom140 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt140);
    rstrGeom.push(geom140);

    cAlt141 = new google.maps.LatLng(rstinL[281],rstinL[282],noWrap=true);
    var geom141 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt141);
    rstrGeom.push(geom141);

    cAlt142 = new google.maps.LatLng(rstinL[283],rstinL[284],noWrap=true);
    var geom142 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt142);
    rstrGeom.push(geom142);

    cAlt143 = new google.maps.LatLng(rstinL[285],rstinL[286],noWrap=true);
    var geom143 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt143);
    rstrGeom.push(geom143);

    cAlt144 = new google.maps.LatLng(rstinL[287],rstinL[288],noWrap=true);
    var geom144 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt144);
    rstrGeom.push(geom144);

    cAlt145 = new google.maps.LatLng(rstinL[289],rstinL[290],noWrap=true);
    var geom145 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt145);
    rstrGeom.push(geom145);

    cAlt146 = new google.maps.LatLng(rstinL[291],rstinL[292],noWrap=true);
    var geom146 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt146);
    rstrGeom.push(geom146);

    cAlt147 = new google.maps.LatLng(rstinL[293],rstinL[294],noWrap=true);
    var geom147 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt147);
    rstrGeom.push(geom147);

    cAlt148 = new google.maps.LatLng(rstinL[295],rstinL[296],noWrap=true);
    var geom148 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt148);
    rstrGeom.push(geom148);

    cAlt149 = new google.maps.LatLng(rstinL[297],rstinL[298],noWrap=true);
    var geom149 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt149);
    rstrGeom.push(geom149);

    cAlt150 = new google.maps.LatLng(rstinL[299],rstinL[300],noWrap=true);
    var geom150 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt150);
    rstrGeom.push(geom150);

    cAlt151 = new google.maps.LatLng(rstinL[301],rstinL[302],noWrap=true);
    var geom151 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt151);
    rstrGeom.push(geom151);

    cAlt152 = new google.maps.LatLng(rstinL[303],rstinL[304],noWrap=true);
    var geom152 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt152);
    rstrGeom.push(geom152);

    cAlt153 = new google.maps.LatLng(rstinL[305],rstinL[306],noWrap=true);
    var geom153 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt153);
    rstrGeom.push(geom153);

    cAlt154 = new google.maps.LatLng(rstinL[307],rstinL[308],noWrap=true);
    var geom154 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt154);
    rstrGeom.push(geom154);

    cAlt155 = new google.maps.LatLng(rstinL[309],rstinL[310],noWrap=true);
    var geom155 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt155);
    rstrGeom.push(geom155);

    cAlt156 = new google.maps.LatLng(rstinL[311],rstinL[312],noWrap=true);
    var geom156 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt156);
    rstrGeom.push(geom156);

    cAlt157 = new google.maps.LatLng(rstinL[313],rstinL[314],noWrap=true);
    var geom157 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt157);
    rstrGeom.push(geom157);

    cAlt158 = new google.maps.LatLng(rstinL[315],rstinL[316],noWrap=true);
    var geom158 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt158);
    rstrGeom.push(geom158);

    cAlt159 = new google.maps.LatLng(rstinL[317],rstinL[318],noWrap=true);
    var geom159 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt159);
    rstrGeom.push(geom159);

    cAlt160 = new google.maps.LatLng(rstinL[319],rstinL[320],noWrap=true);
    var geom160 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt160);
    rstrGeom.push(geom160);

    cAlt161 = new google.maps.LatLng(rstinL[321],rstinL[322],noWrap=true);
    var geom161 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt161);
    rstrGeom.push(geom161);

    cAlt162 = new google.maps.LatLng(rstinL[323],rstinL[324],noWrap=true);
    var geom162 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt162);
    rstrGeom.push(geom162);

    cAlt163 = new google.maps.LatLng(rstinL[325],rstinL[326],noWrap=true);
    var geom163 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt163);
    rstrGeom.push(geom163);

    cAlt164 = new google.maps.LatLng(rstinL[327],rstinL[328],noWrap=true);
    var geom164 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt164);
    rstrGeom.push(geom164);

    cAlt165 = new google.maps.LatLng(rstinL[329],rstinL[330],noWrap=true);
    var geom165 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt165);
    rstrGeom.push(geom165);

    cAlt166 = new google.maps.LatLng(rstinL[331],rstinL[332],noWrap=true);
    var geom166 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt166);
    rstrGeom.push(geom166);

    cAlt167 = new google.maps.LatLng(rstinL[333],rstinL[334],noWrap=true);
    var geom167 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt167);
    rstrGeom.push(geom167);

    cAlt168 = new google.maps.LatLng(rstinL[335],rstinL[336],noWrap=true);
    var geom168 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt168);
    rstrGeom.push(geom168);

    cAlt169 = new google.maps.LatLng(rstinL[337],rstinL[338],noWrap=true);
    var geom169 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt169);
    rstrGeom.push(geom169);

    cAlt170 = new google.maps.LatLng(rstinL[339],rstinL[340],noWrap=true);
    var geom170 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt170);
    rstrGeom.push(geom170);

    cAlt171 = new google.maps.LatLng(rstinL[341],rstinL[342],noWrap=true);
    var geom171 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt171);
    rstrGeom.push(geom171);

    cAlt172 = new google.maps.LatLng(rstinL[343],rstinL[344],noWrap=true);
    var geom172 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt172);
    rstrGeom.push(geom172);

    cAlt173 = new google.maps.LatLng(rstinL[345],rstinL[346],noWrap=true);
    var geom173 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt173);
    rstrGeom.push(geom173);

    cAlt174 = new google.maps.LatLng(rstinL[347],rstinL[348],noWrap=true);
    var geom174 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt174);
    rstrGeom.push(geom174);

    cAlt175 = new google.maps.LatLng(rstinL[349],rstinL[350],noWrap=true);
    var geom175 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt175);
    rstrGeom.push(geom175);

    cAlt176 = new google.maps.LatLng(rstinL[351],rstinL[352],noWrap=true);
    var geom176 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt176);
    rstrGeom.push(geom176);

    cAlt177 = new google.maps.LatLng(rstinL[353],rstinL[354],noWrap=true);
    var geom177 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt177);
    rstrGeom.push(geom177);

    cAlt178 = new google.maps.LatLng(rstinL[355],rstinL[356],noWrap=true);
    var geom178 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt178);
    rstrGeom.push(geom178);

    cAlt179 = new google.maps.LatLng(rstinL[357],rstinL[358],noWrap=true);
    var geom179 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt179);
    rstrGeom.push(geom179);

    cAlt180 = new google.maps.LatLng(rstinL[359],rstinL[360],noWrap=true);
    var geom180 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt180);
    rstrGeom.push(geom180);

    cAlt181 = new google.maps.LatLng(rstinL[361],rstinL[362],noWrap=true);
    var geom181 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt181);
    rstrGeom.push(geom181);

    cAlt182 = new google.maps.LatLng(rstinL[363],rstinL[364],noWrap=true);
    var geom182 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt182);
    rstrGeom.push(geom182);

    cAlt183 = new google.maps.LatLng(rstinL[365],rstinL[366],noWrap=true);
    var geom183 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt183);
    rstrGeom.push(geom183);

    cAlt184 = new google.maps.LatLng(rstinL[367],rstinL[368],noWrap=true);
    var geom184 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt184);
    rstrGeom.push(geom184);

    cAlt185 = new google.maps.LatLng(rstinL[369],rstinL[370],noWrap=true);
    var geom185 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt185);
    rstrGeom.push(geom185);

    cAlt186 = new google.maps.LatLng(rstinL[371],rstinL[372],noWrap=true);
    var geom186 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt186);
    rstrGeom.push(geom186);

    cAlt187 = new google.maps.LatLng(rstinL[373],rstinL[374],noWrap=true);
    var geom187 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt187);
    rstrGeom.push(geom187);

    cAlt188 = new google.maps.LatLng(rstinL[375],rstinL[376],noWrap=true);
    var geom188 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt188);
    rstrGeom.push(geom188);

    cAlt189 = new google.maps.LatLng(rstinL[377],rstinL[378],noWrap=true);
    var geom189 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt189);
    rstrGeom.push(geom189);

    cAlt190 = new google.maps.LatLng(rstinL[379],rstinL[380],noWrap=true);
    var geom190 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt190);
    rstrGeom.push(geom190);

    cAlt191 = new google.maps.LatLng(rstinL[381],rstinL[382],noWrap=true);
    var geom191 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt191);
    rstrGeom.push(geom191);

    cAlt192 = new google.maps.LatLng(rstinL[383],rstinL[384],noWrap=true);
    var geom192 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt192);
    rstrGeom.push(geom192);

    cAlt193 = new google.maps.LatLng(rstinL[385],rstinL[386],noWrap=true);
    var geom193 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt193);
    rstrGeom.push(geom193);

    cAlt194 = new google.maps.LatLng(rstinL[387],rstinL[388],noWrap=true);
    var geom194 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt194);
    rstrGeom.push(geom194);

    cAlt195 = new google.maps.LatLng(rstinL[389],rstinL[390],noWrap=true);
    var geom195 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt195);
    rstrGeom.push(geom195);

    cAlt196 = new google.maps.LatLng(rstinL[391],rstinL[392],noWrap=true);
    var geom196 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt196);
    rstrGeom.push(geom196);

    cAlt197 = new google.maps.LatLng(rstinL[393],rstinL[394],noWrap=true);
    var geom197 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt197);
    rstrGeom.push(geom197);

    cAlt198 = new google.maps.LatLng(rstinL[395],rstinL[396],noWrap=true);
    var geom198 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt198);
    rstrGeom.push(geom198);

    cAlt199 = new google.maps.LatLng(rstinL[397],rstinL[398],noWrap=true);
    var geom199 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt199);
    rstrGeom.push(geom199);

    cAlt200 = new google.maps.LatLng(rstinL[399],rstinL[400],noWrap=true);
    var geom200 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt200);
    rstrGeom.push(geom200);

    cAlt201 = new google.maps.LatLng(rstinL[401],rstinL[402],noWrap=true);
    var geom201 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt201);
    rstrGeom.push(geom201);

    cAlt202 = new google.maps.LatLng(rstinL[403],rstinL[404],noWrap=true);
    var geom202 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt202);
    rstrGeom.push(geom202);

    cAlt203 = new google.maps.LatLng(rstinL[405],rstinL[406],noWrap=true);
    var geom203 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt203);
    rstrGeom.push(geom203);

    cAlt204 = new google.maps.LatLng(rstinL[407],rstinL[408],noWrap=true);
    var geom204 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt204);
    rstrGeom.push(geom204);

    cAlt205 = new google.maps.LatLng(rstinL[409],rstinL[410],noWrap=true);
    var geom205 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt205);
    rstrGeom.push(geom205);

    cAlt206 = new google.maps.LatLng(rstinL[411],rstinL[412],noWrap=true);
    var geom206 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt206);
    rstrGeom.push(geom206);

    cAlt207 = new google.maps.LatLng(rstinL[413],rstinL[414],noWrap=true);
    var geom207 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt207);
    rstrGeom.push(geom207);

    cAlt208 = new google.maps.LatLng(rstinL[415],rstinL[416],noWrap=true);
    var geom208 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt208);
    rstrGeom.push(geom208);

    cAlt209 = new google.maps.LatLng(rstinL[417],rstinL[418],noWrap=true);
    var geom209 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt209);
    rstrGeom.push(geom209);

    cAlt210 = new google.maps.LatLng(rstinL[419],rstinL[420],noWrap=true);
    var geom210 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt210);
    rstrGeom.push(geom210);

    cAlt211 = new google.maps.LatLng(rstinL[421],rstinL[422],noWrap=true);
    var geom211 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt211);
    rstrGeom.push(geom211);

    cAlt212 = new google.maps.LatLng(rstinL[423],rstinL[424],noWrap=true);
    var geom212 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt212);
    rstrGeom.push(geom212);

    cAlt213 = new google.maps.LatLng(rstinL[425],rstinL[426],noWrap=true);
    var geom213 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt213);
    rstrGeom.push(geom213);

    cAlt214 = new google.maps.LatLng(rstinL[427],rstinL[428],noWrap=true);
    var geom214 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt214);
    rstrGeom.push(geom214);

    cAlt215 = new google.maps.LatLng(rstinL[429],rstinL[430],noWrap=true);
    var geom215 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt215);
    rstrGeom.push(geom215);

    cAlt216 = new google.maps.LatLng(rstinL[431],rstinL[432],noWrap=true);
    var geom216 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt216);
    rstrGeom.push(geom216);

    cAlt217 = new google.maps.LatLng(rstinL[433],rstinL[434],noWrap=true);
    var geom217 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt217);
    rstrGeom.push(geom217);

    cAlt218 = new google.maps.LatLng(rstinL[435],rstinL[436],noWrap=true);
    var geom218 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt218);
    rstrGeom.push(geom218);

    cAlt219 = new google.maps.LatLng(rstinL[437],rstinL[438],noWrap=true);
    var geom219 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt219);
    rstrGeom.push(geom219);

    cAlt220 = new google.maps.LatLng(rstinL[439],rstinL[440],noWrap=true);
    var geom220 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt220);
    rstrGeom.push(geom220);

    cAlt221 = new google.maps.LatLng(rstinL[441],rstinL[442],noWrap=true);
    var geom221 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt221);
    rstrGeom.push(geom221);

    cAlt222 = new google.maps.LatLng(rstinL[443],rstinL[444],noWrap=true);
    var geom222 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt222);
    rstrGeom.push(geom222);

    cAlt223 = new google.maps.LatLng(rstinL[445],rstinL[446],noWrap=true);
    var geom223 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt223);
    rstrGeom.push(geom223);

    cAlt224 = new google.maps.LatLng(rstinL[447],rstinL[448],noWrap=true);
    var geom224 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt224);
    rstrGeom.push(geom224);

    cAlt225 = new google.maps.LatLng(rstinL[449],rstinL[450],noWrap=true);
    var geom225 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt225);
    rstrGeom.push(geom225);

    cAlt226 = new google.maps.LatLng(rstinL[451],rstinL[452],noWrap=true);
    var geom226 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt226);
    rstrGeom.push(geom226);

    cAlt227 = new google.maps.LatLng(rstinL[453],rstinL[454],noWrap=true);
    var geom227 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt227);
    rstrGeom.push(geom227);

    cAlt228 = new google.maps.LatLng(rstinL[455],rstinL[456],noWrap=true);
    var geom228 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt228);
    rstrGeom.push(geom228);

    cAlt229 = new google.maps.LatLng(rstinL[457],rstinL[458],noWrap=true);
    var geom229 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt229);
    rstrGeom.push(geom229);

    cAlt230 = new google.maps.LatLng(rstinL[459],rstinL[460],noWrap=true);
    var geom230 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt230);
    rstrGeom.push(geom230);

    cAlt231 = new google.maps.LatLng(rstinL[461],rstinL[462],noWrap=true);
    var geom231 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt231);
    rstrGeom.push(geom231);

    cAlt232 = new google.maps.LatLng(rstinL[463],rstinL[464],noWrap=true);
    var geom232 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt232);
    rstrGeom.push(geom232);

    cAlt233 = new google.maps.LatLng(rstinL[465],rstinL[466],noWrap=true);
    var geom233 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt233);
    rstrGeom.push(geom233);

    cAlt234 = new google.maps.LatLng(rstinL[467],rstinL[468],noWrap=true);
    var geom234 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt234);
    rstrGeom.push(geom234);

    cAlt235 = new google.maps.LatLng(rstinL[469],rstinL[470],noWrap=true);
    var geom235 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt235);
    rstrGeom.push(geom235);

    cAlt236 = new google.maps.LatLng(rstinL[471],rstinL[472],noWrap=true);
    var geom236 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt236);
    rstrGeom.push(geom236);

    cAlt237 = new google.maps.LatLng(rstinL[473],rstinL[474],noWrap=true);
    var geom237 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt237);
    rstrGeom.push(geom237);

    cAlt238 = new google.maps.LatLng(rstinL[475],rstinL[476],noWrap=true);
    var geom238 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt238);
    rstrGeom.push(geom238);

    cAlt239 = new google.maps.LatLng(rstinL[477],rstinL[478],noWrap=true);
    var geom239 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt239);
    rstrGeom.push(geom239);

    cAlt240 = new google.maps.LatLng(rstinL[479],rstinL[480],noWrap=true);
    var geom240 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt240);
    rstrGeom.push(geom240);

    cAlt241 = new google.maps.LatLng(rstinL[481],rstinL[482],noWrap=true);
    var geom241 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt241);
    rstrGeom.push(geom241);

    cAlt242 = new google.maps.LatLng(rstinL[483],rstinL[484],noWrap=true);
    var geom242 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt242);
    rstrGeom.push(geom242);

    cAlt243 = new google.maps.LatLng(rstinL[485],rstinL[486],noWrap=true);
    var geom243 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt243);
    rstrGeom.push(geom243);

    cAlt244 = new google.maps.LatLng(rstinL[487],rstinL[488],noWrap=true);
    var geom244 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt244);
    rstrGeom.push(geom244);

    cAlt245 = new google.maps.LatLng(rstinL[489],rstinL[490],noWrap=true);
    var geom245 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt245);
    rstrGeom.push(geom245);

    cAlt246 = new google.maps.LatLng(rstinL[491],rstinL[492],noWrap=true);
    var geom246 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt246);
    rstrGeom.push(geom246);

    cAlt247 = new google.maps.LatLng(rstinL[493],rstinL[494],noWrap=true);
    var geom247 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt247);
    rstrGeom.push(geom247);

    cAlt248 = new google.maps.LatLng(rstinL[495],rstinL[496],noWrap=true);
    var geom248 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt248);
    rstrGeom.push(geom248);

    cAlt249 = new google.maps.LatLng(rstinL[497],rstinL[498],noWrap=true);
    var geom249 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt249);
    rstrGeom.push(geom249);

    cAlt250 = new google.maps.LatLng(rstinL[499],rstinL[500],noWrap=true);
    var geom250 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt250);
    rstrGeom.push(geom250);

    cAlt251 = new google.maps.LatLng(rstinL[501],rstinL[502],noWrap=true);
    var geom251 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt251);
    rstrGeom.push(geom251);

    cAlt252 = new google.maps.LatLng(rstinL[503],rstinL[504],noWrap=true);
    var geom252 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt252);
    rstrGeom.push(geom252);

    cAlt253 = new google.maps.LatLng(rstinL[505],rstinL[506],noWrap=true);
    var geom253 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt253);
    rstrGeom.push(geom253);

    cAlt254 = new google.maps.LatLng(rstinL[507],rstinL[508],noWrap=true);
    var geom254 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt254);
    rstrGeom.push(geom254);

    cAlt255 = new google.maps.LatLng(rstinL[509],rstinL[510],noWrap=true);
    var geom255 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt255);
    rstrGeom.push(geom255);

    cAlt256 = new google.maps.LatLng(rstinL[511],rstinL[512],noWrap=true);
    var geom256 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt256);
    rstrGeom.push(geom256);

    cAlt257 = new google.maps.LatLng(rstinL[513],rstinL[514],noWrap=true);
    var geom257 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt257);
    rstrGeom.push(geom257);

    cAlt258 = new google.maps.LatLng(rstinL[515],rstinL[516],noWrap=true);
    var geom258 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt258);
    rstrGeom.push(geom258);

    cAlt259 = new google.maps.LatLng(rstinL[517],rstinL[518],noWrap=true);
    var geom259 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt259);
    rstrGeom.push(geom259);

    cAlt260 = new google.maps.LatLng(rstinL[519],rstinL[520],noWrap=true);
    var geom260 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt260);
    rstrGeom.push(geom260);

    cAlt261 = new google.maps.LatLng(rstinL[521],rstinL[522],noWrap=true);
    var geom261 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt261);
    rstrGeom.push(geom261);

    cAlt262 = new google.maps.LatLng(rstinL[523],rstinL[524],noWrap=true);
    var geom262 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt262);
    rstrGeom.push(geom262);

    cAlt263 = new google.maps.LatLng(rstinL[525],rstinL[526],noWrap=true);
    var geom263 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt263);
    rstrGeom.push(geom263);

    cAlt264 = new google.maps.LatLng(rstinL[527],rstinL[528],noWrap=true);
    var geom264 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt264);
    rstrGeom.push(geom264);

    cAlt265 = new google.maps.LatLng(rstinL[529],rstinL[530],noWrap=true);
    var geom265 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt265);
    rstrGeom.push(geom265);

    cAlt266 = new google.maps.LatLng(rstinL[531],rstinL[532],noWrap=true);
    var geom266 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt266);
    rstrGeom.push(geom266);

    cAlt267 = new google.maps.LatLng(rstinL[533],rstinL[534],noWrap=true);
    var geom267 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt267);
    rstrGeom.push(geom267);

    cAlt268 = new google.maps.LatLng(rstinL[535],rstinL[536],noWrap=true);
    var geom268 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt268);
    rstrGeom.push(geom268);

    cAlt269 = new google.maps.LatLng(rstinL[537],rstinL[538],noWrap=true);
    var geom269 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt269);
    rstrGeom.push(geom269);

    cAlt270 = new google.maps.LatLng(rstinL[539],rstinL[540],noWrap=true);
    var geom270 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt270);
    rstrGeom.push(geom270);

    cAlt271 = new google.maps.LatLng(rstinL[541],rstinL[542],noWrap=true);
    var geom271 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt271);
    rstrGeom.push(geom271);

    cAlt272 = new google.maps.LatLng(rstinL[543],rstinL[544],noWrap=true);
    var geom272 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt272);
    rstrGeom.push(geom272);

    cAlt273 = new google.maps.LatLng(rstinL[545],rstinL[546],noWrap=true);
    var geom273 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt273);
    rstrGeom.push(geom273);

    cAlt274 = new google.maps.LatLng(rstinL[547],rstinL[548],noWrap=true);
    var geom274 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt274);
    rstrGeom.push(geom274);

    cAlt275 = new google.maps.LatLng(rstinL[549],rstinL[550],noWrap=true);
    var geom275 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt275);
    rstrGeom.push(geom275);

    cAlt276 = new google.maps.LatLng(rstinL[551],rstinL[552],noWrap=true);
    var geom276 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt276);
    rstrGeom.push(geom276);

    cAlt277 = new google.maps.LatLng(rstinL[553],rstinL[554],noWrap=true);
    var geom277 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt277);
    rstrGeom.push(geom277);

    cAlt278 = new google.maps.LatLng(rstinL[555],rstinL[556],noWrap=true);
    var geom278 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt278);
    rstrGeom.push(geom278);

    cAlt279 = new google.maps.LatLng(rstinL[557],rstinL[558],noWrap=true);
    var geom279 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt279);
    rstrGeom.push(geom279);

    cAlt280 = new google.maps.LatLng(rstinL[559],rstinL[560],noWrap=true);
    var geom280 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt280);
    rstrGeom.push(geom280);

    cAlt281 = new google.maps.LatLng(rstinL[561],rstinL[562],noWrap=true);
    var geom281 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt281);
    rstrGeom.push(geom281);

    cAlt282 = new google.maps.LatLng(rstinL[563],rstinL[564],noWrap=true);
    var geom282 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt282);
    rstrGeom.push(geom282);

    cAlt283 = new google.maps.LatLng(rstinL[565],rstinL[566],noWrap=true);
    var geom283 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt283);
    rstrGeom.push(geom283);

    cAlt284 = new google.maps.LatLng(rstinL[567],rstinL[568],noWrap=true);
    var geom284 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt284);
    rstrGeom.push(geom284);

    cAlt285 = new google.maps.LatLng(rstinL[569],rstinL[570],noWrap=true);
    var geom285 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt285);
    rstrGeom.push(geom285);

    cAlt286 = new google.maps.LatLng(rstinL[571],rstinL[572],noWrap=true);
    var geom286 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt286);
    rstrGeom.push(geom286);

    cAlt287 = new google.maps.LatLng(rstinL[573],rstinL[574],noWrap=true);
    var geom287 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt287);
    rstrGeom.push(geom287);

    cAlt288 = new google.maps.LatLng(rstinL[575],rstinL[576],noWrap=true);
    var geom288 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt288);
    rstrGeom.push(geom288);

    cAlt289 = new google.maps.LatLng(rstinL[577],rstinL[578],noWrap=true);
    var geom289 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt289);
    rstrGeom.push(geom289);

    cAlt290 = new google.maps.LatLng(rstinL[579],rstinL[580],noWrap=true);
    var geom290 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt290);
    rstrGeom.push(geom290);

    cAlt291 = new google.maps.LatLng(rstinL[581],rstinL[582],noWrap=true);
    var geom291 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt291);
    rstrGeom.push(geom291);

    cAlt292 = new google.maps.LatLng(rstinL[583],rstinL[584],noWrap=true);
    var geom292 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt292);
    rstrGeom.push(geom292);

    cAlt293 = new google.maps.LatLng(rstinL[585],rstinL[586],noWrap=true);
    var geom293 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt293);
    rstrGeom.push(geom293);

    cAlt294 = new google.maps.LatLng(rstinL[587],rstinL[588],noWrap=true);
    var geom294 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt294);
    rstrGeom.push(geom294);

    cAlt295 = new google.maps.LatLng(rstinL[589],rstinL[590],noWrap=true);
    var geom295 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt295);
    rstrGeom.push(geom295);

    cAlt296 = new google.maps.LatLng(rstinL[591],rstinL[592],noWrap=true);
    var geom296 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt296);
    rstrGeom.push(geom296);

    cAlt297 = new google.maps.LatLng(rstinL[593],rstinL[594],noWrap=true);
    var geom297 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt297);
    rstrGeom.push(geom297);

    cAlt298 = new google.maps.LatLng(rstinL[595],rstinL[596],noWrap=true);
    var geom298 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt298);
    rstrGeom.push(geom298);

    cAlt299 = new google.maps.LatLng(rstinL[597],rstinL[598],noWrap=true);
    var geom299 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt299);
    rstrGeom.push(geom299);

    cAlt300 = new google.maps.LatLng(rstinL[599],rstinL[600],noWrap=true);
    var geom300 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt300);
    rstrGeom.push(geom300);

    cAlt301 = new google.maps.LatLng(rstinL[601],rstinL[602],noWrap=true);
    var geom301 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt301);
    rstrGeom.push(geom301);

    cAlt302 = new google.maps.LatLng(rstinL[603],rstinL[604],noWrap=true);
    var geom302 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt302);
    rstrGeom.push(geom302);

    cAlt303 = new google.maps.LatLng(rstinL[605],rstinL[606],noWrap=true);
    var geom303 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt303);
    rstrGeom.push(geom303);

    cAlt304 = new google.maps.LatLng(rstinL[607],rstinL[608],noWrap=true);
    var geom304 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt304);
    rstrGeom.push(geom304);

    cAlt305 = new google.maps.LatLng(rstinL[609],rstinL[610],noWrap=true);
    var geom305 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt305);
    rstrGeom.push(geom305);

    cAlt306 = new google.maps.LatLng(rstinL[611],rstinL[612],noWrap=true);
    var geom306 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt306);
    rstrGeom.push(geom306);

    cAlt307 = new google.maps.LatLng(rstinL[613],rstinL[614],noWrap=true);
    var geom307 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt307);
    rstrGeom.push(geom307);

    cAlt308 = new google.maps.LatLng(rstinL[615],rstinL[616],noWrap=true);
    var geom308 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt308);
    rstrGeom.push(geom308);

    cAlt309 = new google.maps.LatLng(rstinL[617],rstinL[618],noWrap=true);
    var geom309 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt309);
    rstrGeom.push(geom309);

    cAlt310 = new google.maps.LatLng(rstinL[619],rstinL[620],noWrap=true);
    var geom310 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt310);
    rstrGeom.push(geom310);

    cAlt311 = new google.maps.LatLng(rstinL[621],rstinL[622],noWrap=true);
    var geom311 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt311);
    rstrGeom.push(geom311);

    cAlt312 = new google.maps.LatLng(rstinL[623],rstinL[624],noWrap=true);
    var geom312 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt312);
    rstrGeom.push(geom312);

    cAlt313 = new google.maps.LatLng(rstinL[625],rstinL[626],noWrap=true);
    var geom313 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt313);
    rstrGeom.push(geom313);

    cAlt314 = new google.maps.LatLng(rstinL[627],rstinL[628],noWrap=true);
    var geom314 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt314);
    rstrGeom.push(geom314);

    cAlt315 = new google.maps.LatLng(rstinL[629],rstinL[630],noWrap=true);
    var geom315 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt315);
    rstrGeom.push(geom315);

    cAlt316 = new google.maps.LatLng(rstinL[631],rstinL[632],noWrap=true);
    var geom316 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt316);
    rstrGeom.push(geom316);

    cAlt317 = new google.maps.LatLng(rstinL[633],rstinL[634],noWrap=true);
    var geom317 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt317);
    rstrGeom.push(geom317);

    cAlt318 = new google.maps.LatLng(rstinL[635],rstinL[636],noWrap=true);
    var geom318 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt318);
    rstrGeom.push(geom318);

    cAlt319 = new google.maps.LatLng(rstinL[637],rstinL[638],noWrap=true);
    var geom319 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt319);
    rstrGeom.push(geom319);

    cAlt320 = new google.maps.LatLng(rstinL[639],rstinL[640],noWrap=true);
    var geom320 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt320);
    rstrGeom.push(geom320);

    cAlt321 = new google.maps.LatLng(rstinL[641],rstinL[642],noWrap=true);
    var geom321 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt321);
    rstrGeom.push(geom321);

    cAlt322 = new google.maps.LatLng(rstinL[643],rstinL[644],noWrap=true);
    var geom322 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt322);
    rstrGeom.push(geom322);

    cAlt323 = new google.maps.LatLng(rstinL[645],rstinL[646],noWrap=true);
    var geom323 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt323);
    rstrGeom.push(geom323);

    cAlt324 = new google.maps.LatLng(rstinL[647],rstinL[648],noWrap=true);
    var geom324 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt324);
    rstrGeom.push(geom324);

    cAlt325 = new google.maps.LatLng(rstinL[649],rstinL[650],noWrap=true);
    var geom325 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt325);
    rstrGeom.push(geom325);

    cAlt326 = new google.maps.LatLng(rstinL[651],rstinL[652],noWrap=true);
    var geom326 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt326);
    rstrGeom.push(geom326);

    cAlt327 = new google.maps.LatLng(rstinL[653],rstinL[654],noWrap=true);
    var geom327 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt327);
    rstrGeom.push(geom327);

    cAlt328 = new google.maps.LatLng(rstinL[655],rstinL[656],noWrap=true);
    var geom328 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt328);
    rstrGeom.push(geom328);

    cAlt329 = new google.maps.LatLng(rstinL[657],rstinL[658],noWrap=true);
    var geom329 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt329);
    rstrGeom.push(geom329);

    cAlt330 = new google.maps.LatLng(rstinL[659],rstinL[660],noWrap=true);
    var geom330 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt330);
    rstrGeom.push(geom330);

    cAlt331 = new google.maps.LatLng(rstinL[661],rstinL[662],noWrap=true);
    var geom331 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt331);
    rstrGeom.push(geom331);

    cAlt332 = new google.maps.LatLng(rstinL[663],rstinL[664],noWrap=true);
    var geom332 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt332);
    rstrGeom.push(geom332);

    cAlt333 = new google.maps.LatLng(rstinL[665],rstinL[666],noWrap=true);
    var geom333 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt333);
    rstrGeom.push(geom333);

    cAlt334 = new google.maps.LatLng(rstinL[667],rstinL[668],noWrap=true);
    var geom334 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt334);
    rstrGeom.push(geom334);

    cAlt335 = new google.maps.LatLng(rstinL[669],rstinL[670],noWrap=true);
    var geom335 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt335);
    rstrGeom.push(geom335);

    cAlt336 = new google.maps.LatLng(rstinL[671],rstinL[672],noWrap=true);
    var geom336 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt336);
    rstrGeom.push(geom336);

    cAlt337 = new google.maps.LatLng(rstinL[673],rstinL[674],noWrap=true);
    var geom337 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt337);
    rstrGeom.push(geom337);

    cAlt338 = new google.maps.LatLng(rstinL[675],rstinL[676],noWrap=true);
    var geom338 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt338);
    rstrGeom.push(geom338);

    cAlt339 = new google.maps.LatLng(rstinL[677],rstinL[678],noWrap=true);
    var geom339 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt339);
    rstrGeom.push(geom339);

    cAlt340 = new google.maps.LatLng(rstinL[679],rstinL[680],noWrap=true);
    var geom340 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt340);
    rstrGeom.push(geom340);

    cAlt341 = new google.maps.LatLng(rstinL[681],rstinL[682],noWrap=true);
    var geom341 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt341);
    rstrGeom.push(geom341);

    cAlt342 = new google.maps.LatLng(rstinL[683],rstinL[684],noWrap=true);
    var geom342 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt342);
    rstrGeom.push(geom342);

    cAlt343 = new google.maps.LatLng(rstinL[685],rstinL[686],noWrap=true);
    var geom343 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt343);
    rstrGeom.push(geom343);

    cAlt344 = new google.maps.LatLng(rstinL[687],rstinL[688],noWrap=true);
    var geom344 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt344);
    rstrGeom.push(geom344);

    cAlt345 = new google.maps.LatLng(rstinL[689],rstinL[690],noWrap=true);
    var geom345 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt345);
    rstrGeom.push(geom345);

    cAlt346 = new google.maps.LatLng(rstinL[691],rstinL[692],noWrap=true);
    var geom346 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt346);
    rstrGeom.push(geom346);

    cAlt347 = new google.maps.LatLng(rstinL[693],rstinL[694],noWrap=true);
    var geom347 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt347);
    rstrGeom.push(geom347);

    cAlt348 = new google.maps.LatLng(rstinL[695],rstinL[696],noWrap=true);
    var geom348 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt348);
    rstrGeom.push(geom348);

    cAlt349 = new google.maps.LatLng(rstinL[697],rstinL[698],noWrap=true);
    var geom349 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt349);
    rstrGeom.push(geom349);

    cAlt350 = new google.maps.LatLng(rstinL[699],rstinL[700],noWrap=true);
    var geom350 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt350);
    rstrGeom.push(geom350);

    cAlt351 = new google.maps.LatLng(rstinL[701],rstinL[702],noWrap=true);
    var geom351 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt351);
    rstrGeom.push(geom351);

    cAlt352 = new google.maps.LatLng(rstinL[703],rstinL[704],noWrap=true);
    var geom352 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt352);
    rstrGeom.push(geom352);

    cAlt353 = new google.maps.LatLng(rstinL[705],rstinL[706],noWrap=true);
    var geom353 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt353);
    rstrGeom.push(geom353);

    cAlt354 = new google.maps.LatLng(rstinL[707],rstinL[708],noWrap=true);
    var geom354 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt354);
    rstrGeom.push(geom354);

    cAlt355 = new google.maps.LatLng(rstinL[709],rstinL[710],noWrap=true);
    var geom355 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt355);
    rstrGeom.push(geom355);

    cAlt356 = new google.maps.LatLng(rstinL[711],rstinL[712],noWrap=true);
    var geom356 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt356);
    rstrGeom.push(geom356);

    cAlt357 = new google.maps.LatLng(rstinL[713],rstinL[714],noWrap=true);
    var geom357 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt357);
    rstrGeom.push(geom357);

    cAlt358 = new google.maps.LatLng(rstinL[715],rstinL[716],noWrap=true);
    var geom358 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt358);
    rstrGeom.push(geom358);

    cAlt359 = new google.maps.LatLng(rstinL[717],rstinL[718],noWrap=true);
    var geom359 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt359);
    rstrGeom.push(geom359);

    cAlt360 = new google.maps.LatLng(rstinL[719],rstinL[720],noWrap=true);
    var geom360 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt360);
    rstrGeom.push(geom360);

    cAlt361 = new google.maps.LatLng(rstinL[721],rstinL[722],noWrap=true);
    var geom361 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt361);
    rstrGeom.push(geom361);

    cAlt362 = new google.maps.LatLng(rstinL[723],rstinL[724],noWrap=true);
    var geom362 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt362);
    rstrGeom.push(geom362);

    cAlt363 = new google.maps.LatLng(rstinL[725],rstinL[726],noWrap=true);
    var geom363 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt363);
    rstrGeom.push(geom363);

    cAlt364 = new google.maps.LatLng(rstinL[727],rstinL[728],noWrap=true);
    var geom364 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt364);
    rstrGeom.push(geom364);

    cAlt365 = new google.maps.LatLng(rstinL[729],rstinL[730],noWrap=true);
    var geom365 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt365);
    rstrGeom.push(geom365);

    cAlt366 = new google.maps.LatLng(rstinL[731],rstinL[732],noWrap=true);
    var geom366 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt366);
    rstrGeom.push(geom366);

    cAlt367 = new google.maps.LatLng(rstinL[733],rstinL[734],noWrap=true);
    var geom367 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt367);
    rstrGeom.push(geom367);

    cAlt368 = new google.maps.LatLng(rstinL[735],rstinL[736],noWrap=true);
    var geom368 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt368);
    rstrGeom.push(geom368);

    cAlt369 = new google.maps.LatLng(rstinL[737],rstinL[738],noWrap=true);
    var geom369 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt369);
    rstrGeom.push(geom369);

    cAlt370 = new google.maps.LatLng(rstinL[739],rstinL[740],noWrap=true);
    var geom370 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt370);
    rstrGeom.push(geom370);

    cAlt371 = new google.maps.LatLng(rstinL[741],rstinL[742],noWrap=true);
    var geom371 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt371);
    rstrGeom.push(geom371);

    cAlt372 = new google.maps.LatLng(rstinL[743],rstinL[744],noWrap=true);
    var geom372 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt372);
    rstrGeom.push(geom372);

    cAlt373 = new google.maps.LatLng(rstinL[745],rstinL[746],noWrap=true);
    var geom373 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt373);
    rstrGeom.push(geom373);

    cAlt374 = new google.maps.LatLng(rstinL[747],rstinL[748],noWrap=true);
    var geom374 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt374);
    rstrGeom.push(geom374);

    cAlt375 = new google.maps.LatLng(rstinL[749],rstinL[750],noWrap=true);
    var geom375 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt375);
    rstrGeom.push(geom375);

    cAlt376 = new google.maps.LatLng(rstinL[751],rstinL[752],noWrap=true);
    var geom376 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt376);
    rstrGeom.push(geom376);

    cAlt377 = new google.maps.LatLng(rstinL[753],rstinL[754],noWrap=true);
    var geom377 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt377);
    rstrGeom.push(geom377);

    cAlt378 = new google.maps.LatLng(rstinL[755],rstinL[756],noWrap=true);
    var geom378 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt378);
    rstrGeom.push(geom378);

    cAlt379 = new google.maps.LatLng(rstinL[757],rstinL[758],noWrap=true);
    var geom379 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt379);
    rstrGeom.push(geom379);

    cAlt380 = new google.maps.LatLng(rstinL[759],rstinL[760],noWrap=true);
    var geom380 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt380);
    rstrGeom.push(geom380);

    cAlt381 = new google.maps.LatLng(rstinL[761],rstinL[762],noWrap=true);
    var geom381 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt381);
    rstrGeom.push(geom381);

    cAlt382 = new google.maps.LatLng(rstinL[763],rstinL[764],noWrap=true);
    var geom382 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt382);
    rstrGeom.push(geom382);

    cAlt383 = new google.maps.LatLng(rstinL[765],rstinL[766],noWrap=true);
    var geom383 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt383);
    rstrGeom.push(geom383);

    cAlt384 = new google.maps.LatLng(rstinL[767],rstinL[768],noWrap=true);
    var geom384 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt384);
    rstrGeom.push(geom384);

    cAlt385 = new google.maps.LatLng(rstinL[769],rstinL[770],noWrap=true);
    var geom385 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt385);
    rstrGeom.push(geom385);

    cAlt386 = new google.maps.LatLng(rstinL[771],rstinL[772],noWrap=true);
    var geom386 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt386);
    rstrGeom.push(geom386);

    cAlt387 = new google.maps.LatLng(rstinL[773],rstinL[774],noWrap=true);
    var geom387 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt387);
    rstrGeom.push(geom387);

    cAlt388 = new google.maps.LatLng(rstinL[775],rstinL[776],noWrap=true);
    var geom388 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt388);
    rstrGeom.push(geom388);

    cAlt389 = new google.maps.LatLng(rstinL[777],rstinL[778],noWrap=true);
    var geom389 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt389);
    rstrGeom.push(geom389);

    cAlt390 = new google.maps.LatLng(rstinL[779],rstinL[780],noWrap=true);
    var geom390 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt390);
    rstrGeom.push(geom390);

    cAlt391 = new google.maps.LatLng(rstinL[781],rstinL[782],noWrap=true);
    var geom391 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt391);
    rstrGeom.push(geom391);

    cAlt392 = new google.maps.LatLng(rstinL[783],rstinL[784],noWrap=true);
    var geom392 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt392);
    rstrGeom.push(geom392);

    cAlt393 = new google.maps.LatLng(rstinL[785],rstinL[786],noWrap=true);
    var geom393 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt393);
    rstrGeom.push(geom393);

    cAlt394 = new google.maps.LatLng(rstinL[787],rstinL[788],noWrap=true);
    var geom394 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt394);
    rstrGeom.push(geom394);

    cAlt395 = new google.maps.LatLng(rstinL[789],rstinL[790],noWrap=true);
    var geom395 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt395);
    rstrGeom.push(geom395);

    cAlt396 = new google.maps.LatLng(rstinL[791],rstinL[792],noWrap=true);
    var geom396 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt396);
    rstrGeom.push(geom396);

    cAlt397 = new google.maps.LatLng(rstinL[793],rstinL[794],noWrap=true);
    var geom397 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt397);
    rstrGeom.push(geom397);

    cAlt398 = new google.maps.LatLng(rstinL[795],rstinL[796],noWrap=true);
    var geom398 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt398);
    rstrGeom.push(geom398);

    cAlt399 = new google.maps.LatLng(rstinL[797],rstinL[798],noWrap=true);
    var geom399 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt399);
    rstrGeom.push(geom399);

    cAlt400 = new google.maps.LatLng(rstinL[799],rstinL[800],noWrap=true);
    var geom400 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt400);
    rstrGeom.push(geom400);

    cAlt401 = new google.maps.LatLng(rstinL[801],rstinL[802],noWrap=true);
    var geom401 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt401);
    rstrGeom.push(geom401);

    cAlt402 = new google.maps.LatLng(rstinL[803],rstinL[804],noWrap=true);
    var geom402 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt402);
    rstrGeom.push(geom402);

    cAlt403 = new google.maps.LatLng(rstinL[805],rstinL[806],noWrap=true);
    var geom403 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt403);
    rstrGeom.push(geom403);

    cAlt404 = new google.maps.LatLng(rstinL[807],rstinL[808],noWrap=true);
    var geom404 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt404);
    rstrGeom.push(geom404);

    cAlt405 = new google.maps.LatLng(rstinL[809],rstinL[810],noWrap=true);
    var geom405 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt405);
    rstrGeom.push(geom405);

    cAlt406 = new google.maps.LatLng(rstinL[811],rstinL[812],noWrap=true);
    var geom406 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt406);
    rstrGeom.push(geom406);

    cAlt407 = new google.maps.LatLng(rstinL[813],rstinL[814],noWrap=true);
    var geom407 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt407);
    rstrGeom.push(geom407);

    cAlt408 = new google.maps.LatLng(rstinL[815],rstinL[816],noWrap=true);
    var geom408 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt408);
    rstrGeom.push(geom408);

    cAlt409 = new google.maps.LatLng(rstinL[817],rstinL[818],noWrap=true);
    var geom409 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt409);
    rstrGeom.push(geom409);

    cAlt410 = new google.maps.LatLng(rstinL[819],rstinL[820],noWrap=true);
    var geom410 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt410);
    rstrGeom.push(geom410);

    cAlt411 = new google.maps.LatLng(rstinL[821],rstinL[822],noWrap=true);
    var geom411 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt411);
    rstrGeom.push(geom411);

    cAlt412 = new google.maps.LatLng(rstinL[823],rstinL[824],noWrap=true);
    var geom412 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt412);
    rstrGeom.push(geom412);

    cAlt413 = new google.maps.LatLng(rstinL[825],rstinL[826],noWrap=true);
    var geom413 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt413);
    rstrGeom.push(geom413);

    cAlt414 = new google.maps.LatLng(rstinL[827],rstinL[828],noWrap=true);
    var geom414 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt414);
    rstrGeom.push(geom414);

    cAlt415 = new google.maps.LatLng(rstinL[829],rstinL[830],noWrap=true);
    var geom415 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt415);
    rstrGeom.push(geom415);

    cAlt416 = new google.maps.LatLng(rstinL[831],rstinL[832],noWrap=true);
    var geom416 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt416);
    rstrGeom.push(geom416);

    cAlt417 = new google.maps.LatLng(rstinL[833],rstinL[834],noWrap=true);
    var geom417 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt417);
    rstrGeom.push(geom417);

    cAlt418 = new google.maps.LatLng(rstinL[835],rstinL[836],noWrap=true);
    var geom418 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt418);
    rstrGeom.push(geom418);

    cAlt419 = new google.maps.LatLng(rstinL[837],rstinL[838],noWrap=true);
    var geom419 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt419);
    rstrGeom.push(geom419);

    cAlt420 = new google.maps.LatLng(rstinL[839],rstinL[840],noWrap=true);
    var geom420 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt420);
    rstrGeom.push(geom420);

    cAlt421 = new google.maps.LatLng(rstinL[841],rstinL[842],noWrap=true);
    var geom421 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt421);
    rstrGeom.push(geom421);

    cAlt422 = new google.maps.LatLng(rstinL[843],rstinL[844],noWrap=true);
    var geom422 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt422);
    rstrGeom.push(geom422);

    cAlt423 = new google.maps.LatLng(rstinL[845],rstinL[846],noWrap=true);
    var geom423 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt423);
    rstrGeom.push(geom423);

    cAlt424 = new google.maps.LatLng(rstinL[847],rstinL[848],noWrap=true);
    var geom424 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt424);
    rstrGeom.push(geom424);

    cAlt425 = new google.maps.LatLng(rstinL[849],rstinL[850],noWrap=true);
    var geom425 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt425);
    rstrGeom.push(geom425);

    cAlt426 = new google.maps.LatLng(rstinL[851],rstinL[851],noWrap=true);
    var geom426 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt426);
    rstrGeom.push(geom426);

    cAlt427 = new google.maps.LatLng(rstinL[853],rstinL[854],noWrap=true);
    var geom427 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt427);
    rstrGeom.push(geom427);

    cAlt428 = new google.maps.LatLng(rstinL[855],rstinL[856],noWrap=true);
    var geom428 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt428);
    rstrGeom.push(geom428);

    cAlt429 = new google.maps.LatLng(rstinL[857],rstinL[858],noWrap=true);
    var geom429 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt429);
    rstrGeom.push(geom429);

    cAlt430 = new google.maps.LatLng(rstinL[859],rstinL[860],noWrap=true);
    var geom430 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt430);
    rstrGeom.push(geom430);

    cAlt431 = new google.maps.LatLng(rstinL[861],rstinL[862],noWrap=true);
    var geom431 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt431);
    rstrGeom.push(geom431);

    cAlt432 = new google.maps.LatLng(rstinL[863],rstinL[864],noWrap=true);
    var geom432 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt432);
    rstrGeom.push(geom432);

    cAlt433 = new google.maps.LatLng(rstinL[865],rstinL[866],noWrap=true);
    var geom433 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt433);
    rstrGeom.push(geom433);

    cAlt434 = new google.maps.LatLng(rstinL[867],rstinL[868],noWrap=true);
    var geom434 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt434);
    rstrGeom.push(geom434);

    cAlt435 = new google.maps.LatLng(rstinL[869],rstinL[870],noWrap=true);
    var geom435 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt435);
    rstrGeom.push(geom435);

    cAlt436 = new google.maps.LatLng(rstinL[871],rstinL[872],noWrap=true);
    var geom436 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt436);
    rstrGeom.push(geom436);

    cAlt437 = new google.maps.LatLng(rstinL[873],rstinL[874],noWrap=true);
    var geom437 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt437);
    rstrGeom.push(geom437);

    cAlt438 = new google.maps.LatLng(rstinL[875],rstinL[876],noWrap=true);
    var geom438 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt438);
    rstrGeom.push(geom438);

    cAlt439 = new google.maps.LatLng(rstinL[877],rstinL[878],noWrap=true);
    var geom439 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt439);
    rstrGeom.push(geom439);

    cAlt440 = new google.maps.LatLng(rstinL[879],rstinL[880],noWrap=true);
    var geom440 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt440);
    rstrGeom.push(geom440);

    cAlt441 = new google.maps.LatLng(rstinL[881],rstinL[882],noWrap=true);
    var geom441 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt441);
    rstrGeom.push(geom441);

    cAlt442 = new google.maps.LatLng(rstinL[883],rstinL[884],noWrap=true);
    var geom442 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt442);
    rstrGeom.push(geom442);

    cAlt443 = new google.maps.LatLng(rstinL[885],rstinL[886],noWrap=true);
    var geom443 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt443);
    rstrGeom.push(geom443);

    cAlt444 = new google.maps.LatLng(rstinL[887],rstinL[888],noWrap=true);
    var geom444 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt444);
    rstrGeom.push(geom444);

    cAlt445 = new google.maps.LatLng(rstinL[889],rstinL[890],noWrap=true);
    var geom445 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt445);
    rstrGeom.push(geom445);

    cAlt446 = new google.maps.LatLng(rstinL[891],rstinL[892],noWrap=true);
    var geom446 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt446);
    rstrGeom.push(geom446);

    cAlt447 = new google.maps.LatLng(rstinL[893],rstinL[894],noWrap=true);
    var geom447 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt447);
    rstrGeom.push(geom447);

    cAlt448 = new google.maps.LatLng(rstinL[895],rstinL[896],noWrap=true);
    var geom448 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt448);
    rstrGeom.push(geom448);

    cAlt449 = new google.maps.LatLng(rstinL[897],rstinL[898],noWrap=true);
    var geom449 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt449);
    rstrGeom.push(geom449);

    cAlt450 = new google.maps.LatLng(rstinL[899],rstinL[900],noWrap=true);
    var geom450 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt450);
    rstrGeom.push(geom450);

    cAlt451 = new google.maps.LatLng(rstinL[901],rstinL[902],noWrap=true);
    var geom451 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt451);
    rstrGeom.push(geom451);

    cAlt452 = new google.maps.LatLng(rstinL[903],rstinL[904],noWrap=true);
    var geom452 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt452);
    rstrGeom.push(geom452);

    cAlt453 = new google.maps.LatLng(rstinL[905],rstinL[906],noWrap=true);
    var geom453 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt453);
    rstrGeom.push(geom453);

    cAlt454 = new google.maps.LatLng(rstinL[907],rstinL[908],noWrap=true);
    var geom454 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt454);
    rstrGeom.push(geom454);

    cAlt455 = new google.maps.LatLng(rstinL[909],rstinL[910],noWrap=true);
    var geom455 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt455);
    rstrGeom.push(geom455);

    cAlt456 = new google.maps.LatLng(rstinL[911],rstinL[912],noWrap=true);
    var geom456 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt456);
    rstrGeom.push(geom456);

    cAlt457 = new google.maps.LatLng(rstinL[913],rstinL[914],noWrap=true);
    var geom457 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt457);
    rstrGeom.push(geom457);

    cAlt458 = new google.maps.LatLng(rstinL[915],rstinL[916],noWrap=true);
    var geom458 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt458);
    rstrGeom.push(geom458);

    cAlt459 = new google.maps.LatLng(rstinL[917],rstinL[918],noWrap=true);
    var geom459 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt459);
    rstrGeom.push(geom459);

    cAlt460 = new google.maps.LatLng(rstinL[919],rstinL[920],noWrap=true);
    var geom460 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt460);
    rstrGeom.push(geom460);

    cAlt461 = new google.maps.LatLng(rstinL[921],rstinL[922],noWrap=true);
    var geom461 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt461);
    rstrGeom.push(geom461);

    cAlt462 = new google.maps.LatLng(rstinL[923],rstinL[924],noWrap=true);
    var geom462 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt462);
    rstrGeom.push(geom462);

    cAlt463 = new google.maps.LatLng(rstinL[925],rstinL[926],noWrap=true);
    var geom463 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt463);
    rstrGeom.push(geom463);

    cAlt464 = new google.maps.LatLng(rstinL[927],rstinL[928],noWrap=true);
    var geom464 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt464);
    rstrGeom.push(geom464);

    cAlt465 = new google.maps.LatLng(rstinL[929],rstinL[930],noWrap=true);
    var geom465 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt465);
    rstrGeom.push(geom465);

    cAlt466 = new google.maps.LatLng(rstinL[931],rstinL[932],noWrap=true);
    var geom466 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt466);
    rstrGeom.push(geom466);

    cAlt467 = new google.maps.LatLng(rstinL[933],rstinL[934],noWrap=true);
    var geom467 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt467);
    rstrGeom.push(geom467);

    cAlt468 = new google.maps.LatLng(rstinL[935],rstinL[936],noWrap=true);
    var geom468 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt468);
    rstrGeom.push(geom468);

    cAlt469 = new google.maps.LatLng(rstinL[937],rstinL[938],noWrap=true);
    var geom469 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt469);
    rstrGeom.push(geom469);

    cAlt470 = new google.maps.LatLng(rstinL[939],rstinL[940],noWrap=true);
    var geom470 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt470);
    rstrGeom.push(geom470);

    cAlt471 = new google.maps.LatLng(rstinL[941],rstinL[942],noWrap=true);
    var geom471 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt471);
    rstrGeom.push(geom471);

    cAlt472 = new google.maps.LatLng(rstinL[943],rstinL[944],noWrap=true);
    var geom472 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt472);
    rstrGeom.push(geom472);

    cAlt473 = new google.maps.LatLng(rstinL[945],rstinL[946],noWrap=true);
    var geom473 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt473);
    rstrGeom.push(geom473);

    cAlt474 = new google.maps.LatLng(rstinL[947],rstinL[948],noWrap=true);
    var geom474 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt474);
    rstrGeom.push(geom474);

    cAlt475 = new google.maps.LatLng(rstinL[949],rstinL[950],noWrap=true);
    var geom475 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt475);
    rstrGeom.push(geom475);

    cAlt476 = new google.maps.LatLng(rstinL[951],rstinL[952],noWrap=true);
    var geom476 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt476);
    rstrGeom.push(geom476);

    cAlt477 = new google.maps.LatLng(rstinL[953],rstinL[954],noWrap=true);
    var geom477 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt477);
    rstrGeom.push(geom477);

    cAlt478 = new google.maps.LatLng(rstinL[955],rstinL[956],noWrap=true);
    var geom478 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt478);
    rstrGeom.push(geom478);

    cAlt479 = new google.maps.LatLng(rstinL[957],rstinL[958],noWrap=true);
    var geom479 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt479);
    rstrGeom.push(geom479);

    cAlt480 = new google.maps.LatLng(rstinL[959],rstinL[960],noWrap=true);
    var geom480 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt480);
    rstrGeom.push(geom480);

    cAlt481 = new google.maps.LatLng(rstinL[961],rstinL[962],noWrap=true);
    var geom481 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt481);
    rstrGeom.push(geom481);

    cAlt482 = new google.maps.LatLng(rstinL[963],rstinL[964],noWrap=true);
    var geom482 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt482);
    rstrGeom.push(geom482);

    cAlt483 = new google.maps.LatLng(rstinL[965],rstinL[966],noWrap=true);
    var geom483 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt483);
    rstrGeom.push(geom483);

    cAlt484 = new google.maps.LatLng(rstinL[967],rstinL[968],noWrap=true);
    var geom484 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt484);
    rstrGeom.push(geom484);

    cAlt485 = new google.maps.LatLng(rstinL[969],rstinL[970],noWrap=true);
    var geom485 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt485);
    rstrGeom.push(geom485);

    cAlt486 = new google.maps.LatLng(rstinL[971],rstinL[972],noWrap=true);
    var geom486 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt486);
    rstrGeom.push(geom486);

    cAlt487 = new google.maps.LatLng(rstinL[973],rstinL[974],noWrap=true);
    var geom487 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt487);
    rstrGeom.push(geom487);

    cAlt488 = new google.maps.LatLng(rstinL[975],rstinL[976],noWrap=true);
    var geom488 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt488);
    rstrGeom.push(geom488);

    cAlt489 = new google.maps.LatLng(rstinL[977],rstinL[978],noWrap=true);
    var geom489 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt489);
    rstrGeom.push(geom489);

    cAlt490 = new google.maps.LatLng(rstinL[979],rstinL[980],noWrap=true);
    var geom490 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt490);
    rstrGeom.push(geom490);

    cAlt491 = new google.maps.LatLng(rstinL[981],rstinL[982],noWrap=true);
    var geom491 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt491);
    rstrGeom.push(geom491);

    cAlt492 = new google.maps.LatLng(rstinL[983],rstinL[984],noWrap=true);
    var geom492 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt492);
    rstrGeom.push(geom492);

    cAlt493 = new google.maps.LatLng(rstinL[985],rstinL[986],noWrap=true);
    var geom493 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt493);
    rstrGeom.push(geom493);

    cAlt494 = new google.maps.LatLng(rstinL[987],rstinL[988],noWrap=true);
    var geom494 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt494);
    rstrGeom.push(geom494);

    cAlt495 = new google.maps.LatLng(rstinL[989],rstinL[990],noWrap=true);
    var geom495 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt495);
    rstrGeom.push(geom495);

    cAlt496 = new google.maps.LatLng(rstinL[991],rstinL[992],noWrap=true);
    var geom496 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt496);
    rstrGeom.push(geom496);

    cAlt497 = new google.maps.LatLng(rstinL[993],rstinL[994],noWrap=true);
    var geom497 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt497);
    rstrGeom.push(geom497);

    cAlt498 = new google.maps.LatLng(rstinL[995],rstinL[996],noWrap=true);
    var geom498 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt498);
    rstrGeom.push(geom498);

    cAlt499 = new google.maps.LatLng(rstinL[997],rstinL[998],noWrap=true);
    var geom499 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt499);
    rstrGeom.push(geom499);

    cAlt500 = new google.maps.LatLng(rstinL[999],rstinL[1000],noWrap=true);
    var geom500 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt500);
    rstrGeom.push(geom500);

    cAlt501 = new google.maps.LatLng(rstinL[1001],rstinL[1002],noWrap=true);
    var geom501 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt501);
    rstrGeom.push(geom501);

    cAlt502 = new google.maps.LatLng(rstinL[1003],rstinL[1004],noWrap=true);
    var geom502 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt502);
    rstrGeom.push(geom502);

    cAlt503 = new google.maps.LatLng(rstinL[1005],rstinL[1006],noWrap=true);
    var geom503 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt503);
    rstrGeom.push(geom503);

    cAlt504 = new google.maps.LatLng(rstinL[1007],rstinL[1008],noWrap=true);
    var geom504 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt504);
    rstrGeom.push(geom504);

    cAlt505 = new google.maps.LatLng(rstinL[1009],rstinL[1010],noWrap=true);
    var geom505 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt505);
    rstrGeom.push(geom505);

    cAlt506 = new google.maps.LatLng(rstinL[1011],rstinL[1012],noWrap=true);
    var geom506 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt506);
    rstrGeom.push(geom506);

    cAlt507 = new google.maps.LatLng(rstinL[1013],rstinL[1014],noWrap=true);
    var geom507 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt507);
    rstrGeom.push(geom507);

    cAlt508 = new google.maps.LatLng(rstinL[1015],rstinL[1016],noWrap=true);
    var geom508 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt508);
    rstrGeom.push(geom508);

    cAlt509 = new google.maps.LatLng(rstinL[1017],rstinL[1018],noWrap=true);
    var geom509 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt509);
    rstrGeom.push(geom509);

    cAlt510 = new google.maps.LatLng(rstinL[1019],rstinL[1020],noWrap=true);
    var geom510 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt510);
    rstrGeom.push(geom510);

    cAlt511 = new google.maps.LatLng(rstinL[1021],rstinL[1022],noWrap=true);
    var geom511 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt511);
    rstrGeom.push(geom511);

    cAlt512 = new google.maps.LatLng(rstinL[1023],rstinL[1024],noWrap=true);
    var geom512 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt512);
    rstrGeom.push(geom512);

    cAlt513 = new google.maps.LatLng(rstinL[1025],rstinL[1026],noWrap=true);
    var geom513 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt513);
    rstrGeom.push(geom513);

    cAlt514 = new google.maps.LatLng(rstinL[1027],rstinL[1028],noWrap=true);
    var geom514 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt514);
    rstrGeom.push(geom514);

    cAlt515 = new google.maps.LatLng(rstinL[1029],rstinL[1030],noWrap=true);
    var geom515 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt515);
    rstrGeom.push(geom515);

    cAlt516 = new google.maps.LatLng(rstinL[1031],rstinL[1032],noWrap=true);
    var geom516 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt516);
    rstrGeom.push(geom516);

    cAlt517 = new google.maps.LatLng(rstinL[1033],rstinL[1034],noWrap=true);
    var geom517 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt517);
    rstrGeom.push(geom517);

    cAlt518 = new google.maps.LatLng(rstinL[1035],rstinL[1036],noWrap=true);
    var geom518 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt518);
    rstrGeom.push(geom518);

    cAlt519 = new google.maps.LatLng(rstinL[1037],rstinL[1038],noWrap=true);
    var geom519 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt519);
    rstrGeom.push(geom519);

    cAlt520 = new google.maps.LatLng(rstinL[1039],rstinL[1040],noWrap=true);
    var geom520 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt520);
    rstrGeom.push(geom520);

    cAlt521 = new google.maps.LatLng(rstinL[1041],rstinL[1042],noWrap=true);
    var geom521 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt521);
    rstrGeom.push(geom521);

    cAlt522 = new google.maps.LatLng(rstinL[1043],rstinL[1044],noWrap=true);
    var geom522 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt522);
    rstrGeom.push(geom522);

    cAlt523 = new google.maps.LatLng(rstinL[1045],rstinL[1046],noWrap=true);
    var geom523 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt523);
    rstrGeom.push(geom523);

    cAlt524 = new google.maps.LatLng(rstinL[1047],rstinL[1048],noWrap=true);
    var geom524 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt524);
    rstrGeom.push(geom524);

    cAlt525 = new google.maps.LatLng(rstinL[1049],rstinL[1050],noWrap=true);
    var geom525 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt525);
    rstrGeom.push(geom525);

    cAlt526 = new google.maps.LatLng(rstinL[1051],rstinL[1052],noWrap=true);
    var geom526 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt526);
    rstrGeom.push(geom526);

    cAlt527 = new google.maps.LatLng(rstinL[1053],rstinL[1054],noWrap=true);
    var geom527 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt527);
    rstrGeom.push(geom527);

    cAlt528 = new google.maps.LatLng(rstinL[1055],rstinL[1056],noWrap=true);
    var geom528 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt528);
    rstrGeom.push(geom528);

    cAlt529 = new google.maps.LatLng(rstinL[1057],rstinL[1058],noWrap=true);
    var geom529 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt529);
    rstrGeom.push(geom529);

    cAlt530 = new google.maps.LatLng(rstinL[1059],rstinL[1060],noWrap=true);
    var geom530 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt530);
    rstrGeom.push(geom530);

    cAlt531 = new google.maps.LatLng(rstinL[1061],rstinL[1062],noWrap=true);
    var geom531 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt531);
    rstrGeom.push(geom531);

    cAlt532 = new google.maps.LatLng(rstinL[1063],rstinL[1064],noWrap=true);
    var geom532 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt532);
    rstrGeom.push(geom532);

    cAlt533 = new google.maps.LatLng(rstinL[1065],rstinL[1066],noWrap=true);
    var geom533 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt533);
    rstrGeom.push(geom533);

    cAlt534 = new google.maps.LatLng(rstinL[1067],rstinL[1068],noWrap=true);
    var geom534 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt534);
    rstrGeom.push(geom534);

    cAlt535 = new google.maps.LatLng(rstinL[1069],rstinL[1070],noWrap=true);
    var geom535 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt535);
    rstrGeom.push(geom535);

    cAlt536 = new google.maps.LatLng(rstinL[1071],rstinL[1072],noWrap=true);
    var geom536 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt536);
    rstrGeom.push(geom536);

    cAlt537 = new google.maps.LatLng(rstinL[1073],rstinL[1074],noWrap=true);
    var geom537 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt537);
    rstrGeom.push(geom537);

    cAlt538 = new google.maps.LatLng(rstinL[1075],rstinL[1076],noWrap=true);
    var geom538 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt538);
    rstrGeom.push(geom538);

    cAlt539 = new google.maps.LatLng(rstinL[1077],rstinL[1078],noWrap=true);
    var geom539 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt539);
    rstrGeom.push(geom539);

    cAlt540 = new google.maps.LatLng(rstinL[1079],rstinL[1080],noWrap=true);
    var geom540 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt540);
    rstrGeom.push(geom540);

    cAlt541 = new google.maps.LatLng(rstinL[1081],rstinL[1082],noWrap=true);
    var geom541 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt541);
    rstrGeom.push(geom541);

    cAlt542 = new google.maps.LatLng(rstinL[1083],rstinL[1084],noWrap=true);
    var geom542 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt542);
    rstrGeom.push(geom542);

    cAlt543 = new google.maps.LatLng(rstinL[1085],rstinL[1086],noWrap=true);
    var geom543 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt543);
    rstrGeom.push(geom543);

    cAlt544 = new google.maps.LatLng(rstinL[1087],rstinL[1088],noWrap=true);
    var geom544 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt544);
    rstrGeom.push(geom544);

    cAlt545 = new google.maps.LatLng(rstinL[1089],rstinL[1090],noWrap=true);
    var geom545 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt545);
    rstrGeom.push(geom545);

    cAlt546 = new google.maps.LatLng(rstinL[1091],rstinL[1092],noWrap=true);
    var geom546 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt546);
    rstrGeom.push(geom546);

    cAlt547 = new google.maps.LatLng(rstinL[1093],rstinL[1094],noWrap=true);
    var geom547 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt547);
    rstrGeom.push(geom547);

    cAlt548 = new google.maps.LatLng(rstinL[1095],rstinL[1096],noWrap=true);
    var geom548 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt548);
    rstrGeom.push(geom548);

    cAlt549 = new google.maps.LatLng(rstinL[1097],rstinL[1098],noWrap=true);
    var geom549 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt549);
    rstrGeom.push(geom549);

    cAlt550 = new google.maps.LatLng(rstinL[1099],rstinL[1100],noWrap=true);
    var geom550 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt550);
    rstrGeom.push(geom550);

    cAlt551 = new google.maps.LatLng(rstinL[1101],rstinL[1102],noWrap=true);
    var geom551 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt551);
    rstrGeom.push(geom551);

    cAlt552 = new google.maps.LatLng(rstinL[1103],rstinL[1104],noWrap=true);
    var geom552 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt552);
    rstrGeom.push(geom552);

    cAlt553 = new google.maps.LatLng(rstinL[1105],rstinL[1106],noWrap=true);
    var geom553 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt553);
    rstrGeom.push(geom553);

    cAlt554 = new google.maps.LatLng(rstinL[1107],rstinL[1108],noWrap=true);
    var geom554 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt554);
    rstrGeom.push(geom554);

    cAlt555 = new google.maps.LatLng(rstinL[1109],rstinL[1110],noWrap=true);
    var geom555 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt555);
    rstrGeom.push(geom555);

    cAlt556 = new google.maps.LatLng(rstinL[1111],rstinL[1112],noWrap=true);
    var geom556 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt556);
    rstrGeom.push(geom556);

    cAlt557 = new google.maps.LatLng(rstinL[1113],rstinL[1114],noWrap=true);
    var geom557 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt557);
    rstrGeom.push(geom557);

    cAlt558 = new google.maps.LatLng(rstinL[1115],rstinL[1116],noWrap=true);
    var geom558 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt558);
    rstrGeom.push(geom558);

    cAlt559 = new google.maps.LatLng(rstinL[1117],rstinL[1118],noWrap=true);
    var geom559 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt559);
    rstrGeom.push(geom559);

    cAlt560 = new google.maps.LatLng(rstinL[1119],rstinL[1120],noWrap=true);
    var geom560 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt560);
    rstrGeom.push(geom560);

    cAlt561 = new google.maps.LatLng(rstinL[1121],rstinL[1122],noWrap=true);
    var geom561 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt561);
    rstrGeom.push(geom561);

    cAlt562 = new google.maps.LatLng(rstinL[1123],rstinL[1124],noWrap=true);
    var geom562 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt562);
    rstrGeom.push(geom562);

    cAlt563 = new google.maps.LatLng(rstinL[1125],rstinL[1126],noWrap=true);
    var geom563 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt563);
    rstrGeom.push(geom563);

    cAlt564 = new google.maps.LatLng(rstinL[1127],rstinL[1128],noWrap=true);
    var geom564 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt564);
    rstrGeom.push(geom564);

    cAlt565 = new google.maps.LatLng(rstinL[1129],rstinL[1130],noWrap=true);
    var geom565 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt565);
    rstrGeom.push(geom565);

    cAlt566 = new google.maps.LatLng(rstinL[1131],rstinL[1132],noWrap=true);
    var geom566 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt566);
    rstrGeom.push(geom566);

    cAlt567 = new google.maps.LatLng(rstinL[1133],rstinL[1134],noWrap=true);
    var geom567 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt567);
    rstrGeom.push(geom567);

    cAlt568 = new google.maps.LatLng(rstinL[1135],rstinL[1136],noWrap=true);
    var geom568 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt568);
    rstrGeom.push(geom568);

    cAlt569 = new google.maps.LatLng(rstinL[1137],rstinL[1138],noWrap=true);
    var geom569 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt569);
    rstrGeom.push(geom569);

    cAlt570 = new google.maps.LatLng(rstinL[1139],rstinL[1140],noWrap=true);
    var geom570 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt570);
    rstrGeom.push(geom570);

    cAlt571 = new google.maps.LatLng(rstinL[1141],rstinL[1142],noWrap=true);
    var geom571 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt571);
    rstrGeom.push(geom571);

    cAlt572 = new google.maps.LatLng(rstinL[1143],rstinL[1144],noWrap=true);
    var geom572 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt572);
    rstrGeom.push(geom572);

    cAlt573 = new google.maps.LatLng(rstinL[1145],rstinL[1146],noWrap=true);
    var geom573 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt573);
    rstrGeom.push(geom573);

    cAlt574 = new google.maps.LatLng(rstinL[1147],rstinL[1148],noWrap=true);
    var geom574 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt574);
    rstrGeom.push(geom574);

    cAlt575 = new google.maps.LatLng(rstinL[1149],rstinL[1150],noWrap=true);
    var geom575 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt575);
    rstrGeom.push(geom575);

    cAlt576 = new google.maps.LatLng(rstinL[1151],rstinL[1152],noWrap=true);
    var geom576 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt576);
    rstrGeom.push(geom576);

    cAlt577 = new google.maps.LatLng(rstinL[1153],rstinL[1154],noWrap=true);
    var geom577 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt577);
    rstrGeom.push(geom577);

    cAlt578 = new google.maps.LatLng(rstinL[1155],rstinL[1156],noWrap=true);
    var geom578 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt578);
    rstrGeom.push(geom578);

    cAlt579 = new google.maps.LatLng(rstinL[1157],rstinL[1158],noWrap=true);
    var geom579 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt579);
    rstrGeom.push(geom579);

    cAlt580 = new google.maps.LatLng(rstinL[1159],rstinL[1160],noWrap=true);
    var geom580 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt580);
    rstrGeom.push(geom580);

    cAlt581 = new google.maps.LatLng(rstinL[1161],rstinL[1162],noWrap=true);
    var geom581 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt581);
    rstrGeom.push(geom581);

    cAlt582 = new google.maps.LatLng(rstinL[1163],rstinL[1164],noWrap=true);
    var geom582 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt582);
    rstrGeom.push(geom582);

    cAlt583 = new google.maps.LatLng(rstinL[1165],rstinL[1166],noWrap=true);
    var geom583 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt583);
    rstrGeom.push(geom583);

    cAlt584 = new google.maps.LatLng(rstinL[1167],rstinL[1168],noWrap=true);
    var geom584 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt584);
    rstrGeom.push(geom584);

    cAlt585 = new google.maps.LatLng(rstinL[1169],rstinL[1170],noWrap=true);
    var geom585 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt585);
    rstrGeom.push(geom585);

    cAlt586 = new google.maps.LatLng(rstinL[1171],rstinL[1172],noWrap=true);
    var geom586 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt586);
    rstrGeom.push(geom586);

    cAlt587 = new google.maps.LatLng(rstinL[1173],rstinL[1174],noWrap=true);
    var geom587 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt587);
    rstrGeom.push(geom587);

    cAlt588 = new google.maps.LatLng(rstinL[1175],rstinL[1176],noWrap=true);
    var geom588 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt588);
    rstrGeom.push(geom588);

    cAlt589 = new google.maps.LatLng(rstinL[1177],rstinL[1178],noWrap=true);
    var geom589 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt589);
    rstrGeom.push(geom589);

    cAlt590 = new google.maps.LatLng(rstinL[1179],rstinL[1180],noWrap=true);
    var geom590 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt590);
    rstrGeom.push(geom590);

    cAlt591 = new google.maps.LatLng(rstinL[1181],rstinL[1182],noWrap=true);
    var geom591 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt591);
    rstrGeom.push(geom591);

    cAlt592 = new google.maps.LatLng(rstinL[1183],rstinL[1184],noWrap=true);
    var geom592 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt592);
    rstrGeom.push(geom592);

    cAlt593 = new google.maps.LatLng(rstinL[1185],rstinL[1186],noWrap=true);
    var geom593 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt593);
    rstrGeom.push(geom593);

    cAlt594 = new google.maps.LatLng(rstinL[1187],rstinL[1188],noWrap=true);
    var geom594 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt594);
    rstrGeom.push(geom594);

    cAlt595 = new google.maps.LatLng(rstinL[1189],rstinL[1190],noWrap=true);
    var geom595 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt595);
    rstrGeom.push(geom595);

    cAlt596 = new google.maps.LatLng(rstinL[1191],rstinL[1192],noWrap=true);
    var geom596 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt596);
    rstrGeom.push(geom596);

    cAlt597 = new google.maps.LatLng(rstinL[1193],rstinL[1194],noWrap=true);
    var geom597 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt597);
    rstrGeom.push(geom597);

    cAlt598 = new google.maps.LatLng(rstinL[1195],rstinL[1196],noWrap=true);
    var geom598 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt598);
    rstrGeom.push(geom598);

    cAlt599 = new google.maps.LatLng(rstinL[1197],rstinL[1198],noWrap=true);
    var geom599 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt599);
    rstrGeom.push(geom599);

    cAlt600 = new google.maps.LatLng(rstinL[1199],rstinL[1200],noWrap=true);
    var geom600 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt600);
    rstrGeom.push(geom600);

    cAlt601 = new google.maps.LatLng(rstinL[1201],rstinL[1202],noWrap=true);
    var geom601 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt601);
    rstrGeom.push(geom601);

    cAlt602 = new google.maps.LatLng(rstinL[1203],rstinL[1204],noWrap=true);
    var geom602 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt602);
    rstrGeom.push(geom602);

    cAlt603 = new google.maps.LatLng(rstinL[1205],rstinL[1206],noWrap=true);
    var geom603 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt603);
    rstrGeom.push(geom603);

    cAlt604 = new google.maps.LatLng(rstinL[1207],rstinL[1208],noWrap=true);
    var geom604 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt604);
    rstrGeom.push(geom604);

    cAlt605 = new google.maps.LatLng(rstinL[1209],rstinL[1210],noWrap=true);
    var geom605 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt605);
    rstrGeom.push(geom605);

    cAlt606 = new google.maps.LatLng(rstinL[1211],rstinL[1212],noWrap=true);
    var geom606 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt606);
    rstrGeom.push(geom606);

    cAlt607 = new google.maps.LatLng(rstinL[1213],rstinL[1214],noWrap=true);
    var geom607 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt607);
    rstrGeom.push(geom607);

    cAlt608 = new google.maps.LatLng(rstinL[1215],rstinL[1216],noWrap=true);
    var geom608 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt608);
    rstrGeom.push(geom608);

    cAlt609 = new google.maps.LatLng(rstinL[1217],rstinL[1218],noWrap=true);
    var geom609 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt609);
    rstrGeom.push(geom609);

    cAlt610 = new google.maps.LatLng(rstinL[1219],rstinL[1220],noWrap=true);
    var geom610 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt610);
    rstrGeom.push(geom610);

    cAlt611 = new google.maps.LatLng(rstinL[1221],rstinL[1222],noWrap=true);
    var geom611 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt611);
    rstrGeom.push(geom611);

    cAlt612 = new google.maps.LatLng(rstinL[1223],rstinL[1224],noWrap=true);
    var geom612 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt612);
    rstrGeom.push(geom612);

    cAlt613 = new google.maps.LatLng(rstinL[1225],rstinL[1226],noWrap=true);
    var geom613 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt613);
    rstrGeom.push(geom613);

    cAlt614 = new google.maps.LatLng(rstinL[1227],rstinL[1228],noWrap=true);
    var geom614 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt614);
    rstrGeom.push(geom614);

    cAlt615 = new google.maps.LatLng(rstinL[1229],rstinL[1230],noWrap=true);
    var geom615 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt615);
    rstrGeom.push(geom615);

    cAlt616 = new google.maps.LatLng(rstinL[1231],rstinL[1232],noWrap=true);
    var geom616 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt616);
    rstrGeom.push(geom616);

    cAlt617 = new google.maps.LatLng(rstinL[1233],rstinL[1234],noWrap=true);
    var geom617 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt617);
    rstrGeom.push(geom617);

    cAlt618 = new google.maps.LatLng(rstinL[1235],rstinL[1236],noWrap=true);
    var geom618 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt618);
    rstrGeom.push(geom618);

    cAlt619 = new google.maps.LatLng(rstinL[1237],rstinL[1238],noWrap=true);
    var geom619 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt619);
    rstrGeom.push(geom619);

    cAlt620 = new google.maps.LatLng(rstinL[1239],rstinL[1240],noWrap=true);
    var geom620 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt620);
    rstrGeom.push(geom620);

    cAlt621 = new google.maps.LatLng(rstinL[1241],rstinL[1242],noWrap=true);
    var geom621 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt621);
    rstrGeom.push(geom621);

    cAlt622 = new google.maps.LatLng(rstinL[1243],rstinL[1244],noWrap=true);
    var geom622 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt622);
    rstrGeom.push(geom622);

    cAlt623 = new google.maps.LatLng(rstinL[1245],rstinL[1246],noWrap=true);
    var geom623 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt623);
    rstrGeom.push(geom623);

    cAlt624 = new google.maps.LatLng(rstinL[1247],rstinL[1248],noWrap=true);
    var geom624 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt624);
    rstrGeom.push(geom624);

    cAlt625 = new google.maps.LatLng(rstinL[1249],rstinL[1250],noWrap=true);
    var geom625 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt625);
    rstrGeom.push(geom625);

    cAlt626 = new google.maps.LatLng(rstinL[1251],rstinL[1252],noWrap=true);
    var geom626 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt626);
    rstrGeom.push(geom626);

    cAlt627 = new google.maps.LatLng(rstinL[1253],rstinL[1254],noWrap=true);
    var geom627 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt627);
    rstrGeom.push(geom627);

    cAlt628 = new google.maps.LatLng(rstinL[1255],rstinL[1256],noWrap=true);
    var geom628 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt628);
    rstrGeom.push(geom628);

    cAlt629 = new google.maps.LatLng(rstinL[1257],rstinL[1258],noWrap=true);
    var geom629 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt629);
    rstrGeom.push(geom629);

    cAlt630 = new google.maps.LatLng(rstinL[1259],rstinL[1260],noWrap=true);
    var geom630 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt630);
    rstrGeom.push(geom630);

    cAlt631 = new google.maps.LatLng(rstinL[1261],rstinL[1262],noWrap=true);
    var geom631 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt631);
    rstrGeom.push(geom631);

    cAlt632 = new google.maps.LatLng(rstinL[1263],rstinL[1264],noWrap=true);
    var geom632 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt632);
    rstrGeom.push(geom632);

    cAlt633 = new google.maps.LatLng(rstinL[1265],rstinL[1266],noWrap=true);
    var geom633 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt633);
    rstrGeom.push(geom633);

    cAlt634 = new google.maps.LatLng(rstinL[1267],rstinL[1268],noWrap=true);
    var geom634 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt634);
    rstrGeom.push(geom634);

    cAlt635 = new google.maps.LatLng(rstinL[1269],rstinL[1270],noWrap=true);
    var geom635 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt635);
    rstrGeom.push(geom635);

    cAlt636 = new google.maps.LatLng(rstinL[1271],rstinL[1272],noWrap=true);
    var geom636 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt636);
    rstrGeom.push(geom636);

    cAlt637 = new google.maps.LatLng(rstinL[1273],rstinL[1274],noWrap=true);
    var geom637 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt637);
    rstrGeom.push(geom637);

    cAlt638 = new google.maps.LatLng(rstinL[1275],rstinL[1276],noWrap=true);
    var geom638 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt638);
    rstrGeom.push(geom638);

    cAlt639 = new google.maps.LatLng(rstinL[1277],rstinL[1278],noWrap=true);
    var geom639 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt639);
    rstrGeom.push(geom639);

    cAlt640 = new google.maps.LatLng(rstinL[1279],rstinL[1280],noWrap=true);
    var geom640 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt640);
    rstrGeom.push(geom640);

    cAlt641 = new google.maps.LatLng(rstinL[1281],rstinL[1282],noWrap=true);
    var geom641 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt641);
    rstrGeom.push(geom641);

    cAlt642 = new google.maps.LatLng(rstinL[1283],rstinL[1284],noWrap=true);
    var geom642 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt642);
    rstrGeom.push(geom642);

    cAlt643 = new google.maps.LatLng(rstinL[1285],rstinL[1286],noWrap=true);
    var geom643 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt643);
    rstrGeom.push(geom643);

    cAlt644 = new google.maps.LatLng(rstinL[1287],rstinL[1288],noWrap=true);
    var geom644 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt644);
    rstrGeom.push(geom644);

    cAlt645 = new google.maps.LatLng(rstinL[1289],rstinL[1290],noWrap=true);
    var geom645 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt645);
    rstrGeom.push(geom645);

    cAlt646 = new google.maps.LatLng(rstinL[1291],rstinL[1292],noWrap=true);
    var geom646 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt646);
    rstrGeom.push(geom646);

    cAlt647 = new google.maps.LatLng(rstinL[1293],rstinL[1294],noWrap=true);
    var geom647 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt647);
    rstrGeom.push(geom647);

    cAlt648 = new google.maps.LatLng(rstinL[1295],rstinL[1296],noWrap=true);
    var geom648 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt648);
    rstrGeom.push(geom648);

    cAlt649 = new google.maps.LatLng(rstinL[1297],rstinL[1298],noWrap=true);
    var geom649 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt649);
    rstrGeom.push(geom649);

    cAlt650 = new google.maps.LatLng(rstinL[1299],rstinL[1300],noWrap=true);
    var geom650 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt650);
    rstrGeom.push(geom650);

    cAlt651 = new google.maps.LatLng(rstinL[1301],rstinL[1302],noWrap=true);
    var geom651 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt651);
    rstrGeom.push(geom651);

    cAlt652 = new google.maps.LatLng(rstinL[1303],rstinL[1304],noWrap=true);
    var geom652 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt652);
    rstrGeom.push(geom652);

    cAlt653 = new google.maps.LatLng(rstinL[1305],rstinL[1306],noWrap=true);
    var geom653 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt653);
    rstrGeom.push(geom653);

    cAlt654 = new google.maps.LatLng(rstinL[1307],rstinL[1308],noWrap=true);
    var geom654 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt654);
    rstrGeom.push(geom654);

    cAlt655 = new google.maps.LatLng(rstinL[1309],rstinL[1310],noWrap=true);
    var geom655 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt655);
    rstrGeom.push(geom655);

    cAlt656 = new google.maps.LatLng(rstinL[1311],rstinL[1312],noWrap=true);
    var geom656 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt656);
    rstrGeom.push(geom656);

    cAlt657 = new google.maps.LatLng(rstinL[1313],rstinL[1314],noWrap=true);
    var geom657 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt657);
    rstrGeom.push(geom657);

    cAlt658 = new google.maps.LatLng(rstinL[1315],rstinL[1316],noWrap=true);
    var geom658 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt658);
    rstrGeom.push(geom658);

    cAlt659 = new google.maps.LatLng(rstinL[1317],rstinL[1318],noWrap=true);
    var geom659 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt659);
    rstrGeom.push(geom659);

    cAlt660 = new google.maps.LatLng(rstinL[1319],rstinL[1320],noWrap=true);
    var geom660 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt660);
    rstrGeom.push(geom660);

    cAlt661 = new google.maps.LatLng(rstinL[1321],rstinL[1322],noWrap=true);
    var geom661 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt661);
    rstrGeom.push(geom661);

    cAlt662 = new google.maps.LatLng(rstinL[1323],rstinL[1324],noWrap=true);
    var geom662 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt662);
    rstrGeom.push(geom662);

    cAlt663 = new google.maps.LatLng(rstinL[1325],rstinL[1326],noWrap=true);
    var geom663 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt663);
    rstrGeom.push(geom663);

    cAlt664 = new google.maps.LatLng(rstinL[1327],rstinL[1328],noWrap=true);
    var geom664 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt664);
    rstrGeom.push(geom664);

    cAlt665 = new google.maps.LatLng(rstinL[1329],rstinL[1330],noWrap=true);
    var geom665 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt665);
    rstrGeom.push(geom665);

    cAlt666 = new google.maps.LatLng(rstinL[1331],rstinL[1332],noWrap=true);
    var geom666 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt666);
    rstrGeom.push(geom666);

    cAlt667 = new google.maps.LatLng(rstinL[1333],rstinL[1334],noWrap=true);
    var geom667 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt667);
    rstrGeom.push(geom667);

    cAlt668 = new google.maps.LatLng(rstinL[1335],rstinL[1336],noWrap=true);
    var geom668 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt668);
    rstrGeom.push(geom668);

    cAlt669 = new google.maps.LatLng(rstinL[1337],rstinL[1338],noWrap=true);
    var geom669 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt669);
    rstrGeom.push(geom669);

    cAlt670 = new google.maps.LatLng(rstinL[1339],rstinL[1340],noWrap=true);
    var geom670 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt670);
    rstrGeom.push(geom670);

    cAlt671 = new google.maps.LatLng(rstinL[1341],rstinL[1342],noWrap=true);
    var geom671 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt671);
    rstrGeom.push(geom671);

    cAlt672 = new google.maps.LatLng(rstinL[1343],rstinL[1344],noWrap=true);
    var geom672 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt672);
    rstrGeom.push(geom672);

    cAlt673 = new google.maps.LatLng(rstinL[1345],rstinL[1346],noWrap=true);
    var geom673 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt673);
    rstrGeom.push(geom673);

    cAlt674 = new google.maps.LatLng(rstinL[1347],rstinL[1348],noWrap=true);
    var geom674 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt674);
    rstrGeom.push(geom674);

    cAlt675 = new google.maps.LatLng(rstinL[1349],rstinL[1350],noWrap=true);
    var geom675 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt675);
    rstrGeom.push(geom675);

    cAlt676 = new google.maps.LatLng(rstinL[1351],rstinL[1352],noWrap=true);
    var geom676 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt676);
    rstrGeom.push(geom676);

    cAlt677 = new google.maps.LatLng(rstinL[1353],rstinL[1354],noWrap=true);
    var geom677 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt677);
    rstrGeom.push(geom677);

    cAlt678 = new google.maps.LatLng(rstinL[1355],rstinL[1356],noWrap=true);
    var geom678 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt678);
    rstrGeom.push(geom678);

    cAlt679 = new google.maps.LatLng(rstinL[1357],rstinL[1358],noWrap=true);
    var geom679 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt679);
    rstrGeom.push(geom679);

    cAlt680 = new google.maps.LatLng(rstinL[1359],rstinL[1360],noWrap=true);
    var geom680 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt680);
    rstrGeom.push(geom680);

    cAlt681 = new google.maps.LatLng(rstinL[1361],rstinL[1362],noWrap=true);
    var geom681 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt681);
    rstrGeom.push(geom681);

    cAlt682 = new google.maps.LatLng(rstinL[1363],rstinL[1364],noWrap=true);
    var geom682 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt682);
    rstrGeom.push(geom682);

    cAlt683 = new google.maps.LatLng(rstinL[1365],rstinL[1366],noWrap=true);
    var geom683 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt683);
    rstrGeom.push(geom683);

    cAlt684 = new google.maps.LatLng(rstinL[1367],rstinL[1368],noWrap=true);
    var geom684 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt684);
    rstrGeom.push(geom684);

    cAlt685 = new google.maps.LatLng(rstinL[1369],rstinL[1370],noWrap=true);
    var geom685 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt685);
    rstrGeom.push(geom685);

    cAlt686 = new google.maps.LatLng(rstinL[1371],rstinL[1372],noWrap=true);
    var geom686 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt686);
    rstrGeom.push(geom686);

    cAlt687 = new google.maps.LatLng(rstinL[1373],rstinL[1374],noWrap=true);
    var geom687 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt687);
    rstrGeom.push(geom687);

    cAlt688 = new google.maps.LatLng(rstinL[1375],rstinL[1376],noWrap=true);
    var geom688 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt688);
    rstrGeom.push(geom688);

    cAlt689 = new google.maps.LatLng(rstinL[1377],rstinL[1378],noWrap=true);
    var geom689 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt689);
    rstrGeom.push(geom689);

    cAlt690 = new google.maps.LatLng(rstinL[1379],rstinL[1380],noWrap=true);
    var geom690 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt690);
    rstrGeom.push(geom690);

    cAlt691 = new google.maps.LatLng(rstinL[1381],rstinL[1382],noWrap=true);
    var geom691 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt691);
    rstrGeom.push(geom691);

    cAlt692 = new google.maps.LatLng(rstinL[1383],rstinL[1384],noWrap=true);
    var geom692 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt692);
    rstrGeom.push(geom692);

    cAlt693 = new google.maps.LatLng(rstinL[1385],rstinL[1386],noWrap=true);
    var geom693 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt693);
    rstrGeom.push(geom693);

    cAlt694 = new google.maps.LatLng(rstinL[1387],rstinL[1388],noWrap=true);
    var geom694 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt694);
    rstrGeom.push(geom694);

    cAlt695 = new google.maps.LatLng(rstinL[1389],rstinL[1390],noWrap=true);
    var geom695 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt695);
    rstrGeom.push(geom695);

    cAlt696 = new google.maps.LatLng(rstinL[1391],rstinL[1392],noWrap=true);
    var geom696 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt696);
    rstrGeom.push(geom696);

    cAlt697 = new google.maps.LatLng(rstinL[1393],rstinL[1394],noWrap=true);
    var geom697 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt697);
    rstrGeom.push(geom697);

    cAlt698 = new google.maps.LatLng(rstinL[1395],rstinL[1396],noWrap=true);
    var geom698 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt698);
    rstrGeom.push(geom698);

    cAlt699 = new google.maps.LatLng(rstinL[1397],rstinL[1398],noWrap=true);
    var geom699 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt699);
    rstrGeom.push(geom699);

    cAlt700 = new google.maps.LatLng(rstinL[1399],rstinL[1400],noWrap=true);
    var geom700 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt700);
    rstrGeom.push(geom700);

    cAlt701 = new google.maps.LatLng(rstinL[1401],rstinL[1402],noWrap=true);
    var geom701 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt701);
    rstrGeom.push(geom701);

    cAlt702 = new google.maps.LatLng(rstinL[1403],rstinL[1404],noWrap=true);
    var geom702 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt702);
    rstrGeom.push(geom702);

    cAlt703 = new google.maps.LatLng(rstinL[1405],rstinL[1406],noWrap=true);
    var geom703 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt703);
    rstrGeom.push(geom703);

    cAlt704 = new google.maps.LatLng(rstinL[1407],rstinL[1408],noWrap=true);
    var geom704 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt704);
    rstrGeom.push(geom704);

    cAlt705 = new google.maps.LatLng(rstinL[1409],rstinL[1410],noWrap=true);
    var geom705 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt705);
    rstrGeom.push(geom705);

    cAlt706 = new google.maps.LatLng(rstinL[1411],rstinL[1412],noWrap=true);
    var geom706 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt706);
    rstrGeom.push(geom706);

    cAlt707 = new google.maps.LatLng(rstinL[1413],rstinL[1414],noWrap=true);
    var geom707 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt707);
    rstrGeom.push(geom707);

    cAlt708 = new google.maps.LatLng(rstinL[1415],rstinL[1416],noWrap=true);
    var geom708 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt708);
    rstrGeom.push(geom708);

    cAlt709 = new google.maps.LatLng(rstinL[1417],rstinL[1418],noWrap=true);
    var geom709 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt709);
    rstrGeom.push(geom709);

    cAlt710 = new google.maps.LatLng(rstinL[1419],rstinL[1420],noWrap=true);
    var geom710 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt710);
    rstrGeom.push(geom710);

    cAlt711 = new google.maps.LatLng(rstinL[1421],rstinL[1422],noWrap=true);
    var geom711 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt711);
    rstrGeom.push(geom711);

    cAlt712 = new google.maps.LatLng(rstinL[1423],rstinL[1424],noWrap=true);
    var geom712 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt712);
    rstrGeom.push(geom712);

    cAlt713 = new google.maps.LatLng(rstinL[1425],rstinL[1426],noWrap=true);
    var geom713 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt713);
    rstrGeom.push(geom713);

    cAlt714 = new google.maps.LatLng(rstinL[1427],rstinL[1428],noWrap=true);
    var geom714 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt714);
    rstrGeom.push(geom714);

    cAlt715 = new google.maps.LatLng(rstinL[1429],rstinL[1430],noWrap=true);
    var geom715 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt715);
    rstrGeom.push(geom715);

    cAlt716 = new google.maps.LatLng(rstinL[1431],rstinL[1432],noWrap=true);
    var geom716 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt716);
    rstrGeom.push(geom716);

    cAlt717 = new google.maps.LatLng(rstinL[1433],rstinL[1434],noWrap=true);
    var geom717 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt717);
    rstrGeom.push(geom717);

    cAlt718 = new google.maps.LatLng(rstinL[1435],rstinL[1436],noWrap=true);
    var geom718 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt718);
    rstrGeom.push(geom718);

    cAlt719 = new google.maps.LatLng(rstinL[1437],rstinL[1438],noWrap=true);
    var geom719 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt719);
    rstrGeom.push(geom719);

    cAlt720 = new google.maps.LatLng(rstinL[1439],rstinL[1440],noWrap=true);
    var geom720 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt720);
    rstrGeom.push(geom720);

    cAlt721 = new google.maps.LatLng(rstinL[1441],rstinL[1442],noWrap=true);
    var geom721 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt721);
    rstrGeom.push(geom721);

    cAlt722 = new google.maps.LatLng(rstinL[1443],rstinL[1444],noWrap=true);
    var geom722 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt722);
    rstrGeom.push(geom722);

    cAlt723 = new google.maps.LatLng(rstinL[1445],rstinL[1446],noWrap=true);
    var geom723 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt723);
    rstrGeom.push(geom723);

    cAlt724 = new google.maps.LatLng(rstinL[1447],rstinL[1448],noWrap=true);
    var geom724 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt724);
    rstrGeom.push(geom724);

    cAlt725 = new google.maps.LatLng(rstinL[1449],rstinL[1450],noWrap=true);
    var geom725 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt725);
    rstrGeom.push(geom725);

    cAlt726 = new google.maps.LatLng(rstinL[1451],rstinL[1452],noWrap=true);
    var geom726 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt726);
    rstrGeom.push(geom726);

    cAlt727 = new google.maps.LatLng(rstinL[1453],rstinL[1454],noWrap=true);
    var geom727 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt727);
    rstrGeom.push(geom727);

    cAlt728 = new google.maps.LatLng(rstinL[1455],rstinL[1456],noWrap=true);
    var geom728 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt728);
    rstrGeom.push(geom728);

    cAlt729 = new google.maps.LatLng(rstinL[1457],rstinL[1458],noWrap=true);
    var geom729 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt729);
    rstrGeom.push(geom729);

    cAlt730 = new google.maps.LatLng(rstinL[1459],rstinL[1460],noWrap=true);
    var geom730 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt730);
    rstrGeom.push(geom730);

    cAlt731 = new google.maps.LatLng(rstinL[1461],rstinL[1462],noWrap=true);
    var geom731 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt731);
    rstrGeom.push(geom731);

    cAlt732 = new google.maps.LatLng(rstinL[1463],rstinL[1464],noWrap=true);
    var geom732 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt732);
    rstrGeom.push(geom732);

    cAlt733 = new google.maps.LatLng(rstinL[1465],rstinL[1466],noWrap=true);
    var geom733 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt733);
    rstrGeom.push(geom733);

    cAlt734 = new google.maps.LatLng(rstinL[1467],rstinL[1468],noWrap=true);
    var geom734 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt734);
    rstrGeom.push(geom734);

    cAlt735 = new google.maps.LatLng(rstinL[1469],rstinL[1470],noWrap=true);
    var geom735 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt735);
    rstrGeom.push(geom735);

    cAlt736 = new google.maps.LatLng(rstinL[1471],rstinL[1472],noWrap=true);
    var geom736 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt736);
    rstrGeom.push(geom736);

    cAlt737 = new google.maps.LatLng(rstinL[1473],rstinL[1474],noWrap=true);
    var geom737 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt737);
    rstrGeom.push(geom737);

    cAlt738 = new google.maps.LatLng(rstinL[1475],rstinL[1476],noWrap=true);
    var geom738 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt738);
    rstrGeom.push(geom738);

    cAlt739 = new google.maps.LatLng(rstinL[1477],rstinL[1478],noWrap=true);
    var geom739 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt739);
    rstrGeom.push(geom739);

    cAlt740 = new google.maps.LatLng(rstinL[1479],rstinL[1480],noWrap=true);
    var geom740 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt740);
    rstrGeom.push(geom740);

    cAlt741 = new google.maps.LatLng(rstinL[1481],rstinL[1482],noWrap=true);
    var geom741 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt741);
    rstrGeom.push(geom741);

    cAlt742 = new google.maps.LatLng(rstinL[1483],rstinL[1484],noWrap=true);
    var geom742 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt742);
    rstrGeom.push(geom742);

    cAlt743 = new google.maps.LatLng(rstinL[1485],rstinL[1486],noWrap=true);
    var geom743 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt743);
    rstrGeom.push(geom743);

    cAlt744 = new google.maps.LatLng(rstinL[1487],rstinL[1488],noWrap=true);
    var geom744 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt744);
    rstrGeom.push(geom744);

    cAlt745 = new google.maps.LatLng(rstinL[1489],rstinL[1490],noWrap=true);
    var geom745 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt745);
    rstrGeom.push(geom745);

    cAlt746 = new google.maps.LatLng(rstinL[1491],rstinL[1492],noWrap=true);
    var geom746 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt746);
    rstrGeom.push(geom746);

    cAlt747 = new google.maps.LatLng(rstinL[1493],rstinL[1494],noWrap=true);
    var geom747 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt747);
    rstrGeom.push(geom747);

    cAlt748 = new google.maps.LatLng(rstinL[1495],rstinL[1496],noWrap=true);
    var geom748 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt748);
    rstrGeom.push(geom748);

    cAlt749 = new google.maps.LatLng(rstinL[1497],rstinL[1498],noWrap=true);
    var geom749 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt749);
    rstrGeom.push(geom749);

    cAlt750 = new google.maps.LatLng(rstinL[1499],rstinL[1500],noWrap=true);
    var geom750 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt750);
    rstrGeom.push(geom750);

    cAlt751 = new google.maps.LatLng(rstinL[1501],rstinL[1502],noWrap=true);
    var geom751 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt751);
    rstrGeom.push(geom751);

    cAlt752 = new google.maps.LatLng(rstinL[1503],rstinL[1504],noWrap=true);
    var geom752 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt752);
    rstrGeom.push(geom752);

    cAlt753 = new google.maps.LatLng(rstinL[1505],rstinL[1506],noWrap=true);
    var geom753 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt753);
    rstrGeom.push(geom753);

    cAlt754 = new google.maps.LatLng(rstinL[1507],rstinL[1508],noWrap=true);
    var geom754 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt754);
    rstrGeom.push(geom754);

    cAlt755 = new google.maps.LatLng(rstinL[1509],rstinL[1510],noWrap=true);
    var geom755 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt755);
    rstrGeom.push(geom755);

    cAlt756 = new google.maps.LatLng(rstinL[1511],rstinL[1512],noWrap=true);
    var geom756 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt756);
    rstrGeom.push(geom756);

    cAlt757 = new google.maps.LatLng(rstinL[1513],rstinL[1514],noWrap=true);
    var geom757 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt757);
    rstrGeom.push(geom757);

    cAlt758 = new google.maps.LatLng(rstinL[1515],rstinL[1516],noWrap=true);
    var geom758 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt758);
    rstrGeom.push(geom758);

    cAlt759 = new google.maps.LatLng(rstinL[1517],rstinL[1518],noWrap=true);
    var geom759 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt759);
    rstrGeom.push(geom759);

    cAlt760 = new google.maps.LatLng(rstinL[1519],rstinL[1520],noWrap=true);
    var geom760 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt760);
    rstrGeom.push(geom760);

    cAlt761 = new google.maps.LatLng(rstinL[1521],rstinL[1522],noWrap=true);
    var geom761 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt761);
    rstrGeom.push(geom761);

    cAlt762 = new google.maps.LatLng(rstinL[1523],rstinL[1524],noWrap=true);
    var geom762 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt762);
    rstrGeom.push(geom762);

    cAlt763 = new google.maps.LatLng(rstinL[1525],rstinL[1526],noWrap=true);
    var geom763 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt763);
    rstrGeom.push(geom763);

    cAlt764 = new google.maps.LatLng(rstinL[1527],rstinL[1528],noWrap=true);
    var geom764 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt764);
    rstrGeom.push(geom764);

    cAlt765 = new google.maps.LatLng(rstinL[1529],rstinL[1530],noWrap=true);
    var geom765 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt765);
    rstrGeom.push(geom765);

    cAlt766 = new google.maps.LatLng(rstinL[1531],rstinL[1532],noWrap=true);
    var geom766 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt766);
    rstrGeom.push(geom766);

    cAlt767 = new google.maps.LatLng(rstinL[1533],rstinL[1534],noWrap=true);
    var geom767 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt767);
    rstrGeom.push(geom767);

    cAlt768 = new google.maps.LatLng(rstinL[1535],rstinL[1536],noWrap=true);
    var geom768 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt768);
    rstrGeom.push(geom768);

    cAlt769 = new google.maps.LatLng(rstinL[1537],rstinL[1538],noWrap=true);
    var geom769 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt769);
    rstrGeom.push(geom769);

    cAlt770 = new google.maps.LatLng(rstinL[1539],rstinL[1540],noWrap=true);
    var geom770 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt770);
    rstrGeom.push(geom770);

    cAlt771 = new google.maps.LatLng(rstinL[1541],rstinL[1542],noWrap=true);
    var geom771 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt771);
    rstrGeom.push(geom771);

    cAlt772 = new google.maps.LatLng(rstinL[1543],rstinL[1544],noWrap=true);
    var geom772 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt772);
    rstrGeom.push(geom772);

    cAlt773 = new google.maps.LatLng(rstinL[1545],rstinL[1546],noWrap=true);
    var geom773 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt773);
    rstrGeom.push(geom773);

    cAlt774 = new google.maps.LatLng(rstinL[1547],rstinL[1548],noWrap=true);
    var geom774 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt774);
    rstrGeom.push(geom774);

    cAlt775 = new google.maps.LatLng(rstinL[1549],rstinL[1550],noWrap=true);
    var geom775 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt775);
    rstrGeom.push(geom775);

    cAlt776 = new google.maps.LatLng(rstinL[1551],rstinL[1552],noWrap=true);
    var geom776 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt776);
    rstrGeom.push(geom776);

    cAlt777 = new google.maps.LatLng(rstinL[1553],rstinL[1554],noWrap=true);
    var geom777 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt777);
    rstrGeom.push(geom777);

    cAlt778 = new google.maps.LatLng(rstinL[1555],rstinL[1556],noWrap=true);
    var geom778 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt778);
    rstrGeom.push(geom778);

    cAlt779 = new google.maps.LatLng(rstinL[1557],rstinL[1558],noWrap=true);
    var geom779 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt779);
    rstrGeom.push(geom779);

    cAlt780 = new google.maps.LatLng(rstinL[1559],rstinL[1560],noWrap=true);
    var geom780 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt780);
    rstrGeom.push(geom780);

    cAlt781 = new google.maps.LatLng(rstinL[1561],rstinL[1562],noWrap=true);
    var geom781 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt781);
    rstrGeom.push(geom781);

    cAlt782 = new google.maps.LatLng(rstinL[1563],rstinL[1564],noWrap=true);
    var geom782 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt782);
    rstrGeom.push(geom782);

    cAlt783 = new google.maps.LatLng(rstinL[1565],rstinL[1566],noWrap=true);
    var geom783 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt783);
    rstrGeom.push(geom783);

    cAlt784 = new google.maps.LatLng(rstinL[1567],rstinL[1568],noWrap=true);
    var geom784 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt784);
    rstrGeom.push(geom784);

    cAlt785 = new google.maps.LatLng(rstinL[1569],rstinL[1570],noWrap=true);
    var geom785 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt785);
    rstrGeom.push(geom785);

    cAlt786 = new google.maps.LatLng(rstinL[1571],rstinL[1572],noWrap=true);
    var geom786 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt786);
    rstrGeom.push(geom786);

    cAlt787 = new google.maps.LatLng(rstinL[1573],rstinL[1574],noWrap=true);
    var geom787 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt787);
    rstrGeom.push(geom787);

    cAlt788 = new google.maps.LatLng(rstinL[1575],rstinL[1576],noWrap=true);
    var geom788 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt788);
    rstrGeom.push(geom788);

    cAlt789 = new google.maps.LatLng(rstinL[1577],rstinL[1578],noWrap=true);
    var geom789 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt789);
    rstrGeom.push(geom789);

    cAlt790 = new google.maps.LatLng(rstinL[1579],rstinL[1580],noWrap=true);
    var geom790 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt790);
    rstrGeom.push(geom790);

    cAlt791 = new google.maps.LatLng(rstinL[1581],rstinL[1582],noWrap=true);
    var geom791 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt791);
    rstrGeom.push(geom791);

    cAlt792 = new google.maps.LatLng(rstinL[1583],rstinL[1584],noWrap=true);
    var geom792 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt792);
    rstrGeom.push(geom792);

    cAlt793 = new google.maps.LatLng(rstinL[1585],rstinL[1586],noWrap=true);
    var geom793 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt793);
    rstrGeom.push(geom793);

    cAlt794 = new google.maps.LatLng(rstinL[1587],rstinL[1588],noWrap=true);
    var geom794 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt794);
    rstrGeom.push(geom794);

    cAlt795 = new google.maps.LatLng(rstinL[1589],rstinL[1590],noWrap=true);
    var geom795 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt795);
    rstrGeom.push(geom795);

    cAlt796 = new google.maps.LatLng(rstinL[1591],rstinL[1592],noWrap=true);
    var geom796 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt796);
    rstrGeom.push(geom796);

    cAlt797 = new google.maps.LatLng(rstinL[1593],rstinL[1594],noWrap=true);
    var geom797 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt797);
    rstrGeom.push(geom797);

    cAlt798 = new google.maps.LatLng(rstinL[1595],rstinL[1596],noWrap=true);
    var geom798 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt798);
    rstrGeom.push(geom798);

    cAlt799 = new google.maps.LatLng(rstinL[1597],rstinL[1598],noWrap=true);
    var geom799 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt799);
    rstrGeom.push(geom799);

    cAlt800 = new google.maps.LatLng(rstinL[1599],rstinL[1600],noWrap=true);
    var geom800 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt800);
    rstrGeom.push(geom800);

    cAlt801 = new google.maps.LatLng(rstinL[1601],rstinL[1602],noWrap=true);
    var geom801 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt801);
    rstrGeom.push(geom801);

    cAlt802 = new google.maps.LatLng(rstinL[1603],rstinL[1604],noWrap=true);
    var geom802 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt802);
    rstrGeom.push(geom802);

    cAlt803 = new google.maps.LatLng(rstinL[1605],rstinL[1606],noWrap=true);
    var geom803 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt803);
    rstrGeom.push(geom803);

    cAlt804 = new google.maps.LatLng(rstinL[1607],rstinL[1608],noWrap=true);
    var geom804 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt804);
    rstrGeom.push(geom804);

    cAlt805 = new google.maps.LatLng(rstinL[1609],rstinL[1610],noWrap=true);
    var geom805 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt805);
    rstrGeom.push(geom805);

    cAlt806 = new google.maps.LatLng(rstinL[1611],rstinL[1612],noWrap=true);
    var geom806 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt806);
    rstrGeom.push(geom806);

    cAlt807 = new google.maps.LatLng(rstinL[1613],rstinL[1614],noWrap=true);
    var geom807 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt807);
    rstrGeom.push(geom807);

    cAlt808 = new google.maps.LatLng(rstinL[1615],rstinL[1616],noWrap=true);
    var geom808 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt808);
    rstrGeom.push(geom808);

    cAlt809 = new google.maps.LatLng(rstinL[1617],rstinL[1618],noWrap=true);
    var geom809 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt809);
    rstrGeom.push(geom809);

    cAlt810 = new google.maps.LatLng(rstinL[1619],rstinL[1620],noWrap=true);
    var geom810 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt810);
    rstrGeom.push(geom810);

    cAlt811 = new google.maps.LatLng(rstinL[1621],rstinL[1622],noWrap=true);
    var geom811 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt811);
    rstrGeom.push(geom811);

    cAlt812 = new google.maps.LatLng(rstinL[1623],rstinL[1624],noWrap=true);
    var geom812 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt812);
    rstrGeom.push(geom812);

    cAlt813 = new google.maps.LatLng(rstinL[1625],rstinL[1626],noWrap=true);
    var geom813 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt813);
    rstrGeom.push(geom813);

    cAlt814 = new google.maps.LatLng(rstinL[1627],rstinL[1628],noWrap=true);
    var geom814 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt814);
    rstrGeom.push(geom814);

    cAlt815 = new google.maps.LatLng(rstinL[1629],rstinL[1630],noWrap=true);
    var geom815 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt815);
    rstrGeom.push(geom815);

    cAlt816 = new google.maps.LatLng(rstinL[1631],rstinL[1632],noWrap=true);
    var geom816 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt816);
    rstrGeom.push(geom816);

    cAlt817 = new google.maps.LatLng(rstinL[1633],rstinL[1634],noWrap=true);
    var geom817 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt817);
    rstrGeom.push(geom817);

    cAlt818 = new google.maps.LatLng(rstinL[1635],rstinL[1636],noWrap=true);
    var geom818 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt818);
    rstrGeom.push(geom818);

    cAlt819 = new google.maps.LatLng(rstinL[1637],rstinL[1638],noWrap=true);
    var geom819 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt819);
    rstrGeom.push(geom819);

    cAlt820 = new google.maps.LatLng(rstinL[1639],rstinL[1640],noWrap=true);
    var geom820 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt820);
    rstrGeom.push(geom820);

    cAlt821 = new google.maps.LatLng(rstinL[1641],rstinL[1642],noWrap=true);
    var geom821 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt821);
    rstrGeom.push(geom821);

    cAlt822 = new google.maps.LatLng(rstinL[1643],rstinL[1644],noWrap=true);
    var geom822 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt822);
    rstrGeom.push(geom822);

    cAlt823 = new google.maps.LatLng(rstinL[1645],rstinL[1646],noWrap=true);
    var geom823 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt823);
    rstrGeom.push(geom823);

    cAlt824 = new google.maps.LatLng(rstinL[1647],rstinL[1648],noWrap=true);
    var geom824 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt824);
    rstrGeom.push(geom824);

    cAlt825 = new google.maps.LatLng(rstinL[1649],rstinL[1650],noWrap=true);
    var geom825 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt825);
    rstrGeom.push(geom825);

    cAlt826 = new google.maps.LatLng(rstinL[1651],rstinL[1652],noWrap=true);
    var geom826 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt826);
    rstrGeom.push(geom826);

    cAlt827 = new google.maps.LatLng(rstinL[1653],rstinL[1654],noWrap=true);
    var geom827 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt827);
    rstrGeom.push(geom827);

    cAlt828 = new google.maps.LatLng(rstinL[1655],rstinL[1656],noWrap=true);
    var geom828 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt828);
    rstrGeom.push(geom828);

    cAlt829 = new google.maps.LatLng(rstinL[1657],rstinL[1658],noWrap=true);
    var geom829 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt829);
    rstrGeom.push(geom829);

    cAlt830 = new google.maps.LatLng(rstinL[1659],rstinL[1660],noWrap=true);
    var geom830 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt830);
    rstrGeom.push(geom830);

    cAlt831 = new google.maps.LatLng(rstinL[1661],rstinL[1662],noWrap=true);
    var geom831 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt831);
    rstrGeom.push(geom831);

    cAlt832 = new google.maps.LatLng(rstinL[1663],rstinL[1664],noWrap=true);
    var geom832 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt832);
    rstrGeom.push(geom832);

    cAlt833 = new google.maps.LatLng(rstinL[1665],rstinL[1666],noWrap=true);
    var geom833 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt833);
    rstrGeom.push(geom833);

    cAlt834 = new google.maps.LatLng(rstinL[1667],rstinL[1668],noWrap=true);
    var geom834 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt834);
    rstrGeom.push(geom834);

    cAlt835 = new google.maps.LatLng(rstinL[1669],rstinL[1670],noWrap=true);
    var geom835 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt835);
    rstrGeom.push(geom835);

    cAlt836 = new google.maps.LatLng(rstinL[1671],rstinL[1672],noWrap=true);
    var geom836 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt836);
    rstrGeom.push(geom836);

    cAlt837 = new google.maps.LatLng(rstinL[1673],rstinL[1674],noWrap=true);
    var geom837 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt837);
    rstrGeom.push(geom837);

    cAlt838 = new google.maps.LatLng(rstinL[1675],rstinL[1676],noWrap=true);
    var geom838 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt838);
    rstrGeom.push(geom838);

    cAlt839 = new google.maps.LatLng(rstinL[1677],rstinL[1678],noWrap=true);
    var geom839 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt839);
    rstrGeom.push(geom839);

    cAlt840 = new google.maps.LatLng(rstinL[1679],rstinL[1680],noWrap=true);
    var geom840 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt840);
    rstrGeom.push(geom840);

    cAlt841 = new google.maps.LatLng(rstinL[1681],rstinL[1682],noWrap=true);
    var geom841 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt841);
    rstrGeom.push(geom841);

    cAlt842 = new google.maps.LatLng(rstinL[1683],rstinL[1684],noWrap=true);
    var geom842 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt842);
    rstrGeom.push(geom842);

    cAlt843 = new google.maps.LatLng(rstinL[1685],rstinL[1686],noWrap=true);
    var geom843 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt843);
    rstrGeom.push(geom843);

    cAlt844 = new google.maps.LatLng(rstinL[1687],rstinL[1688],noWrap=true);
    var geom844 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt844);
    rstrGeom.push(geom844);

    cAlt845 = new google.maps.LatLng(rstinL[1689],rstinL[1690],noWrap=true);
    var geom845 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt845);
    rstrGeom.push(geom845);

    cAlt846 = new google.maps.LatLng(rstinL[1691],rstinL[1692],noWrap=true);
    var geom846 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt846);
    rstrGeom.push(geom846);

    cAlt847 = new google.maps.LatLng(rstinL[1693],rstinL[1694],noWrap=true);
    var geom847 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt847);
    rstrGeom.push(geom847);

    cAlt848 = new google.maps.LatLng(rstinL[1695],rstinL[1696],noWrap=true);
    var geom848 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt848);
    rstrGeom.push(geom848);

    cAlt849 = new google.maps.LatLng(rstinL[1697],rstinL[1698],noWrap=true);
    var geom849 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt849);
    rstrGeom.push(geom849);

    cAlt850 = new google.maps.LatLng(rstinL[1699],rstinL[1700],noWrap=true);
    var geom850 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt850);
    rstrGeom.push(geom850);

    cAlt851 = new google.maps.LatLng(rstinL[1701],rstinL[1702],noWrap=true);
    var geom851 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt851);
    rstrGeom.push(geom851);

    cAlt852 = new google.maps.LatLng(rstinL[1703],rstinL[1704],noWrap=true);
    var geom852 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt852);
    rstrGeom.push(geom852);

    cAlt853 = new google.maps.LatLng(rstinL[1705],rstinL[1706],noWrap=true);
    var geom853 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt853);
    rstrGeom.push(geom853);

    cAlt854 = new google.maps.LatLng(rstinL[1707],rstinL[1708],noWrap=true);
    var geom854 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt854);
    rstrGeom.push(geom854);

    cAlt855 = new google.maps.LatLng(rstinL[1709],rstinL[1710],noWrap=true);
    var geom855 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt855);
    rstrGeom.push(geom855);

    cAlt856 = new google.maps.LatLng(rstinL[1711],rstinL[1712],noWrap=true);
    var geom856 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt856);
    rstrGeom.push(geom856);

    cAlt857 = new google.maps.LatLng(rstinL[1713],rstinL[1714],noWrap=true);
    var geom857 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt857);
    rstrGeom.push(geom857);

    cAlt858 = new google.maps.LatLng(rstinL[1715],rstinL[1716],noWrap=true);
    var geom858 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt858);
    rstrGeom.push(geom858);

    cAlt859 = new google.maps.LatLng(rstinL[1717],rstinL[1718],noWrap=true);
    var geom859 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt859);
    rstrGeom.push(geom859);

    cAlt860 = new google.maps.LatLng(rstinL[1719],rstinL[1720],noWrap=true);
    var geom860 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt860);
    rstrGeom.push(geom860);

    cAlt861 = new google.maps.LatLng(rstinL[1721],rstinL[1722],noWrap=true);
    var geom861 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt861);
    rstrGeom.push(geom861);

    cAlt862 = new google.maps.LatLng(rstinL[1723],rstinL[1724],noWrap=true);
    var geom862 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt862);
    rstrGeom.push(geom862);

    cAlt863 = new google.maps.LatLng(rstinL[1725],rstinL[1726],noWrap=true);
    var geom863 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt863);
    rstrGeom.push(geom863);

    cAlt864 = new google.maps.LatLng(rstinL[1727],rstinL[1728],noWrap=true);
    var geom864 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt864);
    rstrGeom.push(geom864);

    cAlt865 = new google.maps.LatLng(rstinL[1729],rstinL[1730],noWrap=true);
    var geom865 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt865);
    rstrGeom.push(geom865);

    cAlt866 = new google.maps.LatLng(rstinL[1731],rstinL[1732],noWrap=true);
    var geom866 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt866);
    rstrGeom.push(geom866);

    cAlt867 = new google.maps.LatLng(rstinL[1733],rstinL[1734],noWrap=true);
    var geom867 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt867);
    rstrGeom.push(geom867);

    cAlt868 = new google.maps.LatLng(rstinL[1735],rstinL[1736],noWrap=true);
    var geom868 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt868);
    rstrGeom.push(geom868);

    cAlt869 = new google.maps.LatLng(rstinL[1737],rstinL[1738],noWrap=true);
    var geom869 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt869);
    rstrGeom.push(geom869);

    cAlt870 = new google.maps.LatLng(rstinL[1739],rstinL[1740],noWrap=true);
    var geom870 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt870);
    rstrGeom.push(geom870);

    cAlt871 = new google.maps.LatLng(rstinL[1741],rstinL[1742],noWrap=true);
    var geom871 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt871);
    rstrGeom.push(geom871);

    cAlt872 = new google.maps.LatLng(rstinL[1743],rstinL[1744],noWrap=true);
    var geom872 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt872);
    rstrGeom.push(geom872);

    cAlt873 = new google.maps.LatLng(rstinL[1745],rstinL[1746],noWrap=true);
    var geom873 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt873);
    rstrGeom.push(geom873);

    cAlt874 = new google.maps.LatLng(rstinL[1747],rstinL[1748],noWrap=true);
    var geom874 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt874);
    rstrGeom.push(geom874);

    cAlt875 = new google.maps.LatLng(rstinL[1749],rstinL[1750],noWrap=true);
    var geom875 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt875);
    rstrGeom.push(geom875);

    cAlt876 = new google.maps.LatLng(rstinL[1751],rstinL[1752],noWrap=true);
    var geom876 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt876);
    rstrGeom.push(geom876);

    cAlt877 = new google.maps.LatLng(rstinL[1753],rstinL[1754],noWrap=true);
    var geom877 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt877);
    rstrGeom.push(geom877);

    cAlt878 = new google.maps.LatLng(rstinL[1755],rstinL[1756],noWrap=true);
    var geom878 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt878);
    rstrGeom.push(geom878);

    cAlt879 = new google.maps.LatLng(rstinL[1757],rstinL[1758],noWrap=true);
    var geom879 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt879);
    rstrGeom.push(geom879);

    cAlt880 = new google.maps.LatLng(rstinL[1759],rstinL[1760],noWrap=true);
    var geom880 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt880);
    rstrGeom.push(geom880);

    cAlt881 = new google.maps.LatLng(rstinL[1761],rstinL[1762],noWrap=true);
    var geom881 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt881);
    rstrGeom.push(geom881);

    cAlt882 = new google.maps.LatLng(rstinL[1763],rstinL[1764],noWrap=true);
    var geom882 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt882);
    rstrGeom.push(geom882);

    cAlt883 = new google.maps.LatLng(rstinL[1765],rstinL[1766],noWrap=true);
    var geom883 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt883);
    rstrGeom.push(geom883);

    cAlt884 = new google.maps.LatLng(rstinL[1767],rstinL[1768],noWrap=true);
    var geom884 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt884);
    rstrGeom.push(geom884);

    cAlt885 = new google.maps.LatLng(rstinL[1769],rstinL[1770],noWrap=true);
    var geom885 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt885);
    rstrGeom.push(geom885);

    cAlt886 = new google.maps.LatLng(rstinL[1771],rstinL[1772],noWrap=true);
    var geom886 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt886);
    rstrGeom.push(geom886);

    cAlt887 = new google.maps.LatLng(rstinL[1773],rstinL[1774],noWrap=true);
    var geom887 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt887);
    rstrGeom.push(geom887);

    cAlt888 = new google.maps.LatLng(rstinL[1775],rstinL[1776],noWrap=true);
    var geom888 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt888);
    rstrGeom.push(geom888);

    cAlt889 = new google.maps.LatLng(rstinL[1777],rstinL[1778],noWrap=true);
    var geom889 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt889);
    rstrGeom.push(geom889);

    cAlt890 = new google.maps.LatLng(rstinL[1779],rstinL[1780],noWrap=true);
    var geom890 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt890);
    rstrGeom.push(geom890);

    cAlt891 = new google.maps.LatLng(rstinL[1781],rstinL[1782],noWrap=true);
    var geom891 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt891);
    rstrGeom.push(geom891);

    cAlt892 = new google.maps.LatLng(rstinL[1783],rstinL[1784],noWrap=true);
    var geom892 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt892);
    rstrGeom.push(geom892);

    cAlt893 = new google.maps.LatLng(rstinL[1785],rstinL[1786],noWrap=true);
    var geom893 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt893);
    rstrGeom.push(geom893);

    cAlt894 = new google.maps.LatLng(rstinL[1787],rstinL[1788],noWrap=true);
    var geom894 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt894);
    rstrGeom.push(geom894);

    cAlt895 = new google.maps.LatLng(rstinL[1789],rstinL[1790],noWrap=true);
    var geom895 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt895);
    rstrGeom.push(geom895);

    cAlt896 = new google.maps.LatLng(rstinL[1791],rstinL[1792],noWrap=true);
    var geom896 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt896);
    rstrGeom.push(geom896);

    cAlt897 = new google.maps.LatLng(rstinL[1793],rstinL[1794],noWrap=true);
    var geom897 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt897);
    rstrGeom.push(geom897);

    cAlt898 = new google.maps.LatLng(rstinL[1795],rstinL[1796],noWrap=true);
    var geom898 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt898);
    rstrGeom.push(geom898);

    cAlt899 = new google.maps.LatLng(rstinL[1797],rstinL[1798],noWrap=true);
    var geom899 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt899);
    rstrGeom.push(geom899);

    cAlt900 = new google.maps.LatLng(rstinL[1799],rstinL[1800],noWrap=true);
    var geom900 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt900);
    rstrGeom.push(geom900);

    cAlt901 = new google.maps.LatLng(rstinL[1801],rstinL[1802],noWrap=true);
    var geom901 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt901);
    rstrGeom.push(geom901);

    cAlt902 = new google.maps.LatLng(rstinL[1803],rstinL[1804],noWrap=true);
    var geom902 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt902);
    rstrGeom.push(geom902);

    cAlt903 = new google.maps.LatLng(rstinL[1805],rstinL[1806],noWrap=true);
    var geom903 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt903);
    rstrGeom.push(geom903);

    cAlt904 = new google.maps.LatLng(rstinL[1807],rstinL[1808],noWrap=true);
    var geom904 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt904);
    rstrGeom.push(geom904);

    cAlt905 = new google.maps.LatLng(rstinL[1809],rstinL[1810],noWrap=true);
    var geom905 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt905);
    rstrGeom.push(geom905);

    cAlt906 = new google.maps.LatLng(rstinL[1811],rstinL[1812],noWrap=true);
    var geom906 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt906);
    rstrGeom.push(geom906);

    cAlt907 = new google.maps.LatLng(rstinL[1813],rstinL[1814],noWrap=true);
    var geom907 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt907);
    rstrGeom.push(geom907);

    cAlt908 = new google.maps.LatLng(rstinL[1815],rstinL[1816],noWrap=true);
    var geom908 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt908);
    rstrGeom.push(geom908);

    cAlt909 = new google.maps.LatLng(rstinL[1817],rstinL[1818],noWrap=true);
    var geom909 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt909);
    rstrGeom.push(geom909);

    cAlt910 = new google.maps.LatLng(rstinL[1819],rstinL[1920],noWrap=true);
    var geom910 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt910);
    rstrGeom.push(geom910);

    cAlt911 = new google.maps.LatLng(rstinL[1821],rstinL[1822],noWrap=true);
    var geom911 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt911);
    rstrGeom.push(geom911);

    cAlt912 = new google.maps.LatLng(rstinL[1823],rstinL[1824],noWrap=true);
    var geom912 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt912);
    rstrGeom.push(geom912);

    cAlt913 = new google.maps.LatLng(rstinL[1825],rstinL[1826],noWrap=true);
    var geom913 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt913);
    rstrGeom.push(geom913);

    cAlt914 = new google.maps.LatLng(rstinL[1827],rstinL[1828],noWrap=true);
    var geom914 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt914);
    rstrGeom.push(geom914);

    cAlt915 = new google.maps.LatLng(rstinL[1829],rstinL[1830],noWrap=true);
    var geom915 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt915);
    rstrGeom.push(geom915);

    cAlt916 = new google.maps.LatLng(rstinL[1831],rstinL[1832],noWrap=true);
    var geom916 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt916);
    rstrGeom.push(geom916);

    cAlt917 = new google.maps.LatLng(rstinL[1833],rstinL[1834],noWrap=true);
    var geom917 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt917);
    rstrGeom.push(geom917);

    cAlt918 = new google.maps.LatLng(rstinL[1835],rstinL[1836],noWrap=true);
    var geom918 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt918);
    rstrGeom.push(geom918);

    cAlt919 = new google.maps.LatLng(rstinL[1837],rstinL[1838],noWrap=true);
    var geom919 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt919);
    rstrGeom.push(geom919);

    cAlt920 = new google.maps.LatLng(rstinL[1839],rstinL[1840],noWrap=true);
    var geom920 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt920);
    rstrGeom.push(geom920);

    cAlt921 = new google.maps.LatLng(rstinL[1841],rstinL[1842],noWrap=true);
    var geom921 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt921);
    rstrGeom.push(geom921);

    cAlt922 = new google.maps.LatLng(rstinL[1843],rstinL[1844],noWrap=true);
    var geom922 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt922);
    rstrGeom.push(geom922);

    cAlt923 = new google.maps.LatLng(rstinL[1845],rstinL[1846],noWrap=true);
    var geom923 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt923);
    rstrGeom.push(geom923);

    cAlt924 = new google.maps.LatLng(rstinL[1847],rstinL[1848],noWrap=true);
    var geom924 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt924);
    rstrGeom.push(geom924);

    cAlt925 = new google.maps.LatLng(rstinL[1849],rstinL[1850],noWrap=true);
    var geom925 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt925);
    rstrGeom.push(geom925);

    cAlt926 = new google.maps.LatLng(rstinL[1851],rstinL[1852],noWrap=true);
    var geom926 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt926);
    rstrGeom.push(geom926);

    cAlt927 = new google.maps.LatLng(rstinL[1853],rstinL[1854],noWrap=true);
    var geom927 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt927);
    rstrGeom.push(geom927);

    cAlt928 = new google.maps.LatLng(rstinL[1855],rstinL[1856],noWrap=true);
    var geom928 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt928);
    rstrGeom.push(geom928);

    cAlt929 = new google.maps.LatLng(rstinL[1857],rstinL[1858],noWrap=true);
    var geom929 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt929);
    rstrGeom.push(geom929);

    cAlt930 = new google.maps.LatLng(rstinL[1859],rstinL[1860],noWrap=true);
    var geom930 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt930);
    rstrGeom.push(geom930);

    cAlt931 = new google.maps.LatLng(rstinL[1861],rstinL[1862],noWrap=true);
    var geom931 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt931);
    rstrGeom.push(geom931);

    cAlt932 = new google.maps.LatLng(rstinL[1863],rstinL[1864],noWrap=true);
    var geom932 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt932);
    rstrGeom.push(geom932);

    cAlt933 = new google.maps.LatLng(rstinL[1865],rstinL[1866],noWrap=true);
    var geom933 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt933);
    rstrGeom.push(geom933);

    cAlt934 = new google.maps.LatLng(rstinL[1867],rstinL[1868],noWrap=true);
    var geom934 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt934);
    rstrGeom.push(geom934);

    cAlt935 = new google.maps.LatLng(rstinL[1869],rstinL[1870],noWrap=true);
    var geom935 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt935);
    rstrGeom.push(geom935);

    cAlt936 = new google.maps.LatLng(rstinL[1871],rstinL[1872],noWrap=true);
    var geom936 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt936);
    rstrGeom.push(geom936);

    cAlt937 = new google.maps.LatLng(rstinL[1873],rstinL[1874],noWrap=true);
    var geom937 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt937);
    rstrGeom.push(geom937);

    cAlt938 = new google.maps.LatLng(rstinL[1875],rstinL[1876],noWrap=true);
    var geom938 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt938);
    rstrGeom.push(geom938);

    cAlt939 = new google.maps.LatLng(rstinL[1877],rstinL[1878],noWrap=true);
    var geom939 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt939);
    rstrGeom.push(geom939);

    cAlt940 = new google.maps.LatLng(rstinL[1879],rstinL[1880],noWrap=true);
    var geom940 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt940);
    rstrGeom.push(geom940);

    cAlt941 = new google.maps.LatLng(rstinL[1881],rstinL[1882],noWrap=true);
    var geom941 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt941);
    rstrGeom.push(geom941);

    cAlt942 = new google.maps.LatLng(rstinL[1883],rstinL[1884],noWrap=true);
    var geom942 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt942);
    rstrGeom.push(geom942);

    cAlt943 = new google.maps.LatLng(rstinL[1885],rstinL[1886],noWrap=true);
    var geom943 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt943);
    rstrGeom.push(geom943);

    cAlt944 = new google.maps.LatLng(rstinL[1887],rstinL[1888],noWrap=true);
    var geom944 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt944);
    rstrGeom.push(geom944);

    cAlt945 = new google.maps.LatLng(rstinL[1889],rstinL[1890],noWrap=true);
    var geom945 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt945);
    rstrGeom.push(geom945);

    cAlt946 = new google.maps.LatLng(rstinL[1891],rstinL[1892],noWrap=true);
    var geom946 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt946);
    rstrGeom.push(geom946);

    cAlt947 = new google.maps.LatLng(rstinL[1893],rstinL[1894],noWrap=true);
    var geom947 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt947);
    rstrGeom.push(geom947);

    cAlt948 = new google.maps.LatLng(rstinL[1895],rstinL[1896],noWrap=true);
    var geom948 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt948);
    rstrGeom.push(geom948);

    cAlt949 = new google.maps.LatLng(rstinL[1897],rstinL[1898],noWrap=true);
    var geom949 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt949);
    rstrGeom.push(geom949);

    cAlt950 = new google.maps.LatLng(rstinL[1899],rstinL[1900],noWrap=true);
    var geom950 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt950);
    rstrGeom.push(geom950);

    cAlt951 = new google.maps.LatLng(rstinL[1901],rstinL[1902],noWrap=true);
    var geom951 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt951);
    rstrGeom.push(geom951);

    cAlt952 = new google.maps.LatLng(rstinL[1903],rstinL[1904],noWrap=true);
    var geom952 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt952);
    rstrGeom.push(geom952);

    cAlt953 = new google.maps.LatLng(rstinL[1905],rstinL[1906],noWrap=true);
    var geom953 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt953);
    rstrGeom.push(geom953);

    cAlt954 = new google.maps.LatLng(rstinL[1907],rstinL[1908],noWrap=true);
    var geom954 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt954);
    rstrGeom.push(geom954);

    cAlt955 = new google.maps.LatLng(rstinL[1909],rstinL[1910],noWrap=true);
    var geom955 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt955);
    rstrGeom.push(geom955);

    cAlt956 = new google.maps.LatLng(rstinL[1911],rstinL[1912],noWrap=true);
    var geom956 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt956);
    rstrGeom.push(geom956);

    cAlt957 = new google.maps.LatLng(rstinL[1913],rstinL[1914],noWrap=true);
    var geom957 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt957);
    rstrGeom.push(geom957);

    cAlt958 = new google.maps.LatLng(rstinL[1915],rstinL[1916],noWrap=true);
    var geom958 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt958);
    rstrGeom.push(geom958);

    cAlt959 = new google.maps.LatLng(rstinL[1917],rstinL[1918],noWrap=true);
    var geom959 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt959);
    rstrGeom.push(geom959);

    cAlt960 = new google.maps.LatLng(rstinL[1919],rstinL[1920],noWrap=true);
    var geom960 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt960);
    rstrGeom.push(geom960);

    cAlt961 = new google.maps.LatLng(rstinL[1921],rstinL[1922],noWrap=true);
    var geom961 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt961);
    rstrGeom.push(geom961);

    cAlt962 = new google.maps.LatLng(rstinL[1923],rstinL[1924],noWrap=true);
    var geom962 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt962);
    rstrGeom.push(geom962);

    cAlt963 = new google.maps.LatLng(rstinL[1925],rstinL[1926],noWrap=true);
    var geom963 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt963);
    rstrGeom.push(geom963);

    cAlt964 = new google.maps.LatLng(rstinL[1927],rstinL[1928],noWrap=true);
    var geom964 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt964);
    rstrGeom.push(geom964);

    cAlt965 = new google.maps.LatLng(rstinL[1929],rstinL[1930],noWrap=true);
    var geom965 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt965);
    rstrGeom.push(geom965);

    cAlt966 = new google.maps.LatLng(rstinL[1931],rstinL[1932],noWrap=true);
    var geom966 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt966);
    rstrGeom.push(geom966);

    cAlt967 = new google.maps.LatLng(rstinL[1933],rstinL[1934],noWrap=true);
    var geom967 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt967);
    rstrGeom.push(geom967);

    cAlt968 = new google.maps.LatLng(rstinL[1935],rstinL[1936],noWrap=true);
    var geom968 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt968);
    rstrGeom.push(geom968);

    cAlt969 = new google.maps.LatLng(rstinL[1937],rstinL[1938],noWrap=true);
    var geom969 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt969);
    rstrGeom.push(geom969);

    cAlt970 = new google.maps.LatLng(rstinL[1939],rstinL[1940],noWrap=true);
    var geom970 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt970);
    rstrGeom.push(geom970);

    cAlt971 = new google.maps.LatLng(rstinL[1941],rstinL[1942],noWrap=true);
    var geom971 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt971);
    rstrGeom.push(geom971);

    cAlt972 = new google.maps.LatLng(rstinL[1943],rstinL[1944],noWrap=true);
    var geom972 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt972);
    rstrGeom.push(geom972);

    cAlt973 = new google.maps.LatLng(rstinL[1945],rstinL[1946],noWrap=true);
    var geom973 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt973);
    rstrGeom.push(geom973);

    cAlt974 = new google.maps.LatLng(rstinL[1947],rstinL[1948],noWrap=true);
    var geom974 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt974);
    rstrGeom.push(geom974);

    cAlt975 = new google.maps.LatLng(rstinL[1949],rstinL[1950],noWrap=true);
    var geom975 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt975);
    rstrGeom.push(geom975);

    cAlt976 = new google.maps.LatLng(rstinL[1951],rstinL[1952],noWrap=true);
    var geom976 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt976);
    rstrGeom.push(geom976);

    cAlt977 = new google.maps.LatLng(rstinL[1953],rstinL[1954],noWrap=true);
    var geom977 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt977);
    rstrGeom.push(geom977);

    cAlt978 = new google.maps.LatLng(rstinL[1955],rstinL[1956],noWrap=true);
    var geom978 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt978);
    rstrGeom.push(geom978);

    cAlt979 = new google.maps.LatLng(rstinL[1957],rstinL[1958],noWrap=true);
    var geom979 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt979);
    rstrGeom.push(geom979);

    cAlt980 = new google.maps.LatLng(rstinL[1959],rstinL[1960],noWrap=true);
    var geom980 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt980);
    rstrGeom.push(geom980);

    cAlt981 = new google.maps.LatLng(rstinL[1961],rstinL[1962],noWrap=true);
    var geom981 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt981);
    rstrGeom.push(geom981);

    cAlt982 = new google.maps.LatLng(rstinL[1963],rstinL[1964],noWrap=true);
    var geom982 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt982);
    rstrGeom.push(geom982);

    cAlt983 = new google.maps.LatLng(rstinL[1965],rstinL[1966],noWrap=true);
    var geom983 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt983);
    rstrGeom.push(geom983);

    cAlt984 = new google.maps.LatLng(rstinL[1967],rstinL[1968],noWrap=true);
    var geom984 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt984);
    rstrGeom.push(geom984);

    cAlt985 = new google.maps.LatLng(rstinL[1969],rstinL[1970],noWrap=true);
    var geom985 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt985);
    rstrGeom.push(geom985);

    cAlt986 = new google.maps.LatLng(rstinL[1971],rstinL[1972],noWrap=true);
    var geom986 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt986);
    rstrGeom.push(geom986);

    cAlt987 = new google.maps.LatLng(rstinL[1973],rstinL[1974],noWrap=true);
    var geom987 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt987);
    rstrGeom.push(geom987);

    cAlt988 = new google.maps.LatLng(rstinL[1975],rstinL[1976],noWrap=true);
    var geom988 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt988);
    rstrGeom.push(geom988);

    cAlt989 = new google.maps.LatLng(rstinL[1977],rstinL[1978],noWrap=true);
    var geom989 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt989);
    rstrGeom.push(geom989);

    cAlt990 = new google.maps.LatLng(rstinL[1979],rstinL[1980],noWrap=true);
    var geom990 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt990);
    rstrGeom.push(geom990);

    cAlt991 = new google.maps.LatLng(rstinL[1981],rstinL[1982],noWrap=true);
    var geom991 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt991);
    rstrGeom.push(geom991);

    cAlt992 = new google.maps.LatLng(rstinL[1983],rstinL[1984],noWrap=true);
    var geom992 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt992);
    rstrGeom.push(geom992);

    cAlt993 = new google.maps.LatLng(rstinL[1985],rstinL[1986],noWrap=true);
    var geom993 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt993);
    rstrGeom.push(geom993);

    cAlt994 = new google.maps.LatLng(rstinL[1987],rstinL[1988],noWrap=true);
    var geom994 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt994);
    rstrGeom.push(geom994);

    cAlt995 = new google.maps.LatLng(rstinL[1989],rstinL[1990],noWrap=true);
    var geom995 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt995);
    rstrGeom.push(geom995);

    cAlt996 = new google.maps.LatLng(rstinL[1991],rstinL[1992],noWrap=true);
    var geom996 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt996);
    rstrGeom.push(geom996);

    cAlt997 = new google.maps.LatLng(rstinL[1993],rstinL[1994],noWrap=true);
    var geom997 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt997);
    rstrGeom.push(geom997);

    cAlt998 = new google.maps.LatLng(rstinL[1995],rstinL[1996],noWrap=true);
    var geom998 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt998);
    rstrGeom.push(geom998);

    cAlt999 = new google.maps.LatLng(rstinL[1997],rstinL[1998],noWrap=true);
    var geom999 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt999);
    rstrGeom.push(geom999);

    cAlt1000 = new google.maps.LatLng(rstinL[1999],rstinL[2000],noWrap=true);
    var geom1000 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1000);
    rstrGeom.push(geom1000);

    cAlt1001 = new google.maps.LatLng(rstinL[2001],rstinL[2002],noWrap=true);
    var geom1001 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1001);
    rstrGeom.push(geom1001);

    cAlt1002 = new google.maps.LatLng(rstinL[2003],rstinL[2004],noWrap=true);
    var geom1002 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1002);
    rstrGeom.push(geom1002);

    cAlt1003 = new google.maps.LatLng(rstinL[2005],rstinL[2006],noWrap=true);
    var geom1003 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1003);
    rstrGeom.push(geom1003);

    cAlt1004 = new google.maps.LatLng(rstinL[2007],rstinL[2008],noWrap=true);
    var geom1004 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1004);
    rstrGeom.push(geom1004);

    cAlt1005 = new google.maps.LatLng(rstinL[2009],rstinL[2010],noWrap=true);
    var geom1005 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1005);
    rstrGeom.push(geom1005);

    cAlt1006 = new google.maps.LatLng(rstinL[2011],rstinL[2012],noWrap=true);
    var geom1006 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1006);
    rstrGeom.push(geom1006);

    cAlt1007 = new google.maps.LatLng(rstinL[2013],rstinL[2014],noWrap=true);
    var geom1007 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1007);
    rstrGeom.push(geom1007);

    cAlt1008 = new google.maps.LatLng(rstinL[2015],rstinL[2016],noWrap=true);
    var geom1008 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1008);
    rstrGeom.push(geom1008);

    cAlt1009 = new google.maps.LatLng(rstinL[2017],rstinL[2018],noWrap=true);
    var geom1009 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1009);
    rstrGeom.push(geom1009);

    cAlt1010 = new google.maps.LatLng(rstinL[2019],rstinL[2020],noWrap=true);
    var geom1010 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1010);
    rstrGeom.push(geom1010);

    cAlt1011 = new google.maps.LatLng(rstinL[2021],rstinL[2022],noWrap=true);
    var geom1011 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1011);
    rstrGeom.push(geom1011);

    cAlt1012 = new google.maps.LatLng(rstinL[2023],rstinL[2024],noWrap=true);
    var geom1012 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1012);
    rstrGeom.push(geom1012);

    cAlt1013 = new google.maps.LatLng(rstinL[2025],rstinL[2026],noWrap=true);
    var geom1013 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1013);
    rstrGeom.push(geom1013);

    cAlt1014 = new google.maps.LatLng(rstinL[2027],rstinL[2028],noWrap=true);
    var geom1014 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1014);
    rstrGeom.push(geom1014);

    cAlt1015 = new google.maps.LatLng(rstinL[2029],rstinL[2030],noWrap=true);
    var geom1015 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1015);
    rstrGeom.push(geom1015);

    cAlt1016 = new google.maps.LatLng(rstinL[2031],rstinL[2032],noWrap=true);
    var geom1016 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1016);
    rstrGeom.push(geom1016);

    cAlt1017 = new google.maps.LatLng(rstinL[2033],rstinL[2034],noWrap=true);
    var geom1017 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1017);
    rstrGeom.push(geom1017);

    cAlt1018 = new google.maps.LatLng(rstinL[2035],rstinL[2036],noWrap=true);
    var geom1018 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1018);
    rstrGeom.push(geom1018);

    cAlt1019 = new google.maps.LatLng(rstinL[2037],rstinL[2038],noWrap=true);
    var geom1019 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1019);
    rstrGeom.push(geom1019);

    cAlt1020 = new google.maps.LatLng(rstinL[2039],rstinL[2040],noWrap=true);
    var geom1020 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1020);
    rstrGeom.push(geom1020);

    cAlt1021 = new google.maps.LatLng(rstinL[2041],rstinL[2042],noWrap=true);
    var geom1021 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1021);
    rstrGeom.push(geom1021);

    cAlt1022 = new google.maps.LatLng(rstinL[2043],rstinL[2044],noWrap=true);
    var geom1022 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1022);
    rstrGeom.push(geom1022);

    cAlt1023 = new google.maps.LatLng(rstinL[2045],rstinL[2046],noWrap=true);
    var geom1023 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1023);
    rstrGeom.push(geom1023);

    cAlt1024 = new google.maps.LatLng(rstinL[2047],rstinL[2048],noWrap=true);
    var geom1024 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1024);
    rstrGeom.push(geom1024);

    cAlt1025 = new google.maps.LatLng(rstinL[2049],rstinL[2050],noWrap=true);
    var geom1025 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1025);
    rstrGeom.push(geom1025);

    cAlt1026 = new google.maps.LatLng(rstinL[2051],rstinL[2052],noWrap=true);
    var geom1026 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1026);
    rstrGeom.push(geom1026);

    cAlt1027 = new google.maps.LatLng(rstinL[2053],rstinL[2054],noWrap=true);
    var geom1027 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1027);
    rstrGeom.push(geom1027);

    cAlt1028 = new google.maps.LatLng(rstinL[2055],rstinL[2056],noWrap=true);
    var geom1028 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1028);
    rstrGeom.push(geom1028);

    cAlt1029 = new google.maps.LatLng(rstinL[2057],rstinL[2058],noWrap=true);
    var geom1029 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1029);
    rstrGeom.push(geom1029);

    cAlt1030 = new google.maps.LatLng(rstinL[2059],rstinL[2060],noWrap=true);
    var geom1030 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1030);
    rstrGeom.push(geom1030);

    cAlt1031 = new google.maps.LatLng(rstinL[2061],rstinL[2062],noWrap=true);
    var geom1031 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1031);
    rstrGeom.push(geom1031);

    cAlt1032 = new google.maps.LatLng(rstinL[2063],rstinL[2064],noWrap=true);
    var geom1032 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1032);
    rstrGeom.push(geom1032);

    cAlt1033 = new google.maps.LatLng(rstinL[2065],rstinL[2066],noWrap=true);
    var geom1033 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1033);
    rstrGeom.push(geom1033);

    cAlt1034 = new google.maps.LatLng(rstinL[2067],rstinL[2068],noWrap=true);
    var geom1034 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1034);
    rstrGeom.push(geom1034);

    cAlt1035 = new google.maps.LatLng(rstinL[2069],rstinL[2070],noWrap=true);
    var geom1035 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1035);
    rstrGeom.push(geom1035);

    cAlt1036 = new google.maps.LatLng(rstinL[2071],rstinL[2072],noWrap=true);
    var geom1036 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1036);
    rstrGeom.push(geom1036);

    cAlt1037 = new google.maps.LatLng(rstinL[2073],rstinL[2074],noWrap=true);
    var geom1037 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1037);
    rstrGeom.push(geom1037);

    cAlt1038 = new google.maps.LatLng(rstinL[2075],rstinL[2076],noWrap=true);
    var geom1038 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1038);
    rstrGeom.push(geom1038);

    cAlt1039 = new google.maps.LatLng(rstinL[2077],rstinL[2078],noWrap=true);
    var geom1039 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1039);
    rstrGeom.push(geom1039);

    cAlt1040 = new google.maps.LatLng(rstinL[2079],rstinL[2080],noWrap=true);
    var geom1040 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1040);
    rstrGeom.push(geom1040);

    cAlt1041 = new google.maps.LatLng(rstinL[2081],rstinL[2082],noWrap=true);
    var geom1041 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1041);
    rstrGeom.push(geom1041);

    cAlt1042 = new google.maps.LatLng(rstinL[2083],rstinL[2084],noWrap=true);
    var geom1042 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1042);
    rstrGeom.push(geom1042);

    cAlt1043 = new google.maps.LatLng(rstinL[2085],rstinL[2086],noWrap=true);
    var geom1043 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1043);
    rstrGeom.push(geom1043);

    cAlt1044 = new google.maps.LatLng(rstinL[2087],rstinL[2088],noWrap=true);
    var geom1044 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1044);
    rstrGeom.push(geom1044);

    cAlt1045 = new google.maps.LatLng(rstinL[2089],rstinL[2090],noWrap=true);
    var geom1045 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1045);
    rstrGeom.push(geom1045);

    cAlt1046 = new google.maps.LatLng(rstinL[2091],rstinL[2092],noWrap=true);
    var geom1046 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1046);
    rstrGeom.push(geom1046);

    cAlt1047 = new google.maps.LatLng(rstinL[2093],rstinL[2094],noWrap=true);
    var geom1047 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1047);
    rstrGeom.push(geom1047);

    cAlt1048 = new google.maps.LatLng(rstinL[2095],rstinL[2096],noWrap=true);
    var geom1048 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1048);
    rstrGeom.push(geom1048);

    cAlt1049 = new google.maps.LatLng(rstinL[2097],rstinL[2098],noWrap=true);
    var geom1049 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1049);
    rstrGeom.push(geom1049);

    cAlt1050 = new google.maps.LatLng(rstinL[2099],rstinL[2100],noWrap=true);
    var geom1050 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1050);
    rstrGeom.push(geom1050);

    cAlt1051 = new google.maps.LatLng(rstinL[2101],rstinL[2102],noWrap=true);
    var geom1051 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1051);
    rstrGeom.push(geom1051);

    cAlt1052 = new google.maps.LatLng(rstinL[2103],rstinL[2104],noWrap=true);
    var geom1052 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1052);
    rstrGeom.push(geom1052);

    cAlt1053 = new google.maps.LatLng(rstinL[2105],rstinL[2106],noWrap=true);
    var geom1053 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1053);
    rstrGeom.push(geom1053);

    cAlt1054 = new google.maps.LatLng(rstinL[2107],rstinL[2108],noWrap=true);
    var geom1054 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1054);
    rstrGeom.push(geom1054);

    cAlt1055 = new google.maps.LatLng(rstinL[2109],rstinL[2110],noWrap=true);
    var geom1055 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1055);
    rstrGeom.push(geom1055);

    cAlt1056 = new google.maps.LatLng(rstinL[2111],rstinL[2112],noWrap=true);
    var geom1056 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1056);
    rstrGeom.push(geom1056);

    cAlt1057 = new google.maps.LatLng(rstinL[2113],rstinL[2114],noWrap=true);
    var geom1057 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1057);
    rstrGeom.push(geom1057);

    cAlt1058 = new google.maps.LatLng(rstinL[2115],rstinL[2116],noWrap=true);
    var geom1058 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1058);
    rstrGeom.push(geom1058);

    cAlt1059 = new google.maps.LatLng(rstinL[2117],rstinL[2118],noWrap=true);
    var geom1059 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1059);
    rstrGeom.push(geom1059);

    cAlt1060 = new google.maps.LatLng(rstinL[2119],rstinL[2120],noWrap=true);
    var geom1060 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1060);
    rstrGeom.push(geom1060);

    cAlt1061 = new google.maps.LatLng(rstinL[2121],rstinL[2122],noWrap=true);
    var geom1061 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1061);
    rstrGeom.push(geom1061);

    cAlt1062 = new google.maps.LatLng(rstinL[2123],rstinL[2124],noWrap=true);
    var geom1062 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1062);
    rstrGeom.push(geom1062);

    cAlt1063 = new google.maps.LatLng(rstinL[2125],rstinL[2126],noWrap=true);
    var geom1063 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1063);
    rstrGeom.push(geom1063);

    cAlt1064 = new google.maps.LatLng(rstinL[2127],rstinL[2128],noWrap=true);
    var geom1064 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1064);
    rstrGeom.push(geom1064);

    cAlt1065 = new google.maps.LatLng(rstinL[2129],rstinL[2130],noWrap=true);
    var geom1065 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1065);
    rstrGeom.push(geom1065);

    cAlt1066 = new google.maps.LatLng(rstinL[2131],rstinL[2132],noWrap=true);
    var geom1066 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1066);
    rstrGeom.push(geom1066);

    cAlt1067 = new google.maps.LatLng(rstinL[2133],rstinL[2134],noWrap=true);
    var geom1067 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1067);
    rstrGeom.push(geom1067);

    cAlt1068 = new google.maps.LatLng(rstinL[2135],rstinL[2136],noWrap=true);
    var geom1068 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1068);
    rstrGeom.push(geom1068);

    cAlt1069 = new google.maps.LatLng(rstinL[2137],rstinL[2138],noWrap=true);
    var geom1069 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1069);
    rstrGeom.push(geom1069);

    cAlt1070 = new google.maps.LatLng(rstinL[2139],rstinL[2140],noWrap=true);
    var geom1070 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1070);
    rstrGeom.push(geom1070);

    cAlt1071 = new google.maps.LatLng(rstinL[2141],rstinL[2142],noWrap=true);
    var geom1071 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1071);
    rstrGeom.push(geom1071);

    cAlt1072 = new google.maps.LatLng(rstinL[2143],rstinL[2144],noWrap=true);
    var geom1072 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1072);
    rstrGeom.push(geom1072);

    cAlt1073 = new google.maps.LatLng(rstinL[2145],rstinL[2146],noWrap=true);
    var geom1073 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1073);
    rstrGeom.push(geom1073);

    cAlt1074 = new google.maps.LatLng(rstinL[2147],rstinL[2148],noWrap=true);
    var geom1074 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1074);
    rstrGeom.push(geom1074);

    cAlt1075 = new google.maps.LatLng(rstinL[2149],rstinL[2150],noWrap=true);
    var geom1075 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1075);
    rstrGeom.push(geom1075);

    cAlt1076 = new google.maps.LatLng(rstinL[2151],rstinL[2152],noWrap=true);
    var geom1076 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1076);
    rstrGeom.push(geom1076);

    cAlt1077 = new google.maps.LatLng(rstinL[2153],rstinL[2154],noWrap=true);
    var geom1077 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1077);
    rstrGeom.push(geom1077);

    cAlt1078 = new google.maps.LatLng(rstinL[2155],rstinL[2156],noWrap=true);
    var geom1078 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1078);
    rstrGeom.push(geom1078);

    cAlt1079 = new google.maps.LatLng(rstinL[2157],rstinL[2158],noWrap=true);
    var geom1079 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1079);
    rstrGeom.push(geom1079);

    cAlt1080 = new google.maps.LatLng(rstinL[2159],rstinL[2160],noWrap=true);
    var geom1080 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1080);
    rstrGeom.push(geom1080);

    cAlt1081 = new google.maps.LatLng(rstinL[2161],rstinL[2162],noWrap=true);
    var geom1081 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1081);
    rstrGeom.push(geom1081);

    cAlt1082 = new google.maps.LatLng(rstinL[2163],rstinL[2164],noWrap=true);
    var geom1082 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1082);
    rstrGeom.push(geom1082);

    cAlt1083 = new google.maps.LatLng(rstinL[2165],rstinL[2166],noWrap=true);
    var geom1083 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1083);
    rstrGeom.push(geom1083);

    cAlt1084 = new google.maps.LatLng(rstinL[2167],rstinL[2168],noWrap=true);
    var geom1084 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1084);
    rstrGeom.push(geom1084);

    cAlt1085 = new google.maps.LatLng(rstinL[2169],rstinL[2170],noWrap=true);
    var geom1085 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1085);
    rstrGeom.push(geom1085);

    cAlt1086 = new google.maps.LatLng(rstinL[2171],rstinL[2172],noWrap=true);
    var geom1086 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1086);
    rstrGeom.push(geom1086);

    cAlt1087 = new google.maps.LatLng(rstinL[2173],rstinL[2174],noWrap=true);
    var geom1087 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1087);
    rstrGeom.push(geom1087);

    cAlt1088 = new google.maps.LatLng(rstinL[2175],rstinL[2176],noWrap=true);
    var geom1088 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1088);
    rstrGeom.push(geom1088);

    cAlt1089 = new google.maps.LatLng(rstinL[2177],rstinL[2178],noWrap=true);
    var geom1089 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1089);
    rstrGeom.push(geom1089);

    cAlt1090 = new google.maps.LatLng(rstinL[2179],rstinL[2180],noWrap=true);
    var geom1090 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1090);
    rstrGeom.push(geom1090);

    cAlt1091 = new google.maps.LatLng(rstinL[2181],rstinL[2182],noWrap=true);
    var geom1091 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1091);
    rstrGeom.push(geom1091);

    cAlt1092 = new google.maps.LatLng(rstinL[2183],rstinL[2184],noWrap=true);
    var geom1092 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1092);
    rstrGeom.push(geom1092);

    cAlt1093 = new google.maps.LatLng(rstinL[2185],rstinL[2186],noWrap=true);
    var geom1093 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1093);
    rstrGeom.push(geom1093);

    cAlt1094 = new google.maps.LatLng(rstinL[2187],rstinL[2188],noWrap=true);
    var geom1094 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1094);
    rstrGeom.push(geom1094);

    cAlt1095 = new google.maps.LatLng(rstinL[2189],rstinL[2190],noWrap=true);
    var geom1095 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1095);
    rstrGeom.push(geom1095);

    cAlt1096 = new google.maps.LatLng(rstinL[2191],rstinL[2192],noWrap=true);
    var geom1096 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1096);
    rstrGeom.push(geom1096);

    cAlt1097 = new google.maps.LatLng(rstinL[2193],rstinL[2194],noWrap=true);
    var geom1097 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1097);
    rstrGeom.push(geom1097);

    cAlt1098 = new google.maps.LatLng(rstinL[2195],rstinL[2196],noWrap=true);
    var geom1098 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1098);
    rstrGeom.push(geom1098);

    cAlt1099 = new google.maps.LatLng(rstinL[2197],rstinL[2198],noWrap=true);
    var geom1099 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1099);
    rstrGeom.push(geom1099);

    cAlt1100 = new google.maps.LatLng(rstinL[2199],rstinL[2200],noWrap=true);
    var geom1100 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1100);
    rstrGeom.push(geom1100);

    cAlt1101 = new google.maps.LatLng(rstinL[2201],rstinL[2202],noWrap=true);
    var geom1101 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1101);
    rstrGeom.push(geom1101);

    cAlt1102 = new google.maps.LatLng(rstinL[2203],rstinL[2204],noWrap=true);
    var geom1102 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1102);
    rstrGeom.push(geom1102);

    cAlt1103 = new google.maps.LatLng(rstinL[2205],rstinL[2206],noWrap=true);
    var geom1103 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1103);
    rstrGeom.push(geom1103);

    cAlt1104 = new google.maps.LatLng(rstinL[2207],rstinL[2208],noWrap=true);
    var geom1104 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1104);
    rstrGeom.push(geom1104);

    cAlt1105 = new google.maps.LatLng(rstinL[2209],rstinL[2210],noWrap=true);
    var geom1105 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1105);
    rstrGeom.push(geom1105);

    cAlt1106 = new google.maps.LatLng(rstinL[2211],rstinL[2212],noWrap=true);
    var geom1106 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1106);
    rstrGeom.push(geom1106);

    cAlt1107 = new google.maps.LatLng(rstinL[2213],rstinL[2214],noWrap=true);
    var geom1107 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1107);
    rstrGeom.push(geom1107);

    cAlt1108 = new google.maps.LatLng(rstinL[2215],rstinL[2216],noWrap=true);
    var geom1108 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1108);
    rstrGeom.push(geom1108);

    cAlt1109 = new google.maps.LatLng(rstinL[2217],rstinL[2218],noWrap=true);
    var geom1109 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1109);
    rstrGeom.push(geom1109);

    cAlt1110 = new google.maps.LatLng(rstinL[2219],rstinL[2220],noWrap=true);
    var geom1110 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1110);
    rstrGeom.push(geom1110);

    cAlt1111 = new google.maps.LatLng(rstinL[2221],rstinL[2222],noWrap=true);
    var geom1111 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1111);
    rstrGeom.push(geom1111);

    cAlt1112 = new google.maps.LatLng(rstinL[2223],rstinL[2224],noWrap=true);
    var geom1112 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1112);
    rstrGeom.push(geom1112);

    cAlt1113 = new google.maps.LatLng(rstinL[2225],rstinL[2226],noWrap=true);
    var geom1113 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1113);
    rstrGeom.push(geom1113);

    cAlt1114 = new google.maps.LatLng(rstinL[2227],rstinL[2228],noWrap=true);
    var geom1114 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1114);
    rstrGeom.push(geom1114);

    cAlt1115 = new google.maps.LatLng(rstinL[2229],rstinL[2230],noWrap=true);
    var geom1115 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1115);
    rstrGeom.push(geom1115);

    cAlt1116 = new google.maps.LatLng(rstinL[2231],rstinL[2232],noWrap=true);
    var geom1116 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1116);
    rstrGeom.push(geom1116);

    cAlt1117 = new google.maps.LatLng(rstinL[2233],rstinL[2234],noWrap=true);
    var geom1117 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1117);
    rstrGeom.push(geom1117);

    cAlt1118 = new google.maps.LatLng(rstinL[2235],rstinL[2236],noWrap=true);
    var geom1118 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1118);
    rstrGeom.push(geom1118);

    cAlt1119 = new google.maps.LatLng(rstinL[2237],rstinL[2238],noWrap=true);
    var geom1119 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1119);
    rstrGeom.push(geom1119);

    cAlt1120 = new google.maps.LatLng(rstinL[2239],rstinL[2240],noWrap=true);
    var geom1120 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1120);
    rstrGeom.push(geom1120);

    cAlt1121 = new google.maps.LatLng(rstinL[2241],rstinL[2242],noWrap=true);
    var geom1121 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1121);
    rstrGeom.push(geom1121);

    cAlt1122 = new google.maps.LatLng(rstinL[2243],rstinL[2244],noWrap=true);
    var geom1122 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1122);
    rstrGeom.push(geom1122);

    cAlt1123 = new google.maps.LatLng(rstinL[2245],rstinL[2246],noWrap=true);
    var geom1123 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1123);
    rstrGeom.push(geom1123);

    cAlt1124 = new google.maps.LatLng(rstinL[2247],rstinL[2248],noWrap=true);
    var geom1124 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1124);
    rstrGeom.push(geom1124);

    cAlt1125 = new google.maps.LatLng(rstinL[2249],rstinL[2250],noWrap=true);
    var geom1125 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1125);
    rstrGeom.push(geom1125);

    cAlt1126 = new google.maps.LatLng(rstinL[2251],rstinL[2252],noWrap=true);
    var geom1126 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1126);
    rstrGeom.push(geom1126);

    cAlt1127 = new google.maps.LatLng(rstinL[2253],rstinL[2254],noWrap=true);
    var geom1127 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1127);
    rstrGeom.push(geom1127);

    cAlt1128 = new google.maps.LatLng(rstinL[2255],rstinL[2256],noWrap=true);
    var geom1128 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1128);
    rstrGeom.push(geom1128);

    cAlt1129 = new google.maps.LatLng(rstinL[2257],rstinL[2258],noWrap=true);
    var geom1129 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1129);
    rstrGeom.push(geom1129);

    cAlt1130 = new google.maps.LatLng(rstinL[2259],rstinL[2260],noWrap=true);
    var geom1130 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1130);
    rstrGeom.push(geom1130);

    cAlt1131 = new google.maps.LatLng(rstinL[2261],rstinL[2262],noWrap=true);
    var geom1131 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1131);
    rstrGeom.push(geom1131);

    cAlt1132 = new google.maps.LatLng(rstinL[2263],rstinL[2264],noWrap=true);
    var geom1132 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1132);
    rstrGeom.push(geom1132);

    cAlt1133 = new google.maps.LatLng(rstinL[2265],rstinL[2266],noWrap=true);
    var geom1133 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1133);
    rstrGeom.push(geom1133);

    cAlt1134 = new google.maps.LatLng(rstinL[2267],rstinL[2268],noWrap=true);
    var geom1134 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1134);
    rstrGeom.push(geom1134);

    cAlt1135 = new google.maps.LatLng(rstinL[2269],rstinL[2270],noWrap=true);
    var geom1135 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1135);
    rstrGeom.push(geom1135);

    cAlt1136 = new google.maps.LatLng(rstinL[2271],rstinL[2272],noWrap=true);
    var geom1136 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1136);
    rstrGeom.push(geom1136);

    cAlt1137 = new google.maps.LatLng(rstinL[2273],rstinL[2274],noWrap=true);
    var geom1137 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1137);
    rstrGeom.push(geom1137);

    cAlt1138 = new google.maps.LatLng(rstinL[2275],rstinL[2276],noWrap=true);
    var geom1138 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1138);
    rstrGeom.push(geom1138);

    cAlt1139 = new google.maps.LatLng(rstinL[2277],rstinL[2278],noWrap=true);
    var geom1139 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1139);
    rstrGeom.push(geom1139);

    cAlt1140 = new google.maps.LatLng(rstinL[2279],rstinL[2280],noWrap=true);
    var geom1140 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1140);
    rstrGeom.push(geom1140);

    cAlt1141 = new google.maps.LatLng(rstinL[2281],rstinL[2282],noWrap=true);
    var geom1141 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1141);
    rstrGeom.push(geom1141);

    cAlt1142 = new google.maps.LatLng(rstinL[2283],rstinL[2284],noWrap=true);
    var geom1142 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1142);
    rstrGeom.push(geom1142);

    cAlt1143 = new google.maps.LatLng(rstinL[2285],rstinL[2286],noWrap=true);
    var geom1143 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1143);
    rstrGeom.push(geom1143);

    cAlt1144 = new google.maps.LatLng(rstinL[2287],rstinL[2288],noWrap=true);
    var geom1144 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1144);
    rstrGeom.push(geom1144);

    cAlt1145 = new google.maps.LatLng(rstinL[2289],rstinL[2290],noWrap=true);
    var geom1145 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1145);
    rstrGeom.push(geom1145);

    cAlt1146 = new google.maps.LatLng(rstinL[2291],rstinL[2292],noWrap=true);
    var geom1146 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1146);
    rstrGeom.push(geom1146);

    cAlt1147 = new google.maps.LatLng(rstinL[2293],rstinL[2294],noWrap=true);
    var geom1147 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1147);
    rstrGeom.push(geom1147);

    cAlt1148 = new google.maps.LatLng(rstinL[2295],rstinL[2296],noWrap=true);
    var geom1148 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1148);
    rstrGeom.push(geom1148);

    cAlt1149 = new google.maps.LatLng(rstinL[2297],rstinL[2298],noWrap=true);
    var geom1149 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1149);
    rstrGeom.push(geom1149);

    cAlt1150 = new google.maps.LatLng(rstinL[2299],rstinL[2300],noWrap=true);
    var geom1150 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1150);
    rstrGeom.push(geom1150);

    cAlt1151 = new google.maps.LatLng(rstinL[2301],rstinL[2302],noWrap=true);
    var geom1151 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1151);
    rstrGeom.push(geom1151);

    cAlt1152 = new google.maps.LatLng(rstinL[2303],rstinL[2304],noWrap=true);
    var geom1152 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1152);
    rstrGeom.push(geom1152);

    cAlt1153 = new google.maps.LatLng(rstinL[2305],rstinL[2306],noWrap=true);
    var geom1153 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1153);
    rstrGeom.push(geom1153);

    cAlt1154 = new google.maps.LatLng(rstinL[2307],rstinL[2308],noWrap=true);
    var geom1154 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1154);
    rstrGeom.push(geom1154);

    cAlt1155 = new google.maps.LatLng(rstinL[2309],rstinL[2310],noWrap=true);
    var geom1155 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1155);
    rstrGeom.push(geom1155);

    cAlt1156 = new google.maps.LatLng(rstinL[2311],rstinL[2312],noWrap=true);
    var geom1156 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1156);
    rstrGeom.push(geom1156);

    cAlt1157 = new google.maps.LatLng(rstinL[2313],rstinL[2314],noWrap=true);
    var geom1157 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1157);
    rstrGeom.push(geom1157);

    cAlt1158 = new google.maps.LatLng(rstinL[2315],rstinL[2316],noWrap=true);
    var geom1158 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1158);
    rstrGeom.push(geom1158);

    cAlt1159 = new google.maps.LatLng(rstinL[2317],rstinL[2318],noWrap=true);
    var geom1159 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1159);
    rstrGeom.push(geom1159);

    cAlt1160 = new google.maps.LatLng(rstinL[2319],rstinL[2320],noWrap=true);
    var geom1160 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1160);
    rstrGeom.push(geom1160);

    cAlt1161 = new google.maps.LatLng(rstinL[2321],rstinL[2322],noWrap=true);
    var geom1161 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1161);
    rstrGeom.push(geom1161);

    cAlt1162 = new google.maps.LatLng(rstinL[2323],rstinL[2324],noWrap=true);
    var geom1162 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1162);
    rstrGeom.push(geom1162);

    cAlt1163 = new google.maps.LatLng(rstinL[2325],rstinL[2326],noWrap=true);
    var geom1163 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1163);
    rstrGeom.push(geom1163);

    cAlt1164 = new google.maps.LatLng(rstinL[2327],rstinL[2328],noWrap=true);
    var geom1164 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1164);
    rstrGeom.push(geom1164);

    cAlt1165 = new google.maps.LatLng(rstinL[2329],rstinL[2330],noWrap=true);
    var geom1165 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1165);
    rstrGeom.push(geom1165);

    cAlt1166 = new google.maps.LatLng(rstinL[2331],rstinL[2332],noWrap=true);
    var geom1166 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1166);
    rstrGeom.push(geom1166);

    cAlt1167 = new google.maps.LatLng(rstinL[2333],rstinL[2334],noWrap=true);
    var geom1167 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1167);
    rstrGeom.push(geom1167);

    cAlt1168 = new google.maps.LatLng(rstinL[2335],rstinL[2336],noWrap=true);
    var geom1168 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1168);
    rstrGeom.push(geom1168);

    cAlt1169 = new google.maps.LatLng(rstinL[2337],rstinL[2338],noWrap=true);
    var geom1169 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1169);
    rstrGeom.push(geom1169);

    cAlt1170 = new google.maps.LatLng(rstinL[2339],rstinL[2340],noWrap=true);
    var geom1170 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1170);
    rstrGeom.push(geom1170);

    cAlt1171 = new google.maps.LatLng(rstinL[2341],rstinL[2342],noWrap=true);
    var geom1171 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1171);
    rstrGeom.push(geom1171);

    cAlt1172 = new google.maps.LatLng(rstinL[2343],rstinL[2344],noWrap=true);
    var geom1172 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1172);
    rstrGeom.push(geom1172);

    cAlt1173 = new google.maps.LatLng(rstinL[2345],rstinL[2346],noWrap=true);
    var geom1173 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1173);
    rstrGeom.push(geom1173);

    cAlt1174 = new google.maps.LatLng(rstinL[2347],rstinL[2348],noWrap=true);
    var geom1174 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1174);
    rstrGeom.push(geom1174);

    cAlt1175 = new google.maps.LatLng(rstinL[2349],rstinL[2350],noWrap=true);
    var geom1175 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1175);
    rstrGeom.push(geom1175);

    cAlt1176 = new google.maps.LatLng(rstinL[2351],rstinL[2352],noWrap=true);
    var geom1176 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1176);
    rstrGeom.push(geom1176);

    cAlt1177 = new google.maps.LatLng(rstinL[2353],rstinL[2354],noWrap=true);
    var geom1177 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1177);
    rstrGeom.push(geom1177);

    cAlt1178 = new google.maps.LatLng(rstinL[2355],rstinL[2356],noWrap=true);
    var geom1178 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1178);
    rstrGeom.push(geom1178);

    cAlt1179 = new google.maps.LatLng(rstinL[2357],rstinL[2358],noWrap=true);
    var geom1179 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1179);
    rstrGeom.push(geom1179);

    cAlt1180 = new google.maps.LatLng(rstinL[2359],rstinL[2360],noWrap=true);
    var geom1180 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1180);
    rstrGeom.push(geom1180);

    cAlt1181 = new google.maps.LatLng(rstinL[2361],rstinL[2362],noWrap=true);
    var geom1181 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1181);
    rstrGeom.push(geom1181);

    cAlt1182 = new google.maps.LatLng(rstinL[2363],rstinL[2364],noWrap=true);
    var geom1182 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1182);
    rstrGeom.push(geom1182);

    cAlt1183 = new google.maps.LatLng(rstinL[2365],rstinL[2366],noWrap=true);
    var geom1183 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1183);
    rstrGeom.push(geom1183);

    cAlt1184 = new google.maps.LatLng(rstinL[2367],rstinL[2368],noWrap=true);
    var geom1184 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1184);
    rstrGeom.push(geom1184);

    cAlt1185 = new google.maps.LatLng(rstinL[2369],rstinL[2370],noWrap=true);
    var geom1185 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1185);
    rstrGeom.push(geom1185);

    cAlt1186 = new google.maps.LatLng(rstinL[2371],rstinL[2372],noWrap=true);
    var geom1186 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1186);
    rstrGeom.push(geom1186);

    cAlt1187 = new google.maps.LatLng(rstinL[2373],rstinL[2374],noWrap=true);
    var geom1187 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1187);
    rstrGeom.push(geom1187);

    cAlt1188 = new google.maps.LatLng(rstinL[2375],rstinL[2376],noWrap=true);
    var geom1188 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1188);
    rstrGeom.push(geom1188);

    cAlt1189 = new google.maps.LatLng(rstinL[2377],rstinL[2378],noWrap=true);
    var geom1189 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1189);
    rstrGeom.push(geom1189);

    cAlt1190 = new google.maps.LatLng(rstinL[2379],rstinL[2380],noWrap=true);
    var geom1190 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1190);
    rstrGeom.push(geom1190);

    cAlt1191 = new google.maps.LatLng(rstinL[2381],rstinL[2382],noWrap=true);
    var geom1191 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1191);
    rstrGeom.push(geom1191);

    cAlt1192 = new google.maps.LatLng(rstinL[2383],rstinL[2384],noWrap=true);
    var geom1192 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1192);
    rstrGeom.push(geom1192);

    cAlt1193 = new google.maps.LatLng(rstinL[2385],rstinL[2386],noWrap=true);
    var geom1193 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1193);
    rstrGeom.push(geom1193);

    cAlt1194 = new google.maps.LatLng(rstinL[2387],rstinL[2388],noWrap=true);
    var geom1194 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1194);
    rstrGeom.push(geom1194);

    cAlt1195 = new google.maps.LatLng(rstinL[2389],rstinL[2390],noWrap=true);
    var geom1195 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1195);
    rstrGeom.push(geom1195);

    cAlt1196 = new google.maps.LatLng(rstinL[2391],rstinL[2392],noWrap=true);
    var geom1196 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1196);
    rstrGeom.push(geom1196);

    cAlt1197 = new google.maps.LatLng(rstinL[2393],rstinL[2394],noWrap=true);
    var geom1197 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1197);
    rstrGeom.push(geom1197);

    cAlt1198 = new google.maps.LatLng(rstinL[2395],rstinL[2396],noWrap=true);
    var geom1198 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1198);
    rstrGeom.push(geom1198);

    cAlt1199 = new google.maps.LatLng(rstinL[2397],rstinL[2398],noWrap=true);
    var geom1199 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1199);
    rstrGeom.push(geom1199);

    cAlt1200 = new google.maps.LatLng(rstinL[2399],rstinL[2400],noWrap=true);
    var geom1200 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1200);
    rstrGeom.push(geom1200);

    cAlt1201 = new google.maps.LatLng(rstinL[2401],rstinL[2402],noWrap=true);
    var geom1201 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1201);
    rstrGeom.push(geom1201);

    cAlt1202 = new google.maps.LatLng(rstinL[2403],rstinL[2404],noWrap=true);
    var geom1202 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1202);
    rstrGeom.push(geom1202);

    cAlt1203 = new google.maps.LatLng(rstinL[2405],rstinL[2406],noWrap=true);
    var geom1203 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1203);
    rstrGeom.push(geom1203);

    cAlt1204 = new google.maps.LatLng(rstinL[2407],rstinL[2408],noWrap=true);
    var geom1204 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1204);
    rstrGeom.push(geom1204);

    cAlt1205 = new google.maps.LatLng(rstinL[2409],rstinL[2410],noWrap=true);
    var geom1205 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1205);
    rstrGeom.push(geom1205);

    cAlt1206 = new google.maps.LatLng(rstinL[2411],rstinL[2412],noWrap=true);
    var geom1206 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1206);
    rstrGeom.push(geom1206);

    cAlt1207 = new google.maps.LatLng(rstinL[2413],rstinL[2414],noWrap=true);
    var geom1207 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1207);
    rstrGeom.push(geom1207);

    cAlt1208 = new google.maps.LatLng(rstinL[2415],rstinL[2416],noWrap=true);
    var geom1208 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1208);
    rstrGeom.push(geom1208);

    cAlt1209 = new google.maps.LatLng(rstinL[2417],rstinL[2418],noWrap=true);
    var geom1209 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1209);
    rstrGeom.push(geom1209);

    cAlt1210 = new google.maps.LatLng(rstinL[2419],rstinL[2420],noWrap=true);
    var geom1210 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1210);
    rstrGeom.push(geom1210);

    cAlt1211 = new google.maps.LatLng(rstinL[2421],rstinL[2422],noWrap=true);
    var geom1211 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1211);
    rstrGeom.push(geom1211);

    cAlt1212 = new google.maps.LatLng(rstinL[2423],rstinL[2424],noWrap=true);
    var geom1212 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1212);
    rstrGeom.push(geom1212);

    cAlt1213 = new google.maps.LatLng(rstinL[2425],rstinL[2426],noWrap=true);
    var geom1213 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1213);
    rstrGeom.push(geom1213);

    cAlt1214 = new google.maps.LatLng(rstinL[2427],rstinL[2428],noWrap=true);
    var geom1214 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1214);
    rstrGeom.push(geom1214);

    cAlt1215 = new google.maps.LatLng(rstinL[2429],rstinL[2430],noWrap=true);
    var geom1215 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1215);
    rstrGeom.push(geom1215);

    cAlt1216 = new google.maps.LatLng(rstinL[2431],rstinL[2432],noWrap=true);
    var geom1216 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1216);
    rstrGeom.push(geom1216);

    cAlt1217 = new google.maps.LatLng(rstinL[2433],rstinL[2434],noWrap=true);
    var geom1217 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1217);
    rstrGeom.push(geom1217);

    cAlt1218 = new google.maps.LatLng(rstinL[2435],rstinL[2436],noWrap=true);
    var geom1218 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1218);
    rstrGeom.push(geom1218);

    cAlt1219 = new google.maps.LatLng(rstinL[2437],rstinL[2438],noWrap=true);
    var geom1219 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1219);
    rstrGeom.push(geom1219);

    cAlt1220 = new google.maps.LatLng(rstinL[2439],rstinL[2440],noWrap=true);
    var geom1220 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1220);
    rstrGeom.push(geom1220);

    cAlt1221 = new google.maps.LatLng(rstinL[2441],rstinL[2442],noWrap=true);
    var geom1221 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1221);
    rstrGeom.push(geom1221);

    cAlt1222 = new google.maps.LatLng(rstinL[2443],rstinL[2444],noWrap=true);
    var geom1222 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1222);
    rstrGeom.push(geom1222);

    cAlt1223 = new google.maps.LatLng(rstinL[2445],rstinL[2446],noWrap=true);
    var geom1223 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1223);
    rstrGeom.push(geom1223);

    cAlt1224 = new google.maps.LatLng(rstinL[2447],rstinL[2448],noWrap=true);
    var geom1224 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1224);
    rstrGeom.push(geom1224);

    cAlt1225 = new google.maps.LatLng(rstinL[2449],rstinL[2450],noWrap=true);
    var geom1225 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1225);
    rstrGeom.push(geom1225);

    cAlt1226 = new google.maps.LatLng(rstinL[2451],rstinL[2452],noWrap=true);
    var geom1226 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1226);
    rstrGeom.push(geom1226);

    cAlt1227 = new google.maps.LatLng(rstinL[2453],rstinL[2454],noWrap=true);
    var geom1227 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1227);
    rstrGeom.push(geom1227);

    cAlt1228 = new google.maps.LatLng(rstinL[2455],rstinL[2456],noWrap=true);
    var geom1228 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1228);
    rstrGeom.push(geom1228);

    cAlt1229 = new google.maps.LatLng(rstinL[2457],rstinL[2458],noWrap=true);
    var geom1229 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1229);
    rstrGeom.push(geom1229);

    cAlt1230 = new google.maps.LatLng(rstinL[2459],rstinL[2460],noWrap=true);
    var geom1230 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1230);
    rstrGeom.push(geom1230);

    cAlt1231 = new google.maps.LatLng(rstinL[2461],rstinL[2462],noWrap=true);
    var geom1231 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1231);
    rstrGeom.push(geom1231);

    cAlt1232 = new google.maps.LatLng(rstinL[2463],rstinL[2464],noWrap=true);
    var geom1232 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1232);
    rstrGeom.push(geom1232);

    cAlt1233 = new google.maps.LatLng(rstinL[2465],rstinL[2466],noWrap=true);
    var geom1233 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1233);
    rstrGeom.push(geom1233);

    cAlt1234 = new google.maps.LatLng(rstinL[2467],rstinL[2468],noWrap=true);
    var geom1234 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1234);
    rstrGeom.push(geom1234);

    cAlt1235 = new google.maps.LatLng(rstinL[2469],rstinL[2470],noWrap=true);
    var geom1235 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1235);
    rstrGeom.push(geom1235);

    cAlt1236 = new google.maps.LatLng(rstinL[2471],rstinL[2472],noWrap=true);
    var geom1236 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1236);
    rstrGeom.push(geom1236);

    cAlt1237 = new google.maps.LatLng(rstinL[2473],rstinL[2474],noWrap=true);
    var geom1237 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1237);
    rstrGeom.push(geom1237);

    cAlt1238 = new google.maps.LatLng(rstinL[2475],rstinL[2476],noWrap=true);
    var geom1238 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1238);
    rstrGeom.push(geom1238);

    cAlt1239 = new google.maps.LatLng(rstinL[2477],rstinL[2478],noWrap=true);
    var geom1239 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1239);
    rstrGeom.push(geom1239);

    cAlt1240 = new google.maps.LatLng(rstinL[2479],rstinL[2480],noWrap=true);
    var geom1240 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1240);
    rstrGeom.push(geom1240);

    cAlt1241 = new google.maps.LatLng(rstinL[2481],rstinL[2482],noWrap=true);
    var geom1241 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1241);
    rstrGeom.push(geom1241);

    cAlt1242 = new google.maps.LatLng(rstinL[2483],rstinL[2484],noWrap=true);
    var geom1242 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1242);
    rstrGeom.push(geom1242);

    cAlt1243 = new google.maps.LatLng(rstinL[2485],rstinL[2486],noWrap=true);
    var geom1243 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1243);
    rstrGeom.push(geom1243);

    cAlt1244 = new google.maps.LatLng(rstinL[2487],rstinL[2488],noWrap=true);
    var geom1244 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1244);
    rstrGeom.push(geom1244);

    cAlt1245 = new google.maps.LatLng(rstinL[2489],rstinL[2490],noWrap=true);
    var geom1245 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1245);
    rstrGeom.push(geom1245);

    cAlt1246 = new google.maps.LatLng(rstinL[2491],rstinL[2492],noWrap=true);
    var geom1246 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1246);
    rstrGeom.push(geom1246);

    cAlt1247 = new google.maps.LatLng(rstinL[2493],rstinL[2494],noWrap=true);
    var geom1247 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1247);
    rstrGeom.push(geom1247);

    cAlt1248 = new google.maps.LatLng(rstinL[2495],rstinL[2496],noWrap=true);
    var geom1248 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1248);
    rstrGeom.push(geom1248);

    cAlt1249 = new google.maps.LatLng(rstinL[2497],rstinL[2498],noWrap=true);
    var geom1249 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1249);
    rstrGeom.push(geom1249);

    cAlt1250 = new google.maps.LatLng(rstinL[2499],rstinL[2500],noWrap=true);
    var geom1250 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1250);
    rstrGeom.push(geom1250);

    cAlt1251 = new google.maps.LatLng(rstinL[2501],rstinL[2502],noWrap=true);
    var geom1251 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1251);
    rstrGeom.push(geom1251);

    cAlt1252 = new google.maps.LatLng(rstinL[2503],rstinL[2504],noWrap=true);
    var geom1252 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1252);
    rstrGeom.push(geom1252);

    cAlt1253 = new google.maps.LatLng(rstinL[2505],rstinL[2506],noWrap=true);
    var geom1253 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1253);
    rstrGeom.push(geom1253);

    cAlt1254 = new google.maps.LatLng(rstinL[2507],rstinL[2508],noWrap=true);
    var geom1254 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1254);
    rstrGeom.push(geom1254);

    cAlt1255 = new google.maps.LatLng(rstinL[2509],rstinL[2510],noWrap=true);
    var geom1255 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1255);
    rstrGeom.push(geom1255);

    cAlt1256 = new google.maps.LatLng(rstinL[2511],rstinL[2512],noWrap=true);
    var geom1256 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1256);
    rstrGeom.push(geom1256);

    cAlt1257 = new google.maps.LatLng(rstinL[2513],rstinL[2514],noWrap=true);
    var geom1257 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1257);
    rstrGeom.push(geom1257);

    cAlt1258 = new google.maps.LatLng(rstinL[2515],rstinL[2516],noWrap=true);
    var geom1258 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1258);
    rstrGeom.push(geom1258);

    cAlt1259 = new google.maps.LatLng(rstinL[2517],rstinL[2518],noWrap=true);
    var geom1259 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1259);
    rstrGeom.push(geom1259);

    cAlt1260 = new google.maps.LatLng(rstinL[2519],rstinL[2520],noWrap=true);
    var geom1260 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1260);
    rstrGeom.push(geom1260);

    cAlt1261 = new google.maps.LatLng(rstinL[2521],rstinL[2522],noWrap=true);
    var geom1261 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1261);
    rstrGeom.push(geom1261);

    cAlt1262 = new google.maps.LatLng(rstinL[2523],rstinL[2524],noWrap=true);
    var geom1262 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1262);
    rstrGeom.push(geom1262);

    cAlt1263 = new google.maps.LatLng(rstinL[2525],rstinL[2526],noWrap=true);
    var geom1263 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1263);
    rstrGeom.push(geom1263);

    cAlt1264 = new google.maps.LatLng(rstinL[2527],rstinL[2528],noWrap=true);
    var geom1264 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1264);
    rstrGeom.push(geom1264);

    cAlt1265 = new google.maps.LatLng(rstinL[2529],rstinL[2530],noWrap=true);
    var geom1265 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1265);
    rstrGeom.push(geom1265);

    cAlt1266 = new google.maps.LatLng(rstinL[2531],rstinL[2532],noWrap=true);
    var geom1266 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1266);
    rstrGeom.push(geom1266);

    cAlt1267 = new google.maps.LatLng(rstinL[2533],rstinL[2534],noWrap=true);
    var geom1267 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1267);
    rstrGeom.push(geom1267);

    cAlt1268 = new google.maps.LatLng(rstinL[2535],rstinL[2536],noWrap=true);
    var geom1268 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1268);
    rstrGeom.push(geom1268);

    cAlt1269 = new google.maps.LatLng(rstinL[2537],rstinL[2538],noWrap=true);
    var geom1269 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1269);
    rstrGeom.push(geom1269);

    cAlt1270 = new google.maps.LatLng(rstinL[2539],rstinL[2540],noWrap=true);
    var geom1270 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1270);
    rstrGeom.push(geom1270);

    cAlt1271 = new google.maps.LatLng(rstinL[2541],rstinL[2542],noWrap=true);
    var geom1271 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1271);
    rstrGeom.push(geom1271);

    cAlt1272 = new google.maps.LatLng(rstinL[2543],rstinL[2544],noWrap=true);
    var geom1272 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1272);
    rstrGeom.push(geom1272);

    cAlt1273 = new google.maps.LatLng(rstinL[2545],rstinL[2546],noWrap=true);
    var geom1273 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1273);
    rstrGeom.push(geom1273);

    cAlt1274 = new google.maps.LatLng(rstinL[2547],rstinL[2548],noWrap=true);
    var geom1274 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1274);
    rstrGeom.push(geom1274);

    cAlt1275 = new google.maps.LatLng(rstinL[2549],rstinL[2550],noWrap=true);
    var geom1275 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1275);
    rstrGeom.push(geom1275);

    cAlt1276 = new google.maps.LatLng(rstinL[2551],rstinL[2552],noWrap=true);
    var geom1276 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1276);
    rstrGeom.push(geom1276);

    cAlt1277 = new google.maps.LatLng(rstinL[2553],rstinL[2554],noWrap=true);
    var geom1277 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1277);
    rstrGeom.push(geom1277);

    cAlt1278 = new google.maps.LatLng(rstinL[2555],rstinL[2556],noWrap=true);
    var geom1278 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1278);
    rstrGeom.push(geom1278);

    cAlt1279 = new google.maps.LatLng(rstinL[2557],rstinL[2558],noWrap=true);
    var geom1279 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1279);
    rstrGeom.push(geom1279);

    cAlt1280 = new google.maps.LatLng(rstinL[2559],rstinL[2560],noWrap=true);
    var geom1280 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1280);
    rstrGeom.push(geom1280);

    cAlt1281 = new google.maps.LatLng(rstinL[2561],rstinL[2562],noWrap=true);
    var geom1281 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1281);
    rstrGeom.push(geom1281);

    cAlt1282 = new google.maps.LatLng(rstinL[2563],rstinL[2564],noWrap=true);
    var geom1282 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1282);
    rstrGeom.push(geom1282);

    cAlt1283 = new google.maps.LatLng(rstinL[2565],rstinL[2566],noWrap=true);
    var geom1283 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1283);
    rstrGeom.push(geom1283);

    cAlt1284 = new google.maps.LatLng(rstinL[2567],rstinL[2568],noWrap=true);
    var geom1284 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1284);
    rstrGeom.push(geom1284);

    cAlt1285 = new google.maps.LatLng(rstinL[2569],rstinL[2570],noWrap=true);
    var geom1285 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1285);
    rstrGeom.push(geom1285);

    cAlt1286 = new google.maps.LatLng(rstinL[2571],rstinL[2572],noWrap=true);
    var geom1286 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1286);
    rstrGeom.push(geom1286);

    cAlt1287 = new google.maps.LatLng(rstinL[2573],rstinL[2574],noWrap=true);
    var geom1287 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1287);
    rstrGeom.push(geom1287);

    cAlt1288 = new google.maps.LatLng(rstinL[2575],rstinL[2576],noWrap=true);
    var geom1288 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1288);
    rstrGeom.push(geom1288);

    cAlt1289 = new google.maps.LatLng(rstinL[2577],rstinL[2578],noWrap=true);
    var geom1289 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1289);
    rstrGeom.push(geom1289);

    cAlt1290 = new google.maps.LatLng(rstinL[2579],rstinL[2580],noWrap=true);
    var geom1290 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1290);
    rstrGeom.push(geom1290);

    cAlt1291 = new google.maps.LatLng(rstinL[2581],rstinL[2582],noWrap=true);
    var geom1291 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1291);
    rstrGeom.push(geom1291);

    cAlt1292 = new google.maps.LatLng(rstinL[2583],rstinL[2584],noWrap=true);
    var geom1292 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1292);
    rstrGeom.push(geom1292);

    cAlt1293 = new google.maps.LatLng(rstinL[2585],rstinL[2586],noWrap=true);
    var geom1293 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1293);
    rstrGeom.push(geom1293);

    cAlt1294 = new google.maps.LatLng(rstinL[2587],rstinL[2588],noWrap=true);
    var geom1294 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1294);
    rstrGeom.push(geom1294);

    cAlt1295 = new google.maps.LatLng(rstinL[2589],rstinL[2590],noWrap=true);
    var geom1295 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1295);
    rstrGeom.push(geom1295);

    cAlt1296 = new google.maps.LatLng(rstinL[2591],rstinL[2592],noWrap=true);
    var geom1296 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1296);
    rstrGeom.push(geom1296);

    cAlt1297 = new google.maps.LatLng(rstinL[2593],rstinL[2594],noWrap=true);
    var geom1297 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1297);
    rstrGeom.push(geom1297);

    cAlt1298 = new google.maps.LatLng(rstinL[2595],rstinL[2596],noWrap=true);
    var geom1298 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1298);
    rstrGeom.push(geom1298);

    cAlt1299 = new google.maps.LatLng(rstinL[2597],rstinL[2598],noWrap=true);
    var geom1299 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1299);
    rstrGeom.push(geom1299);

    cAlt1300 = new google.maps.LatLng(rstinL[2599],rstinL[2600],noWrap=true);
    var geom1300 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1300);
    rstrGeom.push(geom1300);

    cAlt1301 = new google.maps.LatLng(rstinL[2601],rstinL[2602],noWrap=true);
    var geom1301 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1301);
    rstrGeom.push(geom1301);

    cAlt1302 = new google.maps.LatLng(rstinL[2603],rstinL[2604],noWrap=true);
    var geom1302 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1302);
    rstrGeom.push(geom1302);

    cAlt1303 = new google.maps.LatLng(rstinL[2605],rstinL[2606],noWrap=true);
    var geom1303 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1303);
    rstrGeom.push(geom1303);

    cAlt1304 = new google.maps.LatLng(rstinL[2607],rstinL[2608],noWrap=true);
    var geom1304 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1304);
    rstrGeom.push(geom1304);

    cAlt1305 = new google.maps.LatLng(rstinL[2609],rstinL[2610],noWrap=true);
    var geom1305 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1305);
    rstrGeom.push(geom1305);

    cAlt1306 = new google.maps.LatLng(rstinL[2611],rstinL[2612],noWrap=true);
    var geom1306 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1306);
    rstrGeom.push(geom1306);

    cAlt1307 = new google.maps.LatLng(rstinL[2613],rstinL[2614],noWrap=true);
    var geom1307 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1307);
    rstrGeom.push(geom1307);

    cAlt1308 = new google.maps.LatLng(rstinL[2615],rstinL[2616],noWrap=true);
    var geom1308 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1308);
    rstrGeom.push(geom1308);

    cAlt1309 = new google.maps.LatLng(rstinL[2617],rstinL[2618],noWrap=true);
    var geom1309 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1309);
    rstrGeom.push(geom1309);

    cAlt1310 = new google.maps.LatLng(rstinL[2619],rstinL[2620],noWrap=true);
    var geom1310 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1310);
    rstrGeom.push(geom1310);

    cAlt1311 = new google.maps.LatLng(rstinL[2621],rstinL[2622],noWrap=true);
    var geom1311 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1311);
    rstrGeom.push(geom1311);

    cAlt1312 = new google.maps.LatLng(rstinL[2623],rstinL[2624],noWrap=true);
    var geom1312 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1312);
    rstrGeom.push(geom1312);

    cAlt1313 = new google.maps.LatLng(rstinL[2625],rstinL[2626],noWrap=true);
    var geom1313 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1313);
    rstrGeom.push(geom1313);

    cAlt1314 = new google.maps.LatLng(rstinL[2627],rstinL[2628],noWrap=true);
    var geom1314 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1314);
    rstrGeom.push(geom1314);

    cAlt1315 = new google.maps.LatLng(rstinL[2629],rstinL[2630],noWrap=true);
    var geom1315 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1315);
    rstrGeom.push(geom1315);

    cAlt1316 = new google.maps.LatLng(rstinL[2631],rstinL[2632],noWrap=true);
    var geom1316 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1316);
    rstrGeom.push(geom1316);

    cAlt1317 = new google.maps.LatLng(rstinL[2633],rstinL[2634],noWrap=true);
    var geom1317 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1317);
    rstrGeom.push(geom1317);

    cAlt1318 = new google.maps.LatLng(rstinL[2635],rstinL[2636],noWrap=true);
    var geom1318 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1318);
    rstrGeom.push(geom1318);

    cAlt1319 = new google.maps.LatLng(rstinL[2637],rstinL[2638],noWrap=true);
    var geom1319 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1319);
    rstrGeom.push(geom1319);

    cAlt1320 = new google.maps.LatLng(rstinL[2639],rstinL[2640],noWrap=true);
    var geom1320 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1320);
    rstrGeom.push(geom1320);

    cAlt1321 = new google.maps.LatLng(rstinL[2641],rstinL[2642],noWrap=true);
    var geom1321 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1321);
    rstrGeom.push(geom1321);

    cAlt1322 = new google.maps.LatLng(rstinL[2643],rstinL[2644],noWrap=true);
    var geom1322 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1322);
    rstrGeom.push(geom1322);

    cAlt1323 = new google.maps.LatLng(rstinL[2645],rstinL[2646],noWrap=true);
    var geom1323 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1323);
    rstrGeom.push(geom1323);

    cAlt1324 = new google.maps.LatLng(rstinL[2647],rstinL[2648],noWrap=true);
    var geom1324 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1324);
    rstrGeom.push(geom1324);

    cAlt1325 = new google.maps.LatLng(rstinL[2649],rstinL[2650],noWrap=true);
    var geom1325 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1325);
    rstrGeom.push(geom1325);

    cAlt1326 = new google.maps.LatLng(rstinL[2651],rstinL[2652],noWrap=true);
    var geom1326 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1326);
    rstrGeom.push(geom1326);

    cAlt1327 = new google.maps.LatLng(rstinL[2653],rstinL[2654],noWrap=true);
    var geom1327 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1327);
    rstrGeom.push(geom1327);

    cAlt1328 = new google.maps.LatLng(rstinL[2655],rstinL[2656],noWrap=true);
    var geom1328 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1328);
    rstrGeom.push(geom1328);

    cAlt1329 = new google.maps.LatLng(rstinL[2657],rstinL[2658],noWrap=true);
    var geom1329 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1329);
    rstrGeom.push(geom1329);

    cAlt1330 = new google.maps.LatLng(rstinL[2659],rstinL[2660],noWrap=true);
    var geom1330 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1330);
    rstrGeom.push(geom1330);

    cAlt1331 = new google.maps.LatLng(rstinL[2661],rstinL[2662],noWrap=true);
    var geom1331 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1331);
    rstrGeom.push(geom1331);

    cAlt1332 = new google.maps.LatLng(rstinL[2663],rstinL[2664],noWrap=true);
    var geom1332 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1332);
    rstrGeom.push(geom1332);

    cAlt1333 = new google.maps.LatLng(rstinL[2665],rstinL[2666],noWrap=true);
    var geom1333 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1333);
    rstrGeom.push(geom1333);

    cAlt1334 = new google.maps.LatLng(rstinL[2667],rstinL[2668],noWrap=true);
    var geom1334 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1334);
    rstrGeom.push(geom1334);

    cAlt1335 = new google.maps.LatLng(rstinL[2669],rstinL[2670],noWrap=true);
    var geom1335 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1335);
    rstrGeom.push(geom1335);

    cAlt1336 = new google.maps.LatLng(rstinL[2671],rstinL[2672],noWrap=true);
    var geom1336 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1336);
    rstrGeom.push(geom1336);

    cAlt1337 = new google.maps.LatLng(rstinL[2673],rstinL[2674],noWrap=true);
    var geom1337 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1337);
    rstrGeom.push(geom1337);

    cAlt1338 = new google.maps.LatLng(rstinL[2675],rstinL[2676],noWrap=true);
    var geom1338 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1338);
    rstrGeom.push(geom1338);

    cAlt1339 = new google.maps.LatLng(rstinL[2677],rstinL[2678],noWrap=true);
    var geom1339 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1339);
    rstrGeom.push(geom1339);

    cAlt1340 = new google.maps.LatLng(rstinL[2679],rstinL[2680],noWrap=true);
    var geom1340 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1340);
    rstrGeom.push(geom1340);

    cAlt1341 = new google.maps.LatLng(rstinL[2681],rstinL[2682],noWrap=true);
    var geom1341 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1341);
    rstrGeom.push(geom1341);

    cAlt1342 = new google.maps.LatLng(rstinL[2683],rstinL[2684],noWrap=true);
    var geom1342 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1342);
    rstrGeom.push(geom1342);

    cAlt1343 = new google.maps.LatLng(rstinL[2685],rstinL[2686],noWrap=true);
    var geom1343 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1343);
    rstrGeom.push(geom1343);

    cAlt1344 = new google.maps.LatLng(rstinL[2687],rstinL[2688],noWrap=true);
    var geom1344 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1344);
    rstrGeom.push(geom1344);

    cAlt1345 = new google.maps.LatLng(rstinL[2689],rstinL[2690],noWrap=true);
    var geom1345 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1345);
    rstrGeom.push(geom1345);

    cAlt1346 = new google.maps.LatLng(rstinL[2691],rstinL[2692],noWrap=true);
    var geom1346 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1346);
    rstrGeom.push(geom1346);

    cAlt1347 = new google.maps.LatLng(rstinL[2693],rstinL[2694],noWrap=true);
    var geom1347 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1347);
    rstrGeom.push(geom1347);

    cAlt1348 = new google.maps.LatLng(rstinL[2695],rstinL[2696],noWrap=true);
    var geom1348 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1348);
    rstrGeom.push(geom1348);

    cAlt1349 = new google.maps.LatLng(rstinL[2697],rstinL[2698],noWrap=true);
    var geom1349 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1349);
    rstrGeom.push(geom1349);

    cAlt1350 = new google.maps.LatLng(rstinL[2699],rstinL[2700],noWrap=true);
    var geom1350 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1350);
    rstrGeom.push(geom1350);

    cAlt1351 = new google.maps.LatLng(rstinL[2701],rstinL[2702],noWrap=true);
    var geom1351 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1351);
    rstrGeom.push(geom1351);

    cAlt1352 = new google.maps.LatLng(rstinL[2703],rstinL[2704],noWrap=true);
    var geom1352 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1352);
    rstrGeom.push(geom1352);

    cAlt1353 = new google.maps.LatLng(rstinL[2705],rstinL[2706],noWrap=true);
    var geom1353 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1353);
    rstrGeom.push(geom1353);

    cAlt1354 = new google.maps.LatLng(rstinL[2707],rstinL[2708],noWrap=true);
    var geom1354 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1354);
    rstrGeom.push(geom1354);

    cAlt1355 = new google.maps.LatLng(rstinL[2709],rstinL[2710],noWrap=true);
    var geom1355 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1355);
    rstrGeom.push(geom1355);

    cAlt1356 = new google.maps.LatLng(rstinL[2711],rstinL[2712],noWrap=true);
    var geom1356 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1356);
    rstrGeom.push(geom1356);

    cAlt1357 = new google.maps.LatLng(rstinL[2713],rstinL[2714],noWrap=true);
    var geom1357 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1357);
    rstrGeom.push(geom1357);

    cAlt1358 = new google.maps.LatLng(rstinL[2715],rstinL[2716],noWrap=true);
    var geom1358 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1358);
    rstrGeom.push(geom1358);

    cAlt1359 = new google.maps.LatLng(rstinL[2717],rstinL[2718],noWrap=true);
    var geom1359 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1359);
    rstrGeom.push(geom1359);

    cAlt1360 = new google.maps.LatLng(rstinL[2719],rstinL[2720],noWrap=true);
    var geom1360 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1360);
    rstrGeom.push(geom1360);

    cAlt1361 = new google.maps.LatLng(rstinL[2721],rstinL[2722],noWrap=true);
    var geom1361 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1361);
    rstrGeom.push(geom1361);

    cAlt1362 = new google.maps.LatLng(rstinL[2723],rstinL[2724],noWrap=true);
    var geom1362 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1362);
    rstrGeom.push(geom1362);

    cAlt1363 = new google.maps.LatLng(rstinL[2725],rstinL[2726],noWrap=true);
    var geom1363 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1363);
    rstrGeom.push(geom1363);

    cAlt1364 = new google.maps.LatLng(rstinL[2727],rstinL[2728],noWrap=true);
    var geom1364 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1364);
    rstrGeom.push(geom1364);

    cAlt1365 = new google.maps.LatLng(rstinL[2729],rstinL[2730],noWrap=true);
    var geom1365 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1365);
    rstrGeom.push(geom1365);

    cAlt1366 = new google.maps.LatLng(rstinL[2731],rstinL[2732],noWrap=true);
    var geom1366 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1366);
    rstrGeom.push(geom1366);

    cAlt1367 = new google.maps.LatLng(rstinL[2733],rstinL[2734],noWrap=true);
    var geom1367 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1367);
    rstrGeom.push(geom1367);

    cAlt1368 = new google.maps.LatLng(rstinL[2735],rstinL[2736],noWrap=true);
    var geom1368 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1368);
    rstrGeom.push(geom1368);

    cAlt1369 = new google.maps.LatLng(rstinL[2737],rstinL[2738],noWrap=true);
    var geom1369 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1369);
    rstrGeom.push(geom1369);

    cAlt1370 = new google.maps.LatLng(rstinL[2739],rstinL[2740],noWrap=true);
    var geom1370 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1370);
    rstrGeom.push(geom1370);

    cAlt1371 = new google.maps.LatLng(rstinL[2741],rstinL[2742],noWrap=true);
    var geom1371 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1371);
    rstrGeom.push(geom1371);

    cAlt1372 = new google.maps.LatLng(rstinL[2743],rstinL[2744],noWrap=true);
    var geom1372 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1372);
    rstrGeom.push(geom1372);

    cAlt1373 = new google.maps.LatLng(rstinL[2745],rstinL[2746],noWrap=true);
    var geom1373 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1373);
    rstrGeom.push(geom1373);

    cAlt1374 = new google.maps.LatLng(rstinL[2747],rstinL[2748],noWrap=true);
    var geom1374 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1374);
    rstrGeom.push(geom1374);

    cAlt1375 = new google.maps.LatLng(rstinL[2749],rstinL[2750],noWrap=true);
    var geom1375 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1375);
    rstrGeom.push(geom1375);

    cAlt1376 = new google.maps.LatLng(rstinL[2751],rstinL[2752],noWrap=true);
    var geom1376 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1376);
    rstrGeom.push(geom1376);

    cAlt1377 = new google.maps.LatLng(rstinL[2753],rstinL[2754],noWrap=true);
    var geom1377 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1377);
    rstrGeom.push(geom1377);

    cAlt1378 = new google.maps.LatLng(rstinL[2755],rstinL[2756],noWrap=true);
    var geom1378 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1378);
    rstrGeom.push(geom1378);

    cAlt1379 = new google.maps.LatLng(rstinL[2757],rstinL[2758],noWrap=true);
    var geom1379 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1379);
    rstrGeom.push(geom1379);

    cAlt1380 = new google.maps.LatLng(rstinL[2759],rstinL[2760],noWrap=true);
    var geom1380 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1380);
    rstrGeom.push(geom1380);

    cAlt1381 = new google.maps.LatLng(rstinL[2761],rstinL[2762],noWrap=true);
    var geom1381 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1381);
    rstrGeom.push(geom1381);

    cAlt1382 = new google.maps.LatLng(rstinL[2763],rstinL[2764],noWrap=true);
    var geom1382 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1382);
    rstrGeom.push(geom1382);

    cAlt1383 = new google.maps.LatLng(rstinL[2765],rstinL[2766],noWrap=true);
    var geom1383 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1383);
    rstrGeom.push(geom1383);

    cAlt1384 = new google.maps.LatLng(rstinL[2767],rstinL[2768],noWrap=true);
    var geom1384 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1384);
    rstrGeom.push(geom1384);

    cAlt1385 = new google.maps.LatLng(rstinL[2769],rstinL[2770],noWrap=true);
    var geom1385 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1385);
    rstrGeom.push(geom1385);

    cAlt1386 = new google.maps.LatLng(rstinL[2771],rstinL[2772],noWrap=true);
    var geom1386 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1386);
    rstrGeom.push(geom1386);

    cAlt1387 = new google.maps.LatLng(rstinL[2773],rstinL[2774],noWrap=true);
    var geom1387 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1387);
    rstrGeom.push(geom1387);

    cAlt1388 = new google.maps.LatLng(rstinL[2775],rstinL[2776],noWrap=true);
    var geom1388 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1388);
    rstrGeom.push(geom1388);

    cAlt1389 = new google.maps.LatLng(rstinL[2777],rstinL[2778],noWrap=true);
    var geom1389 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1389);
    rstrGeom.push(geom1389);

    cAlt1390 = new google.maps.LatLng(rstinL[2779],rstinL[2780],noWrap=true);
    var geom1390 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1390);
    rstrGeom.push(geom1390);

    cAlt1391 = new google.maps.LatLng(rstinL[2781],rstinL[2782],noWrap=true);
    var geom1391 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1391);
    rstrGeom.push(geom1391);

    cAlt1392 = new google.maps.LatLng(rstinL[2783],rstinL[2784],noWrap=true);
    var geom1392= google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1392);
    rstrGeom.push(geom1392);

    cAlt1393 = new google.maps.LatLng(rstinL[2785],rstinL[2786],noWrap=true);
    var geom1393 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1393);
    rstrGeom.push(geom1393);

    cAlt1394 = new google.maps.LatLng(rstinL[2787],rstinL[2788],noWrap=true);
    var geom1394 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1394);
    rstrGeom.push(geom1394);

    cAlt1395 = new google.maps.LatLng(rstinL[2789],rstinL[2790],noWrap=true);
    var geom1395 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1395);
    rstrGeom.push(geom1395);

    cAlt1396 = new google.maps.LatLng(rstinL[2791],rstinL[2792],noWrap=true);
    var geom1396 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1396);
    rstrGeom.push(geom1396);

    cAlt1397 = new google.maps.LatLng(rstinL[2793],rstinL[2794],noWrap=true);
    var geom1397 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1397);
    rstrGeom.push(geom1397);

    cAlt1398 = new google.maps.LatLng(rstinL[2795],rstinL[2796],noWrap=true);
    var geom1398 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1398);
    rstrGeom.push(geom1398);

    cAlt1399 = new google.maps.LatLng(rstinL[2797],rstinL[2798],noWrap=true);
    var geom1399 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1399);
    rstrGeom.push(geom1399);

    cAlt1400 = new google.maps.LatLng(rstinL[2799],rstinL[2800],noWrap=true);
    var geom1400 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1400);
    rstrGeom.push(geom1400);

    cAlt1401 = new google.maps.LatLng(rstinL[2801],rstinL[2802],noWrap=true);
    var geom1401 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1401);
    rstrGeom.push(geom1401);

    cAlt1402 = new google.maps.LatLng(rstinL[2803],rstinL[2804],noWrap=true);
    var geom1402 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1402);
    rstrGeom.push(geom1402);

    cAlt1403 = new google.maps.LatLng(rstinL[2805],rstinL[2806],noWrap=true);
    var geom1403 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1403);
    rstrGeom.push(geom1403);

    cAlt1404 = new google.maps.LatLng(rstinL[2807],rstinL[2808],noWrap=true);
    var geom1404 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1404);
    rstrGeom.push(geom1404);

    cAlt1405 = new google.maps.LatLng(rstinL[2809],rstinL[2810],noWrap=true);
    var geom1405 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1405);
    rstrGeom.push(geom1405);

    cAlt1406 = new google.maps.LatLng(rstinL[2811],rstinL[2812],noWrap=true);
    var geom1406 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1406);
    rstrGeom.push(geom1406);

    cAlt1407 = new google.maps.LatLng(rstinL[2813],rstinL[2814],noWrap=true);
    var geom1407 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1407);
    rstrGeom.push(geom1407);

    cAlt1408 = new google.maps.LatLng(rstinL[2815],rstinL[2816],noWrap=true);
    var geom1408 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1408);
    rstrGeom.push(geom1408);

    cAlt1409 = new google.maps.LatLng(rstinL[2817],rstinL[2818],noWrap=true);
    var geom1409 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1409);
    rstrGeom.push(geom1409);

    cAlt1410 = new google.maps.LatLng(rstinL[2819],rstinL[2820],noWrap=true);
    var geom1410 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1410);
    rstrGeom.push(geom1410);

    cAlt1411 = new google.maps.LatLng(rstinL[2821],rstinL[2822],noWrap=true);
    var geom1411 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1411);
    rstrGeom.push(geom1411);

    cAlt1412 = new google.maps.LatLng(rstinL[2823],rstinL[2824],noWrap=true);
    var geom1412 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1412);
    rstrGeom.push(geom1412);

    cAlt1413 = new google.maps.LatLng(rstinL[2825],rstinL[2826],noWrap=true);
    var geom1413 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1413);
    rstrGeom.push(geom1413);

    cAlt1414 = new google.maps.LatLng(rstinL[2827],rstinL[2828],noWrap=true);
    var geom1414 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1414);
    rstrGeom.push(geom1414);

    cAlt1415 = new google.maps.LatLng(rstinL[2829],rstinL[2830],noWrap=true);
    var geom1415 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1415);
    rstrGeom.push(geom1415);

    cAlt1416 = new google.maps.LatLng(rstinL[2831],rstinL[2832],noWrap=true);
    var geom1416 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1416);
    rstrGeom.push(geom1416);

    cAlt1417 = new google.maps.LatLng(rstinL[2833],rstinL[2834],noWrap=true);
    var geom1417 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1417);
    rstrGeom.push(geom1417);

    cAlt1418 = new google.maps.LatLng(rstinL[2835],rstinL[2836],noWrap=true);
    var geom1418 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1418);
    rstrGeom.push(geom1418);

    cAlt1419 = new google.maps.LatLng(rstinL[2837],rstinL[2838],noWrap=true);
    var geom1419 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1419);
    rstrGeom.push(geom1419);

    cAlt1420 = new google.maps.LatLng(rstinL[2839],rstinL[2840],noWrap=true);
    var geom1420 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1420);
    rstrGeom.push(geom1420);

    cAlt1421 = new google.maps.LatLng(rstinL[2841],rstinL[2842],noWrap=true);
    var geom1421 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1421);
    rstrGeom.push(geom1421);

    cAlt1422 = new google.maps.LatLng(rstinL[2843],rstinL[2844],noWrap=true);
    var geom1422 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1422);
    rstrGeom.push(geom1422);

    cAlt1423 = new google.maps.LatLng(rstinL[2845],rstinL[2846],noWrap=true);
    var geom1423 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1423);
    rstrGeom.push(geom1423);

    cAlt1424 = new google.maps.LatLng(rstinL[2847],rstinL[2848],noWrap=true);
    var geom1424 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1424);
    rstrGeom.push(geom1424);

    cAlt1425 = new google.maps.LatLng(rstinL[2849],rstinL[2850],noWrap=true);
    var geom1425 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1425);
    rstrGeom.push(geom1425);

    cAlt1426 = new google.maps.LatLng(rstinL[2851],rstinL[2852],noWrap=true);
    var geom1426 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1426);
    rstrGeom.push(geom1426);

    cAlt1427 = new google.maps.LatLng(rstinL[2853],rstinL[2854],noWrap=true);
    var geom1427 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1427);
    rstrGeom.push(geom1427);

    cAlt1428 = new google.maps.LatLng(rstinL[2855],rstinL[2856],noWrap=true);
    var geom1428 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1428);
    rstrGeom.push(geom1428);

    cAlt1429 = new google.maps.LatLng(rstinL[2857],rstinL[2858],noWrap=true);
    var geom1429 = google.maps.geometry.spherical.computeDistanceBetween(usr_loc,cAlt1429);
    rstrGeom.push(geom1429);

    console.log(rstrGeom);
    var rstrGeomOriginal = [];


    for(e=0; e < rstrGeom.length; e++)
    {
        rstrGeomOriginal.push(rstrGeom[e]);
    }
    console.log("ORIGIN METERS GEO COMPUTE DISTANCE BETWEEN");
    console.log(rstrGeomOriginal);
    rstrGeomOriginal.sort(function(a, b){return a-b});
    console.log(rstrGeomOriginal);
    console.log(rstrGeomOriginal[0]);
    // convert to distance in miles
    for(e=0; e < rstrGeom.length; e++)
    {
        rstrGeom[e] *= 0.000621371;
    }

    console.log(rstrGeom);

    for(r=0; r < rstrGeom.length; r++)
    {
        hldVal.push(rstrGeom[r]);
    }
    //KEY!!!!!!!!!!!!!!!!!!!!!hldVal
    console.log(hldVal);
    
    console.log("RESTRUCTURED GEOMETRY");
    rstrGeom.sort(function(a, b){return a-b});
    console.log(rstrGeom);

    var result = [];

    for ( var i = 0; i < hldVal.length; i++ ) 
    {
      result.push( [ hldVal[i], rstrGeom[i] ] );
    }
    console.log(result);
    // get lowest distances
    var numX1 = rstrGeom[0];
    var numX2 = rstrGeom[1];
    var numX3 = rstrGeom[2];
    var numX4 = rstrGeom[3];
    var numX5 = rstrGeom[4];
    var numX6 = rstrGeom[5];
    var numX7 = rstrGeom[6];
    var numX8 = rstrGeom[7];
    var numX9 = rstrGeom[8];
    var numX10 = rstrGeom[9];
    console.log("LOWEST Distance");
    console.log(numX1);
    console.log(numX2);
    console.log(numX3);
    console.log(numX4);
    console.log(numX5);
    console.log(numX6);
    console.log(numX7);
    console.log(numX8);
    console.log(numX9);
    console.log(numX10);
    
    // get the index location of 10 lowest distances
    let pos1 = hldVal.indexOf(numX1);
    let pos2 = hldVal.indexOf(numX2);
    let pos3 = hldVal.indexOf(numX3);
    let pos4 = hldVal.indexOf(numX4);
    let pos5 = hldVal.indexOf(numX5);
    let pos6 = hldVal.indexOf(numX6);
    let pos7 = hldVal.indexOf(numX7);
    let pos8 = hldVal.indexOf(numX8);
    let pos9 = hldVal.indexOf(numX9);
    let pos10 = hldVal.indexOf(numX10);
    console.log(hldVal);
    console.log("get the index location of 10 lowest distances");
    console.log(pos1);
    console.log(pos2);
    console.log(pos3);
    console.log(pos4);
    console.log(pos5);
    console.log(pos6);
    console.log(pos7);
    console.log(pos8);
    console.log(pos9);
    console.log(pos10);
    

    //restructure to get the rstinL index location
    // 
    var i = 1;
    var ex1 = pos1 + i;
    var ex2 = pos2 + i;
    var ex3 = pos3 + i;
    var ex4 = pos4 + i;
    var ex5 = pos5 + i;
    var ex6 = pos6 + i;
    var ex7 = pos7 + i;
    var ex8 = pos8 + i;
    var ex9 = pos9 + i;
    var ex10 = pos10 + i;
    var restr_pos1 = ex1 *2 -1;
    var restr_pos2 = ex2 *2 -1;
    var restr_pos3 = ex3 *2 -1;
    var restr_pos4 = ex4 *2 -1;
    var restr_pos5 = ex5 *2 -1;
    var restr_pos6 = ex6 *2 -1;
    var restr_pos7 = ex7 *2 -1;
    var restr_pos8 = ex8 *2 -1;
    var restr_pos9 = ex9 *2 -1;
    var restr_pos10 = ex10 *2 -1;
    console.log(restr_pos1);
    console.log(restr_pos2);
    console.log(restr_pos3);
    console.log(restr_pos4);
    console.log(restr_pos5);
    console.log(restr_pos6);
    console.log(restr_pos7);
    console.log(restr_pos8);
    console.log(restr_pos9);
    console.log(restr_pos10);
    // get the lat value from rstinL
    var f1 = rstinL[restr_pos1];
    var f2 = rstinL[restr_pos2];
    var f3 = rstinL[restr_pos3];
    var f4 = rstinL[restr_pos4];
    var f5 = rstinL[restr_pos5];
    var f6 = rstinL[restr_pos6];
    var f7 = rstinL[restr_pos7];
    var f8 = rstinL[restr_pos8];
    var f9 = rstinL[restr_pos9];
    var f10 = rstinL[restr_pos10];
    console.log(rstrCoor);
    console.log("LAT VALUE FROM restr_pos");
    console.log(rstinL[restr_pos1]);
    
    var global_pos1 = f1.toString();
    var global_pos2 = f2.toString();
    var global_pos3 = f3.toString();
    var global_pos4 = f4.toString();
    var global_pos5 = f5.toString();
    var global_pos6 = f6.toString();
    var global_pos7 = f7.toString();
    var global_pos8 = f8.toString();
    var global_pos9 = f9.toString();
    var global_pos10 = f10.toString();

    getCo1(global_pos1);
    getCo2(global_pos2);
    getCo3(global_pos3);
    getCo4(global_pos4);
    getCo5(global_pos5);
    getCo6(global_pos6);
    getCo7(global_pos7);
    getCo8(global_pos8);
    getCo9(global_pos9);
    getCo10(global_pos10);
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
    //loop through all elements of the array to 
    //make a comparati v e anaylsis between the usr_loc
    //var and the dt geometry matrix
    // do
    // {
    //     //declare var to flag and test against
    //     var usr_loc = 
    //     for(x=1; x<rstGeom.length; x++)
    //     {
    //         if()
    //     }
    // }
    // function isLowest(num) 
    // { 
    //     return num === numX;
    // }
    // function isNum(num)
    // {
    //     return num === pos1;
    // }
    // var indices = [];
    // var element = f;
    // var idx = hldVal.indexOf(element);
    // while (idx != -1) 
    // {
    //   indices.push(idx);
    //   idx = hldVal.indexOf(element, idx + 1);
    // }
    // console.log(indices);
    // console.log(rstinL.findIndex(isLowest));
    // var numConv = numX.toString();
    // console.log(numConv);
}

function sub_loc(term)
{
    if (term == 'Aberdeen' || term == 'aberdeen')
    {
        global_lat = 46.975371;
        global_lng = -123.815722;
    }
    else if (term == 'Agoura' || term == 'agoura')
    {
        global_lat = 34.143056;
        global_lng = -118.736944;
    }
    else if (term == 'Alameda' || term == 'alameda')
    {
        global_lat = 37.601689;
        global_lng = -121.719546;
    }
    else if (term == 'Alamosa' || term == 'alamosa')
    {
        global_lat = 37.469449;
        global_lng = -105.870021;
    }
    else if (term == 'Albany' || term == 'albany')
    {
        global_lat = 44.636511;
        global_lng = -123.105928;
    }
    else if (term == 'Alhambra' || term == 'alhambra')
    {
        global_lat = 34.095287;
        global_lng = -118.127015;
    }
    else if (term == 'Angels camp' || term == 'angels camp')
    {
        global_lat = 38.067783;
        global_lng = -120.53853;
    }
    else if (term == 'Antelope' || term == 'antelope')
    {
        global_lat = 38.716687;
        global_lng = -121.364422;
    }
    else if (term == 'Antioch' || term == 'antioch')
    {
        global_lat = 38.004921;
        global_lng = -121.805789;
    }
    else if (term == 'Aptos' || term == 'aptos')
    {
        global_lat = 36.977173;
        global_lng = -121.899402;
    }
    else if (term == 'Arcata' || term == 'arcata')
    {
        global_lat = 40.866517;
        global_lng = -124.08284;
    }
    else if (term == 'Arden-Arcade' || term == 'arden-arcade')
    {
        global_lat = 38.600807;
        global_lng = -121.377034;
    }
    else if (term == 'Arlington' || term == 'arlington')
    {
        global_lat = 48.198712;
        global_lng = -122.125142;
    }
    else if (term == 'Arnold' || term == 'arnold')
    {
        global_lat = 38.255473;
        global_lng = -120.351031;
    }
    else if (term == 'Ashland' || term == 'ashland')
    {
        global_lat = 42.194576;
        global_lng = -122.709477;
    }
    else if (term == 'Aspen' || term == 'aspen')
    {
        global_lat = 39.191098;
        global_lng = -106.817539;
    }
    else if (term == 'Astoria' || term == 'astoria')
    {
        global_lat = 46.187884;
        global_lng = -123.831253;
    }
    else if (term == 'Auburn' || term == 'auburn')
    {
        global_lat = 38.896565;
        global_lng = -121.07689;
    }
    else if (term == 'Avon' || term == 'avon')
    {
        global_lat = 39.633067;
        global_lng = -106.52222;
    }
    else if (term == 'Azusa' || term == 'azusa')
    {
        global_lat = 34.133619;
        global_lng = -117.907563;
    }
    else if (term == 'Bailey' || term == 'bailey')
    {
        global_lat = 39.405545;
        global_lng = -105.473333;
    }
    else if (term == 'bainbridge' || term == 'bainbridge')
    {
        global_lat = 47.626208;
        global_lng = -122.521245;
    }
    else if (term == 'Basaglobal_lat' || term == 'basaglobal_lat')
    {
        global_lat = 39.368873;
        global_lng = -107.032824;
    }
    else if (term == 'Bay Park' || term == 'bay park')
    {
        global_lat = 32.791837;
        global_lng = -117.199996;
    }
    else if (term == 'Beaverton' || term == 'beaverton')
    {
        global_lat = 45.487062;
        global_lng = -122.80371;
    }
    else if (term == 'Belfair' || term == 'belfair')
    {
        global_lat = 47.451459;
        global_lng = -122.826946;
    }
    else if (term == 'Bellevue' || term == 'bellevue')
    {
        global_lat = 47.610377;
        global_lng = -122.200679;
    }
    else if (term == 'Bellingham' || term == 'bellingham')
    {
        global_lat = 48.74908;
        global_lng = -122.478147;
    }
    else if (term == 'Ben Lomond' || term == 'ben lomond')
    {
        global_lat = 37.089114;
        global_lng = -122.086353;
    }
    else if (term == 'Bend' || term == 'bend')
    {
        global_lat = 44.058173;
        global_lng = -121.31531;
    }
    else if (term == 'Berkeley' || term == 'berkeley')
    {
        global_lat = 37.871593;
        global_lng = -122.272747;
    }
    else if (term == 'Berthoud' || term == 'berthoud')
    {
        global_lat = 40.308317;
        global_lng = -105.081092;
    }
    else if (term == 'Bingen' || term == 'bingen')
    {
        global_lat = 45.714842;
        global_lng = -121.464517;
    }
    else if (term == 'Bonita' || term == 'bonita')
    {
        global_lat = 32.658326;
        global_lng = -117.03529;
    }
    else if (term == 'Bothell' || term == 'bothell')
    {
        global_lat = 47.76232;
        global_lng = -122.205403;
    }
    else if (term == 'Boulder' || term == 'boulder')
    {
        global_lat = 40.014986;
        global_lng = -105.270546;
    }
    else if (term == 'Boulder creek' || term == 'boulder breek')
    {
        global_lat = 37.126058;
        global_lng = -122.122187;
    }
    else if (term == 'Bow' || term == 'bow')
    {
        global_lat = 48.561774;
        global_lng = -122.398219;
    }
    else if (term == 'Breckenridge' || term == 'breckenridge')
    {
        global_lat = 39.481654;
        global_lng = -106.038352;
    }
    else if (term == 'Bremerton' || term == 'bremerton')
    {
        global_lat = 47.56732;
        global_lng = -122.632936;
    }
    else if (term == 'Brentwood' || term == 'brentwood')
    {
        global_lat = 37.931868;
        global_lng = -121.695786;
    }
    else if (term == 'Buena Vista' || term == 'buena vista')
    {
        global_lat = 38.842218;
        global_lng = -106.131129;
    }
    else if (term == 'Burlington' || term == 'burlington')
    {
        global_lat = 48.475662;
        global_lng = -122.325438;
    }
    else if (term == 'calabasas' || term == 'calabasas')
    {
        global_lat = 34.138333;
        global_lng = -118.660833;
    }
    else if (term == 'camano Island' || term == 'camano island')
    {
        global_lat = 48.187056;
        global_lng = -122.507847;
    }
    else if (term == 'camarillo' || term == 'camarillo')
    {
        global_lat = 34.216394;
        global_lng = -119.037602;
    }
    else if (term == 'cameron Park' || term == 'cameron park')
    {
        global_lat = 38.668793;
        global_lng = -120.987164;
    }
    else if (term == 'canoga Park' || term == 'canoga park')
    {
        global_lat = 34.208254;
        global_lng = -118.605861;
    }
    else if (term == 'canon city' || term == 'canon city')
    {
        global_lat = 47.751074;
        global_lng = -120.740139;
    }
    else if (term == 'canyon country' || term == 'canyon country')
    {
        global_lat = 34.423329;
        global_lng = -118.472028;
    }
    else if (term == 'carbondale' || term == 'carbondale')
    {
        global_lat = 39.402205;
        global_lng = -107.211163;
    }
    else if (term == 'carmel Valley' || term == 'carmel valley')
    {
        global_lat = 32.939827;
        global_lng = -117.202936;
    }
    else if (term == 'carmichael' || term == 'carmichael')
    {
        global_lat = 38.617127;
        global_lng = -121.328284;
    }
    else if (term == 'carpinteria' || term == 'carpinteria')
    {
        global_lat = 34.398884;
        global_lng = -119.518456;
    }
    else if (term == 'casa Grande' || term == 'casa grande')
    {
        global_lat = 32.879502;
        global_lng = -111.757352;
    }
    else if (term == 'cascade' || term == 'cascade')
    {
        global_lat = 38.896657;
        global_lng = -104.972201;
    }
    else if (term == 'castro Valley' || term == 'castro valley')
    {
        global_lat = 37.694097;
        global_lng = -122.086352;
    }
    else if (term == 'cave creek' || term == 'cave creek')
    {
        global_lat = 33.833372;
        global_lng = -111.950704;
    }
    else if (term == 'central city' || term == 'central city')
    {
        global_lat = 39.801932;
        global_lng = -105.514164;
    }
    else if (term == 'central Valley' || term == 'central valley')
    {
        global_lat = 40.680428;
        global_lng = 122.370842;
    }
    else if (term == 'centralia' || term == 'centralia')
    {
        global_lat = 46.716214;
        global_lng = -122.954297;
    }
    else if (term == 'chandler' || term == 'chandler')
    {
        global_lat = 33.30616;
        global_lng = -111.84125;
    }
    else if (term == 'charter Oak' || term == 'charter oak')
    {
        global_lat = 34.098945;
        global_lng = -117.848726;
    }
    else if (term == 'chatsworth' || term == 'chatsworth')
    {
        global_lat = 34.052234;
        global_lng = -118.243685;
    }
    else if (term == 'chelhalis' || term == 'chelhalis')
    {
        global_lat = 46.662048;
        global_lng = -122.964018;
    }
    else if (term == 'chula Vista' || term == 'chula vista')
    {
        global_lat = 32.640054;
        global_lng = -117.084196;
    }
    else if (term == 'citrus Heights' || term == 'citrus heights')
    {
        global_lat = 38.707125;
        global_lng = -121.281061;
    }
    else if (term == 'clearlake' || term == 'clearlake')
    {
        global_lat = 38.958231;
        global_lng = -122.626373;
    }
    else if (term == 'clovis' || term == 'clovis')
    {
        global_lat = 36.825228;
        global_lng = -119.702919;
    }
    else if (term == 'colfax' || term == 'colfax')
    {
        global_lat = 39.10073;
        global_lng = -120.953276;
    }
    else if (term == 'colorado Springs' || term == 'colorado springs')
    {
        global_lat = 38.833882;
        global_lng = -104.821363;
    }
    else if (term == 'concord' || term == 'concord')
    {
        global_lat = 37.977978;
        global_lng = -122.031073;
    }
    else if (term == 'conway' || term == 'conway')
    {
        global_lat = 48.34038;
        global_lng = -122.342934;
    }
    else if (term == 'coolidge' || term == 'coolidge')
    {
        global_lat = 32.977839;
        global_lng = -111.517624;
    }
    else if (term == 'corte Madera' || term == 'corte madera')
    {
        global_lat = 37.925481;
        global_lng = -122.527475;
    }
    else if (term == 'cortez' || term == 'cortez')
    {
        global_lat = 37.348883;
        global_lng = -108.585927;
    }
    else if (term == 'corvallis' || term == 'corvallis')
    {
        global_lat = 44.564566;
        global_lng = -123.262043;
    }
    else if (term == 'covina' || term == 'covina')
    {
        global_lat = 34.090009;
        global_lng = -117.89034;
    }
    else if (term == 'covington' || term == 'covington')
    {
        global_lat = 47.359559;
        global_lng = -122.118012;
    }
    else if (term == 'crested Butte' || term == 'crested butte')
    {
        global_lat = 38.869715;
        global_lng = -106.987823;
    }
    else if (term == 'Davis' || term == 'davis')
    {
        global_lat = 38.544907;
        global_lng = -121.740517;
    }
    else if (term == 'Del Rey Oaks' || term == 'del rey oaks')
    {
        global_lat = 36.593293;
        global_lng = -121.834951;
    }
    else if (term == 'Delano' || term == 'delano')
    {
        global_lat = 35.768843;
        global_lng = -119.247054;
    }
    else if (term == 'Denver' || term == 'denver')
    {
        global_lat = 39.737567;
        global_lng = -104.984718;
    }
    else if (term == 'Diamond Springs' || term == 'diamond springs')
    {
        global_lat = 38.694626;
        global_lng = -120.814935;
    }
    else if (term == 'Divide' || term == 'divide')
    {
        global_lat = 38.942256;
        global_lng = -105.15764;
    }
    else if (term == 'Downieville' || term == 'downieville')
    {
        global_lat = 39.769699;
        global_lng = -105.612602;
    }
    else if (term == 'Dumont' || term == 'dumont')
    {
        global_lat = 39.76471;
        global_lng = -105.600278;
    }
    else if (term == 'Durango' || term == 'durango')
    {
        global_lat = 37.27528;
        global_lng = -107.880067;
    }
    else if (term == 'Eagle' || term == 'eagle')
    {
        global_lat = 39.655263;
        global_lng = -106.828651;
    }
    else if (term == 'Edgewater' || term == 'edgewater')
    {
        global_lat = 39.753043;
        global_lng = -105.06415;
    }
    else if (term == 'Edmonds' || term == 'edmonds')
    {
        global_lat = 37.810652;
        global_lng = -122.377355;
    }
    else if (term == 'Edwards' || term == 'edwards')
    {
        global_lat = 39.644986;
        global_lng = -106.5942;
    }
    else if (term == 'El cajon' || term == 'el cajon')
    {
        global_lat = 32.794773;
        global_lng = -116.962527;
    }
    else if (term == 'El Mirage' || term == 'el mirage')
    {
        global_lat = 33.613094;
        global_lng = -112.324604;
    }
    else if (term == 'El Monte' || term == 'el monte')
    {
        global_lat = 34.068621;
        global_lng = -118.027567;
    }
    else if (term == 'El Sobrante' || term == 'el sobrante')
    {
        global_lat = 37.977145;
        global_lng = -122.295247;
    }
    else if (term == 'Elk' || term == 'elk')
    {
        global_lat = 48.016389;
        global_lng = -117.275556;
    }
    else if (term == 'Elk Grove' || term == 'elk grove')
    {
        global_lat = 38.408799;
        global_lng = -121.371618;
    }
    else if (term == 'Empire' || term == 'empire')
    {
        global_lat = 39.761376;
        global_lng = -105.684448;
    }
    else if (term == 'Encino' || term == 'encino')
    {
        global_lat = 34.151749;
        global_lng = -118.521428;
    }
    else if (term == 'Eugene' || term == 'Eugene')
    {
        global_lat = 44.052069;
        global_lng = -123.086754;
    }
    else if (term == 'Eureka' || term == 'eureka')
    {
        global_lat = 40.802071;
        global_lng = -124.163673;
    }
    else if (term == 'Everett' || term == 'everett')
    {
        global_lat = 47.978985;
        global_lng = -122.202079;
    }
    else if (term == 'Fairfield' || term == 'fairfield')
    {
        global_lat = 38.249358;
        global_lng = -122.039966;
    }
    else if (term == 'Fairplay' || term == 'fairplay')
    {
        global_lat = 39.224713;
        global_lng = -106.001962;
    }
    else if (term == 'Federal Way' || term == 'federal way')
    {
        global_lat = 47.322322;
        global_lng = -122.312622;
    }
    else if (term == 'Ferndale' || term == 'ferndale')
    {
        global_lat = 48.846499;
        global_lng = -122.591006;
    }
    else if (term == 'Folsom' || term == 'folsom')
    {
        global_lat = 38.677959;
        global_lng = -121.176058;
    }
    else if (term == 'Fort Bragg' || term == 'fort bragg')
    {
        global_lat = 39.445723;
        global_lng = -123.805293;
    }
    else if (term == 'Fort collins' || term == 'fort collins')
    {
        global_lat = 40.58526;
        global_lng = -105.084423;
    }
    else if (term == 'Fountain Hills' || term == 'fountain hills')
    {
        global_lat = 33.6;
        global_lng = -111.72;
    }
    else if (term == 'Fremont' || term == 'fremont')
    {
        global_lat = 37.54827;
        global_lng = -121.988572;
    }
    else if (term == 'Fresno' || term == 'fresno')
    {
        global_lat = 36.746842;
        global_lng = -119.772587;
    }
    else if (term == 'Frisco' || term == 'frisco')
    {
        global_lat = 39.574431;
        global_lng = -106.09752;
    }
    else if (term == 'Ft. Garland' || term == 'ft. garland')
    {
        global_lat = 37.428897;
        global_lng = -105.4339;
    }
    else if (term == 'Garden city' || term == 'garden city')
    {
        global_lat = 40.39387;
        global_lng = -104.689409;
    }
    else if (term == 'Georgetown' || term == 'georgetown')
    {
        global_lat = 39.706098;
        global_lng = -105.697504;
    }
    else if (term == 'Gilroy' || term == 'gilroy')
    {
        global_lat = 37.005782;
        global_lng = -121.568275;
    }
    else if (term == 'Gladstone' || term == 'gladstone')
    {
        global_lat = 45.380676;
        global_lng = -122.594814;
    }
    else if (term == 'Glenwood Springs' || term == 'glenwood springs')
    {
        global_lat = 39.550538;
        global_lng = -107.324776;
    }
    else if (term == 'Golden' || term == 'golden')
    {
        global_lat = 39.755543;
        global_lng = -105.2211;
    }
    else if (term == 'Goleta' || term == 'goleta')
    {
        global_lat = 34.435829;
        global_lng = -119.827639;
    }
    else if (term == 'Goodyear' || term == 'goodyear')
    {
        global_lat = 33.441769;
        global_lng = -112.397347;
    }
    else if (term == 'Goshen' || term == 'goshen')
    {
        global_lat = 36.351062;
        global_lng = -119.42012;
    }
    else if (term == 'Granada Hills' || term == 'granada hills')
    {
        global_lat = 34.279358;
        global_lng = -118.502153;
    }
    else if (term == 'Granite Bay' || term == 'granite bay')
    {
        global_lat = 38.763235;
        global_lng = -121.163836;
    }
    else if (term == 'Grass Valley' || term == 'grass valley')
    {
        global_lat = 39.219061;
        global_lng = -121.061061;
    }
    else if (term == 'Hacienda Heights' || term == 'hacienda heights')
    {
        global_lat = 33.993068;
        global_lng = -117.968676;
    }
    else if (term == 'Hanford' || term == 'hanford')
    {
        global_lat = 36.32745;
        global_lng = -119.645684;
    }
    else if (term == 'Hayward' || term == 'hayward')
    {
        global_lat = 37.668821;
        global_lng = -122.080796;
    }
    else if (term == 'Hollister' || term == 'hollister')
    {
        global_lat = 36.852455;
        global_lng = -121.401602;
    }
    else if (term == 'Hopland' || term == 'hopland')
    {
        global_lat = 38.973056;
        global_lng = -123.116389;
    }
    else if (term == 'Idaho Springs' || term == 'idaho springs')
    {
        global_lat = 39.742488;
        global_lng = -105.513608;
    }
    else if (term == 'Imperial Beach' || term == 'imperial beach')
    {
        global_lat = 32.583944;
        global_lng = -117.113085;
    }
    else if (term == 'Isla Vista' || term == 'isla vista')
    {
        global_lat = 34.413329;
        global_lng = -119.860972;
    }
    else if (term == 'Issaquah' || term == 'issaquah')
    {
        global_lat = 47.530101;
        global_lng = -122.032619;
    }
    else if (term == 'Kelso' || term == 'kelso')
    {
        global_lat = 46.146779;
        global_lng = -122.908444;
    }
    else if (term == 'Kennewick' || term == 'kennewick')
    {
        global_lat = 46.211246;
        global_lng = -119.137234;
    }
    else if (term == 'Kent' || term == 'kent')
    {
        global_lat = 47.380934;
        global_lng = -122.234843;
    }
    else if (term == 'Keyes' || term == 'keyes')
    {
        global_lat = 37.556599;
        global_lng = -120.915486;
    }
    else if (term == 'Kirkland' || term == 'kirkland')
    {
        global_lat = 47.681488;
        global_lng = -122.208735;
    }
    else if (term == 'La Mesa' || term == 'la mesa')
    {
        global_lat = 32.767829;
        global_lng = -117.023084;
    }
    else if (term == 'La Verne' || term == 'la verne')
    {
        global_lat = 34.100843;
        global_lng = -117.767835;
    }
    else if (term == 'Lacey' || term == 'lacey')
    {
        global_lat = 47.034263;
        global_lng = -122.823191;
    }
    else if (term == 'Lake Isabella' || term == 'lake isabella')
    {
        global_lat = 35.618009;
        global_lng = -118.473141;
    }
    else if (term == 'Lake Stevens' || term == 'lake stevens')
    {
        global_lat = 48.015098;
        global_lng = -122.063742;
    }
    else if (term == 'Lake Tahoe' || term == 'lake tahoe')
    {
        global_lat = 39.096849;
        global_lng = -120.032351;
    }
    else if (term == 'Lake Tapps' || term == 'lake tapps')
    {
        global_lat = 47.214793;
        global_lng = -122.170177;
    }
    else if (term == 'Lakewood' || term == 'lakewood')
    {
        global_lat = 39.70471;
        global_lng = -105.081373;
    }
    else if (term == 'Las Vegas' || term == 'las vegas')
    {
        global_lat = 36.169941;
        global_lng = -115.13983;
    }
    else if (term == 'Leadville' || term == 'leadville')
    {
        global_lat = 39.250823;
        global_lng = -106.292524;
    }
    else if (term == 'Leavenworth' || term == 'leavenworth')
    {
        global_lat = 47.596233;
        global_lng = -120.661476;
    }
    else if (term == 'Lincoglobal_lng' || term == 'lincoglobal_lng')
    {
        global_lat = 38.891565;
        global_lng = -121.293008;
    }
    else if (term == 'Lincoglobal_lng city' || term == 'lincoglobal_lng city')
    {
        global_lat = 44.958164;
        global_lng = -124.017891;
    }
    else if (term == 'Lodi' || term == 'lodi')
    {
        global_lat = 38.134148;
        global_lng = -121.272219;
    }
    else if (term == 'Longmont' || term == 'longmont')
    {
        global_lat = 40.167207;
        global_lng = -105.101927;
    }
    else if (term == 'Longview' || term == 'longview')
    {
        global_lat = 46.138168;
        global_lng = -122.938167;
    }
    else if (term == 'Los Angeles' || term == 'los angeles')
    {
        global_lat = 34.052234;
        global_lng = -118.243685;
    }
    else if (term == 'Los Banos' || term == 'los banos')
    {
        global_lat = 37.058279;
        global_lng = -120.849915;
    }
    else if (term == 'Louisville' || term == 'louisville')
    {
        global_lat = 39.977763;
        global_lng = -105.13193;
    }
    else if (term == 'Lucerne' || term == 'lucerne')
    {
        global_lat = 39.090171;
        global_lng = -122.796381;
    }
    else if (term == 'Lynden' || term == 'lynden')
    {
        global_lat = 48.946504;
        global_lng = -122.452107;
    }
    else if (term == 'Lynwood' || term == 'lynwood')
    {
        global_lat = 32.036081;
        global_lng = -115.927411;
    }
    else if (term == 'Lyons' || term == 'lyons')
    {
        global_lat = 40.224708;
        global_lng = -105.271378;
    }
    else if (term == 'Madera' || term == 'madera')
    {
        global_lat = 36.961336;
        global_lng = -120.060718;
    }
    else if (term == 'Mammoth Lakes' || term == 'mammoth lakes')
    {
        global_lat = 37.648546;
        global_lng = -118.972079;
    }
    else if (term == 'Manteca' || term == 'manteca')
    {
        global_lat = 37.797427;
        global_lng = -121.216053;
    }
    else if (term == 'Maple Valley' || term == 'maple valley')
    {
        global_lat = 47.366111;
        global_lng = -122.044722;
    }
    else if (term == 'Maricopa' || term == 'maricopa')
    {
        global_lat = 33.058106;
        global_lng = -112.047642;
    }
    else if (term == 'Marin' || term == 'marin')
    {
        global_lat = 38.083403;
        global_lng = -122.763304;
    }
    else if (term == 'Martinez' || term == 'martinez')
    {
        global_lat = 38.019366;
        global_lng = -122.134132;
    }
    else if (term == 'McMinnville' || term == 'mcMinnville')
    {
        global_lat = 45.210116;
        global_lng = -123.198716;
    }
    else if (term == 'Mendocino' || term == 'mendocino')
    {
        global_lat = 39.307674;
        global_lng = -123.799459;
    }
    else if (term == 'Merced' || term == 'merced')
    {
        global_lat = 37.302163;
        global_lng = -120.482968;
    }
    else if (term == 'Mercer Island' || term == 'mercer Island')
    {
        global_lat = 47.570655;
        global_lng = -122.222067;
    }
    else if (term == 'Mesa' || term == 'mesa')
    {
        global_lat = 33.415184;
        global_lng = -111.831472;
    }
    else if (term == 'Meyers' || term == 'meyers')
    {
        global_lat = 38.856111;
        global_lng = -120.013056;
    }
    else if (term == 'Mill Valley' || term == 'mill valley')
    {
        global_lat = 37.906037;
        global_lng = -122.544976;
    }
    else if (term == 'Miglobal_laton' || term == 'miglobal_laton')
    {
        global_lat = 47.248156;
        global_lng = -122.312899;
    }
    else if (term == 'Mission Hills' || term == 'mission hills')
    {
        global_lat = 34.688246;
        global_lng = -120.436421;
    }
    else if (term == 'Modesto' || term == 'modesto')
    {
        global_lat = 37.639097;
        global_lng = -120.996878;
    }
    else if (term == 'Moffat' || term == 'moffat')
    {
        global_lat = 37.998888;
        global_lng = -105.910016;
    }
    else if (term == 'Monroe' || term == 'monroe')
    {
        global_lat = 47.855377;
        global_lng = -121.970958;
    }
    else if (term == 'Monrovia' || term == 'monrovia')
    {
        global_lat = 34.144262;
        global_lng = -118.001948;
    }
    else if (term == 'Monterey' || term == 'monterey')
    {
        global_lat = 36.600238;
        global_lng = -121.894676;
    }
    else if (term == 'Montrose' || term == 'montrose')
    {
        global_lat = 38.47832;
        global_lng = -107.876174;
    }
    else if (term == 'Moorpark' || term == 'moorpar')
    {
        global_lat = 34.285558;
        global_lng = -118.882041;
    }
    else if (term == 'Moraga' || term == 'Moraga')
    {
        global_lat = 37.834926;
        global_lng = -122.129687;
    }
    else if (term == 'Moses Lake' || term == 'moses lake')
    {
        global_lat = 47.130142;
        global_lng = -119.278077;
    }
    else if (term == 'Mount Vernon' || term == 'mount vernon')
    {
        global_lat = 48.421216;
        global_lng = -122.334047;
    }
    else if (term == 'Mountain View' || term == 'mountain view')
    {
        global_lat = 39.774431;
        global_lng = -105.055539;
    }
    else if (term == 'Mt. Shasta' || term == 'mt. shasta')
    {
        global_lat = 41.309875;
        global_lng = -122.310567;
    }
    else if (term == 'Mukiglobal_lateo' || term == 'mukiglobal_lateo')
    {
        global_lat = 47.94454;
        global_lng = -122.304581;
    }
    else if (term == 'National city' || term == 'national city')
    {
        global_lat = 32.678109;
        global_lng = -117.099197;
    }
    else if (term == 'Nederland' || term == 'nederland')
    {
        global_lat = 39.961376;
        global_lng = -105.510831;
    }
    else if (term == 'North Hills' || term == 'north hills')
    {
        global_lat = 34.235822;
        global_lng = -118.484936;
    }
    else if (term == 'North Las Vegas' || term == 'north las vegas')
    {
        global_lat = 36.198859;
        global_lng = -115.117501;
    }
    else if (term == 'North Sherman Oaks' || term == 'north sherman oaks')
    {
        global_lat = 34.148972;
        global_lng = -118.451357;
    }
    else if (term == 'Northglenn' || term == 'northglenn')
    {
        global_lat = 39.896182;
        global_lng = -104.981147;
    }
    else if (term == 'Northridge' || term == 'northridge')
    {
        global_lat = 34.238125;
        global_lng = -118.530123;
    }
    else if (term == 'Novato' || term == 'novato')
    {
        global_lat = 38.10742;
        global_lng = -122.569703;
    }
    else if (term == 'Oak creek' || term == 'oak creek')
    {
        global_lat = 40.274981;
        global_lng = -106.958383;
    }
    else if (term == 'Oak Harbor' || term == 'oak harbor')
    {
        global_lat = 48.293156;
        global_lng = -122.643224;
    }
    else if (term == 'Oakland' || term == 'oakland')
    {
        global_lat = 37.804364;
        global_lng = -122.271114;
    }
    else if (term == 'Oakley' || term == 'oakley')
    {
        global_lat = 37.997422;
        global_lng = -121.712454;
    }
    else if (term == 'Olympia' || term == 'olympia')
    {
        global_lat = 47.037874;
        global_lng = -122.900695;
    }
    else if (term == 'Orangevale' || term == 'orangevale')
    {
        global_lat = 38.678515;
        global_lng = -121.225782;
    }
    else if (term == 'Oregon city' || term == 'oregon city')
    {
        global_lat = 45.357343;
        global_lng = -122.606758;
    }
    else if (term == 'Otay Mesa' || term == 'otay mesa')
    {
        global_lat = 32.559473;
        global_lng = -116.973468;
    }
    else if (term == 'Oxnard' || term == 'oxnard')
    {
        global_lat = 34.197505;
        global_lng = -119.177052;
    }
    else if (term == 'Pacoima' || term == 'pacoima')
    {
        global_lat = 34.276769;
        global_lng = -118.410468;
    }
    else if (term == 'Palisade' || term == 'palisade')
    {
        global_lat = 39.110259;
        global_lng = -108.350919;
    } 
    else if (term == 'Palmer Lake' || term == 'palmer lake')
    {
        global_lat = 39.122214;
        global_lng = -104.917204;
    }
    else if (term == 'Panorama city' || term == 'panorama city')
    {
        global_lat = 34.227617;
        global_lng = -118.442425;
    }
    else if (term == 'Penrose' || term == 'penrose')
    {
        global_lat = 38.425;
        global_lng = -105.022762;
    }
    else if (term == 'Peoria' || term == 'peoria')
    {
        global_lat = 33.580596;
        global_lng = -112.237378;
    }
    else if (term == 'Pittsburg' || term == 'pittsburg')
    {
        global_lat = 38.027976;
        global_lng = -121.884681;
    }
    else if (term == 'Placerville' || term == 'placerville')
    {
        global_lat = 38.729625;
        global_lng = -120.798546;
    }
    else if (term == 'Pleasant Hill' || term == 'pleasant hill')
    {
        global_lat = 37.947979;
        global_lng = -122.060796;
    }
    else if (term == 'Port Angeles' || term == 'port angeles')
    {
        global_lat = 48.118146;
        global_lng = -123.430741;
    }
    else if (term == 'Port Hueneme' || term == 'port hueneme')
    {
        global_lat = 34.147783;
        global_lng = -119.195107;
    }
    else if (term == 'Port Orchard' || term == 'port orchard')
    {
        global_lat = 47.540373;
        global_lng = -122.636249;
    }
    else if (term == 'Port Townsend' || term == 'port townsend')
    {
        global_lat = 48.117039;
        global_lng = -122.760447;
    }
    else if (term == 'Porter Ranch' || term == 'porter ranch')
    {
        global_lat = 34.282213;
        global_lng = -118.550616;
    }
    else if (term == 'Portland' || term == 'portland')
    {
        global_lat = 45.523452;
        global_lng = -122.676207;
    }
    else if (term == 'Potlatch' || term == 'potlatch')
    {
        global_lat = 46.92156;
        global_lng = -116.898219;
    }
    else if (term == 'Pueblo' || term == 'pueblo')
    {
        global_lat = 38.254447;
        global_lng = -104.609141;
    }
    else if (term == 'Raymond' || term == 'raymond')
    {
        global_lat = 46.686489;
        global_lng = -123.732938;
    }
    else if (term == 'Redding' || term == 'redding')
    {
        global_lat = 40.58654;
        global_lng = -122.391675;
    }
    else if (term == 'Redmond' || term == 'redmond')
    {
        global_lat = 47.673988;
        global_lng = -122.121512;
    }
    else if (term == 'Redwood city' || term == 'redwood city')
    {
        global_lat = 37.485215;
        global_lng = -122.236355;
    }
    else if (term == 'Renton' || term == 'renton')
    {
        global_lat = 47.482878;
        global_lng = -122.217066;
    }
    else if (term == 'Reseda' || term == 'reseda')
    {
        global_lat = 34.201114;
        global_lng = -118.536052;
    }
    else if (term == 'Richmond' || term == 'richmond')
    {
        global_lat = 37.935758;
        global_lng = -122.347749;
    }
    else if (term == 'Ridgway' || term == 'ridgway')
    {
        global_lat = 38.152587;
        global_lng = -107.755616;
    }
    else if (term == 'Rifle' || term == 'rifle')
    {
        global_lat = 39.534702;
        global_lng = -107.78312;
    }
    else if (term == 'Rocklin' || term == 'rocklin')
    {
        global_lat = 38.790734;
        global_lng = -121.235783;
    }
    else if (term == 'Rockridge' || term == 'rockridge')
    {
        global_lat = 37.84436;
        global_lng = -122.249791;
    }
    else if (term == 'Roseville' || term == 'roseville')
    {
        global_lat = 38.752124;
        global_lng = -121.288006;
    }
    else if (term == 'Roslyn' || term == 'roslyn')
    {
        global_lat = 47.223452;
        global_lng = -120.993139;
    }
    else if (term == 'Rowland Heights' || term == 'rowland heights')
    {
        global_lat = 33.976124;
        global_lng = -117.905339;
    }
    else if (term == 'Sacramento' || term == 'sacramento')
    {
        global_lat = 38.581572;
        global_lng = -121.4944;
    }
    else if (term == 'Salem' || term == 'salem')
    {
        global_lat = 44.942898;
        global_lng = -123.035096;
    }
    else if (term == 'Salida' || term == 'salida')
    {
        global_lat = 38.534719;
        global_lng = -105.998902;
    }
    else if (term == 'Salinas' || term == 'salinas')
    {
        global_lat = 36.677737;
        global_lng = -121.655501;
    }
    else if (term == 'San Andreas' || term == 'san andreas')
    {
        global_lat = 38.19603;
        global_lng = -120.680487;
    }
    else if (term == 'San Diego' || term == 'san diego')
    {
        global_lat = 32.715738;
        global_lng = -117.161084;
    }
    else if (term == 'San Francisco' || term == 'san francisco')
    {
        global_lat = 37.77493;
        global_lng = -122.419416;
    }
    else if (term == 'San Gabriel' || term == 'san gabriel')
    {
        global_lat = 34.096111;
        global_lng = -118.105833;
    }
    else if (term == 'San Jose' || term == 'san jose')
    {
        global_lat = 37.339386;
        global_lng = -121.894955;
    }
    else if (term == 'San Luis' || term == 'san luis')
    {
        global_lat = 37.200848;
        global_lng = -105.423901;
    }
    else if (term == 'San Rafael' || term == 'san rafael')
    {
        global_lat = 37.973535;
        global_lng = -122.531087;
    }
    else if (term == 'San Ysidro' || term == 'san ysidro')
    {
        global_lat = 32.555556;
        global_lng = -117.047043;
    }
    else if (term == 'Santa Barbara' || term == 'santa barbara')
    {
        global_lat = 34.420831;
        global_lng = -119.69819;
    }
    else if (term == 'Santa clarita' || term == 'santa clarita')
    {
        global_lat = 34.391664;
        global_lng = -118.542586;
    }
    else if (term == 'Santa cruz' || term == 'santa cruz')
    {
        global_lat = 36.974117;
        global_lng = -122.030796;
    }
    else if (term == 'Santa Monica' || term == 'santa monica')
    {
        global_lat = 34.019454;
        global_lng = -118.491191;
    }
    else if (term == 'Santa Paula' || term == 'santa paula')
    {
        global_lat = 34.354166;
        global_lng = -119.059271;
    }
    else if (term == 'Santa Rosa' || term == 'santa rosa')
    {
        global_lat = 38.440429;
        global_lng = -122.714055;
    }
    else if (term == 'Scottsdale' || term == 'scottsdale')
    {
        global_lat = 33.49417;
        global_lng = -111.926052;
    }
    else if (term == 'Seattle' || term == 'seattle')
    {
        global_lat = 47.60621;
        global_lng = -122.332071;
    }
    else if (term == 'Sedgwick' || term == 'sedgwick')
    {
        global_lat = 40.93638;
        global_lng = -102.525466;
    }
    else if (term == 'Sequim' || term == 'sequim')
    {
        global_lat = 48.079537;
        global_lng = -123.101844;
    }
    else if (term == 'Shasta Lake city' || term == 'shasta lake city')
    {
        global_lat = 40.680428;
        global_lng = -122.370842;
    }
    else if (term == 'Shaver Lake' || term == 'shaver lake')
    {
        global_lat = 37.104114;
        global_lng = -119.317626;
    }
    else if (term == 'Sheglobal_laton' || term == 'sheglobal_laton')
    {
        global_lat = 47.215095;
        global_lng = -123.100707;
    }
    else if (term == 'Sherman Oaks' || term == 'sherman oaks')
    {
        global_lat = 34.148972;
        global_lng = -118.451357;
    }
    else if (term == 'Shingle Springs' || term == 'shingle springs')
    {
        global_lat = 38.665833;
        global_lng = -120.926111;
    }
    else if (term == 'Silverthorne' || term == 'silverthorne')
    {
        global_lat = 39.629619;
        global_lng = -106.071294;
    }
    else if (term == 'Simi Valley' || term == 'simi valley')
    {
        global_lat = 34.269447;
        global_lng = -118.781482;
    }
    else if (term == 'Snohomish' || term == 'snohomish')
    {
        global_lat = 47.912876;
        global_lng = -122.098185;
    }
    else if (term == 'Solvang' || term == 'solvang')
    {
        global_lat = 34.59582;
        global_lng = -120.137648;
    }
    else if (term == 'Sonora' || term == 'sonora')
    {
        global_lat = 37.98295;
        global_lng = -120.382172;
    }
    else if (term == 'Soquel' || term == 'soquel')
    {
        global_lat = 36.988006;
        global_lng = -121.956627;
    }
    else if (term == 'Soulsbyville' || term == 'soulsbyville')
    {
        global_lat = 37.984647;
        global_lng = -120.2638;
    }
    else if (term == 'South Lake Tahoe' || term == 'south lake tahoe')
    {
        global_lat = 38.939926;
        global_lng = -119.977187;
    }
    else if (term == 'South San Francisco' || term == 'south san francisco')
    {
        global_lat = 37.654656;
        global_lng = -122.40775;
    }
    else if (term == 'Spokane' || term == 'spokane')
    {
        global_lat = 47.65878;
        global_lng = -117.426047;
    }
    else if (term == 'Springfield' || term == 'springfield')
    {
        global_lat = 44.046236;
        global_lng = -123.022029;
    }
    else if (term == 'Steamboat Springs' || term == 'steamboat springs')
    {
        global_lat = 40.484977;
        global_lng = -106.831716;
    }
    else if (term == 'Stockton' || term == 'stockton')
    {
        global_lat = 37.957702;
        global_lng = -121.29078;
    }
    else if (term == 'Studio city' || term == 'studio city')
    {
        global_lat = 34.13956;
        global_lng = -118.387099;
    }
    else if (term == 'Summerland' || term == 'summerland')
    {
        global_lat = 34.421384;
        global_lng = -119.596517;
    }
    else if (term == 'Sunnyvale' || term == 'sunnyvale')
    {
        global_lat = 37.36883;
        global_lng = -122.03635;
    }
    else if (term == 'Sylmar' || term == 'sylmar')
    {
        global_lat = 34.305828;
        global_lng = -118.457197;
    }
    else if (term == 'Tacoma' || term == 'tacoma')
    {
        global_lat = 47.252877;
        global_lng = -122.444291;
    }
    else if (term == 'Tahoe city' || term == 'tahoe city')
    {
        global_lat = 39.172222;
        global_lng = -120.138889;
    }
    else if (term == 'Tarzana' || term == 'tarzana')
    {
        global_lat = 34.149485;
        global_lng = -118.550616;
    }
    else if (term == 'Telluride' || term == 'telluride')
    {
        global_lat = 37.937494;
        global_lng = -107.812285;
    }
    else if (term == 'Tempe' || term == 'tempe')
    {
        global_lat = 33.42551;
        global_lng = -111.940005;
    }
    else if (term == 'Temple city' || term == 'temple city')
    {
        global_lat = 34.107231;
        global_lng = -118.057846;
    }
    else if (term == 'Thousand Oaks' || term == 'thousand oaks')
    {
        global_lat = 34.170561;
        global_lng = -118.837594;
    }
    else if (term == 'Tigard' || term == 'tigard')
    {
        global_lat = 45.431229;
        global_lng = -122.771486;
    }
    else if (term == 'Toledo' || term == 'toledo')
    {
        global_lat = 44.621507;
        global_lng = -123.938448;
    }
    else if (term == 'Tracy' || term == 'tracy')
    {
        global_lat = 37.739651;
        global_lng = -121.425223;
    }
    else if (term == 'Truckee' || term == 'truckee')
    {
        global_lat = 39.327962;
        global_lng = -120.183253;
    }
    else if (term == 'Tulare' || term == 'tulare')
    {
        global_lat = 36.207729;
        global_lng = -119.347338;
    }
    else if (term == 'Turlock' || term == 'turlock')
    {
        global_lat = 37.494657;
        global_lng = -120.846594;
    }
    else if (term == 'Ukiah' || term == 'ukiah')
    {
        global_lat = 39.150171;
        global_lng = -123.207783;
    }
    else if (term == 'Union city' || term == 'union city')
    {
        global_lat = 37.593392;
        global_lng = -122.04383;
    }
    else if (term == 'Union Gap' || term == 'union gap')
    {
        global_lat = 46.557349;
        global_lng = -120.475064;
    }
    else if (term == 'Vacaville' || term == 'vacaville')
    {
        global_lat = 38.356577;
        global_lng = -121.987744;
    }
    else if (term == 'Valencia' || term == 'valencia')
    {
        global_lat = 34.456045;
        global_lng = -118.571336;
    }
    else if (term == 'Vallejo' || term == 'vallejo')
    {
        global_lat = 38.104086;
        global_lng = -122.256637;
    }
    else if (term == 'Valley Springs' || term == 'valley springs')
    {
        global_lat = 38.191586;
        global_lng = -120.829103;
    }
    else if (term == 'Vancouver' || term == 'vancouver')
    {
        global_lat = 45.638728;
        global_lng = -122.661486;
    }
    else if (term == 'Venice' || term == 'venice')
    {
        global_lat = 33.996214;
        global_lng = -118.468878;
    }
    else if (term == 'Ventura' || term == 'ventura')
    {
        global_lat = 34.274646;
        global_lng = -119.229032;
    }
    else if (term == 'Visalia' || term == 'visalia')
    {
        global_lat = 36.330228;
        global_lng = -119.292058;
    }
    else if (term == 'Washington' || term == 'washington')
    {
        global_lat = 47.2755146;
        global_lng = -120.8506483;
    }
    else if (term == 'Waglobal_lngut creek' || term == 'waglobal_lngut creek')
    {
        global_lat = 37.910078;
        global_lng = -122.065182;
    }
    else if (term == 'Watsonville' || term == 'watsonville')
    {
        global_lat = 36.910231;
        global_lng = -121.756895;
    }
    else if (term == 'Wenatchee' || term == 'wenatchee')
    {
        global_lat = 47.42346;
        global_lng = -120.310349;
    }
    else if (term == 'West Hills' || term == 'west hills')
    {
        global_lat = 34.197312;
        global_lng = -118.643981;
    }
    else if (term == 'Westlake Village' || term == 'westlake village')
    {
        global_lat = 34.146647;
        global_lng = -118.807373;
    }
    else if (term == 'Wheat Ridge' || term == 'wheat ridge')
    {
        global_lat = 39.766098;
        global_lng = -105.077206;
    }
    else if (term == 'Wheatland' || term == 'wheatland')
    {
        global_lat = 39.009895;
        global_lng = -121.423013;
    }
    else if (term == 'Wheatridge' || term == 'wheatridge')
    {
        global_lat = 39.766098;
        global_lng = -105.077206;
    }
    else if (term == 'Whidby Island' || term == 'whidby island')
    {
        global_lat = 47.998276;
        global_lng = -122.439503;
    }
    else if (term == 'Winnetka' || term == 'winnetka')
    {
        global_lat = 34.204859;
        global_lng = -118.573962;
    }
    else if (term == 'Woodinville' || term == 'woodinville')
    {
        global_lat = 47.754265;
        global_lng = -122.163458;
    }
    else if (term == 'Woodland Hills'  || term == 'woodland hills')
    {
        global_lat = 34.165357;
        global_lng = -118.608975;
    }
    else if (term == 'Yakima' || term == 'yakima')
    {
        global_lat = 46.602071;
        global_lng = -120.505899;
    }
    else if (term == 'Yelm' || term == 'yelm')
    {
        global_lat = 46.942043;
        global_lng = -122.605958;
    }
    else if (term == 'Yuba city' || term == 'yuba city')
    {
        global_lat = 39.140448;
        global_lng = -121.616911;
    }
    else if (term == 'Zillah' || term == 'zillah')
    {
        global_lat = 46.402073;
        global_lng = -120.261999;
    }
    else if (term == 'San Gabriel' || term == 'san gabriel')
    {
        global_lat = 34.096111;
        global_lng = -118.105833;
    }
    else if (term == 'San Gabriel Valley' || term == 'san gabriel valley')
    {
        global_lat = 34.033344;
        global_lng = -118.037011;
    }
    else if (term == 'canon city' || term == 'canon city')
    {
        alert("Please enter a state");
        if(term == 'WA' || term == 'Washington' || term == 'washington')
        {
            global_lat = 47.751074;
            global_lng = -120.740139;
        }
        else if (term == 'cO' || term == 'colorado' || term == 'colorado')
        {
            global_lat = 38.446667;
            global_lng = -105.228333;
        }
    }
    else if (term == 'Glendale' || term == 'glendale')
    {
        alert("Please enter a state");
        if(term == 'cO' || term == 'colorado' || term == 'colorado')
        {
            global_lat = 47.751074;
            global_lng = -120.740139;
        }
        else if (term == 'AZ' || term == 'arizona' || term == 'Arizona')
        {
            global_lat = 38.446667;
            global_lng = -105.228333;
        }
    }
    else if (term == 'Lafayette' || term == 'lafayette')
    {
        alert("Please enter a state");
        if(term == 'cO' || term == 'colorado' || term == 'colorado')
        {
            global_lat = 47.751074;
            global_lng = -120.740139;
        }
        else if (term == 'cA' || term == 'california' || term == 'california')
        {
            global_lat = 38.446667;
            global_lng = -105.228333;
        }
    }
    else if (term == 'Marysville' || term == 'marysville')
    {
        alert("Please enter a state");
        if(term == 'WA' || term == 'Washington' || term == 'washington')
        {
            global_lat = 47.751074;
            global_lng = -120.740139;
        }
        else if (term == 'cA' || term == 'california' || term == 'california')
        {
            global_lat = 38.446667;
            global_lng = -105.228333;
        }
    }
    else if (term == 'Phoenix' || term == 'phoenix')
    {
        alert("Please enter a state");
        if(term == 'OR' || term == 'Oregon' || term == 'oregon')
        {
            global_lat = 47.751074;
            global_lng = -120.740139;
        }
        else if (term == 'AZ' || term == 'arizona' || term == 'Arizona')
        {
            global_lat = 38.446667;
            global_lng = -105.228333;
        }
    }
    else if (term == 'Seaside' || term == 'seaside')
    {
        alert("Please enter a state");
        if(term == 'OR' || term == 'Oregon' || term == 'oregon')
        {
            global_lat = 47.751074;
            global_lng = -120.740139;
        }
        else if (term == 'cA' || term == 'california' || term == 'california')
        {
            global_lat = 38.446667;
            global_lng = -105.228333;
        }
    }
    else
    {
        return term;
    }
}
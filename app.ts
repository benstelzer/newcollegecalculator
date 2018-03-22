let satOld = ["--Select--","2400","2390","2380","2370","2360","2350","2340","2330","2320","2310","2300","2290","2280","2270","2260","2250","2240","2230","2220","2210","2200","2190","2180",
"2170","2160","2150","2140","2130","2120","2110","2100","2090","2080","2070","2060","2050","2040","2030","2020","2010","2000","1990","1980","1970","1960","1950","1940","1930",
"1920","1910","1900","1890","1880","1870","1860","1850","1840","1830","1820","1810","1800","1790","1780","1770","1760","1750","1740","1730","1720","1710","1700","1690","1680",
"1670","1660","1650","1640","1630","1620","1610",,"1600","1590","1580","1570","1560","1550","1540","1530","1520","1510","1500","1490","1480","1470","1460","1450","1440","1430",
"1420","1410","1400","1390","1380","1370","1360","1350","1340","1330","1320","1310","1300","1290","1280","1270","1260","1250","1240","1230","1220","1210","1200","1190","1180",
"1170","1160","1150","1140","1130","1120","1110","1100","1090","1080","1070","1060","1050","1040","1030","1020","1010","1000","990","980","970","960","950","940","930",
"920","910","900","890","880","870","860","850","840","830","820","810","800","790","780","770","760","750","740","730","720","710","700","690","680",
"670","660","650","640","630","620","610","600"];

let satOldScore = [0,10,10,10,10,10,10,9.5,9.5,9.5,9.5,9.5,9,9,9,9,9,8.5,8.5,8.5,8.5,8.5,8,8,8,8,8,7.5,7.5,7.5,7.5,7.5,7,7,7,7,7,6.5,6.5,6.5,6.5,6.5,6.5,6.5,6.5,6.5,6.5,
6,6,6,6,6,5.8,5.8,5.8,5.8,5.8,5.8,5.8,5.8,5.8,5.8,5.5,5.5,5.5,5.5,5.5,5.5,5.5,5.5,5.5,5.5,5,5,5,5,5,5,5,5,5,5,4.5,4.5,4.5,4.5,4.5,4.5,4.5,4.5,4.5,4.5,4,4,4,4,4,4,
4,4,4,4,4,4,4,4,4,4,4,4,4,4,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3,3,3,3,3,3,3,
3,3,3,2.5,2.5,2.5,2.5,2.5,2.5,2.5,2.5,2.5,2.5,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1];

let satNew = ["--Select--","1600","1590","1580","1570","1560","1550","1540","1530","1520","1510","1500","1490","1480","1470","1460","1450","1440","1430","1420","1410",
"1400","1390","1380","1370","1360","1350","1340","1330","1320","1310","1300","1290","1280","1270","1260","1250","1240","1230","1220","1210","1200","1190","1180","1170","1160",
"1150","1140","1130","1120","1110","1100","1090","1080","1070","1060","1050","1040","1030","1020","1010","1000","990","980","970","960","950","940","930","920","910",
"900","890","880","870","860","850","840","830","820","810","800",
"790","780","770","760","750","740","730","720","710","700","690","680","670","660","650","640","630","620","610","600","590","580","570","560","550"
,"540","530","520","510","500","490","480","470","460","450","440","430","420","410","400"];

let satNewScore = [0,10,10,10,10,9.5,9.5,9.5,9,9,9,9,8.5,8.5,8.5,8.5,8,8,8,8,7.5,7.5,7.5,7.5,7,7,7,7,6.5,6.5,6.5,6.5,6,6,6,6,5.8,5.8,5.8,5.8,5.8,5.8,5.5,5.5,5.5,5.5,5.5,
5.5,5.5,5.5,5,5,5,5,5,5,5,5,4.5,4.5,4.5,4.5,4.5,4.5,4.5,4,4,4,4,4,4,4,4,4,4,4,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3,
3,3,3,3,3,2.5,2.5,2.5,2.5,2,2,2,2,2,1.5,1.5,1.5,1.5,1.5,1,1,1,1,1,1];

let act = ["--Select--","36","35","34","33","32","31","30","29","28","27","26","25","24","23","22","21","20","19","18","17","16","15","14",
"13","12","11","10","9","8","7","6","5","4","3","2","1"];

let actScore = [0,10,9.5,9,8.5,8,7.5,7,6.5,6.5,6,5.8,5.5,5.5,5,4.5,4.5,4,4,3.5,3.5,3.5,3,3,3,2.5,2.5,2.5,2,2,2,1.5,1.5,1.5,1,1,1];

let satTwo = ["--Select--","1600","1590","1580","1570","1560","1550","1540","1530","1520","1510","1500","1490","1480","1470","1460","1450","1440","1430","1420","1410",
"1400","1390","1380","1370","1360","1350","1340","1330","1320","1310","1300","1290","1280","1270","1260","1250","1240","1230","1220","1210","1200","1190","1180","1170","1160",
"1150","1140","1130","1120","1110","1100","1090","1080","1070","1060","1050","1040","1030","1020","1010","1000","990","980","970","960","950","940","930","920","910",
"900","890","880","870","860","850","840","830","820","810","800",
"790","780","770","760","750","740","730","720","710","700","690","680","670","660","650","640","630","620","610","600","590","580","570","560","550"
,"540","530","520","510","500","490","480","470","460","450","440","430","420","410","400"];

let satTwoScore = [0,10,10,10,10,9.5,9.5,9.5,9,9,9,9,8.5,8.5,8.5,8.5,8,8,8,8,7.5,7.5,7.5,7.5,7,7,7,7,6.5,6.5,6.5,6.5,6,6,6,6,5.8,5.8,5.8,5.8,5.8,5.8,5.5,5.5,5.5,5.5,5.5,
5.5,5.5,5.5,5,5,5,5,5,5,5,5,4.5,4.5,4.5,4.5,4.5,4.5,4.5,4,4,4,4,4,4,4,4,4,4,4,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3.5,3,
3,3,3,3,3,2.5,2.5,2.5,2.5,2,2,2,2,2,1.5,1.5,1.5,1.5,1.5,1,1,1,1,1,1];

let rank =["1-2%","2-5%","5-10%","10-15%","15-20%","20-25%","25-30%","30-35%","35-40%","40-45%","45-50%","50-55%","55-60%","60-65%","65-70%","70-75%","75-80%","80-85%","85-90%","90-95%","95-100%"];

let rankScore = [10,9.5,9,8.5,8,7,6.5,6,5.5,5.5,5,5,4.5,4.5,4,3.5,3,2.5,2,1.5,1];

let gpa = ["4.0","3.95 - 3.99","3.90 - 3.94","3.85 - 3.89","3.80 - 3.84","3.75 - 3.79", "3.70 - 3.74","3.65 - 3.69","3.60 - 3.64","3.55 - 3.59","3.50 - 3.54","3.45 - 3.49","3.40 - 3.44","3.35 - 3.39","3.30 - 3.34",
"3.25 - 3.29","3.20 - 3.24","3.15 - 3.19","3.10 - 3.14","3.05 - 3.09","3.00 - 3.04", "2.95 - 2.99","2.90 - 2.94", "2.80 - 2.84", "2.75 - 2.79","2.70 - 2.74", "2.65 - 2.69","2.60 - 2.64","2.55 - 2.59","2.50 - 2.54",
"2.45 - 2.49","2.40 - 2.44","2.35 - 2.39","2.30 - 2.34","2.25 - 2.29","2.20 - 2.24", "2.15 - 2.19","2.10 - 2.14","2.05 - 2.09","2.00 - 2.04","1.95 - 1.99","1.90 - 1.94",
"1.85 - 1.89","1.80 - 1.84","1.75 - 1.79","1.70 - 1.74", "1.65 - 1.69","1.60 - 1.64", "1.55 - 1.59","1.50 - 1.54","1.45 - 1.49", "1.40 - 1.44","1.35 - 1.39","1.30 - 1.34",
"1.25 - 1.29","1.20 - 1.24","1.15 - 1.19","1.10 - 1.14","1.05 - 1.09","1.00 - 1.04"];

let gpaScore = [10,9.5,9,8.5,8,7.5,7,7,6.5,6.5,6,6,6,5.5,5.5,5,5,5,5,4.5,4.5,4.5,4,4,4,4,3.5,3.5,3.5,3.5,3,3,3,3,2.5,2.5,2.5,2.5,2.5,2.5,2,2,2,2,2,2,
1.5,1.5,1.5,1.5,1.5,1.5,1.5,1,1,1,1,1,1,1];

let essay = [10,9,8,7,6,5,4,3,2,1];

let teacher = [10,9,8,7,6,5,4,3,2,1];

let interview = [10,9,8,7,6,5,4,3,2,1];

let extracurricular = [10,9,8,7,6,5,4,3,2,1];

let courseLoad = [10,9,8,7,6,5,4,3,2,1];

let legacy =["Yes", "No"];

let legacyScore = [10,0]

let firstGen = ["Yes", "No"];

let firstGenScore = [10,0]

let sport = ["Varsity", "Junior Varsity", "Intramural", "None"];

let sportScore = [10,6,4,0];

let school =["Stanford", "Harvard", "Yale"];


let schoolMultiplier = [0.5, 0.52, 0.6];


function returnAdmission (){
let div = document.getElementById('result');

let critOne = $("select#satOld").val();
let scoreOne = satOldScore[satOld.indexOf(critOne)] * 24;
let critTwo = $("select#satNew").val();
let scoreTwo = satNewScore[satNew.indexOf(critTwo)] * 24;
let critThree = $("select#act").val();
let scoreThree =actScore[act.indexOf(critThree)] * 24;
let critFour = $("select#satTwo").val();
let scoreFour = satTwoScore[satTwo.indexOf(critFour)] * 5;
let critFive = $("select#rank").val();
let scoreFive = rankScore[rank.indexOf(critFive)] * 6;
let critSix = $("select#gpa").val();
let scoreSix = gpaScore[gpa.indexOf(critSix)] * 6;
let critSeven = $("select#sport").val();
let scoreSeven = sportScore[sport.indexOf(critSeven)] * 6;
let critEight = $("select#legacy").val();
let scoreEight = legacyScore[legacy.indexOf(critEight)] * 9;
let critNine = $("select#firstGen").val();
let scoreNine = firstGenScore[firstGen.indexOf(critNine)] * 5 ;
let scoreTen = parseInt($("select#interview").val()) * 1;
let scoreEleven = parseInt($("select#course").val()) * 5;
let scoreTwelve = parseInt($("select#essay").val()) * 22;
let scoreThirteen = parseInt($("select#recommendation").val()) * 4;
let scoreFourteen = parseInt($("select#extra").val()) * 7;
let critSchool =  $("select#school").val();
let multiple = schoolMultiplier[school.indexOf(critSchool)];
let scoreSum;


if (scoreOne >= scoreTwo && scoreOne >= scoreThree)

{ scoreSum = Math.round((( scoreOne +  scoreFour + scoreFive + scoreSix + scoreSeven + scoreEight + scoreNine + scoreTen + scoreEleven + scoreTwelve + scoreThirteen + scoreFourteen) * multiple)/10);
}

else if (scoreTwo >= scoreOne && scoreTwo >= scoreThree)

{ scoreSum = Math.round((( scoreTwo +  scoreFour + scoreFive + scoreSix + scoreSeven + scoreEight + scoreNine + scoreTen + scoreEleven + scoreTwelve + scoreThirteen + scoreFourteen) * multiple)/10);
}

else if (scoreThree >= scoreTwo && scoreThree >= scoreOne)

{ scoreSum = Math.round((( scoreThree +  scoreFour + scoreFive + scoreSix + scoreSeven + scoreEight + scoreNine + scoreTen + scoreEleven + scoreTwelve + scoreThirteen + scoreFourteen) * multiple)/10);
}
console.log(scoreOne)
console.log(scoreTwo)
console.log(scoreThree)
console.log(scoreFour)
console.log(scoreFive)
console.log(scoreSix)
console.log(scoreSeven)
console.log(scoreEight)
console.log(scoreNine)
console.log(scoreTen)
console.log(scoreEleven)
console.log(scoreTwelve)
console.log(scoreThirteen)
console.log(scoreFourteen)
console.log(multiple)
console.log(scoreSum)
event.preventDefault();

div.innerHTML = `<h4 class="hcenter">You have a ${scoreSum}% chance of gaining admission to ${critSchool}.</h4>`
};


$(document).ready(function() {

$(function() {
    $('#sbtbtn').attr('disabled', 'disabled');
});

$('select[name=school], select[name=satOld],select[name=satNew], select[name=act],select[name=satTwo], select[name=rank], select[name=gpa], select[name=sport], select[name=legacy], select[name=firstGen], select[name=recommendation], select[name=extra], select[name=interview], select[name=course], select[name=essay]').change(function() {
console.log("working")
    if (($('#satOld').val() !='--Select--' ||
    $('#satNew').val() != '--Select--' ||
    $('#act').val() != '--Select--') &&
    $('#school').val() != '--Select--' &&
    $('#satTwo').val() != '--Select--' &&
    $('#rank').val() != '--Select--' &&
    $('#gpa').val() != '--Select--' &&
    $('#sport').val() != '--Select--' &&
    $('#legacy').val() != '--Select--' &&
    $('#firstGen').val() != '--Select--' &&
    $('#interview').val() != '--Select--' &&
    $('#course').val() != '--Select--' &&
    $('#essay').val() != '--Select--' &&
    $('#reccomendation').val() != '--Select--' &&
    $('#extra').val() != '--Select--') {

        $('#sbtbtn').removeAttr('disabled');
    } else {
        $('#sbtbtn').attr('disabled', 'disabled');
    }
});
    });

const input_Wrapper = document.querySelector(".input_Wrapper");
const inputBox = document.querySelector(".inputBox");
const colorChange1 = document.querySelector(".resultBox .unit_input")
const colorChange2 = document.querySelector(".resultBox input")
const colorChange3 = document.querySelector("#resultID")
const colorChange4 = document.querySelector(".resultBox .unit_Wrapper i")
const colorChange5 = document.querySelector(".conversionBox")
const submenu = document.querySelector(".submenu");
const propmenu = document.querySelector(".property_menu");
const unitsubmenu = document.querySelector(".unitsubmenu");
const resultsubmenu = document.querySelector(".resultsubmenu");
const unit_Wrapper = document.querySelector(".unit_Wrapper");
const units = document.querySelector("#units");
const results = document.querySelector("#results");
const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const unitIcon = document.querySelector("#unitIcon");
var temp = false;
var property = new Array();
var unit = new Array();
var factor = new Array();
var colors = ["", ""]

property[0] = "Length";
unit[0] = new Array("Meter (m)", "Kilometer (km)", "Centimeter (cm)", "Micrometer (µ-m)", "Millimeter (mm)", "Nanometer (nm)", "Angstrom (Å)", "Astronomical unit (AU)", "Caliber (cal)", "Foot (ft)", "Inch (in)");
factor[0] = new Array(1, 1000, 0.01, 0.000001, 0.001, 1E-9, 1E-10, 1.49598E11, .000254, 0.3048, 0.0254);

property[1] = "Area";
unit[1] = new Array("Square meter (m²)", "Acre (acre)", "Hectare", "Square centimeter (cm²)", "Square kilometer (km²)", "Square foot (ft²)", "Square inch (in²)", "Square mile (mi²)", "Square yard (yd²)");
factor[1] = new Array(1, 4046.856, 10000, 0.0001, 1000000, 9.290304E-02, 6.4516E-04, 2589988, 0.8361274);

property[2] = "Mass";
unit[2] = new Array("Kilogram (kg)", "Gram (g)", "Milligram (mg)", "Microgram (µ-g)", "Ton");
factor[2] = new Array(1, 0.001, 1e-6, 0.000000001, 1000);

property[3] = "Velocity";
unit[3] = new Array("Meter/second (m/sec)", "Foot/minute (ft/min)", "Foot/second (ft/sec)", "Kilometer/hour (km/h)", "Mile/hour (mph)", "Speed of light (c)");
factor[3] = new Array(1, 5.08E-03, 0.3048, 0.2777778, 0.44707, 299792458);

property[4] = "Acceleration";
unit[4] = new Array("Meter/sq.sec (m/sec²)", "Foot/sq.sec (ft/sec²)", "Gravitational constant (g)", "Inch/sq.sec (in/sec²)");
factor[4] = new Array(1, .3048, 9.806650, 2.54E-02);

property[5] = "Electricity";
unit[5] = new Array("Coulomb (Cb)", "Abcoulomb", "Ampere hour (A hr)", "Faraday (F)", "Statcoulomb", "Millifaraday (mF)", "Microfaraday (mu-F)", "Picofaraday (pF)");
factor[5] = new Array(1, 10, 3600, 96521.8999999997, .000000000333564, 96.5219, 9.65219E-02, 9.65219E-05);

property[6] = "Energy";
unit[6] = new Array("Joule (J)", "BTU (mean)", "BTU (thermochemical)", "Calorie (SI) (cal)", "Calorie (mean)(cal)", "Calorie (thermo)", "Electron volt (eV)", "Erg (erg)", "Foot-pound force", "Foot-poundal", "Horsepower-hour", "Kilocalorie (SI)(kcal)", "Kilocalorie (mean)(kcal)", "Kilowatt-hour (kW hr)", "Ton of TNT", "Volt-coulomb (V Cb)", "Watt-hour (W hr)", "Watt-second (W sec)");
factor[6] = new Array(1, 1055.87, 1054.35, 4.1868, 4.19002, 4.184, 1.6021E-19, .0000001, 1.355818, 4.214011E-02, 2684077.3, 4186.8, 4190.02, 3600000, 4.2E9, 1, 3600, 1);

property[7] = "Force";
unit[7] = new Array("Newton (N)", "Dyne (dy)", "Kilogram force (kgf)", "Kilopond force (kpf)", "Kip (k)", "Ounce force (ozf)", "Pound force (lbf)", "Poundal");
factor[7] = new Array(1, .00001, 9.806650, 9.806650, 4448.222, .2780139, .4535924, .138255);

property[8] = "Power";
unit[8] = new Array("Watt (W)", "Kilowatt (kW)", "Megawatt (MW)", "Milliwatt (mW)", "BTU (SI)/hour", "BTU (thermo)/second", "BTU (thermo)/minute", "BTU (thermo)/hour", "Calorie (thermo)/second", "Calorie (thermo)/minute", "Erg/second", "Foot-pound force/hour", "Foot-pound force/minute", "Foot-pound force/second", "Horsepower(550 ft lbf/s)", "Horsepower (electric)", "Horsepower (boiler)", "Horsepower (metric)", "Horsepower (UK)", "Kilocalorie (thermo)/min", "Kilocalorie (thermo)/sec");
factor[8] = new Array(1, 1000, 1000000, .001, .2930667, 1054.35, 17.5725, .2928751, 4.184, 6.973333E-02, .0000001, .0003766161, .02259697, 1.355818, 745.7, 746, 9809.5, 735.499, 745.7, 69.7333, 4184);

property[9] = "Pressure";
unit[9] = new Array("Newton/sq.meter", "Atmosphere (normal)", "Atmosphere (techinical)", "Bar", "Centimeter mercury(cmHg)", "Centimeter water (4°C)", "Decibar", "Kgr force/sq.centimeter", "Kgr force/sq.meter", "Kip/square inch", "Millibar", "Millimeter mercury(mmHg)", "Pascal (Pa)", "Kilopascal (kPa)", "Megapascal (Mpa)", "Poundal/sq.foot", "Pound-force/sq.foot", "Pound-force/sq.inch (psi)", "Torr (mmHg,0°C)");
factor[9] = new Array(1, 101325, 98066.5, 100000, 1333.22, 98.0638, 10000, 98066.5, 9.80665, 6894757, 100, 133.3224, 1, 1000, 1000000, 47.88026, 47.88026, 6894.757, 133.322);

property[10] = "Temperature";
unit[10] = new Array("Degrees Celsius (°C)", "Degrees Fahrenheit (°F)", "Degrees Kelvin (°K)");
factor[10] = new Array(1, 0.555555555555, 1);
tempIncrement = new Array(0, -32, -273.15);

property[11] = "Time";
unit[11] = new Array("Second (sec)", "Day (mean solar)", "Day (sidereal)", "Hour (mean solar)", "Hour (sidereal)", "Minute (mean solar)", "Minute (sidereal)", "Month (mean calendar)", "Second (sidereal)", "Year (calendar)", "Year (tropical)", "Year (sidereal)");
factor[11] = new Array(1, 8.640E4, 86164.09, 3600, 3590.17, 60, 60, 2628000, .9972696, 31536000, 31556930, 31558150);

property[12] = "Volume";
unit[12] = new Array("Cubic Meter (m³)", "Cubic centimeter (cm³)", "Cubic millimeter (mm³)", "Acre-foot", "Barrel (oil)", "Board foot", "Bushel (US)", "Cup", "Fluid ounce (US)", "Cubic foot", "Gallon (UK)", "Gallon (US,dry)", "Gallon (US,liq)", "Gill (UK)", "Gill (US)", "Cubic inch (in³)", "Liter (new)", "Liter (old)", "Ounce (UK,fluid)", "Ounce (US,fluid)", "Peck (US)", "Pint (US,dry)", "Pint (US,liq)", "Quart (US,dry)", "Quart (US,liq)", "Stere", "Tablespoon", "Teaspoon", "Ton (register)", "Cubic yard");
factor[12] = new Array(1, .000001, .000000001, 1233.482, .1589873, .002359737, .03523907, .0002365882, .00002957353, .02831685, .004546087, .004404884, .003785412, .0001420652, .0001182941, .00001638706, .001, .001000028, .00002841305, .00002957353, 8.8097680E-03, .0005506105, 4.7317650E-04, .001101221, 9.46353E-04, 1, .00001478676, .000004928922, 2.831685, .7645549);

function UpdateUnitMenu(propMenu, unitMenu) {
    var k;
    for (let i = 0; i < property.length; i++) {
        str = property[i];
        word = document.querySelector("#propertyID").innerText;
        if (str.toUpperCase() == word) {
            k = i;
        }
    }
    FillUnitMenuWithArray(unitMenu, unit[k]);
}
function UpdateResultMenu(propMenu, unitMenu) {
    var k;
    for (let i = 0; i < property.length; i++) {
        str = property[i];
        word = document.querySelector("#propertyID").innerText;
        if (str.toUpperCase() == word) {
            k = i;
        }
    }
    FillResultMenuWithArray(unitMenu, unit[k]);
}

const propclick = (e) => {
    const propertyID = document.querySelector("#propertyID");
    propertyID.innerText = e.firstElementChild.innerText;
    if (propertyID.innerText.toUpperCase() == "AREA") {
        unitIcon.innerText = "architecture";
        unitIcon.style.paddingLeft = "20px";
        unitIcon.style.paddingRight = "0px"
        inputBox.style.background = "var(--red)";
        colorChange1.style.borderBottom = "2px solid rgba(255, 84, 84, 1)";
        colorChange2.style.color = "rgba(255, 84, 84, 1)";
        colorChange3.style.color = "rgba(255, 84, 84, 1)";
        colorChange4.style.color = "rgba(255, 84, 84, 1)";
        colorChange5.style.color = "rgba(255, 84, 84, 1)";

    }
    else if (propertyID.innerText.toUpperCase() == "LENGTH") {
        unitIcon.innerText = "straighten";
        unitIcon.style.paddingLeft = "0px";
        unitIcon.style.paddingRight = "0px"
        inputBox.style.background = "var(--stellar)";
        colorChange1.style.borderBottom = "2px solid rgba(40, 156, 252, 1)"
        colorChange2.style.color = "rgba(40, 156, 252, 1)";
        colorChange3.style.color = "rgba(40, 156, 252, 1)";
        colorChange4.style.color = "rgba(40, 156, 252, 1)";
        colorChange5.style.color = "rgba(40, 156, 252, 1)";
    }
    else if (propertyID.innerText.toUpperCase() == "CURRENCY") {
        unitIcon.innerText = "monetization_on";
        unitIcon.style.paddingLeft = "0px";
        unitIcon.style.paddingRight = "0px"
        inputBox.style.background = "var(--caramel)";
        colorChange1.style.borderBottom = "2px solid #D1913C"
        colorChange2.style.color = "#D1913C";
        colorChange3.style.color = "#D1913C";
        colorChange4.style.color = "#D1913C";
        colorChange5.style.color = "#D1913C";
    }
    else if (propertyID.innerText.toUpperCase() == "MASS") {
        unitIcon.innerText = "scale";
        // unitIcon.innerText="weight";
        unitIcon.style.paddingLeft = "20px";
        unitIcon.style.paddingRight = "0px"
        inputBox.style.background = "var(--green)";
        colorChange1.style.borderBottom = "2px solid #96c93d"
        colorChange2.style.color = "#96c93d";
        colorChange3.style.color = "#96c93d";
        colorChange4.style.color = "#96c93d";
        colorChange5.style.color = "#96c93d";
    }
    else if (propertyID.innerText.toUpperCase() == "VELOCITY") {
        unitIcon.innerText = "speed";
        unitIcon.style.paddingLeft = "0px";
        unitIcon.style.paddingRight = "20px"
        inputBox.style.background = "var(--butterfly)";
        colorChange1.style.borderBottom = "2px solid #ff4065"
        colorChange2.style.color = "#ff4065";
        colorChange3.style.color = "#ff4065";
        colorChange4.style.color = "#ff4065";
        colorChange5.style.color = "#ff4065";
    }
    else if (propertyID.innerText.toUpperCase() == "ACCELERATION") {
        unitIcon.innerText = "speed";
        unitIcon.style.paddingLeft = "0px";
        unitIcon.style.paddingRight = "70px"
        inputBox.style.background = "var(--sublime)";
        colorChange1.style.borderBottom = "2px solid #ff4065"
        colorChange2.style.color = "#ff4065";
        colorChange3.style.color = "#ff4065";
        colorChange4.style.color = "#ff4065";
        colorChange5.style.color = "#ff4065";
    }
    else if (propertyID.innerText.toUpperCase() == "ELECTRICITY") {
        unitIcon.innerText = "electric_bolt";
        unitIcon.style.paddingLeft = "0px";
        unitIcon.style.paddingRight = "50px"
        inputBox.style.background = "var(--mojito)";
        colorChange1.style.borderBottom = "2px solid #103CE7"
        colorChange2.style.color = "#103CE7";
        colorChange3.style.color = "#103CE7";
        colorChange4.style.color = "#103CE7";
        colorChange5.style.color = "#103CE7";
    }
    else if (propertyID.innerText.toUpperCase() == "ENERGY") {
        unitIcon.innerText = "energy_savings_leaf";
        unitIcon.style.paddingLeft = "0px";
        unitIcon.style.paddingRight = "0px"
        inputBox.style.background = "var(--azure)";
        colorChange1.style.borderBottom = "2px solid #0172AF"
        colorChange2.style.color = "#0172AF";
        colorChange3.style.color = "#0172AF";
        colorChange4.style.color = "#0172AF";
        colorChange5.style.color = "#0172AF";
    }
    else if (propertyID.innerText.toUpperCase() == "FORCE") {
        unitIcon.innerText = "landslide";
        unitIcon.style.paddingLeft = "10px";
        unitIcon.style.paddingRight = "0px"
        inputBox.style.background = "var(--royal)";
        colorChange1.style.borderBottom = "2px solid #141e30"
        colorChange2.style.color = "#141e30";
        colorChange3.style.color = "#141e30";
        colorChange4.style.color = "#141e30";
        colorChange5.style.color = "#141e30";
    }
    else if (propertyID.innerText.toUpperCase() == "POWER") {
        unitIcon.innerText = "power_settings_new";
        unitIcon.style.paddingLeft = "10px";
        unitIcon.style.paddingRight = "0px"
        inputBox.style.background = "var(--neon)";
        colorChange1.style.borderBottom = "2px solid #EE49FD"
        colorChange2.style.color = "#EE49FD";
        colorChange3.style.color = "#EE49FD";
        colorChange4.style.color = "#EE49FD";
        colorChange5.style.color = "#EE49FD";
    }
    else if (propertyID.innerText.toUpperCase() == "PRESSURE") {
        unitIcon.innerText = "compress";
        unitIcon.style.paddingLeft = "0px";
        unitIcon.style.paddingRight = "20px"
        inputBox.style.background = "var(--wine)";
        colorChange1.style.borderBottom = "2px solid #ff0084"
        colorChange2.style.color = "#ff0084";
        colorChange3.style.color = "#ff0084";
        colorChange4.style.color = "#ff0084";
        colorChange5.style.color = "#ff0084";
    }
    else if (propertyID.innerText.toUpperCase() == "TEMPERATURE") {
        unitIcon.innerText = "device_thermostat";
        unitIcon.style.paddingLeft = "0px";
        unitIcon.style.paddingRight = "60px"
        inputBox.style.background = "var(--superman)";
        colorChange1.style.borderBottom = "2px solid #ff6e7f"
        colorChange2.style.color = "#ff6e7f";
        colorChange3.style.color = "#ff6e7f";
        colorChange4.style.color = "#ff6e7f";
        colorChange5.style.color = "#ff6e7f";
    }
    else if (propertyID.innerText.toUpperCase() == "TIME") {
        unitIcon.innerText = "schedule";
        unitIcon.style.paddingLeft = "40px";
        unitIcon.style.paddingRight = "0px"
        inputBox.style.background = "var(--forest)";
        colorChange1.style.borderBottom = "2px solid #8360c3"
        colorChange2.style.color = "#8360c3";
        colorChange3.style.color = "#8360c3";
        colorChange4.style.color = "#8360c3";
        colorChange5.style.color = "#8360c3";
    }
    else if (propertyID.innerText.toUpperCase() == "VOLUME") {
        unitIcon.innerText = "view_in_ar";
        unitIcon.style.paddingLeft = "0px";
        unitIcon.style.paddingRight = "0px"
        inputBox.style.background = "var(--sand)";
        colorChange1.style.borderBottom = "2px solid #d7c092"
        colorChange2.style.color = "#d7c092";
        colorChange3.style.color = "#d7c092";
        colorChange4.style.color = "#d7c092";
        colorChange5.style.color = "#d7c092";
    }
    let removingunit = document.getElementsByName("the_menu")[1];
    removingunit.innerHTML = "";
    let removingresult = document.getElementsByName("the_menu")[2];
    removingresult.innerHTML = "";

    document.querySelector("#inputID").innerText = "Select Unit";
    document.querySelector("#resultID").innerText = "Select Unit";

    UpdateUnitMenu(document.getElementsByName("the_menu")[0], document.getElementsByName("the_menu")[1]);
    UpdateResultMenu(document.getElementsByName("the_menu")[0], document.getElementsByName("the_menu")[2])
}
const unitclick = (e) => {
    const unitID = document.querySelector("#inputID");
    unitID.innerText = e.firstElementChild.innerText;
    input1.value=0;
    input2.input();
}
const resultclick = (e) => {
    const resultID = document.querySelector("#resultID");
    resultID.innerText = e.firstElementChild.innerText;
    input2.value=0;
}

function FillMenuWithArray(myMenu, myArray) {
    var i;
    for (i = 0; i < myArray.length; i++) {
        var li = document.createElement("li");
        li.setAttribute("onclick", "propclick(this)");
        var a = document.createElement("a");
        a.setAttribute("href", "#");
        a.appendChild(document.createTextNode(myArray[i]));
        li.appendChild(a);
        myMenu.appendChild(li);
    }
}
function FillUnitMenuWithArray(myMenu, myArray) {
    var i;
    for (i = 0; i < myArray.length; i++) {
        var li = document.createElement("li");
        li.setAttribute("onclick", "unitclick(this)");
        var a = document.createElement("a");
        a.setAttribute("href", "#");
        a.appendChild(document.createTextNode(myArray[i]));
        li.appendChild(a);
        myMenu.appendChild(li);
    }
}
function FillResultMenuWithArray(myMenu, myArray) {
    var i;
    for (i = 0; i < myArray.length; i++) {
        var li = document.createElement("li");
        li.setAttribute("onclick", "resultclick(this)");
        var a = document.createElement("a");
        a.setAttribute("href", "#");
        a.appendChild(document.createTextNode(myArray[i]));
        li.appendChild(a);
        myMenu.appendChild(li);
    }
}

const showUnitList = () => {
    unitsubmenu.classList.toggle("displayList");
    const len = unitsubmenu.children.length;
    for (let i = 0; i < len; i++) {
        unitsubmenu.children[i].classList.toggle("displayList");
    }
}
const showresultList = () => {
    resultsubmenu.classList.toggle("displayList");
    const len = resultsubmenu.children.length;
    for (let i = 0; i < len; i++) {
        resultsubmenu.children[i].classList.toggle("displayList");
    }
}
const showList = () => {
    if (unitIcon.style.opacity == "0") {

        unitIcon.style.opacity = "1";
    }
    else {
        unitIcon.style.opacity = "0";
    }
    document.querySelector(".hidingInput").classList.toggle("hidden");
    if (document.querySelector(".hidingInput").classList.contains("hidden")) {
        propmenu.style.transform = "translateY(-108px)";
        submenu.style.height = "200px";
    }
    else {
        propmenu.style.transform = "translateY(-25px)";
        submenu.style.height = "40px";
    }

    submenu.classList.toggle("displayList");
    const len = submenu.children.length;
    for (let i = 0; i < len; i++) {
        submenu.children[i].classList.toggle("displayList");
    }
}
propmenu.addEventListener("click", showList);
expand.addEventListener("click", showList);
units.addEventListener("click", showUnitList);
results.addEventListener("click", showresultList);

input1.addEventListener('input', function () {
    ConvertFromTo(1, 2);
});
input2.addEventListener('input', function () {
    ConvertFromTo(2, 1);
});

input_Wrapper.addEventListener("click", () => {
    if (input1.value == "") {
        input1.value = 0;
    }
    if (input2.value == "") {
        input2.value = 0;
    }
})

const ConvertFromTo = (source, target) => {
    var propIndex;
    var sourceIndex;
    var sourceFactor;
    var targetIndex;
    var targetFactor;
    var result;

    for (let i = 0; i < property.length; i++) {
        str = property[i];
        word = document.querySelector("#propertyID").innerText;
        if (str.toUpperCase() == word) {
            propIndex = i;
        }
    }

    for (let i = 0; i < unit[propIndex].length; i++) {
        str = unit[propIndex][i];
        word = document.querySelector("#inputID").innerText;
        if (word == "Select Unit") {
            units.classList.add("apply-shake");
            navigator.vibrate(200);
            setTimeout(() => {
                units.classList.remove("apply-shake");
            }, 1000)
        }
        if (str.toUpperCase() == word.toUpperCase()) {
            sourceIndex = i;
            break;
        }
    }
    for (let i = 0; i < unit.length; i++) {
        str = unit[propIndex][i];
        word = document.querySelector("#resultID").innerText;
        if (word == "Select Unit") {
            results.classList.add("apply-shake");
            navigator.vibrate(200);
            setTimeout(() => {
                results.classList.remove("apply-shake");
            }, 1000)
        }
        if (str.toUpperCase() == word.toUpperCase()) {
            targetIndex = i;
            break;
        }
    }

    sourceFactor = factor[propIndex][sourceIndex];
    targetFactor = factor[propIndex][targetIndex];
    result = document.querySelector(`#input${source}`).value;

    if (property[propIndex] == "Temperature") {
        result = parseFloat(result) + tempIncrement[sourceIndex];
    }
    result = result * sourceFactor;
    result = result / targetFactor;
    if (property[propIndex] == "Temperature") {
        result = parseFloat(result) - tempIncrement[targetIndex];
    }
    result = result.toFixed(2);
    document.querySelector(`#input${target}`).value = result;
}


window.onload = function (e) {
    FillMenuWithArray(document.getElementsByName("the_menu")[0], property);
    UpdateUnitMenu(document.getElementsByName("the_menu")[0], document.getElementsByName("the_menu")[1]);
    UpdateResultMenu(document.getElementsByName("the_menu")[0], document.getElementsByName("the_menu")[2])
}
var car = [];
var currentCar = 0;

function addCarListEntry(){
    document.getElementById("carList").innerHTML += 
    '<div id="carListItem" onclick="changeCurrentEntry('+ currentCar + ')">'+
'                <table style="border: none; height: 100%;">'+
'                    <tr style="height: 100%;">'+
'                        <td style="width: 50%; vertical-align: middle;"><img src="images/' + car[currentCar].img + '" width="100%"></td>'+
'                        <td style="width: 50%;">'+ car[currentCar].name +'</td>'+
'                    </tr>'+
'                </table>'+
'            </div>';
    currentCar++;
}
function changeCurrentEntry(entry){
    document.getElementById("carDisplay").innerHTML =
    '<table style="width: 100%; border: none; height: 50%;">'+
'                <tr>'+
'                    <td rowspan="2"><img src="images/' + car[entry].img + '" width="100%"></td>'+
'                    <td style="width: 50%;"><h2>'+ car[entry].name +'</h2></td>'+
'                </tr>'+
'                <tr>'+
'                    <td style="width: 50%;">$'+ car[entry].price +'</td>'+
'                </tr>'+
'            </table>'+
'            <p>'+ car[entry].description +'</p>'
}

class Cars{
    constructor(name, img, description, price){
        this.name = name;
        this.img = img;
        this.description = description;
        this.price = price;
    }
}

function createCar(name, img, description, price){
    car[currentCar] = new Cars(name, img, description, price);
    addCarListEntry();
}

createCar("Hearse", "hearse1.jpg", "This is a hearse", 50);
createCar("Hearse2", "hearse2.jpg", "This is a hearse", 50);

for(i = 0; i < car.length; i++){
    addCarListEntry();
}
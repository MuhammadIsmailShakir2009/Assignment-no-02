//     // Assignment no 02
// // Q1
let exp1 = "faraz" || (true + false) + 5 && " " || "true";
document.write(`<center>EXP ANSWER</center><br> 1 ans is = ${exp1} <br>`)
let b = 3;
let exp2 = (1 + 2) + ++b || 5 && 0;
document.write(`2 ans is = ${exp2} <br>`)
let a = 5;
let exp3 = 32 && true - ++a && " " || "true";
document.write(`3 ans is = ${exp3} <br>`)
let exp4 = (true + 3) * 5 && undefined || "faraz" + 5;
document.write(`4 ans is = ${exp4} <br>`)
let exp5 = 32 + "abc" || (true + false) + false || + 5 || "true";
document.write(`5 ans is = ${exp5} <br>`)
let exp6 = false || (true + true) + 15 && "" || 50;
document.write(`6 ans is = ${exp6} <br>`)
let exp7 = (true + false) + 5 || false + 8 + "abc" || "true";
document.write(`7 ans is = ${exp7} <br>`)
let exp8 = "faraz" || false + 10 || "true";
document.write(`8 ans is = ${exp8} <br>`)
let exp9 = 12 + (false + false) + true && null || "faraz";
document.write(`9 ans is = ${exp9} <br>`)
let exp10 = (false + true + false + 2) || "faraz" && false || 1 + 10;
document.write(`10 ans is = ${exp10} <br>`)
let exp11 = (true + false) + 5 || false + 8 + "abc" || "true";
document.write(`11 ans is = ${exp11} <br>`)
let exp12 = (true + false) * 3 && "" || false + true - (12 + true + true + false);
document.write(`12 ans is = ${exp12} <br>`)
// Assignment 2 nested Object data
// let haeding2="Mobile Dropdown"
// document.write(`<center> ${haeding2} </center><br>`)
var mobiles = {
    iphone: {
        iphone7: {
            processor: "Snapdragon 8 Gen 2",
            memory: {
                ram: 12,
                storage: 512,
            },
            camera: {
                rear: {
                    main: 200,
                    ultrawide: 12,
                    telephoto: 10,
                    telephotoPeriscope: 10,
                },
                front: 10,
            },
            battery: 5000,
            operatingSystem: "Android 13",
            specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
        },
        iphone8: {
            processor: "Snapdragon 12 Gen 5",
            memory: {
                ram: 8,
                storage: 256,
            },
            camera: {
                rear: {
                    main: 180,
                    ultrawide: 15,
                    telephoto: 10,
                    telephotoPeriscope: 20,
                },
                front: 12,
            },
            battery: 8000,
            operatingSystem: "iphone 8",
            specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
        },
        iphone8plus: {
            processor: "Snapdragon 5 Gen 6",
            memory: {
                ram: 8,
                storage: 128,
            },
            camera: {
                rear: {
                    main: 160,
                    ultrawide: 18,
                    telephoto: 10,
                    telephotoPeriscope: 8,
                },
                front: 16,
            },
            battery: 5000,
            operatingSystem: "iphone 8",
            specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
        },
        iphoneX: {
            processor: "Snapdragon 5 Gen 4",
            memory: {
                ram: 8,
                storage: 256,
            },
            camera: {
                rear: {
                    main: 130,
                    ultrawide: 16,
                    telephoto: 10,
                    telephotoPeriscope: 18,
                },
                front: 14,
            },
            battery: 6000,
            operatingSystem: "iphone X",
            specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
        },
        iphone11: {
            processor: "Snapdragon 7 Gen 9",
            memory: {
                ram: 16,
                storage: 512,
            },
            camera: {
                rear: {
                    main: 150,
                    ultrawide: 24,
                    telephoto: 16,
                    telephotoPeriscope: 10,
                },
                front: 20,
            },
            battery: 10000,
            operatingSystem: "iphone 11",
            specialFeatures: ["S Pen support", "Ultrasonic fingerprint sensor"],
        },
    },
    xiomi: {
        redmiA2: {
            modelName: "Mi 12 Pro",
            display: {
                size: 6.73,
                resolution: "3200 x 1440",
                panelType: "AMOLED",
                refreshRate: 120,
            },
            processor: "Snapdragon 8 Gen 1",
            memory: {
                ram: 8,
                storage: 256,
            },
            camera: {
                rear: {
                    main: "50MP",
                    ultrawide: "50MP",
                    telephoto: "48MP",
                },
                front: "32MP",
            },
            battery: 4600,
            operatingSystem: "Android 12",
            specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
        },
        redmi10: {
            modelName: "Mi 8 Pro",
            display: {
                size: 5.73,
                resolution: "3000 x 1320",
                panelType: "AMOLED",
                refreshRate: 100,
            },
            processor: "Snapdragon 7 Gen 5",
            memory: {
                ram: 12,
                storage: 256,
            },
            camera: {
                rear: {
                    main: "50MP",
                    ultrawide: "50MP",
                    telephoto: "48MP",
                },
                front: "32MP",
            },
            battery: 5000,
            operatingSystem: "Android 11",
            specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
        },

        redmi11: {
            modelName: "Mi 14 Pro",
            display: {
                size: 6.0,
                resolution: "3000 x 1240",
                panelType: "AMOLED",
                refreshRate: 150,
            },
            processor: "Snapdragon 8 Gen 4",
            memory: {
                ram: 12,
                storage: 512,
            },
            camera: {
                rear: {
                    main: "50MP",
                    ultrawide: "50MP",
                    telephoto: "48MP",
                },
                front: "32MP",
            },
            battery: 8000,
            operatingSystem: "Android 12",
            specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
        },

        redmi12: {
            modelName: "Mi 12 Pro",
            display: {
                size: 7.4,
                resolution: "3200 x 1440",
                panelType: "AMOLED",
                refreshRate: 180,
            },
            processor: "Snapdragon 12 Gen 1",
            memory: {
                ram: 12,
                storage: 512,
            },
            camera: {
                rear: {
                    main: "50MP",
                    ultrawide: "50MP",
                    telephoto: "48MP",
                },
                front: "32MP",
            },
            battery: 8000,
            operatingSystem: "Android 13",
            specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
        },

        redmi13: {
            modelName: "Mi 14 Pro",
            display: {
                size: 8.03,
                resolution: "4200 x 1540",
                panelType: "AMOLED",
                refreshRate: 100,
            },
            processor: "Snapdragon 8 Gen 6",
            memory: {
                ram: 12,
                storage: 256,
            },
            camera: {
                rear: {
                    main: "50MP",
                    ultrawide: "50MP",
                    telephoto: "48MP",
                },
                front: "32MP",
            },
            battery: 10000,
            operatingSystem: "Android 13",
            specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
        },

        redmi13C: {
            modelName: "Mi 14 Pro",
            display: {
                size: 8.43,
                resolution: "4200 x 1340",
                panelType: "AMOLED",
                refreshRate: 100,
            },
            processor: "Snapdragon 9 Gen 5",
            memory: {
                ram: 12,
                storage: 512,
            },
            camera: {
                rear: {
                    main: "50MP",
                    ultrawide: "50MP",
                    telephoto: "48MP",
                },
                front: "32MP",
            },
            battery: 10000,
            operatingSystem: "Android 13",
            specialFeatures: ["Wireless charging", "In-display fingerprint sensor"],
        },
    },
    realme: {
        realmiNote50: {
            brand: "Realme",
            model: " hypothetical model ", // Replace with specific model name
            display: {
                size: "6.5 inches",
                resolution: "FHD+ (1080 x 2400 pixels)",
                type: "AMOLED",
            },
            processor: "Qualcomm Snapdragon 8 Gen 1", // Replace with specific processor
            memory: {
                ram: "8GB",
                storage: "128GB",
            },
            camera: {
                rear: {
                    resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
                },
                front: {
                    resolution: "16MP",
                },
            },
            battery: {
                capacity: "5000mAh",
                fastCharging: "65W",
            },
            operatingSystem: "Android 12",
            specialFeatures: [
                "In-display fingerprint sensor",
                "3.5mm headphone jack",
            ],
        },
        realmiC67: {
            brand: "Realme",
            model: " hypothetical model ", // Replace with specific model name
            display: {
                size: "6.7 inches",
                resolution: "FHD+ (1280 x 2100 pixels)",
                type: "AMOLED",
            },
            processor: "Qualcomm Snapdragon 6 Gen 4", // Replace with specific processor
            memory: {
                ram: "8GB",
                storage: "256GB",
            },
            camera: {
                rear: {
                    resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
                },
                front: {
                    resolution: "14MP",
                },
            },
            battery: {
                capacity: "5000mAh",
                fastCharging: "65W",
            },
            operatingSystem: "Android 11",
            specialFeatures: [
                "In-display fingerprint sensor",
                "3.5mm headphone jack",
            ],
        },
        realmiC53: {
            brand: "Realme",
            model: " hypothetical model ", // Replace with specific model name
            display: {
                size: "7. 1inches",
                resolution: "FHD+ (1180 x 2500 pixels)",
                type: "AMOLED",
            },
            processor: "Qualcomm Snapdragon 8 Gen 6", // Replace with specific processor
            memory: {
                ram: "12GB",
                storage: "128GB",
            },
            camera: {
                rear: {
                    resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
                },
                front: {
                    resolution: "18MP",
                },
            },
            battery: {
                capacity: "8000mAh",
                fastCharging: "65W",
            },
            operatingSystem: "Android 12",
            specialFeatures: [
                "In-display fingerprint sensor",
                "3.5mm headphone jack",
            ],
        },
        realmi9: {
            brand: "Realme",
            model: " hypothetical model ", // Replace with specific model name
            display: {
                size: "7.2 inches",
                resolution: "FHD+ (1180 x 2200 pixels)",
                type: "AMOLED",
            },
            processor: "Qualcomm Snapdragon 9 Gen 6", // Replace with specific processor
            memory: {
                ram: "12GB",
                storage: "256GB",
            },
            camera: {
                rear: {
                    resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
                },
                front: {
                    resolution: "24MP",
                },
            },
            battery: {
                capacity: "10000mAh",
                fastCharging: "75W",
            },
            operatingSystem: "Android 12",
            specialFeatures: [
                "In-display fingerprint sensor",
                "3.5mm headphone jack",
            ],
        },
        realmi9i: {
            brand: "Realme",
            model: " hypothetical model ", // Replace with specific model name
            display: {
                size: "6.9 inches",
                resolution: "FHD+ (1480 x 2400 pixels)",
                type: "AMOLED",
            },
            processor: "Qualcomm Snapdragon 8 Gen 1", // Replace with specific processor
            memory: {
                ram: "12GB",
                storage: "512GB",
            },
            camera: {
                rear: {
                    resolution: "64MP (wide) + 8MP (ultrawide) + 2MP (macro)",
                },
                front: {
                    resolution: "16MP",
                },
            },
            battery: {
                capacity: "2000mAh",
                fastCharging: "70W",
            },
            operatingSystem: "Android 13",
            specialFeatures: [
                "In-display fingerprint sensor",
                "3.5mm headphone jack",
            ],
        },
    },
    samsung: {
        samsung_Galaxy_S24: {
            brand: "Samsung",
            model: "Galaxy S24 Ultra", // Replace with specific model

            // Display
            displaySize: 6.8, // Inches
            displayResolution: "3088x1440",
            displayType: "AMOLED",

            // Processor & Memory
            processor: "Snapdragon 8 Gen 2", // Replace with actual processor
            ram: 12, // GB
            storage: 512, // GB

            // Cameras
            rearCamera: {
                megapixel: 108,
                features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
            },
            frontCamera: {
                megapixel: 40,
            },

            // Battery
            batteryCapacity: 5000, // mAh
            fastCharging: "45W Super Fast Charging",

            // Operating System
            os: "Android 14",

            // Additional Specs (Optional)
            fingerprintSensor: true,
            waterResistance: "IP68",
            expandableStorage: false,
        },
        samsung_Galaxy_S51: {
            brand: "Samsung",
            model: "Galaxy S51 Pro", // Replace with specific model

            // Display
            displaySize: 7.2, // Inches
            displayResolution: "3088x1440",
            displayType: "AMOLED",

            // Processor & Memory
            processor: "Snapdragon 9 Gen 4", // Replace with actual processor
            ram: 8, // GB
            storage: 256, // GB

            // Cameras
            rearCamera: {
                megapixel: 112,
                features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
            },
            frontCamera: {
                megapixel: 40,
            },

            // Battery
            batteryCapacity: 8000, // mAh
            fastCharging: "45W Super Fast Charging",

            // Operating System
            os: "Android 11",

            // Additional Specs (Optional)
            fingerprintSensor: true,
            waterResistance: "IP68",
            expandableStorage: false,
        },
        samsung_Galaxy_Prime: {
            brand: "Samsung",
            model: "Galaxy Prime Ultra", // Replace with specific model

            // Display
            displaySize: 7.4, // Inches
            displayResolution: "3088x1440",
            displayType: "AMOLED",

            // Processor & Memory
            processor: "Snapdragon 8 Gen 10", // Replace with actual processor
            ram: 8, // GB
            storage: 256, // GB

            // Cameras
            rearCamera: {
                megapixel: 108,
                features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
            },
            frontCamera: {
                megapixel: 40,
            },

            // Battery
            batteryCapacity: 5000, // mAh
            fastCharging: "45W Super Fast Charging",

            // Operating System
            os: "Android 13",

            // Additional Specs (Optional)
            fingerprintSensor: true,
            waterResistance: "IP68",
            expandableStorage: false,
        },
        samsung_Galaxy_S46: {
            brand: "Samsung",
            model: "Galaxy S46 Ultra", // Replace with specific model

            // Display
            displaySize: 5.11, // Inches
            displayResolution: "3088x1440",
            displayType: "AMOLED",

            // Processor & Memory
            processor: "Snapdragon 8 Gen 2", // Replace with actual processor
            ram: 12, // GB
            storage: 512, // GB

            // Cameras
            rearCamera: {
                megapixel: 108,
                features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
            },
            frontCamera: {
                megapixel: 40,
            },

            // Battery
            batteryCapacity: 20000, // mAh
            fastCharging: "65W Super Fast Charging",

            // Operating System
            os: "Android 14",

            // Additional Specs (Optional)
            fingerprintSensor: true,
            waterResistance: "IP68",
            expandableStorage: false,
        },
        samsung_Galaxy_S77: {
            brand: "Samsung",
            model: "Galaxy S77 Ultra", // Replace with specific model

            // Display
            displaySize: 8.5, // Inches
            displayResolution: "3088x1440",
            displayType: "AMOLED",

            // Processor & Memory
            processor: "Snapdragon 12 Gen 24", // Replace with actual processor
            ram: 12, // GB
            storage: 512, // GB

            // Cameras
            rearCamera: {
                megapixel: 158,
                features: ["10x Optical Zoom", "Night Mode", "8K Video Recording"],
            },
            frontCamera: {
                megapixel: 40,
            },

            // Battery
            batteryCapacity: 20000, // mAh
            fastCharging: "85W Super Fast Charging",

            // Operating System
            os: "Android 14",

            // Additional Specs (Optional)
            fingerprintSensor: true,
            waterResistance: "IP68",
            expandableStorage: true,
        },
    },
};
let brand = document.getElementById('brand');
let model = document.getElementById('model');


var brandsKeys = Object.keys(mobiles)

for(var i = 0;i<brandsKeys.length;i++){

brand.innerHTML += `<option>${brandsKeys[i]}</option>`
    // console.log(brandsKeys[i])
}

function selectBrand(){
    let selectBrand = brand.value;
    let allModels = Object.keys(mobiles[selectBrand]);

    for(var i = 0;i<allModels.length;i++){
        model.innerHTML += `<option>${allModels[i]}</option>` 
    }

    console.log("allModels==>",allModels)
}

function sechBtn(){
    let Card = document.getElementById('cardPortion');

    var filterObj = mobiles[brand.value][model.value];

    console.log(mobiles[brand.value][model.value])

    Card.innerHTML = `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${filterObj.brand}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${filterObj.operatingSystem}</h6>
    <p class="card-text">Processor: ${filterObj.processor}</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>`

}
// let brand=document.getElementById('brand');
// var brandskeys=object.keys(mobiles);
// for(var i = 0; i <brandskeys.length; i++) {
//     brand.innerHTML+=`<option>${brands keys[i]}"></option>`
// }
// console.log(brand);

// function brandselection(){
    
// }
// PASS BY VALUE
// let num1=10
// let num2=10
// let num2=num1
// num2="ismail"
// let num1=["ismail",100,true]
// let num2=num1
// num2[3]="ali"
// console.log(num1,num2)
// sperd
// reset operater

// let stdObj={
//     name:"ismail",
//     age:23,
//     email:"ismail@gmail.com"
// }
// let techObj={
//     techname:"Frooq",
//     techage:23,
//     techemail:"Frooq@gmail.com"
// }
// let merge={...stdObj,...techObj}
// console.log(merge)
// let a=10
// let b=a
// console.log(b)

// let c=true
// let d= false
// console.log(c,d)


// let arr1=["tom",100,true]
// let arr2=arr1
// let merge1=[...arr1,...arr2]
// console.log(arr2)

// function foo(num1,num2,...rest){
//   let restNumbers = 0;
//   for (var i=0; i<rest.length; i++){
//     restNumbers += rest[i]
//   }
//   console.log(num1+ num2+ restNumbers)
  
  
// }

// foo(2,10,3,4,5,6,7,8,9,12,13,14,15,16,17,18,19,20,21,22,23)
// console.log(function)


// DEfult perameter
// function add(a=50,b=50){
//     console.log(a+b)
// }
// add(20,20)
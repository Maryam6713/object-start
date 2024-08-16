//---------Simple object
var student = {
    name : "maryam amir",
    age  : 20,
    qualification : "I.com",
    skill : ["teaching" , "web development"],

}
//-------Dot notations
console.log(student);//printed whole subject
console.log(student.name);//maryam amir
console.log(student.skill[1]);//web development
console.log(student.skill.shift());// return the first removing value

student.city = "karachi"
console.log(student);//added new property in onject

console.log(student.name.toUpperCase()); // MARYAM AMIR

//-------to capitalize name from object

var words = student.name.split(" ")
var capitalize = "";

for(var i = 0 ; i < words.length ; i++){
    capitalize += words[i][0].toUpperCase() + words[i].substring(1) + " " ;
}
student.name = capitalize.trim();
console.log(student.name);  // Maryam Amir


//----------bracket notation

console.log(student["name"]);// Maryam Amir
console.log(student["age"]); // 20
console.log(student["skill"].push("language"))// return lenght 2 of skill

//-----------Nested object
var fruit = {
    name : "orange",
    color : "orange",
    taste : ["sour" , "sweet"],
    season : "winter",
    weight : 100,
    family : {
       first : "lemon",
       second : "gray fruite",
    
    }
}
//-----Dot notation
console.log(fruit.color);;//orange
console.log(fruit.season);//winter
console.log(fruit.weight + "g");//100g
console.log(fruit.family.first);//lemon

//-------bracket notation
console.log(fruit["name"]);//orange
console.log(fruit["taste"][0]);//sour
console.log(fruit["family"]["second"]);//gray fruit

//-----for changing
fruit.name = "lemon"
console.log(fruit); //display lemon in place of orange

//-----for delete
delete fruit.season
console.log(fruit);// deleted season property

// checking property
console.log("name" in fruit);// true
console.log("size" in fruit);// false

//------------------------------------------
console.log(this); //retrun the global object as like window

//------Object method

var student = {
    name :"maryam",
    institudeName :"Saylani Mass IT Training",
    course: "web development",
    studentInfo:function(){
        console.log(student.institudeName);//Saylani Mass IT Training
        console.log(student.course);// web development
        
    }

}
student.studentInfo()
console.log(student.name);//maryam








const fs= require ("fs");



// fs.writeFileSync("entries.txt","[]" , function(err, data){
//     console.log(data)
// })

// entry ///

if (process.argv[2]=="add") {
    let data = JSON.parse(fs.readFileSync("entries.txt","utf-8"))
    student={};
    student.id= data.length +1;
    student.name= process.argv[3];
    student.grade= process.argv[4];
    data.push(student);
    fs.writeFileSync("entries.txt" ,JSON.stringify(data)) 
}

//edit///

else if (process.argv[2]=="edit"){
    let data = JSON.parse(fs.readFileSync("entries.txt","utf-8"))
    data.forEach(student => {
        if( student.id == parseInt(process.argv[4]))
        {
            student.grade=process.argv[3]
            // console.log(data);
        }
    });
    fs.writeFileSync("entries.txt" ,JSON.stringify(data)) 
}

//delete///

else if (process.argv[2]=="del"){
    let data = JSON.parse(fs.readFileSync("entries.txt","utf-8"))
    data.forEach(student =>{
        if(student.id == parseInt(process.argv[3]))
        {
            data.splice(data.indexOf(student),1);
        }
    });
    fs.writeFileSync("entries.txt" ,JSON.stringify(data)) 
            console.log(data);
}

//sum ///

else if (process.argv[2]== "sum"){
    sum=0;
    let data = JSON.parse(fs.readFileSync("entries.txt","utf-8"))
    data.forEach(student => {
        sum+=parseInt(student.grade) 
    })
 console.log(sum)
}


//list//

else if (process.argv[2]=="list"){
    let data = JSON.parse(fs.readFileSync("entries.txt","utf-8"))
    console.log(data)
}

else {

    console.log("error")
}


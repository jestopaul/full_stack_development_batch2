function generateMarkList()
{

    var name = document.getElementById("name").value;
    var code = document.getElementById("code").value;
    var college = document.getElementById("college").value;
    var semester = document.getElementById("selectboxSemester").value;
    // var e = document.getElementById("ddlViewBy");
    // var strUser = e.options[e.selectedIndex].value;

    var sub1 = document.getElementById("sub1").value;
    var sub1_mark = document.getElementById("sub1_mark").value;
    var sub1_total_mark = document.getElementById("sub1_total_mark").value;
    var sub1_grade = calculateGrade(sub1_mark);

    var sub2 = document.getElementById("sub2").value;
    var sub2_mark = document.getElementById("sub2_mark").value;
    var sub2_total_mark = document.getElementById("sub2_total_mark").value;
    var sub2_grade = calculateGrade(sub2_mark);

    var sub3 = document.getElementById("sub3").value;
    var sub3_mark = document.getElementById("sub3_mark").value;
    var sub3_total_mark = document.getElementById("sub3_total_mark").value;
    var sub3_grade = calculateGrade(sub3_mark);

    var sub4 = document.getElementById("sub4").value;
    var sub4_mark = document.getElementById("sub4_mark").value;
    var sub4_total_mark = document.getElementById("sub4_total_mark").value;
    var sub4_grade = calculateGrade(sub4_mark);
    
    var grades = new Array();
    grades.push([sub1_grade,sub2_grade,sub3_grade,sub4_grade]);

    var semStatus ;
    

    for(i=0;i<4;i++)
    {
        console.log(grades[0]);
        console.log(grades[0][i]);
       if(grades[0][i]=="F")
       {
           semStatus = "Failed";
           break;
       }
       else{
        semStatus = "Passed";
       }
    }

    console.log(name);
    console.log(code);
    console.log(college);
    console.log(semester);

    console.log(sub1);
    console.log(sub1_mark);
    console.log(sub1_total_mark);
    console.log(sub1_grade);

    console.log(sub2);
    console.log(sub2_mark);
    console.log(sub2_total_mark);
    console.log(sub2_grade);

    console.log(sub3);
    console.log(sub3_mark);
    console.log(sub3_total_mark);
    console.log(sub3_grade);

    console.log(sub4);
    console.log(sub4_mark);
    console.log(sub4_total_mark);
    console.log(sub4_grade);

    console.log(semStatus);

    var subjects = new Array();

    subjects.push(["Subject Name","Mark Obtained", "Total Mark","Grade"]);
    subjects.push([sub1,sub1_mark,sub1_total_mark,sub1_grade]);
    subjects.push([sub2,sub2_mark,sub2_total_mark,sub2_grade]);
    subjects.push([sub3,sub3_mark,sub3_total_mark,sub3_grade]);
    subjects.push([sub4,sub4_mark,sub4_total_mark,sub4_grade]);
     //Create a HTML Table element.
     var table = document.createElement("TABLE");
     table.border = "1";
  
     //Get the count of columns.
     var columnCount = subjects[0].length;

      //Add the header row.
    var row = table.insertRow(-1);
    for (var i = 0; i < columnCount; i++) {
        var headerCell = document.createElement("TH");
        headerCell.innerHTML = subjects[0][i];
        row.appendChild(headerCell);
    }


     //Add the data rows.
     for (var i = 1; i < subjects.length; i++) {
        row = table.insertRow(-1);
        for (var j = 0; j < columnCount; j++) {
            var cell = row.insertCell(-1);
            cell.innerHTML = subjects[i][j];
        }
    }

    var dvTable = document.getElementById("result-div");
    dvTable.innerHTML = "";

    var brOne = document.createElement('br');
    var brSemester = document.createElement('br');
    var brCollege = document.createElement('br');
    var brStatus = document.createElement('br');
    

    var labelName = document.createElement('label');
    labelName.innerText = "Name : "+ name ;

    var labelSem = document.createElement('label');
    labelSem.innerText = "Semester : "+ semester;

    var labelCollege = document.createElement('label');
    labelCollege.innerText = "College : "+ college ;

    var labelSemStatus = document.createElement('label');
    labelSemStatus.innerText = "Grade Status : "+ semStatus ;

    dvTable.append(labelName);
    dvTable.append(brOne);
    dvTable.append(labelSem);
    dvTable.append(brSemester);
    dvTable.append(labelCollege);
    dvTable.append(brCollege);
    dvTable.appendChild(table);
    dvTable.append(brStatus);
    dvTable.appendChild(labelSemStatus);
    //dvTable.append("<select class=/"form-control input-type-bg/" id=/"selectboxSemester/" required><option  selected>Select your semester</option> <option value=/"Sem1/">Sem1</option></select> ");
    
    // // CREATE A DIV 
    // var div = document.createElement('div');
    // div.setAttribute("class","col col-sm-6 col-md-10 col-lg-8 col-xl-6");
    // div.style.backgroundColor ="red";
    // div.className="col col-sm-6 col-md-10 col-lg-8 col-xl-6";
    // div.innerHTML = "ssssddddd";
    //     div.innerHTML = '<br />';
    //   //  div.append(table);
    //     dvTable.append(div);

      
}

function calculateGrade(mark)
{
    if(mark>95)
    {
        return "S";
    }
    else if(mark>90)
    {
        return "A+";
    }
    else if(mark>85)
    {
        return "A";
    }
    else if(mark>80)
    {
        return "B+";
    }
    else if(mark>75)
    {
        return "B";
    }
    else if(mark>70)
    {
        return "C+";
    }
    else if(mark>65)
    {
        return "C";
    }
    else if(mark>60)
    {
        return "D+";
    }
    else if(mark>55)
    {
        return "D";
    }
    else if(mark>50)
    {
        return "E+";
    }
    else if(mark>45)
    {
        return "E";
    }
    else if(mark>=40)
    {
        return "F+";
    }
    else if(mark<40)
    {
        return "F";
    }

}
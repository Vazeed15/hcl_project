var employeeData = [];

function calculateAppraisal() {
    var emp_no = document.getElementById("emp_no").value;
    var name = document.getElementById("name").value;
    var experience = document.getElementById("experience").value;
    var manager_rating = document.getElementById("manager_rating").value;
    var TL_rating = document.getElementById("TL_rating").value;
    var Role = document.getElementById("Role").value;
    var timeon_odc = document.getElementById("timeon_odc").value;
    var salary = document.getElementById("salary").value;
    var emp_type = document.getElementById("emp_type").value;

    if (emp_no === "" || name === "" || experience === "" || manager_rating === "" || TL_rating === "" || Role === "" || timeon_odc === "" || salary === "" || emp_type === "") {
        alert("Please fill in all fields.");
        return;
    }

    var appraisal = experience * 1000;

    if (salary >= 50000) {
        appraisal += 3000; 
    } else if (salary >= 30000) {
        appraisal += 2000; 
    } else {
        appraisal += 1500; 
    }

    if (timeon_odc >= 1560) {
        appraisal += 1700; 
    }

    switch (emp_type) {
        case 'F':
            appraisal += 4000; 
            break;
        case 'P':
            appraisal += 3500; 
            break;
        case 'C':
            appraisal += 2500; 
            break;
        default:
            break; 
    }

    var combined_rating = (parseInt(TL_rating) + parseInt(manager_rating)) / 2;
    if (combined_rating >= 8) {
        appraisal += 4500; 
    } else if (combined_rating >= 6){
        appraisal += 3000; 
    } else if (combined_rating >= 4){
        appraisal += 2000; 
    } else {
        appraisal += 0;
    }

    var LPA = (appraisal + parseInt(salary)) * 12 / 100000;
    var Hike  = (((appraisal + parseInt(salary)) - parseInt(salary)) / parseInt(salary)) * 100;

    // Store the employee data in an object
    var employee = {
        emp_no: emp_no,
        name: name,
        experience: experience,
        manager_rating: manager_rating,
        TL_rating: TL_rating,
        Role: Role,
        timeon_odc: timeon_odc,
        salary: salary,
        emp_type: emp_type,
        appraisal: appraisal,
        LPA: LPA.toFixed(2),
        Hike: Hike.toFixed(2) + '%'
    };

    employeeData.push(employee);

    // Display the appraisal result
    document.getElementById("result").style.display = "block";
    document.getElementById("appraisal_result").innerHTML = "Appraisal: Rupees " + appraisal + "<br>LPA(lakhs per annum): " + LPA.toFixed(2) + " LPA<br>Hike: " + Hike.toFixed(2) + "%";
}

function showPage(pageId) {
    var pages = document.getElementsByClassName('content');
    for (var i = 0; i < pages.length; i++) {
        pages[i].classList.remove('active');
    }
    document.getElementById(pageId).classList.add('active');
}

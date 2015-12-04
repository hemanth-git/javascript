mainProgram();

function mainProgram() {
    var companies = {
        "TCS": {
            "revenue": 1000000,
            "expenses": {
                "salaries": 30,  // are percentages of total revenue
                "rent": 20,
                "utilites": 15
            },
            "employees": [
                {
                    "name": "Joe",
                    "age": 30,
                    "role": "Admin"
                },
                {
                    "name": "Hai",
                    "age": 40,
                    "role": "Tester"
                },
                {
                    "name": "Sherlock",
                    "age": 45,
                    "role": "Programmer"
                }
            ]
        },
        "GGK": {
            "revenue": 2000000,
            "expenses": {
                "salaries": 40,  // percentages of total revenue
                "rent": 10,
                "utilites": 25
            },
            "employees": [
                {
                    "name": "Hanu",
                    "age": 35,
                    "role": "Admin"
                },
                {
                    "name": "Priya",
                    "age": 20,
                    "role": "Tester"

                },
                {
                    "name": "Madhu",
                    "age": 50,
                    "role": "Programmer"
                }

            ]

        },
        "OSMOSYS": {
            "revenue": 3000000,
            "expenses": {
                "salaries": 50,  // percentages of total revenue
                "rent": 10,
                "utilites": 10
            },
            "employees": [
                {
                    "name": "Harry",
                    "age": 22,
                    "role": "Admin"
                },
                {
                    "name": "Raju",
                    "age": 33,
                    "role": "Tester"
                },
                {
                    "name": "Srinivas",
                    "age": 40,
                    "role": "Programmer"
                }
            ]
        }
    };


    employeesSplitting();
    employeesRoles();
    calculateProfit();
    function calculateProfit() {
        var tcsProfit = 0;
        var ggkProfit =0;
    }

    function employeesRoles() {
        var testerNames = [];
        var programmerNames = [];
        var adminNames = [];

        var EmployeeList = companies.TCS.employees;
        listOutEmployeesRoles(EmployeeList);
        EmployeeList = companies.GGK.employees;
        listOutEmployeesRoles(EmployeeList);
        EmployeeList = companies.OSMOSYS.employees;
        listOutEmployeesRoles(EmployeeList);

        function listOutEmployeesRoles(employeeList) {
            for (var i = 0; i < employeeList.length; i++) {
                var tempRole = employeeList[i];
                if (tempRole.role === 'Admin') {
                    adminNames.push(tempRole.name);
                }
                else if (tempRole.role === 'Programmer') {
                    programmerNames.push(tempRole.name);
                }
                else {
                    testerNames.push(tempRole.name);
                }
            }
        }
        alert("Programmers are " + programmerNames + "\n Testers are " + testerNames + "\n Admins are " + adminNames);
    }
    
    function employeesSplitting() {
         var minAndMax = {
            'maxAgeName': '',
            'minAgeName': '',
            'max1': 0,
            'min1': 100
        };
        var ageLimit = prompt("Enter the age to get the names of employees of all companies '>' age");
        var employeesAgeLessNameArray = [];
        var employeesAgeGreaterNameArray = [];
        var EmployeeList = companies.TCS.employees;
        listOutEmployees(EmployeeList, ageLimit);
        EmployeeList = companies.GGK.employees;
        listOutEmployees(EmployeeList, ageLimit);
        EmployeeList = companies.OSMOSYS.employees;
        listOutEmployees(EmployeeList, ageLimit);
        alert("employees less than given value \n" + employeesAgeLessNameArray);
        alert("employees greater than given value \n" + employeesAgeGreaterNameArray)
        
        function listOutEmployees(EmployeeList, ageLimit) {
            ageLimit = +ageLimit;
            if (isNaN(ageLimit) || ageLimit <= 0) {
                alert("Invalid age ")
            }
            else {
                for (var i = 0; i < EmployeeList.length; i++) {
                    var tempAge = EmployeeList[i];

                    if (tempAge.age >= ageLimit) {
                        employeesAgeGreaterNameArray.push(tempAge.name);
                        checkMin(tempAge.name, tempAge.age);
                        checkMax(tempAge.name, tempAge.age);
                    }
                    else {
                        employeesAgeLessNameArray.push(tempAge.name);
                        checkMin(tempAge.name, tempAge.age);
                        checkMax(tempAge.name, tempAge.age);
                    }
                }

            }
        }

       
        alert("youngest employee is " + minAndMax.maxAgeName + " Oldest employee is " + minAndMax.minAgeName);
        function checkMin(name, age) {
            if (minAndMax.min1 >= age) {
                minAndMax.min1 = age;
                minAndMax.minAgeName = name;
            }
        }
        function checkMax(name, age) {
            if (minAndMax.max1 <= age) {
                minAndMax.max1 = age;
                minAndMax.maxAgeName = name;
            }
        }
    }
}
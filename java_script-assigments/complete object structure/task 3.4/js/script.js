
var mainProgram = (function () {
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
    function profitOrLoss(){
        var companyDetails = [];
        var maxProfitCompany = {
            companyName:'',
            profit:0
        };
        for(var company in companies) {
            var companyIndividual={
                companyName:'',
                profit:0
            }; 
            var revenue=companies[company].revenue;
            var expences=companies[company].expenses.salaries+companies[company].expenses.rent+companies[company].expenses.utilites;
            companyIndividual.profit=revenue-expences;
            companyIndividual.companyName=company;
            
            companyDetails.push(companyIndividual);
            if(maxProfitCompany.profit<companyIndividual.profit){
                maxProfitCompany.profit=companyIndividual.profit;
                maxProfitCompany.companyName=companyIndividual.companyName;
            }
        }
        console.log(companyDetails);
        console.log(maxProfitCompany);
    }
    function splitBasedOnRole(){
        var employeeRoleList = [];
        for(var company in companies) {
            var companyRoles={
                tester:[],
                programmers:[],
                admins:[],
                name: company
            };
            
            for(var i=0;i<companies[company].employees.length;i++){
                var tempRole=companies[company].employees[i].role;
                if(tempRole === 'Admin'){
                    companyRoles.admins.push(companies[company].employees[i].name);
                }
                else if(tempRole === 'Programmer' ){
                    companyRoles.programmers.push(companies[company].employees[i].name);
                }
                else if (tempRole === 'Tester'){
                    companyRoles.tester.push(companies[company].employees[i].name);
                }
            }
            employeeRoleList.push(companyRoles);
        }
        console.log(employeeRoleList);
    }
    
    function splitBasedOnAge() {
        var age = window.prompt('Please enter your age');
        var young,old;
        var companyArr = [];
        var counter = 0;
        if(isNum(age)) {
            for(var prop in companies) {
                young = companies[prop].employees[0].age;
                old = companies[prop].employees[0].age;
                companyArr.push({
                    name:prop.toString(),
                    young:young,
                    youngName:companies[prop].employees[0].name,
                    old:old,
                    oldName:companies[prop].employees[0].name,
                    lessThanX: [],
                    greaterThanX: []
                });
                for(var i=0;i<companies[prop].employees.length;i++) {
                    if(companies[prop].employees[i].age < age) {
                        companyArr[counter].lessThanX.push(companies[prop].employees[i].name);
                    }
                    else if(companies[prop].employees[i].age > age) {
                        companyArr[counter].greaterThanX.push(companies[prop].employees[i].name);
                    }
                    
                    if(companies[prop].employees[i].age < young) {
                        companyArr[counter].young = companies[prop].employees[i].age;
                        companyArr[counter].youngName = companies[prop].employees[i].name;
                    }
                    else if(companies[prop].employees[i].age > old) {
                        companyArr[counter].old = companies[prop].employees[i].age;
                        companyArr[counter].oldName = companies[prop].employees[i].name;
                    }
                }
                counter++;           
            }
            console.table(companyArr);
        }
        else {
            alert('Invalid option');
        }
    }
    
    function executeOption(option) {
        switch(option) {
            case 1:
                splitBasedOnAge();
                break;
            case 2:
                splitBasedOnRole();
                break;
            case 3:
                profitOrLoss();
                break;
            default:
                alert('Invalid option!!');
                break;
        }
    }
    
    (function main(){
        var option = window.prompt('1. Split based on age \n2.Split based on roles\n3.Profit/loss\nChoose your option:-');
        if(isNum(option)) {
            executeOption(+option);
        }
        else {
            alert('Invalid option');
        }
    })();
    
    function isNum(num) {
        if(+num>0) {
            return true;
        }
        return false;
    }
    
    
} ());
// Dependencies
let responseStruct = require('./response');

//Data respository
let data = require('./../../dataInput/datafile.json');

/* Function modules */
//Default GET
exports.defaultGetApi = function() {
    return new Promise((resolve, reject)=>{
        let output = 'Hello. Greetings. welcome to my page.';
        resolve(responseStruct.create_response(output));        
        //reject(create_response('Exception Thrown.'));
    });
};
//Default test GET
exports.testGetApi = function() {
    return new Promise((resolve, reject)=> {
        let output = "Great. Test GET is successful. Cheers!!!. You doing great.";
        resolve(responseStruct.create_response(output));
        //reject(create_response(output));
    });
};
//List all vacancies API
exports.listAllAPi = function(dept, pos) {
    return new Promise((resolve, reject)=> {
        let output = 'We got you all vacancies available with us. ';
        let flag = true;
        for(let i in data.vacancylist) {
            if(dept && pos) {
                if(data.vacancylist[i].department == dept && data.vacancylist[i].position == pos) {
                    output = output + 'There are ' + data.vacancylist[i].vacantPositions + ' vacancies available in ' + data.vacancylist[i].department + ' for ' + data.vacancylist[i].position + ' role. ';
                    flag = false;
                }
            }
            else if(dept) {
                if(data.vacancylist[i].department == dept) {
                    output = output + 'There are ' + data.vacancylist[i].vacantPositions + ' vacancies available in ' + data.vacancylist[i].department + ' for ' + data.vacancylist[i].position + ' role. ';
                    flag = false;
                }
            }
            else if(pos) {
                if(data.vacancylist[i].position == pos) {
                    output = output + 'There are ' + data.vacancylist[i].vacantPositions + ' vacancies available in ' + data.vacancylist[i].department + ' for ' + data.vacancylist[i].position + ' role. ';
                    flag = false;
                }
            }
            else {
                output = output + 'There are ' + data.vacancylist[i].vacantPositions + ' vacancies available in ' + data.vacancylist[i].department + ' for ' + data.vacancylist[i].position + ' role. ';
                flag = false;
            }
        }
        output += 'Thank you!!!';
        if(flag) {
            if(dept && pos) {
                output = 'Sorry. There are no vacancies available in '+ dept +' department for ' + pos + ' role. ';
            }
            else if(pos) {
                output = 'Sorry. There are no vacancies available for ' + pos + ' role in any department. ';
            }
            else if(dept) {
                output = 'Sorry. There are no vacancies available in '+ dept +' department for any role. ';
            }
            reject(responseStruct.create_response(output));
        }else {
            resolve(responseStruct.create_response(output));
        }
    });
}
//List all vacancies API
exports.searchAPi = function(dept, pos) {
    return new Promise((resolve, reject)=> {
        let output = '';
        let flag = true;

        if(!dept || !pos) {
            output = 'Did you missed something. I didnt got the department or position you looking for vacancy. Can you try again.';
            reject(responseStruct.create_response(output));
        }
        for(let i in data.vacancylist) {
            if(dept && pos) {
                if(data.vacancylist[i].department == dept && data.vacancylist[i].position == pos) {
                    output = output + 'There are ' + data.vacancylist[i].vacantPositions + ' vacancies available in ' + data.vacancylist[i].department + ' for ' + data.vacancylist[i].position + ' role. ';
                    flag = false;
                }
            }
            // else if(dept) {
            //     if(data.vacancylist[i].department == dept) {
            //         output = output + 'There are ' + data.vacancylist[i].vacantPositions + ' vacancies available in ' + data.vacancylist[i].department + ' for ' + data.vacancylist[i].position + ' role. ';
            //         flag = false;
            //     }
            // }
            // else if(pos) {
            //     if(data.vacancylist[i].position == pos) {
            //         output = output + 'There are ' + data.vacancylist[i].vacantPositions + ' vacancies available in ' + data.vacancylist[i].department + ' for ' + data.vacancylist[i].position + ' role. ';
            //         flag = false;
            //     }
            // }
        }
        if(flag) {
            if(dept && pos) {
                output = 'Sorry. There are no vacancies available in '+ dept +' department for ' + pos + ' role. ';
            }
            reject(responseStruct.create_response(output));
        }else {
            resolve(responseStruct.create_response(output));
        }
    });
}



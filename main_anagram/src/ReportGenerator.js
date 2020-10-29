class ReportGenerator {
    calculateSummary(scansList) {
        let employeeMap = {}
        //console.log(scansList)
        for (let i = 0; i< scansList.length; i++) {
            //console.log('adding ' + scansList[i])
            let x = scansList[i];
            if (employeeMap[x.fullName ] ) {
                
                employeeMap[x.fullName].push(x)
            }
            else {
                employeeMap[x.fullName ] = []
                employeeMap[x.fullName].push(x)
            }
        }
        
        console.log("calculating")
        var result =  [];
        for (let name in employeeMap) {
            console.log(name + 'has ' + employeeMap[name].length);
            result.push({"name": name, "total": employeeMap[name].length});
            for (let i =0; i <  employeeMap[name].length; i++){
                console.log('scan ' +  employeeMap[name][i].goingToOrFro)
            }   
        }

        return result;
    }
}

export default ReportGenerator
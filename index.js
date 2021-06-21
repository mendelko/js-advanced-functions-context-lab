/* Your Code Here */
function createEmployeeRecord(array) {
    let record = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return record;
}

function createEmployeeRecords(array){
    return array.map(createEmployeeRecord)
}

function createTimeInEvent(dateStamp){
    

    this.timeInEvents.push({
        type: "TimeIn",
        date: dateStamp.slice(0,10),
        hour: parseInt(dateStamp.slice(-4))
    })
    
    return this;
}

function createTimeOutEvent(dateStamp){
    

    this.timeOutEvents.push({
        type: "TimeOut",
        date: dateStamp.slice(0,10),
        hour: parseInt(dateStamp.slice(-4))
    })
    
    return this;
}

function hoursWorkedOnDate(date){
    let timeInEvent = this.timeInEvents.find(function(e){
        if (e.date === date){
            return e.date
        }
    })
    let timeOutEvent = this.timeOutEvents.find(function(e){
        if (e.date === date){
            return e.date
        }
    })
    return (timeOutEvent.hour - timeInEvent.hour) / 100
}

function wagesEarnedOnDate(date){
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

function findEmployeeByFirstName(employeeRecord){
    const findEmployee = employeeRecord.find(e => e.firstName)
    return findEmployee
}

function calculatePayroll(employeeRecords){
    let payroll = employeeRecords.map((e) => allWagesFor.call((e)))
    return payroll.reduce((sum, wages) => sum + wages)
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
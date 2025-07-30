
               const buses = [
  { busId: 1, busNo: "AP16AB1001", meterReading: 45210, lastFuelDate: "2025-07-25", lastGarageDate: "2025-07-10", driver: "Ravi", route: "Kakinada - Rajahmundry" },
  { busId: 2, busNo: "AP16AB1002", meterReading: 46000, lastFuelDate: "2025-07-20", lastGarageDate: "2025-07-05", driver: "Suresh", route: "Rajahmundry - Eluru" },
  { busId: 3, busNo: "AP16AB1003", meterReading: 43800, lastFuelDate: "2025-07-18", lastGarageDate: "2025-06-30", driver: "Mahesh", route: "Kakinada - Amalapuram" },
  { busId: 4, busNo: "AP16AB1004", meterReading: 47050, lastFuelDate: "2025-07-22", lastGarageDate: "2025-07-02", driver: "Ramesh", route: "Vijayawada - Guntur" },
  { busId: 5, busNo: "AP16AB1005", meterReading: 44990, lastFuelDate: "2025-07-21", lastGarageDate: "2025-07-01", driver: "Naresh", route: "Kakinada - Srikakulam" },
  { busId: 6, busNo: "AP16AB1006", meterReading: 45500, lastFuelDate: "2025-07-20", lastGarageDate: "2025-07-05", driver: "Dinesh", route: "Vizag - Rajahmundry" },
  { busId: 7, busNo: "AP16AB1007", meterReading: 46200, lastFuelDate: "2025-07-18", lastGarageDate: "2025-07-03", driver: "Harsha", route: "Amalapuram - Kakinada" },
  { busId: 8, busNo: "AP16AB1008", meterReading: 44300, lastFuelDate: "2025-07-17", lastGarageDate: "2025-06-28", driver: "Vikram", route: "Rajahmundry - Vizag" },
  { busId: 9, busNo: "AP16AB1009", meterReading: 46010, lastFuelDate: "2025-07-24", lastGarageDate: "2025-07-07", driver: "Sunil", route: "Kakinada - Hyderabad" },
  { busId: 10, busNo: "AP16AB1010", meterReading: 45350, lastFuelDate: "2025-07-26", lastGarageDate: "2025-07-09", driver: "Srinu", route: "Guntur - Tenali" },
  { busId: 11, busNo: "AP16AB1011", meterReading: 45700, lastFuelDate: "2025-07-23", lastGarageDate: "2025-07-06", driver: "Kishore", route: "Vijayawada - Eluru" },
  { busId: 12, busNo: "AP16AB1012", meterReading: 44800, lastFuelDate: "2025-07-19", lastGarageDate: "2025-07-04", driver: "Ajay", route: "Kakinada - Rajahmundry" },
  { busId: 13, busNo: "AP16AB1013", meterReading: 47000, lastFuelDate: "2025-07-25", lastGarageDate: "2025-07-08", driver: "Chandu", route: "Eluru - Amalapuram" },
  { busId: 14, busNo: "AP16AB1014", meterReading: 44500, lastFuelDate: "2025-07-22", lastGarageDate: "2025-06-29", driver: "Mohan", route: "Kakinada - Rajahmundry" },
  { busId: 15, busNo: "AP16AB1015", meterReading: 46600, lastFuelDate: "2025-07-21", lastGarageDate: "2025-07-03", driver: "Raju", route: "Rajahmundry - Kakinada" },
  { busId: 16, busNo: "AP16AB1016", meterReading: 45550, lastFuelDate: "2025-07-24", lastGarageDate: "2025-07-02", driver: "Kiran", route: "Hyderabad - Kakinada" },
  { busId: 17, busNo: "AP16AB1017", meterReading: 45100, lastFuelDate: "2025-07-20", lastGarageDate: "2025-07-01", driver: "Naveen", route: "Rajahmundry - Guntur" },
  { busId: 18, busNo: "AP16AB1018", meterReading: 45900, lastFuelDate: "2025-07-26", lastGarageDate: "2025-07-05", driver: "Ganesh", route: "Vijayawada - Vizag" },
  { busId: 19, busNo: "AP16AB1019", meterReading: 46500, lastFuelDate: "2025-07-18", lastGarageDate: "2025-06-27", driver: "Teja", route: "Kakinada - Rajahmundry" },
  { busId: 20, busNo: "AP16AB1020", meterReading: 44200, lastFuelDate: "2025-07-19", lastGarageDate: "2025-07-03", driver: "Lokesh", route: "Rajahmundry - Hyderabad" }
];

              const drivers = [
  { driverId: "DRV01", driverName: "Ravi", driverBusId: 1, driverLocation: "Kakinada", status: "Present" },
  { driverId: "DRV02", driverName: "Suresh", driverBusId: 2, driverLocation: "Rajahmundry", status: "Absent" },
  { driverId: "DRV03", driverName: "Mahesh", driverBusId: 3, driverLocation: "Amalapuram", status: "Present" },
  { driverId: "DRV04", driverName: "Ramesh", driverBusId: 4, driverLocation: "Guntur", status: "Present" },
  { driverId: "DRV05", driverName: "Naresh", driverBusId: 5, driverLocation: "Srikakulam", status: "Absent" },
  { driverId: "DRV06", driverName: "Dinesh", driverBusId: 6, driverLocation: "Vizag", status: "Present" },
  { driverId: "DRV07", driverName: "Harsha", driverBusId: 7, driverLocation: "Amalapuram", status: "Present" },
  { driverId: "DRV08", driverName: "Vikram", driverBusId: 8, driverLocation: "Rajahmundry", status: "Absent" },
  { driverId: "DRV09", driverName: "Sunil", driverBusId: 9, driverLocation: "Hyderabad", status: "Present" },
  { driverId: "DRV10", driverName: "Srinu", driverBusId: 10, driverLocation: "Tenali", status: "Absent" },
  { driverId: "DRV11", driverName: "Kishore", driverBusId: 11, driverLocation: "Eluru", status: "Present" },
  { driverId: "DRV12", driverName: "Ajay", driverBusId: 12, driverLocation: "Kakinada", status: "Present" },
  { driverId: "DRV13", driverName: "Chandu", driverBusId: 13, driverLocation: "Amalapuram", status: "Present" },
  { driverId: "DRV14", driverName: "Mohan", driverBusId: 14, driverLocation: "Rajahmundry", status: "Absent" },
  { driverId: "DRV15", driverName: "Raju", driverBusId: 15, driverLocation: "Vizag", status: "Present" },
  { driverId: "DRV16", driverName: "Kiran", driverBusId: 16, driverLocation: "Hyderabad", status: "Absent" },
  { driverId: "DRV17", driverName: "Naveen", driverBusId: 17, driverLocation: "Guntur", status: "Present" },
  { driverId: "DRV18", driverName: "Ganesh", driverBusId: 18, driverLocation: "Vijayawada", status: "Present" },
  { driverId: "DRV19", driverName: "Teja", driverBusId: 19, driverLocation: "Kakinada", status: "Absent" },
  { driverId: "DRV20", driverName: "Lokesh", driverBusId: 20, driverLocation: "Hyderabad", status: "Present" }
];
               
               function closemenu(){
                document.getElementsByClassName("menu-bar")[0].style = "left:-250px"
                document.getElementsByClassName("menu-icon")[0].style = "display:block"
                document.getElementsByClassName("dashboard-details")[0].style = "margin-left:-200px"
             }
             function showmenu(){
                document.getElementsByClassName("menu-bar")[0].style = "left:0px"
                document.getElementsByClassName("menu-icon")[0].style = "display:none"
                document.getElementsByClassName("dashboard-details")[0].style = "margin-left:0px"
             }
             
             const resultBlock = document.getElementById("resultBlock");

             function searchdetails(){
                  // BUS Details
                  let opt = document.getElementsByClassName("choose-opt")[0].value;
                  if(opt === "bus"){
                  let num = parseInt(document.getElementsByClassName("details-search")[0].value.trim()); 
                  
                  let res 
                  if(isNaN(num)){
                     res = `<h2>Enter Valid Details</h2>`;  
                     document.getElementsByClassName("result")[0].innerHTML = res;
                     document.getElementsByClassName("result")[0].style = "display:flex;"
                     return;
                  }
            
                  let bus = buses.find(bus => bus.busId === num);
                  if(bus){
                     res = `<p><b>Bus ID</b> :- ${bus.busId}</p>
                              <p><b>Bus NO</b>:- ${bus.busNo}</p> 
                              <p><b>Bus Route</b> :- ${bus.route}</p> 
                              <p><b>Bus Driver</b> :- ${bus.driver}</p> 
                              <p><b>Bus meter Reading</b> :- ${bus.meterReading}</p> 
                              <p><b>Bus Last fuel</b> :- ${bus.lastFuelDate}</p> 
                              <p><b>Bus Last garage<b> :- ${bus.lastGarageDate}</p> `
                  }
                  else{
                    res = '<p>Bus Not Found!</p>';
                  }
                
                 document.getElementsByClassName("result")[0].innerHTML = res
                 document.getElementsByClassName("result")[0].style = "display:flex;"
                 
               }
                

               else{
                  // DRIVER DETAILS
                        let drvId = document.getElementsByClassName("details-search")[0].value.trim();

                        let res
                        console.log(drvId)
                        if(drvId === ""){
                           res = `<h1>Enter Valid Details</h2>`;  
                           document.getElementsByClassName("result")[0].innerHTML = res;
                           document.getElementsByClassName("result")[0].style = "display:flex;"
                           return;
                        }

                        let drv = drivers.find(drv => drv.driverId === drvId)

                        if(drv){
                              
                           res = `<p><b>Driver Name</b> :- ${drv.driverName}
                                 <p><b>Driver ID</b> :- ${drv.driverId}
                                 <p><b>Driver BUS</b> :- ${drv.driverBusId}
                                 <p><b>Driver Location</b> :- ${drv.driverLocation}
                                 <p><b>Driver status</b> :- ${drv.status}`
                        }

                        else{

                           res = '<p>Bus Not Found!</p>';
                        }
                     document.getElementsByClassName("result")[0].innerHTML = res;
                     document.getElementsByClassName("result")[0].style = "display:flex;"
                    console.log(res);
                }
               //  resultBlock.style.transform = "rotateX('-90deg')";
                
             }
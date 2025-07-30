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

const admins = [
  {adminId: "ADM001", adminName: "Kiran", email: "john.doe@example.com", role: "SuperAdmin", phone: "+91 5551234567", dateOfJoining: "2022-03-15", location: "New York, USA"},
  {adminId: "ADM002", adminName: "Ashok", email: "jane.smith@example.com", role: "Moderator", phone: "+91 2079460958", dateOfJoining: "2021-07-20", location: "London, UK"},
  {adminId: "ADM003", adminName: "Pavan", email: "ali.khan@example.com", role: "Admin", phone: "+91 3001234567", dateOfJoining: "2023-01-10", location: "Lahore, Pakistan"},
  {adminId: "ADM004", adminName: "Girish", email: "maria.garcia@example.com", role: "SuperAdmin", phone: "+91 600123456", dateOfJoining: "2020-11-05", location: "Madrid, Spain"},
  {adminId: "ADM005", adminName: "Satish", email: "li.wei@example.com", role: "Admin", phone: "+91 1012345678", dateOfJoining: "2022-08-25", location: "Beijing, China"}
];

let driver = null;
let admin = null;
function showTick(tickElement) {
    tickElement.style.display = 'inline';
    setTimeout(() => {
        tickElement.style.display = 'none';
    }, 3000);
}

function checkTimeWindow() {
    const now = new Date();
    const hours = now.getHours();
    const isTimeWindow = hours >= 8 && hours < 10;
    const submitBtn = document.getElementById('submitEntry');
    const timeStatus = document.getElementById('timeStatus');

    if (submitBtn) {
        if (isTimeWindow) {
            submitBtn.disabled = false;
            submitBtn.classList.remove('disabled');
            timeStatus.innerHTML = '<p style="color: var(--success-color); font-size: 20px;">You can submit now (8 AM - 10 AM)</p>';
        } else {
            submitBtn.disabled = true;
            submitBtn.classList.add('disabled');
            timeStatus.innerHTML = '<p style="color: var(--error-color); font-size: 20px;">Form closed (open only 8 AM - 10 AM)</p>';
        }
    }
}

const dailyEntryForm = document.getElementById('dailyEntryForm');
if(dailyEntryForm){
    dailyEntryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        if (!confirm('Do you want to submit this bus report?')) return;
        const busNumber = document.getElementById('busNumber').value;
        const startTime = document.getElementById('startTime').value;
        const endTime = document.getElementById('endTime').value;
        const startMeter = document.getElementById('startMeter').value;
        const endMeter = document.getElementById('endMeter').value;
        const studentCount = document.getElementById('studentCount').value;
        const statusDiv = document.getElementById('entryStatus');
        const tickMark = document.getElementById('dailyTick');

        if (busNumber && startTime && endTime && startMeter && endMeter && studentCount) {
            statusDiv.innerHTML = '<p style="color: var(--success-color);">Bus report saved!</p>';
            showTick(tickMark);
        } else {
            statusDiv.innerHTML = '<p style="color: var(--error-color);">Please fill all fields</p>';
        }
    });
}

const serviceForm = document.getElementById('serviceForm');
const fuelBtn = document.getElementById('fuelBtn');
const garageBtn = document.getElementById('garageBtn');
const serviceTypeInput = document.getElementById('serviceType');
const fuelFields = document.getElementById('fuelFields');
const garageFields = document.getElementById('garageFields');
const serviceDate = document.getElementById('serviceDate');
const fuelLiters = document.getElementById('fuelLiters');
const serviceDateGarage = document.getElementById('serviceDateGarage');
const serviceSubmit = document.getElementById('serviceSubmit');

if(fuelBtn){
    fuelBtn.addEventListener('click', () => {
        const isFuelHidden = fuelFields.classList.contains('hidden');
        if(isFuelHidden){
            serviceTypeInput.value = 'fuel';
            fuelBtn.classList.add('active');
            garageBtn.classList.remove('active');
            fuelBtn.classList.add('fuel');
            garageBtn.classList.remove('garage');
            fuelFields.classList.remove('hidden');
            garageFields.classList.add('hidden');
        }
        else {
            serviceTypeInput.value = '';
            fuelBtn.classList.remove('active');
            fuelFields.classList.add('hidden');
            garageBtn.classList.add('garage');
        }
    });
}

if(garageBtn){
    garageBtn.addEventListener('click', () => {
        const isGarageHidden = garageFields.classList.contains('hidden');
        if(isGarageHidden) {
            serviceTypeInput.value = 'garage';
            garageBtn.classList.add('active');
            fuelBtn.classList.remove('active');
            garageBtn.classList.add('garage');
            fuelBtn.classList.remove('fuel');
            garageFields.classList.remove('hidden');
            fuelFields.classList.add('hidden');
        }
        else {
            serviceTypeInput.value = '';
            garageBtn.classList.remove('active');
            garageFields.classList.add('hidden');
            fuelBtn.classList.add('fuel');
        }
    });
}

if(serviceForm){
    serviceForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!confirm('Do you want to submit this service report?')) return;
        const serviceType = serviceTypeInput.value;
        const statusDiv = document.getElementById('serviceStatus');
        const tickMark = document.getElementById('serviceTick');

        if (serviceType === 'fuel') {
            if (serviceDate.value && fuelLiters.value) {
                statusDiv.innerHTML = `<p style="color: var(--success-color)">Fuel report saved!</p>`;
                showTick(tickMark);
            } else {
                statusDiv.innerHTML = `<p style="color: var(--warning-color)">Please fill all fields</p>`;
            }
        } else if (serviceType === 'garage') {
            if (serviceDateGarage.value) {
                statusDiv.innerHTML = `<p style="color: var(--success-color)">Garage report saved!</p>`;
                showTick(tickMark);
            } else {
                statusDiv.innerHTML = `<p style="color: var(--warning-color)">Please select a date</p>`;
            }
        } else {
            statusDiv.innerHTML = `<p style="color: var(--warning-color)">Please select a service type</p>`;
        }
    });
}


const leaveForm = document.getElementById('leaveForm');
const leaveDatesContainer = document.getElementById('leaveDates');
const leaveDateInput = document.getElementById('leaveDate');

function generateLeaveDateButtons() {
    const today = new Date();
    for (let i = 1; i <= 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        const dateStr = date.toISOString().split('T')[0];
        const formattedDate = date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'date';
        button.textContent = formattedDate;
        button.dataset.date = dateStr;
        button.addEventListener('click', () => {
            leaveDateInput.value = dateStr;
            document.querySelectorAll('.date').forEach(btn => btn.classList.remove('date-selected'));
            button.classList.add('date-selected');
        });
        leaveDatesContainer.appendChild(button);
    }
}

if(leaveForm){
    leaveForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!confirm('Do you want to apply for this leave?')) return;
        const date = leaveDateInput.value;
        const statusDiv = document.getElementById('leaveStatus');
        const tickMark = document.getElementById('leaveTick');

        if (date) {
            statusDiv.innerHTML = `<p style="color: var(--warning-color);">Pending . . .</p>`;
            showTick(tickMark);
        } else {
            statusDiv.innerHTML = `<p style="color: var(--warning-color);">Please select a date</p>`;
        }
    });
}

const DriverLoginButton = document.getElementById("driverlogin");
if(DriverLoginButton) {
    DriverLoginButton.addEventListener('click', function(e) {
        e.preventDefault();

        const loginInvalid = document.getElementById("LoginInvalid");
        const userId = document.getElementById("LoginDriverId").value.trim();
        const password = document.getElementById("LoginDriverPassword").value.trim();

        loginInvalid.innerHTML = '';

        if(!userId || !password){
            loginInvalid.innerHTML = `<p style="color: red;">Please enter both User ID and Password.</p>`;
            return;
        }

        const driver = drivers.find(driver => driver.driverId === userId);

        if(driver && password === 'Aditya'){
            localStorage.setItem("loggedInDriverId",driver.driverId);
            loginInvalid.innerHTML = '<p style="color: green;">Login Successful!</p>';
            setTimeout(() => {
                window.location.href = "driver_page.html";
            }, 500);
        }
        else  {
            loginInvalid.innerHTML = "<p style = 'color: red;'>Invalid User ID or Password</p>";
        }
    });
}

const AdminLoginButton = document.getElementById("adminlogin");
if(AdminLoginButton){
    AdminLoginButton.addEventListener('click', function(e) {
        e.preventDefault();

        const loginAdminInvalid = document.getElementById("LoginAdminInvalid");
        const AdminId = document.getElementById("LoginAdminId").value.trim();
        const AdminPassword = document.getElementById("LoginAdminPassword").value.trim();

        loginAdminInvalid.innerHTML = '';

        if(!AdminId || !AdminPassword){
            loginAdminInvalid.innerHTML = `<p style="color: red;">Please enter both Admin ID and Password.</p>`;
            return;
        }

        const admin = admins.find(admin => admin.adminId === AdminId);

        if(admin && AdminPassword === 'Aditya'){
            localStorage.setItem("loggedInAdminId",admin.adminId);
            loginAdminInvalid.innerHTML = '<p style="color: green;">Login Successful!</p>';
            setTimeout(() => {
                window.location.href = "dummy.html";
            }, 500);
        }
        else  {
            loginAdminInvalid.innerHTML = "<p style = 'color: red;'>Invalid User ID or Password</p>";
        }
    });
}


function getLoggedInDriver() {
    const id = localStorage.getItem("loggedInDriverId");
    if(!id) return null;
    return drivers.find(driver => driver.driverId === id);
}

function getLoggedInAdmin() {
    const id = localStorage.getItem("loggedInAdminId");
    if(!id) return null;
    return admins.find(admin => admin.adminId === id);
}

if (document.getElementById("DriverHello")) {
  const driver = getLoggedInDriver();
  if (!driver) {
    window.location.href = "login.html";
  } else {
    DriverDetails(driver);
    Attendance(driver);
    generateLeaveDateButtons();
    checkTimeWindow();
    setInterval(checkTimeWindow, 60000);

    RunAttendance(driver);
    setInterval(() => RunAttendance(driver), 60000);
  }
}

if(document.getElementById("AdminWelcome")) {
    const admin = getLoggedInAdmin();
    if(!admin) {
        window.location.href = "login.html";
    }
    else {
        AdminDetails(admin);
    }
}

function RunAttendance(driver) {
    const now = new Date();
    const Hour = now.getHours();
    const todayDate = now.toISOString().split('T')[0];

    const lastRun = localStorage.getItem('attendanceLastRun');

    if(Hour === 23 && lastRun !== todayDate) {
        calculateAttendance(driver);
        localStorage.setItem('attendanceLastRun',todayDate);
    }
}

function calculateAttendance(driver) {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();

    let startDate, endDate;
    if (currentDay >= 26) {
        startDate = new Date(currentYear, currentMonth, 26);
        endDate = new Date(currentYear, currentMonth + 1, 25);
    } else {
        startDate = new Date(currentYear, currentMonth - 1, 26);
        endDate = new Date(currentYear, currentMonth, 25);
    }

    const totalDays = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
    let daysPresent = 0;
    if(currentDay === 26){
        daysPresent = 0;
    }
    if(driver.status === "Present") daysPresent++;
    const percentage = ((daysPresent / totalDays) * 100).toFixed(2);

    const percentageElement = document.getElementById('attendancePercentage');
    const barElement = document.getElementById('attendanceBar');
    const daysElement = document.getElementById('attendanceDays');

    percentageElement.textContent = `${percentage}%`;
    barElement.style.width = `${percentage}%`;
    daysElement.textContent = `${daysPresent} / ${totalDays}`;
}

function DriverDetails(driver) {
  document.getElementById("DriverHello").innerHTML = `<p>Hello! ${driver.driverName}</p>`;
  document.getElementById("driverName").innerHTML = `<p>${driver.driverName}</p>`;
  document.getElementById("driverId").innerHTML = `<p>${driver.driverId}</p>`;
  document.getElementById("driverLocation").innerHTML = `<p>${driver.driverLocation}</p>`;
}

function AdminDetails(admin) {
    document.getElementById("AdminWelcome").innerText = `Welcome! ${admin.adminName}`;
    document.getElementById("adminId").innerText = `${admin.adminId}`;
    document.getElementById("Adminemail").innerText =`${admin.email}`;
    document.getElementById("Adminrole").innerText = `${admin.role}`;
    document.getElementById("Adminphone").innerText = `${admin.phone}`;
    document.getElementById("Adminjoining").innerText = `${admin.dateOfJoining}`;
    document.getElementById("Adminlocation").innerText = `${admin.location}`;
}


function Attendance(driver) {
    const swapButton = document.getElementById("swap-button");
    const attendanceStatus = document.getElementById("attendanceStatus");
    if(driver.status === 'Present'){
        swapButton.classList.add('swap-present');
        attendanceStatus.classList.add('present');
        swapButton.classList.remove('swap-absent');
        attendanceStatus.classList.remove('absent');
    }
    else {
        swapButton.classList.add('swap-absent');
        attendanceStatus.classList.add('absent');
        swapButton.classList.remove('swap-present');
        attendanceStatus.classList.remove('present');
        attendanceStatus.innerText = 'A';
    }
}


let isEditing = false;
const button = document.getElementById("editBtn");
if(button){
    function toggleEdit() {
    const fields = document.querySelectorAll(".profile-right .info");
    

    if (!isEditing) {
        fields.forEach(field => {
        const valueDiv = field.querySelector(".static-value");
        const valueText = valueDiv.textContent;

        const input = document.createElement("input");
        input.type = "text";
        input.value = valueText;
        input.className = "editable-input";

        field.replaceChild(input, valueDiv);
        });

        button.textContent = "Save Changes";
        button.style.backgroundColor = "#4caf50";
        button.style.transform = "scale(1.05)";
    } else {
        fields.forEach(field => {
        const input = field.querySelector("input");
        const updatedText = input.value;

        const div = document.createElement("div");
        div.className = "static-value";
        div.textContent = updatedText;

        field.replaceChild(div, input);
        });

        button.textContent = "Edit Profile";
        button.style.backgroundColor = "#00bcd4";
        button.style.transform = "scale(1)";
        alert("Profile updated successfully!");
    }

    isEditing = !isEditing;
    }

    // ✅ Display Current Date
    document.addEventListener("DOMContentLoaded", () => {
    const dateSpan = document.getElementById("date");
    const today = new Date();
    dateSpan.textContent = today.toDateString();
    });
}

const loginPage = document.getElementById("LoginPage");
if(loginPage) {
    const video = document.getElementById("intro-video");
    const introScreen = document.getElementById("intro-screen");
    const mainPage = document.getElementById("main-page");

    function transitionToMain() {
      introScreen.classList.add("fade-out");

      // After fade-out animation ends
      setTimeout(() => {
        introScreen.style.display = "none";
        mainPage.classList.add("reveal");
      },100); // matches fade-out transition time
    }
    video.onended = transitionToMain;
    setTimeout(transitionToMain, 4000);



    function driversignin(){
      document.querySelector(".login-container").style.display = "none";
      document.querySelector(".login-container-driver").style.display = "flex";
    }
    function adminsignin(){
      document.querySelector(".login-container").style.display = "none";
      document.querySelector(".login-container-admin").style.display = "flex";
    }
    function goback(){
      document.querySelector(".login-container").style.display = "flex";
      document.querySelector(".login-container-driver").style.display = "none";
      document.querySelector(".login-container-admin").style.display = "none";
    }
}
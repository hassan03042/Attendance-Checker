document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('attendance-form');
    const historyTableBody = document.getElementById('attendance-table-body');
    const submitButton = document.getElementById('submit-button');

    submitButton.addEventListener('click', function() {
        const employeeName = document.getElementById('employee-name').value;
        const arrivalTime = new Date().toLocaleTimeString('en-US', {hour12: false});

        const standardTime = new Date();
        standardTime.setHours(10, 0, 0); // Set the standard arrival time to 10:00 AM

        const arrival = new Date();
        const arrivalHour = arrival.getHours();
        const arrivalMinute = arrival.getMinutes();

        let status;
        if (arrivalHour < 10 || (arrivalHour === 10 && arrivalMinute <= 4)) {
            status = 'On Time';
        } else if (arrivalHour === 10 && arrivalMinute <= 5) {
            status = 'Warning';
        } else {
            status = 'Late';
        }

        // Log the attendance record to the console
        console.log(`Employee Name: ${employeeName}, Arrival Time: ${arrivalTime}, Status: ${status}`);

        // Add the attendance record to the history table
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${employeeName}</td>
            <td>${arrivalTime}</td>
            <td>${status}</td>
        `;
        historyTableBody.appendChild(newRow);

        // Reset form field
        document.getElementById('employee-name').value = '';
    });
});
// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $('#calculateTotal').click(function () {
        // Reset error message
        $('#hoursError').text('');

        // Get the entered hours
        var hours = parseFloat($('#hoursInput').val());

        // Validate if a positive number is entered
        if (isNaN(hours) || hours <= 0) {
            $('#hoursError').text('Please enter a positive number of hours.');
            return;
        }

        // Get the charge per hour
        var chargePerHour = parseFloat($('#chargePerHour').val());

        // Calculate the total
        var total = hours * chargePerHour;

        // Display the total
        $('#totalOutput').val(total.toFixed(2));
    });
});
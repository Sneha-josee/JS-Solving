document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded. Open console to test functions.");
});

function atmWithdrawal(balance, amount, pin, enteredPin) {
    if (enteredPin !== pin) return "Incorrect PIN";
    if (amount > balance) return "Insufficient Funds";
    if (amount % 100 !== 0) return "Enter amount in multiples of 100";
    return `Withdrawal successful. New balance: $${balance - amount}`;
}

function calculateFinalAmount(orderAmount) {
    let discount = orderAmount > 1000 ? 0.2 : orderAmount >= 500 ? 0.1 : 0;
    let finalAmount = orderAmount * (1 - discount);
    finalAmount += finalAmount > 50 ? 0 : 10;
    return `Final amount to pay: $${finalAmount.toFixed(2)}`;
}

function calculateGrade(marks, attendance) {
    if (attendance > 90) marks += 5;
    return marks >= 90 ? "A" : marks >= 80 ? "B" : marks >= 70 ? "C" : marks >= 60 ? "D" : "F";
}

function trafficLightControl(density) {
    return density === "Heavy Traffic" ? 60 : density === "Moderate Traffic" ? 40 : 20;
}

function calculateTicketPrice(age, showTime) {
    let price = 12;
    if (showTime < 17) price *= 0.8;
    if (age > 60) price *= 0.7;
    if (age < 12) price *= 0.6;
    return `Ticket Price: $${price.toFixed(2)}`;
}

function isEligibleForJob(age, experience, qualification) {
    return age >= 21 && age <= 55 && experience >= 2 && qualification === "Bachelor's Degree" ? "Eligible" : "Not Eligible";
}

function applyCoupon(orderAmount, couponCode) {
    if (couponCode === "DISCOUNT10" && orderAmount > 500) return `Final price: $${(orderAmount * 0.9).toFixed(2)}`;
    if (couponCode === "FREESHIP" && orderAmount > 200) return `Final price: $${orderAmount.toFixed(2)}`;
    return `Final price: $${orderAmount.toFixed(2)}`;
}

function choosePlan(planType, wantsTrainer, wantsDietPlan) {
    if (planType === "VIP" || (wantsTrainer && wantsDietPlan)) return "VIP ($80/month)";
    if (planType === "Premium" || wantsTrainer) return "Premium ($50/month)";
    return "Basic ($20/month)";
}

function calculateElectricityBill(units, timeOfDay) {
    let rate = units <= 100 ? 5 : units <= 300 ? 4 : 3;
    if (timeOfDay >= 20 || timeOfDay < 8) rate *= 1.1;
    return `Total Bill: $${(rate * units).toFixed(2)}`;
}

function calculateFlightFare(classType, luggageWeight, isStudent, isSenior) {
    let fare = 300 + (classType === "Business" ? 200 : classType === "First" ? 500 : 0);
    if (luggageWeight > 20) fare += Math.ceil((luggageWeight - 20) / 10) * 50;
    if (isStudent) fare *= 0.85;
    else if (isSenior) fare *= 0.9;
    return `Final Ticket Price: $${fare.toFixed(2)}`;
}

function checkout() {
    const card_number = document.getElementById('card_number').value;
    const cardholder_name = document.getElementById('cardholder_name').value;
    const expiry_date = document.getElementById('expiry_date').value;
    const ccv = document.getElementById('ccv').value;
    const address_line1 = document.getElementById('address_line1').value;
    const city = document.getElementById('city').value;
    const postcode = document.getElementById('postcode').value;
    const country = document.getElementById('country').value;
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;
    const expressDelivary = document.querySelector('.express_delivery').checked;
    if (!card_number || !cardholder_name || !expiry_date || !ccv || !address_line1 || !city || !postcode || !country || !name || !surname|| !email|| !tel) {
        alert("Please fill in all required fields.");
        return false;
    }else {
        const delivaryType = expressDelivary ? "Express Delivary": "Standard Delivary";
        let message = `Hi! ${name}! You have successfully place the order. Delivary: ${delivaryType}`;
        alert(message)
    }
    return true;
}

function validate() {
    let fristName = document.getElementById('frist-name').value
    let middelName = document.getElementById('middel-name').value
    let lastName = document.getElementById('last-name').value
    let fatherName = document.getElementById('father-name').value
    let motherName = document.getElementById('mother-name').value
    let email = document.getElementById('email').value
    let mobile = document.getElementById('mobile-number').value
    let aadhar = document.getElementById('aadhar-number').value
    let address = document.getElementById('address').value
    let city = document.getElementById('city').value
    let state = document.getElementById('state').value
    let pincode = document.getElementById('pin-code').value
    let tnC = document.getElementById('tnC').checked

    if(fristName.length >= 2) {
        document.getElementById('frist-name-valid').style.display = 'block'
        document.getElementById('frist-name-invalid').style.display = 'none'
    }
    else{
        document.getElementById('frist-name-invalid').style.display = 'block'
        document.getElementById('frist-name-valid').style.display = 'none'
    }
    //console.log(fristName, middelName, lastName, fatherName, motherName, email, mobile, aadhar, address, city, state, pincode, tnC);
    if(middelName.length >= 2) {
        document.getElementById('middel-name-valid').style.display = 'block'
        document.getElementById('middel-name-invalid').style.display = 'none'
    }
    else{
        document.getElementById('middel-name-invalid').style.display = 'block'
        document.getElementById('middel-name-valid').style.display = 'none'
    }

    if(lastName.length >= 2) {
        document.getElementById('last-name-valid').style.display = 'block'
        document.getElementById('last-name-invalid').style.display = 'none'
    }
    else{
        document.getElementById('last-name-invalid').style.display = 'block'
        document.getElementById('last-name-valid').style.display = 'none'
    }
    if(fatherName.length >= 2) {
        document.getElementById('father-name-valid').style.display = 'block'
        document.getElementById('father-name-invalid').style.display = 'none'
    }
    else{
        document.getElementById('father-name-invalid').style.display = 'block'
        document.getElementById('father-name-valid').style.display = 'none'
    }

    if(motherName.length >= 2) {
        document.getElementById('mother-name-valid').style.display = 'block'
        document.getElementById('mother-name-invalid').style.display = 'none'
    }
    else{
        document.getElementById('mother-name-invalid').style.display = 'block'
        document.getElementById('mother-name-valid').style.display = 'none'
    }


if(
    email &&
    email.includes("@") &&
    email.includes(".") &&
    email.lastIndexOf(".") <= email.length-3 &&
    email.indexOf('@') !==0
){
    document.getElementById('email-valid').style.display = 'block'
    document.getElementById('email-invalid').style.display = 'none'
}else{
    document.getElementById('email-invalid').style.display = 'block'
    document.getElementById('email-valid').style.display = 'none'
    error = true
}



if(mobile && mobile.length === 10 && parseInt(mobile)) {
        document.getElementById('mobile-valid').style.display = 'block'
        document.getElementById('mobile-invalid').style.display = 'none'
    }
    else{
        document.getElementById('mobile-invalid').style.display = 'block'
        document.getElementById('mobile-valid').style.display = 'none'
        error = true
    }

    if( aadhar && aadhar.length === 12 && parseInt(aadhar)) {
        document.getElementById('aadhar-valid').style.display = 'block'
        document.getElementById('aadhar-invalid').style.display = 'none'
    }
    else{
        document.getElementById('aadhar-invalid').style.display = 'block'
        document.getElementById('aadhar-valid').style.display = 'none'
        error = true
    }

    if(address.length >= 2) {
        document.getElementById('address-valid').style.display = 'block'
        document.getElementById('address-invalid').style.display = 'none'
    }
    else{
        document.getElementById('address-invalid').style.display = 'block'
        document.getElementById('aadress-valid').style.display = 'none'
    }

    if(city.length >= 2) {
        document.getElementById('city-valid').style.display = 'block'
        document.getElementById('city-invalid').style.display = 'none'
    }
    else{
        document.getElementById('city-invalid').style.display = 'block'
        document.getElementById('city-valid').style.display = 'none'
    }

    if(state.length >= 2) {
        document.getElementById('state-valid').style.display = 'block'
        document.getElementById('state-invalid').style.display = 'none'
    }
    else{
        document.getElementById('state-invalid').style.display = 'block'
        document.getElementById('state-valid').style.display = 'none'
    }


    if (pincode && pincode.length === 6 && parseInt(pincode)) {
        document.getElementById('pincode-valid').style.display = 'block'
        document.getElementById('pincode-invalid').style.display = 'none'
    }
    else {
        document.getElementById('pincode-invalid').style.display = 'block'
        document.getElementById('pincode-valid').style.display = 'none'
        
        
    }

    if (!tnC) {
        document.getElementById('tnC-invalid').style.display = 'block'
    }
    else {
        document.getElementById('tnC-invalid').style.display = 'none'
        error = true
    }

if(error){
    alert("your details have been submited")

    document.getElementById('frist-name').value = ''
    document.getElementById('middel-name').value = ''
    document.getElementById('last-name').value = ''
    document.getElementById('father-name').value = ''
    document.getElementById('mother-name').value = ''
    document.getElementById('email').value = ''
    document.getElementById('mobile').value = ''
    document.getElementById('aadhar').value = ''
    document.getElementById('address').value = ''
    document.getElementById('city').value = ''
    document.getElementById('state').value = 'nane'
    document.getElementById('pincode').value = ''
    document.getElementById('tnC').checked = false


    document.getElementById('frist-name').style.display = 'none'
    document.getElementById('middel-name').style.display = 'none'
    document.getElementById('last-name').style.display = 'none'
    document.getElementById('father-name').style.display = 'none' 
    document.getElementById('mother-name').style.display = 'none'
    document.getElementById('email').style.display = 'none'
    document.getElementById('mobile').style.display = 'none'
    document.getElementById('aadhar').style.display = 'none'
    document.getElementById('address').style.display = 'none'
    document.getElementById('city').style.display = 'none'
    document.getElementById('state').style.display = 'none'
    document.getElementById('pincode').style.display = 'none'
    document.getElementById('city-invalid').style.display = 'none'

}

}


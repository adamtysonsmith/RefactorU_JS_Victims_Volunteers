var victims = [];
var volunteers = [];
var initialConfirm = confirm('Do you need to add a victim?'); // If this is false, we assume the user wants to add a volunteer

///////////////////////////////////////////
// Initial Entry
///////////////////////////////////////////

if (initialConfirm === true) {
    var promptVictimName = prompt('Enter the Victim\'s Name');
    var promptVictimPhone = prompt('Enter the Victim\'s Phone Number');
    var promptVictimAddress = prompt('Enter the Victim\'s Address');
    
    victims.push({ name : promptVictimName, phone : promptVictimPhone, address : promptVictimAddress});
}
else {
    var promptVolunteerName = prompt('Enter the Volunteer\'s Name');
    var promptVolunteerPhone = prompt('Enter the Volunteer\'s Phone Number');
    var promptVolunteerAddress = prompt('Enter the Volunteer\'s Address');
    
    volunteers.push({ name : promptVolunteerName, phone : promptVolunteerPhone, address : promptVolunteerAddress });
}


///////////////////////////////////////////
// Continue Adding Victims
///////////////////////////////////////////

var confirmVictims = function() {
    var result = confirm('Would you like to add another Victim?');
    return result;
}

while (confirmVictims() === true) {
    var promptVictimName = prompt('Enter the Victim\'s Name');
    var promptVictimPhone = prompt('Enter the Victim\'s Phone Number');
    var promptVictimAddress = prompt('Enter the Victim\'s Address');
    
    victims.push({ name : promptVictimName, phone : promptVictimPhone, address : promptVictimAddress});
}


///////////////////////////////////////////
// Continue Adding Volunteers
///////////////////////////////////////////

var confirmVolunteers = function() {
    var result = confirm('Would you like to add another Volunteer?');
    return result;
}

while (confirmVolunteers() === true) {
    var promptVolunteerName = prompt('Enter the Volunteer\'s Name');
    var promptVolunteerPhone = prompt('Enter the Volunteer\'s Phone Number');
    var promptVolunteerAddress = prompt('Enter the Volunteer\'s Address');
    
    volunteers.push({ name : promptVolunteerName, phone : promptVolunteerPhone, address : promptVolunteerAddress });
}
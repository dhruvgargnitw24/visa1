document.addEventListener('DOMContentLoaded', function() {
    const countrySelect = document.getElementById('country');
    const checkButton = document.getElementById('checkVisa');
    const resultDiv = document.getElementById('result');

    checkButton.addEventListener('click', function() {
        const selectedCountry = countrySelect.value;
        
        if (!selectedCountry) {
            resultDiv.innerHTML = '<p class="error">Please select a country.</p>';
            return;
        }

        let visaInfo = '';
        
        switch (selectedCountry) {
            case 'USA':
                visaInfo = 'Visa required for most applicants.';
                break;
            case 'Canada':
                visaInfo = 'Visa required unless you have an eTA.';
                break;
            case 'India':
                visaInfo = 'Visa required before travel.';
                break;
            case 'UK':
                visaInfo = 'Visa depends on the duration of stay.';
                break;
            case 'Australia':
                visaInfo = 'eVisa available for eligible travelers.';
                break;
            default:
                visaInfo = 'Information not available.';
        }

        resultDiv.innerHTML = `<p class="success"><strong>${selectedCountry}:</strong> ${visaInfo}</p>`;
    });
});
const loadPhone = async (searchText, datalimit) => {
    const phoneUrl = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(phoneUrl);
    const data = await res.json();
    displayPhone(data.data, datalimit);
}

const displayPhone = (phones, datalimit) => {
    const phoneContainer = document.getElementById('phone-cotainer');
    phoneContainer.textContent = '';

    // slice product
    const showAll = document.getElementById('btn-show');
    if (datalimit && phones.length > 10) {
        phones = phones.slice(0, 10);
        showAll.classList.remove('d-none');
    } else {
        showAll.classList.add('d-none')
    }
    // no found message

    const noFound = document.getElementById('no-found');
    if (phones.length === 0) {
        noFound.classList.remove('d-none');
    } else {
        noFound.classList.add('d-none');
    }

    // display all product
    phones.forEach(phone => {
        console.log(phone);
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card p-3 d-flex align-items-center text-center">
                        <img src="${phone.image}" class="card-img-top w-50  text-center" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${phone.phone_name}</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis</p>
                <button class="text-white border-0 px-3 py-1" onclick="loadPhoneDetails('${phone.slug}')" data-bs-toggle="modal" data-bs-target="#phonedetailModal" style="background-color:#5800FF;">View Details</button>
                        </div>
                    </div>
        `;
        phoneContainer.appendChild(phoneDiv);
    });
    toggleSpiner(false);

}

const searchProcess = (datalimit) => {
    toggleSpiner(true);
    const searchFeild = document.getElementById('search-feild');
    const searchText = searchFeild.value;
    loadPhone(searchText, datalimit);
}

// button search click handler
document.getElementById('btn-search').addEventListener('click', function () {
    searchProcess(10);
})

//  seerch input feild enter key handler
document.getElementById('search-feild').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        searchProcess(10);
    }
})


// spinner toggle 
const toggleSpiner = isLoading => {
    const spinnerLoad = document.getElementById('loading-spiner');
    if (isLoading) {
        spinnerLoad.classList.remove('d-none');
    } else {
        spinnerLoad.classList.add('d-none');
    }

}
// display showall products not the best way to show all products

document.getElementById('btn-showall').addEventListener('click', function () {
    searchProcess();
})

const loadPhoneDetails = async (id) => {
    const phoneUrl = ` https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(phoneUrl);
    const data = await res.json();
    displayPhoneDetails(data.data);
}

const displayPhoneDetails = phone => {
    const modalTitle = document.getElementById('phonedetailModalLabel');
    modalTitle.innerText = phone.name;
    const modalbody = document.getElementById('modal-item');
    modalbody.innerHTML = `
    <img src="${phone.image}" class="text-center py-4 img-fluid" alt="">
                            <h6>Brand: ${phone.brand}</h6>
                            <p>Release Date: ${phone.releaseDate}</p>
                            <h6>Mainfeature:</h6>
                            <p>Chipset: ${phone.mainFeatures.chipSet}</p>
                            <p>Storage: "${phone.mainFeatures.storage}"</p>
                            <p>Display: ${phone.mainFeatures.displaySize}</p>
                            <p>Memory: ${phone.mainFeatures.memory}</p>  
                            <h6>Others:</h6>
                            <p>WlAN: ${phone.others.WLAN ? phone.others.WLAN : 'No wlan found'}</p>
                            <p>Bluetooth: ${phone.others.Bluetooth ? phone.others.Bluetooth : 'No bluetooth found'}</p>
                            <p>GPS: ${phone.others.GPS ? phone.others.GPS : 'No Gps found'}</p>
                            <p>NFC: ${phone.others.NFC ? phone.others.NFC : 'No NFC found'}</p>
                            <p>Radio: ${phone.others.Radio ? phone.others.Radio : 'No Radio found'}</p>
                            <p>USB: ${phone.others.USB ? phone.others.USB : 'No Usb found'}</p> 
    `;

}

loadPhone('oppo');
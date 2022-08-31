// const loadPhone = async (searchText, datalimit) => {
//     const phoneUrl = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
//     const res = await fetch(phoneUrl);
//     const data = await res.json();
//     displayPhones(data.data, datalimit)
// }

// const displayPhones = (phones, datalimit) => {
//     const phoneContainer = document.getElementById('phone-cotainer');
//     phoneContainer.textContent = '';

//     // slice product
//     const showAll = document.getElementById('btn-show');
//     if (datalimit && phones.length > 10) {
//         phones = phones.slice(0, 10);
//         showAll.classList.remove('d-none');
//     } else {
//         showAll.classList.add('d-none');
//     }
//     // no found phone

//     const noFound = document.getElementById('no-found');
//     if (phones.length === 0) {
//         noFound.classList.remove('d-none');
//     } else {
//         noFound.classList.add('d-none');
//     }

//     // display all products
//     phones.forEach(phone => {
//         const phoneDiv = document.createElement('div');
//         phoneDiv.classList.add('col');
//         phoneDiv.innerHTML = `
// <div class="card p-3 d-flex align-items-center text-center">
//                 <img src="${phone.image}" class="card-img-top w-50  text-center" alt="...">
//                 <div class="card-body">
//                     <h5 class="card-title">${phone.phone_name}</h5>
//                     <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis</p>
//         <button class="btn btn-primary px-3 py-1" onclick="loadPhoneDetails('${phone.slug}')" data-bs-toggle="modal" data-bs-target="#phonedetailModal">View Details</button>
//                 </div>
//             </div>

// `;
//         phoneContainer.appendChild(phoneDiv);
//     });
//     toggleSpiner(false);

// }

// const searchProcess = (datalimit) => {
//     toggleSpiner(true);
//     const searchFeild = document.getElementById('search-feild');
//     const searchText = searchFeild.value;
//     loadPhone(searchText, datalimit);
// }


// // btn search click handler 
// document.getElementById('btn-search').addEventListener('click', function () {
//     searchProcess(10);
// })


// // search input-feild enter key handler 

// document.getElementById('search-feild').addEventListener('keydown', function (event) {
//     if (event.key === 'Enter') {
//         searchProcess(10);
//     }
// })

// const toggleSpiner = isLoading => {
//     const spinnerLoad = document.getElementById('loading-spiner');
//     if (isLoading) {
//         spinnerLoad.classList.remove('d-none');
//     } else {
//         spinnerLoad.classList.add('d-none');
//     }
// }

// // not the best way to showAll products
// document.getElementById('btn-showall').addEventListener('click', function () {
//     searchProcess();
// })

// const loadPhoneDetails = async id => {
//     const phoneDetailsUrl = `https://openapi.programming-hero.com/api/phone/${id}`;
//     const res = await fetch(phoneDetailsUrl);
//     const data = await res.json();
//     displayPhoneDetails(data.data);
// }

// const displayPhoneDetails = phone => {
//     console.log(phone);
//     const modalTitle = document.getElementById('phonedetailModalLabel');
//     modalTitle.innerText = phone.name;
//     const modalbody = document.getElementById('modal-item');
//     modalbody.innerHTML = `
//     <img class="py-3" src="${phone.image}" alt="">
//     <p>Brand: ${phone.brand}</p>
//             <p>Release Date: ${phone.releaseDate ? phone.releaseDate :'No release date found' }</p>
//             <h6>Mainfeature:</h6>
//             <p>Chipset: ${phone.mainFeatures.chipSet}</p>
//             <p>Display Size: ${phone.mainFeatures.displaySize}</p>
//             <p>Memory: ${phone.mainFeatures.memory}</p>
//             <p>Sensors: ${phone.mainFeatures.sensors[0]}</p>


//     `;

// }

// loadPhone('apple')
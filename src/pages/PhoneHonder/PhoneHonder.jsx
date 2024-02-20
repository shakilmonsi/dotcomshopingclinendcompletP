import React, { useState, useEffect } from "react";

const PhoneHonder = () => {
  const [phones, setPhones] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    loadPhon();
  }, []);

  const loadPhon = async () => {
    setIsLoading(true);
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    setPhones(data.data);
    setIsLoading(false);
  };

  const handleSearch = () => {
    loadPhon();
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      loadPhon();
    }
  };

  const handleShowAll = () => {
    loadPhon();
  };

  const loadPhoneDetails = async (id) => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhoneDetails(data.data);
  };

  const displayPhoneDetails = (phone) => {
    console.log(phone);
    const modalTitle = document.getElementById("phoneDetailModalLabel");
    modalTitle.innerText = phone.name;
    const phoneDetails = document.getElementById("phone-details");
    console.log(phone.mainFeatures.sensors[0]);
    phoneDetails.innerHTML = `
      <p>Release Date: ${
        phone.releaseDate ? phone.releaseDate : "No Release Date Found"
      }</p>
      <p>Storage: ${
        phone.mainFeatures
          ? phone.mainFeatures.storage
          : "No Storage Information"
      }</p>
      <p>Others: ${
        phone.others ? phone.others.Bluetooth : "No Bluetooth Information"
      }</p>
      <p>Sensor: ${
        phone.mainFeatures.sensors ? phone.mainFeatures.sensors[0] : "No Sensor"
      }</p>
    `;
  };

  return (
    <div className="py-6">
      <h4 className="text-4xl text-center font-bold   text-green-700 mt-3 py-3">
__________________PHONE CONTAINER__________________
      </h4>

      <section>
        <div className="mb-3">
         <div className="flex justify-center ">
         <label className="input input-bordered w-1/2 flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              id="seach-field"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            
          </label>
          <button
            id="btn-seach"
            className="btn btn-primary "
            onClick={handleSearch}
          >
            SEARCH
          </button>
         </div>

        
        </div>
      </section>
      <section>
        <div
          id="phone-container"
          className="grid md:grid-cols-2   lg:grid-cols-4 g-4"
        >
          {phones.map((phone) => (
            <div key={phone.slug} className="col">
              <div className="card p-4">
                <img src={phone.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{phone.phone_name}</h5>
                  <p className="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                  <button
                    onClick={() => loadPhoneDetails(phone.slug)}
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#phoneDetailModal"
                  >
                    Show Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          id="no-phone-message"
          className={`mt-4 ${phones.length === 0 ? "" : "d-none"}`}
        >
          <h1 className="text-warning">No phone found. Please try again.</h1>
        </div>
        <div
          id="show-all"
          className={`text-center ${phones.length > 10 ? "" : "d-none"}`}
        >
        
        </div>
      </section>
      <section id="loader" className={`d-none ${isLoading ? "" : "d-none"}`}>
     
        <div className="spinner-grow text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </section>
      <section>
        <div
          className="modal fade"
          id="phoneDetailModal"
          tabIndex="-1"
          aria-labelledby="phoneDetailModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="phoneDetailModalLabel"></h5>
                <button


                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div id="phone-details" className="modal-body"></div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhoneHonder;

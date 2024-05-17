import React, { useState } from 'react';

export default function Gallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const imagesByCategory = {
    all: [
      "images/DSC_2491.JPG", "images/DSC_2492.JPG", "images/DSC_2494.JPG",
      "images/DSC_2495.JPG", "images/DSC_2496.JPG", "images/DSC_2497.JPG",
      "images/DSC_2499.JPG", "images/DSC_2501.JPG", "images/DSC_2503.JPG",
      "images/DSC_2505.JPG", "images/DSC_2508.JPG", "images/DSC_2487.JPG",
      "images/DSC_2510.JPG", "images/a1.Jpg", "images/a2.Jpg", "images/v1.Jpg",
      "images/v2.Jpg", "images/v3.Jpg", "images/v4.Jpg", "images/v5.Jpg",
      "images/v6.Jpg", "images/p2.Jpg", "images/p3.Jpg", "images/p4.Jpg",
      "images/p5.Jpg", "images/p6.Jpg", "images/p7.Jpg", "images/p8.Jpg",
      "images/p9.Jpg"
    ],
    rooms: [
      "images/DSC_2491.JPG", "images/DSC_2492.JPG", "images/DSC_2494.JPG",
      "images/DSC_2495.JPG", "images/DSC_2496.JPG", "images/DSC_2497.JPG",
      "images/DSC_2499.JPG", "images/DSC_2501.JPG", "images/DSC_2503.JPG",
      "images/DSC_2505.JPG", "images/DSC_2508.JPG", "images/DSC_2487.JPG",
      "images/DSC_2510.JPG"
    ],
    gangaAarti: ["images/a1.Jpg", "images/a2.Jpg"],
    varanasiCity: [
      "images/v1.Jpg", "images/v2.Jpg", "images/v3.Jpg",
      "images/v4.Jpg", "images/v5.Jpg", "images/v6.Jpg"
    ],
    palaceOnGanges: [
      "images/p2.Jpg", "images/p3.Jpg", "images/p4.Jpg",
      "images/p5.Jpg", "images/p6.Jpg", "images/p7.Jpg",
      "images/p8.Jpg", "images/p9.Jpg"
    ]
  };

  const handleClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleClose = () => {
    setCurrentImageIndex(null);
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === imagesByCategory[selectedCategory].length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? imagesByCategory[selectedCategory].length - 1 : prevIndex - 1));
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentImageIndex(null); // Reset current image index when category changes
  };

  return (
    <>
      <section className="gallery-section gallery-section-padding">
        <div className="gallery-auto-container">
          <div className="gallery-row">
            <div className="gallery-text-center">
              <h2 className="gallery-title">Our Gallery</h2>
            </div>
            <div id="btncontainer" className="gallery-filter">
              <a className={`gallery-btn ${selectedCategory === 'all' ? 'gallery-btn-active' : ''}`} href="#all" onClick={() => handleCategoryChange('all')} style={{ outline: 'none', border: 'none', boxShadow: 'none' }}>ALL</a>
              <a className={`gallery-btn ${selectedCategory === 'rooms' ? 'gallery-btn-active' : ''}`} href="#rooms" onClick={() => handleCategoryChange('rooms')} style={{ outline: 'none', border: 'none', boxShadow: 'none' }}>Rooms</a>
              <a className={`gallery-btn ${selectedCategory === 'gangaAarti' ? 'gallery-btn-active' : ''}`} href="#gangaAarti" onClick={() => handleCategoryChange('gangaAarti')} style={{ outline: 'none', border: 'none', boxShadow: 'none' }}>Ganga Aarti</a>
              <a className={`gallery-btn ${selectedCategory === 'varanasiCity' ? 'gallery-btn-active' : ''}`} href="#varanasiCity" onClick={() => handleCategoryChange('varanasiCity')} style={{ outline: 'none', border: 'none', boxShadow: 'none' }}>Varanasi City</a>
              <a className={`gallery-btn ${selectedCategory === 'palaceOnGanges' ? 'gallery-btn-active' : ''}`} href="#palaceOnGanges" onClick={() => handleCategoryChange('palaceOnGanges')} style={{ outline: 'none', border: 'none', boxShadow: 'none' }}>Palace On Ganges</a>
            </div>

            <div className="gallery-gallery">
              {imagesByCategory[selectedCategory].map((imageUrl, index) => (
                <div className="gallery-room-block gallery-col-lg-2 gallery-col-md-2 gallery-col-sm-2" key={index}>
                  <div className="gallery-image-box">
                    <figure className="gallery-image-2 gallery-overlay-anim">
                      <img
                        src={imageUrl}
                        alt=""
                        onClick={() => handleClick(index)}
                        className="gallery-gallery-image"
                      />
                    </figure>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {currentImageIndex !== null && (
        <div className="gallery-openDiv">
          <img
            className="gallery-imgPreview"
            src={imagesByCategory[selectedCategory][currentImageIndex]}
            alt=""
          />
          <button className="gallery-closeBtn" onClick={handleClose}>Close</button>
          <div className="gallery-butonsSection">
            <button className="gallery-prevButton" onClick={handlePrevious}>Previous</button>
            <button className="gallery-nextButton" onClick={handleNext}>Next</button>
          </div>
        </div>
      )}
    </>
  );
}

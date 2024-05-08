import Link from 'next/link';

const News1 = () => {  
  const data = [
    {
      img: "images/zesto.jpg",
      title: "Zesto",
      subtitile: "We are available on Varanasi Airport, Bagdogra Airport, Guwahati Airport, Raipur Airport, Lucknow Airport, and Dibrugarh Airport"
  },
  {
      img: "images/zesto2.jpg",
      title: "Pradeep Air Caterer",
      subtitile: "Serving up delightful moments, one plate at a time."
  },
  {
      img: "images/zesto3.jpg",
      title: "Bandhavgarh",
      subtitile: "Escape to paradise at our serene resort, where luxury meets nature's embrace."
  },
];
    return (
        <>
              <section className="service-section">
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">Empowering Futures, Building Legacies</span>
                        <h2>Our Sister Companies</h2>
                    </div>
                        <div className="row">
                        {data.map((item, i) => (
                            <div key={i} className="service-block col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                              <div className="icon-box">
                                <img src={item.img} alt={item.title} />
                              </div>
                              <div className="content-box">
                                <h4 className="title"><Link href="page-service-details">{item.title}</Link></h4>
                                <div className="text">{item.subtitile}</div>
                              </div>
                            </div>
                            
                            </div>))}
                        </div>
                </div>
            </section>
        
        </>
    );
};

export default News1;

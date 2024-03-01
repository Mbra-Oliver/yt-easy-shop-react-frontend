const HeroSection = () => {
  return (
    <div id="home">
      <div className="home_page">
        <div className="home_img">
          <img
            src="https://images.unsplash.com/photo-1542060748-10c28b62716f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Hero Image content"
            style={{
              height: "450px",
              objectFit: "cover",
            }}
          />
        </div>

        <div className="home_txt">
          <p className="collectio font-md font-uppercase">Collection rare</p>
          <h2>
            Meilleurs produits
            <br />
            <span>Collection 2024 et future</span>
          </h2>

          <div className="home_label">
            <p>
              Chaque semaine plus de 200 clients rejoignent la plateforme.
              <br /> Consulter le catalogue pour trouver vos articles de choix
            </p>
          </div>
          <button>
            <a>Consulter le catalogue</a>
            {/* icone */}
          </button>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;

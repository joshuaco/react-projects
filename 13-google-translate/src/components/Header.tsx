import googleLogo from '../assets/google.png';
import geminiLogo from '../assets/gemini.png';

function Header() {
  return (
    <header className="container">
      <div className="row">
        <div className="col-md-6 col-sm-8 col-10">
          <h1 className="m-0 d-flex align-items-center gap-2 text-muted">
            <img src={googleLogo} className="w-50" alt="Google Logo" />{' '}
            Translate
          </h1>
          <div className="d-flex align-items-baseline gap-1 justify-content-end px-3 px-lg-0">
            <div>
              <p className="m-0 text-muted">Powered by </p>
            </div>
            <img src={geminiLogo} width="50" alt="Gemini Logo" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

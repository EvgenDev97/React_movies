function Footer() {
  return (
    <footer className="page-footer purple darken-1">
      <div className="container"></div>
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a
            className="right"
            href="https://github.com/EvgenDev97/React_movies!"
          >
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

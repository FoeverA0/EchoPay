import Link from "next/link";

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="auto-container">
        <div className="widgets-section">
          <div className="row clearfix">
            <div className="footer-column col-lg-8 col-md-12 col-sm-12">
              <h2>
                Contact us! <a href="mailto:sunny.shen.connect@gmail.com">sunny.shen.connect@gmail.com</a>
              </h2>
              <ul className="footer_socials">
                <li>
                  <a href="https://x.com/EchoProtocolLab" target="_blank" rel="noopener noreferrer">
                    X <i className="fa-solid fa-arrow-right fa-fw"></i>
                  </a>
                </li>
                <li>
                  <a href="https://t.me/+SyOcf1xek1xhZjE1" target="_blank" rel="noopener noreferrer">
                    Telegram <i className="fa-solid fa-arrow-right fa-fw"></i>
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/yNgbC9EBrh" target="_blank" rel="noopener noreferrer">
                    Discord <i className="fa-solid fa-arrow-right fa-fw"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/martxofficial" target="_blank" rel="noopener noreferrer">
                    Linkedin <i className="fa-solid fa-arrow-right fa-fw"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column col-lg-4 col-md-12 col-sm-12">
              <ul className="footer_navs">
                <li>
                  <Link href="/" legacyBehavior>
                    <a>
                      Home <i className="fa-solid fa-arrow-right fa-fw"></i>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/about" legacyBehavior>
                    <a>
                      Team <i className="fa-solid fa-arrow-right fa-fw"></i>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="footer_copyright">
              &copy; 2025 Echo Protocol  -  Made by MartX Limited
            </div>
            <a className="backtop down-box scroll-to-target" data-target=".page-wrapper">
              <i className="fa-solid fa-arrow-up"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

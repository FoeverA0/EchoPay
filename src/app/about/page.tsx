"use client"
import Head from "next/head";
import Header from "@/components/Header";
export default function About() {
  return (
    <div className="page-wrapper image-layer" style={{backgroundImage: "url(/assets/images/background/4.jpg)"}}>
      <Head>
        <title>Echo Pay | About Us</title>
        <link rel="stylesheet" href="/assets/css/bootstrap.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
        <link rel="shortcut icon" href="/assets/images/favicon.png" type="image/x-icon" />
        <link rel="icon" href="/assets/images/favicon.png" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </Head>
      <Header />
      {/* Page Title */}
      <section className="page-title">
        <div className="auto-container">
          <h1 className="page-title_heading">Team</h1>
          <div className="page-title_text">Introducing Our Identity</div>
        </div>
      </section>
      {/* Team One */}
      <section className="team-one">
        <div className="auto-container">
          <div className="title-box">
            <h2>Dive into our story, meet our team, and explore how we're dedicated to empowering individuals and businesses alike.</h2>
          </div>
          <div className="row clearfix">
            {/* Team Block One */}
            <div className="team-block_one col-lg-4 col-md-6 col-sm-12">
              <div className="team-block_one-inner">
                <div className="team-block_one-socials">
                  <a href="https://www.linkedin.com/in/mengzhong-ma-999870137/"><img src="/assets/images/icons/linkedin.png" alt="" /></a>
                  <a href="https://www.dribbble.com"><img src="/assets/images/icons/dribbble.png" alt="" /></a>
                  <a href="https://www.facebook.com"><img src="/assets/images/icons/facebook.png" alt="" /></a>
                  <a href="https://www.instagram.com"><img src="/assets/images/icons/instagram.png" alt="" /></a>
                </div>
                <h5 className="team-block_one-heading"><a href="/journal-detail">Dr. Jeff</a></h5>
                <div className="team-block_one-designation">CTO</div>
                <div className="team-block_one-image">
                  <img src="/assets/images/resource/team-1.png" alt="" />
                </div>
              </div>
            </div>
            <div className="team-block_one col-lg-4 col-md-6 col-sm-12">
              <div className="team-block_one-inner">
                <div className="team-block_one-socials">
                  <a href="https://www.linkedin.com/in/magzhanov/"><img src="/assets/images/icons/linkedin.png" alt="" /></a>
                  <a href="https://www.dribbble.com"><img src="/assets/images/icons/dribbble.png" alt="" /></a>
                  <a href="https://www.facebook.com"><img src="/assets/images/icons/facebook.png" alt="" /></a>
                  <a href="https://www.instagram.com"><img src="/assets/images/icons/instagram.png" alt="" /></a>
                </div>
                <h5 className="team-block_one-heading"><a href="/journal-detail">Dr. Timur </a></h5>
                <div className="team-block_one-designation">CEO</div>
                <div className="team-block_one-image">
                  <img src="/assets/images/resource/team-2.png" alt="" />
                </div>
              </div>
            </div>
            <div className="team-block_one col-lg-4 col-md-6 col-sm-12">
              <div className="team-block_one-inner">
                <div className="team-block_one-socials">
                  <a href="https://www.linkedin.com"><img src="/assets/images/icons/linkedin.png" alt="" /></a>
                  <a href="https://www.dribbble.com"><img src="/assets/images/icons/dribbble.png" alt="" /></a>
                  <a href="https://www.facebook.com"><img src="/assets/images/icons/facebook.png" alt="" /></a>
                  <a href="https://www.instagram.com"><img src="/assets/images/icons/instagram.png" alt="" /></a>
                </div>
                <h5 className="team-block_one-heading"><a href="/journal-detail">Anna </a></h5>
                <div className="team-block_one-designation">CMO</div>
                <div className="team-block_one-image">
                  <img src="/assets/images/resource/team-3.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Partners Section */}
      <section className="partners-one">
        <div className="auto-container">
          <div className="sec-title centered">
            <h2 className="sec-title_heading">Trusted by research institutions and VCs</h2>
            <div className="partners-divider"><span>Our Partners</span></div>
          </div>
          <div className="partners-row partners-row-1">
            <div className="partner-card partner-card--primary partner-card--gold">
              <img alt="HKSTP" width={160} height={60} src="/assets/images/HKSTP.png" />
            </div>
          </div>
          <div className="partners-row partners-row-2">
            <div className="partner-card partner-card--silver">
              <img alt="AWS" width={160} height={60} src="/assets/images/aws.png" />
            </div>
            <div className="partner-card partner-card--silver">
              <img alt="Phala Network" width={160} height={60} src="/assets/images/phala.png" />
            </div>
          </div>
          <div className="partners-divider"><span>Academic Excellence</span></div>
          <div className="partners-row partners-row-3">
            <div className="partner-card">
              <img alt="NTU" width={160} height={60} src="/assets/images/academic/NTU.png" />
            </div>
            <div className="partner-card">
              <img alt="PolyU" width={160} height={60} src="/assets/images/academic/POLYU.png" />
            </div>
            <div className="partner-card">
              <img alt="ZJU" width={160} height={60} src="/assets/images/academic/ZJU.png" />
            </div>
            <div className="partner-card">
              <img alt="BU" width={160} height={60} src="/assets/images/academic/BU.png" />
            </div>
            <div className="partner-card">
              <img alt="CUHK" width={160} height={60} src="/assets/images/academic/CUHK.png" />
            </div>
            <div className="partner-card">
              <img alt="HKUST" width={160} height={60} src="/assets/images/academic/UST.png" />
            </div>
          </div>
        </div>
      </section>
      {/* Main Footer */}
      <footer className="main-footer">
        <div className="auto-container">
          <div className="widgets-section">
            <div className="row clearfix">
              <div className="footer-column col-lg-8 col-md-12 col-sm-12">
                <h2>Contact us! <a href="mailto:sunny.shen.connect@gmail.com">sunny.shen.connect@gmail.com</a></h2>
                <ul className="footer_socials">
                  <li><a href="https://x.com/EchoProtocolLab">X <i className="fa-solid fa-arrow-right fa-fw"></i></a></li>
                  <li><a href="https://t.me/+SyOcf1xek1xhZjE1">Telegram <i className="fa-solid fa-arrow-right fa-fw"></i></a></li>
                  <li><a href="https://discord.gg/yNgbC9EBrh">Discord <i className="fa-solid fa-arrow-right fa-fw"></i></a></li>
                  <li><a href="https://www.linkedin.com/company/martxofficial">Linkedin <i className="fa-solid fa-arrow-right fa-fw"></i></a></li>
                </ul>
              </div>
              <div className="footer-column col-lg-4 col-md-12 col-sm-12">
                <ul className="footer_navs">
                  <li><a href="/">Home <i className="fa-solid fa-arrow-right fa-fw"></i></a></li>
                  <li><a href="/about">Team <i className="fa-solid fa-arrow-right fa-fw"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <div className="footer_copyright">&copy; 2025 Echo Protocol  -  Made by MartX Limited</div>
              <a className="backtop down-box scroll-to-target" data-target=".page-wrapper">
                <i className="fa-solid fa-arrow-up"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

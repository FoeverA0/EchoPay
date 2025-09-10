"use client"
// src/app/page.tsx

import { useState } from "react";
import Header from "@/components/Header";
export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="page-wrapper">
      <Header />
      {/* Banner One */}
      <section className="banner-one">
        <div className="robot">
          <script
            type="module"
            dangerouslySetInnerHTML={{
              __html: `
                import 'https://unpkg.com/@splinetool/viewer@1.3.5/build/spline-viewer.js';
              `,
            }}
          />
          <spline-viewer url="https://prod.spline.design/AqtlWJlNbO-ZMkvz/scene.splinecode"></spline-viewer>
        </div>
        <div className="auto-container">
          <div className="banner-one_content">
            <div className="banner-one_content-inner">
              <h1 className="banner-one_heading">AI Payment Layer</h1>
            </div>
          </div>
          <div className="down-box scroll-to-target" data-target=".gallery-one">
            <div className="launch-button-container">
              <button
                className="button-shiny"
                aria-label="Launch Echo"
                onClick={() => setModalOpen(true)}
              >
                Launch Echo <img alt="New Window" width={16} height={16} src="/assets/images/icons/icon-1.png" />
              </button>
            </div>
          </div>
          {/* 弹窗 */}
          {modalOpen && (
            <div
              className="echo-modal show"
              onClick={e => {
                if (e.target === e.currentTarget) setModalOpen(false);
              }}
            >
              <div className="echo-modal-content">
                <span
                  className="echo-modal-close"
                  onClick={() => setModalOpen(false)}
                  style={{ cursor: "pointer" }}
                >
                  &times;
                </span>
                <h2 className="echo-modal-title">Bind AI Payment</h2>
                <form className="echo-modal-form echo-modal-form-grid">
                  <div className="echo-modal-form-col">
                    <label htmlFor="ai-id">AI ID</label>
                    <input type="text" id="ai-id" name="ai-id" placeholder="Enter AI ID" required />
                    <label htmlFor="single-limit">Single Transaction Limit</label>
                    <input type="number" id="single-limit" name="single-limit" placeholder="≤50 USDC per payment" required />
                    <label htmlFor="daily-limit">Daily Transaction Limit</label>
                    <input type="number" id="daily-limit" name="daily-limit" placeholder="≤100 USDC/day" required />
                    <label htmlFor="gas-limit">Gas Fee Limit</label>
                    <input type="number" id="gas-limit" name="gas-limit" placeholder="≤20 gwei" required />
                    <label htmlFor="whitelist">Recipient Allowlist</label>
                    <input type="text" id="whitelist" name="whitelist" placeholder="Only approved addresses (e.g., 0xAPIProvider)" required />
                  </div>
                  <div className="echo-modal-form-col">
                    <label htmlFor="token-type">Token Type</label>
                    <input type="text" id="token-type" name="token-type" placeholder="USDC only" required />
                    <label htmlFor="expiration">Expiration</label>
                    <input type="number" id="expiration" name="expiration" placeholder="30 days" required />
                    <label htmlFor="frequency">Transaction Frequency</label>
                    <input type="number" id="frequency" name="frequency" placeholder="≤3 transactions/day" required />
                    <label htmlFor="market-conditions">Market Conditions</label>
                    <input type="text" id="market-conditions" name="market-conditions" placeholder="Stable USDC/ETH price (±1%)" required />
                    <label htmlFor="network">Network</label>
                    <input type="text" id="network" name="network" placeholder="Arbitrum only" required />
                  </div>
                  <button type="submit" className="button-shiny echo-modal-bind-btn">Bind</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section className="services-one">
        <div className="auto-container">
          <div className="sec-title">
            <h2 className="sec-title_heading">Services</h2>
            <div className="sec-title_icon"><img src="/assets/images/icons/icon-1.png" alt="" /></div>
          </div>
          <div className="row clearfix">
            <div className="service-block_one col-lg-6 col-md-6 col-sm-12">
              <div className="service-block_one-inner d-flex justify-content-between align-items-center flex-wrap">
                <h3 className="service-block_one-heading">Trusted AI Payments</h3>
                <div className="service-block_one-icon">
                  <img src="/assets/images/icons/service-1.png" alt="" />
                </div>
              </div>
            </div>
            <div className="service-block_one col-lg-6 col-md-6 col-sm-12">
              <div className="service-block_one-inner d-flex justify-content-between align-items-center flex-wrap">
                <h3 className="service-block_one-heading">Decentralized Verification</h3>
                <div className="service-block_one-icon">
                  <img src="/assets/images/icons/service-2.png" alt="" />
                </div>
              </div>
            </div>
            <div className="service-block_one col-lg-6 col-md-6 col-sm-12">
              <div className="service-block_one-inner d-flex justify-content-between align-items-center flex-wrap">
                <h3 className="service-block_one-heading">Transparent Compliance</h3>
                <div className="service-block_one-icon">
                  <img src="/assets/images/icons/service-3.png" alt="" />
                </div>
              </div>
            </div>
            <div className="service-block_one col-lg-6 col-md-6 col-sm-12">
              <div className="service-block_one-inner d-flex justify-content-between align-items-center flex-wrap">
                <h3 className="service-block_one-heading">Seamless Integration</h3>
                <div className="service-block_one-icon">
                  <img src="/assets/images/icons/service-4.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-one">
        <div className="auto-container">
          <div className="sec-title">
            <h2 className="sec-title_heading">Stats</h2>
            <div className="sec-title_icon"><img src="/assets/images/icons/icon-4.png" alt="" /></div>
          </div>
          <div className="inner-container">
            <div className="clearfix">
              <div className="counter-block_one col-lg-4 col-md-6 col-sm-6">
                <div className="counter-block_one-inner wow flipInX" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <div className="counter-block_one-counter">$<span className="odometer" data-count="120"></span>K+</div>
                  <div className="counter-block_one-text">found raising</div>
                </div>
              </div>
              <div className="counter-block_one col-lg-4 col-md-6 col-sm-6">
                <div className="counter-block_one-inner wow flipInX" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <div className="counter-block_one-counter"><span className="odometer" data-count="25"></span>+</div>
                  <div className="counter-block_one-text">team members</div>
                </div>
              </div>
              <div className="counter-block_one col-lg-4 col-md-6 col-sm-6">
                <div className="counter-block_one-inner wow flipInX" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <div className="counter-block_one-counter"><span className="odometer" data-count="100"></span>+</div>
                  <div className="counter-block_one-text">happy customers</div>
                </div>
              </div>
              <div className="counter-block_one col-lg-4 col-md-6 col-sm-6">
                <div className="counter-block_one-inner wow flipInX" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <div className="counter-block_one-counter"><span className="odometer" data-count="5"></span>+</div>
                  <div className="counter-block_one-text">loyal partners</div>
                </div>
              </div>
              <div className="counter-block_one col-lg-4 col-md-6 col-sm-6">
                <div className="counter-block_one-inner wow flipInX" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <div className="counter-block_one-counter"><span className="odometer" data-count="1,500"></span>+</div>
                  <div className="counter-block_one-text">active followers</div>
                </div>
              </div>
              <div className="stats-one_contact-column col-lg-4 col-md-6 col-sm-6">
                <div className="stats-one_contact-inner wow flipInX" data-wow-delay="0ms" data-wow-duration="1500ms">
                  <div className="stats-one_contact-content">
                    <a href="/contact">
                      <div className="stats-one_contact-icon fa-regular fa-paper-plane fa-fw"></div>
                      <h3>contact</h3>
                      <div className="text">get a quote for your project</div>
                    </a>
                  </div>
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
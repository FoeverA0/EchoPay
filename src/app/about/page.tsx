"use client"
import Head from "next/head";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default function About() {
  return (
    <div className="page-wrapper image-layer" style={{backgroundImage: "url(/assets/images/background/4.jpg)"}}>
      <Head>
        <title>Echo Pay | About Us</title>
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
            <h2>Dive into our story, meet our team, and explore how we&apos;re dedicated to empowering individuals and businesses alike.</h2>
          </div>
          <div className="row clearfix">
            {/* Team Block One */}
            <div className="team-block_one col-lg-4 col-md-6 col-sm-12">
              <div className="team-block_one-inner">
                <div className="team-block_one-socials">
                  <a href="https://www.linkedin.com/in/mengzhong-ma-999870137/"><Image src="/assets/images/icons/linkedin.png" alt="Linkedin" width={32} height={32} /></a>
                  <a href="https://www.dribbble.com"><Image src="/assets/images/icons/dribbble.png" alt="Dribbble" width={32} height={32} /></a>
                  <a href="https://www.facebook.com"><Image src="/assets/images/icons/facebook.png" alt="Facebook" width={32} height={32} /></a>
                  <a href="https://www.instagram.com"><Image src="/assets/images/icons/instagram.png" alt="Instagram" width={32} height={32} /></a>
                </div>
                <h5 className="team-block_one-heading"><a href="/journal-detail">Dr. Jeff</a></h5>
                <div className="team-block_one-designation">CTO</div>
                <div className="team-block_one-image">
                  <Image src="/assets/images/resource/team-1.png" alt="Dr. Jeff" width={160} height={160} />
                </div>
              </div>
            </div>
            <div className="team-block_one col-lg-4 col-md-6 col-sm-12">
              <div className="team-block_one-inner">
                <div className="team-block_one-socials">
                  <a href="https://www.linkedin.com/in/magzhanov/"><Image src="/assets/images/icons/linkedin.png" alt="Linkedin" width={32} height={32} /></a>
                  <a href="https://www.dribbble.com"><Image src="/assets/images/icons/dribbble.png" alt="Dribbble" width={32} height={32} /></a>
                  <a href="https://www.facebook.com"><Image src="/assets/images/icons/facebook.png" alt="Facebook" width={32} height={32} /></a>
                  <a href="https://www.instagram.com"><Image src="/assets/images/icons/instagram.png" alt="Instagram" width={32} height={32} /></a>
                </div>
                <h5 className="team-block_one-heading"><a href="/journal-detail">Dr. Timur </a></h5>
                <div className="team-block_one-designation">CEO</div>
                <div className="team-block_one-image">
                  <Image src="/assets/images/resource/team-2.png" alt="Dr. Timur" width={160} height={160} />
                </div>
              </div>
            </div>
            <div className="team-block_one col-lg-4 col-md-6 col-sm-12">
              <div className="team-block_one-inner">
                <div className="team-block_one-socials">
                  <a href="https://www.linkedin.com"><Image src="/assets/images/icons/linkedin.png" alt="Linkedin" width={32} height={32} /></a>
                  <a href="https://www.dribbble.com"><Image src="/assets/images/icons/dribbble.png" alt="Dribbble" width={32} height={32} /></a>
                  <a href="https://www.facebook.com"><Image src="/assets/images/icons/facebook.png" alt="Facebook" width={32} height={32} /></a>
                  <a href="https://www.instagram.com"><Image src="/assets/images/icons/instagram.png" alt="Instagram" width={32} height={32} /></a>
                </div>
                <h5 className="team-block_one-heading"><a href="/journal-detail">Anna </a></h5>
                <div className="team-block_one-designation">CMO</div>
                <div className="team-block_one-image">
                  <Image src="/assets/images/resource/team-3.png" alt="Anna" width={160} height={160} />
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
              <Image alt="HKSTP" width={160} height={60} src="/assets/images/HKSTP.png" />
            </div>
          </div>
          <div className="partners-row partners-row-2">
            <div className="partner-card partner-card--silver">
              <Image alt="AWS" width={160} height={60} src="/assets/images/aws.png" />
            </div>
            <div className="partner-card partner-card--silver">
              <Image alt="Phala Network" width={160} height={60} src="/assets/images/phala.png" />
            </div>
          </div>
          <div className="partners-divider"><span>Academic Excellence</span></div>
          <div className="partners-row partners-row-3">
            <div className="partner-card">
              <Image alt="NTU" width={160} height={60} src="/assets/images/academic/NTU.png" />
            </div>
            <div className="partner-card">
              <Image alt="PolyU" width={160} height={60} src="/assets/images/academic/POLYU.png" />
            </div>
            <div className="partner-card">
              <Image alt="ZJU" width={160} height={60} src="/assets/images/academic/ZJU.png" />
            </div>
            <div className="partner-card">
              <Image alt="BU" width={160} height={60} src="/assets/images/academic/BU.png" />
            </div>
            <div className="partner-card">
              <Image alt="CUHK" width={160} height={60} src="/assets/images/academic/CUHK.png" />
            </div>
            <div className="partner-card">
              <Image alt="HKUST" width={160} height={60} src="/assets/images/academic/UST.png" />
            </div>
          </div>
        </div>
      </section>
      {/* Main Footer */}
      <Footer />
    </div>
  );
}

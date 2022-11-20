import React, { Component } from "react";
import Title from "./Title";
import Description from "./Description";
import logo from "../images/Wheel.png";
import "../styles/ComingSoon.css";
import logoImage from "../images/LogoName.png";
import AnimatedTractor from "./AnimatedTractor";
import ContactForm from "./ContactForm";


class ComingSoon extends Component {
  state = {
    logo: {
      alt: "Spinning Gear",
      src: logo,
      spinSpeed: "slow",
    },
    title: {
      text: "Wir sind bald da!",
    },
    description: {
      text: "Landheld ist bald soweit. Schreib uns gerne für mehr Informationen!",
    },
  

  };

  render() {
    const {
      title,
      description,
      logo,
    } = this.state;

    return (
      <div className="background">
        <img src={logoImage} alt="Logo" className="logoImage"  height={250}  />
        
        {/* <Logo alt={logo.alt} src={logo.src} spinSpeed={logo.spinSpeed} /> */}
        <AnimatedTractor spinSpeed={logo.spinSpeed} />
        <Title text={title.text} />
        <Description
          text={description.text}
        />
        <ContactForm />
      </div>
    );
  }
}
//<Links links={lis} nk/> (für Social Media einfach einfügen)
//<Countdown countdownDate={countdown.countdownDate} /> (für Countdown einfügen)
/*<Subscribe
placeholder={subscribe.placeholder}
buttonText={subscribe.buttonText}
changeLogoSpeed={this.changeLogoSpeed}
configureNotification={this.configureNotification}
showNotification={this.showNotification}  (E-Mail Subscribe was nicht funktioniert) */

export default ComingSoon;

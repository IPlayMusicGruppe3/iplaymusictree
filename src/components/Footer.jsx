import Albums from "../images/pulse.svg";
import Playlist from "../images/microphone.svg";
import Featured from "../images/main.svg";
import DarkMode from "../images/contrast.svg";
import Categories from "../images/settings.svg";

function Footer() {
  return (
    <footer className="flex justify-between w-full h-[65px] bg-white fixed bottom-0 left-0 px-10 dark:bg-additional">
      <img src={Albums} alt={"Player button"} className="w-4 h-auto" />
      <img src={Playlist} alt={"Player button"} className="w-3 h-auto" />
      <img src={Featured} alt={"Player button"} className="w-10 h-auto" />
      <img src={DarkMode} alt={"Player button"} className="w-4 h-auto" />
      <img src={Categories} alt={"Player button"} className="w-4 h-auto" />
    </footer>
  );
}

export default Footer;

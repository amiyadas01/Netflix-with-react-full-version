import { FaTv, FaDownload, FaGlobe, FaChild } from "react-icons/fa";

const features = [
    {
      icon: <FaTv className="text-red-500 text-3xl" />,
      title: "Enjoy on your TV",
      description:
        "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    },
    {
      icon: <FaDownload className="text-red-500 text-3xl" />,
      title: "Download your shows to watch offline",
      description:
        "Save your favourites easily and always have something to watch.",
    },
    {
      icon: <FaGlobe className="text-red-500 text-3xl" />,
      title: "Watch everywhere",
      description:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
    },
    {
      icon: <FaChild className="text-red-500 text-3xl" />,
      title: "Create profiles for kids",
      description:
        "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
    },
  ];
  
  export default features;
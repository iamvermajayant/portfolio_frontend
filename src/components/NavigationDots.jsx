import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "Certifications", "testimonials", "contact"].map(
        (item, index) => (
          // eslint-disable-next-line
          <a href={`#${item}`}
            key = {index + item}
            className="app__navigation-dot"
            style={active === item ? {backgroundColor: '#313BAC'} : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;

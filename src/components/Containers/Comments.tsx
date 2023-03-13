import React from "react";

import UserComments from "../Cards/UserComments";

const Comments = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center">
      <UserComments
        name="Sarah"
        comment="I love how easy it is to get the current weather information for my location on this website. The temperature and precipitation data are always spot on! As a freelance graphic designer, this website helps me plan my outdoor photo shoots."
        company="Freelance"
        job="Graphic Designer"
      />
      <UserComments
        name="Emma"
        comment="The 1-day forecast on this website is so helpful for planning my outdoor activities. I can check the hourly temperature and precipitation changes and adjust my plans accordingly. Thanks, Michael, from XYZ Inc., for sharing this website with me!"
        company="ABC Corp."
        job="Sales Manager"
      />
      <UserComments
        name="Jessica"
        comment="The 5-day forecast on this website is essential for planning my travel itinerary. I can check the predicted temperature and precipitation for the next few days and pack accordingly. Thanks, Jason, from 123 Industries, for recommending this website!"
        company="DEF Company"
        job="Marketing Manager"
      />
      <UserComments
        name="David"
        comment="The current forecast on this website is so detailed. I can see the current temperature, humidity, wind speed, and precipitation data for my location, which is incredibly helpful for planning my day. As a software engineer at XYZ Inc., I appreciate the accuracy of this website's weather information."
        company="XYZ Inc."
        job="Software Engineer"
      />
      <UserComments
        name="Kevin"
        comment="I appreciate the simplicity of this website's weather information. The 1-day and 5-day forecasts are easy to understand and provide me with the essential weather data I need. Thanks, Elizabeth, from DEF Company, for introducing me to this website! As a customer service representative at ABC Corp., this website helps me advise customers on their outdoor plans."
        company="ABC Corp."
        job="Customer Service Representative"
      />
    </div>
  );
};

export default Comments;

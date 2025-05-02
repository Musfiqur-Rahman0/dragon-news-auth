import React from "react";
import SocialLogin from "./SocialLogin";
import SocialLinks from "./SocialLinks";
import Qzone from "./Qzone";

const RightAside = () => {
  return (
    <div className="space-y-8">
      <SocialLogin />
      <SocialLinks />
      <Qzone />
    </div>
  );
};

export default RightAside;

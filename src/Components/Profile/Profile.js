import React from "react";
import { useSelector } from "react-redux";

function Profile(props) {
  const user = useSelector((store) => store.user);
  return (
    <div style={{ textAlign: "center", marginTop: "3%" }}>
      <h1>{`Hello ${user.login}!`}</h1>
    </div>
  );
}

export default Profile;

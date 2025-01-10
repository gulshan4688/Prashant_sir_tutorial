import React from "react";

const WelcomeMess = ({handleRefresh}) => {
  return (
    <center style={{ margin: "2rem", color: "#d19999" }}>
      <h2>YOU HAVE CATCHED UP ALL POSTS</h2>
      <button onClick={handleRefresh} type="submit" className="btn btn-primary">
        Refresh
      </button>
    </center>
  );
};

export default WelcomeMess;

import React from "react";
import api from "../api/index.api";

function MySection() {
  const handleMyButton = async (e) => {
    e.preventDefault();

    try {
      const result = await api.myAPI.getMyMsg();
      console.log(result);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <button className="MyButton" onClick={handleMyButton}>
        myAPI 요청
      </button>
    </>
  );
}

export default MySection;

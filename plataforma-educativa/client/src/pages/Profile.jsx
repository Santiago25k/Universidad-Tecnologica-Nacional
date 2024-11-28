import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Perfil del Usuario</h2>
      <p>Este es el perfil del usuario con ID: {id}</p>
    </div>
  );
};

export default Profile;

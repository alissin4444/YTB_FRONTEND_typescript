import React from "react";

interface Props {
  user: { name: string; email: string };
}

const User: React.FC<Props> = ({ user }) => (
  <li>
    <strong>{user.name}</strong> - {user.email}
  </li>
);

export default User;

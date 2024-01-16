import React from "react";

export default function UserForm() {
  return (
    <form>
      <div>
        <label>Name</label>
        <input type="text" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" />
      </div>
      <button>Add User</button>
    </form>
  );
}

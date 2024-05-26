import React, { useState } from "react";
import axios from "axios"; // Import axios for making API calls
import { base_url } from "../constant";

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showForm, setShowForm] = useState(true);

  const handleResetPassword = async () => {
    if (newPassword !== confirmNewPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
        if (newPassword.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
      return;
    }


    try {
      const token = window.location.search.substring(1);
      console.log(token);
      // Make API call to reset password
      const response = await axios.post(`${base_url}/api/users/reset/password`, {
        newPassword: newPassword,
        token,
      });

      if (response.status === 200) {
        setSuccessMessage("Password reset successfully.");
        setShowForm(false);
      } else {
        setErrorMessage("Failed to reset password. Please try again.");
      }
    } catch (error) {
      setErrorMessage("An error occurred while resetting password.");
    }
  };

  const handleLogin = () => {
    // Redirect to login page or handle login logic
  };

  return (
    <div>
      <h2>Reset Password</h2>
      {showForm && (
        <div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}
          <div>
            <label>New Password:</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div>
            <label>Confirm New Password:</label>
            <input
              type="password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />
          </div>
          <button onClick={handleResetPassword}>Reset Password</button>
        </div>
      )}
      {!showForm && (
        <div>
          <p>Password reset successfully. Please login with your new password.</p>
          <a href="/login"><button onClick={handleLogin}>Login</button></a>
        </div>
      )}
    </div>
  );
}

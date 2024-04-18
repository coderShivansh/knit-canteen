import React, { useState } from "react";
import axios from "axios";
import styles from "../ForgotPassword.module.css";
import Loading from "../components/Loading"; // Import your Loading component
import { base_url } from '../constant';

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false); // State for loading



  const handleSendEmail = async () => {
    setLoading(true); // Set loading to true when sending email
    try {
      // Make API call to send password reset email
      const response = await axios.post(`${base_url}/api/users/forgot/password`, {
        email: email,
      });

      if (response.status === 200) {
        setSuccessMessage(
          "Password reset email sent successfully. Please check your email."
        );
      } else {
        setErrorMessage(
          "Failed to send password reset email. Please try again."
        );
      }
    } catch (error) {
      setErrorMessage("An error occurred while sending password reset email.");
    } finally {
      setLoading(false); // Set loading to false after API call completes
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}
        <div>
          <label>Enter your email </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {loading ? (
          <Loading /> 
        ) : (
          <button onClick={handleSendEmail}>Send Email</button>
        )}
      </div>
    </div>
  );
}

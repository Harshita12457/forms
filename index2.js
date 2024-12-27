document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault(); 
  const fullName = document.getElementById("full_name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phoneNo = document.getElementById("phone_no").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm_password").value;

  // Validate Full Name
  if (fullName.length < 5) {
      alert("Name must not be less than 5 characters.");
      return;
  }

  // Validate Email
  if (!email.includes("@")) {
      alert("Email ID should contain '@' character.");
      return;
  }

  // Validate Phone Number
  if (phoneNo === "123456789" || !/^\d{10}$/.test(phoneNo)) {
      alert("Phone number must be a 10-digit number and cannot be 123456789.");
      return;
  }

  // Validate Password
  if (
      password.toLowerCase() === "password" ||
      password.toLowerCase() === fullName.toLowerCase() ||
      password.length < 8
  ) {
      alert("Password is not strong enough. It cannot be 'password', your name, or less than 8 characters.");
      return;
  }

  // Validate Confirm Password
  if (password !== confirmPassword) {
      alert("Password and confirm password do not match.");
      return;
  }

  // If all validations pass
  alert("Form submitted successfully!");
});
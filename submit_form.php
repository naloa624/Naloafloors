<?php
if(isset($_POST['email']) && $_POST['email'] != ''){
    // Collect form data
    $userName = $_POST['name'];
    $userEmail = $_POST['email'];
    $messageSubject = $_POST['subject'];
    $message = $_POST['message'];

    // Validate email format
    if (!filter_var($userEmail, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit();
    }

    // Email recipient
    $to = "naloaflooring@gmail.com";

    // Email body
    $body = "From: $userName\r\n";
    $body .= "Email: $userEmail\r\n";
    $body .= "Message: $message\r\n";

    // Email headers
    $headers = "From: $userEmail\r\n";
    $headers .= "Reply-To: $userEmail\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    // Send email
    if (mail($to, $messageSubject, $body, $headers)) {
        echo "<h2>Form Submission Successful</h2>";
        echo "<p>Thank you for your submission. We will get back to you shortly.</p>";
    } else {
        echo "Error sending the email. Please try again later.";
    }
} else {
    // Redirect to the form page if accessed directly
    header("Location: index.html");
    exit();
}
?>
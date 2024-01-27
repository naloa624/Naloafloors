<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Function to sanitize input data
    function sanitize_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    // Collect and sanitize form data
    $name = sanitize_input($_POST["name"]);
    $email = sanitize_input($_POST["email"]);
    $message = sanitize_input($_POST["message"]);

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit();
    }

    // Additional validation for the message length
    if (strlen($message) < 10) {
        echo "Message should be at least 10 characters long.";
        exit();
    }

    // You can perform more specific validation based on your requirements.

    // For this example, let's just echo the collected data
    echo "<h2>Form Submission Successful</h2>";
    echo "<p>Name: $name</p>";
    echo "<p>Email: $email</p>";
    echo "<p>Message: $message</p>";

    // Example: Send email using the mail() function
    $to = "recipient@example.com";
    $subject = "New Form Submission";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    mail($to, $subject, $message, $headers);

    // Example: Save form data to a text file
    $logFile = "form_submissions.txt";
    $logEntry = "Name: $name | Email: $email | Message: $message\n";

    file_put_contents($logFile, $logEntry, FILE_APPEND | LOCK_EX);

} else {
    // Redirect to the form page if accessed directly
    header("Location: index.html");
    exit();
}
?>
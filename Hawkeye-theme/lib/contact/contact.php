<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars(trim($_POST["name"] ?? ''));
    $email = filter_var(trim($_POST["email"] ?? ''), FILTER_SANITIZE_EMAIL);
    $subject = htmlspecialchars(trim($_POST["subject"] ?? ''));
    $messageContent = htmlspecialchars(trim($_POST["message"] ?? ''));

    // Validate fields
    if (empty($name) || empty($email) || empty($subject) || empty($messageContent)) {
        echo json_encode(["status" => "error", "message" => "All fields are required."]);
        exit;
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["status" => "error", "message" => "Invalid email address."]);
        exit;
    }

    // Send email
    $to = "info@hawkeye-core.com"; // Replace with your actual email
    $headers = "From: $email\r\nReply-To: $email\r\nContent-Type: text/plain; charset=UTF-8";

    if (mail($to, $subject, $messageContent, $headers)) {
        echo json_encode(["status" => "success", "message" => "Message sent successfully."]);

        // Auto-reply confirmation email
        $replySubject = "Thank You for Contacting Hawkeye Core!";
        $replyMessage = "Hello $name,\n\nThank you for reaching out to us. We've received your message and will get back to you shortly.\n\nBest regards,\nHawkeye Core Team\ninfo@hawkeye-core.com\nhttps://hawkeye-core.com\n+1 281-760-7332";
        $replyHeaders = "From: Hawkeye Core info@hawkeye-core.com\r\nReply-To: info@hawkeye-core.com\r\nContent-Type: text/plain; charset=UTF-8";

        mail($email, $replySubject, $replyMessage, $replyHeaders);
    } else {
        echo json_encode(["status" => "error", "message" => "Error sending message."]);
    }
}
?>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    
    // Адрес, на который будет отправляться письмо
    $to = "effectcatana@yandex.ru";
    
    // Формирование заголовка письма
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    // Форматирование текста письма
    $mail_body = "Имя: $name\n";
    $mail_body .= "Телефон: $phone\n";
    $mail_body .= "Email: $email\n";
    $mail_body .= "Тема: $subject\n";
    $mail_body .= "Сообщение:\n$message";
    
    // Отправка письма
    if (mail($to, $subject, $mail_body, $headers)) {
        echo "Сообщение успешно отправлено";
    } else {
        echo "Ошибка отправки сообщения";
    }
}
?>

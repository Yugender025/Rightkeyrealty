<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve form data
    $representativeName = $_POST['representative-name'];
    $companyName = $_POST['company-name'];
    $email = $_POST['email'];
    $mobileNumber = $_POST['mobile-number'];
    $address = $_POST['address'];

    // Process uploaded files
    $aadharPancard = $_FILES['aadhar-pancard'];
    $uploadDir = 'uploads/';
    $uploadedFiles = array();

    foreach ($aadharPancard['name'] as $key => $fileName) {
        $tmpName = $aadharPancard['tmp_name'][$key];
        $uploadFile = $uploadDir . basename($fileName);

        if (move_uploaded_file($tmpName, $uploadFile)) {
            $uploadedFiles[] = $uploadFile;
        } else {
            echo "Error uploading file: " . $fileName;
        }
    }

    // Store the data or perform any necessary actions
    // ...

    // Redirect or display a success message
    header('Location: index.php?success=true');
    exit;
}
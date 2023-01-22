<?php
    // Connect to the database
    $db = new mysqli('host', 'username', 'password', 'database');

    // Check for a successful connection
    if ($db->connect_errno) {
        echo "Failed to connect to MySQL: (" . $db->connect_errno . ") " . $db->connect_error;
    }

    // Check if the form has been submitted
    if (isset($_POST['submit'])) {
        // Get the form data
        $user_id = $_POST['user_id'];
        $amount = $_POST['amount'];

        // Check if the user has enough funds
        $result = $db->query("SELECT balance FROM users WHERE id = '$user_id'");
        $row = $result->fetch_assoc();
        $balance = $row['balance'];

        if ($amount > $balance) {
            echo "Error: Not enough funds.";
        } else {
            // Update the user's balance
            $new_balance = $balance - $amount;
            $db->query("UPDATE users SET balance = '$new_balance' WHERE id = '$user_id'");

            // Log the transaction
            $db->query("INSERT INTO transactions (user_id, type, amount) VALUES ('$user_id', 'withdrawal', '$amount')");

            echo "Withdrawal successful. New balance: $" . $new_balance;
        }
    }
?>

<form method="post" action="withdraw.php">
    <label for="user_id">User ID:</label>
    <input type="text" id="user_id" name="user_id">

    <label for="amount">Amount:</label>
    <input type="text" id="amount" name="amount">

    <input type="submit" name="submit" value="Withdraw">
</form>

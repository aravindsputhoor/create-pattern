<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Output Pattern</title>
  <link rel="stylesheet" href="assets/style.css">
  <script src="assets/jquery.min.js"></script>
</head>
<body>
  <div class="text-field" >
    <input type="text" placeholder="Enter a Keyword" id="keyword">
    <button id="enter">Enter</button><label class="error" for="keyword" id="keyword-label"></label>
    <p>Keyword: <span id="keyword-enter"></span></p>
    <p>Keyword Count: <span id="count">0</span></p>
    <div id="pattern"></div>
  </div>
  <script src="assets/main.js"></script>
</body>
</html>

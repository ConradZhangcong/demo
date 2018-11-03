<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>{{title}}</title>
  <style>
    body {
      margin: 0;
    }

    .path {
      margin-bottom: 50px;
    }

    .main {
      width: 1200px;
      margin: 100px auto;
    }

    .container {
      display: inline-block;
      width: 30%;
      margin: 0 20px 30px 0;
      border: 1px solid #eaeaea;
      cursor: pointer;
    }

    .container:hover {
      background: #ccc;
    }

    a {
      font-size: 16px;
    }

    a:link {
      color: #000;
      text-decoration: none;
    }

    a:active: {
      color: #000;
    }

    a:visited {
      color: #000;
      text-decoration: none;
    }

    a:hover {
      color: #000;
    }
  </style>
</head>

<body>
  <div class="main">
    <div class="path"></div>
    {{#each files}}
    <div class="container">
      <a href="{{../dir}}/{{file}}">[{{icon}}]{{file}}</a>
    </div>
    {{/each}}
  </div>

</body>

</html>
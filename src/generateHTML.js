const generateHTML = (teamArray) => {
    let newCard = '';
    let employeeCard = [];
    for (let i = 1; i < teamArray.length; i++) {
      switch (teamArray[i].getRole()) {
        case 'Engineer':
          newCard += `
  <!-- Engineer card -->
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h3 class="card-title text-center" id="name">${teamArray[i].name}</h3>
      <h5 id="role" class="text-center"><i class="fas fa-user-ninja"></i> ${teamArray[i].getRole()}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" id="id">ID: ${teamArray[i].id}</li>
      <li class="list-group-item" id="email"><a href="mailto:${teamArray[i].email}">Email: ${teamArray[i].email}</a></li>
      <li class="list-group-item" id="github"><a href="https://github.com/${teamArray[i].github}" target="_blank">Github: ${teamArray[i].github}</a></li>
    </ul>
  </div>`;
  
          employeeCard.push(newCard)
          break;
  
        case 'Intern':
          newCard += `   
  <!-- Intern card -->
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h3 class="card-title text-center" id="name">${teamArray[i].name}</h3>
      <h5 id="role" class="text-center"><i class="fas fa-user-graduate"></i> ${teamArray[i].getRole()}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" id="id">ID: ${teamArray[i].id}</li>
      <li class="list-group-item" id="email"><a href="mailto:${teamArray[i].email}">Email: ${teamArray[i].email}</a></li>
      <li class="list-group-item" id="school">School: ${teamArray[i].school}</li>
    </ul>
  </div>`;
  
          employeeCard.push(newCard)
          break;
      }
    };
  
  
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="styles.css" />
      <script src="https://kit.fontawesome.com/3ff242710e.js" crossorigin="anonymous"></script>
      <title>Team Profile</title>
    </head>
    <body>
      <!-- jumbotron -->
      <div id="jumbotron" class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-1">The Dream Team</h1>
        </div>
      </div>
      <!-- card container -->
      <div class="container" id="card-container">
        <div class="row">
          <div class="card-area col-12 d-flex justify-content-center mt-5">
  <!-- Manager card -->
  <div class="card text" style="width: 18rem;">
    <div class="card-body">
      <h3 class="card-title text-center" id="name">${teamArray[0].name}</h3>
      <h5 id="role" class="text-center"><i class="fas fa-user-tie"></i> Manager</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item" id="id">ID: ${teamArray[0].id}</li>
      <li class="list-group-item" id="email"><a href="mailto:${teamArray[0].email}">Email: ${teamArray[0].email}</a></li>
      <li class="list-group-item" id="officeNumber">Office number: ${teamArray[0].officeNumber}</li>
    </ul>
  </div>
  ${newCard}
          </div>
        </div>
      </div>
    </body>
    </html>`;
  }
  
  
  module.exports = generateHTML;
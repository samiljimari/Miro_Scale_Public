const redirect_uri = "https://hofdata.claris.sk/miro/scale0.6.6/auth_ok.html"

function getPath() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const code = urlParams.get('code');
  console.log("code: ", code);

  const client_id = urlParams.get('client_id');
  console.log("client_id: ", client_id);

  const team_id = urlParams.get('team_id');
  console.log("team_id: ", team_id);

  const client_secret = "CLIENT_SECRET_HERE";
  console.log("client_secret: ", client_secret);


  var requestOptions = {
    method: 'POST',
    redirect: 'follow'
  }

  fetch("https://api.miro.com/v1/oauth/token?grant_type=authorization_code&code=" + code + "&redirect_uri=" + redirect_uri +
  "&client_id=" + client_id + "&client_secret=" + client_secret, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

  window.location.replace("http://www.miro.com/app/dashboard/");
}


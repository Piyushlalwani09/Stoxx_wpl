document.addEventListener("DOMContentLoaded", function () {
  var panelOne = document.querySelector(".form-panel.two").clientHeight,
    panelTwo = document.querySelector(".form-panel.two").scrollHeight;

  document
    .querySelectorAll(".form-panel.two:not(.active)")
    .forEach(function (panel) {
      panel.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(".form-toggle").classList.add("visible");
        document.querySelector(".form-panel.one").classList.add("hidden");
        document.querySelector(".form-panel.two").classList.add("active");
        document.querySelector(".form").style.height = panelTwo + "px";
      });
    });

  document
    .querySelector(".form-toggle")
    .addEventListener("click", function (e) {
      e.preventDefault();
      this.classList.remove("visible");
      document.querySelector(".form-panel.one").classList.remove("hidden");
      document.querySelector(".form-panel.two").classList.remove("active");
      document.querySelector(".form").style.height = panelOne + "px";
    });
});

document.getElementById("loginButton").addEventListener("click", function () {
  window.location.href = "index.html"; 
});

function showCredentials(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const credentials = { username, password };
  const credentialsString = JSON.stringify(credentials, null, 2);

 
  const credentialsWindow = window.open("", "_blank", "width=400,height=400");
  credentialsWindow.document.write("<pre>" + credentialsString + "</pre>");


}

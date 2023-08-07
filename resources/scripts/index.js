function toggleMobileNavigation() {
  var navbarElement = document.getElementById("navbar");
  navbarElement.classList.toggle("responsive");
}

function toggleTheme(loading) {
  var themeSwitchIcon = document.getElementById("theme-toggle-icon");

  function onPageLoad() {
    var currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
      if (currentTheme == 0) return;

      themeSwitchIcon.classList.toggle("fa-sun-haze");
      themeSwitchIcon.classList.toggle("fa-moon-stars");
      return document.body.classList.toggle("dark");
    }
    return;
  }
  if (loading) onPageLoad();
  else {
    var currentTheme = localStorage.getItem("theme");
    themeSwitchIcon.classList.toggle("fa-sun-haze");
    themeSwitchIcon.classList.toggle("fa-moon-stars");

    switch (currentTheme) {
      case "0":
        localStorage.setItem("theme", 1);
        document.body.classList.add("dark");
        break;
      case "1":
        localStorage.setItem("theme", 0);
        document.body.classList.remove("dark");
        break;
      default:
        localStorage.setItem("theme", 1);
        document.body.classList.add("dark");
        break;
    }
  }
}
toggleTheme(true);

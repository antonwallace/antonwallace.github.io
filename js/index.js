function toggleMobileNav() {
  var navbar = document.getElementById("navbar");
  navbar.classList.toggle("responsive");
}

function toggleTheme(a) {
  
  function setTheme(theme) {
    if (theme === 0) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }

  if(a) return setTheme(0);
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", 0);
  }

  switch (localStorage.getItem("theme")) {
    case "0":
      localStorage.setItem("theme", "1");
      setTheme(0);
      break;
    case "1":
      localStorage.setItem("theme", "0");
      setTheme(1);
      break;
    default:
      localStorage.setItem("theme", "0");
      setTheme(1);
      break;
  }

  return localStorage.getItem("theme");
}

toggleTheme(true)


const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  var icon = document.getElementById("theme-toggle-icon");
  icon.classList.toggle("fa-sun-haze");
  icon.classList.toggle("fa-moon-stars");
  document.body.classList.toggle("dark");
})
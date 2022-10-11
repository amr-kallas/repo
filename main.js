let input = document.querySelector("input");

let btn = document.querySelector("button");

let show = document.querySelector(".show");

btn.onclick = function () {
  if (input.value == "") {
    show.innerHTML = "<span>No Data To Show</span>";
  } else {
    show.innerHTML = "";
    fetch(`https://api.github.com/users/${input.value}/repos`)
      .then((repos) => {
        return repos.json();
      })
      .then((res) => {
        console.log(res);
        res.forEach((repos) => {
          console.log(repos.stargazers_count);
          let mainDiv = document.createElement("div");
          mainDiv.className = "main-div";
          show.appendChild(mainDiv);
          let name = document.createElement("span");
          name.innerHTML = repos.name;
          name.className = "text";
          mainDiv.appendChild(name);
          let infoDiv = document.createElement("div");
          infoDiv.className = "info";
          mainDiv.appendChild(infoDiv);
          let stars = document.createElement("span");
          infoDiv.appendChild(stars);
          stars.innerHTML = repos.stargazers_count;
          let a = document.createElement("a");
          let textA = document.createTextNode("visit");
          a.appendChild(textA);
          a.href = `https://api.github.com/users/${input.value}/repos`;
          a.setAttribute("target", "_blank");
          infoDiv.appendChild(a);
        });
      });
  }
};

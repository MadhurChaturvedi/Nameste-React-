@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap");

* {
  padding: 0;
  margin: 0;
  font-family: "Poppins", sans-serif;
  overflow-x: hidden;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: auto;
  padding: 15px;
  border: 1px solid black;
  user-select: none;
}

.Nav-Links ul {
  display: flex;
  align-items: center;
  list-style: none;
  text-decoration: none;
  text-transform: uppercase;
  gap: 15px;
  font-size: small;
  transition: 0.3s;
  /* background: red; */
  padding: 0 5px 0 5px;
}

.Nav-Links ul li {
  cursor: pointer;
  transition: 0.3s;
  font-weight: 600;
}

.Nav-Links ul li .link {
  text-decoration: none;
}
.Nav-Links ul li:hover {
  color: blueviolet;
  transition: 0.3s;
}
.Nav-Links ul li:active {
  transform: scaleX(1.1);
}

@media (max-width: 360px) {
  .header-logo {
    visibility: hidden;
  }
  .Nav-Links ul li {
    font-size: smaller;
    padding: 0 0px 0 0px;
    font-weight: 500;
  }
  .header {
    align-items: center;
    justify-content: center;
  }
}

.mob-res {
  display: none;
}

/* @media screen and (max-width: 600) {
  body {
    background-color: lightgreen;
  }
} */

/* body */
.body {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  gap: 5px;
}
@media only screen and (max-width: 600px) {
  body {
    flex-direction: row;
  }
}

/* Card */

.res-card {
  border: 1px solid black;
  padding: 10px;
  display: block;
  object-fit: cover;
  width: 200px;
  /* height: auto; */
  transition: 0.1s;
  border-radius: 15px;
  height: fit-content;
  height: min-content;
  cursor: pointer;
  align-items: center;
  text-align: center;
  /* user-select: none; */
}
.res-img {
  width: 100%;
}

.res-card:hover {
  box-shadow: 1px 3px 0px 3px #af5df0;
  transition: 0.1s;
}

.res-card button {
  padding: 2px;
  border: 1px solid black;
  background: #fff;
  width: 100%;
  border-radius: 15px;
  transition: 0.1s;
  user-select: none;
}
.res-card button:hover {
  background-color: #af5df0;
  color: #fff;
  transition: 0.1s;
}
.res-card button:active {
  background-color: #ffffff;
  padding: 0px;
  color: rgb(80, 79, 79);
}

/* Simmer-card */
.simmer-card {
  /* border: 1px solid black; */
  padding: 10px;
  display: block;
  object-fit: cover;
  width: 300px;
  height: 250px;
  background: linear-gradient(-45deg, #eee 40%, #fafafa 50%, #eee 60%);
  background-size: 300%;
  background-position-x: 100%;
  animation: shimmer 1s infinite linear;
  transition: 0.1s;
  border-radius: 15px;
}

@keyframes shimmer {
  to {
    background-position-x: 0%;
  }
}
.simmer-container {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  align-items: center;
  justify-content: center;
}
/* Search */

.search {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
}

.search_input_Box {
  width: 60%;
  padding: 15px;
  outline: none;
}

.search-btn {
  padding: 17px;
  background-color: #af5df0;
  color: #fff;
  outline: none;
  border: none;
  transition: 0.3s;
}
.search-btn:hover {
  padding: 17px;
  background-color: #8e2cdd;
  color: #fff;
  outline: none;
  border: none;
  transition: 0.3s;
}
.search-btn:active {
  opacity: 0.3;
}

/*  */
.res-container {
  height: 90%;
  width: 90%;
  /* padding: 10 30 0 80; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  margin: auto;
  padding-bottom: 5%;
}

/* Footer */
.all-rights {
  padding-top: 5px;
  padding: 5px;
  text-align: center;
  color: #ffff;
}

footer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.footer-Links {
  width: 300px;
}

@media (max-width: 600px) {
  .footer {
    font-size: 14px;
  }
}

/* filter-buttons */
.filter-btn-space {
  width: 100%;
  height: 10%;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.filter-btn {
  padding: 10px;
  border-radius: 50px;
  margin-bottom: 5px;
  background: #fff;
}

.filter-btn:hover {
  background: rgb(197, 195, 195);
}
.filter-btn:active {
  opacity: 0.4;
}

/* Resturant Menu */

.menu {
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.res-img {
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  border-radius: 2rem;
  margin-top: 10px;
}

.btn-left {
  width: 100%;
  /* background: red; */
  margin-bottom: 5px;
  padding-left: 5%;
}

.btn-left button {
  padding: 2px 10px 0px 10px;
  border-radius: 10px;
  border: none;
  transition: 0.3s;
}

.btn-left button:hover {
  background: #8e2cdd;
  transition: 0.3s;
  color: #ffff;
}

.btn-left button:active {
  opacity: 0.6;
}

/* User card */

.user-card {
  padding: 5px;
  background: #d4baea;
  border-radius: 15px;
  width: 300px;
}

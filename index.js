// Add your code here
const formData = {
  dogName: "Byron",
  dogBreed: "Poodle",
};

const configurationObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(formData),
};

fetch("http://localhost:3000/dogs", configurationObject);

function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type" : "application/json",
      "Accept" : "application/json"
    },
    body: JSON.stringify({
      name: `${name}`,
      email : `${email}`
    })
  })
  .then(resp => resp.json())
  .then(data => {
    document.querySelector("body").append(data.id)
  })
  .catch (error => {
    alert("Something is very wrong.");
    console.log(error.message);
    document.querySelector("body").append(error.message)
  })
}


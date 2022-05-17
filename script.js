// document.getElementById("searchInput").addEventListener("keyup", function(event) {
//   let searchQuery = event.target.value.toLowerCase()
//   let allNamesDomCollection = document.getElementsByClassName("name")

//   for (let counter = 0; counter < allNamesDomCollection.length; counter++) {
//     const currentName = allNamesDomCollection[counter].textContent.toLowerCase()
//     console.log(currentName)

//     if (currentName.includes(searchQuery)) {
//       allNamesDomCollection[counter].style.display = "block"
//     } else {
//       allNamesDomCollection[counter].style.display = "none"
//     }
//   }
// })

//Create a conditional that checks if currentName = searchQuery

document.getElementById("searchInput").addEventListener("keyup", function(event) {
  let searchQuery = event.target.value.toLowerCase()
  let allNamesInDOM = document.getElementsByClassName("name")

  for (let i = 0; i < allNamesInDOM.length; i++) {
    const currentName = allNamesInDOM[i].textContent.toLowerCase()
    console.log(currentName)

    if (currentName.includes(searchQuery)) {
      allNamesInDOM[i].style.display = "block"
    } else {
      allNamesInDOM[i].style.display = "none"
    }
  }
})
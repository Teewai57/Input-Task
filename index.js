let data = []

let outputData = document.getElementById('list')
let userInput = document.getElementById('txt')

// localStorage.setItem("input",JSON.stringify (data));



function submitForm(params) {
    
    // Create object and assign key vaues
    let listObject = {
        text: userInput.value,
        id: Math.floor(Math.random() * 2000)
    }

    // Push above object to data array
    data.push(listObject)
    localStorage.setItem("field",JSON.stringify (data));
    // console.log(data);

    // Create a paragrah tag for each element i the data array
    data.forEach(element => {
        let item = document.createElement('p')
        // Set an id
        item.setAttribute('id',element.id )

        // Set textContent
        item.textContent = element.text

        // Add eventListener to each paragraph text created
      item.addEventListener('dblclick', (e) => {

        // Get id of that element
          let id = e.target.id

        //   Filter the data array and return only elements that do not have the clicked id
            let data2 = data.filter((item) => item.id != id)
            
            // Reset data
            data = data2
            
            // Display clicked item none
          e.target.style.display = 'none'
            
      })

    //   using spread operator to get the children of the outputed data
        let output = [ ...outputData.children ];
      
        // Check if each element has the same content
        output.forEach(element => {
            if (element.innerText == item.textContent) {
                console.log(element.innerText);
                outputData.removeChild(element)
            }
        });
        
        outputData.appendChild(item)
    });
    userInput.value = " ";
}


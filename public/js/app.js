const createTag = (tag, value) => {
  let item = document.createElement(tag);
  if (tag === 'img') {
    item.setAttribute("src", value);  
  } else {
    item.textContent = value;
  }
  return item;
};

const displayData = form => {
  const recsList = document.getElementById("formSuccess");
  form.forEach(function(formItem) {
    let li = document.createElement("li");
    formSuccess.appendChild(li);
    li.appendChild(createTag("h2", formItem.name));
    li.appendChild(createTag('img', formItem.email));
    li.appendChild(createTag("p", formItem.message));
  });
};

fetchData(displayData);

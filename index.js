'use strict'
let add_button = document.getElementById('add_button');
let clear_button = document.getElementById('clear_button');
let item_input = document.getElementById('item');
let body = document.querySelector('body');
let ol = addHTMLElement('ol',null,body);

add_button.addEventListener('click',addItemToList);
clear_button.addEventListener('click',clearList);

function addItemToList() {
  ol.style.display = "block";
  let item_value = document.getElementById('item').value;
  let li = addHTMLElement('li',item_value,ol);
  let remove_button = addHTMLElement('button','X',li);
  let done_button = addHTMLElement('button','Done',li);
  done_button.addEventListener('click',() => {
    done_button.style.backgroundColor = "green";
  });
  remove_button.addEventListener('click',() => {
      li.remove();
  });
  item_input.select();
}

function clearList() {
  ol.remove();
  ol = addHTMLElement('ol',null,body);
  ol.id = "order_list";
}

function addHTMLElement(elem, content, parent) {
  let newElem = document.createElement(elem);
  newElem.textContent = content;
  parent.append(newElem);

  return newElem;
}

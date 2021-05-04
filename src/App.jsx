import React, { useState, useEffect } from "react";
import Showtable from "./Showtable";

function App() {
  let [value, set_value] = useState();
  let [mail, set_mail] = useState();
  let [amount, set_amount] = useState();
  let [img, set_img] = useState();
  let [arr, set_arr] = useState([]);
  let [data, set_data] = useState([]);
  
  localStorage.getItem("Users");
  var ls = JSON.parse(localStorage.getItem("Users"));
  useEffect(() => {
    set_data(ls || []);
  }, []);
  function PrintValue(e) {
    e.preventDefault();
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var result = re.test(mail);
    if (result == true) {
      

      URL.createObjectURL(img);
      var reader = new FileReader();
  
      reader.addEventListener("load", () => {
        var url = reader.result;
        var obj = {};
        obj.name = value;
        obj.email = mail;
        obj.amount = amount;
        obj.img = url;
        set_arr([...arr, obj]);
        set_value("");
        set_mail("");
        set_amount("");
        JSON.parse(localStorage.getItem("Users"));
        window.localStorage.setItem("Users", JSON.stringify([...arr, obj]));
      });
      
    }
    else{
      alert("Enter a valid email");
    }
    reader.readAsDataURL(img);

    
  }

  function dell_item(ind) {
    localStorage.getItem("Users");
    var m = JSON.parse(localStorage.getItem("Users"));
    m.splice(ind, 1);
    window.localStorage.setItem("Users", JSON.stringify([m]));
    arr.splice(ind, 1);
    set_arr([...arr]);
  }

  function edit_item(ind) {
    var new_name = prompt("Enter the New Name");
    arr[ind].name = new_name;
    var new_Email = prompt("Enter the New Email");
    arr[ind].email = new_Email;
    var new_Amount = prompt("Enter the New Amount");
    arr[ind].amount = new_Amount;
    set_arr([...arr]);
    localStorage.getItem("Users");
    var m = JSON.parse(localStorage.getItem("Users"));
    m.splice(ind, 1);
    window.localStorage.setItem("Users", JSON.stringify([...arr]));
  }

  return (
    <div id="main">
      <form onSubmit={PrintValue}>
        NAME
        <input
          value={value}
          onChange={(ev) => {
            set_value(ev.target.value);
          }}
          type="text"
          id="name"
          placeholder="Name"
        />
        <br />
        EMAIL
        <input
          value={mail}
          onChange={(ev) => {
            set_mail(ev.target.value);
          }}
          type="email"
          placeholder="Email"
          id="Email"
        />
        <br />
        Amount
        <input
          value={amount}
          onChange={(ev) => {
            set_amount(ev.target.value);
          }}
          type="number"
          placeholder="Amount"
          id="amount"
        />
        <br />
        PICTURE
        <input
          ref={img}
          onChange={(ev) => {
            set_img(ev.target.files[0]);
          }}
          type="file"
          placeholder="Pic here"
        ></input>
        <button type="submit">ADD</button>
      </form>

      <Showtable
        data={data}
        arr={arr}
        dell_item={dell_item}
        edit_item={edit_item}
      />
    </div>
  );
}
export default App;

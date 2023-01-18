import Ellipse from "../components/ellipse";
import $ from "jquery";
import { useEffect } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { useState } from "react";

const Contact_us = () => {
  const [email, setEmail] = useState<string>("");
  const [phone, setphone] = useState<string>("");
  const [name, setName] = useState<string>("");

  const [success, setSuccess] = useState(false);
  const [onTime, setOneTime] = useState(false);

  useEffect(() => {
    var $inputs = $(".input-wrapper-second input");

    $inputs.on("focus", function () {
      var $self = $inputs;
      $self.prev().addClass("active");
    });

    $inputs.on("focusout", function () {
      var $self = $inputs;
      $self.val() == "" ? $self.prev().removeClass("active") : "";
    });
  }, []);
  const sendInfo = () => {
    if (email !== "" && phone !== "" && name !== "" && onTime === false) {
      setOneTime(true);
      axios
        .post("http://localhost:3004/feedback", {
          id: uuid(),
          email: email,
          name: name,
          phone: phone,
        })
        .then((res: any) => {
          console.log(res.data);
          setSuccess(true);
        })
        .catch((error: any) => {
          console.log(error);
        });
      setTimeout(() => {
        setSuccess(false);
      }, 1000);
    }
  };
  return (
    <div className="Contact_us" id="Contact_us">
      <div style={success ? { opacity: 1 } : { opacity: 0 }} className="messageSuccess">
        <div>Success</div>
      </div>
      <div className="Contact_us__block">
        <Ellipse />
        <h2>Contact us</h2>
        <p className="p-1">Do you have any kind of help please contact with us.</p>
        {/* <input type="text" placeholder="Name" />
        <input type="text" placeholder="Phone" />
        <input type="email" placeholder="E-mail" /> */}
        <div className="input-wrapper-second">
          <label>Name</label>
          <input type="name" onChange={(e: any) => setName(e.target.value)} />
        </div>
        <div className="input-wrapper-second">
          <label>Phone</label>
          <input type="phone" onChange={(e: any) => setphone(e.target.value)} />
        </div>
        <div className="input-wrapper-second">
          <label>E-mail</label>
          <input type="email" onChange={(e: any) => setEmail(e.target.value)} />
        </div>
        <button type="button" onClick={sendInfo} style={email === "" && phone === "" && name === "" ? { pointerEvents: "none" } : { pointerEvents: "all" }}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Contact_us;

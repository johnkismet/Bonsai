// Advanced settings:
// Needs (how long user must work on tree)
// Wither Rate (How long until tree begins to wither) */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./newTree.css";
import TreePic from "../../assets/images/tempTreeSprite.png";
import axios from "axios";
import Sidebar from "../sidebar/Sidebar";
import useAuth from "../../hooks/useAuth";
import * as api from "../../api";

const url =
  process.env.NODE_ENV === "production"
    ? "https://bonsai-one.vercel.app/api"
    : "http://localhost:3000/api";

function NewTree() {
  // do a get request to access authorization tokens
  // pass that along with the post request
  const auth = useAuth();

  async function submitTree(e) {
    e.preventDefault();
    const token = await auth.magic.user.getIdToken();

    let name = document.getElementById("nameInput").value;
    let notes = document.getElementById("notesInput").value;

    let data = {
      name: name,
      details: notes,
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    axios
      .post(`${url}/newTree`, data, {
        headers: headers,
      })
      .then((response) => {
        window.location = "/treefarm";
      });
  }

  return (
    <>
      <Sidebar pageWrapId={"newTree"} outerContainerId={"root"} />
      <div id="newTree" className="spacer"></div>
      <div className="newTree">
        <div className="treeContainer">
          <img src={TreePic} alt="Tree" srcSet="" />
        </div>
        <form className="newTreeForm" onSubmit={submitTree}>
          <input
            className="treeInfoInput"
            id="nameInput"
            name="name"
            placeholder="Name"
            type="text"
            required
            maxLength="15"
          />
          <input
            className="treeInfoInput"
            id="notesInput"
            placeholder="Notes"
            name="details"
            type="text"
            maxLength="70"
          />
          <input value="Create Tree" className="submitBtn" type="submit" />
        </form>
      </div>
    </>
  );
}

function sendTree() {
  let name = document.getElementById("nameInput").value;
  let notes = document.getElementById("notesInput").value;
  // console.log({ name, notes });
  // axios
  // 	.post(`${url}/newTree`, {
  // 		name: name,
  // 		details: notes,
  // 	})
  // 	.then((res) => console.log(res));
}

export default NewTree;

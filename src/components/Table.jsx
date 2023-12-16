import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TablePage() {
  const navigate = useNavigate();
  useEffect(() => {
    function ready() {
      console.log("loaded");
      const content = JSON.stringify(localStorage.getItem("csvContent"));
      const rowData = content.split("\\r\\n");
      //head
      const thead = document.getElementsByTagName("thead")[0];
      thead.innerHTML = "";
      const newRow = thead.insertRow();
      const rowColumnData = rowData[0].split(",");
      for (let col = 0; col < rowColumnData.length; col++) {
        const newCell = newRow.insertCell();
        if (rowColumnData[col] === '"name') {
          newCell.innerHTML = "Имя";
        } else if (rowColumnData[col] === "phone") {
          newCell.innerHTML = "Номер телефона";
        } else if (rowColumnData[col] === "email") {
          newCell.innerHTML = "email";
        } else if (rowColumnData[col] === "bday") {
          newCell.innerHTML = "Дата рождения";
        } else if (rowColumnData[col] === "address") {
          newCell.innerHTML = "Адрес";
        } else {
          newCell.innerHTML = rowColumnData[col];
        }
      }
      //body
      const tbody = document.getElementsByTagName("tbody")[0];
      tbody.innerHTML = "";
      for (let row = 1; row < rowData.length; row++) {
        const newRow = tbody.insertRow();
        const rowColumnData = rowData[row].split(",", 5);
        for (let col = 0; col < rowColumnData.length; col++) {
          const newCell = newRow.insertCell();

          newCell.innerHTML = rowColumnData[col];
        }
      }
    }
    ready();
  }, []);

  function onChange() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <main id="main" className="table">
      <button id="button" className="table__button" onClick={onChange}>
        Загрузить новый файл
      </button>
      <table id="table" className="table__data">
        <thead id="thead" className="table__header"></thead>
        <tbody id="tbody" className="table__body"></tbody>
      </table>
    </main>
  );
}

export default TablePage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  
  function onClick(e) {
    e.preventDefault();
    const fileInput = document.getElementById("fileInput");
    fileInput.click();
  }
  function handleSaveFile() {
    const fileInput = document.getElementById("fileInput");
    fileInput.click();
    const file = fileInput.files[0];
    if (file.type === "text/csv") {
      setErr(false)
      const reader = new FileReader();
      reader.onload = function (e) {
        const content = e.target.result;
        localStorage.setItem("csvContent", content);
        navigate("/table");
      };
      reader.readAsText(file);
    } else {
      setErr(true)
    }
  }
  return (
    <main className="mainPage">
      {err?<div className="mainPage__error">
        <p className="mainPage__error-text">Неправильный формат файла, разрешены только файлы .CSV</p>
        </div>:''}
      <div className="mainPage__container">
        <h1 className="mainPage__header">Выберите файл в формате CSV</h1>
        <button
          className="mainPage__button"
          onClick={onClick}
          type="button"
          value="submit"
        >
          Выберите файл
        </button>
        <input
          className="mainPage__input"
          onChange={handleSaveFile}
          id="fileInput"
          type="file"
          
        />
      </div>
    </main>
  );
}

export default MainPage;

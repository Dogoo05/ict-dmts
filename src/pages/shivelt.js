"use client";
import React from "react";
import InteractiveKeyboard3 from "./components/Keyboard";

export default function Shivelet() {
  // Хэрэв та монгол үгс ашиглахыг хүсвэл доорх комментын мөрийг ашиглаад `InteractiveKeyboard3`-д дамжуулна:
  // const mongol = ["НОМ","ГЭР","НАР","ТАВ","СОН","ҮЛГ"];  <-- жишээ (Cyrillic) — таны хүссэн үгсээр солих

  return (
    <div className="p-6">
      <InteractiveKeyboard3
        // wordList={mongol} // монгол үгс (Cyrillic) хэрэглэх бол энэ мөрийн comment-ыг авч ашиглана
        successDuration={1000}
      />
    </div>
  );
}

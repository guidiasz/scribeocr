
export function renderText(hocrAll){

  let textStr = "";
  const exportParser = new DOMParser();

  for(let g = 0; g < hocrAll.length; g++){
    if(g > 0){
      textStr = textStr + "\n\n";
    }
    const pageXML = exportParser.parseFromString(hocrAll[g],"text/xml");
    const lines = pageXML.getElementsByClassName("ocr_line");
    for (let h = 0; h < lines.length; h++) {
      if(h > 0){
        textStr = textStr + "\n";
      }

      const line = lines[h];
      const words = line.getElementsByClassName("ocrx_word");

      for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if(i > 0){
          textStr = textStr + " ";
        }
        textStr = textStr + word.textContent;

      }
    }
  }

  const textBlob = new Blob([textStr]);
  saveAs(textBlob, "mydocument.txt");

}
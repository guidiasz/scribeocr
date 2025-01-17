// Array of characters in Windows-1252 (ANSI)
// Starts with 32 (space) and ends with 255 (the final character)
// Unused characters are included as empty strings to preserve order.
// "Soft hyphen" is also an empty string due to encoding issues. 
export const win1252Chars = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", 
"<", "=", ">", "?", "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "", 
"]", "^", "_", "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", 
"~", "", "€", "", "‚", "ƒ", "„", "…", "†", "‡", "ˆ", "‰", "Š", "‹", "Œ", "", "Ž", "", "", "‘", "’", "“", "”", "•", "–", "—", "˜", "™", "š", "›", "œ", "", "ž", "Ÿ", 
"", "¡", "¢", "£", "¤", "¥", "¦", "§", "¨", "©", "ª", "«", "¬", "", "®", "¯", "°", "±", "²", "³", "´", "µ", "¶", "·", "¸", "¹", "º", "»", "¼", "½", "¾", "¿", "À", "Á", 
"Â", "Ã", "Ä", "Å", "Æ", "Ç", "È", "É", "Ê", "Ë", "Ì", "Í", "Î", "Ï", "Ð", "Ñ", "Ò", "Ó", "Ô", "Õ", "Ö", "×", "Ø", "Ù", "Ú", "Û", "Ü", "Ý", "Þ", "ß", "à", "á", "â", 
"ã", "ä", "å", "æ", "ç", "è", "é", "ê", "ë", "ì", "í", "î", "ï", "ð", "ñ", "ò", "ó", "ô", "õ", "ö", "÷", "ø", "ù", "ú", "û", "ü", "ý", "þ", "ÿ"]

// Mapping between character names and Windows octal encodings
// Parsed from Appendix D of PDF 1.7 spec
// ASCII characters are either "replaced" by themselves or escaped with backslashes in the case
// of special characters to maintain readability in the PDF. 
// Non-ASCII characters are replaced by encodings. 
const encodingASCII = {"A":"A",
"B":"B",
"C":"C",
"D":"D",
"E":"E",
"F":"F",
"G":"G",
"H":"H",
"I":"I",
"J":"J",
"K":"K",
"L":"L",
"M":"M",
"N":"N",
"O":"O",
"P":"P",
"Q":"Q",
"R":"R",
"S":"S",
"T":"T",
"U":"U",
"V":"V",
"W":"W",
"X":"X",
"Y":"Y",
"Z":"Z",
"a":"a",
"&":"&",
"^":"^",
"~":"~",
"*":"*",
"@":"@",
"b":"b",
"\\":"\\\\",
"|":"|",
"{":"{",
"}":"}",
"[":"[",
"]":"]",
"c":"c",
":":":",
",":",",
"d":"d",
"$":"$",
"e":"e",
"8":"8",
"=":"=",
"!":"!",
"f":"f",
"5":"5",
"4":"4",
"g":"g",
"`":"`",
">":">",
"h":"h",
"-":"-",
"i":"i",
"j":"j",
"k":"k",
"l":"l",
"<":"<",
"m":"m",
"n":"n",
"9":"9",
"#":"#",
"o":"o",
"1":"1",
"p":"p",
"(":"\\(",
")":"\\)",
"%":"%",
".":".",
"+":"+",
"q":"q",
"?":"?",
"\"":"\"",
"'":"'",
"r":"r",
"s":"s",
";":";",
"7":"7",
"6":"6",
"/":"/",
" ":" ",
"t":"t",
"3":"3",
"2":"2",
"u":"u",
"_":"_",
"v":"v",
"w":"w",
"x":"x",
"y":"y",
"z":"z",
"0":"0"
}


export const encodingNonASCII = {"Æ":"\\306",
"Á":"\\301",
"Â":"\\302",
"Ä":"\\304",
"À":"\\300",
"Å":"\\305",
"Ã":"\\303",
"Ç":"\\307",
"É":"\\311",
"Ê":"\\312",
"Ë":"\\313",
"È":"\\310",
"Ð":"\\320",
"€":"\\200",
"Í":"\\315",
"Î":"\\316",
"Ï":"\\317",
"Ì":"\\314",
"Ñ":"\\321",
"Œ":"\\214",
"Ó":"\\323",
"Ô":"\\324",
"Ö":"\\326",
"Ò":"\\322",
"Ø":"\\330",
"Õ":"\\325",
"Š":"\\212",
"Þ":"\\336",
"Ú":"\\332",
"Û":"\\333",
"Ü":"\\334",
"Ù":"\\331",
"Ý":"\\335",
"Ÿ":"\\237",
"Ž":"\\216",
"á":"\\341",
"â":"\\342",
"´":"\\264",
"ä":"\\344",
"æ":"\\346",
"à":"\\340",
"å":"\\345",
"ã":"\\343",
"¦":"\\246",
"•":"\\225",
"ç":"\\347",
"¸":"\\270",
"¢":"\\242",
"ˆ":"\\210",
"©":"\\251",
"¤":"\\244",
"†":"\\206",
"‡":"\\207",
"°":"\\260",
"¨":"\\250",
"÷":"\\367",
"é":"\\351",
"ê":"\\352",
"ë":"\\353",
"è":"\\350",
"…":"\\205",
"—":"\\227",
"–":"\\226",
"ð":"\\360",
"¡":"\\241",
"ƒ":"\\203",
"ß":"\\337",
"«":"\\253",
"»":"\\273",
"‹":"\\213",
"›":"\\233",
"í":"\\355",
"î":"\\356",
"ï":"\\357",
"ì":"\\354",
"¬":"\\254",
"¯":"\\257",
"μ":"\\265",
"×":"\\327",
"ñ":"\\361",
"ó":"\\363",
"ô":"\\364",
"ö":"\\366",
"œ":"\\234",
"ò":"\\362",
"½":"\\275",
"¼":"\\274",
"¹":"\\271",
"ª":"\\252",
"º":"\\272",
"ø":"\\370",
"õ":"\\365",
"¶":"\\266",
"·":"\\267",
"‰":"\\211",
"±":"\\261",
"¿":"\\277",
"„":"\\204",
"“":"\\223",
"”":"\\224",
"‘":"\\221",
"’":"\\222",
"‚":"\\202",
"®":"\\256",
"š":"\\232",
"§":"\\247",
"£":"\\243",
"þ":"\\376",
"¾":"\\276",
"³":"\\263",
"˜":"\\230",
"™":"\\231",
"²":"\\262",
"ú":"\\372",
"û":"\\373",
"ü":"\\374",
"ù":"\\371",
"ý":"\\375",
"ÿ":"\\377",
"¥":"\\245",
"ž":"\\236",
"(":"\\(",
")":"\\)",
"\\":"\\\\"
}

export const winEncodingLookup = {
    ...encodingASCII,
    ...encodingNonASCII
}

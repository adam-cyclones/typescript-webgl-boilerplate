const sheet:any = (()=>{
        let style = document.createElement("style");
        // WebKit hack :(
        style.appendChild(document.createTextNode(""));
        document.head.appendChild(style);
        return style.sheet;
    })(),
    css = (input:TemplateStringsArray)=>{
        sheet.insertRule(input,0)
        return css
    }

css `
    html,
    body{
        margin:0;
        position:relative;
        width:100vw;
        height:100vh;
        overflow:hidden;
    }
`
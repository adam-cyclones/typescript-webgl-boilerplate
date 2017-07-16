import {importFragmentShader } from "./shaders/fragment.shader";
import { importVertexShader } from "./shaders/vertex.shader";
import {createProgram} from "./programs/main.program";

window.addEventListener("DOMContentLoaded",main);

function main(){
    //Create canvas
    const canvas = document.createElement("canvas");
    canvas.width = document.body.scrollWidth;
    canvas.height = innerHeight;
    const body = <HTMLBodyElement>document.querySelector("body")
    body.appendChild(canvas)


    //Context
    const gl = <WebGLRenderingContext>canvas.getContext("webgl");
    //Clear and draw background
    gl.clearColor(0,0,0,1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    createProgram(gl,
        importFragmentShader,
        importVertexShader
    )
    
}

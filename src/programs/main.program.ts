//Clears a program that can pass multiple shaders
export function createProgram(gl:WebGLRenderingContext, ...shaders:Array<Function>){
    const program = gl.createProgram();
    for(let shader of shaders){
        gl.attachShader(program, <WebGLShader>shader(gl));
    }
    gl.linkProgram(program);

    return program;
}
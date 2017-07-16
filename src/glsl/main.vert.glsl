//2 floating point values passed in as position
attribute vec2 position;

void main(){
    //not using the last 2 params in this vector 4
    gl_position = vec4(position, 0.0, 0.0);
    
}
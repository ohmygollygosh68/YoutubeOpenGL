#version 330 core

//Positions/Coordinates
layout (location = 0) in vec3 aPos;
// Colors
layout (location = 1) in vec3 aColor;


// Outputs the color for the Fragment Shader
out vec3 color;
// Controls the scale of the vertices
uniform float scale;


void main()
{
	// Outputs the positions/coordinates of all vertices
	// Exercise 1a. Flip the triangle upside down using the vertex shader.
	// Hint: you simply have to put two minuses somewhere. Actually aPos.y
	gl_Position = vec4(aPos.x + aPos.x * scale, -aPos.y + -aPos.y * scale, aPos.z + aPos.z * scale, 1.0);
	// Assigns the colors from the Vertex Data to "color"
	color = aColor;
}
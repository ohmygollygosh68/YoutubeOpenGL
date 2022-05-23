#version 330 core

// Outputs colors in RGBA
out vec4 FragColor;


// Inputs the color from the Vertex Shader
in vec3 color;


void main()
{

// Exercise 1.2 Invert the colors of the triangles
// Hint: The inverse of an RGB normalised color, is 1- that color

	FragColor = vec4(1.0f - color.x, 1.0f - color.y, 1.0f - color.z, 1.0f);
}
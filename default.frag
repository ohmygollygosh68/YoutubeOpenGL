#version 330 core

// Outputs colors in RGBA
out vec4 FragColor;


// Inputs the color from the Vertex Shader
in vec3 color;

uniform float scale;

void main()
{
	FragColor = vec4(color.x * scale, color.y * scale, color.z * scale, 1.0f);
	//FragColor = vec4(1.0f - color.x, 1.0f - color.y, 1.0f - color.z, 1.0f);
}
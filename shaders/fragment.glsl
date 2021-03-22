precision mediump float;

varying vec3 vNormal;
varying vec3 fragPos;
uniform vec3 viewPos;

void main() {
    vec3 normalizedNormal = normalize(vec3(vNormal.xy, -1.0*vNormal.z));
    vec3 lightColor = vec3(1.0, 1.0, 1.0);
    vec3 lightPos = vec3(-1, 1, 1);
    vec3 lightDirection = normalize(lightPos - fragPos);

    vec3 ambient = 0.5 * lightColor;

    vec3 diffuse = 0.5 * max(dot(normalizedNormal, lightDirection), 0.0) * lightColor;

    vec3 reflected = reflect(-lightDirection, normalizedNormal);
    vec3 normalizedViewDir = normalize(viewPos - fragPos);
    float spec = pow(max(dot(reflected, normalizedViewDir), 0.0), 32.0);
    vec3 specular = 0.5 * spec * lightColor;

    vec3 totalIntensity = ambient + diffuse + specular;

    vec3 defaultColor = vec3(1.0, 0.0, 0.0);

    gl_FragColor = vec4(totalIntensity * defaultColor, 1.0);
}
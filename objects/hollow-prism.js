let prism = [
    // >> Bottom front
    -1, -1 , 0,
    1, -1 , 0,
    0.86, -0.75, 0,
    -0.86, -0.75, 0,
    -1, -1, 0,
    0.86, -0.75, 0,

    1, -1, 0,
    1, -1, 0.25,
    0.86, -0.75, 0.25,
    0.86, -0.75, 0,
    1, -1, 0,
    0.86, -0.75, 0.25,

    1, -1, 0.25,
    -1, -1, 0.25,
    -0.86, -0.75, 0.25,
    0.86, -0.75, 0.25,
    1, -1, 0.25,
    -0.86, -0.75, 0.25,

    -1, -1, 0.25,
    -1, -1, 0,
    -0.86, -0.75, 0,
    -0.86, -0.75, 0.25,
    -1, -1, 0.25,
    -0.86, -0.75, 0,

    -0.86, -0.75, 0,
    0.86, -0.75, 0,
    0.86, -0.75, 0.25,
    -0.86, -0.75, 0.25,
    -0.86, -0.75, 0,
    0.86, -0.75, 0.25,

    1, -1, 0,
    -1, -1, 0,
    -1, -1, 0.25,
    1, -1, 0.25,
    1, -1, 0,
    -1, -1, 0.25,

    // >> Bottom back
    -1, -1 , 3,
    1, -1 , 3,
    0.86, -0.75, 3,
    -0.86, -0.75, 3,
    -1, -1, 3,
    0.86, -0.75, 3,

    1, -1, 3,
    1, -1, 3.25,
    0.86, -0.75, 3.25,
    0.86, -0.75, 3,
    1, -1, 3,
    0.86, -0.75, 3.25,

    1, -1, 3.25,
    -1, -1, 3.25,
    -0.86, -0.75, 3.25,
    0.86, -0.75, 3.25,
    1, -1, 3.25,
    -0.86, -0.75, 3.25,

    -1, -1, 3.25,
    -1, -1, 3,
    -0.86, -0.75, 3,
    -0.86, -0.75, 3.25,
    -1, -1, 3.25,
    -0.86, -0.75, 3,

    -0.86, -0.75, 3,
    0.86, -0.75, 3,
    0.86, -0.75, 3.25,
    -0.86, -0.75, 3.25,
    -0.86, -0.75, 3,
    0.86, -0.75, 3.25,

    1, -1, 3,
    -1, -1, 3,
    -1, -1, 3.25,
    1, -1, 3.25,
    1, -1, 3,
    -1, -1, 3.25,

    // >> Right bottom
    1, -1, 0.25,
    1, -1, 3,
    0.86, -0.75, 3,
    0.86, -0.75, 0.25,
    1, -1, 0.25,
    0.86, -0.75, 3,
    
    1, -1, 3,
    0.75, -1, 3,
    0.61, -0.75, 3,
    0.86, -0.75, 3,
    1, -1, 3,
    0.61, -0.75, 3,

    0.75, -1, 3,
    0.75, -1, 0.25,
    0.61, -0.75, 0.25,
    0.61, -0.75, 3,
    0.75, -1, 3,
    0.61, -0.75, 0.25,

    0.75, -1, 0.25,
    1, -1, 0.25,
    0.86, -0.75, 0.25,
    0.61, -0.75, 0.25,
    0.75, -1, 0.25,
    0.86, -0.75, 0.25,

    0.86, -0.75, 0.25,
    0.86, -0.75, 3,
    0.61, -0.75, 3,
    0.61, -0.75, 0.25,
    0.86, -0.75, 0.25,
    0.61, -0.75, 3,

    1, -1, 3,
    1, -1, 0.25,
    0.75, -1, 0.25,
    0.75, -1, 3,
    1, -1, 3,
    0.75, -1, 0.25,

    // >> Bottom left
    -1, -1, 0.25,
    -1, -1, 3,
    -0.86, -0.75, 3,
    -0.86, -0.75, 0.25,
    -1, -1, 0.25,
    -0.86, -0.75, 3,
    
    -1, -1, 3,
    -0.75, -1, 3,
    -0.61, -0.75, 3,
    -0.86, -0.75, 3,
    -1, -1, 3,
    -0.61, -0.75, 3,

    -0.75, -1, 3,
    -0.75, -1, 0.25,
    -0.61, -0.75, 0.25,
    -0.61, -0.75, 3,
    -0.75, -1, 3,
    -0.61, -0.75, 0.25,

    -0.75, -1, 0.25,
    -1, -1, 0.25,
    -0.86, -0.75, 0.25,
    -0.61, -0.75, 0.25,
    -0.75, -1, 0.25,
    -0.86, -0.75, 0.25,

    -0.86, -0.75, 0.25,
    -0.86, -0.75, 3,
    -0.61, -0.75, 3,
    -0.61, -0.75, 0.25,
    -0.86, -0.75, 0.25,
    -0.61, -0.75, 3,

    -1, -1, 3,
    -1, -1, 0.25,
    -0.75, -1, 0.25,
    -0.75, -1, 3,
    -1, -1, 3,
    -0.75, -1, 0.25,

    // >> Front right
    0.86, -0.75, 0,
    0, 0.73, 0,
    0, 0.3, 0,
    0.61, -0.75, 0,
    0.86, -0.75, 0,
    0, 0.3, 0,

    0, 0.3, 0,
    0, 0.3, 0.25,
    0.61, -0.75, 0.25,
    0.61, -0.75, 0,
    0, 0.3, 0,
    0.61, -0.75, 0.25,

    0, 0.3, 0.25,
    0, 0.73, 0.25,
    0.86, -0.75, 0.25,
    0.61, -0.75, 0.25,
    0, 0.3, 0.25,
    0.86, -0.75, 0.25,

    0, 0.73, 0.25,
    0, 0.73, 0,
    0.86, -0.75, 0,
    0.86, -0.75, 0.25,
    0, 0.73, 0.25,
    0.86, -0.75, 0,

    0.86, -0.75, 0,
    0.61, -0.75, 0,
    0.61, -0.75, 0.25,
    0.86, -0.75, 0.25,
    0.86, -0.75, 0,
    0.61, -0.75, 0.25,

    0, 0.3, 0,
    0, 0.73, 0,
    0, 0.73, 0.25,
    0, 0.3, 0.25,
    0, 0.3, 0,
    0, 0.73, 0.25,

    // >> Front left
    -0.86, -0.75, 0,
    0, 0.73, 0,
    0, 0.3, 0,
    -0.61, -0.75, 0,
    -0.86, -0.75, 0,
    0, 0.3, 0,

    0, 0.3, 0,
    0, 0.3, 0.25,
    -0.61, -0.75, 0.25,
    -0.61, -0.75, 0,
    0, 0.3, 0,
    -0.61, -0.75, 0.25,

    0, 0.3, 0.25,
    0, 0.73, 0.25,
    -0.86, -0.75, 0.25,
    -0.61, -0.75, 0.25,
    0, 0.3, 0.25,
    -0.86, -0.75, 0.25,

    0, 0.73, 0.25,
    0, 0.73, 0,
    -0.86, -0.75, 0,
    -0.86, -0.75, 0.25,
    0, 0.73, 0.25,
    -0.86, -0.75, 0,

    -0.86, -0.75, 0,
    -0.61, -0.75, 0,
    -0.61, -0.75, 0.25,
    -0.86, -0.75, 0.25,
    -0.86, -0.75, 0,
    -0.61, -0.75, 0.25,

    0, 0.3, 0,
    0, 0.73, 0,
    0, 0.73, 0.25,
    0, 0.3, 0.25,
    0, 0.3, 0,
    0, 0.73, 0.25,

    // >> Back right
    0.86, -0.75, 3,
    0, 0.73, 3,
    0, 0.3, 3,
    0.61, -0.75, 3,
    0.86, -0.75, 3,
    0, 0.3, 3,

    0, 0.3, 3,
    0, 0.3, 3.25,
    0.61, -0.75, 3.25,
    0.61, -0.75, 3,
    0, 0.3, 3,
    0.61, -0.75, 3.25,

    0, 0.3, 3.25,
    0, 0.73, 3.25,
    0.86, -0.75, 3.25,
    0.61, -0.75, 3.25,
    0, 0.3, 3.25,
    0.86, -0.75, 3.25,

    0, 0.73, 3.25,
    0, 0.73, 3,
    0.86, -0.75, 3,
    0.86, -0.75, 3.25,
    0, 0.73, 3.25,
    0.86, -0.75, 3,

    0.86, -0.75, 3,
    0.61, -0.75, 3,
    0.61, -0.75, 3.25,
    0.86, -0.75, 3.25,
    0.86, -0.75, 3,
    0.61, -0.75, 3.25,

    0, 0.3, 3,
    0, 0.73, 3,
    0, 0.73, 3.25,
    0, 0.3, 3.25,
    0, 0.3, 3,
    0, 0.73, 3.25,

    // >> Back left
    -0.86, -0.75, 3,
    0, 0.73, 3,
    0, 0.3, 3,
    -0.61, -0.75, 3,
    -0.86, -0.75, 3,
    0, 0.3, 3,

    0, 0.3, 3,
    0, 0.3, 3.25,
    -0.61, -0.75, 3.25,
    -0.61, -0.75, 3,
    0, 0.3, 3,
    -0.61, -0.75, 3.25,

    0, 0.3, 3.25,
    0, 0.73, 3.25,
    -0.86, -0.75, 3.25,
    -0.61, -0.75, 3.25,
    0, 0.3, 3.25,
    -0.86, -0.75, 3.25,

    0, 0.73, 3.25,
    0, 0.73, 3,
    -0.86, -0.75, 3,
    -0.86, -0.75, 3.25,
    0, 0.73, 3.25,
    -0.86, -0.75, 3,

    -0.86, -0.75, 3,
    -0.61, -0.75, 3,
    -0.61, -0.75, 3.25,
    -0.86, -0.75, 3.25,
    -0.86, -0.75, 3,
    -0.61, -0.75, 3.25,

    0, 0.3, 3,
    0, 0.73, 3,
    0, 0.73, 3.25,
    0, 0.3, 3.25,
    0, 0.3, 3,
    0, 0.73, 3.25,

    // >> Upper
    0, 0.73, 0.25,
    0, 0.73, 3,
    0.25, 0.3, 3,
    0.25, 0.3, 0.25,
    0, 0.73, 0.25,
    0.25, 0.3, 3,

    0, 0.73, 3,
    0.25, 0.3, 3,
    -0.25, 0.3, 3,

    0, 0.73, 3,
    0, 0.73, 0.25,
    -0.25, 0.3, 0.25,
    -0.25, 0.3, 3,
    0, 0.73, 3,
    -0.25, 0.3, 0.25,

    0, 0.73, 0.25,
    0.25, 0.3, 0.25,
    -0.25, 0.3, 0.25,

    0.25, 0.3, 0.25,
    0.25, 0.3, 3,
    -0.25, 0.3, 3,
    -0.25, 0.3, 0.25,
    0.25, 0.3, 0.25,
    -0.25, 0.3, 3,
]

let prismNormal = [
    // >> Bottom front
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,

    0.86, 0.5, 0,
    0.86, 0.5, 0,
    0.86, 0.5, 0,
    0.86, 0.5, 0,
    0.86, 0.5, 0,
    0.86, 0.5, 0,

    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,

    -0.86, 0.5, 0,
    -0.86, 0.5, 0,
    -0.86, 0.5, 0,
    -0.86, 0.5, 0,
    -0.86, 0.5, 0,
    -0.86, 0.5, 0,

    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,


    // >> Bottom back
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,

    0.86, 0.5, 0,
    0.86, 0.5, 0,
    0.86, 0.5, 0,
    0.86, 0.5, 0,
    0.86, 0.5, 0,
    0.86, 0.5, 0,

    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,

    -0.86, 0.5, 0,
    -0.86, 0.5, 0,
    -0.86, 0.5, 0,
    -0.86, 0.5, 0,
    -0.86, 0.5, 0,
    -0.86, 0.5, 0,

    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,

    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,

    // >> Bottom right
    0.86, 0.5, 0,
    0.86, 0.5, 0,
    0.86, 0.5, 0,
    0.86, 0.5, 0,
    0.86, 0.5, 0,
    0.86, 0.5, 0,

    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,

    -0.86, -0.5, 0,
    -0.86, -0.5, 0,
    -0.86, -0.5, 0,
    -0.86, -0.5, 0,
    -0.86, -0.5, 0,
    -0.86, -0.5, 0,

    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,

    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,

    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,

    // >> Bottom left
    -0.86, 0.5, 0,
    -0.86, 0.5, 0,
    -0.86, 0.5, 0,
    -0.86, 0.5, 0,
    -0.86, 0.5, 0,
    -0.86, 0.5, 0,

    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,

    0.86, -0.5, 0,
    0.86, -0.5, 0,
    0.86, -0.5, 0,
    0.86, -0.5, 0,
    0.86, -0.5, 0,
    0.86, -0.5, 0,

    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,

    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,

    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,

    // Front right
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,

    -0.86, -0.5, 0,
    -0.86, -0.5, 0,
    -0.86, -0.5, 0,
    -0.86, -0.5, 0,
    -0.86, -0.5, 0,
    -0.86, -0.5, 0,

    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,

    0.86, 0.5, 0,
    0.86, 0.5, 0,
    0.86, 0.5, 0,
    0.86, 0.5, 0,
    0.86, 0.5, 0,
    0.86, 0.5, 0,

    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,

    -1, 0, 0,
    -1, 0, 0,
    -1, 0, 0,
    -1, 0, 0,
    -1, 0, 0,
    -1, 0, 0,

    // Front left
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,

    0.86, -0.5, 0,
    0.86, -0.5, 0,
    0.86, -0.5, 0,
    0.86, -0.5, 0,
    0.86, -0.5, 0,
    0.86, -0.5, 0,

    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,

    -0.86, 0.5, 0,
    -0.86, 0.5, 0,
    -0.86, 0.5, 0,
    -0.86, 0.5, 0,
    -0.86, 0.5, 0,
    -0.86, 0.5, 0,

    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,

    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,

    // Back right
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,

    -0.86, -0.5, 0,
    -0.86, -0.5, 0,
    -0.86, -0.5, 0,
    -0.86, -0.5, 0,
    -0.86, -0.5, 0,
    -0.86, -0.5, 0,

    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,

    0.86, 0.5, 0,
    0.86, 0.5, 0,
    0.86, 0.5, 0,
    0.86, 0.5, 0,
    0.86, 0.5, 0,
    0.86, 0.5, 0,

    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,

    -1, 0, 0,
    -1, 0, 0,
    -1, 0, 0,
    -1, 0, 0,
    -1, 0, 0,
    -1, 0, 0,

    // Back left
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,

    0.86, -0.5, 0,
    0.86, -0.5, 0,
    0.86, -0.5, 0,
    0.86, -0.5, 0,
    0.86, -0.5, 0,
    0.86, -0.5, 0,

    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,

    -0.86, 0.5, 0,
    -0.86, 0.5, 0,
    -0.86, 0.5, 0,
    -0.86, 0.5, 0,
    -0.86, 0.5, 0,
    -0.86, 0.5, 0,

    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,

    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,

    // >> Upper
    -0.86, 0.5, 0,
    -0.86, 0.5, 0,
    -0.86, 0.5, 0,
    -0.86, 0.5, 0,
    -0.86, 0.5, 0,
    -0.86, 0.5, 0,

    0, 0, 1,
    0, 0, 1,
    0, 0, 1,

    0.86, 0.5, 0,
    0.86, 0.5, 0,
    0.86, 0.5, 0,
    0.86, 0.5, 0,
    0.86, 0.5, 0,
    0.86, 0.5, 0,

    0, 0, -1,
    0, 0, -1,
    0, 0, -1,

    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
]
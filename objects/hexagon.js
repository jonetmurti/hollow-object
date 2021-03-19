let hexagon = [
            /* FRONT */
            // front-bottom
            -1, -1.73, 0,
            1, -1.73, 0,
            0.86, -1.48, 0,
            -0.86, -1.48, 0,
            -1, -1.73, 0,
            0.86, -1.48, 0,

            1, -1.73, 0,
            1, -1.73, 0.25,
            0.86, -1.48, 0.25,
            0.86, -1.48, 0,
            1, -1.73, 0,
            0.86, -1.48, 0.25,

            1, -1.73, 0.25,
            -1, -1.73,	0.25,
            -0.86,	-1.48, 0.25,
            0.86, -1.48, 0.25,
            1, -1.73, 0.25,
            -0.86, -1.48, 0.25,

            -1, -1.73, 0.25,
            -1, -1.73, 0,
            -0.86, -1.48, 0,
            -0.86, -1.48, 0.25,
            -1, -1.73, 0.25,
            -0.86, -1.48, 0,

            -0.86, -1.48, 0,
            0.86, -1.48, 0,
            0.86, -1.48, 0.25,
            -0.86, -1.48, 0.25,
            -0.86, -1.48, 0,
            0.86, -1.48, 0.25,	

            1, -1.73, 0,
            -1, -1.73, 0,
            -1, -1.73, 0.25,
            1, -1.73, 0.25,
            1, -1.73, 0,
            -1, -1.73, 0.25,

            // front-right-bottom
            1, -1.73, 0,
            2, 0, 0,
            1.75, 0, 0,
            0.86, -1.48, 0,
            1, -1.73, 0,
            1.75, 0, 0,

            2, 0, 0,
            2, 0, 0.25,
            1.75, 0, 0.25,
            1.75, 0, 0,
            2, 0, 0,
            1.75, 0, 0.25,

            2, 0, 0.25,
            1, -1.73, 0.25,
            0.86, -1.48, 0.25,
            1.75, 0, 0.25,
            2, 0, 0.25,
            0.86, -1.48, 0.25,

            1, -1.73, 0.25,
            1, -1.73, 0,
            0.86, -1.48, 0,
            0.86, -1.48, 0.25,
            1, -1.73, 0.25,
            0.86, -1.48, 0,

            0.86, -1.48, 0,
            1.75, 0, 0,
            1.75, 0, 0.25,
            0.86, -1.48, 0.25,
            0.86, -1.48, 0,
            1.75, 0, 0.25,

            2, 0, 0,
            1, -1.73, 0,
            1, -1.73, 0.25,
            2, 0, 0.25,
            2, 0, 0,
            1, -1.73, 0.25,

            //front-right-upper
            2, 0, 0,
            1, 1.73, 0,
            0.86, 1.48, 0,
            1.75, 0, 0,
            2, 0, 0,
            0.86, 1.48, 0,

            1, 1.73, 0,
            1, 1.73, 0.25,
            0.86, 1.48, 0.25,
            0.86, 1.48, 0,
            1, 1.73, 0,
            0.86, 1.48, 0.25,

            1, 1.73, 0.25,
            2, 0, 0.25,
            1.75, 0, 0.25,
            0.86, 1.48, 0.25,
            1, 1.73, 0.25,
            1.75, 0, 0.25,

            2, 0, 0.25,
            2, 0, 0,
            1.75, 0, 0,
            1.75, 0, 0.25,
            2, 0, 0.25,
            1.75, 0, 0,

            1.75, 0, 0,
            0.86, 1.48, 0,
            0.86, 1.48, 0.25,
            1.75, 0, 0.25,
            1.75, 0, 0, 
            0.86, 1.48, 0.25,

            1, 1.73, 0,
            2, 0, 0,
            2, 0, 0.25,
            1, 1.73, 0.25,
            1, 1.73, 0,
            2, 0, 0.25,

            // front-upper
            -1, 1.73, 0,
            1, 1.73, 0,
            0.86, 1.48, 0,
            -0.86, 1.48, 0,
            -1, 1.73, 0,
            0.86, 1.48, 0,

            1, 1.73, 0,
            1, 1.73, 0.25,
            0.86, 1.48, 0.25,
            0.86, 1.48, 0,
            1, 1.73, 0,
            0.86, 1.48, 0.25,

            1, 1.73, 0.25,
            -1, 1.73,	0.25,
            -0.86,	1.48, 0.25,
            0.86, 1.48, 0.25,
            1, 1.73, 0.25,
            -0.86, 1.48, 0.25,

            -1, 1.73, 0.25,
            -1, 1.73, 0,
            -0.86, 1.48, 0,
            -0.86, 1.48, 0.25,
            -1, 1.73, 0.25,
            -0.86, 1.48, 0,

            -0.86, 1.48, 0,
            0.86, 1.48, 0,
            0.86, 1.48, 0.25,
            -0.86, 1.48, 0.25,
            -0.86, 1.48, 0,
            0.86, 1.48, 0.25,	

            1, 1.73, 0,
            -1, 1.73, 0,
            -1, 1.73, 0.25,
            1, 1.73, 0.25,
            1, 1.73, 0,
            -1, 1.73, 0.25,

            // front-left-bottom
            -1, -1.73, 0,
            -2, 0, 0,
            -1.75, 0, 0,
            -0.86, -1.48, 0,
            -1, -1.73, 0,
            -1.75, 0, 0,

            -2, 0, 0,
            -2, 0, 0.25,
            -1.75, 0, 0.25,
            -1.75, 0, 0,
            -2, 0, 0,
            -1.75, 0, 0.25,

            -2, 0, 0.25,
            -1, -1.73, 0.25,
            -0.86, -1.48, 0.25,
            -1.75, 0, 0.25,
            -2, 0, 0.25,
            -0.86, -1.48, 0.25,

            -1, -1.73, 0.25,
            -1, -1.73, 0,
            -0.86, -1.48, 0,
            -0.86, -1.48, 0.25,
            -1, -1.73, 0.25,
            -0.86, -1.48, 0,

            -0.86, -1.48, 0,
            -1.75, 0, 0,
            -1.75, 0, 0.25,
            -0.86, -1.48, 0.25,
            -0.86, -1.48, 0,
            -1.75, 0, 0.25,

            -2, 0, 0,
            -1, -1.73, 0,
            -1, -1.73, 0.25,
            -2, 0, 0.25,
            -2, 0, 0,
            -1, -1.73, 0.25,

            //front-left-upper
            -2, 0, 0,
            -1, 1.73, 0,
            -0.86, 1.48, 0,
            -1.75, 0, 0,
            -2, 0, 0,
            -0.86, 1.48, 0,

            -1, 1.73, 0,
            -1, 1.73, 0.25,
            -0.86, 1.48, 0.25,
            -0.86, 1.48, 0,
            -1, 1.73, 0,
            -0.86, 1.48, 0.25,

            -1, 1.73, 0.25,
            -2, 0, 0.25,
            -1.75, 0, 0.25,
            -0.86, 1.48, 0.25,
            -1, 1.73, 0.25,
            -1.75, 0, 0.25,

            -2, 0, 0.25,
            -2, 0, 0,
            -1.75, 0, 0,
            -1.75, 0, 0.25,
            -2, 0, 0.25,
            -1.75, 0, 0,

            -1.75, 0, 0,
            -0.86, 1.48, 0,
            -0.86, 1.48, 0.25,
            -1.75, 0, 0.25,
            -1.75, 0, 0, 
            -0.86, 1.48, 0.25,

            -1, 1.73, 0,
            -2, 0, 0,
            -2, 0, 0.25,
            -1, 1.73, 0.25,
            -1, 1.73, 0,
            -2, 0, 0.25,

            /* BACK */
            // back-bottom
            -1, -1.73, 2,
            1, -1.73, 2,
            0.86, -1.48, 2,
            -0.86, -1.48, 2,
            -1, -1.73, 2,
            0.86, -1.48, 2,

            1, -1.73, 2,
            1, -1.73, 2.25,
            0.86, -1.48, 2.25,
            0.86, -1.48, 2,
            1, -1.73, 2,
            0.86, -1.48, 2.25,

            1, -1.73, 2.25,
            -1, -1.73, 2.25,
            -0.86,	-1.48, 2.25,
            0.86, -1.48, 2.25,
            1, -1.73, 2.25,
            -0.86, -1.48, 2.25,

            -1, -1.73, 2.25,
            -1, -1.73, 2,
            -0.86, -1.48, 2,
            -0.86, -1.48, 2.25,
            -1, -1.73, 2.25,
            -0.86, -1.48, 2,

            -0.86, -1.48, 2,
            0.86, -1.48, 2,
            0.86, -1.48, 2.25,
            -0.86, -1.48, 2.25,
            -0.86, -1.48, 2,
            0.86, -1.48, 2.25,	

            1, -1.73, 2,
            -1, -1.73, 2,
            -1, -1.73, 2.25,
            1, -1.73, 2.25,
            1, -1.73, 2,
            -1, -1.73, 2.25,

            // back-right-bottom
            1, -1.73, 2,
            2, 0, 2,
            1.75, 0, 2,
            0.86, -1.48, 2,
            1, -1.73, 2,
            1.75, 0, 2,

            2, 0, 2,
            2, 0, 2.25,
            1.75, 0, 2.25,
            1.75, 0, 2,
            2, 0, 2,
            1.75, 0, 2.25,

            2, 0, 2.25,
            1, -1.73, 2.25,
            0.86, -1.48, 2.25,
            1.75, 0, 2.25,
            2, 0, 2.25,
            0.86, -1.48, 2.25,

            1, -1.73, 2.25,
            1, -1.73, 2,
            0.86, -1.48, 2,
            0.86, -1.48, 2.25,
            1, -1.73, 2.25,
            0.86, -1.48, 2,

            0.86, -1.48, 2,
            1.75, 0, 2,
            1.75, 0, 2.25,
            0.86, -1.48, 2.25,
            0.86, -1.48, 2,
            1.75, 0, 2.25,

            2, 0, 2,
            1, -1.73, 2,
            1, -1.73, 2.25,
            2, 0, 2.25,
            2, 0, 2,
            1, -1.73, 2.25,

            //back-right-upper
            2, 0, 2,
            1, 1.73, 2,
            0.86, 1.48, 2,
            1.75, 0, 2,
            2, 0, 2,
            0.86, 1.48, 2,

            1, 1.73, 2,
            1, 1.73, 2.25,
            0.86, 1.48, 2.25,
            0.86, 1.48, 2,
            1, 1.73, 2,
            0.86, 1.48, 2.25,

            1, 1.73, 2.25,
            2, 0, 2.25,
            1.75, 0, 2.25,
            0.86, 1.48, 2.25,
            1, 1.73, 2.25,
            1.75, 0, 2.25,

            2, 0, 2.25,
            2, 0, 2,
            1.75, 0, 2,
            1.75, 0, 2.25,
            2, 0, 2.25,
            1.75, 0, 2,

            1.75, 0, 2,
            0.86, 1.48, 2,
            0.86, 1.48, 2.25,
            1.75, 0, 2.25,
            1.75, 0, 2, 
            0.86, 1.48, 2.25,

            1, 1.73, 2,
            2, 0, 2,
            2, 0, 2.25,
            1, 1.73, 2.25,
            1, 1.73, 2,
            2, 0, 2.25,

            // back-upper
            -1, 1.73, 2,
            1, 1.73, 2,
            0.86, 1.48, 2,
            -0.86, 1.48, 2,
            -1, 1.73, 2,
            0.86, 1.48, 2,

            1, 1.73, 2,
            1, 1.73, 2.25,
            0.86, 1.48, 2.25,
            0.86, 1.48, 2,
            1, 1.73, 2,
            0.86, 1.48, 2.25,

            1, 1.73, 2.25,
            -1, 1.73,	2.25,
            -0.86,	1.48, 2.25,
            0.86, 1.48, 2.25,
            1, 1.73, 2.25,
            -0.86, 1.48, 2.25,

            -1, 1.73, 2.25,
            -1, 1.73, 2,
            -0.86, 1.48, 2,
            -0.86, 1.48, 2.25,
            -1, 1.73, 2.25,
            -0.86, 1.48, 2,

            -0.86, 1.48, 2,
            0.86, 1.48, 2,
            0.86, 1.48, 2.25,
            -0.86, 1.48, 2.25,
            -0.86, 1.48, 2,
            0.86, 1.48, 2.25,	

            1, 1.73, 2,
            -1, 1.73, 2,
            -1, 1.73, 2.25,
            1, 1.73, 2.25,
            1, 1.73, 2,
            -1, 1.73, 2.25,

            // back-left-bottom
            -1, -1.73, 2,
            -2, 0, 2,
            -1.75, 0, 2,
            -0.86, -1.48, 2,
            -1, -1.73, 2,
            -1.75, 0, 2,

            -2, 0, 2,
            -2, 0, 2.25,
            -1.75, 0, 2.25,
            -1.75, 0, 2,
            -2, 0, 2,
            -1.75, 0, 2.25,

            -2, 0, 2.25,
            -1, -1.73, 2.25,
            -0.86, -1.48, 2.25,
            -1.75, 0, 2.25,
            -2, 0, 2.25,
            -0.86, -1.48, 2.25,

            -1, -1.73, 2.25,
            -1, -1.73, 2,
            -0.86, -1.48, 2,
            -0.86, -1.48, 2.25,
            -1, -1.73, 2.25,
            -0.86, -1.48, 2,

            -0.86, -1.48, 2,
            -1.75, 0, 2,
            -1.75, 0, 2.25,
            -0.86, -1.48, 2.25,
            -0.86, -1.48, 2,
            -1.75, 0, 2.25,

            -2, 0, 2,
            -1, -1.73, 2,
            -1, -1.73, 2.25,
            -2, 0, 2.25,
            -2, 0, 2,
            -1, -1.73, 2.25,

            //back-left-upper
            -2, 0, 2,
            -1, 1.73, 2,
            -0.86, 1.48, 2,
            -1.75, 0, 2,
            -2, 0, 2,
            -0.86, 1.48, 2,

            -1, 1.73, 2,
            -1, 1.73, 2.25,
            -0.86, 1.48, 2.25,
            -0.86, 1.48, 2,
            -1, 1.73, 2,
            -0.86, 1.48, 2.25,

            -1, 1.73, 2.25,
            -2, 0, 2.25,
            -1.75, 0, 2.25,
            -0.86, 1.48, 2.25,
            -1, 1.73, 2.25,
            -1.75, 0, 2.25,

            -2, 0, 2.25,
            -2, 0, 2,
            -1.75, 0, 2,
            -1.75, 0, 2.25,
            -2, 0, 2.25,
            -1.75, 0, 2,

            -1.75, 0, 2,
            -0.86, 1.48, 2,
            -0.86, 1.48, 2.25,
            -1.75, 0, 2.25,
            -1.75, 0, 2, 
            -0.86, 1.48, 2.25,

            -1, 1.73, 2,
            -2, 0, 2,
            -2, 0, 2.25,
            -1, 1.73, 2.25,
            -1, 1.73, 2,
            -2, 0, 2.25,

            /* BOTTOM */
            0.11, -1.73, 0.25,
            0.11, -1.73, 2,
            -0.11, -1.73, 2,
            -0.11, -1.73, 0.25,
            0.11, -1.73, 0.25,
            -0.11, -1.73, 2,

            0.11, -1.73, 0.25,
            -0.11, -1.73, 0.25,
            -0.11, -1.48, 0.25,
            0.11, -1.48, 0.25,
            0.11, -1.73, 0.25,
            -0.11, -1.48, 0.25,
            
            -0.11, -1.48, 0.25,
            0.11, -1.48, 0.25,
            0.11, -1.48, 2,
            -0.11, -1.48, 2,
            -0.11, -1.48, 0.25,
            0.11, -1.48, 2,
            
            0.11, -1.73, 2,
            -0.11, -1.73, 2,
            -0.11, -1.48, 2,
            0.11, -1.48, 2,
            0.11, -1.73, 2,
            -0.11, -1.48, 2,

            0.11, -1.48, 0.25,
            0.11, -1.73, 0.25,
            0.11, -1.73, 2,
            0.11, -1.48, 2,
            0.11, -1.48, 0.25,
            0.11, -1.73, 2,

            -0.11, -1.73, 2,
            -0.11, -1.73, 0.25,
            -0.11, -1.48, 0.25,
            -0.11, -1.48, 2,
            -0.11, -1.73, 2,
            -0.11, -1.48, 0.25,

            /* UPPER */
            -0.11, 1.48, 0.25,
            -0.11, 1.48, 2,
            0.11, 1.48, 2,
            0.11, 1.48, 0.25,
            -0.11, 1.48, 0.25,
            0.11, 1.48, 2,

            0.11, 1.73, 0.25,
            -0.11, 1.73, 0.25,
            -0.11, 1.48, 0.25,
            0.11, 1.48, 0.25,
            0.11, 1.73, 0.25,
            -0.11, 1.48, 0.25,

            -0.11, 1.73, 0.25,
            -0.11, 1.73, 2,
            0.11, 1.73, 2,
            0.11, 1.73, 0.25,
            -0.11, 1.73, 0.25,
            0.11, 1.73, 2,

            0.11, 1.73, 2,
            -0.11, 1.73, 2,
            -0.11, 1.48, 2,
            0.11, 1.48, 2,
            0.11, 1.73, 2,
            -0.11, 1.48, 2,

            0.11, 1.48, 0.25,
            0.11, 1.73, 0.25,
            0.11, 1.73, 2,
            0.11, 1.48, 2,
            0.11, 1.48, 0.25,
            0.11, 1.73, 2,

            -0.11, 1.73, 2,
            -0.11, 1.73, 0.25,
            -0.11, 1.48, 0.25,
            -0.11, 1.48, 2,
            -0.11, 1.73, 2,
            -0.11, 1.48, 0.25,

            /* RIGHT */
            //right-bottom
            1.45, -0.95, 0.25,
            1.56, -0.76, 0.25,
            1.56, -0.76, 2,
            1.56, -0.76, 2,
            1.45, -0.95, 2,
            1.45, -0.95, 0.25,

            1.45, -0.95, 0.25,
            1.25, -0.83, 0.25,
            1.36, -0.65, 0.25,
            1.56, -0.76, 0.25,
            1.36, -0.65, 0.25,
            1.45, -0.95, 0.25,

            1.36, -0.65, 0.25,
            1.25, -0.83, 0.25,
            1.25, -0.83, 2,
            1.25, -0.83, 2,
            1.36, -0.65, 2,
            1.36, -0.65, 0.25,

            1.45, -0.95, 2,
            1.25, -0.83, 2,
            1.36, -0.65, 2,
            1.56, -0.76, 2,
            1.36, -0.65, 2,
            1.45, -0.95, 2,          
            
            1.25, -0.83, 0.25,
            1.45, -0.95, 0.25,
            1.45, -0.95, 2,
            1.45, -0.95, 2,
            1.25, -0.83, 2,
            1.25, -0.83, 0.25,

            1.36, -0.65, 0.25,
            1.56, -0.76, 0.25,
            1.56, -0.76, 2,
            1.56, -0.76, 2,
            1.36, -0.65, 2,
            1.36, -0.65, 0.25,

            // right-upper
            1.45, 0.95, 0.25,
            1.56, 0.76, 0.25,
            1.56, 0.76, 2,
            1.56, 0.76, 2,
            1.45, 0.95, 2,
            1.45, 0.95, 0.25,

            1.45, 0.95, 0.25,
            1.25, 0.83, 0.25,
            1.36, 0.65, 0.25,
            1.56, 0.76, 0.25,
            1.36, 0.65, 0.25,
            1.45, 0.95, 0.25,

            1.36, 0.65, 0.25,
            1.25, 0.83, 0.25,
            1.25, 0.83, 2,
            1.25, 0.83, 2,
            1.36, 0.65, 2,
            1.36, 0.65, 0.25,

            1.45, 0.95, 2,
            1.25, 0.83, 2,
            1.36, 0.65, 2,
            1.56, 0.76, 2,
            1.36, 0.65, 2,
            1.45, 0.95, 2,          
            
            1.25, 0.83, 0.25,
            1.45, 0.95, 0.25,
            1.45, 0.95, 2,
            1.45, 0.95, 2,
            1.25, 0.83, 2,
            1.25, 0.83, 0.25,

            1.36, 0.65, 0.25,
            1.56, 0.76, 0.25,
            1.56, 0.76, 2,
            1.56, 0.76, 2,
            1.36, 0.65, 2,
            1.36, 0.65, 0.25,

            /* LEFT */
            // left-bottom
            -1.35, -0.67, 0.25,
            -1.24, -0.85, 0.25,
            -1.24, -0.85, 2,
            -1.24, -0.85, 2,
            -1.35, -0.67, 2,
            -1.35, -0.67, 0.25,

            -1.35, -0.67, 0.25,
            -1.55, -0.79, 0.25,
            -1.44, -0.97, 0.25,
            -1.24, -0.85, 0.25,
            -1.44, -0.97, 0.25,
            -1.35, -0.67, 0.25,

            -1.44, -0.97, 0.25,
            -1.55, -0.79, 0.25,
            -1.55, -0.79, 2,
            -1.55, -0.79, 2,
            -1.44, -0.97, 2,
            -1.44, -0.97, 0.25,

            -1.35, -0.67, 2,
            -1.55, -0.79, 2,
            -1.44, -0.97, 2,
            -1.24, -0.85, 2,
            -1.44, -0.97, 2,
            -1.35, -0.67, 2,     
            
            -1.55, -0.79, 0.25,
            -1.35, -0.67, 0.25,
            -1.35, -0.67, 2,
            -1.35, -0.67, 2,
            -1.55, -0.79, 2,
            -1.55, -0.79, 0.25,

            -1.44, -0.97, 0.25,
            -1.24, -0.85, 0.25,
            -1.24, -0.85, 2,
            -1.24, -0.85, 2,
            -1.44, -0.97, 2,
            -1.44, -0.97, 0.25,

            // left-upper
            -1.35, 0.67, 0.25,
            -1.24, 0.85, 0.25,
            -1.24, 0.85, 2,
            -1.24, 0.85, 2,
            -1.35, 0.67, 2,
            -1.35, 0.67, 0.25,

            -1.35, 0.67, 0.25,
            -1.55, 0.79, 0.25,
            -1.44, 0.97, 0.25,
            -1.24, 0.85, 0.25,
            -1.44, 0.97, 0.25,
            -1.35, 0.67, 0.25,

            -1.44, 0.97, 0.25,
            -1.55, 0.79, 0.25,
            -1.55, 0.79, 2,
            -1.55, 0.79, 2,
            -1.44, 0.97, 2,
            -1.44, 0.97, 0.25,

            -1.35, 0.67, 2,
            -1.55, 0.79, 2,
            -1.44, 0.97, 2,
            -1.24, 0.85, 2,
            -1.44, 0.97, 2,
            -1.35, 0.67, 2,     
            
            -1.55, 0.79, 0.25,
            -1.35, 0.67, 0.25,
            -1.35, 0.67, 2,
            -1.35, 0.67, 2,
            -1.55, 0.79, 2,
            -1.55, 0.79, 0.25,

            -1.44, 0.97, 0.25,
            -1.24, 0.85, 0.25,
            -1.24, 0.85, 2,
            -1.24, 0.85, 2,
            -1.44, 0.97, 2,
            -1.44, 0.97, 0.25,
];
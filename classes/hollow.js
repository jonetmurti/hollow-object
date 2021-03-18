class Hollow
{
    constructor() {
        this.examplecube = [
                // top
                -1, 1, -1,
                1, 1, -1,
                1, 1, 1,
                -1, 1, -1,
                1, 1, 1,
                -1, 1, 1,
            
                // bottom
                -1, -1, -1,
                1, -1, 1,
                1, -1, -1,
                -1, -1, -1,
                -1, -1, 1,
                1, -1, 1,
            
                //front
                -1,-1,-1,
                1,-1,-1,
                1,1,-1,
                1,1,-1,
                -1,1,-1,
                -1,-1,-1,
            
                //back
                -1,-1,1,
                1,1,1,
                1,-1,1,
                1,1,1,
                -1,-1,1,
                -1,1,1,
                
                // right
                1, -1, -1,
                1, -1, 1,
                1, 1, 1,
                1, -1, -1,
                1, 1, 1,
                1, 1, -1,
            
                // left
                -1, -1, -1,
                -1, 1, 1,
                -1, -1, 1,
                -1, -1, -1,
                -1, 1, -1,
                -1, 1, 1
        ];
        this.hollowcubic = [
        //Cube down front
            -1	,	-1	,	0	,
            1	,	-1	,	0	,
            1	,	-0.75	,	0	,
            -1	,	-0.75	,	0	,
            -1	,	-1	,	0	,
            1	,	-0.75	,	0	,


            1	,	-1	,	0	,
            1	,	-1	,	0.25	,
            1	,	-0.75	,	0.25	,
            1	,	-0.75	,	0	,
            1	,	-1	,	0	,
            1	,	-0.75	,	0.25	,

            1	,	-1	,	0.25	,
            -1	,	-1	,	0.25	,
            -1	,	-0.75	,	0.25	,
            1	,	-0.75	,	0.25	,
            1	,	-1	,	0.25	,
            -1	,	-0.75	,	0.25	,

            -1	,	-1	,	0.25	,
            -1	,	-1	,	0	,
            -1	,	-0.75	,	0	,
            -1	,	-0.75	,	0.25,
            -1	,	-1	,	0.25	,
            -1	,	-0.75	,	0	,

            -1	,	-0.75	,	0	,
            1	,	-0.75	,	0	,
            1	,	-0.75	,	0.25	,
            -1	,	-0.75	,	0.25	,
            -1	,	-0.75	,	0	,
            1	,	-0.75	,	0.25,	

            1	,	-1	,	0	,
            -1	,	-1	,	0	,
            -1	,	-1	,	0.25	,
            1	,	-1	,	0.25	,
            1	,	-1	,	0	,
            -1	,	-1	,	0.25	,

            //Cube down back
            -1	,	-1	,	0.75	,
            1	,	-1	,	0.75	,
            1	,	-0.75	,	0.75	,
            -1	,	-0.75	,	0.75	,
            -1	,	-1	,	0.75	,
            1	,	-0.75	,	0.75	,

            1	,	-1	,	0.75	,
            1	,	-1	,	1	,
            1	,	-0.75	,	1	,
            1	,	-0.75	,	0.75	,
            1	,	-1	,	0.75	,
            1	,	-0.75	,	1	,

                                
            1	,	-1	,	1	,
            -1	,	-1	,	1	,
            -1	,	-0.75	,	1	,
            1	,	-0.75	,	1	,
            1	,	-1	,	1	,
            -1	,	-0.75	,	1	,					
                                
            -1	,	-1	,	1	,
            -1	,	-1	,	0.75	,
            -1	,	-0.75	,	0.75	,
            -1	,	-0.75	,	1,	
            -1	,	-1	,	1	,
            -1	,	-0.75	,	0.75	,

            -1	,	-0.75	,	0.75	,
            1	,	-0.75	,	0.75	,
            1	,	-0.75	,	1	,
            -1	,	-0.75	,	1	,
            -1	,	-0.75	,	0.75	,
            1	,	-0.75	,	1	,

            1	,	-1	,	0.75	,
            -1	,	-1	,	0.75	,
            -1	,	-1	,	1	,
            1	,	-1	,	1	,
            1	,	-1	,	0.75	,
            -1	,	-1	,	1	,

            //Cube up front
            -1	,	0.75	,	0	,
            1	,	0.75	,	0	,
            1	,	1	,	0	,
            -1	,	1	,	0	,
            -1	,	0.75	,	0	,					
            1	,	1	,	0	,

            1	,	0.75	,	0	,
            1	,	0.75	,	0.25	,
            1	,	1	,	0.25	,
            1	,	1	,	0	,
            1	,	0.75	,	0	,
            1	,	1	,	0.25	,					
                                
            1	,	0.75	,	0.25	,
            -1	,	0.75	,	0.25	,
            -1	,	1	,	0.25	,
            1	,	1	,	0.25	,
            1	,	0.75	,	0.25	,					
            -1	,	1	,	0.25	,

            -1	,	0.75	,	0.25	,
            -1	,	0.75	,	0	,
            -1	,	1	,	0	,
            -1	,	1	,	0.25	,
            -1	,	0.75	,	0.25	,
            -1	,	1	,	0	,

            -1	,	1	,	0	,
            1	,	1	,	0	,
            1	,	1	,	0.25	,
            -1	,	1	,	0.25	,
            -1	,	1	,	0	,
            1	,	1	,	0.25	,

            1	,	0.75	,	0	,
            -1	,	0.75	,	0	,
            -1	,	0.75	,	0.25	,
            1	,	0.75	,	0.25	,
            1	,	0.75	,	0	,
            -1	,	0.75	,	0.25	,

            //Cube up back
            -1	,	0.75	,	0.75	,
            1	,	0.75	,	0.75	,
            1	,	1	,	0.75	,
            -1	,	1	,	0.75	,
            -1	,	0.75	,	0.75	,
            1	,	1	,	0.75	,					
                                
            1	,	0.75	,	0.75	,
            1	,	0.75	,	1	,
            1	,	1	,	1	,
            1	,	1	,	0.75	,
            1	,	0.75	,	0.75	,					
            1	,	1	,	1	,

            1	,	0.75	,	1	,
            -1	,	0.75	,	1	,
            -1	,	1	,	1	,
            1	,	1	,	1	,
            1	,	0.75	,	1	,
            -1	,	1	,	1	,					
                                
            -1	,	0.75	,	1	,
            -1	,	0.75	,	0.75	,
            -1	,	1	,	0.75	,
            -1	,	1	,	1	,
            -1	,	0.75	,	1	,
            -1	,	1	,	0.75	,

            -1	,	1	,	0.75	,
            1	,	1	,	0.75	,
            1	,	1	,	1	,
            -1	,	1	,	1	,
            -1	,	1	,	0.75	,
            1	,	1	,	1	,

            1	,	0.75	,	0.75	,
            -1	,	0.75	,	0.75	,
            -1	,	0.75	,	1	,
            1	,	0.75	,	1	,
            1	,	0.75	,	0.75	,
            -1	,	0.75	,	1	,



            ];
    }
}
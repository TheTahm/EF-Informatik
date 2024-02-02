![](Blog_images\3D_Würfel.png)
```scad
module L() {
        union() {
            cube([8, 8, 8]);
            translate([8, 0, 0])
                cube([8, 8, 8]);
            translate([16, 0, 0])
                cube([8, 8, 8]);
            translate([0, 8, 0])
                cube([8, 8, 8]);
           }
       }
       
module  T()  {
        union() {
                cube([8, 8, 8]);
            translate([8, 0, 0])
                cube([8, 8, 8]);
            translate([0, 8, 0])
                cube([8, 8, 8]);
            translate([0, 0, 8])
                cube([8, 8, 8]);
        }
    }
 
 module  t()  {
        union() {
                cube([8, 8, 8]);
            translate([8, 0, 0])
                cube([8, 8, 8]);
            translate([0, 8, 0])
                cube([8, 8, 8]);
            
        }
    }   
       
 module  s()  {
        union() {
                cube([8, 8, 8]);
            translate([8, 0, 0])
                cube([8, 8, 8]);
            translate([0, 8, 0])
                cube([8, 8, 8]);
            translate([8, 0, 8])
                cube([8, 8, 8]);
            
        }
    }     
   
  module  z()  {
      translate([8, 0, 0])
        union() {
                cube([8, 8, 8]);
            translate([8, 0, 0])
                cube([8, 8, 8]);
            translate([0, 8, 0])
                cube([8, 8, 8]);
            translate([-8, 8, 0])
                cube([8, 8, 8]);
            
        }
    }   
   
translate([30,0,0])       
    T();
translate([50,0,0])
        t();
translate([0,30,0])
    s();
translate([0,60,0])
    rotate([90,0,0])
        z();
L();
```
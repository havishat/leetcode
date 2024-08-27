var fixedPoint = function (A) {
            //Run binary search
            var lo = 0;
            var hi = A.length - 1;

            while (lo <= hi){
               var  mi = lo + (hi - lo) / 2;
                if (A[mi] < mi) {
                  lo = mi + 1;
                } else {
                  hi = mi -1;
                } 
            }

            return lo <= A.length - 1 && A[lo] == lo ? lo : -1;
}

console.log(fixedPoint([-10,-5,0,3,7]))

//! ScriptLibrary2.debug.js
//

(function() {

Type.registerNamespace('ScriptLibrary2');

////////////////////////////////////////////////////////////////////////////////
// ScriptLibrary2.Euclid

ScriptLibrary2.Euclid = function ScriptLibrary2_Euclid() {
    /// <summary>
    /// A class using Euclid's algorithm for providing the greatest common divisor.
    /// </summary>
}
ScriptLibrary2.Euclid.prototype = {
    
    GCD: function ScriptLibrary2_Euclid$GCD(x, y) {
        /// <summary>
        /// Finds the greatest common divisor.
        /// </summary>
        /// <param name="x" type="Number" integer="true">
        /// The first number.  Must be larger than y.
        /// </param>
        /// <param name="y" type="Number" integer="true">
        /// The second number
        /// </param>
        /// <returns type="Number" integer="true"></returns>
        while (!!x && !!y) {
            if (x > y) {
                x %= y;
            }
            else {
                x %= y;
            }
        }
        if (!x) {
            return y;
        }
        else {
            return x;
        }
    }
}


ScriptLibrary2.Euclid.registerClass('ScriptLibrary2.Euclid');
})();

//! This script was generated using Script# v0.7.4.0

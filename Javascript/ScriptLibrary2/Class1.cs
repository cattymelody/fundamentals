using System;
using System.Collections.Generic;
using System.Html;

namespace ScriptLibrary2
{

    /// <summary>
    /// A class using Euclid's algorithm for providing the greatest common divisor.
    /// </summary>
    public class Euclid
    {
        #region Public Methods

        /// <summary>
        /// Finds the greatest common divisor.
        /// </summary>
        /// <param name="x">The first number.  Must be larger than y.</param>
        /// <param name="y">The second number</param>
        /// <returns>The greatest common divisor between the two integers supplied.</returns>
        public int GCD(int x, int y)
        {
            while (x != 0 && y != 0)
            {
                if (x > y)
                {
                    x %= y;
                }
                else
                {
                    x %= y;
                }
            }

            if (x == 0)
            {
                return y;
            }
            else
            {
                return x;
            }
        }
    }

        #endregion
}

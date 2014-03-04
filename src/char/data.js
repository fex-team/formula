/**
 * 字符与pathdata映射
 */

define( function ( require, exports, module ) {

    return {

        // 标准字体
        std: {

            // number
            0: require( "char/data/number/0" ),
            1: require( "char/data/number/1" ),
            2: require( "char/data/number/2" ),
            3: require( "char/data/number/3" ),
            4: require( "char/data/number/4" ),
            5: require( "char/data/number/5" ),
            6: require( "char/data/number/6" ),
            7: require( "char/data/number/7" ),
            8: require( "char/data/number/8" ),
            9: require( "char/data/number/9" ),

            // character
            a: require( "char/data/character/a" ),
            b: require( "char/data/character/b" ),
            c: require( "char/data/character/c" ),
            d: require( "char/data/character/d" ),
            e: require( "char/data/character/e" ),
            f: require( "char/data/character/f" ),
            g: require( "char/data/character/g" ),
            h: require( "char/data/character/h" ),
            i: require( "char/data/character/i" ),
            j: require( "char/data/character/j" ),
            k: require( "char/data/character/k" ),
            l: require( "char/data/character/l" ),
            m: require( "char/data/character/m" ),
            n: require( "char/data/character/n" ),
            o: require( "char/data/character/o" ),
            p: require( "char/data/character/p" ),
            q: require( "char/data/character/q" ),
            r: require( "char/data/character/r" ),
            s: require( "char/data/character/s" ),
            t: require( "char/data/character/t" ),
            u: require( "char/data/character/u" ),
            v: require( "char/data/character/v" ),
            w: require( "char/data/character/w" ),
            x: require( "char/data/character/x" ),
            y: require( "char/data/character/y" ),
            z: require( "char/data/character/z" ),

            A: require( "char/data/character/ua" ),
            B: require( "char/data/character/ub" ),
            C: require( "char/data/character/uc" ),
            D: require( "char/data/character/ud" ),
            E: require( "char/data/character/ue" ),
            F: require( "char/data/character/uf" ),
            G: require( "char/data/character/ug" ),
            H: require( "char/data/character/uh" ),
            I: require( "char/data/character/ui" ),
            J: require( "char/data/character/uj" ),
            K: require( "char/data/character/uk" ),
            L: require( "char/data/character/ul" ),
            M: require( "char/data/character/um" ),
            N: require( "char/data/character/un" ),
            O: require( "char/data/character/uo" ),
            P: require( "char/data/character/up" ),
            Q: require( "char/data/character/uq" ),
            R: require( "char/data/character/ur" ),
            S: require( "char/data/character/us" ),
            T: require( "char/data/character/ut" ),
            U: require( "char/data/character/uu" ),
            V: require( "char/data/character/uv" ),
            W: require( "char/data/character/uw" ),
            X: require( "char/data/character/ux" ),
            Y: require( "char/data/character/uy" ),
            Z: require( "char/data/character/uz" ),

            // symbol
            "(": require( "char/data/symbol/l-parentheses" ),
            ")": require( "char/data/symbol/r-parentheses" ),
            "-": require( "char/data/symbol/negative" ),
            "+": require( "char/data/symbol/positive" ),
            "|": require( "char/data/symbol/vertical" ),
            "/": require( "char/data/symbol/slash" ),
            "!": require( "char/data/symbol/exclamation" ),
            "[": require( "char/data/symbol/l-brackets" ),
            "]": require( "char/data/symbol/r-brackets" ),
            ":": require( "char/data/symbol/colon" ),
            "'": require( "char/data/symbol/quotation" ),
            "<": require( "char/data/symbol/lt" ),
            ">": require( "char/data/symbol/gt" ),
            ".": require( "char/data/symbol/point" ),
            "{": require( "char/data/symbol/l-braces" ),
            "}": require( "char/data/symbol/r-braces" ),
            ",": require( "char/data/symbol/comma" ),

            "\\infty\\": require( "char/data/symbol/infty" ),
            "\u221E": require( "char/data/symbol/infty" ),

            "\\to\\": require( "char/data/symbol/to" ),

            // greek
            "\u03B1": require( "char/data/greek/alpha" ),
            "\\alpha\\": require( "char/data/greek/alpha" ),

            "\u03B2": require( "char/data/greek/alpha" ),
            "\\beta\\": require( "char/data/greek/beta" ),

            "\u03B3": require( "char/data/greek/gamma" ),
            "\\gamma\\": require( "char/data/greek/gamma" ),

            "\u03B4": require( "char/data/greek/delta" ),
            "\\delta\\": require( "char/data/greek/delta" ),

            "\u03B5": require( "char/data/greek/epsilon" ),
            "\\epsilon\\": require( "char/data/greek/epsilon" ),

            "\u03B6": require( "char/data/greek/zeta" ),
            "\\zeta\\": require( "char/data/greek/zeta" ),

            "\u03B7": require( "char/data/greek/eta" ),
            "\\eta\\": require( "char/data/greek/eta" ),

            "\u03B8": require( "char/data/greek/theta" ),
            "\\theta\\": require( "char/data/greek/theta" ),

            "\u03B9": require( "char/data/greek/iota" ),
            "\\iota\\": require( "char/data/greek/iota" ),

            "\u03BA": require( "char/data/greek/kappa" ),
            "\\kappa\\": require( "char/data/greek/kappa" ),

            "\u03BB": require( "char/data/greek/lambda" ),
            "\\lambda\\": require( "char/data/greek/lambda" ),

            "\u03BC": require( "char/data/greek/mu" ),
            "\\mu\\": require( "char/data/greek/mu" ),

            "\u03BD": require( "char/data/greek/nu" ),
            "\\nu\\": require( "char/data/greek/nu" ),

            "\u03BE": require( "char/data/greek/xi" ),
            "\\xi\\": require( "char/data/greek/xi" ),

            "\u03BF": require( "char/data/character/o" ),
            "\\omicron\\": require( "char/data/character/o" ),

            "\u03C0": require( "char/data/greek/pi" ),
            "\\pi\\": require( "char/data/greek/pi" ),

            "\u03C1": require( "char/data/greek/rho" ),
            "\\rho\\": require( "char/data/greek/rho" ),

            "\u03C3": require( "char/data/greek/sigma" ),
            "\\sigma\\": require( "char/data/greek/sigma" ),

            "\u03C4": require( "char/data/greek/tau" ),
            "\\tau\\": require( "char/data/greek/tau" ),

            "\u03C5": require( "char/data/greek/upsilon" ),
            "\\upsilon\\": require( "char/data/greek/upsilon" ),

            "\u03C6": require( "char/data/greek/phi" ),
            "\\phi\\": require( "char/data/greek/phi" ),

            "\u03C7": require( "char/data/greek/chi" ),
            "\\chi\\": require( "char/data/greek/chi" ),

            "\u03C8": require( "char/data/greek/psi" ),
            "\\psi\\": require( "char/data/greek/psi" ),

            "\u03C9": require( "char/data/greek/omega" ),
            "\\omega\\": require( "char/data/greek/omega" ),

            "\u0391": require( "char/data/roman/ua" ),
            "\\Alpha\\": require( "char/data/roman/ua" ),

            "\u0392": require( "char/data/roman/ub" ),
            "\\Beta\\": require( "char/data/roman/ub" ),

            "\u0393": require( "char/data/greek/u-gamma" ),
            "\\Gamma\\": require( "char/data/greek/u-gamma" ),

            "\u0394": require( "char/data/greek/u-delta" ),
            "\\Delta\\": require( "char/data/greek/u-delta" ),

            "\u0395": require( "char/data/roman/ue" ),
            "\\Epsilon\\": require( "char/data/roman/ue" ),

            "\u0396": require( "char/data/roman/uz" ),
            "\\Zeta\\": require( "char/data/roman/uz" ),

            "\u0397": require( "char/data/roman/uh" ),
            "\\Eta\\": require( "char/data/roman/uh" ),

            "\u0398": require( "char/data/greek/u-theta" ),
            "\\Theta\\": require( "char/data/greek/u-theta" ),

            "\u0399": require( "char/data/roman/ui" ),
            "\\Iota\\": require( "char/data/roman/ui" ),

            "\u039A": require( "char/data/roman/uk" ),
            "\\Kappa\\": require( "char/data/roman/uk" ),

            "\u039B": require( "char/data/greek/u-lambda" ),
            "\\Lambda\\": require( "char/data/greek/u-lambda" ),

            "\u039C": require( "char/data/roman/um" ),
            "\\Mu\\": require( "char/data/roman/um" ),

            "\u039D": require( "char/data/roman/un" ),
            "\\Nu\\": require( "char/data/roman/un" ),

            "\u039E": require( "char/data/greek/u-xi" ),
            "\\Xi\\": require( "char/data/greek/u-xi" ),

            "\u039F": require( "char/data/roman/uo" ),
            "\\Omicron\\": require( "char/data/roman/uo" ),

            "\u03A0": require( "char/data/greek/u-pi" ),
            "\\Pi\\": require( "char/data/greek/u-pi" ),

            "\u03A1": require( "char/data/roman/up" ),
            "\\Rho\\": require( "char/data/roman/up" ),

            "\u03A3": require( "char/data/greek/u-sigma" ),
            "\\Sigma\\": require( "char/data/greek/u-sigma" ),

            "\u03A4": require( "char/data/roman/ut" ),
            "\\Tau\\": require( "char/data/roman/ut" ),

            "\u03A5": require( "char/data/greek/u-upsilon" ),
            "\\Upsilon\\": require( "char/data/greek/u-upsilon" ),

            "\u03A6": require( "char/data/greek/u-phi" ),
            "\\Phi\\": require( "char/data/greek/u-phi" ),

            "\u03A7": require( "char/data/roman/ux" ),
            "\\Chi\\": require( "char/data/roman/ux" ),

            "\u03A8": require( "char/data/greek/u-psi" ),
            "\\Psi\\": require( "char/data/greek/u-psi" ),

            "\u03A9": require( "char/data/greek/u-omega" ),
            "\\Omega\\": require( "char/data/greek/u-omega" )

        },

        // 罗马字体
        roman: {
            a: require( "char/data/roman/a" ),
            b: require( "char/data/roman/b" ),
            c: require( "char/data/roman/c" ),
            d: require( "char/data/roman/d" ),
            e: require( "char/data/roman/e" ),
            f: require( "char/data/roman/f" ),
            g: require( "char/data/roman/g" ),
            h: require( "char/data/roman/h" ),
            i: require( "char/data/roman/i" ),
            j: require( "char/data/roman/j" ),
            k: require( "char/data/roman/k" ),
            l: require( "char/data/roman/l" ),
            m: require( "char/data/roman/m" ),
            n: require( "char/data/roman/n" ),
            o: require( "char/data/roman/o" ),
            p: require( "char/data/roman/p" ),
            q: require( "char/data/roman/q" ),
            r: require( "char/data/roman/r" ),
            s: require( "char/data/roman/s" ),
            t: require( "char/data/roman/t" ),
            u: require( "char/data/roman/u" ),
            v: require( "char/data/roman/v" ),
            w: require( "char/data/roman/w" ),
            x: require( "char/data/roman/x" ),
            y: require( "char/data/roman/y" ),
            z: require( "char/data/roman/z" ),

            A: require( "char/data/roman/ua" ),
            B: require( "char/data/roman/ub" ),
            C: require( "char/data/roman/uc" ),
            D: require( "char/data/roman/ud" ),
            E: require( "char/data/roman/ue" ),
            F: require( "char/data/roman/uf" ),
            G: require( "char/data/roman/ug" ),
            H: require( "char/data/roman/uh" ),
            I: require( "char/data/roman/ui" ),
            J: require( "char/data/roman/uj" ),
            K: require( "char/data/roman/uk" ),
            L: require( "char/data/roman/ul" ),
            M: require( "char/data/roman/um" ),
            N: require( "char/data/roman/un" ),
            O: require( "char/data/roman/uo" ),
            P: require( "char/data/roman/up" ),
            Q: require( "char/data/roman/uq" ),
            R: require( "char/data/roman/ur" ),
            S: require( "char/data/roman/us" ),
            T: require( "char/data/roman/ut" ),
            U: require( "char/data/roman/uu" ),
            V: require( "char/data/roman/uv" ),
            W: require( "char/data/roman/uw" ),
            X: require( "char/data/roman/ux" ),
            Y: require( "char/data/roman/uy" ),
            Z: require( "char/data/roman/uz" )
        }

    };

} );
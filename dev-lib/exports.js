/**
 * 模块暴露
 */

( function ( global ) {

    define( 'kf.start', function ( require ) {

        global.kf = {

            // base
            Formula: require( "formula" ),

            // expression
            TextExpression: require( "expression/text" ),
            RomanTextExpression: require( "expression/roman" ),
            EmptyExpression: require( "expression/empty" ),
            CombinationExpression: require( "expression/compound-exp/combination" ),
            FunctionExpression: require( "expression/compound-exp/func" ),

            AdditionExpression: require( "expression/compound-exp/binary-exp/addition" ),
            AsteriskExpression: require( "expression/compound-exp/binary-exp/asterisk" ),
            DivisionExpression: require( "expression/compound-exp/binary-exp/division" ),
            DotExpression: require( "expression/compound-exp/binary-exp/dot" ),
            DotsExpression: require( "expression/compound-exp/binary-exp/dots" ),
            FractionExpression: require( "expression/compound-exp/binary-exp/fraction" ),
            IntegrationExpression: require( "expression/compound-exp/integration" ),
            MultiplicationExpression: require( "expression/compound-exp/binary-exp/multiplication" ),
            RadicalExpression: require( "expression/compound-exp/binary-exp/radical" ),
            ScriptExpression: require( "expression/compound-exp/script" ),
            SuperscriptExpression: require( "expression/compound-exp/binary-exp/superscript" ),
            SubscriptExpression: require( "expression/compound-exp/binary-exp/subscript" ),
            SubtractionExpression: require( "expression/compound-exp/binary-exp/subtraction" ),
            SummationExpression: require( "expression/compound-exp/summation" ),
            PlusMinusExpression: require( "expression/compound-exp/binary-exp/plus-minus" ),
            MinusPlusExpression: require( "expression/compound-exp/binary-exp/minus-plus"),
            ParallelExpression: require( "expression/compound-exp/binary-exp/parallel"),

            // Brackets expressoin
            BracketsExpression: require( "expression/compound-exp/brackets" ),

            /********* relational expression start *********/

            LtExpression: require( "expression/compound-exp/binary-exp/relational/lt" ),
            GtExpression: require( "expression/compound-exp/binary-exp/relational/gt" ),
            LeqExpression: require( "expression/compound-exp/binary-exp/relational/leq" ),
            GeqExpression: require( "expression/compound-exp/binary-exp/relational/geq" ),
            SimExpression: require( "expression/compound-exp/binary-exp/relational/sim" ),
            SimeqExpression: require( "expression/compound-exp/binary-exp/relational/simeq" ),
            ApproxExpression: require( "expression/compound-exp/binary-exp/relational/approx" ),
            LiExpression: require( "expression/compound-exp/binary-exp/relational/ll" ),
            GgExpression: require( "expression/compound-exp/binary-exp/relational/gg" ),
            EqExpression: require( "expression/compound-exp/binary-exp/relational/eq" ),
            EquivExpression: require( "expression/compound-exp/binary-exp/relational/equiv" ),

            // set expression
            CapExpression: require( "expression/compound-exp/binary-exp/relational/set/cap" ),
            CupExpression: require( "expression/compound-exp/binary-exp/relational/set/cup" ),
            SubsetExpression: require( "expression/compound-exp/binary-exp/relational/set/subset" ),
            SupsetExpression: require( "expression/compound-exp/binary-exp/relational/set/supset" ),
            SubseteqExpression: require( "expression/compound-exp/binary-exp/relational/set/subseteq" ),
            SupseteqExpression: require( "expression/compound-exp/binary-exp/relational/set/supseteq" ),
            InExpression: require( "expression/compound-exp/binary-exp/relational/set/in" ),
            NiExpression: require( "expression/compound-exp/binary-exp/relational/set/ni" ),
            SqsubsetExpression: require( "expression/compound-exp/binary-exp/relational/set/sqsubset" ),
            SqsupsetExpression: require( "expression/compound-exp/binary-exp/relational/set/sqsupset" ),
            SqsupseteqExpression: require( "expression/compound-exp/binary-exp/relational/set/sqsupseteq" ),
            SqsubseteqExpression: require( "expression/compound-exp/binary-exp/relational/set/sqsubseteq" ),
            SqcapExpression: require( "expression/compound-exp/binary-exp/relational/set/sqcap" ),
            SqcupExpression: require( "expression/compound-exp/binary-exp/relational/set/sqcup" ),

            // logical
            WedgeExpression: require( "expression/compound-exp/binary-exp/relational/logical/wedge" ),
            VeeExpression: require( "expression/compound-exp/binary-exp/relational/logical/vee" ),
            MidExpression: require( "expression/compound-exp/binary-exp/relational/logical/mid" ),

            // not
            NotEqExpression: require( "expression/compound-exp/binary-exp/relational/not/not-eq" ),
            NotEquivExpression: require( "expression/compound-exp/binary-exp/relational/not/not-equiv" ),
            NotLtExpression: require( "expression/compound-exp/binary-exp/relational/not/not-lt" ),
            NotGtExpression: require( "expression/compound-exp/binary-exp/relational/not/not-gt" ),
            NotLeExpression: require( "expression/compound-exp/binary-exp/relational/not/not-le" ),
            NotGeExpression: require( "expression/compound-exp/binary-exp/relational/not/not-ge" ),
            NotSubseteqExpression: require( "expression/compound-exp/binary-exp/relational/not/not-subseteq" ),
            NotSupseteqExpression: require( "expression/compound-exp/binary-exp/relational/not/not-supseteq" ),
            NotSimExpression: require( "expression/compound-exp/binary-exp/relational/not/not-sim" ),
            NotInExpression: require( "expression/compound-exp/binary-exp/relational/not/not-in" ),
            NotCongExpression: require( "expression/compound-exp/binary-exp/relational/not/not-cong" ),

            /********* relational expression end *********/

        };

    } );

    // build环境中才含有use
    try {
        use( 'kf.start' );
    } catch ( e ) {
    }

} )( this );
